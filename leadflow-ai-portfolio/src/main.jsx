import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/app.css'
import { sampleLeads } from './data/sampleLeads'
import { useLocalStorage } from './hooks/useLocalStorage'
import { calculateLeadScore, getTemperature } from './utils/leadScoring'
import { createFollowUpMessage, toneOptions } from './utils/messageTemplates'
import { Dashboard } from './components/Dashboard'
import { LeadList } from './components/LeadList'
import { Pipeline } from './components/Pipeline'
import { MessageStudio } from './components/MessageStudio'
import { BottomNav } from './components/BottomNav'
import { LeadForm } from './components/LeadForm'
import { LeadDetail } from './components/LeadDetail'
import { AboutScreen } from './components/AboutScreen'
import { Onboarding } from './components/Onboarding'
import { ToastStack } from './components/Toast'
import { AppSkeleton } from './components/Skeletons'

function App() {
  const [leads, setLeads] = useLocalStorage('leadflow-ai-leads-v22', sampleLeads)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [isAdding, setIsAdding] = useState(false)
  const [selectedLeadId, setSelectedLeadId] = useState(undefined)
  const [selectedTone, setSelectedTone] = useState(toneOptions[0].id)
  const [theme, setTheme] = useLocalStorage('leadflow-ai-theme-v24', 'light')
  const [hasSeenOnboarding, setHasSeenOnboarding] = useLocalStorage('leadflow-ai-onboarding-v24', false)
  const [isBooting, setIsBooting] = useState(true)
  const [toasts, setToasts] = useState([])

  const showToast = useCallback((message, type = 'success') => {
    const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`
    setToasts((current) => [...current, { id, message, type }])
    window.setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id))
    }, 2200)
  }, [])

  const enrichedLeads = useMemo(() => {
    return leads.map((lead) => {
      const score = calculateLeadScore(lead)
      return {
        ...lead,
        score,
        temperature: getTemperature(score)
      }
    })
  }, [leads])

  const selectedLead = selectedLeadId ? enrichedLeads.find((lead) => lead.id === selectedLeadId) : undefined
  const messageLead = selectedLead || enrichedLeads[0]

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    const timer = window.setTimeout(() => setIsBooting(false), 520)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedLeadId(undefined)
        setIsAdding(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const addLead = (payload) => {
    const nextLead = {
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      createdAt: new Date().toISOString(),
      status: 'new',
      ...payload
    }
    setLeads([nextLead, ...leads])
    setSelectedLeadId(nextLead.id)
    setIsAdding(false)
    setActiveTab('leads')
    showToast('Đã lưu khách mới vào demo offline')
  }

  const updateLead = (id, patch) => {
    setLeads(leads.map((lead) => (lead.id === id ? { ...lead, ...patch } : lead)))
    if (patch.status) showToast('Đã cập nhật trạng thái pipeline')
  }

  const deleteLead = (id) => {
    const next = leads.filter((lead) => lead.id !== id)
    setLeads(next)
    setSelectedLeadId(undefined)
    showToast('Đã xoá khách khỏi dữ liệu demo', 'warning')
  }

  const resetDemoData = () => {
    setLeads(sampleLeads)
    setSelectedLeadId(undefined)
    showToast('Đã khôi phục dữ liệu demo')
  }

  const importLeads = (incomingLeads) => {
    const normalized = incomingLeads.map((lead, index) => ({
      id: lead.id || `imported-${Date.now()}-${index}`,
      createdAt: lead.createdAt || new Date().toISOString(),
      status: lead.status || 'new',
      name: lead.name || `Khách ${index + 1}`,
      phone: lead.phone || '',
      source: lead.source || 'Nhập từ JSON',
      businessType: lead.businessType || 'Khác',
      need: lead.need || lead.note || 'Chưa có nhu cầu cụ thể',
      budget: lead.budget || '',
      dealValue: lead.dealValue || lead.budget || '',
      timeline: lead.timeline || '',
      note: lead.note || ''
    }))
    setLeads(normalized)
    setSelectedLeadId(undefined)
    setActiveTab('about')
    showToast('Đã import dữ liệu demo từ JSON')
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setIsAdding(false)
    if (tab !== 'leads') {
      setSelectedLeadId(undefined)
    }
  }

  const renderScreen = () => {
    if (isBooting && hasSeenOnboarding) return <AppSkeleton />

    if (activeTab === 'dashboard') {
      return <Dashboard leads={enrichedLeads} onAdd={() => setIsAdding(true)} onOpenLead={(id) => { setSelectedLeadId(id); setActiveTab('leads') }} />
    }

    if (activeTab === 'leads') {
      return (
        <LeadList
          leads={enrichedLeads}
          selectedLeadId={selectedLead?.id}
          onSelectLead={setSelectedLeadId}
          onAdd={() => setIsAdding(true)}
        />
      )
    }

    if (activeTab === 'pipeline') {
      return <Pipeline leads={enrichedLeads} onMoveLead={updateLead} onOpenLead={(id) => { setSelectedLeadId(id); setActiveTab('leads') }} />
    }

    if (activeTab === 'messages') {
      return (
        <MessageStudio
          leads={enrichedLeads}
          selectedLead={messageLead}
          selectedTone={selectedTone}
          onToneChange={setSelectedTone}
          onSelectLead={setSelectedLeadId}
          message={messageLead ? createFollowUpMessage(messageLead, selectedTone) : ''}
          onToast={showToast}
        />
      )
    }

    return (
      <AboutScreen
        leads={enrichedLeads}
        onReset={resetDemoData}
        onImport={importLeads}
        theme={theme}
        onThemeChange={setTheme}
        onShowOnboarding={() => setHasSeenOnboarding(false)}
        onToast={showToast}
      />
    )
  }

  return (
    <main className="app-shell">
      <section className="app-surface">
        <div className="top-noise" />
        <div key={activeTab} className="page-transition">
          {renderScreen()}
        </div>
        <BottomNav activeTab={activeTab} onChange={handleTabChange} />
      </section>

      {selectedLead && activeTab === 'leads' && (
        <LeadDetail
          lead={selectedLead}
          onClose={() => setSelectedLeadId(undefined)}
          onUpdate={updateLead}
          onDelete={deleteLead}
          onGenerateMessage={() => setActiveTab('messages')}
          onToast={showToast}
        />
      )}

      {isAdding && <LeadForm onClose={() => setIsAdding(false)} onSubmit={addLead} />}

      {!hasSeenOnboarding && (
        <Onboarding onFinish={() => setHasSeenOnboarding(true)} />
      )}

      <ToastStack toasts={toasts} />
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
