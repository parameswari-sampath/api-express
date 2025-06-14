// server.js
import app from './app.js';
import { APP_PORT } from './src/config/index.js';

app.listen(APP_PORT, () => {
  console.log(`Server is running on port ${APP_PORT}`);
});
