### Mini Message Board
This project creates a mini message board where a user can post new messages by specifying a name or as an anonymous guest. <br> 
- The server is designed with node express and a single router. 
- Pages are rendered using view templates with `ejs`.
- Controller logic is not separated since it's pretty simple within the router.
- Data is saved as a simple list of objects. Because the data is saved server-side, it persists after refreshing the page.
- Launch the app with `npm run start` or use `node --watch app` to run the app in debug mode.
- Access the app at `http://localhost:3000/mini`


### v2 update
- installed the `pg` and `dotenv` libraries for using a postgres db
- Provisioned a railway postgres db. Make sure the db and express server are within the same project
    1. Create a new variable/secret in the express service you want to connect to this database.
    2. Assign it the following value: `${{ Postgres.DATABASE_URL }}`
    3. Use the variable in your application code.
- Created a js script `model/populateDB.js` to create the table and insert dummy values once the server is start.
- Updated the `package.json` start command to use `"start": "node --omit=dev model/populateDB && node index"`