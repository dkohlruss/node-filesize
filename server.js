const express = require('express');
const multer = require('multer');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({
  storage
});

app.set('view engine','hbs');

app.get('/', (req, res) => {
  res.render('index.hbs');
})

app.post('/upload', upload.single('file'), (req, res) => {
  // req.file is the file file
  let fileSize = req.file; //req.file.size
  console.log(req.file);
  console.log(req.body);

  res.render('upload.hbs', {
    fileSize
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
