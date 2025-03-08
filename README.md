# :VauLT:

VauLT is a demo application that has the functionalities of user registration and sign in that is built on React

**Live App: https://vault.live.binzek.com/**

## Features

- Seamless user registration powered by Firebase Auth.
- User sign-in functionality using email and password.
- Efficient routing with React Router.
- State management with Redux Toolkit and React Redux.
- Form handling using React Hook Form.
- Development and building with Vite for a fast and optimized workflow.
- Fully responsive design for seamless user experience on all devices.
- Modern and visually appealing UI design for an engaging user experience.

## Technologies

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Firebase Auth](https://firebase.google.com/docs/auth)
- [React Router](https://reactrouter.com/en/main)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)
- [React Hook Form](https://www.react-hook-form.com/)
- [Vite](https://vitejs.dev//)

## Setup Locally

Follow these steps to set up :VauLT: locally on your machine:

1.  Clone the repository:

    ```sh
    $ git clone https://github.com/wajid-nv/vault.git
    ```

1.  Navigate to the project directory:

    ```sh
    cd vault
    ```

1.  Install the dependencies:

    ```sh
    npm install
    ```

1.  Create a Firebase project and set up Firebase Authentication:

    - Visit the [Firebase Console](https://console.firebase.google.com/) and create a new project.
    - Enable Firebase Authentication in the project settings.
    - Configure the project with email/password method.
    - Obtain the Firebase configuration object (containing the API keys and other details).

1.  Configure the Firebase credentials:

    - Go to `src/firebase/index.ts`
    - Replace `firebaseConfig = {...}` with yours.

1.  Start the development server:

    ```sh
    npm run dev
    ```

1.  Open your browser and visit http://localhost:3000 to access the :VauLT: application.

## License

Distributed under the [MIT License](https://opensource.org/license/mit/). See [`LICENSE`](/LICENSE) for more information.
