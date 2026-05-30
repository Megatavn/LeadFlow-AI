# LeadFlow AI — Vietnamese UX Fix Edition

**LeadFlow AI** là prototype app quản lý khách tiềm năng dành cho portfolio, GitHub, CV và demo APK Android.

App mô phỏng quy trình chăm sóc khách bằng AI logic offline: lưu khách, chấm điểm mức độ tiềm năng, dự đoán khả năng chốt, gợi ý việc cần làm, tạo tin nhắn chăm sóc, xử lý từ chối và theo dõi phễu bán hàng.

> Đây là dự án portfolio offline. App cố ý không dùng backend, đăng nhập, API AI thật hoặc database online để giữ bản demo nhẹ, dễ review và dễ build APK trên GitHub Codespace.

---

## v2.6 Highlights

- Sửa lỗi màn **Chi tiết khách** bị tràn/ngang/cắt nội dung trên mobile.
- Sửa lỗi nhóm nút **Xử lý từ chối** bị đè chữ khi hiển thị trên màn hình nhỏ.
- Gỡ trạng thái nút nhanh bị sticky che nội dung trong profile khách.
- Việt hóa phần lớn giao diện: giữ tiếng Anh chỉ ở phần cần thiết cho CV/GitHub như tech stack, APK, JSON/CSV.
- Mobile-first UI với animation, toast, skeleton loading, avatar, illustration và dark mode.
- LocalStorage offline data persistence.
- Rule-based AI lead scoring.
- Deal probability estimation.
- Lead health status.
- Follow-up timeline.
- Objection handler.
- Message library and call script.
- Sales pipeline board.
- JSON/CSV export và JSON import.
- Android APK packaging with Capacitor.

---

## Tech Stack

- React
- Vite
- Capacitor Android
- LocalStorage
- Vanilla CSS animations
- CSS variables for theming

---

## Why no backend or AI API?

This project is built for CV/portfolio review. The goal is to prove the ability to design and ship a realistic product prototype quickly:

- No login/auth complexity
- No backend deployment needed
- No API keys required
- No database setup required
- Easy APK build on GitHub Codespace
- Easy for recruiters/clients to review

AI behavior is simulated with rule-based scoring and template logic to keep the demo reliable and offline.

---

## Screenshots nên chụp cho GitHub

Tạo thư mục `screenshots/` và thêm:

1. `onboarding.png`
2. `dashboard.png`
3. `lead-inbox.png`
4. `lead-detail.png`
5. `message-studio.png`
6. `pipeline.png`
7. `cv-case-study.png`

---

## Demo video flow

Gợi ý video 45–60 giây:

```text
Mở app → Giới thiệu → Tổng quan → Khách ưu tiên → Chi tiết khách → Phân tích bán hàng → Soạn tin AI → Phễu bán hàng → Case study CV
```

---

## Run locally

```bash
npm install
npm run dev
```

---

## Build web app

```bash
npm run build
```

---

## Build Android APK

```bash
npm run build
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
```

APK output:

```bash
android/app/build/outputs/apk/debug/app-debug.apk
```

---

## CV snippet

```text
LeadFlow AI — Offline Sales Intelligence CRM Prototype

Built a mobile-first offline CRM prototype with rule-based AI lead scoring, deal probability, lead health, follow-up timeline, objection handling, message library, call scripting, local data persistence, Vietnamese-first mobile UX, and Android APK packaging.

Tech stack: React, Vite, Capacitor Android, LocalStorage.
```
