import React from 'react'
import styles from './styles.module.css'
import AddtoCardBox from '@/components/AddtoCardBox/AddtoCardBox';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
const page = () => {
  return (
    <div>
      <Navbar/>
        <AddtoCardBox/>
        <Footer/>
    </div>
  )
}

export default page;