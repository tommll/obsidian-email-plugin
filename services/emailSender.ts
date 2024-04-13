import { createTransport } from 'nodemailer';
import { Notice } from 'obsidian';

export class EmailSender {
	transporter: any;
	fromEmail: string;

	constructor (senderEmail: string, password: string) {
		this.fromEmail = senderEmail;

		this.transporter = createTransport({
			host: 'smtp.gmail.com',
			port: 587,
			secure: false,
			requireTLS: true,
			auth: {
				user: senderEmail,
				pass: password
			}
		});
	}

	sendEmail (content: string, subject: string, recipient: string) {
		const mailOptions = {
			from: this.fromEmail,
			to: recipient,
			subject: subject,
			text: content,
		};

		console.log('start sending email')
		this.transporter.sendMail(mailOptions, (error: Error, _: any) => {
		console.log('finished sending email')

		if (error) {
			// TODO: make error message more user-friendly
			new Notice(`Error occurred: ${error.message}`);
		} else {
			new Notice(`Sent to ${recipient} successfully`);
		}
		});
	};
}



