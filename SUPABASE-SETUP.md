# BlueRise GitHub Pages — BlueriseBoard Sync

Bộ website tĩnh đã được chuẩn hóa để triển khai trực tiếp bằng GitHub Pages, kèm checklist triển khai và đồng bộ đa thiết bị qua Supabase.

## Triển khai GitHub Pages

1. Giải nén file ZIP.
2. Upload **toàn bộ nội dung bên trong** vào thư mục gốc của repository.
3. Vào **Settings → Pages**.
4. Chọn **Deploy from a branch**.
5. Chọn branch `main` và thư mục `/ (root)`.

Trang vào chính: `index.html`.

## Supabase đang sử dụng

- Project: `BlueriseBoard`
- Project ref: `tveokwpxocymnrwqxdcr`
- Table: `public.bluerise_checklist_items`
- RLS: bật, dữ liệu giới hạn theo `auth.uid()`
- Realtime: bật
- Frontend chỉ chứa publishable key; không chứa service-role/secret key.

## Cấu hình Auth bắt buộc sau khi deploy

Trong Supabase Dashboard, mở:

**Authentication → URL Configuration**

Thiết lập:

- **Site URL**: URL GitHub Pages thực tế của bạn.
- **Redirect URLs**: thêm URL GitHub Pages, ví dụ `https://<username>.github.io/<repository>/`.

Nếu chưa cấu hình URL này, link xác nhận email có thể quay về sai địa chỉ.

## Implementation checklist

Trang `index.html` quản lý **119 màn/hạng mục duy nhất** trên 34 điểm truy cập prototype.

- Checkbox: đánh dấu màn đã hoàn thành.
- Trạng thái: Chưa làm / Đang triển khai / Hoàn thành.
- Ghi chú: UI, API, blocker, pull request hoặc việc còn thiếu.
- `localStorage` được dùng làm cache offline.
- Khi đăng nhập, dữ liệu được đồng bộ với Supabase và có thể mở lại trên thiết bị khác.
- Nút **Xuất JSON** / **Nhập JSON** dùng để sao lưu thủ công.
- Màn đơn Xin nghỉ và Đăng nhập dùng chung ID với storyboard tổng, không tính trùng.

## Messages flow

- Trang: `apps/BlueRise-Messages-Flow-storyboard.html`
- Runtime: `apps/support.js`
- Cần Internet để tải một số thư viện và font từ CDN.

## Góp ý

Luồng Góp ý chỉ còn một tệp chuẩn:

`apps/BlueRise-Feedback-Flow-storyboard.html`
