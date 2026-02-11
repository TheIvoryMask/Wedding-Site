const tableSections = {
  A: {
    side: "top",
    names: ["Reynolds Ben様", "Reynolds Connor様", "Reynolds Maria様", "Henry Brenden様", "Reynolds Kaylah様", "Geercke Scott様"]
  },
  B: {
    side: "right",
    names: ["Van Brussel Ryan様", "Geercke Josephine", "Geercke Mark様", "Geercke Terry様", "松 本 萌々奈様", "松 本 晃 一様", "松 本 暁 美様", "松 本 佳 代様"]
  },
  C: {
    side: "bottom",
    names: ["余 語 穂ノ実様", "青 木 菜々子様", "武 田 京 子様", "木 全 桃 子様", "Arslan Sefkan様", "バルテル安 那様"]
  },
  D: {
    side: "top",
    names: ["Gowland Nicholas様", "Bartel Adam様", "ガウランド 萌様", "Lamert Samuel様", "Thomas Anna様", "Gourdine Alice様"]
  },
  E: {
    side: "bottom",
    names: ["Ladines Rommel様", "Zhai Vicky様", "Ma Chaopeng様", "Villegas Rotsen様", "Tungpoonsuk Tan様", "大 谷 有貴子様", "中 嶋 航 希様", "亀 島 悠 介様"]
  },
  F: {
    side: "top",
    names: ["小 柳 亮 雅様", "岩 﨑 淳 也様", "吉 田 脩 平様", "北 澤 俊様", "吉 田 京 粋様", "丸 山 幹 太様"]
  },
  G: {
    side: "bottom",
    names: ["笠 井 美由貴様", "有 山 美 咲様", "倉 原 このみ様", "茂 木 咲 野様", "山 田 伸 吾様", "ダシルバ里 菜様", "川 西 直 也様", "ダシルバ レオナルド様"]
  },
  H: {
    side: "bottom",
    names: ["Jaeyoung Hyun様", "川 井 敬 太様", "林 美 佑様", "水 野 飛 鳥様", "遠 山 詩 乃様", "山 田 優 香様"]
  }
};


const overlay = document.getElementById("modalOverlay");
const seats = document.getElementById("seats");

document.querySelectorAll(".table-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    showSection(btn.dataset.table);
  });
});

function showSection(letter) {
  const section = tableSections[letter];

  seats.innerHTML = "";
  seats.className = `seats ${section.position}`;

  const left = document.createElement("div");
  const right = document.createElement("div");

  left.className = "side";
  right.className = "side";

  section.names.forEach((name, i) => {
    const seat = document.createElement("div");
    seat.className = "seat";
    seat.textContent = name;

    (i % 2 === 0 ? left : right).appendChild(seat);
  });

  seats.append(left, right);
  overlay.classList.add("active");
}


overlay.addEventListener("click", e => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
  }
});
