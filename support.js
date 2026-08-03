<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>BlueRise — Tin nhắn</title>
<script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet data-dc-atomics><meta name="design_doc_mode" content="canvas"><template id="__bundler_thumbnail" data-bg-color="#0B72AE"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#0B72AE"/><path d="M24 30 h56 a9 9 0 0 1 9 9 v26 a9 9 0 0 1 -9 9 h-30 l-15 13 v-13 h-11 a9 9 0 0 1 -9 -9 v-26 a9 9 0 0 1 9 -9 z" fill="#fff"/><rect x="52" y="52" width="44" height="34" rx="9" fill="#FFD166"/><circle cx="93" cy="50" r="9" fill="#EF5B4C"/></svg></template><link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Be+Vietnam+Pro:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"><style>body{margin:0;background:#E7EDF2;font-family:'Be Vietnam Pro',system-ui,sans-serif;-webkit-font-smoothing:antialiased}*{box-sizing:border-box}a{color:#0B72AE}a:hover{color:#063E62}::-webkit-scrollbar{width:0;height:0}
@keyframes ms-glow{0%,100%{opacity:.5;transform:scale(1)}50%{opacity:.9;transform:scale(1.05)}}
@keyframes ms-drift{0%{transform:translateX(-9px)}100%{transform:translateX(13px)}}
@keyframes ms-spin{to{transform:rotate(360deg)}}
@keyframes ms-pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.14);opacity:.85}}
@keyframes ms-type{0%,60%,100%{transform:translateY(0);opacity:.45}30%{transform:translateY(-4px);opacity:1}}
@keyframes ms-rec{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}
@media (prefers-reduced-motion:reduce){*{animation-duration:.01ms!important}}</style></helmet>

<section style="padding:44px 44px 40px">

<div style="display:flex;align-items:baseline;gap:10px;margin:0 0 6px">
<span style="font:600 10px ui-monospace,Menlo,monospace;padding:3px 7px;background:#0B3B58;color:#fff;border-radius:4px">1</span>
<span style="font:700 13px 'Be Vietnam Pro',sans-serif;color:#0B3B58">BlueRise — Tin nhắn, 12 màn + spec theme cho chat module</span>
</div>
<p style="margin:0 0 26px;font:400 12px/1.6 'Be Vietnam Pro',sans-serif;color:#5A7488;max-width:880px;text-wrap:pretty">Hai lớp tách bạch. <b style="color:#0B3B58">Lớp khung app</b> (màn 01·02·03·08 + header, badge tab, kết nối, camera) thiết kế tự do theo shell BlueRise. <b style="color:#0B3B58">Lớp UI chat</b> (màn 04–07) là <code>@chat-module/react-native</code> dùng chung nhiều app — ở đây dựng để <i>chốt giá trị token</i>, không phải để build lại màn: mọi thứ trong khung chat đều quy về bảng theme ở cuối trang. Hai điểm nhấn sản phẩm: danh bạ theo <b>lớp học</b> (không phải friend list) và <b>thread khiếu nại</b> sinh từ tab Góp ý — có vòng đời 4 bậc, khoá composer khi đóng và moment CSAT 5 sao (màn 09–12).</p>

<div style="display:flex;flex-wrap:nowrap;width:max-content;gap:30px;align-items:flex-start">

<div data-screen-label="01" style="flex:none;display:flex;flex-direction:column;gap:11px">
<div style="display:flex;align-items:baseline;gap:9px">
<span style="font:700 10.5px ui-monospace,Menlo,monospace;padding:3px 7px;background:#0B3B58;color:#fff;border-radius:5px">/messages</span>
<span style="font:600 12px 'Be Vietnam Pro',sans-serif;color:#0B3B58">Danh sách hội thoại · khung app</span>
</div>
<div style="position:relative;width:430px;height:932px;border-radius:38px;overflow:hidden;background:#F4FAFD;box-shadow:0 24px 60px rgba(6,62,98,.22);display:flex;flex-direction:column">

<div style="position:relative;height:214px;flex-shrink:0;overflow:hidden;background:#0B72AE">
<svg sc-camel-view-box="0 0 430 214" sc-camel-preserve-aspect-ratio="xMidYMin slice" style="position:absolute;inset:0;width:100%;height:100%;display:block">
<defs><linearGradient id="m1-g" x1="0" y1="0" x2="0.65" y2="1"><stop offset="0" stop-color="#063E62"></stop><stop offset="0.6" stop-color="#0B72AE"></stop><stop offset="1" stop-color="#37AEE2"></stop></linearGradient><radialGradient id="m1-s" cx="0.5" cy="0.5" r="0.5"><stop offset="0.34" stop-color="#FFE9AE" stop-opacity="0.5"></stop><stop offset="1" stop-color="#FFE9AE" stop-opacity="0"></stop></radialGradient></defs>
<rect width="430" height="214" fill="url(#m1-g)"></rect>
<circle cx="296" cy="72" r="66" fill="url(#m1-s)" style="animation:ms-glow 5.4s ease-in-out infinite"></circle>
<circle cx="296" cy="72" r="22" fill="#FFF3CF"></circle>
<circle cx="62" cy="46" r="1.9" fill="#fff" opacity="0.7"></circle><circle cx="140" cy="30" r="1.3" fill="#fff" opacity="0.5"></circle>
<g fill="#fff" opacity="0.08" style="animation:ms-drift 17s ease-in-out infinite alternate"><ellipse cx="104" cy="150" rx="44" ry="26"></ellipse><ellipse cx="66" cy="160" rx="28" ry="18"></ellipse><rect x="60" y="154" width="114" height="21" rx="10.5"></rect></g>
</svg>
<div style="position:relative;z-index:1;padding:58px 24px 0">
<div style="display:flex;align-items:center;gap:12px;min-height:44px">
<span style="flex:1;font:800 28px 'Baloo 2',sans-serif;color:#fff;line-height:1.1">Tin nhắn</span>
<div style="width:40px;height:40px;border-radius:14px;background:rgba(255,255,255,.18);display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0"><i class="fa-solid fa-pen-to-square" style="font-size:15px;color:#fff"></i></div>
</div>
<div style="display:flex;align-items:center;gap:8px;margin-top:10px">
<span style="display:flex;align-items:center;gap:5px;padding:4px 10px;border-radius:20px;background:rgba(55,224,165,.18);border:1px solid rgba(55,224,165,.4)"><span style="width:6px;height:6px;border-radius:50%;background:#37E0A5"></span><span style="font:600 10.5px 'Be Vietnam Pro',sans-serif;color:#B8F5DE">Đã kết nối</span></span>
</div>
</div>
</div>

<div style="flex:1;margin-top:-38px;border-radius:32px 32px 0 0;background:#F4FAFD;padding:18px 20px 0;position:relative;z-index:2;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 -10px 30px rgba(6,62,98,.1)">

<div style="display:flex;padding:4px;border-radius:16px;background:#E3EFF7;flex-shrink:0">
<div style="flex:1;height:42px;border-radius:13px;background:#fff;box-shadow:0 2px 0 #CFE1EE;display:flex;align-items:center;justify-content:center;gap:7px;font:700 13px 'Be Vietnam Pro',sans-serif;color:#0B72AE;cursor:pointer"><i class="fa-solid fa-comments" style="font-size:12px"></i>Hội thoại<span style="min-width:19px;height:19px;padding:0 5px;border-radius:10px;background:#EF5B4C;color:#fff;font:800 10px 'Baloo 2',sans-serif;display:flex;align-items:center;justify-content:center">5</span></div>
<div style="flex:1;height:42px;border-radius:13px;display:flex;align-items:center;justify-content:center;gap:7px;font:600 13px 'Be Vietnam Pro',sans-serif;color:#5A7488;cursor:pointer"><i class="fa-solid fa-address-book" style="font-size:12px"></i>Danh bạ</div>
</div>

<div style="display:flex;align-items:center;gap:11px;height:48px;padding:0 15px;margin-top:12px;border-radius:16px;background:#fff;border:1.5px solid #DDEAF3;flex-shrink:0">
<i class="fa-solid fa-magnifying-glass" style="font-size:13px;color:#8AA3B4"></i>
<span style="flex:1;font:400 13px 'Be Vietnam Pro',sans-serif;color:#8AA3B4">Tìm tên, lớp hoặc nội dung tin</span>
</div>

<div style="display:flex;gap:8px;margin-top:11px;overflow-x:auto;overflow-y:hidden;flex-shrink:0;scrollbar-width:none">
<sc-for list="{{ chips }}" as="c" hint-placeholder-count="4">
<div style="flex-shrink:0;display:flex;align-items:center;gap:6px;padding:8px 14px;border-radius:20px;background:{{ c.bg }};color:{{ c.fg }};border:1.5px solid {{ c.border }};font:700 12px 'Be Vietnam Pro',sans-serif;cursor:pointer">{{ c.name }}<span style="font:700 10.5px 'Be Vietnam Pro',sans-serif;opacity:.7">{{ c.count }}</span></div>
</sc-for>
</div>

<div style="display:flex;align-items:center;gap:7px;margin:18px 0 10px;flex-shrink:0">
<i class="fa-solid fa-thumbtack" style="font-size:9.5px;color:#B4720B"></i>
<span style="font:800 11px 'Be Vietnam Pro',sans-serif;letter-spacing:1.7px;color:#8AA3B4">ĐÃ GHIM</span>
</div>

<div style="display:flex;flex-direction:column;gap:10px">
<sc-for list="{{ pinned }}" as="c" hint-placeholder-count="1">
<div style="display:flex;align-items:center;gap:12px;padding:13px 14px;border-radius:20px;background:#FFFBF0;border:1.5px solid #F4E3BD;cursor:pointer;flex-shrink:0">
<div style="position:relative;flex-shrink:0"><div style="width:46px;height:46px;border-radius:16px;background:{{ c.avaBg }};display:flex;align-items:center;justify-content:center;font:800 15px 'Baloo 2',sans-serif;color:{{ c.avaFg }}">{{ c.ava }}</div><span style="position:absolute;right:-2px;bottom:-2px;width:13px;height:13px;border-radius:50%;background:{{ c.dot }};border:2.5px solid #FFFBF0"></span></div>
<div style="flex:1;min-width:0">
<div style="display:flex;align-items:center;gap:6px"><span style="font:700 14.5px 'Baloo 2',sans-serif;color:#0B3B58;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{{ c.name }}</span><i class="fa-solid fa-thumbtack" style="font-size:9px;color:#B4720B;transform:rotate(40deg)"></i></div>
<div style="font:400 12px 'Be Vietnam Pro',sans-serif;color:#5A7488;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{{ c.preview }}</div>
</div>
<div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;flex-shrink:0"><span style="font:500 10.5px 'Be Vietnam Pro',sans-serif;color:#8AA3B4">{{ c.time }}</span><span style="min-width:21px;height:21px;padding:0 6px;border-radius:11px;background:#EF5B4C;color:#fff;font:800 10.5px 'Baloo 2',sans-serif;display:flex;align-items:center;justify-content:center;animation:ms-pulse 2.4s ease-in-out infinite">{{ c.unread }}</span></div>
</div>
</sc-for>
</div>

<div style="font:800 11px 'Be Vietnam Pro',sans-serif;letter-spacing:1.7px;color:#8AA3B4;margin:18px 0 10px;flex-shrink:0">TẤT CẢ HỘI THOẠI</div>

<div style="display:flex;flex-direction:column;gap:10px">
<sc-for list="{{ convos }}" as="c" hint-placeholder-count="4">
<div style="display:flex;align-items:center;gap:12px;padding:13px 14px;border-radius:20px;background:#fff;box-shadow:0 3px 0 #DDEAF3;cursor:pointer;flex-shrink:0" style-active="transform:translateY(3px);box-shadow:0 0 0 #DDEAF3">
<div style="position:relative;flex-shrink:0"><div style="width:46px;height:46px;border-radius:16px;background:{{ c.avaBg }};display:flex;align-items:center;justify-content:center;font:800 15px 'Baloo 2',sans-serif;color:{{ c.avaFg }}">{{ c.ava }}</div><span style="position:absolute;right:-2px;bottom:-2px;width:13px;height:13px;border-radius:50%;background:{{ c.dot }};border:2.5px solid #fff"></span></div>
<div style="flex:1;min-width:0">
<div style="display:flex;align-items:center;gap:6px"><span style="font:700 14.5px 'Baloo 2',sans-serif;color:#0B3B58;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{{ c.name }}</span><sc-if value="{{ c.muted }}" hint-placeholder-val="{{ false }}"><i class="fa-solid fa-bell-slash" style="font-size:9px;color:#C3D4DF"></i></sc-if></div>
<div style="display:flex;align-items:center;gap:5px;margin-top:3px"><sc-if value="{{ c.icon }}" hint-placeholder-val="{{ false }}"><i class="fa-solid {{ c.icon }}" style="font-size:10px;color:#8AA3B4"></i></sc-if><span style="flex:1;min-width:0;font:{{ c.previewFont }} 'Be Vietnam Pro',sans-serif;color:{{ c.previewFg }};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{{ c.preview }}</span></div>
</div>
<div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;flex-shrink:0">
<span style="font:500 10.5px 'Be Vietnam Pro',sans-serif;color:#8AA3B4">{{ c.time }}</span>
<sc-if value="{{ c.unread }}" hint-placeholder-val="{{ true }}"><span style="min-width:21px;height:21px;padding:0 6px;border-radius:11px;background:{{ c.badgeBg }};color:#fff;font:800 10.5px 'Baloo 2',sans-serif;display:flex;align-items:center;justify-content:center">{{ c.unread }}</span></sc-if>
<sc-if value="{{ c.seen }}" hint-placeholder-val="{{ false }}"><i class="fa-solid fa-check-double" style="font-size:11px;color:#37AEE2"></i></sc-if>
</div>
</div>
</sc-for>
</div>
</div>

<div style="position:relative;z-index:3;height:80px;flex-shrink:0;background:#fff;display:flex;align-items:center;justify-content:space-around;padding:0 8px;box-shadow:0 -8px 24px rgba(6,62,98,.09)">
<sc-for list="{{ nav }}" as="n" hint-placeholder-count="5">
<div style="position:relative;display:flex;flex-direction:column;align-items:center;gap:4px;padding:9px 12px;border-radius:16px;min-width:52px;cursor:pointer;background:{{ n.chip }};color:{{ n.color }}">
<i class="fa-solid {{ n.icon }}" style="font-size:18px"></i>
<span style="font:600 10px 'Be Vietnam Pro',sans-serif">{{ n.name }}</span>
<sc-if value="{{ n.badge }}" hint-placeholder-val="{{ false }}"><span style="position:absolute;top:2px;right:6px;min-width:19px;height:19px;padding:0 5px;border-radius:10px;background:#EF5B4C;color:#fff;font:800 10px 'Baloo 2',sans-serif;display:flex;align-items:center;justify-content:center;border:2px solid #fff;animation:ms-pulse 2.4s ease-in-out infinite">{{ n.badge }}</span></sc-if>
</div>
</sc-for>
</div>
</div>
<sc-if value="{{ showNotes }}" hint-placeholder-val="{{ true }}">
<div style="width:430px;padding:14px 16px;border-radius:18px;background:#fff;border:1px solid #DDEAF3">
<div style="font:800 10px 'Be Vietnam Pro',sans-serif;letter-spacing:1.6px;color:#0B72AE;margin-bottom:8px">MOTION &amp; HÀNH VI</div>
<div style="font:400 11.5px/1.7 'Be Vietnam Pro',sans-serif;color:#5A7488"><b style="color:#0B3B58">Segmented Hội thoại ⇄ Danh bạ</b> nằm trong card trắng chứ không nằm trên hero — giữ hero đúng một vai: nhận diện học sinh đang chọn. Đổi con ⇒ danh sách fade-swap 180ms, badge tab đếm lại.<br><b style="color:#0B3B58">Badge tab bar và badge segmented là cùng một con số</b>, chạy chung spring (stiffness 260, damping 20) với badge chuông ở Dashboard.<br><b style="color:#0B3B58">Ghim</b> tách thành section riêng nền kem <code>#FFFBF0</code> + viền <code>#F4E3BD</code>, không chỉ là một icon nhỏ trong hàng.<br>Long-press hàng → sheet 5 hành động (màn 03 của Xin nghỉ dùng cùng shell sheet). Vuốt trái không dùng: xung đột với vuốt lùi của navigator.</div>
</div>
</sc-if>
</div>

