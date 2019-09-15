import React from "react"
import styled from "styled-components"
import Grid from '@material-ui/core/Grid';
import side_image from '../assets/side_image_2.jpg'
import Divider from './divider'

const ServicesWrapper = styled.div `
  width: 100%;
  padding: 50px;
  position: relative;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: calc(30% + 15px);
    bottom: 0;
    right: 15px;
    background-color: #fff;
    -webkit-box-shadow: 0 20px 40px 0 rgba(0,0,0,.05);
    box-shadow: 0 20px 40px 0 rgba(0,0,0,.05);
  }
  @media (max-width: 980px) {
    :before {
      left: 30px;
      right: 30px;
    }
    .responsive_grid_1 {
      display: none;
    }
    .responsive_grid_2 {
      flex-basis: 100%;
      max-width: 100%;
    }
  }
`
const ServicesMargin = styled.div`
  max-width: 940px;
  margin: 0 auto;
  z-index: 999;
  ul {
      margin: 0;
      padding: 0;
      li {
        list-style: none;
        padding-left: 30px;
        padding-bottom: 15px;
        position: relative;
        &:before {
          content: "•";
          position: absolute;
          left: 0px;
          color: var(--main-yellow)
        } 
      }
    }
  .text_wrapper {
    position: relative;
  }  
  .MuiPaper-rounded-5 {
    border-top: 1px solid black;;
    box-shadow: none;
  }
  .MuiPaper-rounded-5:before {
    display: none;
  }
  .title_wrapper {
    position: relative;
  }
  .text_title {
    font-weight: 900;
    color: var(--main-yellow);
  }
  a {
    display: block;
  }
  .expanable_panel {
    -webkit-box-shadow: none;
	  -moz-box-shadow: none;
    box-shadow: none;
    border-top: 1px solid var(--light-gray);
    margin-bottom: 20px;
    &:last-of-type {
      border-bottom: 1px solid var(--light-gray);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:before {
      display: none;
    }
  }
  .expanable_title {
    font-weight: 600;
    transition: 0.3s;
    .MuiExpansionPanelSummary-expanded-130 {
      color: var(--main-yellow);
    }
    &:hover {
      color: var(--main-yellow);
    }
  }
`
const SideImage = styled.div `
  position: absolute;
  top: 250px;
  left: 0;
  background: url(${side_image});
  width: 20%;
  height: 600px;
  background-position: right;
  background-size: cover;
  -webkit-box-shadow: 0 20px 40px 0 rgba(0,0,0,.2);
  box-shadow: 0 20px 40px 0 rgba(0,0,0,.2);
  @media (max-width: 980px) {
    display: none;
  }
`
class PageLayoutAbout extends React.Component {
  render () {
    return (
      <ServicesWrapper>
        <SideImage />
        <ServicesMargin>
        <Grid container spacing={24}>
            <Grid item xs={4} className="responsive_grid_1"></Grid>
            <Grid item xs={8} className="text_wrapper responsive_grid_2">
              <div className="title_wrapper">
              <h1 className="service_name">gdpr</h1>
              <h1 className="services">Poučenie o ochrane osobných údajov</h1>
              </div>
              <p>
             <strong> Zásady ochrany osobných údajov</strong><br /><br />
 
S účinnosťou odo dňa 25.05.2018 sú všetky osobné údaje spracúvané v súlade s Nariadením Európskeho parlamentu a Rady (EÚ) 2016/679 z 27. apríla 2016 o ochrane fyzických osôb pri spracúvaní osobných údajov a o voľnom pohybe takýchto údajov, ktorým sa zrušuje smernica 95/46/ES (všeobecné nariadenie o ochrane údajov – ďalej len „Nariadenie“).
 Informácie poskytované podľa článku 13 Nariadenia:<br />
1.	Totožnosť a kontaktné údaje prevádzkovateľa:
 Prevádzkovateľom, ktorý spracúva osobné údaje, je spoločnosť PaS Services s.r.o., so sídlom Starozagorská 1392/41, 040 23  Košice, IČO: 50 750 178, DIČ:2120458901, IČ DPH: SK2120458901, zapísaná v Obchodnom registri Okresného súdu Košice I, odd.: Sro, vložka č.: 40907/V, (ďalej aj „PaS Services“ alebo „prevádzkovateľ“). 
<br />2.	Kontaktné údaje zodpovednej osoby prevádzkovateľa:
 Zodpovednú osobu prevádzkovateľa možno kontaktovať na mailovej adrese: agenturapas@agenturapas.sk alebo písomne na adresu sídla spoločnosti PaS Services sr.o.
<br />3.	Práva dotknutej osoby:
 Dotknutá osoba má podľa príslušných ustanovení Nariadenia nasledujúce práva:
<br /><br />A) právo požadovať od prevádzkovateľa prístup k osobným údajom, ktoré sa jej týkajú, podľa článku 15:
 Dotknutá osoba má právo získať od prevádzkovateľa potvrdenie o tom, či sa spracúvajú osobné údaje, ktoré sa jej týkajú, a ak tomu tak je, má právo získať prístup k týmto osobným údajom a tieto informácie:
<br />1.	účely spracúvania;
<br />2.	kategórie dotknutých osobných údajov;
<br />3.	príjemcovia alebo kategórie príjemcov, ktorým boli alebo budú osobné údaje poskytnuté, najmä príjemcovia v tretích krajinách alebo medzinárodné organizácie; 
<br />4.	ak je to možné, predpokladaná doba uchovávania osobných údajov, alebo ak to nie je možné, kritériá na jej určenie;
<br />5.	existencia práva požadovať od prevádzkovateľa opravu osobných údajov týkajúcich sa dotknutej osoby alebo ich vymazanie alebo obmedzenie spracúvania, alebo práva namietať proti takémuto spracúvaniu; 
<br />6.	právo podať sťažnosť dozornému orgánu; 
<br />7.	ak sa osobné údaje nezískali od dotknutej osoby, akékoľvek dostupné informácie, pokiaľ ide o ich zdroj; 
<br />8.	existencia automatizovaného rozhodovania vrátane profilovania uvedeného v článku 22 ods. 1 a 4 nariadenia a v týchto prípadoch aspoň zmysluplné informácie o použitom postupe, ako aj význame a predpokladaných dôsledkoch takéhoto spracúvania pre dotknutú osobu. 
 Ak sa osobné údaje prenášajú do tretej krajiny alebo medzinárodnej organizácii, dotknutá osoba má právo byť informovaná o primeraných zárukách týkajúcich sa prenosu podľa článku 46 Nariadenia. 
 Prevádzkovateľ poskytne kópiu osobných údajov, ktoré sa spracúvajú. Za akékoľvek ďalšie kópie, o ktoré dotknutá osoba požiada, môže prevádzkovateľ účtovať primeraný poplatok zodpovedajúci administratívnym nákladom. Ak dotknutá osoba podala žiadosť elektronickými prostriedkami, informácie sa poskytnú v bežne používanej elektronickej podobe, pokiaľ dotknutá osoba nepožiadala o iný spôsob. Právo získať kópiu nesmie mať nepriaznivé dôsledky na práva a slobody iných.
<br /><br />B) právo na opravu osobných údajov podľa článku 16:
 Dotknutá osoba má právo na to, aby prevádzkovateľ bez zbytočného odkladu opravil nesprávne osobné údaje, ktoré sa jej týkajú. So zreteľom na účely spracúvania má dotknutá osoba právo na doplnenie neúplných osobných údajov, a to aj prostredníctvom poskytnutia doplnkového vyhlásenia.
 <br /><br />C) právo na vymazanie (právo “na zabudnutie”) podľa článku 17:
 Dotknutá osoba má tiež právo dosiahnuť u prevádzkovateľa bez zbytočného odkladu vymazanie osobných údajov, ktoré sa jej týkajú, a prevádzkovateľ je povinný bez zbytočného odkladu vymazať osobné údaje, ak je splnený niektorý z týchto dôvodov:
