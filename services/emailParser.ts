export function parseEmails(emails: string): string[] {
  return emails.split(',').map((email) => email.trim())
}
