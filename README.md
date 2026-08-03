# BlueRise GitHub Pages

Bộ website tĩnh đã được chuẩn hóa để triển khai trực tiếp bằng GitHub Pages.

## Triển khai

1. Upload toàn bộ nội dung của thư mục này vào thư mục gốc của repository.
2. Vào **Settings → Pages**.
3. Chọn **Deploy from a branch**.
4. Chọn branch `main` và thư mục `/ (root)`.

Trang vào chính: `index.html`.

## Messages flow

- Trang: `apps/BlueRise-Messages-Flow-storyboard.html`
- Runtime đi kèm: `apps/support.js`
- Cần kết nối Internet để tải React, Google Fonts và Font Awesome từ CDN.

## Bản cập nhật giao diện

- `index.html` đã được thiết kế lại thành thư viện responsive có tìm kiếm và bộ lọc.
- Luồng Góp ý chỉ còn một tệp chuẩn: `apps/BlueRise-Feedback-Flow-storyboard.html`.

## Implementation checklist

Trang `index.html` hiện có checklist triển khai cho **119 màn/hạng mục duy nhất**.

- Checkbox: đánh dấu màn đã hoàn thành.
- Trạng thái: Chưa làm / Đang triển khai / Hoàn thành.
- Ghi chú: lưu UI, API, blocker, pull request hoặc công việc còn lại.
- Dữ liệu lưu trong `localStorage` của trình duyệt.
- Nút **Xuất JSON** và **Nhập JSON** dùng để sao lưu hoặc chia sẻ tiến độ giữa các máy.
- Màn đơn Xin nghỉ và Đăng nhập dùng chung ID với storyboard tổng nên không bị tính trùng.

Sau khi thay bộ file trên GitHub Pages, checklist cũ trên cùng domain vẫn được giữ nếu trình duyệt chưa xoá dữ liệu website.
