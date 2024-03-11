import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import Logo from '../../../public/logo.jpeg'
const NewArivel = () => {
  return (
    <div className={styles.new_arivel_container}>
        <div className={styles.arivel_logo}>
          <Image src={Logo} alt='Not Found' className={styles.arival_img}/>
        </div>
        <div className={styles.arival_text}>
          <span>#New Arrivals</span>
          <p>
Introducing our latest arrivals, curated just for you! Dive into a world of style and sophistication with our newest collection. From trendy apparel to chic accessories, we've got everything you need to elevate your wardrobe this season.</p>
          <button>Shop Now</button>
        </div>
    </div>
  )
}

export default NewArivel