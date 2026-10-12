# Student Management System

A student directory built with Node.js, Express, EJS, and MySQL.

## Requirements

- Node.js and npm
- MySQL

## Setup

1. Install dependencies with `npm install`.
2. Run `schema.sql` in MySQL Workbench or another MySQL client.
3. Set database environment variables in PowerShell if your MySQL settings differ from the local defaults:

   ```powershell
   $env:DB_HOST = "localhost"
   $env:DB_USER = "root"
   $env:DB_PASSWORD = "your-local-password"
   $env:DB_NAME = "student_management"
   ```

   Keep real passwords private. These PowerShell variables apply to the current terminal session.
4. Start the server with `npm start`.
5. Open <http://localhost:3000>.

## Project structure

```text
student-management/
├── public/
│   └── css/
│       └── style.css
├── views/
│   ├── partials/
│   │   ├── footer.ejs
│   │   └── header.ejs
│   ├── add.ejs
│   ├── edit.ejs
│   └── index.ejs
├── .gitignore
├── app.js
├── package-lock.json
├── package.json
└── schema.sql
```

The app reads database settings from environment variables and uses local
defaults when they are not set. `.env` is ignored by Git; never commit a file
containing real credentials.
