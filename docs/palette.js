const CONFIG = {
    WHEEL: {
        MAX_SIZE: 300,
        MARGIN_OFFSET: 65, // 画面幅から引くサイズ
        SECTOR_MARGIN: 12, // セクター描画時の外周マージン
        GAP_PX: 1.8, // スリット幅
        INNER_RATIO: 0.6, // 内円の比率
    },
};

const PALETTE_LIST = [
    {
        title: "カラーユニバーサルデザイン推奨配色セット",
        type: "other",
        colorList: [
            {
                hex: "#ff4b00",
                desc: "赤",
                type: "accent",
            },
            {
                hex: "#f6aa00",
                desc: "オレンジ",
                type: "accent",
            },
            {
                hex: "#fff100",
                desc: "黄色",
                type: "accent",
            },
            {
                hex: "#03af7a",
                desc: "緑",
                type: "accent",
            },
            {
                hex: "#005aff",
                desc: "青",
                type: "accent",
            },
            {
                hex: "#4dc4ff",
                desc: "空色",
                type: "accent",
            },
            {
                hex: "#990099",
                desc: "紫",
                type: "accent",
            },
            {
                hex: "#804000",
                desc: "ピンク",
                type: "accent",
            },
            {
                hex: "#ffcabf",
                desc: "明るいピンク",
                type: "base",
            },
            {
                hex: "#ffca80",
                desc: "ベージュ",
                type: "base",
            },
            {
                hex: "#ffff80",
                desc: "クリーム",
                type: "base",
            },
            {
                hex: "#d8f255",
                desc: "明るい黄緑",
                type: "base",
            },
            {
                hex: "#77d9a8",
                desc: "明るい緑",
                type: "base",
            },
            {
                hex: "#bfe4ff",
                desc: "明るい空色",
                type: "base",
            },
            {
                hex: "#c9ace6",
                desc: "明るい紫",
                type: "base",
            },
            {
                hex: "#84919e",
                desc: "灰色",
                type: "achromatic",
            },
            {
                hex: "#c8c8cb",
                desc: "明るいグレー",
                type: "achromatic",
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
 * PALETTE_LISTの各カラーオブジェクトに計算済みのフォーマット(rgb, hsv, hsl)を追加する
 */
const preprocessPaletteData = () => {
    const formatArray = (arr) => arr.map((v, i) => (i === 0 ? Math.round(v) || 0 : Math.round(v * 100) + "%")).join(" ");
    const formatCmyk = (arr) => arr.map((v) => Math.round(v * 100) + "%").join(" ");

    PALETTE_LIST.forEach((work) => {
        work.colorList.forEach((color) => {
            const c = chroma(color.hex);

            color.rgb = c.rgb().join(" ");
            color.hsv = formatArray(c.hsv());
            color.hsl = formatArray(c.hsl());
            color.cmyk = formatCmyk(c.cmyk());
        });
    });
};

/**
 * 扇形のSVGパスデータを計算する
 * @param {number} cx 中心X
 * @param {number} cy 中心Y
 * @param {number} rOuter 外半径
 * @param {number} rInner 内半径
 * @param {number} startDeg 開始角度
 * @param {number} endDeg 終了角度
 * @returns {string} path文字列
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
 * 画面サイズに応じた色相環のサイズを計算する
 */
const calculateWheelSize = () => {
    return Math.min(window.innerWidth - CONFIG.WHEEL.MARGIN_OFFSET, CONFIG.WHEEL.MAX_SIZE);
};

/**
 * コンテナ内の要素を全削除する
 * @param {HTMLElement} container
 */
const clearContainer = (container) => {
    if (!container) return;
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
};
/**
 * コントラスト計のHTML構造を生成・更新する
 */
const renderContrastMeter = (containerId, ratio) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    // スケール計算（最大8.0で100%）
    const calcPos = (val) => Math.min(Math.max(((val - 1) / 7) * 100, 0), 100);
    const currentPercent = calcPos(ratio);

    // メモリの位置（固定）
    const posNormalAA = calcPos(4.5); // 50%
    const posNormalAAA = calcPos(7.0); // 85.7%
    const posLargeAA = calcPos(3.0); // 28.6%
    const posLargeAAA = calcPos(4.5); // 50%

    container.innerHTML = `
        <div class="contrast-meter">
            <div class="marker marker-top bg-aa" style="left: ${posNormalAA}%;">AA</div>
            <div class="marker marker-top bg-aaa" style="left: ${posNormalAAA}%;">AAA</div>

            <div class="meter-bar-base">
                <div class="meter-bar-fill" style="width: ${currentPercent}%;"></div>
            </div>

            <div class="marker marker-bottom bg-aa" style="left: ${posLargeAA}%;">AA</div>
            <div class="marker marker-bottom bg-aaa" style="left: ${posLargeAAA}%;">AAA</div>

            <div class="ratio-display">${ratio.toFixed(2)}</div>
        </div>
    `;
};

/**
 * WCAG2.0による評価基準を返す
 * @param {number} contrastRatio コントラスト比
 * @returns {string} 評価
 */
const contrastToWcag2 = (contrastRatio) => {
    if (contrastRatio >= 7.0) {
        return "AAA";
    } else if (contrastRatio >= 4.5) {
        return "AA";
    } else if (contrastRatio >= 3.0) {
        return "A*";
    } else {
        return "A";
    }
};

/**
 * モーダルの内容を更新する
 * @param {object} colorObj 色オブジェクト
 */
const updateModalContent = (colorObj) => {
    // コントラスト確認用
    document.getElementById("detailModal").style.setProperty("--modal-active-color", colorObj.hex);

    // コントラスト比
    const ratioWhite = chroma.contrast(colorObj.hex, "#ffffff");
    const ratioBlack = chroma.contrast(colorObj.hex, "#000000");

    document.getElementById("contrast-text-white").textContent = contrastToWcag2(ratioWhite);
    document.getElementById("contrast-bg-white").textContent = contrastToWcag2(ratioWhite);
    document.getElementById("contrast-text-black").textContent = contrastToWcag2(ratioBlack);
    document.getElementById("contrast-bg-black").textContent = contrastToWcag2(ratioBlack);

    // 白背景に対して
    renderContrastMeter("contrast-white", ratioWhite);
    renderContrastMeter("contrast-black", ratioBlack);

    // テキスト情報
    document.getElementById("cellHex").textContent = colorObj.hex;
    document.getElementById("cellRgb").textContent = colorObj.rgb;
    document.getElementById("cellHsv").textContent = colorObj.hsv;
    document.getElementById("cellHsl").textContent = colorObj.hsl;
    document.getElementById("cellCmyk").textContent = colorObj.cmyk;
    document.getElementById("modalDescription").textContent = colorObj.desc;
};

/**
 * 色相環上のアクティブなセクターを視覚的に切り替える
 * @param {HTMLElement} targetElement クリックされた要素
 */
const highlightActiveSector = (targetElement) => {
    const container = document.getElementById("wheel-container");
    const currentActive = container.querySelector(".active");
    if (currentActive) {
        currentActive.classList.remove("active");
    }
    targetElement.classList.add("active");
};

/**
 * ドーナツ型色相環を描画する
 * @param {object[]} colorList 色オブジェクトの配列
 * @param {string|null} activeHex 初期選択状態にする色のHEX
 */
const renderDonutWheel = (colorList, activeHex = null) => {
    const container = document.getElementById("wheel-container");
    clearContainer(container);

    const size = calculateWheelSize();
    container.style.width = `${size}px`;
    container.style.height = `${size}px`;

    const innerDiameter = (size - CONFIG.WHEEL.SECTOR_MARGIN * 2) * CONFIG.WHEEL.INNER_RATIO - CONFIG.WHEEL.SECTOR_MARGIN;
    const squareSide = Math.round(innerDiameter / Math.SQRT2);
    document.getElementById("detailModal").style.setProperty("--wheel-inner-size", `${squareSide}px`);

    const { SECTOR_MARGIN, GAP_PX, INNER_RATIO } = CONFIG.WHEEL;

    const count = colorList.length;
    const cx = size / 2;
    const cy = size / 2;
    const rOuter = size / 2 - SECTOR_MARGIN;
    const rInner = rOuter * INNER_RATIO;
    const step = 360 / count;
    const rotationOffset = -90 - step / 2;

    colorList.forEach((colorObj, index) => {
        // --- 計算フェーズ ---
        const startDeg = rotationOffset + index * step;
        const endDeg = startDeg + step;

        const pathData = calculateSectorPath(cx, cy, rOuter, rInner, startDeg, endDeg);

        // スリット用座標計算
        const midDeg = -90 + index * step;
        const midRad = (midDeg * Math.PI) / 180;
        const tx = Math.cos(midRad) * GAP_PX;
        const ty = Math.sin(midRad) * GAP_PX;

        // --- DOM生成フェーズ ---
        const div = document.createElement("div");
        div.classList.add("color-sector");
        div.style.backgroundColor = colorObj.hex;
        div.style.clipPath = `path('${pathData}')`;

        // カスタムプロパティ設定
        div.style.setProperty("--translate-x", `${tx}px`);
        div.style.setProperty("--translate-y", `${ty}px`);

        // 初期アクティブ判定
        if (activeHex && colorObj.hex === activeHex) {
            div.classList.add("active");
        }

        // イベント設定
        div.addEventListener("click", (event) => handleSectorClick(event, colorObj));

        container.appendChild(div);
    });
};

/**
 * 作品一覧（オーバービュー）を生成する
 */
const renderOverview = () => {
    const overviewArea = document.getElementById("overviewArea");
    clearContainer(overviewArea); // 再描画対応

    PALETTE_LIST.forEach((work) => {
        const workDiv = document.createElement("div");
        workDiv.classList.add("col");

        const h2Title = document.createElement("h2");
        h2Title.classList.add("colors-title");
        h2Title.textContent = work.title;

        const colorRowDiv = document.createElement("div");
        colorRowDiv.classList.add("row", "g-0", "mb-2", "text-center");

        work.colorList.forEach((colorObj) => {
            const colorColDiv = document.createElement("div");
            colorColDiv.classList.add("col", "color-overview");
            colorColDiv.style.background = colorObj.hex;

            colorColDiv.addEventListener("click", () => openDetailModal(work, colorObj));

            colorRowDiv.appendChild(colorColDiv);
        });

        workDiv.appendChild(h2Title);
        workDiv.appendChild(colorRowDiv);
        overviewArea.appendChild(workDiv);
    });
};

/**
 * 色相環のセクタークリック時
 */
const handleSectorClick = (event, colorObj) => {
    // 既にアクティブなら何もしない
    if (event.target.classList.contains("active")) return;

    updateModalContent(colorObj);
    highlightActiveSector(event.target);
};

/**
 * オーバービューの色クリック時（モーダルを開く）
 */
const openDetailModal = (work, colorObj) => {
    // タイトル設定
    document.getElementById("detailModalTitle").textContent = work.title;

    // ホイール描画
    renderDonutWheel(work.colorList, colorObj.hex);

    // 詳細情報設定
    updateModalContent(colorObj);

    // Bootstrapモーダル表示
    const detailModal = new bootstrap.Modal(document.getElementById("detailModal"));
    detailModal.show();
};

/**
 * モーダルが閉じた時のクリーンアップ
 */
const handleModalHidden = () => {
    document.getElementById("detailModalTitle").textContent = "";
    clearContainer(document.getElementById("wheel-container"));
};

/**
 * 初期処理
 */
document.addEventListener("DOMContentLoaded", () => {
    preprocessPaletteData();

    // 初期表示生成
    renderOverview();

    // モーダル閉鎖イベント
    const modalEl = document.getElementById("detailModal");
    if (modalEl) {
        modalEl.addEventListener("hidden.bs.modal", handleModalHidden);
    }
});
