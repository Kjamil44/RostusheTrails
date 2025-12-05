import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import trailImage from "../../assets/images/planina.jpg";
import rulesImage from "../../assets/images/uludag_haris2.jpg";
import villageImage from "../../assets/images/rostushe-naslovna.jpeg";
import Link from "next/link";
import TestimonialsCarousel from "./components/TestimonialCarousel";
import RegistrationNotice from "./components/RegistrationNotice";
import VideosSection from "./components/VideosSection";

const testimonials = [
  {
    name: "Marko Jovanovic", country: "RS", text: `Možda je to i bio najtopliji dan u godini,
možda je bila najtoplija Planinska trka koju sam istrčao do sada, ali je to zaista bilo pravo i iskreno osvežavajuće društvo, jedinstvena čarobna osvežavajuća Reka - RADIKA  
Made in Makedonija

Golema prijateljstva treba održavati, dobre sjajne komšije, priroda i trka prekrasna, poslužena zahvaljujući odličnim domaćinima Rostushe Trails iznad Oblaka.  

* Nacionalni Park Mavrovo ~ Za poštovanje Golem Krčin 2.341 metara najviša tačka Planinske Trke, u dužini 27km / sa moćnih 1.700 uspona, nešto nesvakidašnje za mene.

Lepo osmišljena kružna staza, bogastvo prirodnih lepota, vrlo atraktivan predeo sa živopisnim vrhovima, carstvo krupnih životinja poput Medveda koga na sreću nismo upoznali, Divokoza, Risa itd, lepršavo koračanje između dve države, bogastvo pijaćih izvora koja su nas spasila od najtoplijeg dana možda u godini sa oko 40 stepeni. Sledeće izdanje – manji razmak između okrepnih stanica popraviti. Dosta vremena uloženo u košenje paprati i uređenje staze domaćina trke, vidi se zalaganje volontera, lep doček u cilju i stolom sa hranom i pićem.

Vrlo pristupačne kotizacije za ono što se dobija na ovako visokim atraktivnim Planinama, super medalje, a okruženje ne manjka turističkom ponudom šta videti i posetiti (Manastiri, Reka, Jezera, Vodopad).

Trčalo se oprezno i odmereno u živahnom društvu vodećih 15-ak trkača, u prvih 12km nakupilo se već 1.500m ozbiljnog uspona, ostalo je u nastavku snage po ekstremno visokoj temperaturi pojačati ritam i završiti za 4h 6minuta što je bilo dovoljno za plasman 8. mesto.

Odličan osećaj, raj za dušu i pluća, pravi mir.

Zahvalnost mojoj veseloj ekipi iz Vranje, Milošu, Aci i Milanu, što smo se dobro uskladili, slagali, nasмеjavali i podršku slali na delu uživo.

Hvala timu Rostushe na dobrodošlici i učešću, na jakoj volji i želji da prezentujete vaš divan predeo, dovedete sportiste sa Balkana i šire u narednim godinama. Iz vaše velike volje i snage ste ovo fino sproveli bez ičije pomoći jakih sponzora, što će se nadam prepoznati u narednim godinama.

Vidimo se opet.` },
  {
    name: "Milos Taskovic aka TALES", country: "RS", text: `Leto 2025, jul 25, petak, vesela četvorka u sastavu: vozač Uragan, braća Milan Macan i Aca Finac, i glavni ludjak, Tales, kreće iz Vranja u jutarnjim časovima i brzo stiže do Mavrovskog jezera, koje je došlo kao kec na 11 na dobrih 40ak stepeni. Voda nas je osvežila za nastavak putovanja ka obližnjem selu Rostuše. Šta smo radili tamo? Pa istog dana jeli, pili i družili se, a sutra trčali Rostushe trail 2025, first edition kod naših prijatelja iz Еверестинг Ростуше . Predvodjeni Harisom, našim spiritualnim bratom, uvek su dolazili kod nas na trke, kako na Rocky trail, tako i na Beljanicu, Vranjski i Svilajnački polumaraton itd itd. Ja sam već bio njihov gost davne 2022, ovo mi je drugi put.
Bilo je dve trke. Jedna na 25 km (sa 1700m elevacije), druga na 10 km (sa 360m elevacije). Marko je izabrao dužu, bio je u mazohizam fazonu.  Nas trojica smo manje mrzeli sebe pa smo taktički pametno otišli na 10km, haha.  Mare je prešao za malo jače od 4, mi za malo jače od sat. I sve to na 40 stepeni, u grotlu najtoplijeg dana u 2025. 
Bilo je par grešaka u organizaciji na stazi, dešava se. Na 2-om km se prelazi reka, to mi se nije svidelo, to kvašenje patika, pravljenje ćevapa na stopalima, pa sam lepo izgubio 5min skidajući patike, brišući i nastavljajući, dok je masa njih prošla direktno (i samim tim dobili prednost). 
Od strane Haris Bekiri i njegove ekipe smo dočekani fantastično, kao i 2022. Hvala od srca. Uradio je zverski dobar posao i svaka mu čast. Haris je, slobodno se može reći, preko 70% cele trke. Razbio se od posla i to se videlo na njemu u vidu umora i dekoncentracije, brige. Ovom prilikom bih pohvalio i Oktaj Bekjiri i Senchoz Bekerson, brata i oca, fantastične ljude i moje stare prijatelje takodje, kao i par klinaca iz njihovog kluba koji su mu JEDINI pomogli. 
Koliko sam mogao da primetim na terenu, a i iz priče, republika Makedonska krajina je pomogla sa 0 denara, čak ni sa lepim željama, što je na Balkanu običaj (srećno, ali dobićeš 0 para), a što je još meni poraznije bilo, selo je dočekало manifestaciju kao da će uskoro smak sveta. Ljudi skoro da nema na ulicama, niti su se potrudили da pomognu, ni finansijski, ni volonterski, ma nikako, prosto neverovatно! Čovek koji je prvi u Makedoniji uradio Everesting sam na svojim nogama bez pomoćnih sredstava, koji je legenda kraja (a nema ni 35 banki), da bukvalno SAM organizuje trku, i to je još planira od 2023, ma nemam reči! To je za selo dogadjaj ne decenije, nego dogadjaj 2-3 decenije, i umesto da svako žrtvuje tipa pola sata svog života (i više nego dovoljno), dozvolili su да се пар људи поломи. Svaka čast, village of Rostuše and Republic of Makedonskoto, well done! Još sam pričao sa par meštana, pitam što niste pomogli Harisu, ladno odgovaraju: Kako da mu pomognemo?  Da ne zaboravim, mislim da mu je samo Nacionalni park pomogao finansijski, ili to beše opština Mavrovo-Rostuše? Ko god da je ima respect!  
Elem, ja kako živim u inostranstvu и u Srbiji sam na dve nedelje godišnje, a u kontaktu sam sa Harisom stalno, bilo mi je izuzetno drago što je tempirao trku baš na dane kada sam bio prisutan duhom и telom.  Nisam uopšte razmišljao da li да dodjem или ne. Kao ni moji momci. Svi volimo Harisa i ceo njegov tim, odlični smo prijatelji već dobrih 4-5 godina i planiramo da tako ostane zanavjek. 
Hvala im puno na lepom dočeku, živi bili i držite se! Odradili ste odličan posao! To što na Balkanu ljudi nemaju mentalni kapacitet da razumeju stvari nije vaš, već njihov problem. No dobro, ima nade za njih, blizu je 2050.  
Evo i par sličica, da upriliči priču.
PS U povratku smo ''overili'' poslastičaru, ćevapdzinicu, kao i reku Radiku sa svojih 13 stepeni koja nas je odlično pripremila za novu turu na 40 gradosa do Srbije mati!  Živeli!
PS 2 Zamalo da zaboravim! Izuzetno zadovoljstvo mi je bilo da sretnem stare prijatelje iz MKD, odlične trkače i još bolje ljude! Toni Manev i njegova ekipa iz Štipa, Igor D. Jovanovski Karas, Žikica i ostali iz TREXa itd itd!
` },
  { name: "DAME ILIJEV", country: "MK", text: `27km Krcin trail е идеален спој на физички предизвик и вистинско уживање на динамична и добро осмислена патека низ природа што воодушевува. Секој километар беше доживување, со пријатна атмосфера и енергија што те води напред. Секоја чест за организацијата, ова е настан што вреди да продолже и да расте.` },
  { name: "Kristijan Blazev", country: "MK", text: `Odlicna organizacija i super markirana pateka. Trkata bese navistina predizvikuvacka i so prekrasni pejsazi. Sekoja cest za organizatorite.` },
  { name: "Filip Kozikov", country: "MK", text: `Убаво доживување на 11 км трка одлична природа, добра атмосфера и супер организација во поголемиот дел. Сепак, би сакал да напоменам неколку работи што можат да се подобрат: Недостигаше доволно волонтери на клучните раскрсници каде што стазата се вкрстуваше таму е важно да има насочување, за да не се промаши патот. И кај контролната точка не беше баш јасно дали некој ја евидентира помината точка волонтерите седеа на страна во сенка и немаше некоја интеракција. Се друго беше навистина супер, честитки за настанот и се надевам следниот пат ќе биде уште подобро!  ` },
  { name: "DONA IVANOVA", country: "MK", text: `11km Bagrem trail - совршен баланс меѓу предизвик и уживање на одличен терен и прекрасна природа која остава без здив. Супер атмосфера полна со позитивна енергија и поддржана од одлична публика. Секоја чест до организаторите - се надевам дека ова е само почеток на една убава традиција!` },
  { name: "Julija Ilieva", country: "MK", text: `Многу забавно искуство! Rostushe Trail беше повеќе од само трка – беше целосно доживување. Ми се допадна природата околу Ростуше – планински пејзажи, чист воздух и недопрена убавина. Но, она што ја направи трката уште повпечатлива беа луѓето – локалното население кое беше неверојатно гостопримливо, пријателско и отворено за сите учесници. Секој момент поминат таму беше спој на спорт, авантура и автентичен туризам. Голема благодарност до целиот организациски тим и до населението на Ростуше за топлината и поддршката!` },
  { name: "BOJANA KOSTADINOVA", country: "MK", text: `Bagrem Trail ми остави преубави впечатоци, со неверојатна природа, топла атмосфера и одлично дружење. Уживав во секој момент и со задоволство би се вратила повторно.` },
];

