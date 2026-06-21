/* =====================================================================
   HỘI ĐỒNG THẨM ĐỊNH HỒ SƠ (07 thành viên) — song ngữ
   ---------------------------------------------------------------------
   - photo: ảnh chân dung trong assets/images/council/ ("" -> chữ cái đầu)
            Ảnh vuông (1:1) đẹp nhất. Đặt tên theo số thứ tự cho dễ quản lý.
   - group: "noi-dung" (Lãnh đạo & Nội dung) | "ky-thuat" (Kỹ thuật)
   - name: tên giữ nguyên (không dịch). title/role/duty viết { vi, en }.
   ===================================================================== */

window.DATA_COUNCIL = [
  {
    name: "Võ Nguyễn Nhật Minh",
    title: { vi: "Cố vấn định hướng", en: "Strategic advisor" },
    role: { vi: "Chủ tịch Hội đồng", en: "Council Chair" },
    group: "noi-dung",
    photo: "assets/images/council/01-vo-nguyen-nhat-minh.jpg",
    duty: {
      vi: "Chủ trì toàn bộ quá trình xét duyệt; đánh giá định hướng chiến lược, sức lan tỏa dài hạn; có quyền phủ quyết và phê duyệt cuối cùng.",
      en: "Chairs the entire review process; assesses strategic direction and long-term impact; holds veto power and final approval."
    }
  },
  {
    name: "Đỗ Vũ Bảo Ngọc",
    title: { vi: "Chủ nhiệm CLB Thiên văn USAC", en: "President, USAC Astronomy Club" },
    role: { vi: "Phó Chủ tịch thứ nhất – Thư ký nội dung", en: "First Vice-Chair – Content Secretary" },
    group: "noi-dung",
    photo: "assets/images/council/02-do-vu-bao-ngoc.jpg",
    duty: {
      vi: "Điều hành họp khi Chủ tịch vắng mặt; đại diện USAC ký kết MOU và biên bản bàn giao; chủ trì đánh giá chuyên môn thiên văn; đầu mối liên lạc với các CLB.",
      en: "Runs meetings in the Chair's absence; signs MOUs and handover records for USAC; leads astronomy expertise review; main liaison with the clubs."
    }
  },
  {
    name: "Quách Hải Đăng",
    title: { vi: "Cố vấn CLB Thiên văn USAC", en: "Advisor, USAC Astronomy Club" },
    role: { vi: "Phó Chủ tịch thứ hai – Thẩm định nội dung", en: "Second Vice-Chair – Content Review" },
    group: "noi-dung",
    photo: "assets/images/council/03-quach-hai-dang.jpg",
    duty: {
      vi: "Độc lập đánh giá Proposal; phân tích chiều sâu kế hoạch hoạt động; xác minh tính chính xác của thông tin chuyên môn thiên văn.",
      en: "Independently reviews proposals; analyses the depth of activity plans; verifies the accuracy of astronomy content."
    }
  },
  {
    name: "Đinh Đào Quốc Thịnh",
    title: { vi: "Cố vấn Ban Kỹ thuật USAC", en: "Technical Board advisor, USAC" },
    role: { vi: "Ủy viên – Chuyên trách thẩm định kỹ thuật", en: "Member – Technical review specialist" },
    group: "noi-dung",
    photo: "assets/images/council/04-dinh-dao-quoc-thinh.jpg",
    duty: {
      vi: "Cố vấn chuyên sâu về quang học, thiên văn; thiết lập tiêu chuẩn đánh giá bảo quản & vận hành; tổ chức tập huấn cho CLB tiếp nhận.",
      en: "Deep advisor on optics and astronomy; sets standards for storage and operation; runs training for receiving clubs."
    }
  },
  {
    name: "Huỳnh Ngọc Thanh",
    title: { vi: "Trưởng Ban Kỹ thuật", en: "Head of the Technical Board" },
    role: { vi: "Thư ký Hội đồng – Trưởng nhóm thẩm định kỹ thuật", en: "Council Secretary – Technical review lead" },
    group: "ky-thuat",
    photo: "assets/images/council/05-huynh-ngoc-thanh.jpg",
    duty: {
      vi: "Lưu trữ biên bản, phiếu đánh giá; chủ trì thẩm định điều kiện bảo quản; lập hồ sơ kỹ thuật thiết bị trước mỗi lần bàn giao và hoàn trả.",
      en: "Keeps minutes and review records; leads storage-condition assessment; prepares technical records before each handover and return."
    }
  },
  {
    name: "Trần Hưng Thịnh",
    title: { vi: "Phó Ban Kỹ thuật", en: "Deputy Head, Technical Board" },
    role: { vi: "Ủy viên Kỹ thuật – Giám sát sau bàn giao", en: "Technical member – Post-handover monitoring" },
    group: "ky-thuat",
    photo: "assets/images/council/06-tran-hung-thinh.jpg",
    duty: {
      vi: "Thẩm định năng lực vận hành; tổng hợp thông tin sự kiện của CLB để lập báo cáo giám sát định kỳ; hỗ trợ kỹ thuật từ xa.",
      en: "Assesses operating capacity; compiles club event data for periodic monitoring reports; provides remote technical support."
    }
  },
  {
    name: "Huỳnh Hùng Lâm",
    title: { vi: "Phó Ban Kỹ thuật", en: "Deputy Head, Technical Board" },
    role: { vi: "Ủy viên Kỹ thuật – Giám sát sau bàn giao", en: "Technical member – Post-handover monitoring" },
    group: "ky-thuat",
    photo: "assets/images/council/07-huynh-hung-lam.jpg",
    duty: {
      vi: "Thẩm định điều kiện bảo quản; cập nhật dữ liệu giám sát liên tục; hỗ trợ kỹ thuật tại chỗ trong các đợt bàn giao và tập huấn.",
      en: "Assesses storage conditions; keeps monitoring data up to date; provides on-site technical support during handovers and training."
    }
  }
];