<br />1.	osobné údaje už nie sú potrebné na účely, na ktoré sa získavali alebo inak spracúvali;
<br />2.	dotknutá osoba odvolá súhlas, na základe ktorého sa spracúvanie vykonáva, podľa článku 6 ods. 1 písm. a) alebo článku 9 ods. 2 písm. a) Nariadenia, a ak neexistuje iný právny základ pre spracúvanie;
<br />3.	dotknutá osoba namieta voči spracúvaniu podľa článku 21 ods. 1 Nariadenia a neprevažujú žiadne oprávnené dôvody na spracúvanie alebo dotknutá osoba namieta voči spracúvaniu podľa článku 21 ods. 2 Nariadenia;
<br />4.	osobné údaje sa spracúvali nezákonne; 
<br />5.	osobné údaje musia byť vymazané, aby sa splnila zákonná povinnosť podľa práva Únie alebo práva členského štátu, ktorému prevádzkovateľ podlieha; 
<br />6.	osobné údaje sa získavali v súvislosti s ponukou služieb informačnej spoločnosti podľa článku 8 ods. 1 Nariadenia. 
 Ak prevádzkovateľ zverejnil osobné údaje a je povinný vymazať osobné údaje, so zreteľom na dostupnú technológiu a náklady na vykonanie opatrení podnikne primerané opatrenia vrátane technických opatrení, aby informoval prevádzkovateľov, ktorí vykonávajú spracúvanie osobných údajov, že dotknutá osoba ich žiada, aby vymazali všetky odkazy na tieto osobné údaje, ich kópiu alebo repliky. 
