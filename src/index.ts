import * as express from 'express';

const PORT = 8080;
const app = express.default();
const router = express.Router();

router.get('/hello', (req, res) => {
  res.send('Hello world');
});

app.use('/', router);

app.listen(PORT, () => {
  console.log('server is working on port', PORT);
});
