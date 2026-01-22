const paletteList = [
    {
        title: "CUD推奨配色セット(アクセントカラー)",
        type: "other",
        colorList: [
            {
                hex: "#ff4b00",
                desc: "赤",
                type: "",
            },
            {
                hex: "#f6aa00",
                desc: "オレンジ",
                type: "",
            },
            {
                hex: "#fff100",
                desc: "黄色",
                type: "",
            },
            {
                hex: "#03af7a",
                desc: "緑",
                type: "",
            },
            {
                hex: "#005aff",
                desc: "青",
                type: "",
            },
            {
                hex: "#4dc4ff",
                desc: "空色",
                type: "",
            },
            {
                hex: "#990099",
                desc: "紫",
                type: "",
            },
            {
                hex: "#804000",
                desc: "ピンク",
                type: "",
            },
            {
                hex: "#84919e",
                desc: "灰色",
                type: "",
            },
        ],
    },
    {
        title: "CUD推奨配色セット(ベースカラー)",
        type: "other",
        colorList: [
            {
                hex: "#ffcabf",
                desc: "明るいピンク",
                type: "",
            },
            {
                hex: "#ffca80",
                desc: "ベージュ",
                type: "",
            },
            {
                hex: "#ffff80",
                desc: "クリーム",
                type: "",
            },
            {
                hex: "#d8f255",
                desc: "明るい黄緑",
                type: "",
            },
            {
                hex: "#77d9a8",
                desc: "明るい緑",
                type: "",
            },
            {
                hex: "#bfe4ff",
                desc: "明るい空色",
                type: "",
            },
            {
                hex: "#c9ace6",
                desc: "明るい紫",
                type: "",
            },
            {
                hex: "#c8c8cb",
                desc: "明るいグレー",
                type: "",
            },
        ],
    },
    {
        title: "ぼっち・ざ・ろっく！",
        type: "anime",
        colorList: [
            {
                hex: "#ff2291",
                desc: "後藤ひとり",
                type: "character",
            },
            {
                hex: "#ffb400",
                desc: "伊地知虹夏",
                type: "character",
            },
            {
                hex: "#02d1e0",
                desc: "山田リョウ",
                type: "character",
            },
            {
                hex: "#ff4637",
                desc: "喜多郁代",
                type: "character",
            },
        ],
    },
    {
        title: "リコリス・リコイル",
        type: "anime",
        colorList: [
            {
                hex: "#ef545b",
                desc: "錦木千束",
                type: "character",
            },
            {
                hex: "#00b4ac",
                desc: "井ノ上たきな",
                type: "character",
            },
        ],
    },
    {
        title: "転生王女と天才令嬢の魔法革命",
        type: "anime",
        colorList: [
            {
                hex: "#ed9daa",
                desc: "",
                type: "character",
            },
            {
                hex: "#90a7d3",
                desc: "",
                type: "character",
            },
        ],
    },
    {
        title: "Summer Pockets",
        type: "game",
        colorList: [
            {
                hex: "#ab94d0",
                desc: "鳴瀬しろは",
                type: "character",
            },
            {
                hex: "#ff769a",
                desc: "",
                type: "character",
            },
            {
                hex: "#f9b933",
                desc: "",
                type: "character",
            },
            {
                hex: "#72cf58",
                desc: "",
                type: "character",
            },
            {
                hex: "#23ac38",
                desc: "",
                type: "character",
            },
            {
                hex: "#601986",
                desc: "",
                type: "character",
            },
            {
                hex: "#c62885",
                desc: "",
                type: "character",
            },
            {
                hex: "#e5041e",
                desc: "",
                type: "character",
            },
        ],
    },
    {
        title: "LOOPERS",
        type: "game",
        colorList: [
            {
                hex: "#e80094",
                desc: "",
                type: "background",
            },
            {
                hex: "#cafb57",
                desc: "",
                type: "background",
            },
            {
                hex: "#689500",
                desc: "",
                type: "background",
            },
            {
                hex: "#ff361d",
                desc: "",
                type: "background",
            },
        ],
    },
    {
        title: "LUNARiA -Virtualized Moonchild-",
        type: "game",
        colorList: [
            {
                hex: "#3955c9",
                desc: "",
                type: "background",
            },
            {
                hex: "#fff954",
                desc: "",
                type: "background",
            },
            {
                hex: "#5adae8",
                desc: "",
                type: "background",
            },
        ],
    },
    {
        title: "蒼の彼方のフォーリズム",
        type: "game",
        colorList: [
            {
                hex: "#fe3668",
                desc: "",
                type: "character",
            },
            {
                hex: "#c136fe",
                desc: "",
                type: "character",
            },
            {
                hex: "#febc12",
                desc: "",
                type: "character",
            },
            {
                hex: "#27cc90",
                desc: "",
                type: "character",
            },
            {
                hex: "#0072f4",
                desc: "",
                type: "background",
            },
        ],
    },
    {
        title: "さくらの雲*スカアレットの恋",
        type: "game",
        colorList: [
            {
                hex: "#f25242",
                desc: "",
                type: "character",
            },
            {
                hex: "#e6bf68",
                desc: "",
                type: "character",
            },
            {
                hex: "#72b0cb",
                desc: "",
                type: "character",
            },
            {
                hex: "#9c92c9",
                desc: "",
                type: "character",
            },
            {
                hex: "#ff9a91",
                desc: "",
                type: "character",
            },
        ],
    },
    {
        title: "ハミダシクリエイティブ",
        type: "game",
        colorList: [
            {
                hex: "#f57da6",
                desc: "",
                type: "character",
            },
            {
                hex: "#fdc164",
                desc: "",
                type: "character",
            },
            {
                hex: "#9b7aee",
                desc: "",
                type: "character",
            },
            {
                hex: "#4bbaf2",
                desc: "",
                type: "character",
            },
            {
                hex: "#e03331",
                desc: "",
                type: "background",
            },
        ],
    },
];

