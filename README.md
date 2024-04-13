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
  * Relase version tag: [latest verision tag](https://github.com/tommll/obsidian-email-plugin/releases/latest) (e.g `v1.0`)

![image](https://github.com/tommll/obsidian-email-plugin/assets/63462213/1bd81984-1164-4bd5-a365-85d02d496312)

#### 3. Set up send-note-to-emails command
* Open "Customizable Menu"'s plugin setting
* Click "**Add command to menu**" (allows you to send notes by mouse right clicking)
* Search for "**Emailer: Send to email**"
* Enter

![image](https://github.com/tommll/obsidian-email-plugin/assets/63462213/77a16c1e-22af-4fe7-a471-ef5ea3b329a8)

## How to use
#### 1. Set up your mail settings
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

![image](https://github.com/tommll/obsidian-email-plugin/assets/63462213/5b248db1-23dc-4f7a-a6ac-ab44eaddfd7b)

* Reload Obsidian: using the "**Reload app without saving**" command

#### 2. Emailing your notes 
* Highlight a piece of text in Obsidian note
* Right click and chose "Emailer: Send to email"

![image](https://github.com/tommll/obsidian-email-plugin/assets/63462213/603af892-4a5d-45b1-bf2f-81af14c59d34)

* In the pop-up window, enter email(s) of the recepient(s)

![image](https://github.com/tommll/obsidian-email-plugin/assets/63462213/18ffe02f-a9d0-4dd6-b683-6499598dabff)

```
# single recepient
"bob@gmail.com"

# multiple recepients
"bob@gmail.com, alice@gmail.com"
```

* Sending email successfully

![image](https://github.com/tommll/obsidian-email-plugin/assets/63462213/eb083da7-8745-42d4-9855-e3c122dc89c9)
