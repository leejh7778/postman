const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./database/database');
const app = express();
const PORT = 3000;

app.use(cors()); // front에 적용
app.use(bodyParser.json());

app.use(require('./routes/getRoute'));
app.use(require('./routes/postRoute'));
app.use(require('./routes/deleteRoute'));
app.use(require('./routes/updateRoute'));

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
