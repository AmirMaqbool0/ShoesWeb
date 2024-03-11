'use client'
import styles from './styles.module.css'
import Image from 'next/image'
import Logo from '../../../public/logo.jpeg'
import useFetch from '@/hooks/useFetch'
import { useRouter } from 'next/navigation'


const Card =  () => {
    const {data} = useFetch('https://the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com/search?query=Adidas%20Forum')
    const sixproduct = data.slice(10,16)
   const router = useRouter()

  return (
    <div className={styles.cards}>
{
    sixproduct?.map((item)=>{
        return(
            <div className={styles.car_box}>
            <div className={styles.card_logo}>
                <img src={item?.image} alt="" />
    
            </div>
            <div className={styles.brand_name}>
             <span>{item?.title}</span>
             <p>With design elements inspired by the movement and motion of city life,</p>
             <button onClick={()=> router.push(`/details/${item?.id}`)}>Shop Now</button>
            </div>
        
        </div>

        )
    })
}
    </div>
    
  )
}

export default Card