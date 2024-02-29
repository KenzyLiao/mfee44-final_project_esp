// 后端代码
import express from 'express'
const router = express.Router()
const express = require('express');
const mysql = require('mysql');

const app = express();

// 创建与MySQL数据库的连接
const connection = mysql.createConnection({
  host: 'your_mysql_host',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'your_database_name'
});

// 连接到MySQL数据库
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// 创建GET路由处理程序，用于获取商品信息
app.get('/api/products', (req, res) => {
  // 执行MySQL查询，获取商品信息及相关信息
  const query = `
    SELECT 
      p.product_id, p.name, p.product_type, p.price, p.description, p.image, p.created_at, p.updated_at, p.valid,
      g.brand_id, g.nib_id, g.material_id, g.color_id, g.stock, g.series,
      c.color_name,
      b.brand_name,
      n.nib_name,
      m.material_name
    FROM 
      product AS p
      INNER JOIN general_product AS g ON p.product_id = g.product_id
      INNER JOIN color AS c ON g.color_id = c.color_id
      INNER JOIN brand AS b ON g.brand_id = b.brand_id
      INNER JOIN nib AS n ON g.nib_id = n.nib_id
      INNER JOIN material AS m ON g.material_id = m.material_id
  `;
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    // 将查询结果转换为JSON格式并发送给前端
    res.json(results);
  });
});

// 监听端口
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
