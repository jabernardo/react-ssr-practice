import express from 'express';
import renderer from './helpers/renderer';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.end(renderer(req));
});

app.listen(port, () => {
  console.log(`Listening on ${port}`)
});
