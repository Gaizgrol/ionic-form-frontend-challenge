# Backend Task - NestJS + RabbitMQ + MongoDB

## Contents:

📱 Overview

🎯 Objective

🏃 Running the project

📂 Native Storage

🚧 Troubleshooting

---

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
