# Installation

## 1. Create an Account and Obtain API Keys

1. First, create an account at [Schiphol Developer Portal](https://developer.schiphol.nl).
2. Once registered, obtain an API key for the Flight API v4.

## 2. Configure Environment Variables

1. In the root folder of the project, create a `.env` file.
2. Fill out the `.env` file with the following information:

    ```bash
    APP_ID=your_app_id_here
    APP_KEY=your_app_key_here
    MONGO_CONNECTION_STRING=your_mongo_connection_string_here
    ```

    Replace `your_app_id_here`, `your_app_key_here`, and `your_mongo_connection_string_here` with your actual credentials.

## 3. Install Dependencies

Run the following command to install the necessary Node.js modules:

```bash
npm install
```

## 4. Start the Application

Once the dependencies are installed, start the application using the following command:

```bash
npm start
```

# Editing the Frontend

## 1. Install Frontend Dependencies

1. Navigate to the `frontend` folder in your project.
2. Install the necessary Node.js modules by running the following command:

    ```bash
    npm install
    ```

## 2. Start the Backend and the Development Server

1. After installing the modules, start the development server using the following command:

    ```bash
    npm run dev
    ```

2. Navigate to the root folder of the project and run the following command to start the api:
   
     ```bash
    npm start
    ```

3. You can now make your changes in the project.

## 3. Build the Project

1. Once you have made your changes, run the following command to build the project:

    ```bash
    npm run build
    ```

2. A folder named `dist` will be created if it doesn't already exist. If the folder exists, it will be updated with the latest build.