<div data-screen-label="02" style="flex:none;display:flex;flex-direction:column;gap:11px">
<div style="display:flex;align-items:baseline;gap:9px">
<span style="font:700 10.5px ui-monospace,Menlo,monospace;padding:3px 7px;background:#0B3B58;color:#fff;border-radius:5px">/messages</span>
<span style="font:600 12px 'Be Vietnam Pro',sans-serif;color:#0B3B58">Rỗng · CTA dẫn sang Danh bạ</span>
</div>
<div style="position:relative;width:430px;height:932px;border-radius:38px;overflow:hidden;background:#F4FAFD;box-shadow:0 24px 60px rgba(6,62,98,.22);display:flex;flex-direction:column">
<div style="position:relative;height:214px;flex-shrink:0;overflow:hidden;background:#0B72AE">
<svg sc-camel-view-box="0 0 430 214" sc-camel-preserve-aspect-ratio="xMidYMin slice" style="position:absolute;inset:0;width:100%;height:100%;display:block">
<defs><linearGradient id="m2-g" x1="0" y1="0" x2="0.65" y2="1"><stop offset="0" stop-color="#063E62"></stop><stop offset="0.6" stop-color="#0B72AE"></stop><stop offset="1" stop-color="#37AEE2"></stop></linearGradient><radialGradient id="m2-s" cx="0.5" cy="0.5" r="0.5"><stop offset="0.34" stop-color="#FFE9AE" stop-opacity="0.5"></stop><stop offset="1" stop-color="#FFE9AE" stop-opacity="0"></stop></radialGradient></defs>
<rect width="430" height="214" fill="url(#m2-g)"></rect>
<circle cx="384" cy="76" r="66" fill="url(#m2-s)" style="animation:ms-glow 5.4s ease-in-out infinite"></circle>
<circle cx="384" cy="76" r="22" fill="#FFF3CF"></circle>
<g fill="#fff" opacity="0.08" style="animation:ms-drift 17s ease-in-out infinite alternate"><ellipse cx="104" cy="150" rx="44" ry="26"></ellipse><ellipse cx="66" cy="160" rx="28" ry="18"></ellipse><rect x="60" y="154" width="114" height="21" rx="10.5"></rect></g>
</svg>
<div style="position:relative;z-index:1;padding:58px 24px 0">
<div style="display:flex;align-items:center;min-height:44px"><span style="flex:1;font:800 28px 'Baloo 2',sans-serif;color:#fff;line-height:1.1">Tin nhắn</span></div>
</div>
</div>
<div style="flex:1;margin-top:-38px;border-radius:32px 32px 0 0;background:#F4FAFD;padding:18px 20px 0;position:relative;z-index:2;display:flex;flex-direction:column;box-shadow:0 -10px 30px rgba(6,62,98,.1)">
<div style="display:flex;padding:4px;border-radius:16px;background:#E3EFF7;flex-shrink:0">
<div style="flex:1;height:42px;border-radius:13px;background:#fff;box-shadow:0 2px 0 #CFE1EE;display:flex;align-items:center;justify-content:center;gap:7px;font:700 13px 'Be Vietnam Pro',sans-serif;color:#0B72AE">Hội thoại</div>
<div style="flex:1;height:42px;border-radius:13px;display:flex;align-items:center;justify-content:center;gap:7px;font:600 13px 'Be Vietnam Pro',sans-serif;color:#5A7488">Danh bạ</div>
</div>
<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:0 26px 60px">
<svg sc-camel-view-box="0 0 140 108" width="168" height="130">
<path d="M12 14 h72 a10 10 0 0 1 10 10 v34 a10 10 0 0 1 -10 10 h-40 l-17 14 v-14 h-15 a10 10 0 0 1 -10 -10 v-34 a10 10 0 0 1 10 -10 z" fill="#fff" stroke="#DDEAF3" stroke-width="2"></path>
<rect x="26" y="31" width="44" height="6" rx="3" fill="#DDEAF3"></rect>
<rect x="26" y="45" width="30" height="6" rx="3" fill="#EDF4F9"></rect>
<rect x="72" y="52" width="56" height="42" rx="12" fill="#EAF6FD" stroke="#37AEE2" stroke-width="2"></rect>
<circle cx="88" cy="72" r="4" fill="#0B72AE"></circle><circle cx="100" cy="72" r="4" fill="#37AEE2"></circle><circle cx="112" cy="72" r="4" fill="#FFD166"></circle>
</svg>
<div style="font:800 19px 'Baloo 2',sans-serif;color:#0B3B58">Chưa có hội thoại nào</div>
<div style="font:400 13px/1.65 'Be Vietnam Pro',sans-serif;color:#5A7488;text-align:center">Nhắn trực tiếp cho giáo viên, trợ giảng hoặc phụ trách lớp của con. Danh bạ được sắp theo từng lớp con đang học.</div>
<div style="width:100%;height:56px;margin-top:6px;border-radius:18px;background:#0B72AE;color:#fff;display:flex;align-items:center;justify-content:center;gap:9px;font:700 15px 'Baloo 2',sans-serif;box-shadow:0 4px 0 #085A8B,0 10px 22px rgba(11,114,174,.26);cursor:pointer" style-active="transform:translateY(4px);box-shadow:0 0 0 #085A8B"><i class="fa-solid fa-address-book" style="font-size:14px"></i>Bắt đầu trò chuyện với giáo viên của con</div>
</div>
<div style="height:80px;flex-shrink:0;background:#fff;margin:0 -20px;display:flex;align-items:center;justify-content:space-around;padding:0 8px;box-shadow:0 -8px 24px rgba(6,62,98,.09)">
<sc-for list="{{ nav }}" as="n" hint-placeholder-count="5">
<div style="position:relative;display:flex;flex-direction:column;align-items:center;gap:4px;padding:9px 12px;border-radius:16px;min-width:52px;background:{{ n.chip }};color:{{ n.color }}">
<i class="fa-solid {{ n.icon }}" style="font-size:18px"></i><span style="font:600 10px 'Be Vietnam Pro',sans-serif">{{ n.name }}</span>
</div>
</sc-for>
</div>
</div>
</div>
</div>

<div data-screen-label="03" style="flex:none;display:flex;flex-direction:column;gap:11px">
<div style="display:flex;align-items:baseline;gap:9px">
<span style="font:700 10.5px ui-monospace,Menlo,monospace;padding:3px 7px;background:#0B3B58;color:#fff;border-radius:5px">/messages/contacts</span>
<span style="font:600 12px 'Be Vietnam Pro',sans-serif;color:#0B3B58">Danh bạ theo LỚP + profile sheet</span>
</div>
<div style="position:relative;width:430px;height:932px;border-radius:38px;overflow:hidden;background:#F4FAFD;box-shadow:0 24px 60px rgba(6,62,98,.22);display:flex;flex-direction:column">
<div style="position:relative;height:214px;flex-shrink:0;overflow:hidden;background:#0B72AE">
<svg sc-camel-view-box="0 0 430 214" sc-camel-preserve-aspect-ratio="xMidYMin slice" style="position:absolute;inset:0;width:100%;height:100%;display:block">
<defs><linearGradient id="m3-g" x1="0" y1="0" x2="0.65" y2="1"><stop offset="0" stop-color="#063E62"></stop><stop offset="0.6" stop-color="#0B72AE"></stop><stop offset="1" stop-color="#37AEE2"></stop></linearGradient><radialGradient id="m3-s" cx="0.5" cy="0.5" r="0.5"><stop offset="0.34" stop-color="#FFE9AE" stop-opacity="0.5"></stop><stop offset="1" stop-color="#FFE9AE" stop-opacity="0"></stop></radialGradient></defs>
<rect width="430" height="214" fill="url(#m3-g)"></rect>
<circle cx="296" cy="72" r="66" fill="url(#m3-s)" style="animation:ms-glow 5.4s ease-in-out infinite"></circle>
<circle cx="296" cy="72" r="22" fill="#FFF3CF"></circle>
<g fill="#fff" opacity="0.08" style="animation:ms-drift 17s ease-in-out infinite alternate"><ellipse cx="104" cy="150" rx="44" ry="26"></ellipse><ellipse cx="66" cy="160" rx="28" ry="18"></ellipse><rect x="60" y="154" width="114" height="21" rx="10.5"></rect></g>
</svg>
<div style="position:relative;z-index:1;padding:58px 24px 0">
<div style="display:flex;align-items:center;gap:12px;min-height:44px">
<span style="flex:1;font:800 28px 'Baloo 2',sans-serif;color:#fff;line-height:1.1">Tin nhắn</span>
<div style="width:40px;height:40px;border-radius:14px;background:rgba(255,255,255,.18);display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0"><i class="fa-solid fa-user-group" style="font-size:14px;color:#fff"></i></div>
</div>
</div>
</div>

<div style="flex:1;margin-top:-38px;border-radius:32px 32px 0 0;background:#F4FAFD;padding:18px 20px 0;position:relative;z-index:2;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 -10px 30px rgba(6,62,98,.1)">
<div style="display:flex;padding:4px;border-radius:16px;background:#E3EFF7;flex-shrink:0">
<div style="flex:1;height:42px;border-radius:13px;display:flex;align-items:center;justify-content:center;gap:7px;font:600 13px 'Be Vietnam Pro',sans-serif;color:#5A7488;cursor:pointer"><i class="fa-solid fa-comments" style="font-size:12px"></i>Hội thoại</div>
<div style="flex:1;height:42px;border-radius:13px;background:#fff;box-shadow:0 2px 0 #CFE1EE;display:flex;align-items:center;justify-content:center;gap:7px;font:700 13px 'Be Vietnam Pro',sans-serif;color:#0B72AE;cursor:pointer"><i class="fa-solid fa-address-book" style="font-size:12px"></i>Danh bạ</div>
</div>
<div style="display:flex;align-items:center;gap:11px;height:48px;padding:0 15px;margin-top:12px;border-radius:16px;background:#fff;border:1.5px solid #DDEAF3;flex-shrink:0">
<i class="fa-solid fa-magnifying-glass" style="font-size:13px;color:#8AA3B4"></i>
<span style="flex:1;font:400 13px 'Be Vietnam Pro',sans-serif;color:#8AA3B4">Tìm theo tên, vai trò hoặc lớp</span>
</div>
<div style="display:flex;gap:8px;margin-top:11px;overflow-x:auto;flex-shrink:0;scrollbar-width:none">
<sc-for list="{{ classChips }}" as="c" hint-placeholder-count="3">
<div style="flex-shrink:0;padding:8px 14px;border-radius:20px;background:{{ c.bg }};color:{{ c.fg }};border:1.5px solid {{ c.border }};font:700 12px 'Be Vietnam Pro',sans-serif;cursor:pointer">{{ c.name }}</div>
</sc-for>
</div>

<div style="margin-top:16px;display:flex;flex-direction:column;gap:14px">
<sc-for list="{{ groups }}" as="g" hint-placeholder-count="2">
<div style="border-radius:22px;background:#fff;box-shadow:0 3px 0 #DDEAF3;overflow:hidden">
<div style="display:flex;align-items:center;gap:10px;padding:13px 15px;background:#EAF6FD;border-bottom:1px solid #DDEAF3">
<div style="width:30px;height:30px;border-radius:10px;background:#0B72AE;display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="fa-solid {{ g.icon }}" style="font-size:12px;color:#fff"></i></div>
<div style="flex:1;min-width:0"><div style="font:700 13.5px 'Baloo 2',sans-serif;color:#0B5379">{{ g.name }}</div><div style="font:400 10.5px 'Be Vietnam Pro',sans-serif;color:#5A7488;margin-top:1px">{{ g.meta }}</div></div>
<i class="fa-solid fa-chevron-up" style="font-size:10px;color:#8AA3B4"></i>
</div>
<sc-for list="{{ g.people }}" as="p" hint-placeholder-count="3">
<div style="display:flex;align-items:center;gap:11px;padding:11px 15px;border-bottom:1px solid #EDF4F9;cursor:pointer">
<div style="position:relative;flex-shrink:0"><div style="width:40px;height:40px;border-radius:14px;background:{{ p.avaBg }};display:flex;align-items:center;justify-content:center;font:800 13px 'Baloo 2',sans-serif;color:{{ p.avaFg }}">{{ p.ava }}</div><span style="position:absolute;right:-2px;bottom:-2px;width:12px;height:12px;border-radius:50%;background:{{ p.dot }};border:2.5px solid #fff"></span></div>
<div style="flex:1;min-width:0"><div style="font:600 13.5px 'Be Vietnam Pro',sans-serif;color:#0B3B58;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{{ p.name }}</div><div style="font:400 11px 'Be Vietnam Pro',sans-serif;color:#8AA3B4;margin-top:2px">{{ p.status }}</div></div>
<span style="flex-shrink:0;padding:4px 9px;border-radius:8px;background:{{ p.roleBg }};color:{{ p.roleFg }};font:700 10px 'Be Vietnam Pro',sans-serif;white-space:nowrap">{{ p.role }}</span>
<div style="width:32px;height:32px;border-radius:11px;background:#EAF6FD;display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="fa-solid fa-comment-dots" style="font-size:12px;color:#0B72AE"></i></div>
</div>
</sc-for>
</div>
</sc-for>
</div>
</div>

<div style="position:absolute;inset:0;z-index:5;background:rgba(6,62,98,.42);display:flex;align-items:flex-end">
<div style="width:100%;background:#fff;border-radius:28px 28px 0 0;padding:12px 22px 30px;box-shadow:0 -10px 30px rgba(6,62,98,.18)">
<div style="width:44px;height:4px;border-radius:2px;background:#DDEAF3;margin:0 auto 18px"></div>
<div style="display:flex;align-items:center;gap:14px">
<div style="position:relative"><div style="width:62px;height:62px;border-radius:22px;background:#EAF6FD;display:flex;align-items:center;justify-content:center;font:800 21px 'Baloo 2',sans-serif;color:#0B72AE">TH</div><span style="position:absolute;right:-2px;bottom:-2px;width:16px;height:16px;border-radius:50%;background:#37E0A5;border:3px solid #fff"></span></div>
<div style="flex:1;min-width:0">
<div style="font:800 18px 'Baloo 2',sans-serif;color:#0B3B58">Cô Trần Thu Hà</div>
<div style="display:flex;align-items:center;gap:6px;margin-top:5px"><span style="padding:4px 9px;border-radius:8px;background:#EAF6FD;color:#0B5379;font:700 10px 'Be Vietnam Pro',sans-serif">Giáo viên</span><span style="padding:4px 9px;border-radius:8px;background:#F4FAFD;color:#5A7488;font:600 10px 'Be Vietnam Pro',sans-serif;border:1px solid #DDEAF3">Toán nâng cao 8A</span></div>
<div style="font:400 11.5px 'Be Vietnam Pro',sans-serif;color:#37E0A5;margin-top:6px;color:#0B7A62">Đang hoạt động</div>
</div>
</div>
<div style="display:flex;gap:10px;margin-top:20px">
<div style="flex:1;height:54px;border-radius:17px;background:#0B72AE;color:#fff;display:flex;align-items:center;justify-content:center;gap:8px;font:700 15px 'Baloo 2',sans-serif;box-shadow:0 4px 0 #085A8B;cursor:pointer" style-active="transform:translateY(4px);box-shadow:0 0 0 #085A8B"><i class="fa-solid fa-paper-plane" style="font-size:13px"></i>Nhắn tin</div>
<div style="width:54px;height:54px;border-radius:17px;background:#fff;border:1.5px solid #DDEAF3;display:flex;align-items:center;justify-content:center;cursor:pointer"><i class="fa-regular fa-address-card" style="font-size:16px;color:#5A7488"></i></div>
</div>
</div>
</div>
</div>
<sc-if value="{{ showNotes }}" hint-placeholder-val="{{ true }}">
<div style="width:430px;padding:14px 16px;border-radius:18px;background:#fff;border:1px solid #DDEAF3">
<div style="font:800 10px 'Be Vietnam Pro',sans-serif;letter-spacing:1.6px;color:#0B72AE;margin-bottom:8px">TẠI SAO KHÔNG GIỐNG DANH BẠ ĐIỆN THOẠI</div>
<div style="font:400 11.5px/1.7 'Be Vietnam Pro',sans-serif;color:#5A7488">Đơn vị tổ chức là <b style="color:#0B3B58">lớp học</b>, nên mỗi lớp là một <i>thẻ</i> có header xanh nhạt + đếm người, không phải một sticky letter A·B·C. Người dùng luôn nhìn thấy "con đang học lớp nào, ai phụ trách lớp đó".<br><b style="color:#0B3B58">Vai trò là badge màu</b>, mỗi vai một tone cố định dùng lại ở mọi nơi có tên người trong app: Phụ trách lớp <code>#F0EAFB/#5B3E9B</code> · Giáo viên <code>#EAF6FD/#0B5379</code> · Trợ giảng <code>#E6F5F1/#0B7A62</code> · Học viên <code>#F4FAFD/#5A7488</code> · Nhân viên <code>#FFF8E8/#8A5A00</code>.<br>Chấm online 12px viền 2.5px màu nền — <b>không</b> dùng chữ "Online" để khỏi cạnh tranh với badge vai trò.<br>Chạm liên hệ mở profile sheet trước, không nhảy thẳng vào chat: người dùng thường cần xác nhận đúng người trước khi nhắn.</div>
</div>
</sc-if>
</div>

