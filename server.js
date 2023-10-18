/* eslint-disable no-console */
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

dotenv.config({
  path: './config.env',
});

const DB =
  'mongodb+srv://ankur:<PASSWORD>@natours.vr1povc.mongodb.net/natours?retryWrites=true&w=majority'.replace(
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
const Tour = mongoose.model('tour', tourSchema);

const testTour = new Tour({
  name: 'The Park Camper',
  price: 997,
});
testTour
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log(err);
  });

console.log(app.get('env'));
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}....`);
});