const videos = [
  {
    id: "X5xTafSiZws",
    key: "video1_title",
    featured: true,
  },
  {
    id: "LkDL5143ric",
    key: "video2_title",
  },
  {
    id: "aAkVnPcpXiA",
    key: "video3_title",
  },
  {
    id: "iGYvo6E9etg",
    key: "video4_title",
  },
  {
    id: "wGdOyv8YGhg",
    key: "video5_title",
  },
];


export default async function Home() {
  const t = await getTranslations("home");
  const currentLocale = await getLocale();

  return (
    <main className="min-h-screen flex flex-col items-center font-sans">
      <RegistrationNotice />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center gap-8 py-24 md:px-12 animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-extrabold text-green-700 leading-tight tracking-tight">
          {t("welcome")}
        </h1>
        <p className="text-lg md:text-xl text-gray-800 font-medium max-w-3xl animate-fadeIn delay-200">
          {t("description")}
        </p>
      </section>

      {/* Trails Buttons Section */}
      <section className="relative w-full flex justify-center mb-24">
        <div className="relative w-full max-w-7xl overflow-hidden rounded-3xl shadow-lg group">
          <Image
            src={villageImage}
            alt={t("village_image_alt")}
            className="w-full h-[500px] md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl px-4">
              <a
                href={`/${currentLocale}/trails/eleven-km`}
                className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-2xl py-8 px-6 text-center shadow-md hover:scale-105 transition-all duration-300"
              >
                <h2 className="text-2xl font-bold mb-2">{t("ten_km_trail.title")}</h2>
                <p className="text-base font-medium">{t("ten_km_trail.description")}</p>
              </a>
              <a
                href={`/${currentLocale}/trails/twentyseven-km`}
                className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-2xl py-8 px-6 text-center shadow-md hover:scale-105 transition-all duration-300"
              >
                <h2 className="text-2xl font-bold mb-2">{t("twentyseven_km_trail.title")}</h2>
                <p className="text-base font-medium">{t("twentyseven_km_trail.description")}</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Next Edition (Registration OPEN) */}
      <section className="relative w-full max-w-7xl mx-auto mb-24 px-6 md:px-12">
        <div className="rounded-3xl overflow-hidden bg-white shadow-xl">
          <div className="relative p-8 md:p-12">
            {/* Ribbon / Badge */}
            <div className="absolute md:top-6 md:right-6 md:block hidden">
              <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 font-semibold px-4 py-2 rounded-full">
                {/* simple check icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" className="inline-block">
                  <path
                    fill="currentColor"
                    d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
                  />
                </svg>
                {t("next_edition.badge_open", { defaultValue: "Registration Open" })}
              </span>
            </div>

            {/* Mobile badge (in flow) */}
            <div className="md:hidden flex justify-center mb-4">
              <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 font-semibold px-4 py-2 rounded-full">
                <svg width="16" height="16" viewBox="0 0 24 24" className="inline-block">
                  <path
                    fill="currentColor"
                    d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
                  />
                </svg>
                {t("next_edition.badge_open", { defaultValue: "Registration Open" })}
              </span>
            </div>

            {/* Headline Image */}
            <div className="mb-4 flex justify-center">
              <Image
                src="/headline.png"
                alt="Rostushe Trails Headline"
                width={500}
                height={200}
                className="h-auto w-auto max-w-full"
                priority
              />
            </div>

            {/* Event Date */}
            <p className="text-3xl md:text-3xl font-extrabold text-green-700 text-center mb-6">
              {t("next_edition.date", { defaultValue: "15 August 2026" })}
            </p>

            {/* Description */}
            <p className="text-gray-800 text-lg md:text-xl font-medium max-w-3xl mx-auto text-center">
              {t("next_edition.description_open", {
                defaultValue:
                  "Secure your spot for the next unforgettable Rostushe Trails edition. Limited entries available—register today!",
              })}
            </p>

            {/* CTA */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${currentLocale}/trails/eleven-km`}
                className="inline-block text-white text-lg font-bold py-4 px-8 rounded-2xl shadow-lg transition-all duration-300
               bg-gradient-to-r from-green-600 via-green-700 to-emerald-700
               hover:from-green-700 hover:via-emerald-800 hover:to-green-900
               hover:shadow-[0_0_20px_rgba(34,197,94,0.45)] hover:scale-105"
              >
                {t("next_edition.cta_bagrem", { defaultValue: "Register – Bagrem 11K" })}
              </Link>

              <Link
                href={`/${currentLocale}/trails/twentyseven-km`}
                className="inline-block text-white text-lg font-bold py-4 px-8 rounded-2xl shadow-lg transition-all duration-300
               bg-gradient-to-r from-emerald-600 via-green-700 to-green-800
               hover:from-emerald-700 hover:via-green-800 hover:to-green-900
               hover:shadow-[0_0_20px_rgba(16,185,129,0.45)] hover:scale-105"
              >
                {t("next_edition.cta_krchin", { defaultValue: "Register – Krchin 27K" })}
              </Link>
            </div>
          </div>

          {/* Posters Grid (unchanged) */}
          <div className="p-6 md:p-8 bg-gradient-to-br from-green-50 to-white">
            <h3 className="text-2xl font-bold text-green-700 text-center mb-6">
              {t("next_edition.posters_title", { defaultValue: "Promotion Posters" })}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/posters/poster1.jpg"
                  alt="Poster 1"
                  fill
                  className="object-cover rounded-xl shadow-md"
                />
              </div>
              <div className="relative aspect-[3/4]">
                <Image
                  src="/posters/poster2.jpg"
                  alt="Poster 2"
                  fill
                  className="object-cover rounded-xl shadow-md"
                />
              </div>
              <div className="relative aspect-[3/4]">
                <Image
                  src="/posters/poster3.jpg"
                  alt="Poster 3"
                  fill
                  className="object-cover rounded-xl shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
      // Results 2025 Button Section (temporarily disabled, kept for future use)
      <section className="w-full flex justify-center mb-20 px-6">
        <div className="relative bg-gradient-to-br from-green-600 via-green-500 to-green-700 text-white shadow-2xl rounded-2xl px-8 py-10 text-center max-w-2xl w-full overflow-hidden">
          <div className="absolute top-[-10px] left-[-10px] text-6xl opacity-20 transform rotate-12 pointer-events-none animate-pulseSlow">
            🏁
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow">
            {t("results.title", { defaultValue: "See the 2025 Race Results!" })}
          </h2>

          <p className="text-base md:text-lg font-medium mb-6 text-white/90 max-w-md mx-auto">
            {t("results.description", {
              defaultValue: "Check official times and rankings from this year's races.",
            })}
          </p>

          <Link
            href={`/${currentLocale}/results`}
            className="inline-block bg-white text-green-700 font-bold py-3 px-6 rounded-xl shadow-md transition transform hover:scale-105 hover:animate-bounceOnce"
          >
            {t("results.button", { defaultValue: "View Results 2025" })}
          </Link>
        </div>
      </section>
      */}

      {/* Videos Section */}
      <VideosSection />


      {/* Gallery Section */}
      <section className="relative w-full py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-green-700 text-center mb-12">
          {t("gallery.title", { defaultValue: "Moments from the Trails" })}
        </h2>

        <div className="relative h-[400px] md:h-[500px] w-full mb-10">
          {/* Image 1 */}
          <Image
            src="/gallery/trail1.jpg"
            alt="Gallery 1"
            width={400}
            height={300}
            className="absolute top-0 left-0 w-[250px] md:w-[350px] rounded-2xl shadow-lg opacity-70 rotate-[-6deg] z-10"
          />
          {/* Image 2 */}
          <Image
            src="/gallery/trail2.jpg"
            alt="Gallery 2"
            width={400}
            height={300}
            className="absolute top-1/3 left-1/3 w-[250px] md:w-[350px] rounded-2xl shadow-xl opacity-80 rotate-3 z-20"
          />
          {/* Image 3 */}
          <Image
            src="/gallery/trail3.jpg"
            alt="Gallery 3"
            width={400}
            height={300}
            className="absolute bottom-0 right-0 w-[250px] md:w-[350px] rounded-2xl shadow-lg opacity-60 rotate-6 z-10"
          />
        </div>

        <div className="text-center">
          <Link
            href={`/${currentLocale}/gallery`}
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-xl shadow transition duration-300"
          >
            {t("gallery.button", { defaultValue: "View Full Gallery" })}
          </Link>
        </div>
      </section>

      {/* Mountain Trail Section */}
      <section className="flex flex-col lg:flex-row items-center gap-12 py-24 px-6 md:px-12 w-full max-w-7xl">
        <div className="w-full lg:w-1/2">
          <Image
            src={trailImage}
            alt={t("mountain_trail_image_alt")}
            className="rounded-3xl shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold text-green-700 mb-6">
            {t("mountain_trail.title")}
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed font-medium">
            {t("mountain_trail.description")}
          </p>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24 max-w-6xl w-full px-6 text-center">
        {/* 27Km Card */}
        <div className="bg-white rounded-2xl shadow p-6 transform transition duration-700 hover:scale-105 group">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full group-hover:bg-green-200 transition">
              <svg className="w-8 h-8 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L4 20h16L12 2z" />
              </svg>
            </div>
          </div>
          <p className="text-4xl font-extrabold text-green-700 mb-2">27KM</p>
          <p className="text-gray-800 font-medium">{t("stats.krchin")}</p>
        </div>

        {/* 11KM Card */}
        <div className="bg-white rounded-2xl shadow p-6 transform transition duration-700 hover:scale-105 group">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full group-hover:bg-green-200 transition">
              <svg className="w-8 h-8 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 4 6 4 6s4.13 4 8 4 8-4 8-4-4.13-4-8-4zM4 18c0-2 4-6 8-6s8 4 8 6v2H4v-2z" />
              </svg>
            </div>
          </div>
          <p className="text-4xl font-extrabold text-green-700 mb-2">11KM</p>
          <p className="text-gray-800 font-medium">{t("stats.bagrem")}</p>
        </div>

        {/* Runners Card */}
        <div className="bg-white rounded-2xl shadow p-6 transform transition duration-700 hover:scale-105 group">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full group-hover:bg-green-200 transition">
              <svg className="w-8 h-8 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05C15.64 13.91 18 15.22 18 16.5V20h4v-3.5c0-2.33-4.67-3.5-6-3.5z" />
              </svg>
            </div>
          </div>
          <p className="text-4xl font-extrabold text-green-700 mb-2">150+</p>
          <p className="text-gray-800 font-medium">{t("stats.runners")}</p>
        </div>
      </section>

      {/* Rules Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-12 py-24 px-6 md:px-12 w-full max-w-7xl">
        <div className="w-full lg:w-1/2">
          <Image
            src={rulesImage}
            alt={t("rules_image_alt")}
            className="rounded-3xl shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold text-green-700 mb-6">
            {t("rules.title")}
          </h2>
          <ul className="list-disc list-inside text-gray-800 font-medium space-y-4 text-lg">
            <li>{t("rules.point1")}</li>
            <li>{t("rules.point2")}</li>
            <li>{t("rules.point3")}</li>
          </ul>
          <Link
            href={`/${currentLocale}/trails/guide#rules-section`}
            className="inline-block mt-4 bg-green-700 text-white text-base px-6 py-3 rounded-lg shadow hover:bg-green-800 transition-all duration-300"
          >
            {t("rules.read_more_link")}
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-green-700 text-center mb-10">
          {t("testimonials.title", { defaultValue: "What runners say" })}
        </h2>
        <TestimonialsCarousel items={testimonials} />
      </section>

      {/* Community CTA */}
      <section className="w-full bg-green-700 py-16 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          {t("cta.title", { defaultValue: "Be part of the trail community" })}
        </h2>
        <p className="max-w-xl mx-auto font-medium mb-6">
          {t("cta.description", {
            defaultValue:
              "Join runners from all over the region and take on the mountains of Mavrovo.",
          })}
        </p>
        <Link
          href={`/${currentLocale}/contact`}
          className="inline-block bg-white text-green-700 font-bold py-3 px-6 rounded-xl shadow hover:bg-gray-100 transition-all"
        >
          {t("cta.join", { defaultValue: "Contact Us" })}
        </Link>
      </section>
    </main>
  );
}
