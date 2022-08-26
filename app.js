const mysql = require('mysql2')
const inquirer = require('inquirer')
const cTable = require('console.table');

const db = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "mynewpassword",
      database: "company_db",
    },
  );