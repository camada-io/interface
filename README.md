# Camada's Interface

Welcome to Camada's Interface! This project provides instructions on how to set up and run Camada's Interface.

## Installation

Before you can run the frontend, please follow these installation instructions:

### Step 1: Install pnpm

Camada's frontend uses pnpm as the package manager. If you don't have pnpm installed globally, you can install it using npm:

```bash
npm install -g pnpm
```

### Step 2: Install the Requirements

After installing pnpm, navigate to the project's root directory and install the project dependencies by running:

```bash
pnpm install
```

### Step 3: Create an .env File

In order to configure the environment for the frontend, create an `.env` file in the root of the project directory following the same pattern as the provided `.env.example` file. 

### Step 4: Run the Interface

To run the application, execute the following steps:

3.1 For a development envinroment run:
```bash
pnpm dev 
```

3.2 For a production envinroment run:
```bash
pnpm build
pnpm start
```


This command will start the backend server, enabling the application to handle requests and serve data.