<div data-screen-label="04" style="flex:none;display:flex;flex-direction:column;gap:11px">
<div style="display:flex;align-items:baseline;gap:9px">
<span style="font:700 10.5px ui-monospace,Menlo,monospace;padding:3px 7px;background:#5B3E9B;color:#fff;border-radius:5px">chat-module</span>
<span style="font:600 12px 'Be Vietnam Pro',sans-serif;color:#0B3B58">Màn hội thoại · themed, light</span>
</div>
<div style="position:relative;width:430px;height:932px;border-radius:38px;overflow:hidden;background:#F4FAFD;box-shadow:0 24px 60px rgba(6,62,98,.22);display:flex;flex-direction:column">

<div style="flex-shrink:0;background:#0B72AE;padding:52px 16px 0;position:relative;z-index:3;box-shadow:0 4px 18px rgba(6,62,98,.14)">
<div style="display:flex;align-items:center;gap:11px;height:60px">
<div style="width:36px;height:36px;border-radius:12px;display:flex;align-items:center;justify-content:center;cursor:pointer"><i class="fa-solid fa-arrow-left" style="font-size:16px;color:#fff"></i></div>
<div style="position:relative;flex-shrink:0"><div style="width:40px;height:40px;border-radius:14px;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;font:800 13px 'Baloo 2',sans-serif;color:#fff">8A</div><span style="position:absolute;right:-2px;bottom:-2px;width:12px;height:12px;border-radius:50%;background:#37E0A5;border:2.5px solid #0B72AE"></span></div>
<div style="flex:1;min-width:0">
<div style="font:700 15px 'Baloo 2',sans-serif;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Lớp Toán nâng cao 8A</div>
<div style="font:400 11px 'Be Vietnam Pro',sans-serif;color:rgba(255,255,255,.75);margin-top:1px">4 thành viên · 2 đang hoạt động</div>
</div>
<div style="width:36px;height:36px;border-radius:12px;display:flex;align-items:center;justify-content:center;cursor:pointer"><i class="fa-solid fa-magnifying-glass" style="font-size:14px;color:#fff"></i></div>
<div style="width:36px;height:36px;border-radius:12px;display:flex;align-items:center;justify-content:center;cursor:pointer"><i class="fa-solid fa-ellipsis-vertical" style="font-size:15px;color:#fff"></i></div>
</div>
<div style="display:flex;align-items:center;gap:10px;margin:0 -16px;padding:9px 18px;background:#FFF8E8;border-top:1px solid rgba(255,255,255,.12)">
<i class="fa-solid fa-thumbtack" style="font-size:11px;color:#B4720B;transform:rotate(40deg)"></i>
<div style="flex:1;min-width:0"><div style="font:700 10px 'Be Vietnam Pro',sans-serif;letter-spacing:.8px;color:#B4720B">TIN ĐÃ GHIM</div><div style="font:400 11.5px 'Be Vietnam Pro',sans-serif;color:#5A3D00;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:1px">Lịch kiểm tra giữa kỳ: thứ 5 ngày 06/08, 14h00 phòng 201</div></div>
<i class="fa-solid fa-chevron-down" style="font-size:10px;color:#B4720B"></i>
</div>
</div>

<div style="flex:1;display:flex;flex-direction:column;justify-content:flex-end;gap:10px;padding:16px 16px 12px;overflow:hidden;background:#F4FAFD">

<div style="display:flex;align-items:center;gap:10px;margin:2px 0"><div style="flex:1;height:1px;background:#DDEAF3"></div><span style="font:600 10.5px 'Be Vietnam Pro',sans-serif;color:#8AA3B4">Hôm nay</span><div style="flex:1;height:1px;background:#DDEAF3"></div></div>

<div style="display:flex;gap:9px;align-items:flex-end">
<div style="width:30px;height:30px;border-radius:11px;background:#EAF6FD;display:flex;align-items:center;justify-content:center;font:800 10.5px 'Baloo 2',sans-serif;color:#0B72AE;flex-shrink:0">TH</div>
<div style="max-width:290px">
<div style="font:600 10.5px 'Be Vietnam Pro',sans-serif;color:#8AA3B4;margin:0 0 4px 3px">Cô Thu Hà · Giáo viên</div>
<div style="padding:11px 14px;border-radius:20px 20px 20px 6px;background:#fff;border:1px solid #DDEAF3;font:400 13.5px/20px 'Be Vietnam Pro',sans-serif;color:#0B3B58">Chào chị, tuần này lớp có buổi ôn tập bổ sung vào chiều thứ 6 ạ. Chị cho bé tham gia được không ạ?</div>
<div style="font:400 10px 'Be Vietnam Pro',sans-serif;color:#8AA3B4;margin:4px 0 0 3px">08:12</div>
</div>
</div>

<div style="display:flex;justify-content:flex-end">
<div style="max-width:290px;display:flex;flex-direction:column;align-items:flex-end">
<div style="padding:11px 14px;border-radius:20px 20px 6px 20px;background:#0B72AE;font:400 13.5px/20px 'Be Vietnam Pro',sans-serif;color:#fff">Dạ được cô ạ. Em cho bé đi ạ, cảm ơn cô nhiều.</div>
<div style="display:flex;align-items:center;gap:5px;margin:4px 3px 0"><span style="font:400 10px 'Be Vietnam Pro',sans-serif;color:#8AA3B4">08:20</span><i class="fa-solid fa-check-double" style="font-size:10px;color:#37AEE2"></i></div>
</div>
</div>

<div style="display:flex;gap:9px;align-items:flex-end">
<div style="width:30px;height:30px;border-radius:11px;background:#EAF6FD;display:flex;align-items:center;justify-content:center;font:800 10.5px 'Baloo 2',sans-serif;color:#0B72AE;flex-shrink:0">TH</div>
<div style="max-width:290px;position:relative">
<div style="padding:6px;border-radius:20px 20px 20px 6px;background:#fff;border:1px solid #DDEAF3">
<div style="width:236px;height:150px;border-radius:15px;overflow:hidden;position:relative;background:#CFE8F7">
<svg sc-camel-view-box="0 0 236 150" style="position:absolute;inset:0;width:100%;height:100%">
<rect width="236" height="150" fill="#CFE8F7"></rect>
<g stroke="#B9DCF1" stroke-width="9"><path d="M-20 40 L60 -40 M10 90 L110 -10 M40 150 L170 20 M110 160 L240 30 M180 170 L280 70"></path></g>
<circle cx="118" cy="72" r="21" fill="#fff" opacity=".9"></circle><path d="M110 62 v20 l17 -10 z" fill="#0B72AE"></path>
</svg>
<div style="position:absolute;left:8px;bottom:8px;padding:3px 8px;border-radius:8px;background:rgba(6,62,98,.6);font:600 10px 'Be Vietnam Pro',sans-serif;color:#fff">1/4</div>
</div>
</div>
<div style="display:flex;align-items:center;gap:6px;margin:5px 0 0 3px"><span style="font:400 10px 'Be Vietnam Pro',sans-serif;color:#8AA3B4">08:24</span></div>
<div style="position:absolute;right:-4px;bottom:20px;display:flex;align-items:center;gap:3px;padding:3px 8px;border-radius:20px;background:#fff;border:1px solid #DDEAF3;box-shadow:0 2px 6px rgba(6,62,98,.1)"><span style="font-size:11px">❤️</span><span style="font:700 10px 'Be Vietnam Pro',sans-serif;color:#5A7488">2</span></div>
</div>
</div>

<div style="display:flex;justify-content:flex-end">
<div style="max-width:290px;display:flex;flex-direction:column;align-items:flex-end">
<div style="display:flex;align-items:center;gap:11px;padding:10px 14px;border-radius:20px 20px 6px 20px;background:#0B72AE;min-width:224px">
<div style="width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,.22);display:flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer"><i class="fa-solid fa-play" style="font-size:11px;color:#fff"></i></div>
<div style="flex:1;display:flex;align-items:center;gap:2.5px;height:24px">
<sc-for list="{{ wave }}" as="h" hint-placeholder-count="22"><span style="flex:1;height:{{ h.h }}px;border-radius:2px;background:{{ h.c }}"></span></sc-for>
</div>
<span style="font:600 11px ui-monospace,Menlo,monospace;color:rgba(255,255,255,.85);flex-shrink:0">0:14</span>
</div>
<div style="display:flex;align-items:center;gap:5px;margin:4px 3px 0"><span style="font:400 10px 'Be Vietnam Pro',sans-serif;color:#8AA3B4">08:31</span><i class="fa-solid fa-check-double" style="font-size:10px;color:#37AEE2"></i></div>
</div>
</div>

<div style="display:flex;align-items:center;gap:10px;margin:4px 0"><div style="flex:1;height:1px;background:#EF5B4C;opacity:.35"></div><span style="font:700 10.5px 'Be Vietnam Pro',sans-serif;color:#EF5B4C">Tin chưa đọc</span><div style="flex:1;height:1px;background:#EF5B4C;opacity:.35"></div></div>

<div style="display:flex;gap:9px;align-items:flex-end">
<div style="width:30px;height:30px;border-radius:11px;background:#E6F5F1;display:flex;align-items:center;justify-content:center;font:800 10.5px 'Baloo 2',sans-serif;color:#0B7A62;flex-shrink:0">NL</div>
<div style="max-width:290px">
<div style="font:600 10.5px 'Be Vietnam Pro',sans-serif;color:#8AA3B4;margin:0 0 4px 3px">Thầy Nam Long · Trợ giảng</div>
<div style="display:flex;align-items:center;gap:11px;padding:11px 13px;border-radius:20px 20px 20px 6px;background:#fff;border:1px solid #DDEAF3;min-width:250px">
<div style="width:38px;height:38px;border-radius:12px;background:#FFF1EF;display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="fa-solid fa-file-pdf" style="font-size:16px;color:#B03428"></i></div>
<div style="flex:1;min-width:0"><div style="font:600 12.5px 'Be Vietnam Pro',sans-serif;color:#0B3B58;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Đề ôn giữa kỳ - Toán 8.pdf</div><div style="font:400 10.5px 'Be Vietnam Pro',sans-serif;color:#8AA3B4;margin-top:2px">1,4 MB</div></div>
<i class="fa-solid fa-arrow-down" style="font-size:13px;color:#0B72AE"></i>
</div>
<div style="font:400 10px 'Be Vietnam Pro',sans-serif;color:#8AA3B4;margin:4px 0 0 3px">08:40</div>
</div>
</div>

<div style="display:flex;justify-content:center"><span style="padding:5px 12px;border-radius:20px;background:#EAF6FD;font:500 10.5px 'Be Vietnam Pro',sans-serif;color:#5A7488">Cô Thu Hà đã ghim một tin nhắn</span></div>

<div style="display:flex;gap:9px;align-items:flex-end">
<div style="width:30px;height:30px;border-radius:11px;background:#EAF6FD;display:flex;align-items:center;justify-content:center;font:800 10.5px 'Baloo 2',sans-serif;color:#0B72AE;flex-shrink:0">TH</div>
<div style="display:flex;align-items:center;gap:5px;padding:12px 16px;border-radius:20px 20px 20px 6px;background:#fff;border:1px solid #DDEAF3">
<span style="width:6px;height:6px;border-radius:50%;background:#8AA3B4;animation:ms-type 1.2s ease-in-out infinite"></span>
<span style="width:6px;height:6px;border-radius:50%;background:#8AA3B4;animation:ms-type 1.2s ease-in-out .15s infinite"></span>
<span style="width:6px;height:6px;border-radius:50%;background:#8AA3B4;animation:ms-type 1.2s ease-in-out .3s infinite"></span>
</div>
</div>
</div>

<div style="flex-shrink:0;background:#fff;padding:10px 14px 26px;box-shadow:0 -8px 24px rgba(6,62,98,.09)">
<div style="display:flex;align-items:center;gap:10px;padding:9px 12px;margin-bottom:9px;border-radius:14px;background:#F4FAFD;border-left:3px solid #0B72AE">
<div style="flex:1;min-width:0"><div style="font:700 10.5px 'Be Vietnam Pro',sans-serif;color:#0B72AE">Trả lời Cô Thu Hà</div><div style="font:400 11.5px 'Be Vietnam Pro',sans-serif;color:#5A7488;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:1px">Đề ôn giữa kỳ - Toán 8.pdf</div></div>
<i class="fa-solid fa-xmark" style="font-size:13px;color:#8AA3B4;cursor:pointer"></i>
</div>
<div style="display:flex;align-items:flex-end;gap:9px">
<div style="width:42px;height:42px;border-radius:14px;background:#EAF6FD;display:flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer"><i class="fa-solid fa-plus" style="font-size:16px;color:#0B72AE"></i></div>
<div style="flex:1;display:flex;align-items:center;gap:9px;min-height:42px;padding:0 13px;border-radius:16px;background:#F4FAFD;border:1.5px solid #DDEAF3">
<span style="flex:1;font:400 13.5px 'Be Vietnam Pro',sans-serif;color:#8AA3B4">Nhắn tin…</span>
<i class="fa-regular fa-face-smile" style="font-size:16px;color:#8AA3B4;cursor:pointer"></i>
</div>
<div style="width:42px;height:42px;border-radius:14px;background:#0B72AE;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 3px 0 #085A8B;cursor:pointer"><i class="fa-solid fa-microphone" style="font-size:15px;color:#fff"></i></div>
</div>
</div>
</div>
<sc-if value="{{ showNotes }}" hint-placeholder-val="{{ true }}">
<div style="width:430px;padding:14px 16px;border-radius:18px;background:#F6F1FF;border:1px solid #DED0F5">
<div style="font:800 10px 'Be Vietnam Pro',sans-serif;letter-spacing:1.6px;color:#5B3E9B;margin-bottom:8px">MÀN NÀY LÀ CỦA MODULE — ĐỌC NHƯ SPEC THEME</div>
<div style="font:400 11.5px/1.7 'Be Vietnam Pro',sans-serif;color:#5A7488"><b style="color:#0B3B58">Hai hệ header khớp nhau</b>: header module lấy đúng nền <code>#0B72AE</code>, padding-top 52, cao 60, tên 15px Baloo 2 — cùng số đo với header app ở màn 01, nên chuyển màn không thấy "nhảy" chiều cao hay đổi tông.<br><b style="color:#0B3B58">PinnedBar</b> dán liền dưới header, dùng cặp warning <code>#FFF8E8 / #5A3D00</code> (chữ trên tint) + icon <code>#B4720B</code> — không dùng nền xanh để khỏi lẫn với bubble.<br><b style="color:#0B3B58">Bubble</b>: mine <code>#0B72AE</code>/trắng, theirs <code>#fff</code> + viền <code>#DDEAF3</code>; radius 20 với góc chân 6. Nhóm mới đổi người mới hiện avatar + tên vai trò.<br><b style="color:#0B3B58">Vạch chưa đọc</b> dùng danger <code>#EF5B4C</code> — vạch ngày dùng <code>#DDEAF3</code>: hai vạch không được cùng màu.<br>Cột tin dùng <code>justify-content:flex-end</code>, bong bóng mọc lên từ composer. Voice waveform 22 cột, cột đã phát <code>#fff</code>, chưa phát <code>rgba(255,255,255,.4)</code>.</div>
</div>
</sc-if>
</div>

