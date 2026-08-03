# BlueSky — Background Illustration System (Hand-off)

Bộ nền cartoon dùng chung cho app mobile BlueSky. `1a, 1b, 1d, 1e, 1f` là **một bộ thống nhất** (cùng bảng màu, cùng cách vẽ mây/sóng, cùng gradient trời). `1c` (pattern) là biến thể phụ, cùng bảng màu nhưng ngôn ngữ hình khác (tile lặp).

Agent đọc file này để (a) dùng đúng nền cho đúng màn hình, (b) vẽ thêm nền mới **đúng style** khi cần.

---

## 1. Tokens

### Màu (bắt buộc — không thêm màu mới)

| Token | Hex | Dùng cho |
|---|---|---|
| `sky/900` | `#04182A` | đỉnh gradient dark mode |
| `sky/800` | `#063E62` | đỉnh gradient splash, text đậm trên nền sáng: `#0B3B58` |
| `sky/700` | `#083E63` | nền dark mode giữa |
| `primary` | `#0B72AE` | **primary brand**, thân gradient, mây silhouette dark |
| `sky/500` | `#1B9BD8` | điểm sáng gradient (header, khinh khí cầu) |
| `sky/400` | `#6FC6EE` | mây/sóng lớp giữa, ngôi sao nhỏ |
| `sky/300` | `#8FD6F2` | đỉnh gradient onboarding |
| `sky/200` | `#D6EEF9` | mây pale, blob mềm, chân gradient |
| `sky/100` | `#EAF6FD` | sóng lớp dưới, card dark-mode viền |
| `sky/50` | `#F2F9FD` / `#F5FAFD` / `#FBFDFF` | nền page sáng |
| `white` | `#FFFFFF` | mây tiền cảnh, sóng đỉnh |
| `sun/400` | `#FFD166` | **accent duy nhất** — mặt trời, sao, chi tiết nhỏ |
| `sun/300` | `#FFE29A` / `#FFF3CF` | nhân mặt trời, mặt trăng |
| `sun/500` | `#F0B429` / `#FFB74D` | giỏ khinh khí cầu |

Quy tắc: tối đa **1 accent vàng** trên mỗi nền, diện tích < 6% khung. Không dùng đỏ/xanh lá/tím.

### Typography (chỉ cho UI, nền không chứa chữ)
- Heading: **Baloo 2** — 700/800
- Body / UI: **Nunito** — 400/600/700
- Nền SVG/PNG **không có text** ⇒ đổi font không ảnh hưởng asset.

### Bán kính & độ nổi
- Card: `18px` (nền sáng) · `18px` + `border 1px rgba(255,255,255,.14)` (dark)
- Button: `23px` (pill 46px cao)
- Shadow trên nền xanh: `0 10px 24px rgba(11,114,174,.14)`

---

## 2. Ngôn ngữ hình (illustration grammar)

Nếu cần vẽ nền mới, tuân thủ đúng 5 primitive này — **không dùng path phức tạp, không outline, không texture**:

1. **Mây** = 3 ellipse + 1 rect bo tròn, gộp trong `<g>` một màu duy nhất, không viền.
   ```
   <g fill="#fff" opacity="0.5">
     <ellipse cx="X"   cy="Y"   rx="R"     ry="R*0.62"/>   <!-- bướu chính -->
     <ellipse cx="X-R*0.8" cy="Y+R*0.2" rx="R*0.62" ry="R*0.42"/>
     <ellipse cx="X+R*0.7" cy="Y+R*0.2" rx="R*0.57" ry="R*0.40"/>
     <rect x="X-R*1.05" y="Y+R*0.1" width="R*2.2" height="R*0.5" rx="R*0.25"/>
   </g>
   ```
   Chiều sâu bằng **opacity**, không bằng màu: xa `0.16–0.28` → giữa `0.45–0.55` → gần `0.85–1.0`.

2. **Sóng / dải đất** = cubic bezier 3 đoạn, biên độ 20–28px trên khung 300 rộng, luôn đóng xuống đáy:
   `M0,Y C48,Y-26 92,Y+28 148,Y+8 C206,Y-13 246,Y+36 300,Y+16 L300,640 L0,640 Z`
   Xếp 2–3 lớp, mỗi lớp lệch xuống 30–36px, màu sáng dần về phía dưới.

3. **Mặt trời / trăng** = `radialGradient` glow (r ≈ 2.6× nhân) + circle nhân đặc. Không tia, không mặt.

