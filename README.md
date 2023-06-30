# E_Commerce_Backend

![badmath](https://img.shields.io/badge/License-MIT-yellow)<br>

## Description

This project is a fullstack Tech Blog app, where users can login or register as a new user, once logged in the user can create blogs, comment on blogs and delete the blogs that they have created and even update that blog. The app is super simple to use so it is very user friendly!

## Table of Contents

- [Link](#link)
- [ScreenShot](#screenshot)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [API](#api)

## Link

Below is a link to a walk through video demonstrating the app in use:<br>
[Skylines_Tech_Blog](https://drive.google.com/file/d/1fi8mCVk09SgNTeRjO37YLzJtCNW6_J_J/view)<br>
[Projects_Repo](https://github.com/garciajv86/Skylines-Tech-Blog)

## ScreenShot
DataBase Design:
<br>

![DataBase_Screenshot](./Assets/e_CommerceDB_Design.png)

<br>

Insomnia:
<br>
![Insomnia_Screenshot](./Assets/InsomniaScreenshot.png)


## Installation

This app requires the MySQL database and Insomnia to be installed on your computer, I provided links below.<br>
[MySQL_Download](https://dev.mysql.com/downloads/mysql/)
<br>
[Insomnia_Download](https://docs.insomnia.rest/)

## Usage

To use this app you must first log into your MySQL database and run the schema.sql file located in the db folder. Once you have ran the schema you can than quit MySQL. Now you must run the command npm run seed to seed your database. Once the database is seeded you then can run the command npm start to allow you the server to start listening. Once the server is listening you can open the insomnia app and start making request, a demo of how to do so is in the link above under Link titled E_Commerce_Backend.

## Credits

- Joshua V. Garcia

- [My GitHub Profile](https://github.com/garciajv86)

## License

![badmath](https://img.shields.io/badge/License-MIT-yellow)<br>
This project is protected under the [MIT](https://choosealicense.com/licenses/mit/) License.

## Badges

![badmath](https://img.shields.io/badge/-JAVASCRIPT-blue)<br>
![badmath](https://img.shields.io/badge/-Node.JS-brightgreen)
![badmath](https://img.shields.io/badge/-NPM-success)<br>
![badmath](https://img.shields.io/badge/-Inquirer-success)
![badmath](https://img.shields.io/badge/-Sequelize-success)
![badmath](https://img.shields.io/badge/-Express-success)
![badmath](https://img.shields.io/badge/-Dotenv-success)
![badmath](https://img.shields.io/badge/-MySQL2-success)<br>
![badmath](https://img.shields.io/badge/-MySQL-blue)

## API

MySQL2, express, sequelize, and dotenv was the NPM packages used for this project

- [MySQL2 Docs](https://www.npmjs.com/package/mysql2#installation)
- [Sequelize Docs](https://sequelize.org/docs/v6/)
- [Express Docs](https://expressjs.com/en/4x/api.html)
- [Dotenv Docs](https://www.npmjs.com/package/dotenv)
