import cors from 'cors';
import express from 'express';
import router from './routes/index';
import config from './config/config';

const start = () => {
  try {
    const app = express();

    app.use(cors());
    app.use('/api', router)
    app.use(express.json());

    app.listen(config.server_port, () => console.log(`server has been started on port ${config.server_port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
