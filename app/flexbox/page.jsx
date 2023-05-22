
import React from 'react'
import styles from "./flexbox.module.css"


const flexbox = () => {
  return (
    <div className={styles.pricingContainer }>
    <div className={styles.pricingPlan }>
      <h3>Basic</h3>
      <h1>$11.99/month</h1>
      <ul className={styles.listStyle}>
        <li>✅10gb storage</li>
        <li>✅1 user</li>
        <li>🚫 Support</li>
      </ul>
      <button className={styles.button}> Sign up </button>
      </div>
       <div className={styles.pricingPlan }>
      <h3>Standard</h3>
      <h1>$19.99/month</h1>
      <ul className={styles.listStyle}>
        <li>✅50gb storage</li>
        <li>✅5 user</li>
        <li>✅E-mail & phone support</li>
      </ul>
      <button className={styles.button} > Sign up </button>
      </div>
       <div className={styles.pricingPlan }>
      <h3>Premium</h3>
      <h1>$49.99/month</h1>
      <ul className={styles.listStyle}>
        <li>✅100gb storage</li>
        <li>✅10 user</li>
        <li>✅24/7 Support</li>
      </ul>
      <button className={styles.button} > Sign up </button>
      </div>

</div>
  )
}

export default flexbox