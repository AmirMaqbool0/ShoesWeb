import React from "react";
import styles from "./styles.module.css";
const Footer = () => {
  return (
    <div className={styles.footer_container}>
        <div className={styles.row1}>
      <div className={styles.company_text}>
        <span>AH Store</span>
        <p>
          Welcome to a world where style meets comfort in every step. Our shoe
          company is dedicated to crafting footwear that not only looks good but
          also feels amazing from the moment you put them on.
        </p>
      </div>
      <div className={styles.company_links}>
        <div className={styles.links}>
            <h1>Company</h1>
            <span>About Us</span>
            <span>Contact Us</span>
            <span>Latest</span>
            <span>Shop</span>
        </div>
        <div className={styles.links}>
            <h1>Help Links</h1>
            <span>Order Status</span>
            <span>Delivery</span>
            <span>Shiping</span>
            <span>Shop</span>
        </div>
        <div className={styles.links}>
            <h1>Usefull Links</h1>
            <span>Free Gift</span>
            <span>Gift Cards</span>
            <span>Sale</span>
            
        </div>
      </div>
      </div>
      <div className={styles.mini_footer}> 
       <span>© 2024 NorthStar eCommerce</span>
      </div>
    </div>
  );
};

export default Footer;