/**
 * 適切な文字色をコントラスト比から取得する。
 * @param {string} bgHex 背景色(hex)
 * @returns
 */
const selectColorByContrastFor = (bgHex) => {
    const bg = chroma(bgHex);

    // 白と黒のコントラストを比較
    const contrastWhite = chroma.contrast(bgHex, "white");
    const contrastBlack = chroma.contrast(bgHex, "black");

    return contrastWhite < contrastBlack ? "black" : "white";
};

/**
 * モーダルに表示する情報を設定する。
 * @param {object} color 色オブジェクト
 */
const setModalContent = (color) => {
    // コントラスト確認用
    document.getElementById("contrast-text-black").style.backgroundColor = color.hex;
    document.getElementById("contrast-text-white").style.backgroundColor = color.hex;
    document.getElementById("contrast-bg-black").style.color = color.hex;
    document.getElementById("contrast-bg-white").style.color = color.hex;

    // 表データ設定
    document.getElementById("cellHex").textContent = color.hex;
    document.getElementById("cellRgb").textContent = chroma(color.hex).rgb().join(" ");
    document.getElementById("cellHsv").textContent = chroma(color.hex)
        .hsv()
        .map((v, i) => (i === 0 ? Math.round(v) || 0 : Math.round(v * 100) + "%"))
        .join(" ");
    document.getElementById("cellHsl").textContent = chroma(color.hex)
        .hsl()
        .map((v, i) => (i === 0 ? Math.round(v) || 0 : Math.round(v * 100) + "%"))
        .join(" ");

    // 色の詳細情報設定
    document.getElementById("modalDescription").textContent = color.desc;
};

/**
 * 色相環の一片をクリックしたときの処理
 * @param {Event} event
 * @param {object} color
 */
const handleClickModalWheelSector = (event, color) => {
    if (event.target.classList.contains("active")) {
        return;
    }
    // モーダルで表示する色を更新
    setModalContent(color);

    // activeクラスの付け替え
    document.getElementById("wheel-container").querySelector(".active").classList.remove("active");
    event.target.classList.add("active");
};

/**
 * 2つの円弧（外周・内周）と2つの放射状の直線で構成される扇形（ドーナツの破片）のSVGパスデータを計算します。
 *
 * @param {number} cx - 中心点のX座標 (px)
 * @param {number} cy - 中心点のY座標 (px)
 * @param {number} rOuter - 外円の半径 (px)
 * @param {number} rInner - 内円の半径 (px)
 * @param {number} startDeg - 開始角度 (度数法、時計の3時方向が0度)
 * @param {number} endDeg - 終了角度 (度数法)
 * @returns {string} clip-path: path() で使用可能なSVGパス文字列
 */
const calculateSectorPath = (cx, cy, rOuter, rInner, startDeg, endDeg) => {
    const toRad = (d) => (d * Math.PI) / 180;
    const sR = toRad(startDeg);
    const eR = toRad(endDeg);

    // 扇形の4頂点の座標を計算
    // p1: 内周開始, p2: 外周開始, p3: 外周終了, p4: 内周終了
    const p1 = { x: cx + rInner * Math.cos(sR), y: cy + rInner * Math.sin(sR) };
    const p2 = { x: cx + rOuter * Math.cos(sR), y: cy + rOuter * Math.sin(sR) };
    const p3 = { x: cx + rOuter * Math.cos(eR), y: cy + rOuter * Math.sin(eR) };
    const p4 = { x: cx + rInner * Math.cos(eR), y: cy + rInner * Math.sin(eR) };

    const largeArc = endDeg - startDeg > 180 ? 1 : 0;

    /*
     * パス構築の順序:
     * 1. 内周開始点へ移動 (M)
     * 2. 外周開始点へ直線 (L) -> スリットの方向を決定
     * 3. 外周の円弧を描画 (A)
     * 4. 内周終了点へ直線 (L) -> スリットの方向を決定
     * 5. 内周の円弧を逆向きに描画して開始点へ戻る (A)
     */
    return [
        `M ${p1.x} ${p1.y}`,
        `L ${p2.x} ${p2.y}`,
        `A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${p3.x} ${p3.y}`,
        `L ${p4.x} ${p4.y}`,
        `A ${rInner} ${rInner} 0 ${largeArc} 0 ${p1.x} ${p1.y}`,
        `Z`,
    ].join(" ");
};

