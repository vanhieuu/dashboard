# BlueRise Implementation Checklist

Trang chủ quản lý 119 màn/hạng mục triển khai duy nhất trên 34 điểm truy cập prototype.

## Trạng thái

- `todo`: Chưa làm
- `in-progress`: Đang triển khai
- `done`: Hoàn thành

## Lưu trữ và đồng bộ

- Cache offline: `localStorage`, khóa `bluerise-implementation-checklist-v2`.
- Nguồn dữ liệu đồng bộ: Supabase project `BlueriseBoard` (`tveokwpxocymnrwqxdcr`).
- Dùng cùng tài khoản email/mật khẩu trên thiết bị khác để nhận cùng checklist.
- Khi đăng nhập lần đầu, dữ liệu local và remote được hợp nhất theo `updatedAt` mới nhất.
- Realtime cập nhật các tab/thiết bị đang mở cùng tài khoản.
- Xuất/Nhập JSON vẫn hoạt động như phương án sao lưu độc lập.

## Cách dùng

1. Bấm **Đăng nhập đồng bộ**.
2. Tạo tài khoản hoặc đăng nhập.
3. Xác nhận email nếu Supabase yêu cầu.
4. Tick, đổi trạng thái hoặc nhập ghi chú.
5. Trạng thái trên thanh đầu trang cho biết đang tải, đang đồng bộ, đã đồng bộ hoặc lỗi.

Trang vẫn hoạt động cục bộ khi chưa đăng nhập hoặc mất mạng.

## GitHub Pages và redirect URL

Sau khi deploy, thêm URL website vào:

**Supabase → Authentication → URL Configuration → Site URL / Redirect URLs**.

`index.html` phải nằm ở cấp gốc của repository được publish.