<br /><br /> 
Právo na vymazanie sa neuplatňuje, pokiaľ je spracúvanie potrebné:<br />
1.	na uplatnenie práva na slobodu prejavu a na informácie;
<br />2.	na splnenie zákonnej povinnosti, ktorá si vyžaduje spracúvanie podľa práva Únie alebo práva členského štátu, ktorému prevádzkovateľ podlieha, alebo na splnenie úlohy realizovanej vo verejnom záujme alebo pri výkone verejnej moci zverenej prevádzkovateľovi;
<br />3.	z dôvodov verejného záujmu v oblasti verejného zdravia v súlade s článkom 9 ods. 2 písm. h) a i), ako aj článkom 9 ods. 3 nariadenia;
<br />4.	na účely archivácie vo verejnom záujme, na účely vedeckého alebo historického výskumu či na štatistické účely podľa článku 89 ods. 1 nariadenia, pokiaľ je pravdepodobné, že právo uvedené vyššie znemožní alebo závažným spôsobom sťaží dosiahnutie cieľov takéhoto spracúvania, alebo
<br />5.	na preukazovanie, uplatňovanie alebo obhajovanie právnych nárokov. 
<br /><br />D) právo na obmedzenie spracúvania podľa článku 18:
 Dotknutá osoba má právo na to, aby prevádzkovateľ obmedzil spracúvanie, pokiaľ ide o jeden z týchto prípadov:
<br />1.	dotknutá osoba napadne správnosť osobných údajov, a to počas obdobia umožňujúceho prevádzkovateľovi overiť správnosť osobných údajov;
<br />2.	spracúvanie je protizákonné a dotknutá osoba namieta proti vymazaniu osobných údajov a žiada namiesto toho obmedzenie ich použitia;
<br />3.	prevádzkovateľ už nepotrebuje osobné údaje na účely spracúvania, ale potrebuje ich dotknutá osoba na preukázanie, uplatňovanie alebo obhajovanie právnych nárokov;
<br />4.	dotknutá osoba namietala voči spracúvaniu podľa článku 21 ods. 1 nariadenia, a to až do overenia, či oprávnené dôvody na strane prevádzkovateľa prevažujú nad oprávnenými dôvodmi dotknutej osoby. 
 Ak sa spracúvanie v súlade s vyššie obmedzeným obmedzilo, takéto osobné údaje sa s výnimkou uchovávania spracúvajú len so súhlasom dotknutej osoby alebo na preukazovanie, uplatňovanie alebo obhajovanie právnych nárokov, alebo na ochranu práv inej fyzickej alebo právnickej osoby, alebo z dôvodov dôležitého verejného záujmu Únie alebo členského štátu.
 Dotknutú osobu, ktorá dosiahla obmedzenie spracúvania v súlade s vyššie uvedeným, prevádzkovateľ informuje pred tým, ako bude obmedzenie spracúvania zrušené.
 <br /><br />E) právo na prenosnosť údajov podľa článku 20:
 Dotknutá osoba má právo získať osobné údaje, ktoré sa jej týkajú a ktoré poskytla prevádzkovateľovi, v štruktúrovanom, bežne používanom a strojovo čitateľnom formáte a má právo preniesť tieto údaje ďalšiemu prevádzkovateľovi bez toho, aby jej prevádzkovateľ, ktorému sa tieto osobné údaje poskytli, bránil, ak: a) sa spracúvanie zakladá na súhlase podľa článku 6 ods. 1 písm. a) alebo článku 9 ods. 2 písm. a) nariadenia, alebo na zmluve podľa článku 6 ods. 1 písm. b) nariadenia, a b) ak sa spracúvanie vykonáva automatizovanými prostriedkami.
