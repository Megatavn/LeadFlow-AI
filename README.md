# LeadFlow AI — Vietnamese Offline CRM Prototype

<p align="center">
  <img src="docs/screenshots/dashboard.jpg" width="180" alt="LeadFlow AI Dashboard" />
  <img src="docs/screenshots/lead-inbox.jpg" width="180" alt="LeadFlow AI Lead Inbox" />
  <img src="docs/screenshots/lead-detail.jpg" width="180" alt="LeadFlow AI Lead Detail" />
  <img src="docs/screenshots/pipeline.jpg" width="180" alt="LeadFlow AI Pipeline" />
  <img src="docs/screenshots/message-studio.jpg" width="180" alt="LeadFlow AI Message Studio" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Capacitor-Android-119EFF?logo=capacitor&logoColor=white" alt="Capacitor" />
  <img src="https://img.shields.io/badge/Storage-LocalStorage-16A34A" alt="LocalStorage" />
  <img src="https://img.shields.io/badge/Mode-Offline--First-22C55E" alt="Offline First" />
  <img src="https://img.shields.io/badge/Language-Vietnamese--First-F59E0B" alt="Vietnamese First" />
  <img src="https://img.shields.io/badge/License-MIT-yellow" alt="MIT License" />
</p>

**LeadFlow AI** là một prototype app **CRM mini offline** dành cho người bán hàng, môi giới bất động sản, freelancer và doanh nghiệp nhỏ tại Việt Nam. App giúp quản lý khách hàng tiềm năng, chấm điểm mức độ quan tâm, dự đoán khả năng chốt, theo dõi phễu bán hàng và tạo tin nhắn chăm sóc khách bằng **AI logic mô phỏng offline**.

> Đây là dự án portfolio. App không dùng backend, không dùng đăng nhập, không dùng database cloud và không gọi API AI bên ngoài trong MVP.

---

## 1. Giới thiệu nhanh

LeadFlow AI được xây dựng để giải quyết một vấn đề rất thực tế: nhiều người bán hàng có khách tiềm năng từ Zalo, Facebook, cuộc gọi, tin nhắn hoặc giới thiệu, nhưng lại dễ quên chăm sóc, không biết khách nào nên ưu tiên, không có quy trình theo dõi và không có công cụ đơn giản để tạo tin nhắn follow-up.

App tập trung vào trải nghiệm **mobile-first**, tiếng Việt dễ hiểu, thao tác ít, phù hợp người không rành công nghệ.

---

## 2. Project Summary / Tóm tắt dự án

| Hạng mục | Nội dung |
|---|---|
| App name | LeadFlow AI |
| Type | Offline CRM prototype / Sales intelligence app |
| Main users | Môi giới BĐS, sale, freelancer, chủ shop nhỏ, dịch vụ địa phương |
| Core idea | Quản lý lead + chấm điểm khách + gợi ý follow-up + phễu bán hàng |
| AI approach | Rule-based AI logic, không gọi API thật ở MVP |
| Storage | LocalStorage |
| Build target | Web + Android APK via Capacitor |
| Portfolio focus | Product thinking, mobile UI, offline-first, sales workflow, APK packaging |

---

## 3. Demo

- **APK demo:** xem trong mục **Releases** của repo.
- **Video demo:** xem trong mục **Releases** hoặc phần mô tả dự án nếu có.

> Bản APK hiện tại là bản demo phục vụ portfolio, chưa phải bản production trên Play Store.

---

## 4. Tính năng chính

### 4.1. Quản lý khách hàng tiềm năng

Người dùng có thể lưu thông tin khách hàng:

- Tên khách hàng
- Số điện thoại
- Nguồn khách
- Lĩnh vực/ngành hàng
- Nhu cầu
- Ngân sách
- Ghi chú tư vấn
- Trạng thái chăm sóc

### 4.2. AI Lead Scoring — chấm điểm khách bằng logic offline

