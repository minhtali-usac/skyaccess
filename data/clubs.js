/* =====================================================================
   DANH SÁCH CÁC CLB ĐÃ THAM GIA CHƯƠNG TRÌNH  (song ngữ)
   ---------------------------------------------------------------------
   Thêm 1 CLB: copy một khối { ... }, dán thêm và sửa.
   - logo:    ảnh trong assets/images/clubs/ ("" -> hiện chữ cái đầu)
   - status:  "active" (đang mượn) | "alumni" (đã xong chu kỳ)
   Trường có thể song ngữ { vi, en }; trường giống nhau 2 thứ tiếng để 1 chuỗi.
   ===================================================================== */

window.DATA_CLUBS = [
  {
    name: { vi: "CLB Thiên văn THPT (Mẫu)", en: "High-School Astronomy Club (sample)" },
    school: { vi: "Trường THPT Nguyễn Văn A", en: "Nguyen Van A High School" },
    location: { vi: "TP. Hồ Chí Minh", en: "Ho Chi Minh City" },
    logo: "assets/images/clubs/club-mau.png",
    status: "active",
    cycle: "2026 – 2027",
    equipment: { vi: "Kính khúc xạ 70mm + chân đế", en: "70mm refractor + mount" },
    members: 24,
    note: { vi: "CLB đầu tiên tiếp nhận thiết bị trong chu kỳ thí điểm.", en: "First club to receive equipment in the pilot cycle." }
  },
  {
    name: { vi: "CLB Khoa học – Thiên văn (Mẫu)", en: "Science – Astronomy Club (sample)" },
    school: { vi: "Trường THPT Trần Thị B", en: "Tran Thi B High School" },
    location: { vi: "Bình Dương", en: "Binh Duong" },
    logo: "",
    status: "active",
    cycle: "2026 – 2027",
    equipment: { vi: "Kính phản xạ 114mm", en: "114mm reflector" },
    members: 31,
    note: { vi: "Thiết lập Trạm quan sát vệ tinh USAC tại sân thượng nhà trường.", en: "Set up a USAC satellite observation station on the school rooftop." }
  }
  // , { ...thêm CLB mới ở đây... }
];
