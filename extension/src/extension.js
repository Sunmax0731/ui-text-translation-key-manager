function activate(context) {
  const disposable = vscode.commands.registerCommand("ui-text-translation-key-manager.open", () => {
    vscode.window.showInformationMessage("UI文言・翻訳キー管理: npm test で検証できます。");
  });
  context.subscriptions.push(disposable);
}

function deactivate() {}

const vscode = require("vscode");
module.exports = { activate, deactivate };
