import { Link } from "react-router-dom";
import "../poppins.css";
import "../index.css";
import "../App.css";

import styles from "./contact.module.css";

const Contact = () => {
    return (
        <article className={styles.contact}>
            <div className={styles.address}>
                <h3 className="poppins-semibold">Adresa</h3>
                <p>Marta Kuchařová</p>
                <p>Ostrovní 1223/4</p>
                <p>Olomouc</p>
                <p>77900</p>
            </div>
            <div className={styles.phone}>
                <h3 className="poppins-semibold">Kontakty</h3>
                <p>+420 728 704 422</p>
                <p>marticka.kucharova@gmail.com</p>
            </div>
            <div>
                <p>Můžete mě kontaktovat také na sociálních sítích</p>
            </div>
            
        </article> 
    )
}

export default Contact;