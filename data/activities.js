/* =====================================================================
   CÁC HOẠT ĐỘNG ĐÃ DIỄN RA  &  THƯ VIỆN ẢNH  (song ngữ)
   ---------------------------------------------------------------------
   - date:    ngày, ví dụ "15/09/2026" (không cần dịch)
   - cover:   ảnh đại diện trong assets/images/activities/
   - gallery: danh sách ảnh thêm (có thể [] nếu chưa có)
   ===================================================================== */

window.DATA_ACTIVITIES = [
  {
    title: { vi: "Đêm quan sát Trăng & Sao Mộc (Mẫu)", en: "Moon & Jupiter observation night (sample)" },
    date: "15/09/2026",
    club: { vi: "CLB Thiên văn THPT Nguyễn Văn A", en: "Nguyen Van A High-School Astronomy Club" },
    cover: "assets/images/activities/dem-quan-sat-mau.jpg",
    summary: {
      vi: "Buổi quan sát đầu tiên sau khi nhận thiết bị: hơn 120 học sinh lần đầu nhìn thấy các vành đai và vệ tinh của Sao Mộc qua kính.",
      en: "The first session after receiving equipment: over 120 students saw Jupiter's bands and moons through a telescope for the first time."
    },
    gallery: ["assets/images/activities/dem-quan-sat-mau.jpg"]
  },
  {
    title: { vi: "Workshop căn chỉnh & sử dụng kính (Mẫu)", en: "Alignment & operation workshop (sample)" },
    date: "02/10/2026",
    club: { vi: "Ban Kỹ thuật USAC", en: "USAC Technical Board" },
    cover: "assets/images/activities/workshop-mau.jpg",
    summary: {
      vi: "Tập huấn 4 giờ cho thành viên nòng cốt: lắp ráp, căn chỉnh trục, bảo quản và xử lý sự cố cơ bản.",
      en: "A 4-hour training for core members: assembly, optical alignment, storage and basic troubleshooting."
    },
    gallery: []
  }
  // , { ...thêm hoạt động mới ở đây... }
];
