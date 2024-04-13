import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import { EmailSender } from './services/emailSender';
import { EmailModal } from './emailModal';
import { parseEmails } from 'services/emailParser';

interface MyPluginSettings {
	senderEmail: string;
	senderEmailPassword: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
	senderEmail: 'test@gmail.com',
	senderEmailPassword: '123'
}

export default class EmailSenderPlugin extends Plugin {
	settings: MyPluginSettings;
	emailSender: EmailSender;

	async onload() {
		await this.loadSettings();

		this.emailSender = new EmailSender(this.settings.senderEmail, this.settings.senderEmailPassword); 

		this.addCommand({
			id: "enter-email",
			name: "Send to email",
			editorCallback: (editor: Editor) => {
				new EmailModal(this.app, editor, (content, subject) => {
					const addresses = parseEmails(content);
					addresses.forEach((address) => {
						const selection = editor.getSelection();
						this.emailSender.sendEmail(selection, subject, address)
					})
				}).open();
			},
		});



		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new EmailSettingTab(this.app, this));

		// If the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
		// Using this function will automatically remove the event listener when this plugin is disabled.
		this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
			console.log('click', evt);
		});

		// When registering intervals, this function will automatically clear the interval when the plugin is disabled.
		this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}


class EmailSettingTab extends PluginSettingTab {
	plugin: EmailSenderPlugin;

	constructor(app: App, plugin: EmailSenderPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName("Sender's email")
			.addText(text => text
				.setPlaceholder('your_email@gmail.com')
				.setValue(this.plugin.settings.senderEmail)
				.onChange(async (value) => {
					this.plugin.settings.senderEmail = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName("Sender email's password")
			.setClass('pass')
			.addText(text => {
				text.inputEl.type = 'password'

				return text
				.setPlaceholder('your password')
				.setValue(this.plugin.settings.senderEmailPassword)
				.onChange(async (value) => {
					this.plugin.settings.senderEmailPassword = value;
					await this.plugin.saveSettings();
				})
			});
	}
}