<div data-screen-label="05" style="flex:none;display:flex;flex-direction:column;gap:11px">
<div style="display:flex;align-items:baseline;gap:9px">
<span style="font:700 10.5px ui-monospace,Menlo,monospace;padding:3px 7px;background:#5B3E9B;color:#fff;border-radius:5px">chat-module</span>
<span style="font:600 12px 'Be Vietnam Pro',sans-serif;color:#0B3B58">Long-press tin · reaction + sheet hành động</span>
</div>
<div style="position:relative;width:430px;height:932px;border-radius:38px;overflow:hidden;background:#F4FAFD;box-shadow:0 24px 60px rgba(6,62,98,.22);display:flex;flex-direction:column">
<div style="flex-shrink:0;background:#0B72AE;padding:52px 16px 0">
<div style="display:flex;align-items:center;gap:11px;height:60px">
<i class="fa-solid fa-arrow-left" style="font-size:16px;color:#fff;width:36px;text-align:center"></i>
<div style="width:40px;height:40px;border-radius:14px;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;font:800 13px 'Baloo 2',sans-serif;color:#fff">8A</div>
<div style="flex:1;min-width:0"><div style="font:700 15px 'Baloo 2',sans-serif;color:#fff">Lớp Toán nâng cao 8A</div><div style="font:400 11px 'Be Vietnam Pro',sans-serif;color:rgba(255,255,255,.75);margin-top:1px">4 thành viên</div></div>
</div>
</div>
<div style="flex:1;display:flex;flex-direction:column;justify-content:flex-end;gap:10px;padding:16px;filter:blur(1.5px);opacity:.55">
<div style="display:flex;justify-content:flex-end"><div style="max-width:290px;padding:11px 14px;border-radius:20px 20px 6px 20px;background:#0B72AE;font:400 13.5px/20px 'Be Vietnam Pro',sans-serif;color:#fff">Dạ được cô ạ. Em cho bé đi ạ, cảm ơn cô nhiều.</div></div>
<div style="display:flex;gap:9px;align-items:flex-end"><div style="width:30px;height:30px;border-radius:11px;background:#EAF6FD;flex-shrink:0"></div><div style="max-width:280px;padding:11px 14px;border-radius:20px 20px 20px 6px;background:#fff;border:1px solid #DDEAF3;font:400 13.5px/20px 'Be Vietnam Pro',sans-serif;color:#0B3B58">Dạ vâng em cảm ơn chị nhiều ạ.</div></div>
</div>

<div style="position:absolute;inset:0;z-index:5;background:rgba(6,62,98,.5);display:flex;flex-direction:column;justify-content:flex-end">
<div style="padding:0 16px 12px;display:flex;flex-direction:column;align-items:flex-start;gap:10px">
<div style="display:flex;gap:6px;padding:8px 12px;border-radius:26px;background:#fff;box-shadow:0 8px 24px rgba(6,62,98,.28);margin-left:39px">
<sc-for list="{{ reactions }}" as="r" hint-placeholder-count="6">
<div style="width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:22px;cursor:pointer;background:{{ r.bg }}">{{ r.e }}</div>
</sc-for>
<div style="width:38px;height:38px;border-radius:50%;background:#F4FAFD;display:flex;align-items:center;justify-content:center;cursor:pointer"><i class="fa-solid fa-plus" style="font-size:13px;color:#5A7488"></i></div>
</div>
<div style="display:flex;gap:9px;align-items:flex-end">
<div style="width:30px;height:30px;border-radius:11px;background:#EAF6FD;display:flex;align-items:center;justify-content:center;font:800 10.5px 'Baloo 2',sans-serif;color:#0B72AE;flex-shrink:0">TH</div>
<div style="max-width:290px;padding:11px 14px;border-radius:20px 20px 20px 6px;background:#fff;font:400 13.5px/20px 'Be Vietnam Pro',sans-serif;color:#0B3B58;box-shadow:0 10px 30px rgba(6,62,98,.3)">Chào chị, tuần này lớp có buổi ôn tập bổ sung vào chiều thứ 6 ạ. Chị cho bé tham gia được không ạ?</div>
</div>
</div>
<div style="background:#fff;border-radius:28px 28px 0 0;padding:12px 10px 26px;box-shadow:0 -10px 30px rgba(6,62,98,.2)">
<div style="width:44px;height:4px;border-radius:2px;background:#DDEAF3;margin:0 auto 12px"></div>
<sc-for list="{{ msgActions }}" as="a" hint-placeholder-count="8">
<div style="display:flex;align-items:center;gap:14px;padding:12px 14px;border-radius:16px;cursor:pointer" style-hover="background:#F4FAFD">
<div style="width:34px;height:34px;border-radius:12px;background:{{ a.bg }};display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="fa-solid {{ a.icon }}" style="font-size:13px;color:{{ a.fg }}"></i></div>
<span style="flex:1;font:600 14px 'Be Vietnam Pro',sans-serif;color:{{ a.textFg }}">{{ a.name }}</span>
<sc-if value="{{ a.meta }}" hint-placeholder-val="{{ false }}"><span style="font:400 11.5px 'Be Vietnam Pro',sans-serif;color:#8AA3B4">{{ a.meta }}</span></sc-if>
</div>
</sc-for>
</div>
</div>
</div>
</div>

<div data-screen-label="06" style="flex:none;display:flex;flex-direction:column;gap:11px">
<div style="display:flex;align-items:baseline;gap:9px">
<span style="font:700 10.5px ui-monospace,Menlo,monospace;padding:3px 7px;background:#5B3E9B;color:#fff;border-radius:5px">chat-module</span>
<span style="font:600 12px 'Be Vietnam Pro',sans-serif;color:#0B3B58">Thông tin hội thoại · thành viên + kho media</span>
</div>
<div style="position:relative;width:430px;height:932px;border-radius:38px;overflow:hidden;background:#F4FAFD;box-shadow:0 24px 60px rgba(6,62,98,.22);display:flex;flex-direction:column">
<div style="flex-shrink:0;background:#0B72AE;padding:52px 16px 22px;display:flex;flex-direction:column;align-items:center">
<div style="align-self:flex-start;display:flex;align-items:center;width:100%;height:40px"><i class="fa-solid fa-arrow-left" style="font-size:16px;color:#fff"></i><span style="flex:1;text-align:center;font:700 15px 'Baloo 2',sans-serif;color:#fff">Thông tin hội thoại</span><span style="width:16px"></span></div>
<div style="width:78px;height:78px;border-radius:26px;background:rgba(255,255,255,.2);border:2px solid rgba(255,255,255,.32);display:flex;align-items:center;justify-content:center;font:800 26px 'Baloo 2',sans-serif;color:#fff;margin-top:12px">8A</div>
<div style="font:800 19px 'Baloo 2',sans-serif;color:#fff;margin-top:10px">Lớp Toán nâng cao 8A</div>
<div style="font:400 12px 'Be Vietnam Pro',sans-serif;color:rgba(255,255,255,.75);margin-top:2px">Nhóm lớp · 4 thành viên</div>
</div>

<div style="flex:1;padding:18px 20px 0;overflow:hidden;display:flex;flex-direction:column;gap:14px">
<div style="flex-shrink:0;border-radius:20px;background:#fff;box-shadow:0 3px 0 #DDEAF3;overflow:hidden">
<div style="display:flex;align-items:center;gap:12px;padding:14px 16px">
<div style="width:34px;height:34px;border-radius:12px;background:#EAF6FD;display:flex;align-items:center;justify-content:center"><i class="fa-solid fa-bell" style="font-size:13px;color:#0B72AE"></i></div>
<span style="flex:1;font:600 13.5px 'Be Vietnam Pro',sans-serif;color:#0B3B58">Thông báo hội thoại</span>
<div style="width:48px;height:28px;border-radius:14px;background:#0B72AE;padding:3px;display:flex;justify-content:flex-end"><div style="width:22px;height:22px;border-radius:50%;background:#fff"></div></div>
</div>
<div style="height:1px;background:#EDF4F9;margin:0 16px"></div>
<div style="display:flex;align-items:center;gap:12px;padding:14px 16px;cursor:pointer">
<div style="width:34px;height:34px;border-radius:12px;background:#FFF8E8;display:flex;align-items:center;justify-content:center"><i class="fa-solid fa-thumbtack" style="font-size:13px;color:#B4720B"></i></div>
<span style="flex:1;font:600 13.5px 'Be Vietnam Pro',sans-serif;color:#0B3B58">Tin đã ghim</span>
<span style="font:600 12px 'Be Vietnam Pro',sans-serif;color:#8AA3B4">3</span><i class="fa-solid fa-chevron-right" style="font-size:11px;color:#C3D4DF"></i>
</div>
</div>

<div style="flex-shrink:0">
<div style="display:flex;align-items:center;margin-bottom:10px"><span style="flex:1;font:800 11px 'Be Vietnam Pro',sans-serif;letter-spacing:1.7px;color:#8AA3B4">ẢNH &amp; FILE ĐÃ CHIA SẺ</span><span style="font:600 11.5px 'Be Vietnam Pro',sans-serif;color:#0B72AE;cursor:pointer">Xem tất cả</span></div>
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
<sc-for list="{{ media }}" as="m" hint-placeholder-count="8">
<div style="aspect-ratio:1;border-radius:14px;overflow:hidden;position:relative;background:{{ m.bg }};display:flex;align-items:center;justify-content:center">
<sc-if value="{{ m.file }}" hint-placeholder-val="{{ false }}"><i class="fa-solid {{ m.icon }}" style="font-size:19px;color:{{ m.fg }}"></i></sc-if>
<sc-if value="{{ m.photo }}" hint-placeholder-val="{{ true }}">
<svg sc-camel-view-box="0 0 60 60" style="position:absolute;inset:0;width:100%;height:100%"><rect width="60" height="60" fill="{{ m.bg }}"></rect><g stroke="{{ m.fg }}" stroke-width="4" opacity=".55"><path d="M-6 18 L18 -6 M-6 44 L44 -6 M6 60 L60 6 M32 66 L70 28"></path></g></svg>
</sc-if>
<sc-if value="{{ m.more }}" hint-placeholder-val="{{ false }}"><div style="position:absolute;inset:0;background:rgba(6,62,98,.55);display:flex;align-items:center;justify-content:center;font:800 15px 'Baloo 2',sans-serif;color:#fff">+16</div></sc-if>
</div>
</sc-for>
</div>
</div>

<div style="flex-shrink:0">
<div style="font:800 11px 'Be Vietnam Pro',sans-serif;letter-spacing:1.7px;color:#8AA3B4;margin-bottom:10px">THÀNH VIÊN · 4</div>
<div style="border-radius:20px;background:#fff;box-shadow:0 3px 0 #DDEAF3;overflow:hidden">
<sc-for list="{{ members }}" as="p" hint-placeholder-count="4">
<div style="display:flex;align-items:center;gap:11px;padding:11px 15px;border-bottom:1px solid #EDF4F9;cursor:pointer">
<div style="position:relative;flex-shrink:0"><div style="width:38px;height:38px;border-radius:13px;background:{{ p.avaBg }};display:flex;align-items:center;justify-content:center;font:800 12.5px 'Baloo 2',sans-serif;color:{{ p.avaFg }}">{{ p.ava }}</div><span style="position:absolute;right:-2px;bottom:-2px;width:11px;height:11px;border-radius:50%;background:{{ p.dot }};border:2.5px solid #fff"></span></div>
<span style="flex:1;min-width:0;font:600 13.5px 'Be Vietnam Pro',sans-serif;color:#0B3B58;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{{ p.name }}</span>
<span style="padding:4px 9px;border-radius:8px;background:{{ p.roleBg }};color:{{ p.roleFg }};font:700 10px 'Be Vietnam Pro',sans-serif;white-space:nowrap">{{ p.role }}</span>
<i class="fa-solid fa-ellipsis" style="font-size:13px;color:#C3D4DF"></i>
</div>
</sc-for>
</div>
</div>
</div>

<div style="flex-shrink:0;padding:14px 20px 28px;background:#F4FAFD;box-shadow:0 -8px 24px rgba(6,62,98,.06);display:flex;gap:10px">
<div style="flex:1;height:52px;border-radius:17px;background:#fff;border:1.5px solid #DDEAF3;display:flex;align-items:center;justify-content:center;gap:8px;font:700 14px 'Be Vietnam Pro',sans-serif;color:#5A7488;cursor:pointer"><i class="fa-solid fa-box-archive" style="font-size:13px"></i>Lưu trữ</div>
<div style="flex:1;height:52px;border-radius:17px;background:#FFF1EF;border:1.5px solid #F5CFC9;display:flex;align-items:center;justify-content:center;gap:8px;font:700 14px 'Be Vietnam Pro',sans-serif;color:#B03428;cursor:pointer"><i class="fa-solid fa-arrow-right-from-bracket" style="font-size:13px"></i>Rời nhóm</div>
</div>
</div>
</div>

<div data-screen-label="07" style="flex:none;display:flex;flex-direction:column;gap:11px">
<div style="display:flex;align-items:baseline;gap:9px">
<span style="font:700 10.5px ui-monospace,Menlo,monospace;padding:3px 7px;background:#0B3B58;color:#fff;border-radius:5px">/messages/camera</span>
<span style="font:600 12px 'Be Vietnam Pro',sans-serif;color:#0B3B58">Camera của app · chụp gửi ngay</span>
</div>
<div style="position:relative;width:430px;height:932px;border-radius:38px;overflow:hidden;background:#04182A;display:flex;flex-direction:column">
<svg sc-camel-view-box="0 0 430 932" style="position:absolute;inset:0;width:100%;height:100%">
<defs><linearGradient id="m7-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#04182A"></stop><stop offset="0.55" stop-color="#0A2B44"></stop><stop offset="1" stop-color="#04182A"></stop></linearGradient></defs>
<rect width="430" height="932" fill="url(#m7-g)"></rect>
<g stroke="#12405F" stroke-width="1"><path d="M0 300 H430 M0 620 H430 M143 0 V932 M287 0 V932"></path></g>
<circle cx="215" cy="460" r="150" fill="#0B72AE" opacity=".08"></circle>
</svg>
<div style="position:relative;z-index:1;display:flex;flex-direction:column;height:100%">
<div style="padding:52px 20px 0;display:flex;align-items:center;gap:12px">
<div style="width:40px;height:40px;border-radius:14px;background:rgba(255,255,255,.14);display:flex;align-items:center;justify-content:center;cursor:pointer"><i class="fa-solid fa-xmark" style="font-size:17px;color:#fff"></i></div>
<div style="flex:1;text-align:center;font:700 14px 'Baloo 2',sans-serif;color:#fff">Gửi tới Cô Thu Hà</div>
<div style="width:40px;height:40px;border-radius:14px;background:rgba(255,255,255,.14);display:flex;align-items:center;justify-content:center;cursor:pointer"><i class="fa-solid fa-bolt" style="font-size:15px;color:#FFD166"></i></div>
</div>
<div style="flex:1;display:flex;align-items:center;justify-content:center">
<div style="width:236px;height:236px;border-radius:34px;border:2px dashed rgba(255,255,255,.22);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px">
<i class="fa-solid fa-camera" style="font-size:34px;color:rgba(255,255,255,.35)"></i>
<span style="font:400 12.5px/1.6 'Be Vietnam Pro',sans-serif;color:rgba(255,255,255,.55);text-align:center;max-width:170px">Khung ngắm — ảnh được nén trước khi tải lên</span>
</div>
</div>
<div style="padding:0 20px 46px">
<div style="display:flex;gap:8px;justify-content:center;margin-bottom:22px">
<span style="padding:7px 14px;border-radius:20px;background:rgba(55,224,165,.16);border:1px solid rgba(55,224,165,.4);font:600 11px 'Be Vietnam Pro',sans-serif;color:#37E0A5">Đã cấp quyền camera</span>
</div>
<div style="display:flex;align-items:center;justify-content:space-between;padding:0 24px">
<div style="width:52px;height:52px;border-radius:18px;background:rgba(255,255,255,.14);display:flex;align-items:center;justify-content:center;cursor:pointer"><i class="fa-regular fa-images" style="font-size:19px;color:#fff"></i></div>
<div style="width:80px;height:80px;border-radius:50%;background:rgba(255,255,255,.16);border:3px solid rgba(255,255,255,.5);display:flex;align-items:center;justify-content:center;cursor:pointer;animation:ms-rec 2.6s ease-in-out infinite"><div style="width:62px;height:62px;border-radius:50%;background:#fff"></div></div>
<div style="width:52px;height:52px;border-radius:18px;background:rgba(255,255,255,.14);display:flex;align-items:center;justify-content:center;cursor:pointer"><i class="fa-solid fa-camera-rotate" style="font-size:19px;color:#fff"></i></div>
</div>
</div>
</div>
</div>
</div>

