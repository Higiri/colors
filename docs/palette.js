const CONFIG = {
	WHEEL: {
		MAX_SIZE: 300,
		MARGIN_OFFSET: 65, // 画面幅から引くサイズ
		SECTOR_MARGIN: 12, // セクター描画時の外周マージン
		GAP_PX: 1.8, // スリット幅
		INNER_RATIO: 0.6, // 内円の比率
	},
};

/**
 * 色パレットのリスト
 * biome-ignore format: json
 */
const PALETTE_LIST = [
	{
		title: "カラーユニバーサルデザイン推奨配色セット",
		type: "other",
		colorList: [
			{ hex: "#ff4b00", type: "accent"    , desc: "赤"           },
			{ hex: "#f6aa00", type: "accent"    , desc: "オレンジ"     },
			{ hex: "#fff100", type: "accent"    , desc: "黄色"         },
			{ hex: "#03af7a", type: "accent"    , desc: "緑"           },
			{ hex: "#005aff", type: "accent"    , desc: "青"           },
			{ hex: "#4dc4ff", type: "accent"    , desc: "空色"         },
			{ hex: "#990099", type: "accent"    , desc: "紫"           },
			{ hex: "#804000", type: "accent"    , desc: "ピンク"       },
			{ hex: "#ffcabf", type: "base"      , desc: "明るいピンク" },
			{ hex: "#ffca80", type: "base"      , desc: "ベージュ"     },
			{ hex: "#ffff80", type: "base"      , desc: "クリーム"     },
			{ hex: "#d8f255", type: "base"      , desc: "明るい黄緑"   },
			{ hex: "#77d9a8", type: "base"      , desc: "明るい緑"     },
			{ hex: "#bfe4ff", type: "base"      , desc: "明るい空色"   },
			{ hex: "#c9ace6", type: "base"      , desc: "明るい紫"     },
			{ hex: "#84919e", type: "achromatic", desc: "灰色"         },
			{ hex: "#c8c8cb", type: "achromatic", desc: "明るいグレー" },
		],
	},
	{
		title: "ぼっち・ざ・ろっく！",
		type: "anime",
		colorList: [
			{ hex: "#ff2291", type: "character", desc: "後藤ひとり アニメ公式サイト キャラクター情報の配色" },
			{ hex: "#ffb400", type: "character", desc: "伊地知虹夏 アニメ公式サイト キャラクター情報の配色" },
			{ hex: "#02d1e0", type: "character", desc: "山田リョウ アニメ公式サイト キャラクター情報の配色" },
			{ hex: "#ff4637", type: "character", desc: "喜多郁代 アニメ公式サイト キャラクター情報の配色"   },
		],
	},
	{
		title: "リコリス・リコイル",
		type: "anime",
		colorList: [
			{ hex: "#f0555a", type: "character", desc: "錦木千束 アニメ公式サイト キャラクター情報の配色" },
			{ hex: "#2a96fa", type: "character", desc: "井ノ上たきな アニメ公式サイト キャラクター情報の配色" },
			{ hex: "#00b4aa", type: "character", desc: "中原ミズキ アニメ公式サイト キャラクター情報の配色" },
			{ hex: "#ffe76c", type: "character", desc: "クルミ アニメ公式サイト キャラクター情報の配色" },
			{ hex: "#7a5668", type: "character", desc: "ミカ アニメ公式サイト キャラクター情報の配色" },
			{ hex: "#475073", type: "character", desc: "その他 アニメ公式サイト キャラクター情報の配色" }
		],
	},
	{
		title: "リコリス・リコイル ロゴ",
		type: "anime",
		colorList: [
			{ hex: "#ef545b", type: "logo", desc: "ロゴ配色1" },
			{ hex: "#00b4ac", type: "logo", desc: "ロゴ配色2" },
			{ hex: "#e60064", type: "logo", desc: "ロゴ配色3" },
			{ hex: "#5a2828", type: "logo", desc: "ロゴ配色4" },
		],
	},
	{
		title: "転生王女と天才令嬢の魔法革命",
		type: "anime",
		colorList: [
			{ hex: "#ed9daa", type: "character", desc: "" },
			{ hex: "#90a7d3", type: "character", desc: "" },
		],
	},
	{
		title: "ささやくように恋を唄う",
		type: "anime",
		colorList: [
			{ hex: "#f37fa2", type: "character", desc: "" },
			{ hex: "#00b6e5", type: "character", desc: "" },
		],
	},
	{
		title: "Summer Pockets",
		type: "game",
		colorList: [
			{ hex: "#ab94d0", type: "character", desc: "鳴瀬しろは 「Summer Pockets REFLECTION BLUE」キャラクター情報の配色" },
			{ hex: "#ff769a", type: "character", desc: "空門蒼 「Summer Pockets REFLECTION BLUE」キャラクター情報の配色" },
			{ hex: "#f9b933", type: "character", desc: "久島鴎 「Summer Pockets REFLECTION BLUE」キャラクター情報の配色" },
			{ hex: "#72cf58", type: "character", desc: "紬ヴェンダース 「Summer Pockets REFLECTION BLUE」キャラクター情報の配色" },
			{ hex: "#23ac38", type: "character", desc: "野村美希 「Summer Pockets REFLECTION BLUE」キャラクター情報の配色" },
			{ hex: "#601986", type: "character", desc: "水織静久 「Summer Pockets REFLECTION BLUE」キャラクター情報の配色" },
			{ hex: "#c62885", type: "character", desc: "加藤うみ 「Summer Pockets REFLECTION BLUE」キャラクター情報の配色" },
			{ hex: "#e5041e", type: "character", desc: "神山識 「Summer Pockets REFLECTION BLUE」キャラクター情報の配色" },
			{ hex: "#5a698d", type: "character", desc: "その他 「Summer Pockets REFLECTION BLUE」キャラクター情報の配色" },
			{ hex: "#1a458b", type: "logo", desc: "「Summer Pockets REFLECTION BLUE」ロゴ1" },
			{ hex: "#8cd0dc", type: "logo", desc: "「Summer Pockets REFLECTION BLUE」ロゴ2" },
		],
	},
	{
		title: "LOOPERS",
		type: "game",
		colorList: [
			{ hex: "#e80094", type: "background", desc: "" },
			{ hex: "#cafb57", type: "background", desc: "" },
			{ hex: "#689500", type: "background", desc: "" },
			{ hex: "#ff361d", type: "background", desc: "" },
		],
	},
	{
		title: "LUNARiA -Virtualized Moonchild-",
		type: "game",
		colorList: [
			{ hex: "#3955c9", type: "background", desc: "" },
			{ hex: "#fff954", type: "background", desc: "" },
			{ hex: "#5adae8", type: "background", desc: "" },
		],
	},
	{
		title: "ISLAND",
		type: "game",
		colorList: [
			{ hex: "#a5acf3", type: "background", desc: "背景色1" },
			{ hex: "#ffcd56", type: "background", desc: "背景色2" },
			{ hex: "#f286ad", type: "background", desc: "背景色3" },
			{ hex: "#bcbcbc", type: "background", desc: "背景色4" },
			{ hex: "#86cdf2", type: "background", desc: "背景色5" },
			{ hex: "#cce791", type: "background", desc: "背景色6" },
			{ hex: "#6973d4", type: "background", desc: "背景色7" },
		],
	},
	{
		title: "Re:LieF～親愛なるあなたへ～",
		type: "game",
		colorList: [
			{ hex: "#f9779e", type: "background", desc: "背景色1" },
			{ hex: "#9a84bc", type: "background", desc: "背景色2" },
			{ hex: "#fdd001", type: "background", desc: "背景色3" },
			{ hex: "#9f9fa0", type: "background", desc: "背景色4" },
			{ hex: "#b6da3d", type: "background", desc: "背景色5" },
		],
	},
	{
		title: "蒼の彼方のフォーリズム",
		type: "game",
		colorList: [
			{ hex: "#fe3668", type: "character", desc: "" },
			{ hex: "#c136fe", type: "character", desc: "" },
			{ hex: "#febc12", type: "character", desc: "" },
			{ hex: "#27cc90", type: "character", desc: "" },
			{ hex: "#0072f4", type: "background", desc: "" },
		],
	},
	{
		title: "蒼の彼方のフォーリズム(OP2)",
		type: "game",
		colorList: [
			{ hex: "#f01d76", type: "character", desc: "" },
			{ hex: "#774da1", type: "character", desc: "" },
			{ hex: "#e5b200", type: "character", desc: "" },
			{ hex: "#00c6c4", type: "character", desc: "" },
			{ hex: "#8f5b92", type: "character", desc: "" },
			{ hex: "#74a12e", type: "character", desc: "" },
			{ hex: "#c43dbe", type: "character", desc: "" },
			{ hex: "#e5ac15", type: "character", desc: "" },
			{ hex: "#fead00", type: "character", desc: "" },
			{ hex: "#00d4a6", type: "character", desc: "" },
			{ hex: "#3ea960", type: "character", desc: "" },
			{ hex: "#3347af", type: "character", desc: "" },
			{ hex: "#db3d4c", type: "character", desc: "" },
			{ hex: "#007efc", type: "character", desc: "" },
		],
	},
	{
		title: "さくらの雲*スカアレットの恋",
		type: "game",
		colorList: [
			{ hex: "#f25242", type: "character", desc: "" },
			{ hex: "#e6bf68", type: "character", desc: "" },
			{ hex: "#72b0cb", type: "character", desc: "" },
			{ hex: "#9c92c9", type: "character", desc: "" },
			{ hex: "#ff9a91", type: "character", desc: "" },
		],
	},
	{
		title: "ハミダシクリエイティブ",
		type: "game",
		colorList: [
			{ hex: "#f57da6", type: "character", desc: "" },
			{ hex: "#fdc164", type: "character", desc: "" },
			{ hex: "#9b7aee", type: "character", desc: "" },
			{ hex: "#4bbaf2", type: "character", desc: "" },
			{ hex: "#e03331", type: "background", desc: "" },
		],
	},
	{
		title: "ハミダシクリエイティブ凸",
		type: "game",
		colorList: [
			{ hex: "#e6316d", type: "character", desc: "" },
			{ hex: "#f9bf1d", type: "character", desc: "" },
			{ hex: "#01a4e1", type: "character", desc: "" },
			{ hex: "#e6813b", type: "character", desc: "" },
			{ hex: "#4d448d", type: "character", desc: "" },
		],
	},
	{
		title: "スタディ§ステディ",
		type: "game",
		colorList: [
			{ hex: "#16b8ce", type: "character", desc: "" },
			{ hex: "#826ecd", type: "character", desc: "" },
			{ hex: "#eb679c", type: "character", desc: "" },
			{ hex: "#ef865a", type: "character", desc: "" },
		],
	},
	{
		title: "ぬきたし(OP1)",
		type: "game",
		colorList: [
			{ hex: "#ffbf00", type: "character", desc: "渡会ヒナミ" },
			{ hex: "#ff8000", type: "character", desc: "片桐奈々瀬" },
			{ hex: "#05b5fa", type: "character", desc: "畔美岬" },
			{ hex: "#ff3344", type: "character", desc: "橘麻沙音" },
			{ hex: "#00d97e", type: "character", desc: "冷泉院桐香" },
			{ hex: "#405fff", type: "character", desc: "糺川礼" },
			{ hex: "#ff45a9", type: "character", desc: "女部田郁子" },
			{ hex: "#8845e6", type: "character", desc: "仙波光姫" },
			{ hex: "#ffd900", type: "character", desc: "花丸蘭" },
			{ hex: "#0082f2", type: "character", desc: "ハメドリくん" },
		],
	},
	{
		title: "ぬきたし(OP2)",
		type: "game",
		colorList: [
			{ hex: "#f20000", type: "movie", desc: "背景色1" },
			{ hex: "#0e0000", type: "movie", desc: "背景色2" },
		],
	},
	{
		title: "ぬきたし2",
		type: "game",
		colorList: [
			{ hex: "#f20000", type: "movie", desc: "SS BIG4" },
			{ hex: "#0082f2", type: "movie", desc: "NLNS" },
		],
	},
	{
		title: "ヘンプリ",
		type: "game",
		colorList: [
			{ hex: "#ffff00", type: "movie", desc: "背景色1" },
			{ hex: "#000000", type: "movie", desc: "背景色2" },
		],
	},
];

