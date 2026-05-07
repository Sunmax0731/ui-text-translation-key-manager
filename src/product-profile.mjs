export const productProfile = {
  "repository": "ui-text-translation-key-manager",
  "title": "UI文言・翻訳キー管理",
  "domain": "VSCodeExtension",
  "hostApp": null,
  "rank": 36,
  "ideaNo": 6,
  "overview": "UIテキスト抽出、i18nキー管理、翻訳表編集を行う。入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。",
  "problem": "文言と翻訳キーがコードに埋もれて保守しづらい。",
  "differentiation": "一覧編集と未使用キー検査を同じビューにする。",
  "publish": "GitHub Release / VSIX",
  "surface": "VS Code extension + key catalog",
  "entity": "translation key",
  "requiredFields": [
    "id",
    "title",
    "source",
    "key",
    "defaultText",
    "locale",
    "owner",
    "acceptance"
  ],
  "warningField": "unusedState",
  "benchmarkRepos": [
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/git-release-publish-assistant",
    "Sunmax0731/movie-telop-transcriber",
    "Sunmax0731/codex-remote-android"
  ]
};
