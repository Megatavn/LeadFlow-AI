# App Structure — LeadFlow AI v2.5

```text
src/
├─ components/
│  ├─ Dashboard.jsx
│  ├─ LeadList.jsx
│  ├─ LeadCard.jsx
│  ├─ LeadForm.jsx
│  ├─ LeadDetail.jsx
│  ├─ SalesIntelligencePanel.jsx
│  ├─ ObjectionHandler.jsx
│  ├─ SignalStack.jsx
│  ├─ Pipeline.jsx
│  ├─ MessageStudio.jsx
│  ├─ AboutScreen.jsx
│  └─ BottomNav.jsx
├─ data/
│  ├─ sampleLeads.js
│  └─ statuses.js
├─ hooks/
│  └─ useLocalStorage.js
├─ utils/
│  ├─ leadScoring.js
│  ├─ salesIntelligence.js
│  ├─ messageTemplates.js
│  └─ formatters.js
└─ styles/
   └─ app.css
```

## v2.2 Sales Intelligence logic

- `leadScoring.js`: tính điểm khách hàng tiềm năng và AI summary.
- `salesIntelligence.js`: tính deal probability, lead health, follow-up timeline, objection handler và message library.
- `MessageStudio.jsx`: tạo tin nhắn follow-up, thư viện mẫu và xử lý từ chối.
- `SalesIntelligencePanel.jsx`: hiển thị khả năng chốt, sức khỏe lead và timeline chăm sóc.
