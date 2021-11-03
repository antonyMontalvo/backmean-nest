export default () => ({
  nodeEnv: process.env.NODE_ENV,
  port: parseInt(process.env.PORT, 10) || 8080,
  mongodbUri: process.env.MONGODB_URI,
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USER,
    database: process.env.DB_NAME,
    synchronize: process.env.DB_SYNC,
    logging: process.env.DB_SHOW_QUERIES,
  },
  jwtSecret: process.env.JWT_KEY,
  sqlStatus: process.env.SQL,
});
