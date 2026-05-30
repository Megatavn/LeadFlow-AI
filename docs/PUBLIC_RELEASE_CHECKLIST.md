# Public release checklist

Before making the GitHub repository public:

- [ ] Run `npm run build` successfully.
- [ ] Build APK with `./gradlew assembleDebug`.
- [ ] Open the APK on Android and test all 5 tabs.
- [ ] Test Lead Detail open/close behavior.
- [ ] Test Add Lead.
- [ ] Test Message Studio.
- [ ] Test Pipeline stage change.
- [ ] Test Dark Mode toggle.
- [ ] Test Export JSON/CSV.
- [ ] Test Import JSON.
- [ ] Add screenshots to `screenshots/`.
- [ ] Add a 30–60s demo video link to README.
- [ ] Add repo topics on GitHub.
- [ ] Pin the repository on your GitHub profile.

Recommended public wording:

```text
This is an offline portfolio prototype. It does not include backend, login, external AI API, or online database. AI features are simulated with rule-based logic and templates.
```
