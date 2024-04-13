import { App, Editor, Modal, Setting } from 'obsidian';

export class EmailModal extends Modal {
  content: string;
  subject: string;
  editor: Editor;
  onSubmit: (result: string, subject: string) => void;

  constructor(app: App, editor: Editor, onSubmit: (result: string, subject: string) => void) {
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
          this.content = value
        }));

    new Setting(contentEl)
      .setName("Subject")
      .addText((text) =>
        text.onChange((value) => {
          this.subject = value
        }));

    new Setting(contentEl)
      .addButton((btn) =>
        btn
          .setButtonText("Send")
          .setCta()
          .onClick(() => {
            this.close();
            this.onSubmit(this.content, this.subject);
          }));
  }

  onClose() {
    let { contentEl } = this;
    contentEl.empty();
  }
}
