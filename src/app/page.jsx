
import Navbar from "@/components/Navbar/Navbar";
import styles from '../app/page.module.css'
import Slider from "@/components/Slider/Slider";
import OurQuality from "@/components/OurQuality/OurQuality";
import Card from "@/components/Card/Card";
import NewArivel from "@/components/NewArivel/NewArivel";
import Footer from "@/components/Footer/Footer";

export default async function Home() {


  return (
    <main className={styles.main}>
      <Navbar/>
      <Slider/>
      <OurQuality/>
      <div className={styles.top_product}>
       <div className={styles.top_product_heading}>
        <h1>Our Top <span>Product</span></h1>
       </div>
       
        <Card/>
       
       
      </div>
      <NewArivel/>
      <Footer/>
  {/* <h1>Amir Maqbool</h1> */}
    </main>
  );
}
