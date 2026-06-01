# LeadFlow AI — Vietnamese Offline CRM Prototype

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Capacitor](https://img.shields.io/badge/Capacitor-Android-119EFF?logo=capacitor&logoColor=white)
![LocalStorage](https://img.shields.io/badge/Storage-LocalStorage-green)
![Offline First](https://img.shields.io/badge/Mode-Offline--First-brightgreen)
![License](https://img.shields.io/badge/License-MIT-yellow)

**LeadFlow AI** là một prototype app **CRM mini offline** dành cho người bán hàng, môi giới bất động sản, freelancer và doanh nghiệp nhỏ tại Việt Nam.

Ứng dụng giúp người dùng quản lý khách hàng tiềm năng, chấm điểm lead, dự đoán khả năng chốt, gợi ý việc cần làm, tạo tin nhắn chăm sóc khách và theo dõi phễu bán hàng bằng **AI logic mô phỏng offline**.

> Đây là dự án portfolio. App không dùng backend, không đăng nhập, không dùng database cloud và không gọi API AI bên ngoài trong MVP.

---

## Preview

<p align="center">
  <img src="docs/screenshots/dashboard.jpg" width="180" alt="LeadFlow AI Dashboard" />
  <img src="docs/screenshots/lead-inbox.jpg" width="180" alt="Lead Inbox" />
  <img src="docs/screenshots/lead-detail.jpg" width="180" alt="Lead Detail" />
</p>

<p align="center">
  <img src="docs/screenshots/pipeline.jpg" width="180" alt="Sales Pipeline" />
  <img src="docs/screenshots/message-studio.jpg" width="180" alt="Message Studio" />
</p>

---

## Demo

- **Android APK:** available in GitHub Releases.
- **Release:** `LeadFlow AI v2.6 APK Demo`
- **Mode:** offline-first, no backend, no login, no real AI API in MVP.
- **Build target:** Web + Android APK via Capacitor.

---

## 1. Giới thiệu nhanh

Nhiều người bán hàng có khách tiềm năng từ Zalo, Facebook, cuộc gọi, tin nhắn hoặc giới thiệu, nhưng lại khó theo dõi khách nào nên ưu tiên, khách nào cần chăm sóc lại và bước tiếp theo nên làm gì.

**LeadFlow AI** được xây dựng để giải quyết vấn đề đó bằng một app mobile-first, tiếng Việt, dễ dùng và ít thao tác.

App tập trung vào 4 việc chính:

1. Lưu và quản lý khách hàng tiềm năng.
2. Chấm điểm chất lượng lead bằng logic mô phỏng AI.
3. Theo dõi trạng thái khách trong phễu bán hàng.
4. Gợi ý tin nhắn chăm sóc và bước follow-up tiếp theo.

---

## 2. Project Summary / Tóm tắt dự án

| Hạng mục | Nội dung |
|---|---|
| App name | LeadFlow AI |
| Type | Offline CRM prototype / Sales intelligence app |
| Main users | Môi giới BĐS, sale, freelancer, chủ shop nhỏ, dịch vụ địa phương |
| Core idea | Quản lý lead + chấm điểm khách + gợi ý follow-up + phễu bán hàng |
| AI approach | Rule-based AI logic, không gọi AI API thật ở MVP |
| Storage | LocalStorage |
| Backend | Không có |
| Login | Không có |
| Cloud database | Không có |
| APK build | Capacitor Android |
| Author | Vũ Hoàng |

---

## 3. Tính năng chính

### 3.1. Quản lý khách hàng tiềm năng

Người dùng có thể lưu thông tin khách hàng:

- Tên khách hàng
- Số điện thoại
- Nguồn khách
- Ngành/lĩnh vực
- Nhu cầu
- Ngân sách
- Trạng thái tư vấn
- Ghi chú chăm sóc

### 3.2. Chấm điểm khách hàng bằng AI logic offline

LeadFlow AI mô phỏng hệ thống chấm điểm lead dựa trên các tín hiệu như:

- Có số điện thoại rõ ràng
- Có ngân sách cụ thể
- Có nhu cầu thật
- Hỏi giá, pháp lý, lịch xem hoặc thông tin ra quyết định
- Có phản hồi gần đây
- Đã được follow-up đúng lúc

Kết quả được phân loại thành:

- **Khách nóng**
- **Khách ấm**
- **Khách lạnh**
- **Cần thêm thông tin**

### 3.3. Deal Probability / Dự đoán khả năng chốt

Ứng dụng mô phỏng chỉ số **Deal Probability** để giúp người dùng biết khách nào nên được ưu tiên chăm sóc trước.

Ví dụ:

```text
Khách A: 96% — khả năng chốt cao, nên gọi lại trong hôm nay.
Khách B: 36% — cần thêm thông tin về nhu cầu/ngân sách.
```

### 3.4. Lead Health / Sức khỏe khách hàng

App giúp phát hiện các tình huống dễ mất khách:

- Khách nóng nhưng chưa được follow-up
- Khách đã lâu chưa liên hệ lại
- Khách đang phân vân cần chăm sóc mềm
- Khách cần thêm thông tin để ra quyết định

### 3.5. Message Studio / Soạn tin chăm khách

LeadFlow AI có khu vực tạo tin nhắn mẫu cho các tình huống:

- Chào khách mới
- Follow-up khách đang phân vân
- Gửi thông tin/bảng giá
- Chốt lịch hẹn
- Chăm lại khách cũ
- Xử lý phản hồi/từ chối

### 3.6. Pipeline / Phễu bán hàng

Ứng dụng theo dõi lead qua các giai đoạn:

```text
Mới → Đang tư vấn → Quan tâm cao → Hẹn gặp → Đã chốt → Đã mất
```

### 3.7. Offline-first

LeadFlow AI được thiết kế để chạy nhẹ và dễ demo:

- Không cần tài khoản
- Không cần backend
- Không cần database online
- Không cần API AI
- Dữ liệu lưu local bằng LocalStorage

---

## 4. Công nghệ sử dụng / Tech Stack

| Công nghệ | Vai trò |
|---|---|
| React | Xây dựng giao diện |
| Vite | Build tool |
| TailwindCSS / CSS | Thiết kế UI |
| Capacitor Android | Đóng gói APK Android |
| LocalStorage | Lưu dữ liệu offline |
| JavaScript | Logic xử lý dữ liệu |
| GitHub Codespaces | Môi trường build/demo |

---

## 5. Kiến trúc thư mục

```text
LeadFlow-AI/
├─ android/                 # Android project generated by Capacitor
├─ docs/                    # Tài liệu dự án, roadmap, changelog, hướng dẫn
│  └─ screenshots/          # Ảnh demo dùng trong README
├─ public/                  # Static assets
├─ scripts/                 # Script hỗ trợ setup/build
├─ src/                     # Source code chính
├─ BUILD_APK.md             # Hướng dẫn build APK
├─ README.md                # Tài liệu dự án
├─ capacitor.config.ts      # Cấu hình Capacitor
├─ package.json             # Dependencies/scripts
└─ vite.config.js           # Cấu hình Vite
```

---

## 6. Cài đặt và chạy local

### Clone repo

```bash
git clone https://github.com/Megatavn/LeadFlow-AI.git
cd LeadFlow-AI
```

### Cài dependencies

```bash
npm install
```

### Chạy development server

```bash
npm run dev
```

### Build web app

```bash
npm run build
```

---

## 7. Build APK Android

Dự án dùng Capacitor để đóng gói thành APK Android.

```bash
npm run build
npx cap sync android
cd android
./gradlew assembleDebug
```

APK sau khi build nằm tại:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

Nếu chưa có thư mục `android`, chạy:

```bash
npx cap add android
npx cap sync android
```

---

## 8. APK Demo

Bạn có thể tải APK demo trong mục **Releases** của repo:

```text
LeadFlow AI v2.6 APK Demo
```

Gợi ý release title chuyên nghiệp hơn cho bản tiếp theo:

```text
LeadFlow AI v2.6.0 — Android APK Portfolio Demo
```

---

## 9. Portfolio Value

Dự án này được thiết kế để thể hiện các năng lực sau trong portfolio:

- **Product thinking:** xác định vấn đề thật của người bán hàng và môi giới.
- **Mobile-first UI:** thiết kế app tối ưu cho điện thoại, không giống website thu nhỏ.
- **Offline-first architecture:** app chạy local, không phụ thuộc backend.
- **LocalStorage workflow:** lưu dữ liệu và trạng thái người dùng trên thiết bị.
- **Rule-based AI logic:** mô phỏng lead scoring, deal probability và follow-up recommendation.
- **Android packaging:** đóng gói web app thành APK bằng Capacitor.
- **Documentation:** có README, screenshot, release APK và hướng dẫn build.

---

## 10. Current Limitations

Đây là prototype portfolio nên chưa bao gồm:

- Đăng nhập tài khoản
- Đồng bộ cloud
- Backend/server
- Database online
- API AI thật
- Tích hợp Zalo/Facebook/CRM bên ngoài
- Push notification thật

Các tính năng AI hiện tại được mô phỏng bằng rule-based logic để app nhẹ, dễ build và phù hợp mục tiêu demo CV.

---

## 11. Roadmap

### Phiên bản tiếp theo

- [ ] Bổ sung nhiều mẫu tin nhắn theo từng ngành nghề.
- [ ] Cải thiện import/export dữ liệu.
- [ ] Tối ưu layout cho nhiều kích thước màn hình.
- [ ] Thêm case study chi tiết hơn trong repo.
- [ ] Thêm video demo ngắn trong GitHub Release.

### Nếu phát triển thương mại

- [ ] Thêm đăng nhập.
- [ ] Thêm cloud database.
- [ ] Đồng bộ nhiều thiết bị.
- [ ] Tích hợp AI API thật.
- [ ] Tích hợp Google Sheets/Zalo/Facebook.
- [ ] Tạo gói Free/Pro cho người dùng.

---

## 12. CV Description

```text
LeadFlow AI — Offline Sales Intelligence CRM Prototype

Built a Vietnamese mobile-first CRM prototype with rule-based AI lead scoring, deal probability, lead health tracking, follow-up message generation, objection handling, sales pipeline management, LocalStorage persistence, and Android APK packaging with Capacitor.

Tech stack: React, Vite, Capacitor Android, LocalStorage, JavaScript.
```

Short CV bullet:

```text
Built LeadFlow AI, a Vietnamese offline-first CRM prototype with rule-based AI lead scoring, sales pipeline management, follow-up message generation, LocalStorage persistence, and Android APK packaging with Capacitor.
```

---

## 13. GitHub About Suggestion

**Description**

```text
Vietnamese offline CRM prototype with AI lead scoring, sales pipeline, message generator and Android APK demo.
```

**Topics**

```text
react
android
portfolio
localstorage
crm
capacitor
sales-automation
offline-app
lead-management
vite
ai-automation
vietnamese-app
```

---

## 14. Tác giả

**Vũ Hoàng**  
AI Product Builder / AI Automation Portfolio  
GitHub: [Megatavn](https://github.com/Megatavn)

---

## License

This project is released under the MIT License.
