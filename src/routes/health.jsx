import { Link } from "react-router-dom";
import "../poppins.css";
import styles from "./health.module.css";

const Health = () => {
    return (
      <>
        <article className={styles.health}>
          <div className={styles.healthNavi}>
            <p>Pohybový aparát</p>
            <p>Hlava</p>
            <p>Ocas</p>
          </div>
          <div>
            <h1>Pohybový aparát</h1>
            <div className={styles.stance}>
              
              <img className={styles.imgDefault} src="/images/postoj.gif" alt="" />
              
              <div>
                <h4>Postoj</h4>
                <p>Postoj psa musí být rovný, bez vybočených či vbočených tlapek.</p>
                <p>Důležitý je přístup ke štěňátku - dostatek přirozeného pohybu, nekluzká podlaha</p>
                <p>
                Úzký a sbíhavý postoj může být řešen posilněním svalstva hrudíku. Hrudník posiluje pes při běhu v hlubokém sněhu, vyšší vodě (hydroterapie), pohyb je namáhavý a pes při něm rozšiřuje postavení nohou. Dejte pozor na tahání, nepomáhá při řešení úzkého hrudníku.
                </p>
                <p>Vybočené lokty opět řešíme posilněním svalů hrudníku a pletence hrudíkové končetiny. Ideální korekcí je běh z kopce, plavání i běh u kola. Neřešíme vadu taháním ani běháním do kopce.</p>
              </div>
            </div>
            
            <div className={styles.stance}>
              <div>
                <img className={styles.imgDefault} src="/images/pohyb.gif" alt=""/>
                <img className={styles.running} src="/images/beh.jpeg" alt="" />
              </div>
              <div>
                <h4>Pohyb</h4>
                <p>V klusu a běhu správně protahuje končetiny, věnujte pozornost mimochodu - přední i zadní packa jdou stejným směrem v danou chvíli.</p>
                <p>Pohyb nohou je správně široký a rovný.</p>
                <p>Úzký pohyb zadních končetin cvičíme na balančních podložkách posilněním zadních noh a svalstva pánve. Opět lze využít hydroterapii, také pomáhá nechat psa volně běhat v jeho maximální rychlosti - uvolnění šlach a svalstva. </p>
                <p>Mimochod není až tak zdravotní problém, jako spíš estetický na výstavách. Mimochodem si pes zlehčuje chůzi, může být způsobem nedostatečným pohybem v mládí, nebo u starších jedinců kdy je pro ně mimochod prostě pohodlnější. Nápravu řešíme zvýšením kondice, poté může pes běhat u kola či u nohy na měkkém terénu. Cval už je příliš, proto si rychlost neustále hlídáme a pohyb psa kontrolujeme. Pokud přejde do mimochodu, psa vyrušíme dotekem, napnutím vodítka - pes změní krok z mimochodu na klus. Během tréningu psa chválíme a odměňujeme. </p>
                <p>Krátký krok odstraníme treningem pohybu v maximální rychlosti v kluse. Postupně zvyšujeme frekvenci klusu tím bude pes využívat největší rozsah pohybu a trochu se prodlouží krok a uvolní svaly pánve a zadní části zad. </p>
              </div>
            </div>
            <div className={styles.stance}>
              
              <img className={styles.pastern} src="/images/proslap.jpeg" alt="" />
              <div>
                <h4>Prošlap</h4>
                <p>Zdravě vyvinuté packy jsou silné, osvalené a se správným úhlem.</p>
                <p>Prošlapu se lze vyhnout opět během vývoje štěňátka, osvalení a zesílení tlapek.</p>
                <p>Měkké nadprstí, neboli prošlap řešíme posílením svalů tlapky. Vhodné je plavání, hydroterapie. Naopak se vyhněme skokům, dlouhému cvalu, procházkám na tvrdém terénu.</p>
              </div>
              
            </div>
            
            <div className={styles.stance}>
              <img className={styles.dysplasia}src="/images/dysplazie.jpeg" alt="" />
              <div>
                <h4>Dysplazie (DKK)</h4>
                <p>Může být dědičná, ale také způsobena rychlým růstem štěňátka - vyšší hmotností, nesprávným pohybem i chybějícími minerály a vitamíny ve stravě.</p>
                <p>Podezření na dysplazii či jiné ortopedické problémy vždy konzultujte se svým veterinářem. Dysplazie je diagnostikována pomocí RTG snímků ve správné poloze psa. Varovné signály by měly být: snížená aktivita, problémy se vstáváním, nechuť k pohybu.</p>
                <p>Léčba je možná, avšak i přeléčený jedinec by neměl být použit v chovu. Používají se konzervativní metody jako fyzioterapie, protizánětlivé léky, kontrola hmotnosti. Chirurgická léčba dle stádia DKK a stáří psa. </p>
              </div>
            </div>
          </div>

          <div>
            <h1>Hlava</h1>
            <div>
              <img className={styles.imgDefault} src="/images/hlava.gif" alt="" />
            </div>

          </div>

          <div>
            <h1>Ocas</h1>
            <div>
              <img className={styles.tail} src="/images/ocas.jpeg" alt="" />
            </div>

          </div>
        </article>
      </>
    )
  }
  export default Health;