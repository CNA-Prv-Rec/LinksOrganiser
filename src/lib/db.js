import sql, { ConnectionPool } from 'mssql';

const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: process.env.DB_SERVER,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

let connection; //this is really a pool
export const createConnection = async() => {
    try{
      console.log(process.env.DB_PWD)
        connection = sql.connect(sqlConfig)
        return connection
    }
    catch(err) {
        console.log(err)
    }
}