4. **Sao** = circle r 1.1–2.6 (opacity 0.5–0.9) hoặc ngôi sao 5 cánh polygon nhỏ, chỉ 1 cái mỗi nền.

5. **Blob** = 1 path bezier kín, tràn ra ngoài canvas ≥ 30px, luôn có `clipPath` khung.

Cấm: gradient nhiều hơn 3 stop, drop-shadow trên hình minh hoạ, chi tiết < 2px (biến mất ở @1x), nhân vật có mặt/mắt trừ khi được duyệt riêng.

---

## 3. Bộ nền & màn hình áp dụng

| ID | File | Dùng cho | Vùng an toàn cho UI |
|---|---|---|---|
| `1a` | `01-splash-sky` | Splash, launch screen, màn hình chào | giữa khung (logo + tagline); tránh 0–25% trên (mặt trời) |
| `1b` | `02-wave-header` | Home / Dashboard — header xanh, body sáng | body dưới y≈40%; header chứa greeting + avatar |
| `1c` | `03-pattern-light` + tile | List, Settings, Profile, màn nhiều text | toàn khung (nền rất nhạt) |
| `1d` | `04-onboarding-balloon` | Onboarding, empty state, success | **dưới y=66% là vùng trắng thuần** cho title/body/CTA |
| `1e` | `05-night-dark` | Dark mode toàn app | y 18%–58% trống; trăng ở góc trên phải |
| `1f` | `06-soft-blob` | Login, Register, OTP, form | giữa khung; blob nằm ở 4 góc |

**Contrast:** text trắng chỉ đặt trên vùng ≥ `#0B72AE`; text đậm dùng `#0B3B58` trên `sky/50–200`. Trên `1b`, nội dung body **phải** nằm trên card trắng, không đặt text trực tiếp lên vùng sóng chuyển tiếp.

---

## 4. File & cách nhúng

```
svg-production/
  01-splash-sky-1290x2796.svg        # 1290×2796, preserveAspectRatio="xMidYMid slice"
  02-wave-header-1290x2796.svg
  03-pattern-light-1290x2796.svg
  03-pattern-tile-seamless.svg       # 75×75 tile, có nền
  03-pattern-tile-transparent.svg    # 75×75 tile, nền trong suốt
  04-onboarding-balloon-1290x2796.svg
  05-night-dark-1290x2796.svg
  06-soft-blob-1290x2796.svg
png-production/
  <name>_1290x2796_3x.png | _1170x2532_2x.png | _1080x2400_1x.png
svg/                                  # bản gốc 300×640 (source of truth để chỉnh sửa)
```

**Ưu tiên SVG.** Chỉ dùng PNG khi platform không render SVG tốt (widget, notification, launch storyboard iOS).

Web / React Native (react-native-svg):
```
背景: full-bleed, resizeMode="cover" / preserveAspectRatio="xMidYMid slice"
```
```css
/* web */
.screen { background: #0B72AE url('01-splash-sky-1290x2796.svg') center/cover no-repeat; }
/* pattern: dùng tile, KHÔNG dùng bản 1290 */
.list   { background: #F2F9FD url('03-pattern-tile-seamless.svg') 0 0/150px 150px repeat; }
```
Flutter: `SvgPicture.asset(..., fit: BoxFit.cover)` · iOS: `.resizable().scaledToFill().clipped()` · Android: `android:scaleType="centerCrop"`.

Luôn set **màu nền fallback** cùng token với nền (`1a`→`#0B72AE`, `1b`→`#F5FAFD`, `1e`→`#083E63`, `1f`→`#FBFDFF`) để không loé trắng khi asset chưa load.

---

## 5. Khi cần asset mới — checklist cho agent

1. Author ở canvas **300×640**, sau đó scale ×4.4 và center vào 1290×2796 (giữ `svg/` là source).
2. Chỉ dùng token màu ở §1 và primitive ở §2.
3. Chừa vùng an toàn: 0–110px trên (status bar), 90px dưới (home indicator/tab bar) — không đặt chi tiết quan trọng ở đó.
4. Kiểm tra ở 3 tỉ lệ: 1:1.78, 1:2.0, 1:2.22 — với `slice`, chi tiết bị crop hai bên không được là chi tiết chính.
5. Kiểm text contrast ≥ 4.5:1 tại vị trí UI thực tế (không chỉ nhìn tổng thể).
6. Xuất: SVG 1290×2796 + PNG @1x/@2x/@3x, tên `NN-slug`.
7. Không thêm text/logo vào asset nền — logo là layer UI riêng.
