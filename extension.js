
const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log('Extension Toggle Bracket Guides is now active!');

  let disposable = vscode.commands.registerCommand('extension.toggleBracketPairGuides', () => {
      const config = vscode.workspace.getConfiguration();
      const currentValue = config.get('editor.guides.bracketPairs');

      let newValue;
      let message;

      if (currentValue === true) {
          newValue = 'active';
          message = 'Bracket pairs guides set to active!';
      } else if (currentValue === 'active') {
          newValue = false;
          message = 'Bracket pairs guides disabled!';
      } else {
          newValue = true;
          message = 'Bracket pairs guides enabled!';
      }

      // Update the setting
      config.update('editor.guides.bracketPairs', newValue, vscode.ConfigurationTarget.Global);

      vscode.window.showInformationMessage(message);
  });

  context.subscriptions.push(disposable);
}

module.exports = {
  activate
};
