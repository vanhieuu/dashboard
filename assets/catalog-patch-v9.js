(function () {
  const updates = {
    "apps-bluerise-classes-flow-storyboard": [
      ["classes-01","01","Danh sách lớp · lịch tuần + tiến độ 2px","/classes"],
      ["classes-02","02","Hub lớp học · 5 lối đi","/class/[id]"],
      ["classes-03","03","Lộ trình học tập · node buổi kế tiếp","/learning-path"],
      ["classes-04","04","Lớp học thử · quy trình ghi danh","/classes"],
      ["classes-05","05","Trạng thái rỗng","/classes"],
      ["classes-06","06","Đang tải · skeleton theo hàng thật","/classes"]
    ],
    "apps-bluerise-assessments-flow-storyboard": [
      ["assessments-01","01","Toàn cục","/assessments"],
      ["assessments-02","02","Theo lớp","?classId="],
      ["assessments-03","03","Chi tiết","/assessment/[id]"],
      ["assessments-04","04","Cửa phòng thi","/exam/[id]/start"],
      ["assessments-05","05","Trắc nghiệm · timer bậc 2","/exam/[id]/take"],
      ["assessments-06","06","Nối cặp & sắp xếp · timer bậc 3","/exam/[id]/take"],
      ["assessments-07","07","Xác nhận nộp","sheet"],
      ["assessments-08","08","Đã nộp","/exam/[id]/done"],
      ["assessments-09","09","Đã chấm","/assessment/[id]"],
      ["assessments-10","10","Xem lại bài","/exam/[id]/review"]
    ],
    "apps-bluerise-tuition-flow-storyboard": [
      ["tuition-01","01","Cần thanh toán","/tuition"],
      ["tuition-02","02","Lịch sử","/tuition"],
      ["tuition-03","03","Gói học phí","/tuition"],
      ["tuition-04","04","Chọn phương án","/invoice/[id]"],
      ["tuition-05","05","Chi tiết đơn","/order/[id]"],
      ["tuition-06","06","Điều khoản thanh toán","pay 1/3"],
      ["tuition-07","07","Ví học phí","pay 2/3"],
      ["tuition-08","08","QR chuyển khoản","pay 3/3"],
      ["tuition-09","09","Chờ tiền vào","/payment/track"],
      ["tuition-10","10","Thành công","/payment/success"],
      ["tuition-11","11","Không còn khoản nào","/tuition"]
    ],
    "apps-bluerise-account-flow-storyboard": [
      ["account-01","01","Hồ sơ · tab học viên","/account"],
      ["account-02","02","Đang chờ duyệt","/account"],
      ["account-03","03","Đổi học sinh","sheet"],
      ["account-04","04","Tạo yêu cầu chỉnh sửa","sheet 86%"],
      ["account-05","05","Xem yêu cầu đang chờ","sheet 62%"],
      ["account-06","06","Đổi mật khẩu","/account/password"],
      ["account-07","07","Ảnh check-in","/account/face"],
      ["account-08","08","Tab phụ huynh + sheet đăng xuất","/account"]
    ]
  };
  const catalog = window.BR_CATALOG || [];
  for (const group of catalog) {
    const cards = group && group[2];
    if (!Array.isArray(cards)) continue;
    for (const card of cards) {
      if (card && updates[card[0]]) card[5] = updates[card[0]];
    }
  }
})();
