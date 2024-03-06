import { Link } from "react-router-dom";
import styles from './nasiPsi.module.css';

const OurDogs = () => {
  return (
    <article className={styles.dogs}>
      <div> 
        <Link to="/ariana"> <h3>♀ Ariana of Whisky Vidnavská záře</h3> <img src="/images/ariana.png" alt="" /></Link>
        
      </div>
      <div> 
        <Link to="/queenie"> <h3>♀ Queenie of Rose Vidnavská záře</h3> <img src="/images/queenie.png" alt="" /> </Link>
        
      </div>
      <div> 
        <Link to="/isaac"> <h3>♂ Isaac</h3> <img src="/images/isaac.jpeg" alt="" /></Link>
        
      </div>
    </article>
  )
}
export default OurDogs;