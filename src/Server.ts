import config from './config/Config';
import app from './app/App';
import { Logging } from './config/Logging';
const NAMESPACE = 'Server';

app.listen(config.PORT, config.HOSTNAME, config.BACKLOG, () => {
    new Logging().infoMessage(NAMESPACE, `Server is running on PORT:${config.PORT}`);
});
