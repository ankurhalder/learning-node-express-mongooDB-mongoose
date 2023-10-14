const express = require('express');
const app = express();

// my first get method
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello I am a server side created by Ankur Halder',
    app: 'Natours',
  });
});
// my first post method
app.post('/', (req, res) => {
  res.send('You can post to this endpoint created by Ankur Halder...');
});
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}....`);
});
