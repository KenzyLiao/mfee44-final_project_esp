const jwt = require('jsonwebtoken');
const db = require('../config/db');

exports.getUserProfile = (req, res) => {
  const token = req.headers.authorization; // 從請求頭中獲取JWT

  console.log('收到的令牌:', token); // 輸出接收到的令牌

  // 驗證JWT
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error('驗證JWT時出錯:', err);
      console.log('令牌:', token); // 打印JWT令牌
      console.log('解碼後的內容:', decoded); // 打印解碼後的內容
      return res.status(401).json({ message: '未經授權' });
    }
    
    console.log('解碼後的內容:', decoded); // 打印解碼後的內容

    const id = decoded.id; // 從JWT中獲取用戶ID

    // 根據用戶ID查詢資料庫中的用戶資料
    db.query('SELECT * FROM users WHERE id = ?', [id], (error, results, fields) => {
      if (error) {
        console.error('查詢用戶時出錯:', error);
        return res.status(500).json({ message: '內部伺服器錯誤' });
      }
      
      const user = results[0]; // 獲取用戶資料
      res.json(user); // 返回用戶資料給前端
    });
  });
};
