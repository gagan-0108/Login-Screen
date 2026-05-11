# My First React Native App 

Welcome to my very first React Native project! This is a beautifully designed, functional authentication flow built using **Expo** and **React Native**. It includes complete screens for Sign In, Sign Up, and Password Recovery, with a strong focus on clean UI, component reusability, and user experience.

---

## 📑 Table of Contents

0. [Table of Contents](#-table-of-contents)
1. [Project Structure & Screens](#1-project-structure--screens)
2. [App Flow](#2-app-flow)
3. [Tech Stack & Key Decisions](#3-tech-stack--key-decisions)
4. [Setup Guide](#4-setup-guide)
5. [Deployed App Link](#5-deployed-app-link)

---

## 1. Project Structure & Screens

This project uses **Expo Router** for modern, file-based routing. The main code lives inside the `src/` directory to keep things organized.

```text
src/
├── app/                      # Expo Router screens (File-based routing)
│   ├── _layout.tsx           # Root layout: loads fonts, safe area, and navigation stack
│   ├── index.tsx             # Sign In Screen (Default route "/")
│   ├── signup.tsx            # Sign Up Screen ("/signup")
│   └── forgetPassword.tsx    # Forgot Password Screen ("/forgetPassword")
│
├── Components/               # Reusable UI building blocks
│   ├── Button.tsx            # Custom styled Pressable button
│   ├── Headers.tsx           # Screen title and description text
│   ├── InputField.tsx        # Advanced text input with icons, focus states, and error handling
│   └── resetPasswordMethod.tsx # Selectable cards for recovery options (Email, SMS, Auth App)
│
└── theme/                    # Global styling
    └── color.ts              # Color palette and theme tokens (supports light/dark mode concepts)
```

---

## 2. App Flow

The application follows a standard authentication user journey:

1. **Initial Load (`/` -> `index.tsx`)**: The user opens the app and is greeted by the **Sign In** screen. They can enter their email and password, or use social login buttons.
2. **No Account? (`/signup`)**: If they don't have an account, clicking "Sign Up" navigates them to the registration screen. Here, they must fill in their details and confirm their password (which includes real-time mismatch validation).
3. **Forgot Password? (`/forgetPassword`)**: If the user clicks "Forgot your password?", they are taken to a recovery screen. They can select their preferred recovery method (Email, 2FA SMS, or Google Authenticator) using interactive, selectable cards.

---

## 3. Tech Stack & Key Decisions

I used several specific tools and libraries to solve common mobile development challenges:

* **`expo-router`**: Used for navigation. Instead of manually configuring complex navigators, this allows me to create new screens simply by adding a file to the `app/` folder.
* **`react-native-keyboard-aware-scroll-view`**: *Crucial for UX!* When a user taps an input field, the software keyboard slides up. This library automatically scrolls the screen so the input field isn't hidden behind the keyboard.
* **`react-native-safe-area-context`**: Wrapped around the entire app to automatically calculate and add padding for device notches and the home indicator (so UI doesn't clip off the screen).
* **`@expo-google-fonts/poppins`**: Used to load custom typography (`Poppins` font family) for a premium, modern look instead of relying on default system fonts.
* **`@expo/vector-icons` (Ionicons)**: Used for all UI icons (mail, lock, back arrows, social logos).
* **Custom Components over Defaults**: I built custom `InputField` and `Button` components instead of using default React Native elements. This ensured I had full control over focus states, border colors, shadows (`elevation`), and consistent styling across all screens.

---

## 4. Setup Guide

Want to run this project locally on your machine? Follow these steps:

### Prerequisites
* [Node.js](https://nodejs.org/en/) installed on your computer.
* A physical smartphone with the **Expo Go** app installed (available on iOS and Android), OR an Android Emulator/iOS Simulator set up on your computer.

### Installation

1. **Clone the repository** (or download the code):
   ```bash
   git clone https://github.com/gagan-0108/Login-Screen
   cd my-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the Expo development server**:
   ```bash
   npx expo start
   ```

4. **Run the app**:
   * Open the Camera app on your phone and scan the QR code that appears in your terminal.
   * Alternatively, press `a` in the terminal to open it in an Android Emulator, or `i` for an iOS Simulator.

---

## 5. Deployed App Link

[https://expo.dev/accounts/gagan_0108/projects/my-app/builds/f4d33385-3668-4ec7-8055-3791f3425686]
