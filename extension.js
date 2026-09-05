const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

function activate(context) {
    let runCmd = vscode.commands.registerCommand('typeout.run', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }

        const filePath = editor.document.uri.fsPath;
        const dir = path.dirname(filePath);
        const ext = path.extname(filePath);
        const base = path.basename(filePath, ext);
        const backupPath = path.join(dir, `${base}_backup${ext}`);

        if (!fs.existsSync(backupPath)) {
            vscode.window.showErrorMessage(`Backup file not found: ${base}_backup${ext}`);
            return;
        }

        // normalize line breaks so windows crlf doesnt duplicate newlines
        let text = fs.readFileSync(backupPath, 'utf8').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
        const total = text.length;

        const ans = await vscode.window.showInformationMessage(
            `Type ${total} chars from ${base}_backup${ext} into ${base}${ext}?`,
            'Start', 'Cancel'
        );
        if (ans !== 'Start') return;

        await vscode.window.showTextDocument(editor.document);

        // clear doc first without adding an undo stop
        const doc = editor.document;
        const lastLine = doc.lineAt(doc.lineCount - 1);
        const allRange = new vscode.Range(new vscode.Position(0, 0), lastLine.range.end);
        await editor.edit(eb => eb.delete(allRange), { undoStopBefore: false, undoStopAfter: false });

        await vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: `Typing ${path.basename(filePath)}...`,
            cancellable: true
        }, async (progress, token) => {
            for (let i = 0; i < total; i++) {
                if (token.isCancellationRequested) break;

                const current = editor.document;
                const end = current.lineAt(current.lineCount - 1).range.end;

                await editor.edit(eb => {
                    eb.insert(end, text[i]);
                }, { undoStopBefore: true, undoStopAfter: true });

                if (i % 100 === 0 || i === total - 1) {
                    progress.report({
                        increment: (100 / total) * 100,
                        message: `${i + 1}/${total} chars (${Math.round(((i + 1) / total) * 100)}%)`
                    });
                }

                if (i % 40 === 0) {
                    const tail = editor.document.lineAt(editor.document.lineCount - 1).range.end;
                    editor.selection = new vscode.Selection(tail, tail);
                    editor.revealRange(new vscode.Range(tail, tail), vscode.TextEditorRevealType.Default);
                    await new Promise(r => setTimeout(r, 6));
                }
            }

            const tail = editor.document.lineAt(editor.document.lineCount - 1).range.end;
            editor.selection = new vscode.Selection(tail, tail);
            editor.revealRange(new vscode.Range(tail, tail), vscode.TextEditorRevealType.Default);

            await editor.document.save();
            vscode.window.showInformationMessage(`Finished typing ${total} characters.`);
        });
    });

    context.subscriptions.push(runCmd);
}

function deactivate() {}

module.exports = { activate, deactivate };
