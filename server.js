/* eslint-disable no-console */
const dotenv = require('dotenv');

dotenv.config({
  path: './config.env',
});
const app = require('./app');

console.log(app.get('env'));
// console.log(process.env);
const port = process.env.PORT || 8000;
// const port = 3001;
app.listen(port, () => {
  console.log(`App running on port ${port}....`);
});
