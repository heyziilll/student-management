# Student Management System

A student directory built with Node.js, Express, EJS, and MySQL.

## Requirements

- Node.js and npm
- MySQL

## Setup

1. Install dependencies with `npm install`.
2. Run `schema.sql` in MySQL Workbench or another MySQL client.
3. If your MySQL root account has a password, update the `password` value in `app.js`.
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

The `.env` file is ignored by Git. The current app reads its database settings
from `app.js`; keep local credentials private and do not commit them.
