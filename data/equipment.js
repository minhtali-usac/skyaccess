/* =====================================================================
   THIẾT BỊ CÓ THỂ NHẬN QUA CHƯƠNG TRÌNH  (song ngữ)
   ---------------------------------------------------------------------
   Mỗi trường chữ viết dạng { vi: "...", en: "..." }.
   - image: ảnh minh hoạ, đặt trong assets/images/equipment/
   - tag:   nhãn ngắn (không cần dịch)
   ===================================================================== */

window.DATA_EQUIPMENT = [
  {
    name: { vi: "Kính thiên văn khúc xạ", en: "Refractor telescope" },
    tag: "Refractor",
    image: "assets/images/equipment/khuc-xa.jpg",
    desc: {
      vi: "Dùng thấu kính hội tụ ánh sáng. Gọn nhẹ, dễ vận hành, lý tưởng để quan sát Mặt Trăng, các hành tinh và lần đầu làm quen với bầu trời.",
      en: "Uses lenses to focus light. Compact and easy to operate — ideal for the Moon, planets and a first encounter with the night sky."
    },
    specs: {
      vi: ["Khẩu độ phổ biến 60–90mm", "Dễ di chuyển, ít bảo trì", "Phù hợp người mới bắt đầu"],
      en: ["Common aperture 60–90mm", "Portable, low maintenance", "Great for beginners"]
    }
  },
  {
    name: { vi: "Kính thiên văn phản xạ", en: "Reflector telescope" },
    tag: "Reflector",
    image: "assets/images/equipment/phan-xa.jpg",
    desc: {
      vi: "Dùng gương cầu thu sáng. Cho khẩu độ lớn với chi phí hợp lý, quan sát tốt các thiên thể mờ như tinh vân, cụm sao.",
      en: "Uses mirrors to gather light. Larger aperture at a reasonable cost — good for faint objects like nebulae and star clusters."
    },
    specs: {
      vi: ["Khẩu độ 100–150mm", "Thu sáng mạnh hơn cùng tầm giá", "Cần căn chỉnh trục quang định kỳ"],
      en: ["Aperture 100–150mm", "More light-gathering per dollar", "Needs periodic optical alignment"]
    }
  },
  {
    name: { vi: "Kính Dobsonian", en: "Dobsonian telescope" },
    tag: "Dobsonian",
    image: "assets/images/equipment/dobsonian.jpg",
    desc: {
      vi: "Kính phản xạ đặt trên đế xoay đơn giản. Khẩu độ lớn, dễ ngắm, rất phù hợp cho các đêm quan sát đông người ngoài trời.",
      en: "A reflector on a simple rocker mount. Large aperture and intuitive aiming — perfect for crowded outdoor observation nights."
    },
    specs: {
      vi: ["Khẩu độ lớn, hình ảnh sáng rõ", "Thao tác ngắm trực quan", "Thích hợp sự kiện cộng đồng"],
      en: ["Large aperture, bright views", "Intuitive point-and-look", "Ideal for community events"]
    }
  },
  {
    name: { vi: "Ống nhòm thiên văn", en: "Astronomy binoculars" },
    tag: "Binoculars",
    image: "assets/images/equipment/ong-nhom.jpg",
    desc: {
      vi: "Lựa chọn khởi đầu nhẹ nhàng và linh hoạt. Trường nhìn rộng, dễ cầm tay, lý tưởng để ngắm Mặt Trăng, cụm sao và dải Ngân Hà cho nhóm đông.",
      en: "A light, flexible entry point. Wide field of view and easy to hold — ideal for the Moon, star clusters and the Milky Way with larger groups."
    },
    specs: {
      vi: ["Thông số phổ biến 7×50 / 10×50", "Trường nhìn rộng, dễ làm quen", "Gọn nhẹ, dùng được nhiều người"],
      en: ["Common specs 7×50 / 10×50", "Wide field, beginner-friendly", "Lightweight, easy to share"]
    }
  },
  {
    name: { vi: "Phụ kiện đi kèm", en: "Accessories" },
    tag: "Accessories",
    image: "assets/images/equipment/phu-kien.jpg",
    desc: {
      vi: "Bộ phụ kiện hỗ trợ quan sát: thị kính (eyepiece) nhiều tiêu cự, kính tìm, chân đế và hộp/túi bảo vệ chuyên dụng.",
      en: "A support kit for observation: multiple eyepieces, a finder scope, a mount and a dedicated protective case."
    },
    specs: {
      vi: ["Thị kính đa tiêu cự", "Kính tìm (finder scope)", "Chân đế & hộp bảo quản"],
      en: ["Multiple eyepieces", "Finder scope", "Mount & storage case"]
    }
  }
];