/**
 * 指定された色リストを元に、インタラクティブなドーナツ型色相環を描画します。
 * 各要素はdivで生成され、CSS変数を用いてスリット（移動）とホバー（拡大）を制御します。
 *
 * @param {string[]} hexColors - 描画する色の16進数コードの配列
 * @param {number} size - コンテナの直径 (px)
 * @param {number} innerRatio - 外円に対する内円の直径比率 (0.0〜1.0)
 * @param {number} offsetPx - 中心から外側への移動距離 (px)。これが擬似的なスリット幅になります
 * @param {string} activeColor
 */
const drawDonutWheel = (hexColors, size = 300, innerRatio = 0.5, offsetPx = 1, activeColor = null) => {
    // 描画前に一度クリア
    const container = document.getElementById("wheel-container");
    while (container?.lastChild) {
        container.removeChild(container.lastChild);
    }

    container.style.width = `${size}px`;
    container.style.height = `${size}px`;

    const count = hexColors.length;
    const margin = 12;
    const cx = size / 2;
    const cy = size / 2;
    const rOuter = size / 2 - margin;
    const rInner = rOuter * innerRatio;
    const step = 360 / count;

    const rotationOffset = -90 - step / 2;

    hexColors.forEach((color, index) => {
        const startDeg = rotationOffset + index * step;
        const endDeg = startDeg + step; // 隙間なし

        // 1. パス生成 (スリットなしの完全な扇形)
        const pathData = calculateSectorPath(cx, cy, rOuter, rInner, startDeg, endDeg);

        // 2. 移動距離の計算 (中心から外側へ offsetPx 分移動)
        const midDeg = startDeg + step / 2;
        const midRad = (midDeg * Math.PI) / 180;
        const tx = Math.cos(midRad) * offsetPx;
        const ty = Math.sin(midRad) * offsetPx;

        // 3. DOM生成
        const div = document.createElement("div");
        div.classList.add("color-sector");
        div.style.backgroundColor = color.hex;
        div.style.clipPath = `path('${pathData}')`;

        if (activeColor && color.hex == activeColor) {
            div.classList.add("active");
        }

        div.dataset.hex = color.hex;

        // 擬似的なスリットを作るための移動
        div.style.setProperty("--translate-x", `${tx}px`);
        div.style.setProperty("--translate-y", `${ty}px`);

        div.addEventListener("click", (event) => handleClickModalWheelSector(event, color));

        container.appendChild(div);
    });
};

/**
 * 色相環のサイズを算出する。
 * @returns
 */
const getCalculatedSize = () => Math.min(window.innerWidth - 65, 360);

const handleClickOverview = (work, color) => {
    document.getElementById("detailModalTitle").textContent = work.title;

    drawDonutWheel(work.colorList, getCalculatedSize(), 0.6, 2, color.hex);
    setModalContent(color);

    const detailModal = new bootstrap.Modal(document.getElementById("detailModal"));
    detailModal.show();
};

/**
 * 色一覧のHTMLを構築する。
 */
const createOverview = () => {
    const overviewArea = document.getElementById("overviewArea");

    for (const work of paletteList) {
        const workDiv = document.createElement("div");
        workDiv.classList.add("col");

        const h2Title = document.createElement("h2");
        h2Title.classList.add("colors-title");
        h2Title.textContent = work.title;

        const colorRowDiv = document.createElement("div");
        colorRowDiv.classList.add("row", "g-0", "mb-2", "text-center");

        for (const color of work.colorList) {
            const colorColDiv = document.createElement("div");
            colorColDiv.classList.add("col", "color-overview");
            //colorColDiv.textContent = color.hex;
            colorColDiv.style.background = color.hex;
            //colorColDiv.style.color = selectColorByContrastFor(color.hex);

            colorColDiv.addEventListener("click", (event) => handleClickOverview(work, color));

            colorRowDiv.appendChild(colorColDiv);
        }

        workDiv.appendChild(h2Title);
        workDiv.appendChild(colorRowDiv);
        overviewArea.appendChild(workDiv);
    }
};

/**
 * modalを非表示にしたときの処理
 */
const handleHiddenModal = () => {
    document.getElementById("detailModalTitle").textContent = "";

    const container = document.getElementById("wheel-container");
    while (container?.lastChild) {
        container.removeChild(container.lastChild);
    }
};

document.addEventListener("DOMContentLoaded", (event) => {
    createOverview();

    document.getElementById("detailModal").addEventListener("hidden.bs.modal", (event) => handleHiddenModal());
});
