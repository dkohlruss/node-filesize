const express = require('express');
const multer = require('multer');

const app = express();
const port = process.env.PORT || 3000;

const upload = multer({ dest: 'uploads/' });

app.use(express.static(__dirname + '/public'));

app.post('/', upload.single('file'), (req, res, next) => {
  // req.file is supposed to be the 'file' file
  let fileSize = req.file.size; //req.file is undefined
  console.log(req.file);
  console.log(req.body); // req.body is also undefined

  res.send({size: fileSize});
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
