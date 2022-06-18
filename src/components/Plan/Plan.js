import React from 'react'
import styles from './Plan.module.css'
const Plan = ({title,price,isCurrent=false,addPlan}) => {
  return (
    <div className={styles.item}>
    <p>{title}<br/> {price}</p>
    <button onClick={()=>addPlan(title)} className={isCurrent?styles.currentPackage:styles.btn}>{isCurrent?'Current Package':'Subscribe'}</button>
  </div>
  )
}

export default Plan