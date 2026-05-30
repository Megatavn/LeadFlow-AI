# Cách cập nhật media + README lên GitHub

## Cách 1: Dùng Codespace

Upload file ZIP này vào Codespace, sau đó chạy:

```bash
cd /workspaces/LeadFlow-AI
unzip leadflow-ai-github-media-pack.zip
cp -r leadflow-ai-github-media-pack/docs ./
cp leadflow-ai-github-media-pack/README.md README.md
git add README.md docs/screenshots docs/demo
git commit -m "Add screenshots and demo video to README"
git push origin main
```

## Cách 2: Làm trực tiếp trên GitHub bằng điện thoại

1. Vào repo GitHub.
2. Bật Desktop site trong Chrome.
3. Upload ảnh vào:
   `docs/screenshots/`
4. Upload video vào:
   `docs/demo/`
5. Mở README.md, bấm Edit, thay nội dung bằng README.md trong gói này.
6. Bấm Commit changes.

## File đã được đặt tên sẵn

```text
docs/screenshots/dashboard.jpg
docs/screenshots/lead-inbox.jpg
docs/screenshots/lead-detail.jpg
docs/screenshots/pipeline.jpg
docs/screenshots/message-studio.jpg
docs/demo/leadflow-ai-demo.mp4
```
