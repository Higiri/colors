const palette = [
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
 * hexカラーコードをRGBに変換する。
 * @param {string} hex #000000 ～ #ffffff
 * @returns {{r: number, g: number, b: number}}
 */
const hexToRGB = (hex) => {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);

    return { r, g, b };
};

/**
 * rgbの1つの値から輝度を計算する
 * @param {number} color 色 [0 - 255]
 * @returns {number} 輝度
 */
const calculateLuminance = (color) => {
    const c = color / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
};

/**
 * 相対輝度を算出する。
 * @param {number} red 赤 [0 - 255]
 * @param {number} green 緑 [0 - 255]
 * @param {number} blue 青 [0 - 255]
 * @returns
 */
const caluculateRelativeLuminance = (color) => {
    const R = calculateLuminance(color.r);
    const G = calculateLuminance(color.g);
    const B = calculateLuminance(color.b);
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
};

/**
 * 2色のコントラスト比を求める
 * @param {*} color1 相対輝度
 * @param {*} color2 相対輝度
 * @returns
 */
const caluculateContrastRatio = (color1, color2) => {
    const luminance1 = caluculateRelativeLuminance(color1);
    const luminance2 = caluculateRelativeLuminance(color2);
    const bright = Math.max(luminance1, luminance2);
    const dark = Math.min(luminance1, luminance2);
    return (bright + 0.05) / (dark + 0.05);
};

/**
 * 背景色との相対輝度から文字色を選択する。
 *
 * @param {number} red 赤 [0 - 255]
 * @param {number} green 緑 [0 - 255]
 * @param {number} blue 青 [0 - 255]
 * @returns 文字色
 */
const chooseTextColorFromBackground = (red, green, blue) => {
    const bg = caluculateRelativeLuminance(red, green, blue);
    const white = 1;
    const black = 0;

    // 白と背景色のコントラスト比
    const contrastWhite = caluculateContrastRatio(white, bg);
    // 黒と背景色のコントラスト比
    const contrastBlack = caluculateContrastRatio(bg, black);

    return contrastWhite < contrastBlack ? "black" : "white";
};

const setModalContent = (color) => {
    document.getElementById("contrast-text-brack").style.backgroundColor = color.hex;
    document.getElementById("contrast-text-white").style.backgroundColor = color.hex;
    document.getElementById("contrast-bg-black").style.color = color.hex;
    document.getElementById("contrast-bg-white").style.color = color.hex;

    document.getElementById("cellHex").textContent = color.hex;
    const rgb = hexToRGB(color.hex);
    document.getElementById("cellRgb").textContent = `${rgb.r} ${rgb.g} ${rgb.b}`;

    document.getElementById("cellDesc").textContent = color.desc;
    document.getElementById("cellType").textContent = color.type;
};

const handleClickModalOverview = (color) => {
    setModalContent(color);
};

const createModalOverview = (colorList) => {
    const modalColorOverview = document.getElementById("modalColorOverview");
    for (const color of colorList) {
        const colorDiv = document.createElement("div");
        colorDiv.classList.add("modal-color-overview");
        colorDiv.style.background = color.hex;

        colorDiv.addEventListener("click", (event) => handleClickModalOverview(color));

        modalColorOverview.appendChild(colorDiv);
    }
};
const handleClickOverview = (work, color) => {
    document.getElementById("detailModalTitle").textContent = work.title;
    createModalOverview(work.colorList);
    setModalContent(color);

    const detailModal = new bootstrap.Modal(document.getElementById("detailModal"));
    detailModal.show();
};

/**
 * 色一覧のHTMLを構築する。
 */
const createOverview = () => {
    const overviewArea = document.getElementById("overviewArea");

    for (const work of palette) {
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
            colorColDiv.textContent = color.hex;
            colorColDiv.style.background = color.hex;

            //colorColDiv.style.color = chooseTextColorFromBackground(hexToRGB(color.hex));

            colorColDiv.addEventListener("click", (event) => handleClickOverview(work, color));

            colorRowDiv.appendChild(colorColDiv);
        }

        workDiv.appendChild(h2Title);
        workDiv.appendChild(colorRowDiv);
        overviewArea.appendChild(workDiv);
    }
};

const handleHiddenModal = () => {
    document.getElementById("detailModalTitle").textContent = "";
    const modalColorOverview = document.getElementById("modalColorOverview");
    while (modalColorOverview.firstChild) {
        modalColorOverview.removeChild(modalColorOverview.firstChild);
    }
};

document.addEventListener("DOMContentLoaded", (event) => {
    createOverview();

    Array.from(document.querySelectorAll("div.color-overview")).forEach((block) => {
        const rgb = block.style.backgroundColor.match(/\d+/g);
        const r = parseInt(rgb[0], 10);
        const g = parseInt(rgb[1], 10);
        const b = parseInt(rgb[2], 10);
        block.style.color = chooseTextColor(r, g, b);
    });
    function chooseTextColor(red, green, blue) {
        //相対輝度
        const toRgbItem = (item) => {
            const i = item / 255;
            return i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
        };
        const R = toRgbItem(red);
        const G = toRgbItem(green);
        const B = toRgbItem(blue);
        const Lbg = 0.2126 * R + 0.7152 * G + 0.0722 * B;

        const Lw = 1;
        const Lb = 0;

        // 白と背景色のコントラスト比
        const Cw = (Lw + 0.05) / (Lbg + 0.05);
        // 黒と背景色のコントラスト比
        const Cb = (Lbg + 0.05) / (Lb + 0.05);

        return Cw < Cb ? "black" : "white";
    }

    document.getElementById("detailModal").addEventListener("hidden.bs.modal", (event) => handleHiddenModal());
});