<br /><br /> 
Dotknutá osoba má pri uplatňovaní svojho práva na prenosnosť údajov právo na prenos osobných údajov priamo od jedného prevádzkovateľa druhému prevádzkovateľovi, pokiaľ je to technicky možné. 
 Uplatňovaním práva nie je dotknutý článok 17 nariadenia Uvedené právo sa nevzťahuje na spracúvanie nevyhnutné na splnenie úlohy realizovanej vo verejnom záujme alebo pri výkone verejnej moci zverenej prevádzkovateľovi. Právo na prenosnosť údajov nesmie mať nepriaznivé dôsledky na práva a slobody iných.
 <br /><br />F) právo namietať proti spracúvaniu vrátane namietania proti profilovaniu (ak sa vykonáva) podľa článku 21:
 Dotknutá osoba má právo kedykoľvek namietať z dôvodov týkajúcich sa jej konkrétnej situácie proti spracúvaniu osobných údajov, ktoré sa jej týka, ktoré je vykonávané na základe článku 6 ods. 1 písm. e) alebo f) nariadenia vrátane namietania proti profilovaniu založenému na uvedených ustanoveniach. Prevádzkovateľ nesmie ďalej spracúvať osobné údaje, pokiaľ nepreukáže nevyhnutné oprávnené dôvody na spracúvanie, ktoré prevažujú nad záujmami, právami a slobodami dotknutej osoby, alebo dôvody na preukazovanie, uplatňovanie alebo obhajovanie právnych nárokov. Ak sa osobné údaje spracúvajú na účely priameho marketingu, dotknutá osoba má právo kedykoľvek namietať proti spracúvaniu osobných údajov, ktoré sa jej týka, na účely takéhoto marketingu, vrátane profilovania v rozsahu, v akom súvisí s takýmto priamym marketingom. Ak dotknutá osoba namieta voči spracúvaniu na účely priameho marketingu, osobné údaje sa už na také účely nesmú spracúvať.
 V súvislosti s používaním služieb informačnej spoločnosti a bez ohľadu na smernicu 2002/58/ES môže dotknutá osoba uplatňovať svoje právo namietať automatizovanými prostriedkami s použitím technických špecifikácií. Ak sa osobné údaje spracúvajú na účely vedeckého alebo historického výskumu či na štatistické účely podľa článku 89 ods. 1 nariadenia, dotknutá osoba má právo namietať z dôvodov týkajúcich sa jej konkrétnej situácie proti spracúvania osobných údajov, ktoré sa jej týka, s výnimkou prípadov, keď je spracúvanie nevyhnutné na plnenie úlohy z dôvodov verejného záujmu.
 <br /><br />G) v odôvodnenom prípade právo podať sťažnosť dozornému orgánu, ktorým sa rozumie Úrad na ochranu osobných údajov Slovenskej republiky,
 <br /><br />H) právo odvolať súhlas:
 V prípade ak právnym základom spracúvania osobných údajov je súhlas dotknutej osoby je dotknutá osoba oprávnená kedykoľvek svoj udelený súhlas odvolať bez toho, aby to malo vplyv na zákonnosť spracúvania založeného na súhlase udelenom pred jeho odvolaním.
 Právo kedykoľvek odvolať súhlas, a to aj pred uplynutím doby, na ktorú bol tento súhlas udelený, môže dotknutá osoba uplatniť nasledujúcimi spôsobmi:
<br />1.	emailovou správou zaslanou na adresu agenturapas@agenturapas.sk,
<br />2.	telefonicky (+421 0917237471) alebo
<br />3.	zaslaním písomnej žiadosti na adresu sídla prevádzkovateľa s uvedením textu „GDPR – odvolanie súhlasu“ na obálke.
 
<br />4.	Účel spracúvania osobných údajov
 Ako prevádzkovateľ spracúvame Vaše osobné údaje na nasledujúce účely:
