/* eslint-disable no-console */
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({
  path: './config.env',
});
const DB =
  'mongodb+srv://ankur:<PASSWORD>@natours.vr1povc.mongodb.net/?retryWrites=true&w=majority'.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD,
  );

mongoose.connect(DB).then(() => console.log('DB connection successful!'));

const app = require('./app');

console.log(app.get('env'));
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}....`);
});
