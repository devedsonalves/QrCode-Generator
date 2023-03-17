# QRCode Generator
This is a exercise resolution for Buzzvel Dev Team. It was built with ReactJS, TailwindCSS, React-Qr-Code, React-Toastify.

## How it works?
1. In the first and main page, there is a form with 3 inputs: name, linkedin username and github username.
2. After iserting data in the inputs, the user may click in the "Generate Qrcode" button.
3. By clicking the QRCode button, the QRCode image and two different links must appear, which if is scanned, redirects to the profile page, that contains the input data and appropriate links.
    1. The first link generated is the "Copy URL". When clicked, gets the profile page url generated and copy it to the clipboard, and triggers the successfull toast notification.
    2. The second link is a router for the profile page.
  
  ### Deployed
  This Project was deployed with vercel with the following domain: https://buzzvel-qrgen.vercel.app/
  
  ### Configuration
  
  If you want to run this project in your machine:
  * Clone or Fork the repo ;)
  1. run `npm install`
  2. run `npm start`
