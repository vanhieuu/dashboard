# BlueRise Storyboards — GitHub Pages

Bộ này đã được chuẩn hóa để triển khai trực tiếp bằng GitHub Pages, không cần build.

## Cấu trúc

- `index.html`: trang danh mục chính
- `dashboard.html`
- `classes.html`
- `timetable.html`
- `assessments.html`
- `notifications.html`
- `feedback.html`
- `account.html`
- `rewards.html`
- `.nojekyll`: yêu cầu GitHub Pages phục vụ nguyên trạng các file tĩnh

## Cách triển khai

1. Tạo một repository mới trên GitHub.
2. Giải nén file ZIP và upload toàn bộ file ở cấp gốc repository.
3. Vào **Settings → Pages**.
4. Chọn **Deploy from a branch**.
5. Chọn branch `main` và thư mục `/ (root)`, sau đó nhấn **Save**.

URL sẽ có dạng:

```text
https://<username>.github.io/<repository>/
```

## Cập nhật

Thay file HTML tương ứng, commit và push lại lên branch `main`. GitHub Pages sẽ tự triển khai phiên bản mới.
