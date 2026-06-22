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
    name: { vi: "CLB Thiên văn PAC", en: "PAC Astronomy Club" },
    school: { vi: "Trường THPT Chuyên Huỳnh Mẫn Đạt", en: "Huynh Man Dat High School For The Gifted" },
    location: { vi: "Tỉnh An Giang", en: "An Giang Province" },
    logo: "assets/images/clubs/pac-club.jpg",
    status: "active",
    cycle: "2026 – 2027",
    equipment: { vi: "Kính phản xạ Dobson 100mm + Ống nhòm Celestron", en: "Dobsonian telescope 100mm + Celestron Binoscopes" },
    members: 24,
    note: { vi: "CLB đầu tiên tiếp nhận thiết bị trong chu kỳ thí điểm.", en: "First club to receive equipment in the pilot cycle." }
  },
  {
    name: { vi: "CLB STEM", en: "STEM Club" },
    school: { vi: "Trường Trung học Thực hành, Đại học Sư phạm TP. Hồ Chí Minh", en: "The Experimental High School, Ho Chi Minh City University of Education" },
    location: { vi: "Thành phố Hồ Chí Minh", en: "Ho Chi Minh City" },
    logo: "assets/images/clubs/stem-club.jpg",
    status: "active",
    cycle: "2026 – 2027",
    equipment: { vi: "Kính phản xạ 114mm + Ống nhòm Celestron", en: "114mm reflector telescope + Celestron Binoscopes" },
    members: 31,
    note: { vi: "Thiết lập Trạm quan sát vệ tinh USAC và phục vụ cho lan toả khoa học.", en: "Establish the USAC Satellite Observation Station and promote scientific dissemination" }
  }
  // , { ...thêm CLB mới ở đây... }
];
