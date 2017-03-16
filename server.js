const express = require('express');
const multer = require('multer');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

app.set('view engine','hbs');

app.get('/', (req, res) => {
  res.render('index.hbs');
})

app.post('/', upload.single('file'), (req, res) => {
  // req.file is the file file
  let fileSize = req.file; //req.file is undefined
  console.log(req.file);
  console.log(req.body); // req.body is also undefined

  res.send({fileSize});
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
