export const TRANSLATIONS = {
  ja: {
    appTitle: 'CSS プロパティリファレンス',
    appSubtitle: '60+ CSS プロパティにライブプレビュー付き',
    searchPlaceholder: 'プロパティ名で検索…',
    allCategories: 'すべて',
    values: '値',
    description: '説明',
    example: 'コード例',
    preview: 'プレビュー',
    noResults: '該当するプロパティが見つかりません',
    toggleTheme: 'ダーク/ライト切替',
    toggleLang: 'EN',
    propertyCount: 'プロパティ',
    currentValue: '現在の値',
  },
  en: {
    appTitle: 'CSS Props Ref',
    appSubtitle: '60+ CSS properties with live previews',
    searchPlaceholder: 'Search by property name…',
    allCategories: 'All',
    values: 'Values',
    description: 'Description',
    example: 'Code',
    preview: 'Preview',
    noResults: 'No properties found',
    toggleTheme: 'Dark / Light',
    toggleLang: 'JA',
    propertyCount: 'properties',
    currentValue: 'Current value',
  },
};

export function t(lang, key) {
  return TRANSLATIONS[lang]?.[key] ?? TRANSLATIONS.en[key] ?? key;
}

export function getLang() {
  return document.documentElement.lang === 'ja' ? 'ja' : 'en';
}

export function setLang(lang) {
  document.documentElement.lang = lang;
}
