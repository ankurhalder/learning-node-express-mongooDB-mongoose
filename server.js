/* eslint-disable no-console */
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

dotenv.config({
  path: './config.env',
});

const DB =
  'mongodb+srv://ankur:<PASSWORD>@natours.vr1povc.mongodb.net/?retryWrites=true&w=majority'.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD,
  );

mongoose
  .connect(DB)
  .then(() => console.log('DB connection successful!'))
  .catch((err) => console.log(err));

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
});
const Tour = mongoose.model('Tour', tourSchema);

console.log(app.get('env'));
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}....`);
});
