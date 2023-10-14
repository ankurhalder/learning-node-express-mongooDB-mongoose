const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello I am a server side created by Ankur Halder',
    app: 'Natours',
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}....`);
});
