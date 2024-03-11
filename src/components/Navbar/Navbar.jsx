'use client'
import { useRouter } from 'next/navigation'
import styles from './styles.module.css'
import { UserRoundCheck ,ShoppingCart} from 'lucide-react'

const Navbar = () => {
  const router = useRouter()
  return (
    <div className={styles.nav_container}>
        <div className={styles.navbar_logo}>
         <span onClick={()=> router.push('/')}>AH Store</span>
        </div>
        <div className={styles.navbar_icon}>
        <UserRoundCheck size={24} color={'black'} />
        <ShoppingCart size={24} color={'black'} onClick={()=> router.push('/addtocart')}/>
        </div>
    </div>
  )
}

export default Navbar