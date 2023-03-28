# Frontend Task - Ionic (Angular)

## Contents:

📱 Overview

🎯 Objective

🏃 Running the project

📂 Native Storage

🚧 Troubleshooting

---

## 📱 Overview

Use case | Light | Dark
--- | --- | ---
Register (no info) | ![Light](https://user-images.githubusercontent.com/28551993/228260981-c834dbd6-af98-49c0-9a23-807a473f0617.png) | ![Dark](https://user-images.githubusercontent.com/28551993/228261000-eb9b208b-35fd-46fa-b6f5-6b48f85168fb.png)
Register (filled) | ![Light](https://user-images.githubusercontent.com/28551993/228260710-51cd8412-f67f-4f3e-b20a-885958f7e3f2.png) | ![Dark](https://user-images.githubusercontent.com/28551993/228260433-e9bec532-3c9d-498f-b1eb-5ddbbffb1e44.png)
Register (success) | ![Light](https://user-images.githubusercontent.com/28551993/228261047-d719980c-6bcc-4d0a-8c5c-9dd1295dec80.png) | ![Dark](https://user-images.githubusercontent.com/28551993/228261025-bb003784-481f-4db0-b19f-34af23961494.png)
Profiles | ![Light](https://user-images.githubusercontent.com/28551993/228261062-78b063a5-5235-409c-85ad-30c032e18cbe.png) | ![Dark](https://user-images.githubusercontent.com/28551993/228261076-d2d52c3f-0328-42d9-a106-3045ea9b33d7.png)

## 🎯 Objective

The task is to create a simple user registry application from scratch using Ionic (Angular).

The application should have two tabs. The first one needs one button and these kind of inputs:

- Profile picture
- First and last names
- Date of birth
- Address information
- Job title
- Phone number

After filling all inputs with information, you should be able to store locally this new user.

The second tab should display all created profiles, with a style similar to an ID card.

## 🏃 Running the project

You should have in your machine: **Node.js**, **npm** and **Ionic CLI**.

If you are running the application for the first time, do a fresh install at the root folder:

```sh
npm install
```

To start serving the application, just type

```sh
ionic serve
```

and your application will start and an browser tab will open in `http://localhost:8081/tabs/register`.

## 📂 Native Storage

This application was only tested in a web environment, so all the data stored with `Filesystem` and `Preference` APIs are being saved in the `IndexedDB` and `LocalStorage`, respectively. If you want to remove all stored photos and users, you should clean your browser data for this application.

## 🚧 Troubleshooting

- Make sure you have these ports available before running the projects:
  - `8100`: Ionic's development server
