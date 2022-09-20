# react-test
Test for react

Azure Static Web Apps #

You can quickly deploy your Vite app with Microsoft Azure Static Web Apps service. You need:

An Azure account and a subscription key. You can create a free Azure account here.
Your app code pushed to GitHub.
The SWA Extension in Visual Studio Code.
Install the extension in VS Code and navigate to your app root. Open the Static Web Apps extension, sign in to Azure, and click the '+' sign to create a new Static Web App. You will be prompted to designate which subscription key to use.

Follow the wizard started by the extension to give your app a name, choose a framework preset, and designate the app root (usually /) and built file location /dist. The wizard will run and will create a GitHub action in your repo in a .github folder.

The action will work to deploy your app (watch its progress in your repo's Actions tab) and, when successfully completed, you can view your app in the address provided in the extension's progress window by clicking the 'Browse Website' button that appears when the GitHub action has run.


Website: https://black-beach-02a5ff71e.1.azurestaticapps.net