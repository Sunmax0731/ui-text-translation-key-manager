# ui-text-translation-key-manager

UI文言・翻訳キー管理 は、UIテキスト抽出、i18nキー管理、翻訳表編集を行う。入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。

## 何を解決するか

文言と翻訳キーがコードに埋もれて保守しづらい。

## 差別化

一覧編集と未使用キー検査を同じビューにする。

## 公開先

- GitHub Release / VSIX

## 現在の到達点

- core / validators / report / review-model / CLI に責務を分割済み
- VS Code extension + key catalog の最小実装または配布用骨格を同梱済み
- 代表シナリオ `samples/representative-suite.json` で正常系、必須項目不足、warning、混在バッチを自動検証済み
- 厳格 QCDS は Quality、Cost、Delivery、Satisfaction の全観点 S+ で評価済み
- docs ZIP は `dist/ui-text-translation-key-manager-docs.zip`

## 主要コマンド

```powershell
npm test
npm start
```

## 重要ドキュメント

- [要件定義](docs/requirements.md)
- [仕様](docs/specification.md)
- [設計](docs/design.md)
- [手動テスト](docs/manual-test.md)
- [厳格手動テスト追補](docs/strict-manual-test-addendum.md)
- [QCDS評価](docs/qcds-evaluation.md)
- [厳格QCDS metrics](docs/qcds-strict-metrics.json)
- [トレーサビリティ](docs/traceability-matrix.md)

## 参照したアイデアパック

- created_idea: `D:\AI\VSCodeExtension\created_idea_006_ui-text-translation-key-manager`
- idea ZIP: `D:\AI\VSCodeExtension\created_idea_006_ui-text-translation-key-manager\idea_006_ui-text-translation-key-manager.zip`
- PICKUP rank: 36
- Domain: VSCodeExtension