App tự chấm điểm lead dựa trên các tín hiệu như:

- Có số điện thoại rõ ràng
- Có ngân sách cụ thể
- Có nhu cầu chi tiết
- Có ý định xem/gặp trực tiếp
- Hỏi giá, pháp lý, vị trí, ưu đãi hoặc thông tin ra quyết định

Kết quả phân loại:

- **Khách nóng** — cần ưu tiên xử lý ngay
- **Khách ấm** — có tiềm năng, cần chăm sóc thêm
- **Khách lạnh** — chưa đủ tín hiệu mua hàng
- **Cần thêm thông tin** — thiếu dữ liệu để đánh giá

### 4.3. Deal Probability — dự đoán khả năng chốt

LeadFlow AI mô phỏng chỉ số khả năng chốt để giúp người dùng biết khách nào nên được ưu tiên chăm sóc trước.

### 4.4. Lead Health — sức khỏe khách hàng

App giúp phát hiện các lead có nguy cơ bị bỏ quên:

- Khách đã lâu chưa follow-up
- Khách nóng nhưng chưa được liên hệ lại
- Khách cần chăm sóc hôm nay
- Khách có nguy cơ mất cơ hội nếu xử lý chậm

### 4.5. Message Studio — tạo tin nhắn chăm sóc

App có thư viện tin nhắn mẫu để hỗ trợ:

- Chào khách mới
- Follow-up khách đang phân vân
- Gửi thông tin/bảng giá
- Chốt lịch hẹn
- Chăm lại khách cũ
- Xử lý phản hồi/từ chối

### 4.6. Objection Handling — xử lý từ chối

LeadFlow AI gợi ý cách phản hồi khi khách nói:

- “Giá cao”
- “Để suy nghĩ thêm”
- “Chưa cần gấp”
- “Gửi xem trước”
- “Đang tham khảo thêm”

### 4.7. Sales Pipeline — phễu bán hàng

Ứng dụng theo dõi khách qua các giai đoạn:

```text
Mới → Đang tư vấn → Quan tâm cao → Hẹn gặp → Đã chốt → Đã mất
```

### 4.8. Offline-first

LeadFlow AI được thiết kế để chạy offline:

- Không cần tài khoản
- Không cần server
- Không cần database online
- Không cần API AI thật
- Dữ liệu lưu local bằng LocalStorage

---

## 5. Screenshots

### Dashboard / Tổng quan

<img src="docs/screenshots/dashboard.jpg" width="320" alt="LeadFlow AI Dashboard" />

### Lead Inbox / Danh sách khách

<img src="docs/screenshots/lead-inbox.jpg" width="320" alt="LeadFlow AI Lead Inbox" />

### Lead Detail / Chi tiết khách

<img src="docs/screenshots/lead-detail.jpg" width="320" alt="LeadFlow AI Lead Detail" />

### Pipeline / Phễu bán hàng

<img src="docs/screenshots/pipeline.jpg" width="320" alt="LeadFlow AI Pipeline" />

### Message Studio / Soạn tin chăm sóc

<img src="docs/screenshots/message-studio.jpg" width="320" alt="LeadFlow AI Message Studio" />

---

## 6. Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React + Vite |
| Styling | CSS / Tailwind-style utility approach |
| Mobile wrapper | Capacitor Android |
| Storage | LocalStorage |
| AI logic | Rule-based scoring and message templates |
| Build environment | GitHub Codespaces |
| Backend | None in MVP |
| Auth | None in MVP |
| Online database | None in MVP |
| External AI API | None in MVP |

---

## 7. Architecture

```text
LeadFlow-AI/
├─ android/                 # Android project generated by Capacitor
├─ docs/                    # Project docs, screenshots, changelogs
│  └─ screenshots/          # README images
├─ public/                  # Static assets
├─ scripts/                 # Helper scripts
├─ src/                     # Main app source code
├─ BUILD_APK.md             # Android build guide
├─ README.md                # Project documentation
├─ capacitor.config.ts      # Capacitor config
├─ package.json             # Dependencies and scripts
└─ vite.config.js           # Vite config
```

