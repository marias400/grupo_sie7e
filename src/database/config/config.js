// Config de producción: si existe DATABASE_URL (o MYSQL_URL) la usamos directo,
// si no, armamos la conexión con variables sueltas (las que Railway inyecta
// automáticamente para su plugin de MySQL: MYSQLHOST, MYSQLUSER, etc.)
const connectionString = process.env.DATABASE_URL || process.env.MYSQL_URL;

const productionConfig = connectionString
  ? {
      use_env_variable: process.env.DATABASE_URL ? "DATABASE_URL" : "MYSQL_URL",
      dialect: "mysql",
      dialectOptions: {
        // Poné DB_SSL=true en las variables de entorno si tu proveedor de MySQL lo exige
        ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : undefined,
      },
    }
  : {
      username: process.env.MYSQLUSER || process.env.DB_USER,
      password: process.env.MYSQLPASSWORD || process.env.DB_PASS,
      database: process.env.MYSQLDATABASE || process.env.DB_NAME,
      host: process.env.MYSQLHOST || process.env.DB_HOST,
      port: process.env.MYSQLPORT || process.env.DB_PORT || 3306,
      dialect: "mysql",
    };

module.exports={
  "development": {
    "username": "root",
    "password": "root",
    "database": "fraterno",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": productionConfig
}
