# WhatsappStatusFollower
Web scraping app to follow the WhatsApp user status (online or not online).

It will log the current date when the user is online.

# Installation

I assume that you already have installed node and npm if not you can follow instructions in [node's site](https://nodejs.org/en/)

To check that you have node and npm installed you can type:

> node -v
> npm -v

You need to install puppeteer first. So go to your project directory from terminal and type:
> npm install puppeteer --save 

It might take some time because it will download chromium.

# Usage

After installing puppeteer when you are inside your project directory type:
> node index.js

It will open up chromium and show you the barcode to sign in to your whatsapp.

You need to sign in to your whatsapp. 
After signing in just wait for the app to complete tasks...

Now it will log if the user is online.

You can go further and upload it to server if you wish...

**Good luck**