<br />•	Účelom spracúvania osobných údajov je vedenie účtovníctva a obchodnej agendy, kde právnym základom spracúvania je čl. 6 ods. 1 písm. c) Nariadenia – zákonná povinnosť, ktorá vyplýva z osobitných predpisov ako je zákon o účtovníctve, zákon o DPH, zákon o dani z príjmov a podobne. Poskytnutie osobných údajov je nevyhnutné na účely vyplývajúce z osobitných predpisov. Lehota uchovávania osobných údajov je 10 rokov. Príjemcami je externý účtovník, orgány verejnej moci, ktorým sa poskytujú osobné údaje zo zákona, zmluvní partneri, audítor, advokát.
<br />•	Účelom spracúvania je vedenie a evidencia obchodnej komunikácie, kde právnym základom je oprávnený záujem podľa čl. 6 ods. 1 písm. f) Nariadenia, oprávneným záujmom je prístup k informáciám a poskytovanie služieb, ktoré môžu priniesť úžitok pre dotknuté osoby, sprístupnenie ponúkaných služieb. Lehota uchovávania je 3 roky odo dňa posledného poskytnutia služieb. Príjemcovia sú: súd, orgány činné v trestnom konaní, spoločnosti vykonávajúce správu a podporu informačných technológií, subjekty zabezpečujúce výkon externého auditu.
<br />•	Účelom spracúvania je marketingová komunikácia (zasielanie noviniek / newslettrov) a remarketing, kde právnym základom je oprávnený záujem podľa čl. 6 ods. 1 písm. f) Nariadenia; oprávneným záujmom je poskytnutie relevantných informácií pre dotknuté osoby a ponuka služieb, ktoré pre tieto osoby môžu priniesť úžitok. Lehota uchovávania je 3 roky odo dňa prihlásenia sa k odberu noviniek (newslettra) alebo odo dňa posledného poskytnutia služieb alebo tovaru zo strany prevádzkovateľa podľa toho, ktorý z týchto prípadov nastane neskôr. K odberu newslettra je možné sa prihlásiť prostredníctvom nášho webu: www.agenturapas.sk, kde dotknutá osoba poskytne osobné údaje v rozsahu e-mailový kontakt, meno a priezvisko, telefónny kontakt a lokalitu pôsobenia (t. j. kraj Slovenska, v ktorom sa zaujíma napr. o pripravované vzdelávacie aktivity). Z odberu newslettera je možné kedykoľvek sa odhlásiť kliknutím na link s nápisom „Odhlásiť“ na konci každého emailu (newslettru) alebo samostatným e-mailom na agenturapas@agenturapas.sk V záujme prispôsobovania marketingových ponúk individuálnym potrebám dotknutých osôb bude prevádzkovateľ na základe histórie objednávok vytvárať personalizované marketingové ponuky. Na vytváranie personalizovaných marketingových ponúk bude prevádzkovateľ využívať cookies, službu Google Analytics, prípadne Facebook Pixel. Príjemcovia osobných údajov sú: súd, orgány činné v trestnom konaní, spoločnosti vykonávajúce správu a podporu informačných technológií, subjekty zabezpečujúce marketingovú komunikáciu alebo remarketing, subjekty poskytujúce služby podpory predaja, poskytovatelia telekomunikačných služieb a spoločnosť, na ktorej serveroch sú osobné údaje uložené.
 

