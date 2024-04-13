# Email sender plugin for Obsidian
- Sending your Obsidian notes to people's mail inboxes

## How to install
#### 1. Install these 2 Obsidian plugins
  1. [BRAT](https://obsidian.md/plugins?id=obsidian42-brat)
  2. [Customizable Menu](https://obsidian.md/plugins?id=customizable-menu)

#### 2. Install Emailer plugin via BRAT plugin
* Search for command "BRAT: Plugins: Add a beta plugin with frozen version based on a release tag" in your Obsidian
* In the pop-up window, enter
  * Repository: **https://github.com/tommll/obsidian-email-plugin**
  * Relase version tag: **v1.0**

#### 3. Set up send-note-to-emails command
* Open "Customizable Menu"'s plugin setting
* Click "**Add command to menu**" (allows you to send notes by mouse right clicking)
* Search for "**Emailer: Send to email**"
* Enter

## How to use
#### 1. Set up your mail account
  * Open Emailer's plugin setting
  * Enter sender's email address in the email field
  * Set up password:
    * Go to https://myaccount.google.com
    * Click **My Account > Sign-in & Security > App Passwords** (if you have 2-factor authentication, go to My Account > Sign-in & Security -> 2 Factor Authentication -> App Password)
    * Create a new app password:
      * Create a name for the app. For example: obsidian_plugin
      * Google will generate a password for you (e.g **"abcd qwej abaw qweq"**)
      * Save the password somewhere safe on your computer
        * Note: remove the space between characters. (e.g **"abcdqwejabawqweq"**) 
  * Enter the generated password in the password field

#### 2. Emailing your notes 
* Highlight a piece of text in Obsidian note
* Right click and chose "Emailer: Send to email"
* In the pop-up window, enter email(s) of the recepient(s)
```
# single recepient
"bob@gmail.com"

# multiple recepients
"bob@gmail.com, alice@gmail.com"
```
