import { Link } from "react-router-dom";
import "../poppins.css";
import styles from './navigation.module.css';
import { useEffect, useMemo, useState } from "react";

const Navigation = () => {

    const [showBackground, setShowBackground] = useState(false);

    const handleScroll = () => {
        setShowBackground(window.scrollY > 0);
    };


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const navigationClass = useMemo(() => {
        return `${styles.menuWrapper} poppins-semibold ${showBackground ? styles.withBackground : ""}`;
    }, [showBackground])

    return (
        <div className={navigationClass}>
            <div className={styles.logo}>
                <Link to="/" className={styles.link}><img className={styles.logo} src="/images/favicon.png"/> </Link>
            </div>
            <div className={styles.space} />
    
            <div className={styles.menu}>
                <Link to="/about" className={styles.link}>O plemeni Samojed</Link>
            
    
                <div className={styles.dropdown}>
                    <Link to="/nasi-psi" className={styles.link}>
                    <button className={`${styles.dropbtn} poppins-semibold`}>Naši psi </button>
                    </Link>
        
                    <div className={styles.dropdownContent}>
        
                    <Link to="/ariana" className={styles.link}>
                        Ariana of Whisky Vidnavská záře
                    </Link>
        
                    <Link to="/queenie" className={styles.link}>
                        Queenie of Rose Vidnavská záře
                    </Link>
        
                    <Link to="/isaac" className={styles.link}>
                        Isaac
                    </Link>
        
                    </div>
                </div>
        
                <div className={styles.dropdown}>
                    <Link to="/stenatka" className={styles.link}>
                    <button className={`${styles.dropbtn} poppins-semibold`}>Štěňátka</button></Link>
        
                    <div className={styles.dropdownContent}>
                    <Link to="/vrh-a" className={styles.link}>
                        Vrh A/plánujeme 2025</Link>
                    </div>
        
                </div>
        
                <Link to="/kontakty" className={styles.link}>Kontakt</Link>
    
            </div> 
        </div>
    )
}

export default Navigation;