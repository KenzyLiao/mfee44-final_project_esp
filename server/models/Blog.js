import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  return sequelize.define(
    // 定義blog資料表欄位
    'Blog',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true, // primary key
        autoIncrement: true, // 自動遞增
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      tableName: 'blog', //直接提供資料表名稱  1-1 -創建
      timestamps: true, // 使用時間戳
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
      createdAt: 'created_at', // 建立的時間戳
      updatedAt: 'updated_at', // 更新的時間戳
    }
  )
}
