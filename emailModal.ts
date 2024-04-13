import { App, Editor, Modal, Setting } from 'obsidian';

export class EmailModal extends Modal {
  result: string;
  editor: Editor;
  onSubmit: (result: string) => void;

  constructor(app: App, editor: Editor, onSubmit: (result: string) => void) {
    super(app);
    this.onSubmit = onSubmit;
	this.editor = editor
  }

  onOpen() {
    const { contentEl } = this;

    contentEl.createEl("h1", { text: "Send selected content to?" });

    new Setting(contentEl)
      .setName("Email")
      .addText((text) =>
        text.onChange((value) => {
          this.result = value
        }));

    new Setting(contentEl)
      .addButton((btn) =>
        btn
          .setButtonText("Send")
          .setCta()
          .onClick(() => {
            this.close();
            this.onSubmit(this.result);
          }));
  }

  onClose() {
    let { contentEl } = this;
    contentEl.empty();
  }
}
