# Devdemy - Free Coding Courses

v1.0.0 - Test Phase (BC190205829, Saqlen Raza Mehdi)

Devdemy is an online academy built for developers specifically. This project is built with nextjs technology.

## Getting Started

In order to run and test the app you need to install the following packages/software.

1. Node.js + NPM : Download Node.js stable version and install on your machine.
2. Download MongoDB Compass to install and track the MongoDB databases locally. Visit MongoDB official website for MSI package.

### Extract The Zip File

Please extract the downloaded zip file and open the `devdemy` folder in VSCode or any other code editor.

Open terminal inside the directory and type following commands:

```bash
code .  # To open the project folder in vscode
```

### Install the dependencies

To install the dependencies, run the following command in the terminal.

```bash
npm install
```

### Run the app

To start the development server, run following command.

```bash
npm run dev
# or
yarn dev # If you're using yarn instead.
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Database

The database used in the project is MongoDB Atlas which is a cloud MongoDB database.
You can find the Database URI in `.env.local` file as an environment variable `MONGODB_URI`.

By using this database URI, the database can be accessed via MongoDB compass or on the cloud.

### Demo credentials

In order to login to the app, you can use the following credentials.

Email : test@gmail.com
Password: test123
