import React from 'react'
import styles from '@/components/myProduct/product.module.scss' // 导入 CSS Modules 文件

const QuantityButton = () => {
  return (
    <div className={styles.quantitySelector}>
      {/* 使用 CSS Modules 样式 */}
      <button className={styles.quantityButton}>-</button>
      <span className={styles.quantityDisplay}>1</span>
      <button className={styles.quantityButton}>+</button>
    </div>
  )
}

export default QuantityButton