<div data-screen-label="08" style="flex:none;display:flex;flex-direction:column;gap:11px">
<div style="display:flex;align-items:baseline;gap:9px">
<span style="font:700 10.5px ui-monospace,Menlo,monospace;padding:3px 7px;background:#0B3B58;color:#fff;border-radius:5px">/messages</span>
<span style="font:600 12px 'Be Vietnam Pro',sans-serif;color:#0B3B58">Kết nối · banner mảnh thay overlay che màn</span>
</div>
<div style="position:relative;width:430px;height:932px;border-radius:38px;overflow:hidden;background:#F4FAFD;box-shadow:0 24px 60px rgba(6,62,98,.22);display:flex;flex-direction:column">
<div style="flex-shrink:0;background:#0B72AE;padding:52px 16px 0">
<div style="display:flex;align-items:center;gap:11px;height:60px">
<i class="fa-solid fa-arrow-left" style="font-size:16px;color:#fff;width:36px;text-align:center"></i>
<div style="width:40px;height:40px;border-radius:14px;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;font:800 13px 'Baloo 2',sans-serif;color:#fff">TH</div>
<div style="flex:1;min-width:0"><div style="font:700 15px 'Baloo 2',sans-serif;color:#fff">Cô Trần Thu Hà</div><div style="font:400 11px 'Be Vietnam Pro',sans-serif;color:rgba(255,255,255,.75);margin-top:1px">Đang kết nối lại…</div></div>
</div>
<div style="display:flex;align-items:center;gap:10px;margin:0 -16px;padding:10px 18px;background:#FFF8E8">
<i class="fa-solid fa-rotate" style="font-size:12px;color:#B4720B;animation:ms-spin 1.4s linear infinite"></i>
<span style="flex:1;font:600 12px 'Be Vietnam Pro',sans-serif;color:#5A3D00">Mất kết nối — đang thử lại (lần 2)</span>
<span style="font:700 11.5px 'Be Vietnam Pro',sans-serif;color:#B4720B;cursor:pointer">Thử ngay</span>
</div>
</div>

<div style="flex:1;display:flex;flex-direction:column;justify-content:flex-end;gap:10px;padding:16px">
<div style="display:flex;align-items:center;gap:10px"><div style="flex:1;height:1px;background:#DDEAF3"></div><span style="font:600 10.5px 'Be Vietnam Pro',sans-serif;color:#8AA3B4">Hôm nay</span><div style="flex:1;height:1px;background:#DDEAF3"></div></div>
<div style="display:flex;gap:9px;align-items:flex-end">
<div style="width:30px;height:30px;border-radius:11px;background:#EAF6FD;display:flex;align-items:center;justify-content:center;font:800 10.5px 'Baloo 2',sans-serif;color:#0B72AE;flex-shrink:0">TH</div>
<div style="max-width:290px;padding:11px 14px;border-radius:20px 20px 20px 6px;background:#fff;border:1px solid #DDEAF3;font:400 13.5px/20px 'Be Vietnam Pro',sans-serif;color:#0B3B58">Chị nhớ nộp phiếu đăng ký cho bé trước thứ 6 nhé ạ.</div>
</div>
<div style="display:flex;justify-content:center"><span style="padding:5px 12px;border-radius:20px;background:#EAF6FD;font:500 10.5px 'Be Vietnam Pro',sans-serif;color:#5A7488">Nội dung đang xem là bản lưu ngoại tuyến</span></div>
<div style="display:flex;justify-content:flex-end">
<div style="max-width:290px;display:flex;flex-direction:column;align-items:flex-end">
<div style="padding:11px 14px;border-radius:20px 20px 6px 20px;background:#7FB6D6;font:400 13.5px/20px 'Be Vietnam Pro',sans-serif;color:#fff">Dạ vâng em nộp ngay ạ.</div>
<div style="display:flex;align-items:center;gap:5px;margin:5px 3px 0"><i class="fa-solid fa-circle-exclamation" style="font-size:11px;color:#B03428"></i><span style="font:600 10.5px 'Be Vietnam Pro',sans-serif;color:#B03428">Chưa gửi được</span><span style="font:700 10.5px 'Be Vietnam Pro',sans-serif;color:#0B72AE;cursor:pointer;text-decoration:underline">Gửi lại</span></div>
</div>
</div>
</div>

<div style="flex-shrink:0;background:#fff;padding:10px 14px 26px;box-shadow:0 -8px 24px rgba(6,62,98,.09);display:flex;align-items:flex-end;gap:9px">
<div style="width:42px;height:42px;border-radius:14px;background:#EAF6FD;display:flex;align-items:center;justify-content:center"><i class="fa-solid fa-plus" style="font-size:16px;color:#0B72AE"></i></div>
<div style="flex:1;display:flex;align-items:center;gap:9px;min-height:42px;padding:0 13px;border-radius:16px;background:#F4FAFD;border:1.5px solid #DDEAF3"><span style="flex:1;font:400 13.5px 'Be Vietnam Pro',sans-serif;color:#8AA3B4">Nhắn tin…</span><i class="fa-regular fa-face-smile" style="font-size:16px;color:#8AA3B4"></i></div>
<div style="width:42px;height:42px;border-radius:14px;background:#0B72AE;display:flex;align-items:center;justify-content:center;box-shadow:0 3px 0 #085A8B"><i class="fa-solid fa-microphone" style="font-size:15px;color:#fff"></i></div>
</div>
</div>
<sc-if value="{{ showNotes }}" hint-placeholder-val="{{ true }}">
<div style="width:430px;padding:14px 16px;border-radius:18px;background:#fff;border:1px solid #DDEAF3">
<div style="font:800 10px 'Be Vietnam Pro',sans-serif;letter-spacing:1.6px;color:#0B72AE;margin-bottom:8px">THANG TRẠNG THÁI KẾT NỐI — 3 MỨC, KHÔNG PHẢI 1 OVERLAY</div>
<div style="font:400 11.5px/1.7 'Be Vietnam Pro',sans-serif;color:#5A7488"><b style="color:#0B3B58">Mức 1 — đang kết nối lần đầu (&lt;15s):</b> chip "Đang kết nối" ở hero màn 01 + skeleton hàng hội thoại. Không chặn thao tác.<br><b style="color:#0B3B58">Mức 2 — rớt kết nối giữa chừng:</b> banner mảnh 40px dưới header (dựng ở đây), nội dung cache vẫn đọc được, tự thử lại backoff 2·4·8·16s, nút "Thử ngay". Đây là thay đổi lớn nhất so với hiện tại: <i>không</i> overlay che toàn màn cho mất mạng thoáng qua.<br><b style="color:#0B3B58">Mức 3 — lỗi lấy token / quá 15s ở lần đầu:</b> mới dùng màn lỗi toàn khung (không có gì để hiện), tiêu đề + mô tả + nút "Thử lại" raised. Token hết hạn giữa chừng thì tự làm mới, người dùng không thấy gì.<br>Tin gửi lỗi: bubble giảm còn <code>#7FB6D6</code> (không đổi sang xám — vẫn là tin của mình), kèm dòng danger + "Gửi lại".</div>
</div>
</sc-if>
</div>

<div data-screen-label="09" style="flex:none;display:flex;flex-direction:column;gap:11px">
<div style="display:flex;align-items:baseline;gap:9px">
<span style="font:700 10.5px ui-monospace,Menlo,monospace;padding:3px 7px;background:#0B3B58;color:#fff;border-radius:5px">/messages</span>
<span style="font:600 12px 'Be Vietnam Pro',sans-serif;color:#0B3B58">Lọc "Khiếu nại" · thread sinh từ Góp ý</span>
</div>
<div style="position:relative;width:430px;height:932px;border-radius:38px;overflow:hidden;background:#F4FAFD;box-shadow:0 24px 60px rgba(6,62,98,.22);display:flex;flex-direction:column">
<div style="position:relative;height:214px;flex-shrink:0;overflow:hidden;background:#0B72AE">
<svg sc-camel-view-box="0 0 430 214" sc-camel-preserve-aspect-ratio="xMidYMin slice" style="position:absolute;inset:0;width:100%;height:100%;display:block">
<defs><linearGradient id="m9-g" x1="0" y1="0" x2="0.65" y2="1"><stop offset="0" stop-color="#063E62"></stop><stop offset="0.6" stop-color="#0B72AE"></stop><stop offset="1" stop-color="#37AEE2"></stop></linearGradient><radialGradient id="m9-s" cx="0.5" cy="0.5" r="0.5"><stop offset="0.34" stop-color="#FFE9AE" stop-opacity="0.5"></stop><stop offset="1" stop-color="#FFE9AE" stop-opacity="0"></stop></radialGradient></defs>
<rect width="430" height="214" fill="url(#m9-g)"></rect>
<circle cx="296" cy="72" r="66" fill="url(#m9-s)" style="animation:ms-glow 5.4s ease-in-out infinite"></circle>
<circle cx="296" cy="72" r="22" fill="#FFF3CF"></circle>
<g fill="#fff" opacity="0.08" style="animation:ms-drift 17s ease-in-out infinite alternate"><ellipse cx="104" cy="150" rx="44" ry="26"></ellipse><ellipse cx="66" cy="160" rx="28" ry="18"></ellipse><rect x="60" y="154" width="114" height="21" rx="10.5"></rect></g>
</svg>
<div style="position:relative;z-index:1;padding:58px 24px 0">
<div style="display:flex;align-items:center;gap:12px;min-height:44px">
<span style="flex:1;font:800 28px 'Baloo 2',sans-serif;color:#fff;line-height:1.1">Tin nhắn</span>
<div style="width:40px;height:40px;border-radius:14px;background:rgba(255,255,255,.18);display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0"><i class="fa-solid fa-pen-to-square" style="font-size:15px;color:#fff"></i></div>
</div>
</div>
</div>

<div style="flex:1;margin-top:-38px;border-radius:32px 32px 0 0;background:#F4FAFD;padding:18px 20px 0;position:relative;z-index:2;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 -10px 30px rgba(6,62,98,.1)">
<div style="display:flex;padding:4px;border-radius:16px;background:#E3EFF7;flex-shrink:0">
<div style="flex:1;height:42px;border-radius:13px;background:#fff;box-shadow:0 2px 0 #CFE1EE;display:flex;align-items:center;justify-content:center;gap:7px;font:700 13px 'Be Vietnam Pro',sans-serif;color:#0B72AE"><i class="fa-solid fa-comments" style="font-size:12px"></i>Hội thoại</div>
<div style="flex:1;height:42px;border-radius:13px;display:flex;align-items:center;justify-content:center;gap:7px;font:600 13px 'Be Vietnam Pro',sans-serif;color:#5A7488"><i class="fa-solid fa-address-book" style="font-size:12px"></i>Danh bạ</div>
</div>
<div style="display:flex;gap:8px;margin-top:12px;overflow-x:auto;flex-shrink:0;scrollbar-width:none">
<sc-for list="{{ cChips }}" as="c" hint-placeholder-count="3">
<div style="flex-shrink:0;display:flex;align-items:center;gap:6px;padding:8px 14px;border-radius:20px;background:{{ c.bg }};color:{{ c.fg }};border:1.5px solid {{ c.border }};font:700 12px 'Be Vietnam Pro',sans-serif;cursor:pointer">{{ c.name }}<span style="font:700 10.5px 'Be Vietnam Pro',sans-serif;opacity:.7">{{ c.count }}</span></div>
</sc-for>
</div>

<div style="display:flex;align-items:center;gap:10px;padding:12px 14px;margin-top:14px;border-radius:16px;background:#EAF6FD;border:1px solid #CFE3F1;flex-shrink:0">
<i class="fa-solid fa-circle-info" style="font-size:13px;color:#0B72AE"></i>
<span style="flex:1;font:400 11.5px/1.5 'Be Vietnam Pro',sans-serif;color:#0B5379">Khiếu nại được tạo ở tab <b>Góp ý</b>. Tại đây chỉ trao đổi tiếp — nút tạo khiếu nại của module đã tắt.</span>
</div>

<div style="font:800 11px 'Be Vietnam Pro',sans-serif;letter-spacing:1.7px;color:#8AA3B4;margin:18px 0 10px;flex-shrink:0">THEO DÕI · 3</div>
<div style="display:flex;flex-direction:column;gap:10px">
<sc-for list="{{ complaints }}" as="c" hint-placeholder-count="3">
<div style="display:flex;align-items:flex-start;gap:12px;padding:13px 14px;border-radius:20px;background:#fff;box-shadow:0 3px 0 #DDEAF3;cursor:pointer;flex-shrink:0;border-left:4px solid {{ c.edge }}" style-active="transform:translateY(3px);box-shadow:0 0 0 #DDEAF3">
<div style="width:46px;height:46px;border-radius:16px;background:{{ c.avaBg }};border:1.5px dashed {{ c.avaBd }};display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="fa-solid fa-clipboard-question" style="font-size:17px;color:{{ c.avaFg }}"></i></div>
<div style="flex:1;min-width:0">
<div style="display:flex;align-items:center;gap:7px">
<span style="font:700 14px 'Baloo 2',sans-serif;color:#0B3B58">Khiếu nại</span>
<span style="font:600 11px ui-monospace,Menlo,monospace;color:#0B72AE">{{ c.ref }}</span>
<span style="flex:1"></span>
<span style="font:500 10.5px 'Be Vietnam Pro',sans-serif;color:#8AA3B4">{{ c.time }}</span>
</div>
<div style="display:flex;align-items:center;gap:6px;margin-top:6px">
<span style="padding:3px 9px;border-radius:8px;background:{{ c.stBg }};color:{{ c.stFg }};font:700 10px 'Be Vietnam Pro',sans-serif">{{ c.status }}</span>
<span style="font:400 11px 'Be Vietnam Pro',sans-serif;color:#8AA3B4;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{{ c.topic }}</span>
</div>
<div style="display:flex;align-items:center;gap:7px;margin-top:7px">
<span style="flex:1;min-width:0;font:{{ c.previewFont }} 'Be Vietnam Pro',sans-serif;color:{{ c.previewFg }};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{{ c.preview }}</span>
<sc-if value="{{ c.unread }}" hint-placeholder-val="{{ false }}"><span style="min-width:21px;height:21px;padding:0 6px;border-radius:11px;background:#EF5B4C;color:#fff;font:800 10.5px 'Baloo 2',sans-serif;display:flex;align-items:center;justify-content:center;flex-shrink:0">{{ c.unread }}</span></sc-if>
<sc-if value="{{ c.rated }}" hint-placeholder-val="{{ false }}"><span style="display:flex;align-items:center;gap:3px;flex-shrink:0"><i class="fa-solid fa-star" style="font-size:10px;color:#FFD166"></i><span style="font:700 10.5px 'Be Vietnam Pro',sans-serif;color:#8A5A00">{{ c.rated }}</span></span></sc-if>
</div>
</div>
</div>
</sc-for>
</div>

<div style="display:flex;align-items:center;gap:12px;padding:13px 14px;margin-top:14px;border-radius:20px;background:#fff;border:1px dashed #DDEAF3;cursor:pointer;flex-shrink:0">
<div style="width:38px;height:38px;border-radius:13px;background:#F4FAFD;display:flex;align-items:center;justify-content:center"><i class="fa-solid fa-box-archive" style="font-size:14px;color:#8AA3B4"></i></div>
<span style="flex:1;font:600 13.5px 'Be Vietnam Pro',sans-serif;color:#5A7488">Hội thoại lưu trữ</span>
<span style="font:700 12px 'Be Vietnam Pro',sans-serif;color:#8AA3B4">1</span>
<i class="fa-solid fa-chevron-right" style="font-size:11px;color:#C3D4DF"></i>
</div>
</div>

