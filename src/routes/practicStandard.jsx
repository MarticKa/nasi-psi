import { Link } from "react-router-dom";
import "../poppins.css";
import "../index.css";
import "../App.css";
import styles from "./practicStandard.module.css";

const PracticStandard = () => {
  return (
    <>
      <article className={styles.health}>
        <div>
          <h1 className="poppins-extrabold">Standard praktickýma očima</h1>
          <p>Můj pohled na standard, který se víc zaměřuje na správný vývoj již od štěňátka a jak lze předejít některým nešvarům správnou výživou a pohybem během růstu a vývoje. Samozřejmě na všechno má vliv genetika, tu nejsme schopni obejít a spousta věcí není ještě dopodrobna prozkoumána - jak se co přenáší, proč, další vlivy, ob generaci či rovnou potomci. Berte tak prosím text níže s rezervou, není to návod jak si "vypěstovat, vychovat" nejlepšího a nejzdravějšího pejska za každou cenu.  </p>
        </div>
        <div className={styles.fci}>
          <Link to="/standard">

            <h5 className={`${styles.button} poppins-medium`}>
              Standard dle FCI <img src="/images/arrow1.png" alt="" />
            </h5>
          </Link>
        </div>

        <div className={styles.stance}>
          <h2 className="poppins-semibold">Pohybový aparát</h2>

          <div className={styles.stance}>
            <div className={styles.floatLeft}>
              <img className={styles.img} src="/images/postoj.gif" alt="" />
            </div>
            <div>
              <h4 className="poppins-regular"> - Postoj -</h4>
              <p>Postoj psa musí být rovný, bez vybočených či vbočených tlapek.</p>
              <p>Důležitý je přístup ke štěňátku - dostatek přirozeného pohybu, nekluzká podlaha</p>
              <p>
                Úzký a sbíhavý postoj může být řešen posilněním svalstva hrudíku. Hrudník posiluje pes při běhu v hlubokém sněhu, vyšší vodě (hydroterapie), pohyb je namáhavý a pes při něm rozšiřuje postavení nohou. Dejte pozor na tahání, nepomáhá při řešení úzkého hrudníku.
              </p>
              <p>Vybočené lokty opět řešíme posilněním svalů hrudníku a pletence hrudíkové končetiny. Ideální korekcí je běh z kopce, plavání i běh u kola. Neřešíme vadu taháním ani běháním do kopce.</p>
            </div>
          </div>

          <div className={styles.stance}>
            <div className={styles.floatRight}>
              <img className={styles.img} src="/images/pohyb.gif" alt="" />
              <img className={styles.running} src="/images/beh.jpeg" alt="" />
            </div>
            <div>
              <h4 className="poppins-regular">- Pohyb -</h4>
              <p>V klusu a běhu správně protahuje končetiny, věnujte pozornost mimochodu - přední i zadní packa jdou stejným směrem v danou chvíli.</p>
              <p>Pohyb nohou je správně široký a rovný.</p>
              <p>Úzký pohyb zadních končetin cvičíme na balančních podložkách posilněním zadních noh a svalstva pánve. Opět lze využít hydroterapii, také pomáhá nechat psa volně běhat v jeho maximální rychlosti - uvolnění šlach a svalstva. </p>
              <p>Mimochod není až tak zdravotní problém, jako spíš estetický na výstavách. Mimochodem si pes zlehčuje chůzi, může být způsobem nedostatečným pohybem v mládí, nebo u starších jedinců kdy je pro ně mimochod prostě pohodlnější. Nápravu řešíme zvýšením kondice, poté může pes běhat u kola či u nohy na měkkém terénu. Cval už je příliš, proto si rychlost neustále hlídáme a pohyb psa kontrolujeme. Pokud přejde do mimochodu, psa vyrušíme dotekem, napnutím vodítka - pes změní krok z mimochodu na klus. Během tréningu psa chválíme a odměňujeme. </p>
              <p>Krátký krok odstraníme treningem pohybu v maximální rychlosti v kluse. Postupně zvyšujeme frekvenci klusu tím bude pes využívat největší rozsah pohybu a trochu se prodlouží krok a uvolní svaly pánve a zadní části zad. </p>
            </div>
          </div>
          <div className={styles.stance}>
            <div className={styles.floatLeft}>
              <img className={styles.pastern} src="/images/proslap.jpeg" alt="" />
            </div>
            <div>
              <h4 className="poppins-regular">- Prošlap -</h4>
              <p>Zdravě vyvinuté packy jsou silné, osvalené a se správným úhlem.</p>
              <p>Prošlapu se lze vyhnout opět během vývoje štěňátka, osvalení a zesílení tlapek.</p>
              <p>Měkké nadprstí, neboli prošlap řešíme posílením svalů tlapky. Vhodné je plavání, hydroterapie. Naopak se vyhněme skokům, dlouhému cvalu, procházkám na tvrdém terénu.</p>
            </div>

          </div>

          <div className={styles.stance}>
            <div lassName={styles.floatRight}>
              <img className={styles.dysplasia} src="/images/dysplazie.jpeg" alt="" />
            </div>
            <div>
              <h4 className="poppins-regular">- Dysplazie (DKK) -</h4>
              <p>Může být dědičná, ale také způsobena rychlým růstem štěňátka - vyšší hmotností, nesprávným pohybem i chybějícími minerály a vitamíny ve stravě.</p>
              <p>Podezření na dysplazii či jiné ortopedické problémy vždy konzultujte se svým veterinářem. Dysplazie je diagnostikována pomocí RTG snímků ve správné poloze psa. Varovné signály by měly být: snížená aktivita, problémy se vstáváním, nechuť k pohybu.</p>
              <p>Léčba je možná, avšak i přeléčený jedinec by neměl být použit v chovu. Používají se konzervativní metody jako fyzioterapie, protizánětlivé léky, kontrola hmotnosti. Chirurgická léčba dle stádia DKK a stáří psa. </p>
            </div>
          </div>
        </div>

        <div className={styles.stance}>
          <h2 className="poppins-semibold">Hlava</h2>

          <div className={styles.stance}>
            <div className={styles.floatLeft}>
              <img className={styles.img} src="/images/hlava.gif" alt="" />
            </div>
            <div>
              <h4 className="poppins-regular">- DOV -</h4>
              <p>Dědičné oční vady lze odhalit oftalmologickým vyšetřením a také genetickými testy z krve či slin. Doporučuje se z genetických testů:
                <ul>
                  <li>Cone Degeneration - Degenerace čípků sítnice</li>
                  <li>Progresivní retinální atrofie forma XL-PRA</li>
                  <li>Nefritida</li>
                </ul>
              </p>
              <p>Vyšetření u veterináře - oftalmologa zahrnuje:
                <ul>
                  <li>Měření nitroočního tlaku (norma do hodnoty 25)</li>
                  <li>Rozkapání zornice a vyšetření očních pozadí - čočka, sklivec, sítnice a papilu očního nervu</li>
                  <li>Slzné testy (pokud je potřebné)</li>
                  <li>Gonioskopie - nakapání anestezijních kapek, použití gonioskopické čočky a prozkoumání komorového úhlu</li>
                </ul>
              </p>
              <p>Výsledky všech těchto vyšetření je potřeba zhodnotit komplexně i se znalostí rodové linie vyšetřovaného jedince, dále se znalostí plemene a obecně jeho náchylnostem k očním vadám a trendu jejich rozvoje u nich.</p>
              <p>Je vhodné svého pejska před vyšetřením u oftalmologa naučit, že mu někdo může sahat na oční víčka a rozevírat je. Pejsek je pak během vyšetření klidnější a výsledky nebudou zkreslené uhýbáním, vrtěním apod. </p>

            </div>

          </div>

        </div>

        <div className={styles.stance}>
          <h2 className="poppins-semibold">Ocas</h2>

          <div className={styles.stance}>
            <div lassName={styles.floatRight}>
              <img className={styles.tail} src="/images/ocas.jpeg" alt="" />
            </div>
            <div>
              <p>
                Ovlivnit růst ocasu je snad nemožné, ale obecně zda drží ocas nahoře i trochu ano. </p>
              <p> Je to sval a musí se používat, aby byl silný a samojed jej držel jak má. </p>
              <p> Zpravidla jedinci žijící na zahradě mají spoustu vjemů a zájmů, to je chvíle dát ocas nahoru = cvičit sval. Čím víc zajimavých vjemů, tím častěji je ocásek nahoře a pěkně visí přes záda, sval se vycvičí a samojedovi tak nečiní problém jej mít správně.
              </p>
            </div>
          </div>

        </div>
      </article>
    </>
  )
}
export default PracticStandard;