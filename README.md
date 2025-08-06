# Memex

This project is a portable, cross-platform application inspired by Vannevar Bush's "memex" concept. The application will provide a unified, filesystem-like interface to a user's knowledge base. By leveraging Large Language Models (LLMs), it will move beyond simple storage to create a dynamic, self-organizing system that builds "associative trails" between disparate pieces of information, mirroring human thought processes.

For a detailed explanation of the project's vision, goals, and technical design, please see the [Architectural Outline](docs/architectural-outline.md).

## Project Status

This project is in the early stages of development. The foundational setup for the React Native frontend and Go backend is underway.

To see the planned features and development roadmap, please refer to the [Next Steps](docs/NEXT_STEPS.md) document.

## Architecture Overview

The application uses a layered architecture composed of:

*   **Presentation Layer (Frontend):** A [**React Native**](https://reactnative.dev) application for the user interface.
*   **Core Logic Layer (Backend):** A service written in [**Go (Golang)**](https://go.dev/) that manages the core business logic, data processing, and LLM interactions.

## Getting Started

### Prerequisites

*   Make sure you have completed the [React Native Environment Setup](https://reactnative.dev/docs/set-up-your-environment).
*   Ensure you have [Go](https://go.dev/doc/install) installed on your system.

### Running the Application

1.  **Start the Backend Service:**
    *   (Instructions to be added once the backend server is implemented).

2.  **Start the Frontend Application:**

    First, you will need to run **Metro**, the JavaScript build tool for React Native.

    ```sh
    yarn start
    ```

    With Metro running, open a new terminal window/pane from the root of your project, and use one of the following commands to build and run your Android or iOS app:

    #### Android

    ```sh
    yarn android
    ```

    #### iOS

    For iOS, remember to install CocoaPods dependencies.

    ```sh
    bundle install
    bundle exec pod install
    ```

    Then run the app:

    ```sh
    yarn ios
    ```

If everything is set up correctly, you should see the app running in the Android Emulator, iOS Simulator, or your connected device.