<div style="position:absolute;left:16px;right:16px;top:120px;z-index:6;display:flex;align-items:center;gap:11px;padding:12px 14px;border-radius:20px;background:#fff;box-shadow:0 10px 30px rgba(6,62,98,.26);cursor:pointer">
<div style="width:38px;height:38px;border-radius:13px;background:#EAF6FD;display:flex;align-items:center;justify-content:center;font:800 12.5px 'Baloo 2',sans-serif;color:#0B72AE;flex-shrink:0">TH</div>
<div style="flex:1;min-width:0"><div style="font:700 12.5px 'Baloo 2',sans-serif;color:#0B3B58">Cô Trần Thu Hà</div><div style="font:400 11.5px 'Be Vietnam Pro',sans-serif;color:#5A7488;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:1px">@Minh Anh nhớ mang vở bài tập nhé con</div></div>
<span style="padding:3px 8px;border-radius:8px;background:#F0EAFB;color:#5B3E9B;font:700 9.5px 'Be Vietnam Pro',sans-serif;flex-shrink:0">@nhắc</span>
</div>

<div style="position:relative;z-index:3;height:80px;flex-shrink:0;background:#fff;display:flex;align-items:center;justify-content:space-around;padding:0 8px;box-shadow:0 -8px 24px rgba(6,62,98,.09)">
<sc-for list="{{ nav }}" as="n" hint-placeholder-count="5">
<div style="position:relative;display:flex;flex-direction:column;align-items:center;gap:4px;padding:9px 12px;border-radius:16px;min-width:52px;background:{{ n.chip }};color:{{ n.color }}">
<i class="fa-solid {{ n.icon }}" style="font-size:18px"></i><span style="font:600 10px 'Be Vietnam Pro',sans-serif">{{ n.name }}</span>
<sc-if value="{{ n.badge }}" hint-placeholder-val="{{ false }}"><span style="position:absolute;top:2px;right:6px;min-width:19px;height:19px;padding:0 5px;border-radius:10px;background:#EF5B4C;color:#fff;font:800 10px 'Baloo 2',sans-serif;display:flex;align-items:center;justify-content:center;border:2px solid #fff">{{ n.badge }}</span></sc-if>
</div>
</sc-for>
</div>
</div>
<sc-if value="{{ showNotes }}" hint-placeholder-val="{{ true }}">
<div style="width:430px;padding:14px 16px;border-radius:18px;background:#fff;border:1px solid #DDEAF3">
<div style="font:800 10px 'Be Vietnam Pro',sans-serif;letter-spacing:1.6px;color:#0B72AE;margin-bottom:8px">NHẬN DIỆN THREAD KHIẾU NẠI</div>
<div style="font:400 11.5px/1.7 'Be Vietnam Pro',sans-serif;color:#5A7488"><b style="color:#0B3B58">ComplaintAvatar</b> = ô bo 16 nền tint theo trạng thái + <b>viền nét đứt 1.5px</b> + icon <code>clipboard-question</code>. Nét đứt là dấu hiệu duy nhất phân biệt "hồ sơ đang mở" với avatar người/nhóm — không dùng ảnh đại diện.<br><b style="color:#0B3B58">Tiêu đề luôn hai phần</b>: chữ "Khiếu nại" (Baloo 2) + mã <code>complaintRef</code> (mono, màu brand) — mã phải copy được và trùng đúng mã hiển thị ở tab Góp ý.<br><b style="color:#0B3B58">Viền trái 4px</b> đổi màu theo 4 bậc trạng thái, dùng lại đúng bảng của card Góp ý — hai nơi kể cùng một câu chuyện.<br><b style="color:#0B3B58">Banner in-app</b> (nổi trên đầu danh sách) chỉ hiện khi tin đến từ hội thoại khác; mention có badge tím <code>@nhắc</code> và <b>vẫn báo kể cả khi hội thoại đang tắt thông báo</b>. Chuông ở màn Cài đặt có 3 mức: tắt · bật · bật + tiếng (mặc định tắt); kênh không bao giờ phát tiếng.</div>
</div>
</sc-if>
</div>

<div data-screen-label="10" style="flex:none;display:flex;flex-direction:column;gap:11px">
<div style="display:flex;align-items:baseline;gap:9px">
<span style="font:700 10.5px ui-monospace,Menlo,monospace;padding:3px 7px;background:#5B3E9B;color:#fff;border-radius:5px">chat-module</span>
<span style="font:600 12px 'Be Vietnam Pro',sans-serif;color:#0B3B58">Thread khiếu nại · đang xử lý</span>
</div>
<div style="position:relative;width:430px;height:932px;border-radius:38px;overflow:hidden;background:#F4FAFD;box-shadow:0 24px 60px rgba(6,62,98,.22);display:flex;flex-direction:column">
<div style="flex-shrink:0;background:#0B72AE;padding:52px 16px 0;position:relative;z-index:3;box-shadow:0 4px 18px rgba(6,62,98,.14)">
<div style="display:flex;align-items:center;gap:11px;height:60px">
<i class="fa-solid fa-arrow-left" style="font-size:16px;color:#fff;width:36px;text-align:center;cursor:pointer"></i>
<div style="width:40px;height:40px;border-radius:14px;background:rgba(255,255,255,.18);border:1.5px dashed rgba(255,255,255,.5);display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="fa-solid fa-clipboard-question" style="font-size:15px;color:#fff"></i></div>
<div style="flex:1;min-width:0">
<div style="display:flex;align-items:center;gap:7px"><span style="font:700 15px 'Baloo 2',sans-serif;color:#fff">Khiếu nại</span><span style="font:600 11.5px ui-monospace,Menlo,monospace;color:rgba(255,255,255,.8)">FB-2607-042</span></div>
<div style="font:400 11px 'Be Vietnam Pro',sans-serif;color:rgba(255,255,255,.75);margin-top:1px">Đang trao đổi với Cô Hằng · Học vụ</div>
</div>
<div style="display:flex;align-items:center;gap:6px;padding:8px 12px;border-radius:12px;background:rgba(255,255,255,.18);cursor:pointer;flex-shrink:0"><i class="fa-regular fa-file-lines" style="font-size:12px;color:#fff"></i><span style="font:700 11.5px 'Be Vietnam Pro',sans-serif;color:#fff">Chi tiết</span></div>
</div>
<div style="display:flex;align-items:center;gap:8px;margin:0 -16px;padding:10px 18px;background:#FFF8E8">
<sc-for list="{{ lifecycle }}" as="s" hint-placeholder-count="4">
<div style="flex:1;display:flex;flex-direction:column;gap:5px">
<div style="height:4px;border-radius:2px;background:{{ s.bar }}"></div>
<span style="font:{{ s.font }} 9.5px 'Be Vietnam Pro',sans-serif;color:{{ s.fg }};white-space:nowrap">{{ s.name }}</span>
</div>
</sc-for>
</div>
</div>

<div style="flex:1;display:flex;flex-direction:column;justify-content:flex-end;gap:10px;padding:16px;overflow:hidden">
<div style="display:flex;justify-content:center"><span style="padding:6px 13px;border-radius:20px;background:#EAF6FD;font:500 10.5px/1.5 'Be Vietnam Pro',sans-serif;color:#5A7488;text-align:center">Góp ý FB-2607-042 đã mở hội thoại · 26/07</span></div>

<div style="display:flex;justify-content:flex-end">
<div style="max-width:300px;display:flex;flex-direction:column;align-items:flex-end">
<div style="padding:12px 14px;border-radius:20px 20px 6px 20px;background:#0B72AE">
<div style="padding-left:10px;border-left:2.5px solid rgba(255,255,255,.45);margin-bottom:8px">
<div style="font:700 10px 'Be Vietnam Pro',sans-serif;color:rgba(255,255,255,.8);letter-spacing:.6px">NỘI DUNG GÓP Ý</div>
<div style="font:400 11.5px/1.55 'Be Vietnam Pro',sans-serif;color:rgba(255,255,255,.85);margin-top:3px">Chủ đề: Cơ sở vật chất · Lớp Vật lý 8</div>
</div>
<div style="font:400 13.5px/20px 'Be Vietnam Pro',sans-serif;color:#fff">Phòng 201 hơi nóng vào buổi chiều, các con khó tập trung ạ. Mong trung tâm kiểm tra giúp em.</div>
</div>
<div style="display:flex;align-items:center;gap:5px;margin:4px 3px 0"><span style="font:400 10px 'Be Vietnam Pro',sans-serif;color:#8AA3B4">26/07 · 20:10</span><i class="fa-solid fa-check-double" style="font-size:10px;color:#37AEE2"></i></div>
</div>
</div>

<div style="display:flex;gap:9px;align-items:flex-end">
<div style="width:30px;height:30px;border-radius:11px;background:#FFF8E8;display:flex;align-items:center;justify-content:center;font:800 10.5px 'Baloo 2',sans-serif;color:#8A5A00;flex-shrink:0">TH</div>
<div style="max-width:290px">
<div style="font:600 10.5px 'Be Vietnam Pro',sans-serif;color:#8AA3B4;margin:0 0 4px 3px">Cô Hằng · Nhân viên học vụ</div>
<div style="padding:11px 14px;border-radius:20px 20px 20px 6px;background:#fff;border:1px solid #DDEAF3;font:400 13.5px/20px 'Be Vietnam Pro',sans-serif;color:#0B3B58">Dạ em ghi nhận ạ. Em đã chuyển bộ phận cơ sở vật chất kiểm tra điều hoà phòng 201 trong hôm nay.</div>
<div style="font:400 10px 'Be Vietnam Pro',sans-serif;color:#8AA3B4;margin:4px 0 0 3px">27/07 · 08:12</div>
</div>
</div>

<div style="display:flex;justify-content:center"><span style="padding:5px 12px;border-radius:20px;background:#FFF8E8;font:600 10.5px 'Be Vietnam Pro',sans-serif;color:#5A3D00">Trạng thái chuyển sang “Đang xử lý”</span></div>

<div style="display:flex;gap:9px;align-items:flex-end">
<div style="width:30px;height:30px;border-radius:11px;background:#FFF8E8;display:flex;align-items:center;justify-content:center;font:800 10.5px 'Baloo 2',sans-serif;color:#8A5A00;flex-shrink:0">TH</div>
<div style="max-width:300px">
<div style="padding:11px 14px;border-radius:20px 20px 20px 6px;background:#fff;border:1px solid #DDEAF3;font:400 13.5px/20px 'Be Vietnam Pro',sans-serif;color:#0B3B58"><span style="padding:1px 5px;border-radius:5px;background:#F0EAFB;color:#5B3E9B;font-weight:600">@Nguyễn Minh Anh</span> kỹ thuật đã thay bộ lọc và bảo dưỡng điều hoà chiều nay chị nhé. Chị cho em xin phản hồi sau buổi học thứ 6 ạ.</div>
<div style="font:400 10px 'Be Vietnam Pro',sans-serif;color:#8AA3B4;margin:4px 0 0 3px">29/07 · 16:40</div>
</div>
</div>
</div>

<div style="flex-shrink:0;background:#fff;padding:10px 14px 26px;box-shadow:0 -8px 24px rgba(6,62,98,.09)">
<div style="display:flex;align-items:center;gap:8px;padding:7px 12px;margin-bottom:9px;border-radius:12px;background:#F4FAFD;border:1px dashed #DDEAF3">
<i class="fa-regular fa-pen-to-square" style="font-size:11px;color:#8AA3B4"></i>
<span style="flex:1;font:400 11px 'Be Vietnam Pro',sans-serif;color:#8AA3B4">Nháp đã lưu cho hội thoại này</span>
</div>
<div style="display:flex;align-items:flex-end;gap:9px">
<div style="width:42px;height:42px;border-radius:14px;background:#EAF6FD;display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="fa-solid fa-plus" style="font-size:16px;color:#0B72AE"></i></div>
<div style="flex:1;display:flex;align-items:center;gap:9px;min-height:42px;padding:0 13px;border-radius:16px;background:#F4FAFD;border:1.5px solid #DDEAF3"><span style="flex:1;font:400 13.5px 'Be Vietnam Pro',sans-serif;color:#0B3B58">Dạ em cảm ơn cô, để em hỏi bé</span><i class="fa-regular fa-face-smile" style="font-size:16px;color:#8AA3B4"></i></div>
<div style="width:42px;height:42px;border-radius:14px;background:#0B72AE;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 3px 0 #085A8B"><i class="fa-solid fa-paper-plane" style="font-size:15px;color:#fff"></i></div>
</div>
</div>
</div>
<sc-if value="{{ showNotes }}" hint-placeholder-val="{{ true }}">
<div style="width:430px;padding:14px 16px;border-radius:18px;background:#F6F1FF;border:1px solid #DED0F5">
<div style="font:800 10px 'Be Vietnam Pro',sans-serif;letter-spacing:1.6px;color:#5B3E9B;margin-bottom:8px">VÒNG GÓP Ý ⇄ CHAT KHÉP KÍN</div>
<div style="font:400 11.5px/1.7 'Be Vietnam Pro',sans-serif;color:#5A7488">Nút <b style="color:#0B3B58">"Chi tiết"</b> trên header gọi <code>onComplaintInfo</code> → mở màn chi tiết Góp ý của app. Đây là chiều ngược của nút "Mở hội thoại" ở tab Góp ý. <b style="color:#B03428">App hiện chưa truyền hook này — gap tích hợp phải làm, không phải việc của module.</b><br><b style="color:#0B3B58">Thanh vòng đời 4 bậc</b> thay chỗ PinnedBar ở thread thường: 4 cột đều nhau, bậc đã qua <code>#B4720B</code> đặc, bậc hiện tại nhấn đậm, bậc tương lai <code>#EBD9AE</code>. Đổi bậc ⇒ thanh trượt 220ms + một tin hệ thống được chèn vào luồng, để lịch sử đọc được cả khi cuộn lại.<br><b style="color:#0B3B58">Tin đầu thread</b> là chính nội dung góp ý gốc, dựng dạng quote trong bubble của mình — người dùng không phải nhớ mình đã viết gì.<br><b style="color:#0B3B58">Mention</b> tô nền tím <code>#F0EAFB/#5B3E9B</code>, cùng phạm trù "cần bạn thao tác" như trong design system. Mention báo cả khi hội thoại mute.<br><b style="color:#0B3B58">Nháp</b> lưu theo từng hội thoại (AsyncStorage theo user) — chip nhắc nhỏ phía trên composer, tự ẩn sau khi gửi.</div>
</div>
</sc-if>
</div>

<div data-screen-label="11" style="flex:none;display:flex;flex-direction:column;gap:11px">
<div style="display:flex;align-items:baseline;gap:9px">
<span style="font:700 10.5px ui-monospace,Menlo,monospace;padding:3px 7px;background:#5B3E9B;color:#fff;border-radius:5px">chat-module</span>
<span style="font:600 12px 'Be Vietnam Pro',sans-serif;color:#0B3B58">Đã giải quyết · prompt đánh giá CSAT</span>
</div>
<div style="position:relative;width:430px;height:932px;border-radius:38px;overflow:hidden;background:#F4FAFD;box-shadow:0 24px 60px rgba(6,62,98,.22);display:flex;flex-direction:column">
<div style="flex-shrink:0;background:#0B72AE;padding:52px 16px 0;position:relative;z-index:3">
<div style="display:flex;align-items:center;gap:11px;height:60px">
<i class="fa-solid fa-arrow-left" style="font-size:16px;color:#fff;width:36px;text-align:center"></i>
<div style="width:40px;height:40px;border-radius:14px;background:rgba(255,255,255,.18);border:1.5px dashed rgba(255,255,255,.5);display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="fa-solid fa-clipboard-question" style="font-size:15px;color:#fff"></i></div>
<div style="flex:1;min-width:0">
<div style="display:flex;align-items:center;gap:7px"><span style="font:700 15px 'Baloo 2',sans-serif;color:#fff">Khiếu nại</span><span style="font:600 11.5px ui-monospace,Menlo,monospace;color:rgba(255,255,255,.8)">FB-2607-042</span></div>
<div style="font:400 11px 'Be Vietnam Pro',sans-serif;color:rgba(255,255,255,.75);margin-top:1px">Đang trao đổi với Cô Hằng · Học vụ</div>
</div>
<div style="display:flex;align-items:center;gap:6px;padding:8px 12px;border-radius:12px;background:rgba(255,255,255,.18);flex-shrink:0"><i class="fa-regular fa-file-lines" style="font-size:12px;color:#fff"></i><span style="font:700 11.5px 'Be Vietnam Pro',sans-serif;color:#fff">Chi tiết</span></div>
</div>
<div style="display:flex;align-items:center;gap:10px;margin:0 -16px;padding:10px 18px;background:#E6F5F1">
<i class="fa-solid fa-circle-check" style="font-size:13px;color:#0B7A62"></i>
<span style="flex:1;font:700 12px 'Be Vietnam Pro',sans-serif;color:#0B7A62">Khiếu nại đã được giải quyết · 31/07</span>
</div>
</div>