<br />•	Účelom spracúvania je vedenie personálnej a mzdovej agendy (uzatvorenie pracovnej zmluvy alebo dohody o prácach mimo pracovného pomeru, evidencia podkladov o pracovnej spôsobilosti, výplata mzdy, odvody, plnenie povinností voči orgánom štátnej správy, evidencia dochádzky, evidencia vzdelávania, evidencia vydaných poverení a splnomocnení, evidencia poskytnutých ochranných pracovných pomôcok, majetku, zariadenia, uzatváranie dohôd o hmotnej zodpovednosti, evidencia vydávania peňažných prostriedkov v hotovosti, poskytovanie zamestnaneckých benefitov, evidencia škôd spôsobených zamestnancami na majetku zamestnávateľa, zabezpečenie stravovania, kopírovanie dokladov nevyhnutných na účely pracovnoprávneho alebo obdobného vzťahu, plnenie ďalších zákonných a zmluvných povinností). Právnym základom spracúvania na vyššie uvedené účely je čl. 6 ods. 1 písm. c) Nariadenia – zákonná povinnosť ako aj pracovná zmluva alebo dohody uzatvorené podľa zákona č. 311/2001 Z. z. Zákonník práce a plnenie zákonnej povinnosti podľa osobitných predpisov, ktoré ustanovujú povinnosti zamestnávateľa voči zamestnancovi. Dotknutá osoba je povinná poskytnúť osobné údaje, v prípade neposkytnutia nie je možné uzatvoriť pracovnú zmluvu. Osobné údaje zamestnanca budú poskytnuté týmto príjemcom: interný alebo externý účtovník, zdravotné poisťovne, doplnkové dôchodkové sporiteľne, dôchodkové správcovské spoločnosti, subjekt zabezpečujúci štatistiku, strážnej služby, vzdelávacie agentúry a školitelia, subjekt zabezpečujúci pracovnú zdravotnú službu, pracovné zdravotné posudky a posudzovanie zdravotnej spôsobilosti, subjekty zabezpečujúce poštové služby, subjekty zabezpečujúce rozvoj, správu a podporu informačných technológií, subjekty zabezpečujúce výkon externého auditu, poskytovatelia telekomunikačných služieb, poskytovateľ stravovacích služieb, spoločnosť, na ktorej serveroch sú osobné údaje uložené, zákazníci zamestnávateľa, dodávatelia zamestnávateľa, orgány verejnej moci, súd, orgány činné v trestnom konaní, advokáti, exekútori. Lehota uchovávania osobných údajov je osobný spis a mzdové listy dotknutej osoby do 70. roku veku.
<br />•	Účelom spracúvania je zabezpečenie povinností zamestnávateľa v oblasti BOZP, evidencia školení, pracovných úrazov a lekárskych prehliadok. Právnym základom pre vyššie uvedené účely je čl. 6 ods. 1 písm. c) Nariadenia – zákonná povinnosť podľa zákona o BOZP. Osobné údaje zamestnanca budú poskytnuté týmto príjemcom: externá spoločnosť zabezpečujúca BOZP, Inšpektorát práce, orgány činné v trestnom a priestupkovom konaní. Lehota uchovávania je 2 roky od skončenia pracovného pomeru. Dotknutá osoba je povinná poskytnúť osobné údaje na základe zákona.
<br />•	Účelom spracúvania je správa registratúry. Právnym základom pre vyššie uvedené účely je čl. 6 ods. 1 písm. c) Nariadenia – zákonná povinnosť podľa zákona č. 395/2002 Z. z. o archívoch a registratúrach a o doplnení niektorých zákonov v znení neskorších predpisov, zákon č. 305/2013 Z. z o elektronickej podobe výkonu pôsobnosti orgánov verejnej moci a o zmene a doplnení niektorých zákonov (zákon o e-Governmente). Dotknutá osoba je povinná poskytnúť osobné údaje. Osobné údaje zamestnanca budú poskytnuté týmto príjemcom: rozvoj, správu a podporu informačných technológií, subjekty zabezpečujúce výkon externého auditu, poskytovatelia telekomunikačných služieb, poskytovateľ stravovacích služieb, spoločnosť, na ktorej serveroch sú osobné údaje uložené. Lehota uchovávania je v zmysle osobitných predpisov a Registratúrneho plánu.
<br /><br />
V Košiciach dňa 27.5.2019
</p>
              
              <Divider height="70px" />
              <p className="text_title">Na stiahnutie</p>
              <a href="/suhlas_so_spracovanim_osobnych_udajov.doc">Súhlas so spracovaním osobných údajov</a>
              <a href="/Žiadosť_o_obmedzenie_spracúvania_osobných_údajov.doc">Žiadosť o obmedzenie spracúvania osobných údajov</a>
              <a href="/Žiadosť_o_opravu_a_doplnenie_osobných_údajov.doc">Žiadosť o opravu a doplnenie osobných údajov</a>
              <a href="/Žiadosť_o_poskytnutie_informácií.doc">Žiadosť o poskytnutie informácií</a>
              <a href="/Žiadosť_o_vydanie_osobných_údajov_z_dôvodu_uplatnenia_práva_na_prenosnosť.doc">Žiadosť o vydanie osobných údajov z dôvodu uplatnenia práva na prenosnosť</a>
              <a href="/Žiadosť_o_výmaz_osobných_údajov.doc">Žiadosť o výmaz osobných údajov</a>
            </Grid>
          </Grid>
        </ServicesMargin>
      </ServicesWrapper>
    );
  }
}

export default PageLayoutAbout
