const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello I am a server side created by Ankur Halder');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}....`);
});