<div style="flex:1;display:flex;flex-direction:column;justify-content:flex-end;gap:10px;padding:16px;overflow:hidden">
<div style="display:flex;gap:9px;align-items:flex-end">
<div style="width:30px;height:30px;border-radius:11px;background:#FFF8E8;display:flex;align-items:center;justify-content:center;font:800 10.5px 'Baloo 2',sans-serif;color:#8A5A00;flex-shrink:0">TH</div>
<div style="max-width:290px">
<div style="padding:11px 14px;border-radius:20px 20px 20px 6px;background:#fff;border:1px solid #DDEAF3;font:400 13.5px/20px 'Be Vietnam Pro',sans-serif;color:#0B3B58">Dạ điều hoà phòng 201 đã bảo dưỡng xong, em cũng đã bổ sung quạt trần chị nhé. Em xin phép đóng khiếu nại ạ.</div>
<div style="font:400 10px 'Be Vietnam Pro',sans-serif;color:#8AA3B4;margin:4px 0 0 3px">31/07 · 09:05</div>
</div>
</div>
<div style="display:flex;justify-content:center"><span style="padding:5px 12px;border-radius:20px;background:#E6F5F1;font:600 10.5px 'Be Vietnam Pro',sans-serif;color:#0B7A62">Cô Hằng đã đánh dấu “Đã giải quyết”</span></div>
</div>

<div style="flex-shrink:0;background:#fff;padding:16px 18px 26px;box-shadow:0 -8px 24px rgba(6,62,98,.09)">
<div style="padding:16px;border-radius:22px;background:#FFFBF0;border:1.5px solid #F4E3BD">
<div style="font:800 16px 'Baloo 2',sans-serif;color:#0B3B58">Bạn đánh giá hỗ trợ thế nào?</div>
<div style="font:400 11.5px/1.5 'Be Vietnam Pro',sans-serif;color:#5A7488;margin-top:3px">Đánh giá giúp trung tâm cải thiện chất lượng phản hồi.</div>
<div style="display:flex;gap:10px;margin-top:14px">
<sc-for list="{{ stars }}" as="s" hint-placeholder-count="5">
<div style="width:48px;height:48px;border-radius:16px;background:{{ s.bg }};border:1.5px solid {{ s.bd }};display:flex;align-items:center;justify-content:center;cursor:pointer"><i class="fa-solid fa-star" style="font-size:20px;color:{{ s.fg }}"></i></div>
</sc-for>
</div>
<div style="margin-top:14px;padding:11px 13px;border-radius:14px;background:#fff;border:1.5px solid #DDEAF3;min-height:74px;display:flex;flex-direction:column">
<span style="flex:1;font:400 12.5px/1.6 'Be Vietnam Pro',sans-serif;color:#8AA3B4">Nhận xét thêm (không bắt buộc)…</span>
<span style="align-self:flex-end;font:500 10px 'Be Vietnam Pro',sans-serif;color:#C3D4DF">0/2000</span>
</div>
<div style="display:flex;gap:10px;margin-top:14px">
<div style="height:50px;padding:0 18px;border-radius:16px;background:transparent;border:1.5px solid #DDEAF3;display:flex;align-items:center;justify-content:center;font:700 13.5px 'Be Vietnam Pro',sans-serif;color:#5A7488;cursor:pointer">Để sau</div>
<div style="flex:1;height:50px;border-radius:16px;background:#0B72AE;display:flex;align-items:center;justify-content:center;gap:8px;font:700 15px 'Baloo 2',sans-serif;color:#fff;box-shadow:0 4px 0 #085A8B;cursor:pointer" style-active="transform:translateY(4px);box-shadow:0 0 0 #085A8B">Gửi đánh giá</div>
</div>
</div>
</div>
</div>
</div>

<div data-screen-label="12" style="flex:none;display:flex;flex-direction:column;gap:11px">
<div style="display:flex;align-items:baseline;gap:9px">
<span style="font:700 10.5px ui-monospace,Menlo,monospace;padding:3px 7px;background:#5B3E9B;color:#fff;border-radius:5px">chat-module</span>
<span style="font:600 12px 'Be Vietnam Pro',sans-serif;color:#0B3B58">Đã đóng · card đánh giá + composer khoá</span>
</div>
<div style="position:relative;width:430px;height:932px;border-radius:38px;overflow:hidden;background:#F4FAFD;box-shadow:0 24px 60px rgba(6,62,98,.22);display:flex;flex-direction:column">
<div style="flex-shrink:0;background:#0B72AE;padding:52px 16px 0;position:relative;z-index:3">
<div style="display:flex;align-items:center;gap:11px;height:60px">
<i class="fa-solid fa-arrow-left" style="font-size:16px;color:#fff;width:36px;text-align:center"></i>
<div style="width:40px;height:40px;border-radius:14px;background:rgba(255,255,255,.14);border:1.5px dashed rgba(255,255,255,.34);display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="fa-solid fa-clipboard-question" style="font-size:15px;color:rgba(255,255,255,.75)"></i></div>
<div style="flex:1;min-width:0">
<div style="display:flex;align-items:center;gap:7px"><span style="font:700 15px 'Baloo 2',sans-serif;color:#fff">Khiếu nại</span><span style="font:600 11.5px ui-monospace,Menlo,monospace;color:rgba(255,255,255,.8)">FB-2607-042</span></div>
<div style="font:400 11px 'Be Vietnam Pro',sans-serif;color:rgba(255,255,255,.75);margin-top:1px">Đã đóng · 31/07</div>
</div>
<div style="display:flex;align-items:center;gap:6px;padding:8px 12px;border-radius:12px;background:rgba(255,255,255,.18);flex-shrink:0"><i class="fa-regular fa-file-lines" style="font-size:12px;color:#fff"></i><span style="font:700 11.5px 'Be Vietnam Pro',sans-serif;color:#fff">Chi tiết</span></div>
</div>
</div>

<div style="flex:1;display:flex;flex-direction:column;justify-content:flex-end;gap:10px;padding:16px;overflow:hidden">
<div style="display:flex;gap:9px;align-items:flex-end">
<div style="width:30px;height:30px;border-radius:11px;background:#FFF8E8;display:flex;align-items:center;justify-content:center;font:800 10.5px 'Baloo 2',sans-serif;color:#8A5A00;flex-shrink:0">TH</div>
<div style="max-width:290px"><div style="padding:11px 14px;border-radius:20px 20px 20px 6px;background:#fff;border:1px solid #DDEAF3;font:400 13.5px/20px 'Be Vietnam Pro',sans-serif;color:#0B3B58">Em cảm ơn chị đã phản hồi ạ. Chúc chị và bé một tuần tốt lành!</div><div style="font:400 10px 'Be Vietnam Pro',sans-serif;color:#8AA3B4;margin:4px 0 0 3px">31/07 · 09:20</div></div>
</div>

<div style="padding:16px;border-radius:22px;background:#fff;border:1.5px solid #DDEAF3;box-shadow:0 3px 0 #DDEAF3">
<div style="display:flex;align-items:center;gap:9px">
<div style="width:32px;height:32px;border-radius:11px;background:#FFF8E8;display:flex;align-items:center;justify-content:center"><i class="fa-solid fa-star" style="font-size:14px;color:#B4720B"></i></div>
<div style="flex:1"><div style="font:700 13.5px 'Baloo 2',sans-serif;color:#0B3B58">Bạn đã đánh giá hỗ trợ</div><div style="font:400 10.5px 'Be Vietnam Pro',sans-serif;color:#8AA3B4;margin-top:1px">31/07 · 09:26</div></div>
<div style="display:flex;gap:3px">
<i class="fa-solid fa-star" style="font-size:13px;color:#FFD166"></i><i class="fa-solid fa-star" style="font-size:13px;color:#FFD166"></i><i class="fa-solid fa-star" style="font-size:13px;color:#FFD166"></i><i class="fa-solid fa-star" style="font-size:13px;color:#FFD166"></i><i class="fa-solid fa-star" style="font-size:13px;color:#E4EDF3"></i>
</div>
</div>
<div style="margin-top:11px;padding:11px 13px;border-radius:14px;background:#F4FAFD;font:400 12.5px/1.65 'Be Vietnam Pro',sans-serif;color:#0B3B58">Trung tâm xử lý nhanh, cô Hằng phản hồi rất rõ ràng. Em cảm ơn ạ.</div>
</div>

<div style="display:flex;justify-content:center"><span style="padding:5px 12px;border-radius:20px;background:#F4FAFD;border:1px solid #DDEAF3;font:600 10.5px 'Be Vietnam Pro',sans-serif;color:#5A7488">Khiếu nại đã đóng · 31/07</span></div>
</div>

<div style="flex-shrink:0;background:#F4FAFD;padding:16px 18px 30px;border-top:1px solid #DDEAF3">
<div style="display:flex;align-items:center;gap:11px;padding:14px 16px;border-radius:18px;background:#fff;border:1.5px dashed #DDEAF3">
<i class="fa-solid fa-lock" style="font-size:14px;color:#8AA3B4"></i>
<div style="flex:1"><div style="font:700 13px 'Be Vietnam Pro',sans-serif;color:#5A7488">Khiếu nại đã đóng</div><div style="font:400 11px/1.5 'Be Vietnam Pro',sans-serif;color:#8AA3B4;margin-top:2px">Không thể nhắn tiếp trong hội thoại này. Cần trao đổi thêm, hãy tạo góp ý mới.</div></div>
</div>
<div style="height:50px;margin-top:12px;border-radius:16px;background:#fff;border:1.5px solid #DDEAF3;display:flex;align-items:center;justify-content:center;gap:8px;font:700 13.5px 'Be Vietnam Pro',sans-serif;color:#0B72AE;cursor:pointer"><i class="fa-solid fa-circle-plus" style="font-size:13px"></i>Tạo góp ý mới</div>
</div>
</div>
<sc-if value="{{ showNotes }}" hint-placeholder-val="{{ true }}">
<div style="width:430px;padding:14px 16px;border-radius:18px;background:#fff;border:1px solid #DDEAF3">
<div style="font:800 10px 'Be Vietnam Pro',sans-serif;letter-spacing:1.6px;color:#0B72AE;margin-bottom:8px">CSAT &amp; TRẠNG THÁI ĐÓNG</div>
<div style="font:400 11.5px/1.7 'Be Vietnam Pro',sans-serif;color:#5A7488"><b style="color:#0B3B58">Prompt CSAT ghim trên composer</b> (màn 11), không phải modal — người dùng vẫn cuộn đọc lại hội thoại khi chấm điểm. Chỉ hiện với người khiếu nại, chỉ khi <code>resolved/closed</code> và <code>complaintRating</code> còn rỗng. Có nút "Để sau" — không được ép.<br><b style="color:#0B3B58">Sao 48px</b>, chưa chọn <code>#E4EDF3</code> nền trắng, đã chọn <code>#FFD166</code> nền <code>#FFF8E8</code>; chạm sao thứ n ⇒ n sao lần lượt pop scale 1→1.25→1 lệch 40ms + haptic <code>selection</code>.<br><b style="color:#0B3B58">Gửi xong</b> ⇒ prompt trượt xuống, card đánh giá được đăng vào luồng như một tin (màn 12) và ticket đóng. Card giữ nguyên trong lịch sử, đọc lại được.<br><b style="color:#0B3B58">Composer khoá</b> thay bằng khối notice nét đứt + CTA "Tạo góp ý mới" dẫn về tab Góp ý — không để người dùng cụt đường.<br>Nhận xét ≤ 2000 ký tự, counter chỉ đổi sang <code>#B03428</code> khi còn dưới 100 ký tự.</div>
</div>
</sc-if>
</div>

</div>

<div style="margin-top:34px;padding:22px 24px;border-radius:24px;background:#fff;border:1px solid #DDEAF3;width:1180px">
<div style="font:800 11px 'Be Vietnam Pro',sans-serif;letter-spacing:1.8px;color:#5B3E9B;margin-bottom:4px">SPEC BÀN GIAO CHO @CHAT-MODULE/REACT-NATIVE 1.0.35</div>
<div style="font:400 12px/1.7 'Be Vietnam Pro',sans-serif;color:#5A7488;margin-bottom:18px;max-width:820px">Module dùng chung cho nhiều app trong hệ sinh thái ⇒ bàn giao là <b style="color:#0B3B58">bảng giá trị theme</b>, không phải mockup từng màn. Các màn 04–07 ở trên là <i>ảnh chụp kết quả</i> khi áp bảng này với <code>accent = #0B72AE</code>, <code>locale = vi</code>, <code>contactsMode = student</code>, <code>complaints = off</code>.</div>

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0 26px">
<div>
<div style="font:800 10.5px 'Be Vietnam Pro',sans-serif;letter-spacing:1.4px;color:#0B3B58;padding-bottom:8px;border-bottom:2px solid #DDEAF3;margin-bottom:6px">TOKEN · LIGHT ⇄ DARK</div>
<sc-for list="{{ themeRows }}" as="t" hint-placeholder-count="10">
<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid #EDF4F9">
<span style="flex:1;font:500 11px ui-monospace,Menlo,monospace;color:#5A7488">{{ t.key }}</span>
<span style="width:15px;height:15px;border-radius:4px;border:1px solid #DDEAF3;background:{{ t.light }}"></span>
<span style="font:400 10px ui-monospace,Menlo,monospace;color:#8AA3B4;width:56px">{{ t.light }}</span>
<span style="width:15px;height:15px;border-radius:4px;border:1px solid #2A4457;background:{{ t.dark }}"></span>
<span style="font:400 10px ui-monospace,Menlo,monospace;color:#8AA3B4;width:56px">{{ t.dark }}</span>
</div>
</sc-for>
</div>
<div>
<div style="font:800 10.5px 'Be Vietnam Pro',sans-serif;letter-spacing:1.4px;color:#0B3B58;padding-bottom:8px;border-bottom:2px solid #DDEAF3;margin-bottom:10px">HÌNH DẠNG · CHỮ · MOTION</div>
<div style="font:400 11.5px/1.75 'Be Vietnam Pro',sans-serif;color:#5A7488">
<b style="color:#0B3B58">Radius</b> — bubble 20 / góc chân 6 · ô nhập 16 · sheet 28 · avatar 14 (vuông bo, <b>không</b> tròn: khớp avatar app) · chip &amp; reaction pill 999.<br>
<b style="color:#0B3B58">Spacing</b> — padding bubble 11×14 · gap giữa tin 10 · gap khi cùng người 4 · lề mép 16 · maxWidth bubble 290 (67%).<br>
<b style="color:#0B3B58">Typography</b> — thân tin Be Vietnam Pro 13.5/20 · tên người 10.5 semibold · giờ 10 · tên hội thoại &amp; tiêu đề header Baloo 2 15/700. Module phải nhận <code>fontFamily</code> qua theme, không hardcode system font.<br>
<b style="color:#0B3B58">Motion</b> — bubble vào: spring 260/20 + fade 120ms, dịch 8px từ phía người gửi · reaction: scale 0.6→1.12→1 · pinned bar: collapse height 180ms ease-out · typing dot: 1.2s stagger 0.15s. Tất cả bọc trong <code>prefers-reduced-motion</code> ⇒ chỉ còn fade 80ms.<br>
<b style="color:#0B3B58">Haptics</b> — long-press tin: <code>impactMedium</code> · thả reaction: <code>impactLight</code> · giữ-ghi-âm bắt đầu/kết thúc: <code>selection</code> · gửi lỗi: <code>notificationError</code>.
</div>
</div>
<div>
<div style="font:800 10.5px 'Be Vietnam Pro',sans-serif;letter-spacing:1.4px;color:#0B3B58;padding-bottom:8px;border-bottom:2px solid #DDEAF3;margin-bottom:10px">RANH GIỚI APP ⇄ MODULE</div>
<div style="font:400 11.5px/1.75 'Be Vietnam Pro',sans-serif;color:#5A7488">
<b style="color:#0B3B58">App sở hữu</b> — hero + segmented + danh sách hội thoại + danh bạ theo lớp (01–03, 09), màn camera (07), thang trạng thái kết nối (08), badge tab bar, banner in-app + 3 mức chuông, nén ảnh/video &amp; upload, cache per-student, màn chi tiết Góp ý ở đầu kia của hook.<br>
<b style="color:#0B3B58">Module sở hữu</b> — khung chat (04), sheet hành động tin (05), thông tin hội thoại &amp; kho media (06), thread khiếu nại + vòng đời + CSAT (10–12), lightbox, forward, viewedBy, mention, nháp, split view tablet.<br>
<b style="color:#0B3B58">4 loại hội thoại</b> — nhắn riêng · nhóm · kênh (chỉ đọc, không phát tiếng) · khiếu nại. Chỉ 3 loại đầu được tạo trong app; khiếu nại luôn sinh từ tab Góp ý (nút "+" tạo khiếu nại trong chat: tắt).<br>
<b style="color:#0B3B58">Việc app phải làm (không phải module)</b>: (1) <b>bật <code>theme:'auto'</code></b> và map bộ token ở cột trái vào <code>darkTheme</code> có sẵn của module — module <i>đã có</i> light + dark + auto theo OS, app đang ghim cứng light; (2) truyền hook <code>onComplaintInfo</code> để nút "Chi tiết" mở màn chi tiết Góp ý — <b style="color:#B03428">hiện đang thiếu</b>; (3) truyền <code>onUpload</code> lên storage BlueRise (chat không có endpoint upload, chỉ giữ URL — spinner tiến độ module lo); (4) override <code>fontFamily</code> sang Baloo 2 / Be Vietnam Pro — module mặc định font hệ thống, để nguyên là chat lạc nhận diện; (5) xin slot banner ngay dưới header cho trạng thái kết nối mức 2, và override chiều cao header (52 top, 60 cao).<br>
<b style="color:#0B3B58">Tablet ≥768dp</b> — sheet thao tác thành thẻ modal giữa màn (không phải bottom sheet): cùng nội dung, hai hệ hình; giữ nguyên thứ tự và icon hành động, chỉ đổi khung. Split view cột trái 360dp.<br>
<b style="color:#0B3B58">Đã có sẵn trong module, design chỉ chốt giá trị</b> — vuốt phải tin để trả lời (phone), Back Android tháo theo thứ tự sheet → màn → hội thoại → danh sách, video phát inline + poster tự tạo trước khi gửi, giữ-để-ghi âm &amp; trượt-để-huỷ, nháp theo hội thoại, mention báo cả khi mute, kênh (chỉ đọc) không bao giờ phát tiếng.<br>
<b style="color:#0B3B58">Đổi học sinh</b> — huỷ phiên, xoá cache học sinh cũ, module remount với <code>key = studentId</code>; badge tab về 0 rồi đếm lại khi socket sẵn sàng.
</div>
</div>
</div>
</div>

