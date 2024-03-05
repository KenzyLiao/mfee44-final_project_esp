import mysql from 'mysql2/promise.js'

export async function createConnection() {
  return await mysql.createConnection({
    host: 'localhost',
    user: 'final_project_test',
    password: '12345',
    database: 'final_project_test',
  })
}