---

## 8. Run Locally

```bash
git clone https://github.com/Megatavn/LeadFlow-AI.git
cd LeadFlow-AI
npm install
npm run dev
```

Build web app:

```bash
npm run build
```

---

## 9. Build Android APK

LeadFlow AI dùng Capacitor để đóng gói web app thành Android APK.

```bash
npm run build
npx cap sync android
cd android
./gradlew assembleDebug
```

APK output:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

Nếu chưa có Android platform:

```bash
npx cap add android
npx cap sync android
```

---

## 10. Portfolio Value

Dự án này được xây dựng để thể hiện các năng lực sau:

- **Product thinking:** chọn bài toán CRM mini thực tế cho người dùng Việt Nam.
- **Mobile-first UI:** thiết kế giao diện tối ưu cho điện thoại, ít thao tác, dễ hiểu.
- **Offline-first architecture:** lưu dữ liệu bằng LocalStorage, không phụ thuộc server.
- **AI automation mindset:** mô phỏng lead scoring, deal probability, follow-up suggestions bằng rule-based logic.
- **Sales workflow understanding:** quản lý lead, pipeline, objection handling và message generation.
- **Android packaging:** đóng gói React/Vite app thành APK bằng Capacitor.
- **GitHub presentation:** có README, screenshots, docs, release APK và mô tả CV.

---

## 11. Current Limitations

Đây là prototype portfolio, nên chưa bao gồm:

- Đăng nhập tài khoản
- Đồng bộ cloud
- Backend/server
- Database online
- API AI thật
- Tích hợp Zalo/Facebook/CRM bên ngoài
- Push notification thật
- Phân quyền nhiều người dùng

Các tính năng AI trong MVP được mô phỏng bằng rule-based logic để giữ app nhẹ, dễ build và phù hợp mục tiêu demo CV.

---

## 12. Roadmap

### Next version

- [ ] Thêm nhiều mẫu tin nhắn theo ngành nghề
- [ ] Thêm import/export dữ liệu CSV/JSON
- [ ] Thêm dashboard phân tích lead theo nguồn khách
- [ ] Tối ưu responsive layout cho nhiều kích thước màn hình
- [ ] Thêm case study chi tiết trong repo
- [ ] Thêm demo video/GIF trong README

### Commercial direction

- [ ] Thêm đăng nhập
- [ ] Thêm cloud database
- [ ] Đồng bộ nhiều thiết bị
- [ ] Tích hợp AI API thật
- [ ] Tích hợp Google Sheets/Zalo/Facebook
- [ ] Tạo gói Free/Pro cho người dùng

---

## 13. CV Description

```text
LeadFlow AI — Offline Sales Intelligence CRM Prototype

Built a Vietnamese mobile-first CRM prototype with rule-based AI lead scoring,
deal probability, lead health tracking, follow-up message generation,
objection handling, sales pipeline management, LocalStorage persistence,
and Android APK packaging with Capacitor.

Tech stack: React, Vite, Capacitor Android, LocalStorage.
```

Short CV line:

```text
Built LeadFlow AI, an offline-first Vietnamese CRM prototype with rule-based AI lead scoring, sales pipeline, message generation, LocalStorage persistence, and Android APK packaging.
```

---

## 14. GitHub About

Suggested repository description:

```text
Vietnamese offline CRM prototype with AI lead scoring, sales pipeline, message generator, and Android APK demo.
```

Suggested topics:

```text
react, vite, android, capacitor, crm, lead-management, sales-automation,
ai-automation, localstorage, offline-app, vietnamese-app, portfolio,
product-builder
```

---

## 15. Author

**Vũ Hoàng**  
AI Product Builder / AI Automation Portfolio

GitHub: [Megatavn](https://github.com/Megatavn)

---

## 16. License

This project is released under the MIT License.
