import config from 'config';

class Config {
  server_port = config.get('SERVER_PORT');
  db_name = config.get('DB_NAME');
  db_host = config.get('DB_HOST');
  db_port = config.get('DB_PORT');
  db_user = config.get('DB_USER');
  db_password = config.get('DB_PASSWORD');
}

export default new Config();