/**
 * 適切な文字色をコントラスト比から取得する。
 * @param {string} bgHex 背景色(hex)
 * @returns
 */
// const selectColorByContrastFor = (bgHex) => {
// 	// 白と黒のコントラストを比較
// 	const contrastWhite = chroma.contrast(bgHex, "white");
// 	const contrastBlack = chroma.contrast(bgHex, "black");

// 	return contrastWhite < contrastBlack ? "black" : "white";
// };

/**
 * PALETTE_LISTの各カラーオブジェクトに計算済みのフォーマット(rgb, hsv, hsl)を追加する
 */
const preprocessPaletteData = () => {
	const formatArray = (arr) => arr.map(
		(v, i) => (i === 0 ? Math.round(v) || 0 : `${Math.round(v * 100)}%`)
	).join(" ");
	const formatCmyk = (arr) => arr.map((v) => `${Math.round(v * 100)}%`).join(" ");

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
	clearContainer(container);

	// スケール計算（最大8.0で100%）
	const calcPos = (val) => Math.min(Math.max(((val - 1) / 7) * 100, 0), 100);
	const currentPercent = calcPos(ratio);

	const meterWrapper = document.createElement('div');
    meterWrapper.className = 'contrast-meter';

    // 2. マーカー生成ヘルパー関数
    const createMarker = (type, level, posValue) => {
        const marker = document.createElement('div');
        marker.className = `marker marker-${type} ${level === 'AAA' ? 'bg-aaa' : 'bg-aa'}`;
        marker.style.left = `${calcPos(posValue)}%`;
        marker.textContent = level;
        return marker;
    };

    // 3. 各パーツを生成して追加
    // 上側：普通テキスト基準 (Normal)
    meterWrapper.appendChild(createMarker('top', 'AA', 4.5));
    meterWrapper.appendChild(createMarker('top', 'AAA', 7.0));

    // 中央：バー本体
    const barBase = document.createElement('div');
    barBase.className = 'meter-bar-base';
    const barFill = document.createElement('div');
    barFill.className = 'meter-bar-fill';
    barFill.style.width = `${currentPercent}%`;
    barBase.appendChild(barFill);
    meterWrapper.appendChild(barBase);

    // 下側：大きいテキスト基準 (Large)
    meterWrapper.appendChild(createMarker('bottom', 'AA', 3.0));
    meterWrapper.appendChild(createMarker('bottom', 'AAA', 4.5));

    // 4. 比率テキスト
    const ratioDisplay = document.createElement('div');
    ratioDisplay.className = 'ratio-display';
    ratioDisplay.textContent = `${ratio.toFixed(2)}`;
    meterWrapper.appendChild(ratioDisplay);

    // 最後にコンテナへ追加
    container.appendChild(meterWrapper);
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
		return "A+";
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