</section>

</x-dc>
<script type="text/x-dc" data-dc-script data-props="{&quot;showNotes&quot;:{&quot;editor&quot;:&quot;boolean&quot;,&quot;default&quot;:true,&quot;tsType&quot;:&quot;boolean&quot;,&quot;section&quot;:&quot;Hiển thị&quot;}}">
class Component extends DCLogic {
  renderVals() {
    const role = {
      lead:  ['Phụ trách lớp', '#F0EAFB', '#5B3E9B'],
      gv:    ['Giáo viên',     '#EAF6FD', '#0B5379'],
      tg:    ['Trợ giảng',     '#E6F5F1', '#0B7A62'],
      hv:    ['Học viên',      '#F4FAFD', '#5A7488'],
      nv:    ['Nhân viên',     '#FFF8E8', '#8A5A00']
    };
    const P = (name, ava, r, on, avaBg, avaFg, status) => ({
      name, ava, role: role[r][0], roleBg: role[r][1], roleFg: role[r][2],
      dot: on ? '#37E0A5' : '#C3D4DF', avaBg, avaFg, status
    });

    return {
      showNotes: this.props.showNotes ?? true,

      nav: [
        {name:'Trang chủ',icon:'fa-house'},
        {name:'Bản tin',icon:'fa-newspaper'},
        {name:'Xin nghỉ',icon:'fa-calendar-xmark'},
        {name:'Góp ý',icon:'fa-comment-dots'},
        {name:'Tin nhắn',icon:'fa-envelope',badge:'5'}
      ].map((n,i) => ({...n,
        color: i === 4 ? '#0B72AE' : '#8AA3B4',
        chip: i === 4 ? '#EAF6FD' : 'transparent'})),

      chips: [
        {name:'Tất cả', count:'9', on:true},
        {name:'Chưa đọc', count:'3', on:false},
        {name:'Nhóm', count:'2', on:false},
        {name:'Khiếu nại', count:'3', on:false},
        {name:'Lưu trữ', count:'1', on:false}
      ].map(c => ({...c,
        bg: c.on ? '#fff' : 'transparent',
        fg: c.on ? '#0B72AE' : '#5A7488',
        border: c.on ? '#0B72AE' : '#DDEAF3'})),

      pinned: [
        {name:'Lớp Toán nâng cao 8A', ava:'8A', avaBg:'#0B72AE', avaFg:'#fff',
         preview:'Cô Thu Hà: Buổi ôn tập bổ sung chiều thứ 6…', time:'08:40', unread:'3', dot:'#37E0A5'}
      ],

      convos: [
        {name:'Cô Trần Thu Hà', ava:'TH', avaBg:'#EAF6FD', avaFg:'#0B72AE', on:true,
         preview:'Chị nhớ nộp phiếu đăng ký cho bé trước thứ 6 nhé ạ.', time:'09:02', unread:'2'},
        {name:'Thầy Nam Long', ava:'NL', avaBg:'#E6F5F1', avaFg:'#0B7A62', on:true,
         icon:'fa-file-pdf', preview:'Đề ôn giữa kỳ - Toán 8.pdf', time:'Hôm qua', seen:true},
        {name:'Lớp Tiếng Anh giao tiếp 5B', ava:'5B', avaBg:'#F0EAFB', avaFg:'#5B3E9B', on:false, muted:true,
         preview:'Cô Mai: Các con nhớ mang sách bài tập ạ.', time:'Hôm qua'},
        {name:'Phòng ghi danh BlueRise', ava:'BR', avaBg:'#FFF8E8', avaFg:'#8A5A00', on:true,
         icon:'fa-microphone', preview:'Tin thoại · 0:24', time:'28/07'},
        {name:'Cô Phạm Quỳnh Chi', ava:'QC', avaBg:'#EAF6FD', avaFg:'#0B72AE', on:false,
         icon:'fa-image', preview:'Bạn: Ảnh', time:'26/07', seen:true}
      ].map(c => ({...c,
        dot: c.on ? '#37E0A5' : '#C3D4DF',
        badgeBg: c.muted ? '#8AA3B4' : '#EF5B4C',
        previewFont: c.unread ? '600 12px' : '400 12px',
        previewFg: c.unread ? '#0B3B58' : '#5A7488'})),

      cChips: [
        {name:'Tất cả', count:'9', on:false},
        {name:'Nhóm', count:'2', on:false},
        {name:'Khiếu nại', count:'3', on:true}
      ].map(c => ({...c,
        bg: c.on ? '#fff' : 'transparent',
        fg: c.on ? '#0B72AE' : '#5A7488',
        border: c.on ? '#0B72AE' : '#DDEAF3'})),

      complaints: (() => {
        const st = {
          open:       ['Mới mở',        '#EAF6FD', '#0B5379', '#6FC6EE'],
          inProgress: ['Đang xử lý',    '#FFF8E8', '#8A5A00', '#FFD166'],
          resolved:   ['Đã giải quyết', '#E6F5F1', '#0B7A62', '#0B7A62'],
          closed:     ['Đã đóng',       '#F4FAFD', '#5A7488', '#C3D4DF']
        };
        return [
          {ref:'FB-2607-042', s:'inProgress', topic:'Cơ sở vật chất', time:'16:40',
           preview:'Cô Hằng: @Minh Anh kỹ thuật đã thay bộ lọc…', unread:'1'},
          {ref:'FB-2207-038', s:'resolved', topic:'Chất lượng giảng dạy', time:'Hôm qua',
           preview:'Chờ bạn đánh giá chất lượng hỗ trợ'},
          {ref:'FB-1507-031', s:'closed', topic:'Học phí & thanh toán', time:'15/07',
           preview:'Bạn đã đánh giá hỗ trợ', rated:'4,0'}
        ].map(c => ({...c,
          status: st[c.s][0], stBg: st[c.s][1], stFg: st[c.s][2], edge: st[c.s][3],
          avaBg: st[c.s][1], avaFg: st[c.s][2], avaBd: st[c.s][3],
          previewFont: c.unread ? '600 12px' : '400 12px',
          previewFg: c.unread ? '#0B3B58' : '#5A7488'}));
      })(),

      lifecycle: [
        {name:'Mới mở', st:'done'},
        {name:'Đang xử lý', st:'current'},
        {name:'Đã giải quyết', st:'future'},
        {name:'Đã đóng', st:'future'}
      ].map(s => ({name: s.name,
        bar: s.st === 'future' ? '#EBD9AE' : '#B4720B',
        fg: s.st === 'current' ? '#5A3D00' : (s.st === 'done' ? '#8A5A00' : '#B09C6A'),
        font: s.st === 'current' ? '700' : '500'})),

      stars: [1,2,3,4,5].map(i => ({
        bg: i <= 4 ? '#FFF8E8' : '#fff',
        bd: i <= 4 ? '#F4E3BD' : '#DDEAF3',
        fg: i <= 4 ? '#FFD166' : '#E4EDF3'})),

      classChips: [
        {name:'Tất cả lớp', on:true},
        {name:'Toán nâng cao 8A', on:false},
        {name:'Tiếng Anh 5B', on:false},
        {name:'Vật lý 8', on:false}
      ].map(c => ({...c,
        bg: c.on ? '#fff' : 'transparent',
        fg: c.on ? '#0B72AE' : '#5A7488',
        border: c.on ? '#0B72AE' : '#DDEAF3'})),

      groups: [
        {name:'Toán nâng cao 8A', meta:'Thứ 3 · Thứ 6 · 18:00 — 5 liên hệ', icon:'fa-square-root-variable', people:[
          P('Cô Lê Hồng Vân','HV','lead',true,'#F0EAFB','#5B3E9B','Đang hoạt động'),
          P('Cô Trần Thu Hà','TH','gv',true,'#EAF6FD','#0B72AE','Đang hoạt động'),
          P('Thầy Nam Long','NL','tg',false,'#E6F5F1','#0B7A62','Hoạt động 2 giờ trước')
        ]},
        {name:'Tiếng Anh giao tiếp 5B', meta:'Thứ 4 · Thứ 7 · 09:00 — 3 liên hệ', icon:'fa-language', people:[
          P('Cô Nguyễn Ngọc Mai','NM','gv',false,'#EAF6FD','#0B72AE','Hoạt động hôm qua'),
          P('Bạn Đỗ Gia Bảo','GB','hv',true,'#F4FAFD','#5A7488','Đang hoạt động')
        ]},
        {name:'Trung tâm BlueRise', meta:'Bộ phận hỗ trợ — 2 liên hệ', icon:'fa-building-columns', people:[
          P('Phòng ghi danh','BR','nv',true,'#FFF8E8','#8A5A00','Trả lời trong 15 phút')
        ]}
      ],

      wave: Array.from({length:22}, (_,i) => ({
        h: [7,12,18,9,22,15,20,11,24,16,8,19,13,21,10,17,23,12,9,15,7,11][i],
        c: i < 9 ? '#fff' : 'rgba(255,255,255,.4)'
      })),

      reactions: [
        {e:'❤️', on:true},{e:'👍'},{e:'😊'},{e:'🎉'},{e:'🙏'},{e:'😮'}
      ].map(r => ({...r, bg: r.on ? '#FFF1EF' : 'transparent'})),

      msgActions: [
        {name:'Trả lời', icon:'fa-reply', bg:'#EAF6FD', fg:'#0B72AE'},
        {name:'Sao chép', icon:'fa-copy', bg:'#EAF6FD', fg:'#0B72AE'},
        {name:'Chuyển tiếp', icon:'fa-share', bg:'#EAF6FD', fg:'#0B72AE'},
        {name:'Ghim tin nhắn', icon:'fa-thumbtack', bg:'#FFF8E8', fg:'#B4720B'},
        {name:'Đã xem bởi', icon:'fa-eye', bg:'#E6F5F1', fg:'#0B7A62', meta:'3/4 thành viên'},
        {name:'Chọn nhiều', icon:'fa-list-check', bg:'#F0EAFB', fg:'#5B3E9B'},
        {name:'Xoá tin nhắn', icon:'fa-trash', bg:'#FFF1EF', fg:'#B03428', danger:true}
      ].map(a => ({...a, textFg: a.danger ? '#B03428' : '#0B3B58'})),

      media: [
        {photo:true, bg:'#CFE8F7', fg:'#B9DCF1'},
        {photo:true, bg:'#DCEFE9', fg:'#BEDDD3'},
        {file:true, bg:'#FFF1EF', fg:'#B03428', icon:'fa-file-pdf'},
        {photo:true, bg:'#EDE6FA', fg:'#D6C8F0', more:true}
      ],

      members: [
        P('Cô Lê Hồng Vân','HV','lead',true,'#F0EAFB','#5B3E9B',''),
        P('Cô Trần Thu Hà','TH','gv',true,'#EAF6FD','#0B72AE',''),
        P('Thầy Nam Long','NL','tg',false,'#E6F5F1','#0B7A62',''),
        P('Bạn (phụ huynh)','MA','hv',true,'#F4FAFD','#5A7488','')
      ],

      themeRows: [
        {key:'chat.bg',            light:'#F4FAFD', dark:'#083E63'},
        {key:'bubble.mine.bg',     light:'#0B72AE', dark:'#1B9BD8'},
        {key:'bubble.mine.ink',    light:'#FFFFFF', dark:'#04182A'},
        {key:'bubble.other.bg',    light:'#FFFFFF', dark:'#0B4E76'},
        {key:'bubble.other.ink',   light:'#0B3B58', dark:'#EAF6FD'},
        {key:'bubble.border',      light:'#DDEAF3', dark:'#12608F'},
        {key:'divider.day',        light:'#DDEAF3', dark:'#12608F'},
        {key:'divider.unread',     light:'#EF5B4C', dark:'#FF8A7A'},
        {key:'header.bg',          light:'#0B72AE', dark:'#04182A'},
        {key:'pinned.bg',          light:'#FFF8E8', dark:'#3A2E10'},
        {key:'pinned.ink',         light:'#5A3D00', dark:'#FFD166'},
        {key:'composer.bg',        light:'#FFFFFF', dark:'#04182A'},
        {key:'composer.field',     light:'#F4FAFD', dark:'#0B4E76'},
        {key:'ink.meta',           light:'#8AA3B4', dark:'#8FB9D3'},
        {key:'accent',             light:'#0B72AE', dark:'#37AEE2'},
        {key:'status.sent',        light:'#37AEE2', dark:'#6FC6EE'},
        {key:'status.error',       light:'#B03428', dark:'#FF8A7A'},
        {key:'sheet.bg',           light:'#FFFFFF', dark:'#083E63'},
        {key:'scrim',              light:'rgba(6,62,98,.5)', dark:'rgba(2,10,18,.66)'}
      ]
    };
  }
}

</script>
</body>
</html>
