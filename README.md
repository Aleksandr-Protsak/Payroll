# PayRoll

The project of salary accrual on the basis of the timesheet and staff list with using the MongoDB database.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm install`

Establishing dependencies from `payroll` - directory.

### `npm start`

Runs the app in the development mode from `payroll` - directory. `Сlient's side`<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run webpack-devserver`

Runs the app in the development mode from `payroll/server` - directory. `Server side`<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

**The application also needs a local MongoDB database.**

Create a new database called `employee` or change database name to your own in the configurations `etc/config.json` row - `name`<br/>
You must create three collections in database:
    1. user;
    2. timesheet;
    3. user-data-list;

Create a user by the scheme specified in `server/model/User.js`

