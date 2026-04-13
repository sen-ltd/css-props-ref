export const CATEGORIES = [
  { id: 'layout', name: { ja: 'レイアウト', en: 'Layout' } },
  { id: 'box', name: { ja: 'ボックスモデル', en: 'Box Model' } },
  { id: 'typography', name: { ja: '文字', en: 'Typography' } },
  { id: 'color', name: { ja: '色・背景', en: 'Color & Background' } },
  { id: 'effects', name: { ja: 'エフェクト', en: 'Effects' } },
  { id: 'transform', name: { ja: '変形・アニメーション', en: 'Transform & Animation' } },
];

export const PROPS = [
  // ── Layout ──────────────────────────────────────────────────────────────
  {
    name: 'display',
    category: 'layout',
    values: ['block', 'inline', 'inline-block', 'flex', 'grid', 'none'],
    description: {
      ja: '要素の表示タイプを指定する',
      en: 'Sets the display type of an element',
    },
    preview: {
      html: '<div class="box">A</div><div class="box">B</div><div class="box">C</div>',
      property: 'display',
      target: '.preview-container',
    },
  },
  {
    name: 'position',
    category: 'layout',
    values: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
    description: {
      ja: '要素の配置方法を指定する',
      en: 'Specifies the positioning method of an element',
    },
    preview: {
      html: '<div class="box" style="position:relative;top:10px;left:10px;">A</div><div class="box">B</div>',
      property: 'position',
      target: '.preview-container .box:first-child',
    },
  },
  {
    name: 'flex-direction',
    category: 'layout',
    values: ['row', 'row-reverse', 'column', 'column-reverse'],
    description: {
      ja: 'フレックスアイテムの並ぶ方向を指定する',
      en: 'Sets the direction of flex items',
    },
    preview: {
      html: '<div class="box">1</div><div class="box">2</div><div class="box">3</div>',
      property: 'flex-direction',
      target: '.preview-container',
      containerStyle: 'display:flex',
    },
  },
  {
    name: 'justify-content',
    category: 'layout',
    values: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
    description: {
      ja: 'メイン軸方向の配置を指定する',
      en: 'Aligns flex items along the main axis',
    },
    preview: {
      html: '<div class="box">A</div><div class="box">B</div><div class="box">C</div>',
      property: 'justify-content',
      target: '.preview-container',
      containerStyle: 'display:flex',
    },
  },
  {
    name: 'align-items',
    category: 'layout',
    values: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
    description: {
      ja: 'クロス軸方向の配置を指定する',
      en: 'Aligns flex items along the cross axis',
    },
    preview: {
      html: '<div class="box" style="height:30px">A</div><div class="box" style="height:50px">B</div><div class="box" style="height:40px">C</div>',
      property: 'align-items',
      target: '.preview-container',
      containerStyle: 'display:flex;height:80px',
    },
  },
  {
    name: 'gap',
    category: 'layout',
    values: ['0', '4px', '8px', '16px', '24px', '32px'],
    description: {
      ja: 'フレックス/グリッドのアイテム間隔を指定する',
      en: 'Sets the gap between flex or grid items',
    },
    preview: {
      html: '<div class="box">A</div><div class="box">B</div><div class="box">C</div>',
      property: 'gap',
      target: '.preview-container',
      containerStyle: 'display:flex',
    },
  },
  {
    name: 'grid-template-columns',
    category: 'layout',
    values: ['1fr', 'repeat(2,1fr)', 'repeat(3,1fr)', '1fr 2fr', '200px 1fr', 'auto auto auto'],
    description: {
      ja: 'グリッドの列定義を指定する',
      en: 'Defines the columns of a grid container',
    },
    preview: {
      html: '<div class="box">1</div><div class="box">2</div><div class="box">3</div><div class="box">4</div>',
      property: 'grid-template-columns',
      target: '.preview-container',
      containerStyle: 'display:grid;gap:4px',
    },
  },
  {
    name: 'flex-wrap',
    category: 'layout',
    values: ['nowrap', 'wrap', 'wrap-reverse'],
    description: {
      ja: 'フレックスアイテムの折り返しを指定する',
      en: 'Controls whether flex items wrap to the next line',
    },
    preview: {
      html: '<div class="box" style="width:80px">A</div><div class="box" style="width:80px">B</div><div class="box" style="width:80px">C</div><div class="box" style="width:80px">D</div>',
      property: 'flex-wrap',
      target: '.preview-container',
      containerStyle: 'display:flex;width:200px',
    },
  },
  {
    name: 'overflow',
    category: 'layout',
    values: ['visible', 'hidden', 'scroll', 'auto', 'clip'],
    description: {
      ja: 'コンテンツがあふれたときの処理を指定する',
      en: 'Sets what happens when content overflows the element',
    },
    preview: {
      html: '<p style="white-space:nowrap">This is a very long text that overflows the container boundary.</p>',
      property: 'overflow',
      target: '.preview-container',
      containerStyle: 'width:160px;height:60px;border:1px solid #ccc',
    },
  },
  {
    name: 'z-index',
    category: 'layout',
    values: ['auto', '0', '1', '10', '100', '-1'],
    description: {
      ja: '重なり順序を指定する（positionが必要）',
      en: 'Sets the stacking order of elements (requires position)',
    },
    preview: {
      html: '<div class="box" style="position:absolute;left:0;top:0;background:#e74c3c;opacity:0.9">A</div><div class="box" style="position:absolute;left:20px;top:10px;background:#3498db">B</div>',
      property: 'z-index',
      target: '.preview-container .box:first-child',
      containerStyle: 'position:relative;height:80px',
    },
  },
  {
    name: 'top',
    category: 'layout',
    values: ['auto', '0', '10px', '20px', '50%', '-10px'],
    description: {
      ja: '上端からのオフセットを指定する',
      en: 'Sets the distance from the top edge',
    },
    preview: {
      html: '<div class="box" style="position:relative">A</div>',
      property: 'top',
      target: '.preview-container .box',
      containerStyle: 'position:relative;height:80px',
    },
  },
  {
    name: 'left',
    category: 'layout',
    values: ['auto', '0', '10px', '20px', '50%', '-10px'],
    description: {
      ja: '左端からのオフセットを指定する',
      en: 'Sets the distance from the left edge',
    },
    preview: {
      html: '<div class="box" style="position:relative">A</div>',
      property: 'left',
      target: '.preview-container .box',
    },
  },
  {
    name: 'right',
    category: 'layout',
    values: ['auto', '0', '10px', '20px', '50%'],
    description: {
      ja: '右端からのオフセットを指定する',
      en: 'Sets the distance from the right edge',
    },
    preview: {
      html: '<div class="box" style="position:absolute;right:0">A</div>',
      property: 'right',
      target: '.preview-container .box',
      containerStyle: 'position:relative;height:60px',
    },
  },
  {
    name: 'bottom',
    category: 'layout',
    values: ['auto', '0', '10px', '20px', '50%'],
    description: {
      ja: '下端からのオフセットを指定する',
      en: 'Sets the distance from the bottom edge',
    },
    preview: {
      html: '<div class="box" style="position:absolute;bottom:0">A</div>',
      property: 'bottom',
      target: '.preview-container .box',
      containerStyle: 'position:relative;height:80px',
    },
  },
  {
    name: 'visibility',
    category: 'layout',
    values: ['visible', 'hidden', 'collapse'],
    description: {
      ja: '要素の可視性を制御する（非表示でもスペースを保持）',
      en: 'Controls element visibility (hidden still takes up space)',
    },
    preview: {
      html: '<div class="box">A</div><div class="box">B</div><div class="box">C</div>',
      property: 'visibility',
      target: '.preview-container .box:nth-child(2)',
    },
  },
  {
    name: 'aspect-ratio',
    category: 'layout',
    values: ['auto', '1/1', '16/9', '4/3', '3/2', '2/1'],
    description: {
      ja: '要素のアスペクト比を指定する',
      en: 'Sets the preferred aspect ratio of the element',
    },
    preview: {
      html: '<div class="box" style="width:100px;background:#3498db"></div>',
      property: 'aspect-ratio',
      target: '.preview-container .box',
    },
  },
  {
    name: 'object-fit',
    category: 'layout',
    values: ['fill', 'contain', 'cover', 'none', 'scale-down'],
    description: {
      ja: '置換要素のサイズ調整方法を指定する',
      en: 'Sets how replaced elements are sized in their container',
    },
    preview: {
      html: '<img src="https://picsum.photos/200/100" style="width:120px;height:80px;display:block">',
      property: 'object-fit',
      target: '.preview-container img',
    },
  },

  // ── Box Model ────────────────────────────────────────────────────────────
  {
    name: 'margin',
    category: 'box',
    values: ['0', '4px', '8px', '16px', '24px', 'auto', '8px 16px'],
    description: {
      ja: '要素の外側の余白を指定する',
      en: 'Sets the outer spacing around an element',
    },
    preview: {
      html: '<div class="box">A</div>',
      property: 'margin',
      target: '.preview-container .box',
      containerStyle: 'border:1px solid #ccc',
    },
  },
  {
    name: 'padding',
    category: 'box',
    values: ['0', '4px', '8px', '16px', '24px', '8px 16px'],
    description: {
      ja: '要素の内側の余白を指定する',
      en: 'Sets the inner spacing within an element',
    },
    preview: {
      html: '<div class="box" style="background:#3498db;color:#fff">Content</div>',
      property: 'padding',
      target: '.preview-container .box',
    },
  },
  {
    name: 'border',
    category: 'box',
    values: ['none', '1px solid #333', '2px dashed #e74c3c', '3px dotted #3498db', '4px double #2ecc71'],
    description: {
      ja: '要素のボーダーを一括指定する',
      en: 'Shorthand for border width, style, and color',
    },
    preview: {
      html: '<div class="box" style="padding:8px">Box</div>',
      property: 'border',
      target: '.preview-container .box',
    },
  },
  {
    name: 'border-radius',
    category: 'box',
    values: ['0', '4px', '8px', '16px', '50%', '999px'],
    description: {
      ja: '要素の角の丸みを指定する',
      en: 'Sets the roundness of the element corners',
    },
    preview: {
      html: '<div class="box" style="width:80px;height:80px;background:#3498db"></div>',
      property: 'border-radius',
      target: '.preview-container .box',
    },
  },
  {
    name: 'width',
    category: 'box',
    values: ['auto', '50px', '100px', '200px', '50%', '100%'],
    description: {
      ja: '要素の幅を指定する',
      en: 'Sets the width of an element',
    },
    preview: {
      html: '<div class="box" style="background:#3498db;height:40px"></div>',
      property: 'width',
      target: '.preview-container .box',
    },
  },
  {
    name: 'height',
    category: 'box',
    values: ['auto', '40px', '80px', '120px', '50%'],
    description: {
      ja: '要素の高さを指定する',
      en: 'Sets the height of an element',
    },
    preview: {
      html: '<div class="box" style="background:#3498db;width:80px"></div>',
      property: 'height',
      target: '.preview-container .box',
    },
  },
  {
    name: 'min-width',
    category: 'box',
    values: ['0', '50px', '100px', '200px', 'min-content', 'max-content'],
    description: {
      ja: '要素の最小幅を指定する',
      en: 'Sets the minimum width of an element',
    },
    preview: {
      html: '<div class="box" style="background:#e74c3c;width:50%">Min</div>',
      property: 'min-width',
      target: '.preview-container .box',
    },
  },
  {
    name: 'max-width',
    category: 'box',
    values: ['none', '100px', '200px', '300px', '50%', '100%'],
    description: {
      ja: '要素の最大幅を指定する',
      en: 'Sets the maximum width of an element',
    },
    preview: {
      html: '<div class="box" style="background:#2ecc71;width:100%">Max</div>',
      property: 'max-width',
      target: '.preview-container .box',
    },
  },
  {
    name: 'box-sizing',
    category: 'box',
    values: ['content-box', 'border-box'],
    description: {
      ja: '幅・高さの計算方法を指定する',
      en: 'Determines how width and height are calculated',
    },
    preview: {
      html: '<div class="box" style="width:100px;padding:10px;border:4px solid #e74c3c;background:#fadbd8">Box</div>',
      property: 'box-sizing',
      target: '.preview-container .box',
    },
  },
  {
    name: 'resize',
    category: 'box',
    values: ['none', 'both', 'horizontal', 'vertical'],
    description: {
      ja: '要素のサイズ変更可否を指定する',
      en: 'Sets whether an element can be resized by the user',
    },
    preview: {
      html: '<textarea style="width:140px;height:60px;overflow:auto">Resize me</textarea>',
      property: 'resize',
      target: '.preview-container textarea',
    },
  },

  // ── Typography ───────────────────────────────────────────────────────────
  {
    name: 'font-family',
    category: 'typography',
    values: ['sans-serif', 'serif', 'monospace', 'cursive', 'system-ui', '"Georgia", serif'],
    description: {
      ja: 'フォントファミリーを指定する',
      en: 'Sets the font family of text',
    },
    preview: {
      html: '<p class="text">The quick brown fox jumps</p>',
      property: 'font-family',
      target: '.preview-container .text',
    },
  },
  {
    name: 'font-size',
    category: 'typography',
    values: ['12px', '14px', '16px', '20px', '24px', '32px', '1rem', '1.5rem'],
    description: {
      ja: 'フォントサイズを指定する',
      en: 'Sets the size of the font',
    },
    preview: {
      html: '<p class="text">Sample Text</p>',
      property: 'font-size',
      target: '.preview-container .text',
    },
  },
  {
    name: 'font-weight',
    category: 'typography',
    values: ['100', '300', '400', '500', '600', '700', '900', 'bold', 'normal'],
    description: {
      ja: 'フォントの太さを指定する',
      en: 'Sets the weight (boldness) of the font',
    },
    preview: {
      html: '<p class="text">Sample Text</p>',
      property: 'font-weight',
      target: '.preview-container .text',
    },
  },
  {
    name: 'line-height',
    category: 'typography',
    values: ['1', '1.2', '1.5', '1.8', '2', '2.5', '24px'],
    description: {
      ja: '行の高さを指定する',
      en: 'Sets the height of a line of text',
    },
    preview: {
      html: '<p class="text">Line one<br>Line two<br>Line three</p>',
      property: 'line-height',
      target: '.preview-container .text',
    },
  },
  {
    name: 'letter-spacing',
    category: 'typography',
    values: ['normal', '-1px', '0', '1px', '2px', '4px', '8px'],
    description: {
      ja: '文字間のスペースを指定する',
      en: 'Sets the spacing between characters',
    },
    preview: {
      html: '<p class="text">Hello World</p>',
      property: 'letter-spacing',
      target: '.preview-container .text',
    },
  },
  {
    name: 'text-align',
    category: 'typography',
    values: ['left', 'center', 'right', 'justify', 'start', 'end'],
    description: {
      ja: 'テキストの水平方向の揃えを指定する',
      en: 'Sets the horizontal alignment of text',
    },
    preview: {
      html: '<p class="text" style="border:1px solid #ccc;padding:4px">Aligned text content here</p>',
      property: 'text-align',
      target: '.preview-container .text',
    },
  },
  {
    name: 'text-decoration',
    category: 'typography',
    values: ['none', 'underline', 'overline', 'line-through', 'underline dotted', 'underline wavy'],
    description: {
      ja: 'テキストの装飾を指定する',
      en: 'Sets decorations on text',
    },
    preview: {
      html: '<p class="text">Decorated Text</p>',
      property: 'text-decoration',
      target: '.preview-container .text',
    },
  },
  {
    name: 'text-transform',
    category: 'typography',
    values: ['none', 'uppercase', 'lowercase', 'capitalize'],
    description: {
      ja: 'テキストの大文字小文字変換を指定する',
      en: 'Controls the capitalization of text',
    },
    preview: {
      html: '<p class="text">Hello World Text</p>',
      property: 'text-transform',
      target: '.preview-container .text',
    },
  },
  {
    name: 'white-space',
    category: 'typography',
    values: ['normal', 'nowrap', 'pre', 'pre-wrap', 'pre-line'],
    description: {
      ja: '空白文字の扱い方を指定する',
      en: 'Sets how white space inside an element is handled',
    },
    preview: {
      html: '<p class="text" style="width:120px;border:1px solid #ccc">Hello   World\nNew line</p>',
      property: 'white-space',
      target: '.preview-container .text',
    },
  },
  {
    name: 'word-break',
    category: 'typography',
    values: ['normal', 'break-all', 'keep-all', 'break-word'],
    description: {
      ja: '単語の折り返し方法を指定する',
      en: 'Sets how words should break when reaching the end of a line',
    },
    preview: {
      html: '<p class="text" style="width:100px;border:1px solid #ccc">Superlongwordthatbreaks</p>',
      property: 'word-break',
      target: '.preview-container .text',
    },
  },
  {
    name: 'text-overflow',
    category: 'typography',
    values: ['clip', 'ellipsis'],
    description: {
      ja: 'あふれたテキストの表示方法を指定する',
      en: 'Sets how overflowed text is displayed',
    },
    preview: {
      html: '<p class="text" style="width:120px;overflow:hidden;white-space:nowrap;border:1px solid #ccc">Long text that overflows</p>',
      property: 'text-overflow',
      target: '.preview-container .text',
    },
  },
  {
    name: 'vertical-align',
    category: 'typography',
    values: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'super', 'sub'],
    description: {
      ja: 'インライン要素の垂直方向の配置を指定する',
      en: 'Sets the vertical alignment of an inline element',
    },
    preview: {
      html: '<span style="font-size:24px">Big</span><span class="text" style="font-size:12px">small</span>',
      property: 'vertical-align',
      target: '.preview-container .text',
    },
  },
  {
    name: 'font-style',
    category: 'typography',
    values: ['normal', 'italic', 'oblique'],
    description: {
      ja: 'フォントのスタイル（斜体等）を指定する',
      en: 'Sets the style of the font (e.g., italic)',
    },
    preview: {
      html: '<p class="text">Sample Text</p>',
      property: 'font-style',
      target: '.preview-container .text',
    },
  },
  {
    name: 'list-style',
    category: 'typography',
    values: ['disc', 'circle', 'square', 'decimal', 'lower-alpha', 'upper-roman', 'none'],
    description: {
      ja: 'リストマーカーのスタイルを指定する',
      en: 'Sets the style of list item markers',
    },
    preview: {
      html: '<ul style="margin:0;padding-left:20px"><li class="text">Item A</li><li class="text">Item B</li><li class="text">Item C</li></ul>',
      property: 'list-style',
      target: '.preview-container li',
    },
  },

  // ── Color & Background ───────────────────────────────────────────────────
  {
    name: 'color',
    category: 'color',
    values: ['#333333', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6', 'hotpink', 'currentColor'],
    description: {
      ja: 'テキストの色を指定する',
      en: 'Sets the color of text',
    },
    preview: {
      html: '<p class="text" style="font-size:18px;font-weight:bold">Hello, Color!</p>',
      property: 'color',
      target: '.preview-container .text',
    },
  },
  {
    name: 'background-color',
    category: 'color',
    values: ['transparent', '#f0f0f0', '#3498db', '#e74c3c', '#2ecc71', 'rgba(0,0,0,0.2)'],
    description: {
      ja: '背景色を指定する',
      en: 'Sets the background color of an element',
    },
    preview: {
      html: '<div class="box" style="padding:12px">Background</div>',
      property: 'background-color',
      target: '.preview-container .box',
    },
  },
  {
    name: 'background-image',
    category: 'color',
    values: [
      'none',
      'linear-gradient(to right, #e74c3c, #3498db)',
      'linear-gradient(135deg, #f093fb, #f5576c)',
      'radial-gradient(circle, #3498db, #2ecc71)',
      'repeating-linear-gradient(45deg, #eee 0, #eee 10px, #fff 10px, #fff 20px)',
    ],
    description: {
      ja: '背景画像またはグラデーションを指定する',
      en: 'Sets the background image or gradient',
    },
    preview: {
      html: '<div class="box" style="width:200px;height:80px"></div>',
      property: 'background-image',
      target: '.preview-container .box',
    },
  },
  {
    name: 'background-size',
    category: 'color',
    values: ['auto', 'cover', 'contain', '50%', '100px 60px'],
    description: {
      ja: '背景画像のサイズを指定する',
      en: 'Sets the size of the background image',
    },
    preview: {
      html: '<div class="box" style="width:200px;height:100px;background-image:url(https://picsum.photos/400/200)"></div>',
      property: 'background-size',
      target: '.preview-container .box',
    },
  },
  {
    name: 'background-position',
    category: 'color',
    values: ['left top', 'center top', 'center center', 'center bottom', 'right center', '0% 50%'],
    description: {
      ja: '背景画像の位置を指定する',
      en: 'Sets the starting position of the background image',
    },
    preview: {
      html: '<div class="box" style="width:200px;height:100px;background-image:url(https://picsum.photos/100/60);background-repeat:no-repeat;background-size:100px 60px;background-color:#f0f0f0"></div>',
      property: 'background-position',
      target: '.preview-container .box',
    },
  },
  {
    name: 'opacity',
    category: 'color',
    values: ['0', '0.2', '0.4', '0.6', '0.8', '1'],
    description: {
      ja: '要素の不透明度を指定する',
      en: 'Sets the opacity (transparency) of an element',
    },
    preview: {
      html: '<div class="box" style="width:80px;height:80px;background:#3498db"></div>',
      property: 'opacity',
      target: '.preview-container .box',
    },
  },
  {
    name: 'mix-blend-mode',
    category: 'color',
    values: ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'difference', 'exclusion'],
    description: {
      ja: '要素と背景の色の合成方法を指定する',
      en: 'Sets how an element blends with the element behind it',
    },
    preview: {
      html: '<div style="position:relative;width:100px;height:80px;background:linear-gradient(to right,#e74c3c,#3498db)"><div class="box" style="position:absolute;top:10px;left:20px;width:60px;height:60px;background:#2ecc71"></div></div>',
      property: 'mix-blend-mode',
      target: '.preview-container .box',
    },
  },

  // ── Effects ──────────────────────────────────────────────────────────────
  {
    name: 'box-shadow',
    category: 'effects',
    values: [
      'none',
      '2px 2px 4px rgba(0,0,0,0.2)',
      '0 4px 12px rgba(0,0,0,0.3)',
      '0 0 0 3px #3498db',
      'inset 0 2px 4px rgba(0,0,0,0.2)',
      '4px 4px 0 #e74c3c',
    ],
    description: {
      ja: 'ボックスに影を付ける',
      en: 'Adds shadow to an element',
    },
    preview: {
      html: '<div class="box" style="width:80px;height:80px;background:#fff"></div>',
      property: 'box-shadow',
      target: '.preview-container .box',
    },
  },
  {
    name: 'filter',
    category: 'effects',
    values: ['none', 'blur(4px)', 'brightness(1.5)', 'contrast(1.5)', 'grayscale(1)', 'hue-rotate(90deg)', 'saturate(2)', 'sepia(1)'],
    description: {
      ja: '要素にフィルター効果を適用する',
      en: 'Applies graphical effects to an element',
    },
    preview: {
      html: '<img src="https://picsum.photos/160/100" style="display:block">',
      property: 'filter',
      target: '.preview-container img',
    },
  },
  {
    name: 'backdrop-filter',
    category: 'effects',
    values: ['none', 'blur(4px)', 'blur(8px)', 'brightness(0.5)', 'brightness(1.5)', 'grayscale(1)'],
    description: {
      ja: '要素の背景にフィルター効果を適用する',
      en: 'Applies effects to the area behind an element',
    },
    preview: {
      html: '<div style="position:relative;background:linear-gradient(135deg,#e74c3c,#3498db);width:200px;height:100px"><div class="box" style="position:absolute;top:20px;left:40px;width:120px;height:60px;background:rgba(255,255,255,0.2);color:#fff;display:flex;align-items:center;justify-content:center">Glass</div></div>',
      property: 'backdrop-filter',
      target: '.preview-container .box',
    },
  },
  {
    name: 'clip-path',
    category: 'effects',
    values: ['none', 'circle(50%)', 'ellipse(60% 40%)', 'polygon(50% 0%,100% 100%,0% 100%)', 'inset(10px 20px)', 'polygon(0 0,100% 0,80% 100%,0% 100%)'],
    description: {
      ja: 'クリッピングパスで要素の表示範囲を定義する',
      en: 'Defines the visible area of an element using a clip path',
    },
    preview: {
      html: '<div class="box" style="width:100px;height:100px;background:linear-gradient(135deg,#3498db,#2ecc71)"></div>',
      property: 'clip-path',
      target: '.preview-container .box',
    },
  },
  {
    name: 'cursor',
    category: 'effects',
    values: ['auto', 'default', 'pointer', 'crosshair', 'move', 'not-allowed', 'grab', 'text', 'wait', 'help'],
    description: {
      ja: 'マウスカーソルの形状を指定する',
      en: 'Sets the type of cursor to display',
    },
    preview: {
      html: '<div class="box" style="padding:12px;background:#3498db;color:#fff;text-align:center">Hover me</div>',
      property: 'cursor',
      target: '.preview-container .box',
    },
  },
  {
    name: 'user-select',
    category: 'effects',
    values: ['auto', 'none', 'text', 'all'],
    description: {
      ja: 'ユーザーがテキストを選択できるかを指定する',
      en: 'Controls whether the user can select text',
    },
    preview: {
      html: '<p class="text" style="border:1px solid #ccc;padding:8px">Try to select this text</p>',
      property: 'user-select',
      target: '.preview-container .text',
    },
  },
  {
    name: 'pointer-events',
    category: 'effects',
    values: ['auto', 'none'],
    description: {
      ja: '要素のマウスイベントを制御する',
      en: 'Controls how an element responds to mouse events',
    },
    preview: {
      html: '<button class="box" style="padding:8px 16px;background:#3498db;color:#fff;border:none;cursor:pointer">Click (toggle pointer-events)</button>',
      property: 'pointer-events',
      target: '.preview-container .box',
    },
  },
  {
    name: 'appearance',
    category: 'effects',
    values: ['auto', 'none'],
    description: {
      ja: 'UI コントロールのデフォルトスタイルを制御する',
      en: 'Controls the native UI appearance of form elements',
    },
    preview: {
      html: '<select class="box"><option>Option 1</option><option>Option 2</option></select>',
      property: 'appearance',
      target: '.preview-container .box',
    },
  },
  {
    name: 'scroll-behavior',
    category: 'effects',
    values: ['auto', 'smooth'],
    description: {
      ja: 'スクロールの動作を指定する',
      en: 'Sets the scroll behavior for a scrolling box',
    },
    preview: {
      html: '<div class="text" style="text-align:center;padding:8px;color:#666">Applies to scrolling containers</div>',
      property: 'scroll-behavior',
      target: '.preview-container',
    },
  },

  // ── Transform & Animation ────────────────────────────────────────────────
  {
    name: 'transform',
    category: 'transform',
    values: ['none', 'rotate(45deg)', 'scale(1.5)', 'translateX(20px)', 'translateY(20px)', 'skewX(20deg)', 'rotate(45deg) scale(1.2)'],
    description: {
      ja: '要素の変形（回転・拡大縮小・移動等）を指定する',
      en: 'Applies geometric transformations to an element',
    },
    preview: {
      html: '<div class="box" style="width:60px;height:60px;background:#3498db;margin:20px auto"></div>',
      property: 'transform',
      target: '.preview-container .box',
    },
  },
  {
    name: 'rotate',
    category: 'transform',
    values: ['none', '0deg', '45deg', '90deg', '180deg', '-45deg'],
    description: {
      ja: '要素の回転角度を指定する（CSS rotate プロパティ）',
      en: 'Sets the rotation of the element (CSS rotate property)',
    },
    preview: {
      html: '<div class="box" style="width:60px;height:60px;background:#e74c3c;margin:20px auto"></div>',
      property: 'rotate',
      target: '.preview-container .box',
    },
  },
  {
    name: 'scale',
    category: 'transform',
    values: ['none', '0.5', '0.75', '1', '1.25', '1.5', '2'],
    description: {
      ja: '要素の拡大縮小を指定する（CSS scale プロパティ）',
      en: 'Sets the scale of the element (CSS scale property)',
    },
    preview: {
      html: '<div class="box" style="width:60px;height:60px;background:#2ecc71;margin:20px auto"></div>',
      property: 'scale',
      target: '.preview-container .box',
    },
  },
  {
    name: 'translate',
    category: 'transform',
    values: ['none', '0 0', '20px 0', '0 20px', '20px 20px', '-20px -20px'],
    description: {
      ja: '要素の移動を指定する（CSS translate プロパティ）',
      en: 'Sets the translation of the element (CSS translate property)',
    },
    preview: {
      html: '<div class="box" style="width:60px;height:60px;background:#9b59b6;margin:20px auto"></div>',
      property: 'translate',
      target: '.preview-container .box',
    },
  },
  {
    name: 'transition',
    category: 'transform',
    values: ['none', 'all 0.3s ease', 'transform 0.5s ease', 'opacity 0.3s', 'all 1s ease-in-out'],
    description: {
      ja: 'プロパティ変化時のアニメーション遷移を指定する',
      en: 'Defines smooth transitions between property values',
    },
    preview: {
      html: '<div class="box hover-demo" style="width:80px;height:40px;background:#3498db;display:flex;align-items:center;justify-content:center;color:#fff;transform:none">Hover</div>',
      property: 'transition',
      target: '.preview-container .box',
    },
  },
  {
    name: 'animation',
    category: 'transform',
    values: ['none', 'spin 1s linear infinite', 'pulse 1s ease-in-out infinite', 'bounce 0.5s ease infinite alternate'],
    description: {
      ja: 'CSS アニメーションを指定する',
      en: 'Applies CSS keyframe animations',
    },
    preview: {
      html: '<div class="box anim-demo" style="width:60px;height:60px;background:#e74c3c;margin:16px auto"></div>',
      property: 'animation',
      target: '.preview-container .box',
    },
  },
  {
    name: 'content',
    category: 'transform',
    values: ['""', '"★"', '"→"', '"(" attr(data-val) ")"', 'counter(section)'],
    description: {
      ja: '::before / ::after 疑似要素のコンテンツを指定する',
      en: 'Defines content inserted by ::before or ::after pseudo-elements',
    },
    preview: {
      html: '<p class="text pseudo-demo" data-val="42" style="font-size:16px">Item</p>',
      property: 'content',
      target: '.preview-container .text::before',
    },
  },
  {
    name: 'flex-grow',
    category: 'layout',
    values: ['0', '1', '2', '3'],
    description: {
      ja: 'フレックスアイテムの伸び率を指定する',
      en: 'Sets the grow factor for a flex item',
    },
    preview: {
      html: '<div class="box" style="background:#e74c3c;flex-grow:1">A</div><div class="box" style="background:#3498db">B</div>',
      property: 'flex-grow',
      target: '.preview-container .box:first-child',
      containerStyle: 'display:flex;gap:4px',
    },
  },
  {
    name: 'flex-shrink',
    category: 'layout',
    values: ['0', '1', '2', '3'],
    description: {
      ja: 'フレックスアイテムの縮み率を指定する',
      en: 'Sets the shrink factor for a flex item',
    },
    preview: {
      html: '<div class="box" style="background:#e74c3c;width:120px">A</div><div class="box" style="background:#3498db;width:120px">B</div>',
      property: 'flex-shrink',
      target: '.preview-container .box:first-child',
      containerStyle: 'display:flex;gap:4px;width:160px',
    },
  },
  {
    name: 'align-self',
    category: 'layout',
    values: ['auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
    description: {
      ja: '個別フレックスアイテムのクロス軸配置を指定する',
      en: 'Overrides the align-items value for a single flex item',
    },
    preview: {
      html: '<div class="box" style="background:#e74c3c">A</div><div class="box" style="background:#3498db">B</div>',
      property: 'align-self',
      target: '.preview-container .box:first-child',
      containerStyle: 'display:flex;align-items:stretch;height:80px;gap:4px',
    },
  },
  {
    name: 'order',
    category: 'layout',
    values: ['-2', '-1', '0', '1', '2', '3'],
    description: {
      ja: 'フレックスアイテムの表示順序を指定する',
      en: 'Sets the display order of a flex item',
    },
    preview: {
      html: '<div class="box" style="background:#e74c3c">1</div><div class="box" style="background:#3498db">2</div><div class="box" style="background:#2ecc71">3</div>',
      property: 'order',
      target: '.preview-container .box:first-child',
      containerStyle: 'display:flex;gap:4px',
    },
  },
  {
    name: 'grid-column',
    category: 'layout',
    values: ['auto', '1', '1 / 3', '2 / 4', '1 / -1', 'span 2'],
    description: {
      ja: 'グリッドアイテムの列の範囲を指定する',
      en: 'Sets the column placement and span of a grid item',
    },
    preview: {
      html: '<div class="box" style="background:#e74c3c">A</div><div class="box" style="background:#3498db">B</div><div class="box" style="background:#2ecc71">C</div><div class="box" style="background:#9b59b6">D</div>',
      property: 'grid-column',
      target: '.preview-container .box:first-child',
      containerStyle: 'display:grid;grid-template-columns:repeat(3,1fr);gap:4px',
    },
  },
  {
    name: 'place-items',
    category: 'layout',
    values: ['start', 'end', 'center', 'stretch', 'start center', 'end end'],
    description: {
      ja: 'グリッド/フレックスアイテムを一括で配置する (align-items + justify-items)',
      en: 'Shorthand for align-items and justify-items in grid/flex',
    },
    preview: {
      html: '<div class="box" style="background:#3498db;width:40px;height:40px"></div>',
      property: 'place-items',
      target: '.preview-container',
      containerStyle: 'display:grid;grid-template-columns:1fr;height:100px;border:1px solid #ccc',
    },
  },
  {
    name: 'transform-origin',
    category: 'transform',
    values: ['center', 'top left', 'top right', 'bottom left', 'bottom right', '0% 50%'],
    description: {
      ja: 'transform の基点を指定する',
      en: 'Sets the origin point of transformations',
    },
    preview: {
      html: '<div class="box" style="width:60px;height:60px;background:#e74c3c;transform:rotate(30deg);margin:20px auto"></div>',
      property: 'transform-origin',
      target: '.preview-container .box',
    },
  },
  {
    name: 'animation-timing-function',
    category: 'transform',
    values: ['ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out', 'cubic-bezier(0.68,-0.55,0.27,1.55)', 'steps(5)'],
    description: {
      ja: 'アニメーションのタイミング関数を指定する',
      en: 'Sets the timing function of CSS animations',
    },
    preview: {
      html: '<div class="box anim-timing" style="width:40px;height:40px;background:#3498db;animation:slide 2s infinite alternate"></div>',
      property: 'animation-timing-function',
      target: '.preview-container .box',
    },
  },
];

export function findByName(name) {
  if (!name) return undefined;
  const lower = name.toLowerCase();
  return PROPS.find(p => p.name.toLowerCase() === lower);
}

export function searchProps(query, lang = 'en') {
  if (!query) return PROPS;
  const lower = query.toLowerCase();
  return PROPS.filter(p => {
    const nameMatch = p.name.toLowerCase().includes(lower);
    const descMatch = p.description[lang] && p.description[lang].toLowerCase().includes(lower);
    return nameMatch || descMatch;
  });
}

export function filterByCategory(category) {
  if (!category || category === 'all') return PROPS;
  return PROPS.filter(p => p.category === category);
}
