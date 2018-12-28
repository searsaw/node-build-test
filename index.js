import http from 'http';
import express, { Router } from 'express';

const app = express();
const router = Router();

router.get('/foo', (req, res) => {
  res.json({ msg: 'You have hit the foo endpoint' });
});

router.get('/bar', (req, res) => {
  res.json({ msg: 'You have hit the bar endpoint' });
});

app.use(router);

const server = http.createServer(app);

server.listen('8000', () => {
  console.log('The server is listening on port 8000');
});
