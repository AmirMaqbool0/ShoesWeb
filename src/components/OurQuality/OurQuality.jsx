import React from 'react'
import styles from './styles.module.css'
import { PackageCheck ,Truck,Medal} from 'lucide-react'
const OurQuality = () => {
  return (
    <div className={styles.our_quality_container}>
        <div className={styles.our_quality_headinng}>
            <span>Why Shop With Us</span>
        </div>
        <div className={styles.our_quality_boxs}>
        <div className={styles.our_quality_box}>
        <PackageCheck color='white' size={40}  />
           <span>Fast Delivery</span>
           <p>Experience lightning-fast delivery straight to your doorstep!</p>
        </div>
        <div className={styles.our_quality_box}>
        <Truck color='white' size={40} />
           <span>Free Shiping</span>
           <p>Experience lightning-fast delivery straight to your doorstep!</p>
        </div>
        <div className={styles.our_quality_box}>
        <Medal color={'white'} size={40}/>
           <span>Best Quality</span>
           <p>Experience lightning-fast delivery straight to your doorstep!</p>
        </div>
        </div>
        
    </div>
  )
}

export default OurQuality