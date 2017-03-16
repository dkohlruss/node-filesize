const express = require('express');
const multer = require('multer');

const app = express();
const port = process.env.PORT || 3000;

const upload = multer({ dest: 'uploads/' });

app.use(express.static(__dirname + '/public'));

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
