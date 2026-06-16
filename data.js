/* =========================================================================
   INŻYNIERIA FINANSOWA — dane: kompendium, wzory, pytania testowe
   Na podstawie wykładów 1–12 (prof. dr hab. Joanna Olbryś, WI PB)
   ========================================================================= */

const COMPENDIUM = [
/* ---------------------------------------------------------------- 1 */
{
  id: "rynki",
  title: "1. Rynki finansowe i instrumenty",
  html: `
  <h2>Rynki finansowe i instrumenty <span class="tag">Wykład 1</span></h2>
  <p><b>Rynek finansowy</b> (<i>financial market</i>) to kluczowy element systemu gospodarczego.
  Umożliwia efektywną alokację kapitału. Zawierane są na nim transakcje finansowe polegające na
  zakupie i sprzedaży instrumentów finansowych.</p>
  <p><b>Instrument finansowy</b> to kontrakt pomiędzy dwiema stronami, regulujący zależność finansową,
  w jakiej obie strony pozostają.</p>

  <h3>Segmenty rynku finansowego</h3>
  <ul>
    <li><b>Rynek pieniężny</b> (<i>money market</i>) — instrumenty o zapadalności do 1 roku, rynek pozagiełdowy,
        kluczowy parametr to stopa procentowa. Instrumenty: depozyty (niezbywalne) oraz zbywalne (weksle handlowe,
        bony skarbowe, certyfikaty depozytowe, umowy repo, bony komercyjne).</li>
    <li><b>Rynek walutowy</b> (<i>foreign exchange market</i>) — pozagiełdowy; sprzedaż instrumentu wyrażonego
        w jednej walucie za instrument w innej walucie. Funkcja: kształtowanie cen dewiz.</li>
    <li><b>Rynek kapitałowy</b> (<i>capital market</i>) — instrumenty wierzycielskie (obligacje) i własnościowe (akcje).</li>
    <li><b>Rynek instrumentów pochodnych</b> (<i>derivatives market</i>) — obrót derywatami.</li>
  </ul>

  <h3>Obligacja vs akcja</h3>
  <table class="tbl">
    <tr><th></th><th>Obligacja</th><th>Akcja</th></tr>
    <tr><td>Dochód</td><td>stały</td><td>zmienny</td></tr>
    <tr><td>Charakter</td><td>wierzycielski (pożyczka)</td><td>własnościowy (udział w kapitale)</td></tr>
    <tr><td>Nabywca</td><td>udziela pożyczki emitentowi</td><td>współwłaściciel spółki, prawo do dywidendy</td></tr>
    <tr><td>Cel emisji</td><td>finansowanie wydatków / kapitał obcy</td><td>pozyskanie kapitału na rozwój</td></tr>
  </table>

  <h3>Instrument pochodny (derywat)</h3>
  <p>To instrument, którego <b>wartość zależy od wartości innego instrumentu</b> (tzw. <b>bazowego</b>).
  Instrumentem bazowym może być dowolny instrument finansowy. Tworzeniem nowych instrumentów pochodnych
  zajmuje się <b>inżynieria finansowa</b>.</p>
  <p>Podział instrumentów pochodnych:</p>
  <ul>
    <li><b>Ryzyko symetryczne</b> — forward, futures, swap. Powodują zobowiązanie z obu stron, zawsze
        występują przepływy pieniężne.</li>
    <li><b>Ryzyko niesymetryczne</b> — opcje. Opcja to prawo dla jednej strony, a zobowiązanie dla drugiej;
        przepływy nie muszą wystąpić.</li>
  </ul>

  <div class="callout good"><b>Trzy zastosowania instrumentów pochodnych:</b><br>
  1) <b>Zabezpieczanie</b> (hedging) portfela przed ryzykiem zmiany ceny instrumentu bazowego,<br>
  2) <b>Spekulacja</b> — korzyść ze wzrostu/spadku wartości instrumentu bazowego,<br>
  3) <b>Arbitraż</b> — korzyść z różnicy cen tego samego instrumentu bazowego.</div>

  <h3>Inwestorzy</h3>
  <ul>
    <li><b>Indywidualni.</b></li>
    <li><b>Instytucjonalni:</b> banki, fundusze emerytalne i towarzystwa ubezpieczeniowe (instrumenty bezpieczne,
        chroniące przed inflacją), otwarte fundusze inwestycyjne (zmienna liczba uczestników), zamknięte fundusze
        inwestycyjne (środki ze sprzedanych udziałów/akcji).</li>
  </ul>

  <h3>Organizacja handlu na GPW w Warszawie</h3>
  <p>GPW jest rynkiem <b>automatycznym, kierowanym zleceniami</b>. Od listopada 2000 r. działał system WARSET,
  a od 15 kwietnia 2013 r. — system <b>UTP</b> (Universal Trading Platform) zakupiony od NYSE Technologies.</p>
  <p>Segmenty: <b>Główny Rynek GPW</b>, <b>NewConnect</b> (małe i średnie spółki), <b>Catalyst</b> (obligacje, listy
  zastawne — GPW i BondSpot), <b>Treasury BondSpot Poland</b> (hurtowy obrót obligacjami skarbowymi).</p>
  `
},
/* ---------------------------------------------------------------- 2 */
{
  id: "ryzyko",
  title: "2. Ryzyko i zarządzanie ryzykiem",
  html: `
  <h2>Ryzyko i zarządzanie ryzykiem <span class="tag">Wykład 1</span></h2>
  <p>Ryzyko nie jest jednorodne — nie ma jednej uniwersalnej definicji. Występuje w aspekcie
  <b>obiektywnym</b> i <b>subiektywnym</b>; bywa rozpatrywane jako niebezpieczeństwo, hazard, niepewność,
  prawdopodobieństwo. Ryzyko jest raczej <b>procesem</b> niż stanem otoczenia.</p>

  <h3>Dwa podejścia do efektów ryzyka</h3>
  <ol>
    <li><b>Negatywne</b> — ryzyko jako możliwość poniesienia straty (zagrożenie).</li>
    <li><b>Neutralne</b> — możliwość efektu niezgodnego z oczekiwaniami: czasem zagrożenie, czasem szansa
        (pozytywne aspekty ryzyka).</li>
  </ol>
  <div class="callout"><b>Unikanie ryzyka jest unikaniem zysku!</b></div>

  <h3>Podział ryzyka wg czynników</h3>
  <table class="tbl">
    <tr><th>Systematyczne (zewnętrzne)</th><th>Niesystematyczne (specyficzne, wewnętrzne)</th></tr>
    <tr><td><b>Nie podlega kontroli</b> podmiotu</td><td><b>Może być kontrolowane</b> przez podmiot</td></tr>
    <tr><td>
      • stopy procentowej (interest rate)<br>
      • reinwestowania (reinvestment)<br>
      • walutowe (foreign exchange)<br>
      • rynku (market)<br>
      • rynkowej płynności (liquidity)<br>
      • siły nabywczej / inflacji (inflation)<br>
      • polityczne (political)<br>
      • wydarzeń (event)
    </td><td>
      • niedotrzymania warunków umowy przez emitenta (default)<br>
      • niewłaściwego zarządzania (management)<br>
      • biznesu — zmienność dochodów (business)<br>
      • finansowe — korzystanie z kapitału obcego (financial)
    </td></tr>
  </table>

  <h3>Zarządzanie ryzykiem — 4 działania</h3>
  <ol>
    <li>Rozpoznawanie rodzajów ryzyka.</li>
    <li>Pomiar ryzyka (miary zmienności, wrażliwości i zagrożenia).</li>
    <li>Kontrola ryzyka (redukcja strat, zabezpieczanie, przeniesienie ryzyka).</li>
    <li>Informacja o ryzyku.</li>
  </ol>
  <div class="callout warn"><b>Ryzyka nie można uniknąć, ale można je kontrolować!</b></div>

  <h3>Kontekst historyczny</h3>
  <ul>
    <li>Do lat 80. XX w. najważniejsze było <b>ryzyko kredytowe</b>.</li>
    <li>Przełom lat 80./90. — szybki rozwój instrumentów pochodnych.</li>
    <li>Lata 90. — seria afer finansowych. Przykład: <b>upadek Barings Bank</b> (luty 1995), najstarszego (233 lata)
        angielskiego banku komercyjnego. Trader <b>Nick Leeson</b> (28 lat, oddział w Singapurze) spekulował na
        azjatyckich giełdach derywatów; straty ok. <b>1,39 mld USD</b> przekroczyły kapitały banku.</li>
  </ul>
  `
},
/* ---------------------------------------------------------------- 3 */
{
  id: "forward",
  title: "3. Kontrakty forward",
  html: `
  <h2>Kontrakty forward <span class="tag">Wykład 1</span></h2>
  <p><b>Kontrakt forward</b> to umowa zawierana dziś na dostawę instrumentu bazowego w przyszłości.
  Nabywca (pozycja długa) zobowiązuje się <b>kupić</b> aktywa w określonym dniu (termin wykonania) po
  ustalonej dziś cenie (<b>cena wykonania / cena forward</b>). Wystawca (pozycja krótka) zobowiązuje się
  <b>dostarczyć</b> aktywa po tej samej cenie.</p>
  <p>Rozliczenie: fizyczna dostawa lub gotówkowe (wymiana różnicy między ceną wykonania a ceną rynkową/spot).</p>

  <h3>Wynik posiadacza (pozycja długa)</h3>
  <div class="formula">zysk posiadacza = (P<sub>T</sub> − P<sub>0</sub><sup>F</sup>) · (liczba jednostek)</div>
  <ul>
    <li>Jeśli <b>P<sub>T</sub> &gt; P<sub>0</sub><sup>F</sup></b> → nabywca ma zysk (= strata wystawcy).</li>
    <li>Jeśli <b>P<sub>T</sub> &lt; P<sub>0</sub><sup>F</sup></b> → nabywca ponosi stratę (= zysk wystawcy).</li>
  </ul>
  <p>P<sub>T</sub> — cena natychmiastowa (spot) w terminie wykonania; P<sub>0</sub><sup>F</sup> — cena forward.</p>

  <h3>Walutowy kontrakt forward i parytet stóp procentowych</h3>
  <p>Wartość bieżąca walutowego forwardu w momencie zawarcia musi być <b>równa zero</b>. Kurs gwarantujący
  to nazywa się <b>parytetem stóp procentowych</b> — to stosunek kursu terminowego do natychmiastowego.</p>
  <div class="formula">Kapitalizacja prosta: &nbsp; F<sub>t</sub> / S<sub>t</sub> = (1 + r<sub>2</sub>) / (1 + r<sub>1</sub>)</div>
  <div class="formula">Kapitalizacja ciągła: &nbsp; F<sub>t</sub> / S<sub>t</sub> = e<sup>(r<sub>2</sub> − r<sub>1</sub>)·T</sup></div>
  <p>Kurs liczony jako liczba jednostek waluty 2 na jednostkę waluty 1; r<sub>1</sub>, r<sub>2</sub> — stopy w skali roku.</p>
  <ul>
    <li><b>S<sub>t</sub> − F<sub>t</sub> &lt; 0 (dyskonto)</b> → rynek przewiduje, że waluta 2 będzie <b>słabsza</b>.</li>
    <li><b>S<sub>t</sub> − F<sub>t</sub> &gt; 0 (premia)</b> → rynek przewiduje, że waluta 2 będzie <b>silniejsza</b>.</li>
  </ul>

  <div class="example"><span class="lab">Przykład (parytet)</span>
  <p>S<sub>t</sub> = 4,1783 (PLN/EUR), EURIBOR r<sub>1</sub> = 0,0237, WIBOR r<sub>2</sub> = 0,0562. Wyznacz F<sub>t</sub>.</p>
  <details class="sol"><summary>Rozwiązanie</summary>
  F<sub>t</sub> = S<sub>t</sub>·(1+r<sub>2</sub>)/(1+r<sub>1</sub>) = 4,1783 · 1,0562 / 1,0237 ≈ <b>4,3110</b>.<br>
  Ponieważ S<sub>t</sub> − F<sub>t</sub> &lt; 0 (dyskonto), rynek przewiduje, że PLN (waluta 2) za rok będzie słabszy względem EUR.
  </details></div>
  `
},
/* ---------------------------------------------------------------- 4 */
{
  id: "fra",
  title: "4. Kontrakt FRA",
  html: `
  <h2>Procentowy kontrakt forward — FRA <span class="tag">Wykład 2</span></h2>
  <p><b>FRA</b> (Forward Rate Agreement) wywodzi się z transakcji <i>forward–forward</i>. W chwili T<sub>0</sub> jedna
  strona zobowiązuje się przyjąć od drugiej depozyt o ustalonej stopie na okres [T<sub>1</sub>, T<sub>2</sub>]
  w przyszłości. Aby ograniczyć ryzyko kredytowe, <b>kwota nominalna NIE jest wymieniana</b> — w chwili
  T<sub>1</sub> wymieniana jest tylko różnica odsetkowa R.</p>

  <div class="formula">R = |r − r<sub>FRA</sub>| · N · d &nbsp;/&nbsp; (D + r · d)</div>
  <ul>
    <li>r — stopa rynkowa na okres bazowy [T<sub>1</sub>,T<sub>2</sub>] w terminie T<sub>1</sub>,</li>
    <li>r<sub>FRA</sub> — zakontraktowana stopa,</li>
    <li>N — umowna kwota nominalna (nie wymieniana),</li>
    <li>d = T<sub>2</sub> − T<sub>1</sub> — liczba dni kontraktu, D — liczba dni w roku (360/365/366).</li>
  </ul>

  <h3>Kto komu płaci</h3>
  <ul>
    <li><b>r &lt; r<sub>FRA</sub></b> → <b>nabywca</b> płaci różnicę R sprzedającemu.</li>
    <li><b>r &gt; r<sub>FRA</sub></b> → <b>sprzedający</b> płaci różnicę R nabywcy.</li>
  </ul>
  <p>Uzasadnienie wzoru: brak arbitrażu w T<sub>2</sub> wymaga równości kapitałów N<sub>T2</sub> = X<sub>T2</sub>, gdzie
  N<sub>T2</sub> = N·(1 + r<sub>FRA</sub>·d/D), X<sub>T2</sub> = X·(1 + r·d/D), a różnica w T<sub>1</sub> wynosi R = |X − N|.</p>

  <div class="example"><span class="lab">Przykład</span>
  <p>Kontrahent X zawiera FRA (T<sub>1</sub>=3, T<sub>2</sub>=6) z bankiem B na 100&nbsp;tys. EUR. W dniu zawarcia
  3M EURIBOR = 2,54%. Określ przepływ w terminie rozliczenia, gdy za 3 miesiące 3M EURIBOR: (1) wzrośnie do 2,75%,
  (2) zmaleje do 2,35%. Przyjmij d = 90, D = 360.</p>
  <details class="sol"><summary>Wskazówka</summary>
  r<sub>FRA</sub> = 2,54%, d/D = 90/360 = 0,25.<br>
  (1) r = 2,75% &gt; r<sub>FRA</sub> → płaci <b>sprzedający (bank)</b>. R = (0,0275−0,0254)·100000·0,25 / (1+0,0275·0,25)
  ≈ 52,5 / 1,006875 ≈ <b>≈ 52,14 EUR</b>.<br>
  (2) r = 2,35% &lt; r<sub>FRA</sub> → płaci <b>nabywca (X)</b>. R = (0,0254−0,0235)·100000·0,25 / (1+0,0235·0,25)
  ≈ 47,5 / 1,005875 ≈ <b>≈ 47,22 EUR</b>.
  </details></div>
  `
},
/* ---------------------------------------------------------------- 5 */
{
  id: "futures",
  title: "5. Kontrakty futures",
  html: `
  <h2>Kontrakty futures <span class="tag">Wykłady 2–5</span></h2>
  <p>Futures powstały w wyniku ewolucji kontraktów forward — definicja jest w zasadzie taka sama,
  to instrumenty o <b>ryzyku symetrycznym</b>. W odróżnieniu od forwardów eliminują ryzyko kredytowe dzięki
  dwóm mechanizmom:</p>
  <ol>
    <li><b>Rozliczanie według rynku</b> (<i>marking to market</i>) — kontrakt rozliczany przy każdej zmianie
        wartości, a nie jednorazowo na koniec.</li>
    <li><b>Izba rozrachunkowa</b> (<i>clearing house</i>) — pośredniczy między stronami, gwarantuje warunki.</li>
  </ol>

  <h3>Cechy kontraktów futures</h3>
  <ul>
    <li>Są instrumentami <b>giełdowymi</b>.</li>
    <li>Są <b>standaryzowane</b> (ściśle określona ilość instrumentu bazowego i termin dostawy — standard opracowuje giełda).</li>
    <li>Instrument bazowy: towary, waluty, indeksy, inne instrumenty (np. akcje).</li>
    <li>Często brak fizycznej dostawy — pozycja zamykana przed terminem przez zajęcie pozycji odwrotnej.</li>
    <li>Obie strony wnoszą <b>depozyt zabezpieczający</b> (procent ceny kontraktu).</li>
  </ul>
  <p>Trzy funkcje: <b>zabezpieczająca, spekulacyjna, arbitrażowa</b>.</p>

  <h3>Wycena forward/futures</h3>
  <p>Cox–Ingersoll–Ross (1981): przy stałych stopach ceny forward i futures o tych samych terminach są zbliżone.
  Dwie ceny: <b>cena rozliczenia F</b> (terminowa, ustalana w dniu zawarcia) i <b>cena bieżąca S (spot)</b>.
  Cena F ustalana tak, by początkowa wartość kontraktu = 0. W terminie wygaśnięcia: <b>cena futures = cena spot</b>.</p>

  <div class="formula">Kapitalizacja ciągła: &nbsp; F = S<sub>0</sub>·e<sup>r·T</sup> &nbsp;&nbsp;|&nbsp;&nbsp; z dochodem: F = S<sub>0</sub>·e<sup>(r−d)·T</sup></div>
  <div class="formula">Kapitalizacja prosta: &nbsp; F = S<sub>0</sub>·(1 + r·t/365) &nbsp;|&nbsp; z dochodem: F = S<sub>0</sub>·(1 + (r−d)·t/365)</div>
  <p>S<sub>0</sub> — cena bieżąca, r — stopa wolna od ryzyka, T — czas w latach, t — czas w dniach, d — stopa dywidendy.</p>

  <h3>Ryzyko bazy</h3>
  <div class="formula">Ryzyko = F − S<sub>T</sub></div>
  <ul>
    <li>F = S → impuls do zmiany ceny daje zmiana oczekiwań co do spotu.</li>
    <li>F &lt; S → cena futures powinna wzrosnąć; utrzymuj <b>pozycję długą</b>.</li>
    <li>F &gt; S → cena futures powinna spaść; utrzymuj <b>pozycję krótką</b>.</li>
  </ul>
  <p>Cena futures powinna być <b>niższa</b> od spot dla kupującego (długa), a <b>wyższa</b> dla sprzedającego (krótka).
  Im bliżej wygaśnięcia, tym F i S różnią się coraz mniej, aż do równości.</p>

  <h3>Zabezpieczanie (hedging) — liczba kontraktów</h3>
  <div class="formula">liczba kontraktów ≈ wartość zabezpieczanej pozycji / wartość jednego kontraktu</div>
  <div class="example"><span class="lab">Przykład — portfel akcji vs indeks</span>
  <p>Portfel = 38&nbsp;500 zł, kontrakt na indeks: 700 pkt × 10 zł = 7000 zł. Spadek przewidywany → sprzedaż kontraktów.</p>
  <details class="sol"><summary>Rozwiązanie</summary>
  Liczba kontraktów = 38500 / 7000 = <b>5,5 ≈ 5–6 szt.</b> (zaokrąglamy).<br>
  Portfel niezabezpieczony spada 38500→35000 (strata 3500 zł, ok. −9,1%).<br>
  Krótka pozycja w kontraktach (kurs 700→650, spadek 50 pkt × 10 zł = 500 zł na kontrakt) daje zysk ≈ 5,5×500 = 2750 zł,
  który <b>kompensuje</b> część straty na akcjach. Wniosek: hedging ogranicza stratę.
  </details></div>

  <h3>Spekulacja i dźwignia</h3>
  <p>Spekulant wpłaca tylko <b>depozyt zabezpieczający</b> (np. 5% wartości), więc działa <b>dźwignia finansowa</b>.
  Stopę zwrotu liczy się względem zaangażowanego depozytu, nie pełnej wartości kontraktu.</p>
  <div class="example"><span class="lab">Przykład — spekulacja na wzrost</span>
  <p>Kupno 100 kontraktów na indeks po 1874 pkt (mnożnik 10 zł), depozyt 5%. Zamknięcie po 2376 pkt.</p>
  <details class="sol"><summary>Rozwiązanie</summary>
  Zmiana: (2376−1874) = 502 pkt × 10 zł × 100 = <b>+502 000 zł zysku</b>.<br>
  Wartość początkowa kontraktów = 1874×10×100 = 1 874 000 zł, depozyt 5% = 93 700 zł.<br>
  Stopa zwrotu z depozytu = 502000 / 93700 ≈ <b>+535,8%</b> (efekt dźwigni).
  </details></div>

  <h3>Arbitraż na rynku terminowym</h3>
  <ul>
    <li>Kurs kontraktu <b>niższy</b> od wartości teoretycznej (niedowartościowany) → <b>krótka sprzedaż instrumentu bazowego + zakup kontraktów</b>.</li>
    <li>Kurs kontraktu <b>wyższy</b> od wartości teoretycznej (przewartościowany) → <b>zakup instrumentu bazowego + sprzedaż kontraktów</b>.</li>
  </ul>
  <p>Zakończenie — w dniu wykonania, przez zajęcie pozycji odwrotnych. Arbitraż wyrównuje różnice cen, stabilizuje
  rynek i generuje płynność.</p>
  `
},
/* ---------------------------------------------------------------- 6 */
{
  id: "swap",
  title: "6. Kontrakty swap",
  html: `
  <h2>Kontrakty wymiany typu swap <span class="tag">Wykład 6</span></h2>
  <p>Swapy pojawiły się na rynkach <b>pozagiełdowych</b> w latach 80. XX w., stworzone przez <b>banki</b> (nie giełdy).
  To <b>najmłodszy instrument pochodny</b> i instrument o <b>ryzyku symetrycznym</b>. Swap to operacja wymiany
  strumieni finansowych o z góry ustalonych wartościach i terminach.</p>

  <h3>Dwa podstawowe rodzaje</h3>
  <ol>
    <li><b>IRS</b> — Interest Rate Swap (procentowy).</li>
    <li><b>CS</b> — Currency Swap (walutowy).</li>
  </ol>
  <p>Potrzebne są dwie strony o <b>przeciwnych potrzebach</b>; znalezienie ich umożliwiają <b>dealerzy/brokerzy swapów</b>
  (poprawiają płynność, ograniczają ryzyko kredytowe). Od początku XXI w. ponad <b>50% obrotu</b> pozagiełdowymi
  derywatami stanowią IRS.</p>

  <h3>Cel: korzyści komparatywne</h3>
  <p>Operacje swapowe pozwalają osiągać <b>korzyści komparatywne</b> wynikające ze zróżnicowanej oceny rynków i
  niejednakowego dostępu do nich. Użytkownicy: rządy, agencje rządowe i władze lokalne, agencje kredytujące eksport,
  instytucje ponadnarodowe (np. Bank Światowy, EBI), instytucje finansowe, korporacje.</p>

  <div class="callout warn">W swapach <b>występuje ryzyko kredytowe</b> — przy pogorszeniu sytuacji jednej ze stron i
  niekorzystnej zmianie stóp może dojść do niedotrzymania warunków.</div>

  <h3>Przykład korzyści komparatywnej (IRS)</h3>
  <p>Firma A pożycza zawsze drożej niż bank B:</p>
  <table class="tbl">
    <tr><th></th><th>Stopa zmienna</th><th>Stopa stała</th><th>Różnica</th></tr>
    <tr><td>Bank B</td><td>LIBOR + 1%</td><td>8%</td><td></td></tr>
    <tr><td>Firma A</td><td>LIBOR + 3%</td><td>12%</td><td></td></tr>
    <tr><td><b>Różnica</b></td><td>2%</td><td>4%</td><td><b>2%</b> łącznej korzyści</td></tr>
  </table>
  <p>Łączna korzyść komparatywna = 4% − 2% = <b>2%</b> do podziału między strony dzięki swapowi (każda strona pożycza
  tam, gdzie ma większą przewagę, i wymienia płatności).</p>

  <h3>Wycena IRS — stała stopa r<sub>s</sub></h3>
  <p>Wycena to wskazanie stałej stopy r<sub>s</sub>, przy której <b>nie ma arbitrażu</b>:</p>
  <div class="formula">
    r<sub>s</sub> = k·(1 − (1/(1+r<sub>N</sub>/k))<sup>N</sup>) &nbsp;/&nbsp; Σ<sub>i=1..N</sub> (1/(1+r<sub>i</sub>/k))<sup>i</sup>
  </div>
  <p>r<sub>i</sub> — znane zmienne stopy w i-tym okresie, N — liczba okresów odsetkowych, k — liczba okresów w roku.</p>
  `
},
/* ---------------------------------------------------------------- 7 */
{
  id: "opcje-podstawy",
  title: "7. Opcje — podstawy",
  html: `
  <h2>Kontrakty opcyjne — podstawy <span class="tag">Wykład 7</span></h2>
  <p>Opcje to instrumenty pochodne o <b>ryzyku niesymetrycznym</b>. Opcja daje <b>posiadaczowi prawo (nie obowiązek)</b>
  kupna lub sprzedaży instrumentu bazowego w ustalonym terminie po ustalonej cenie — w zamian za <b>premię</b>.
  <b>Wystawca</b> opcji jest <b>zobowiązany</b> do jej wykonania.</p>

  <h3>Rodzaje opcji</h3>
  <ul>
    <li><b>Opcja kupna (call)</b> — prawo do <b>zakupu</b> instrumentu bazowego.</li>
    <li><b>Opcja sprzedaży (put)</b> — prawo do <b>sprzedaży</b> instrumentu bazowego.</li>
  </ul>
  <h3>Typy wg terminu wykonania</h3>
  <ul>
    <li><b>Europejska</b> — realizacja tylko w dniu wygaśnięcia.</li>
    <li><b>Amerykańska</b> — realizacja w dowolnym dniu do wygaśnięcia.</li>
  </ul>
  <p>Opcje giełdowe: na akcje (stock), indeksowe (index), walutowe (FX), na kontrakty futures.</p>

  <h3>„Moneyness” opcji</h3>
  <table class="tbl">
    <tr><th>Stan</th><th>Opcja kupna (call)</th><th>Opcja sprzedaży (put)</th></tr>
    <tr><td><b>in-the-money</b> (w cenie, opłaca się wykonać)</td><td>cena wykonania &lt; cena rynkowa</td><td>cena wykonania &gt; cena rynkowa</td></tr>
    <tr><td><b>at-the-money</b> (po cenie)</td><td>cena wykonania = cena rynkowa</td><td>cena wykonania = cena rynkowa</td></tr>
    <tr><td><b>out-of-the-money</b> (nie w cenie)</td><td>cena wykonania &gt; cena rynkowa</td><td>cena wykonania &lt; cena rynkowa</td></tr>
  </table>

  <h3>Wartość opcji (premia) = wartość wewnętrzna + czasowa</h3>
  <ul>
    <li><b>Wartość wewnętrzna</b> (intrinsic value) — z funkcji wypłaty.</li>
    <li><b>Wartość zewnętrzna / czasowa</b> (time value) — „cena czasu”.</li>
  </ul>
  <p>Funkcja wypłaty (opcja europejska):</p>
  <div class="formula">call: &nbsp; f<sub>T</sub><sup>C</sup> = max{ S<sub>T</sub> − F ; 0 }</div>
  <div class="formula">put: &nbsp; f<sub>T</sub><sup>P</sup> = max{ F − S<sub>T</sub> ; 0 }</div>
  <p>F — cena wykonania, S<sub>T</sub> — cena instrumentu bazowego, T — termin wygaśnięcia.</p>

  <div class="example"><span class="lab">Przykłady</span>
  <p>1) Wartość wewnętrzna call, F = 100, cena akcji = 102 → max{102−100;0} = <b>2</b>.<br>
  2) Wartość wewnętrzna put, F = 100, cena akcji = 97 → max{100−97;0} = <b>3</b>.</p></div>
  `
},
/* ---------------------------------------------------------------- 8 */
{
  id: "czynniki-greckie",
  title: "8. Czynniki ceny i greckie współczynniki",
  html: `
  <h2>Wartość opcji — czynniki i współczynniki greckie <span class="tag">Wykłady 8–9</span></h2>
  <p>Cena opcji jest funkcją: <b>C = C(F, S, t, σ, r)</b> — pięć czynników wspólnych dla wszystkich opcji.</p>
  <ul>
    <li>Na <b>wartość wewnętrzną</b> wpływają: cena wykonania F, cena instrumentu bazowego S.</li>
    <li>Na <b>wartość czasową</b> wpływają: czas do wygaśnięcia t, zmienność σ, poziom stóp r.</li>
  </ul>

  <h3>Wpływ wzrostu czynnika na cenę opcji</h3>
  <table class="tbl">
    <tr><th>Wzrost czynnika</th><th>Opcja kupna (call)</th><th>Opcja sprzedaży (put)</th></tr>
    <tr><td>Cena wykonania F</td><td>spadek</td><td>wzrost</td></tr>
    <tr><td>Cena instrumentu bazowego S</td><td>wzrost</td><td>spadek</td></tr>
    <tr><td>Czas do wygaśnięcia t</td><td>wzrost</td><td>wzrost</td></tr>
    <tr><td>Zmienność σ</td><td>wzrost</td><td>wzrost</td></tr>
    <tr><td>Stopa procentowa r</td><td>wzrost</td><td>spadek</td></tr>
    <tr><td>Dywidenda (opcje akcyjne)</td><td>spadek</td><td>wzrost</td></tr>
  </table>

  <h3>Współczynniki greckie</h3>
  <table class="tbl">
    <tr><th>Współczynnik</th><th>Mierzy</th><th>Wzór / własności</th></tr>
    <tr><td><b>delta</b></td><td>reakcję ceny opcji na zmianę ceny bazowego</td><td>∂C/∂S; call ∈[0,1], put ∈[−1,0]; liczba akcji na 1 sprzedaną opcję (delta hedging)</td></tr>
    <tr><td><b>gamma</b></td><td>tempo zmian delty</td><td>∂²C/∂S²; <b>zawsze dodatnia</b>, jednakowa dla call i put</td></tr>
    <tr><td><b>theta</b></td><td>reakcję na upływ czasu</td><td>∂C/∂t; <b>prawie zawsze ujemna</b></td></tr>
    <tr><td><b>vega</b> (kappa, sigma, lambda)</td><td>reakcję na zmianę zmienności σ</td><td>∂C/∂σ; dodatnia, maleje przy zbliżaniu do wygaśnięcia, jednakowa dla call/put</td></tr>
    <tr><td><b>rho</b></td><td>reakcję na zmianę stopy r</td><td>∂C/∂r; uznawany za <b>najmniej ważny</b></td></tr>
  </table>

  <h3>Wzory (z modelu Blacka–Scholesa)</h3>
  <div class="formula">d<sub>1</sub> = [ ln(S/F) + r·t ] / (σ·√t) + 0,5·σ·√t &nbsp;&nbsp;;&nbsp;&nbsp; d<sub>2</sub> = d<sub>1</sub> − σ·√t</div>
  <div class="formula">delta<sub>c</sub> = N(d<sub>1</sub>) &nbsp;|&nbsp; delta<sub>p</sub> = N(d<sub>1</sub>) − 1</div>
  <div class="formula">gamma = N(d<sub>1</sub>) / (S·σ·√t)</div>
  <div class="formula">vega = S·N(d<sub>1</sub>)·√t / 100</div>
  <div class="formula">rho<sub>c</sub> = F·t·e<sup>−rt</sup>·N(d<sub>2</sub>) / 100 &nbsp;|&nbsp; rho<sub>p</sub> = −F·t·e<sup>−rt</sup>·N(d<sub>2</sub>) / 100</div>
  `
},
/* ---------------------------------------------------------------- 9 */
{
  id: "dwumianowy",
  title: "9. Wycena opcji — model dwumianowy",
  html: `
  <h2>Model dwumianowy (CRR) <span class="tag">Wykłady 10–11</span></h2>
  <p>Podstawowe modele wyceny opcji:</p>
  <ul>
    <li><b>Dyskretne (numeryczne):</b> dwumianowe (CRR Cox–Ross–Rubinstein), skończonych różnic, symulacje Monte Carlo.</li>
    <li><b>Ciągłe (analityczne):</b> Black–Scholes, Garman–Kohlhagen, inne.</li>
  </ul>
  <p>W modelu dwumianowym cena bazowego może w kolejnym kroku <b>wzrosnąć</b> (u) lub <b>spaść</b> (d). Prosta jest
  wycena opcji <b>europejskich</b>; trudniejsza <b>amerykańskich</b> (w każdym węźle trzeba sprawdzać, czy wczesne
  wykonanie nie jest optymalne).</p>

  <h3>Oznaczenia i prawdopodobieństwo arbitrażowe</h3>
  <ul>
    <li>S<sub>T−n</sub> — bieżąca cena bazowego, F — cena wykonania, r<sub>F</sub> — stopa wolna od ryzyka na 1 okres.</li>
    <li>Warunek braku arbitrażu: <b>u &gt; 1 + r<sub>F</sub></b>.</li>
  </ul>
  <div class="formula">Kapitalizacja prosta: &nbsp; p = (1 + r<sub>F</sub> − d) / (u − d)</div>
  <div class="formula">Kapitalizacja ciągła: &nbsp; p = (e<sup>r<sub>F</sub></sup> − d) / (u − d)</div>

  <h3>Model jednookresowy</h3>
  <p>Wartości na końcu: f<sub>u</sub><sup>C</sup> = max{u·S − F;0}, f<sub>d</sub><sup>C</sup> = max{d·S − F;0}
  (dla put: max{F − u·S;0}, max{F − d·S;0}).</p>
  <div class="formula">f<sub>T−1</sub> = [ p·f<sub>u</sub> + (1 − p)·f<sub>d</sub> ] / (1 + r<sub>F</sub>) &nbsp; (prosta)</div>
  <div class="formula">f<sub>T−1</sub> = [ p·f<sub>u</sub> + (1 − p)·f<sub>d</sub> ] / e<sup>r<sub>F</sub></sup> &nbsp; (ciągła)</div>

  <h3>Model dwuokresowy</h3>
  <div class="formula">f<sub>T−2</sub> = [ p²·f<sub>uu</sub> + 2p(1−p)·f<sub>ud</sub> + (1−p)²·f<sub>dd</sub> ] / (1 + r<sub>F</sub>)²</div>
  <p>Ceny: S<sub>uu</sub> = u²·S, S<sub>ud</sub> = u·d·S, S<sub>dd</sub> = d²·S.</p>

  <h3>Model n-okresowy</h3>
  <div class="formula">
    f<sub>T−n</sub> = Σ<sub>k=0..n</sub> [ C(n,k)·p<sup>n−k</sup>·(1−p)<sup>k</sup>·max{u<sup>n−k</sup>·d<sup>k</sup>·S − F ; 0} ] / (1 + r<sub>F</sub>)<sup>n</sup>
  </div>
  <p>gdzie C(n,k) = n!/(k!(n−k)!). Dla put zamieniamy wypłatę na max{F − u<sup>n−k</sup>d<sup>k</sup>S; 0}.</p>

  <div class="example"><span class="lab">Przykład — jednookresowy call</span>
  <p>S = 100, F = 100, u = 1,2, d = 0,9, r<sub>F</sub> = 5% (prosta).</p>
  <details class="sol"><summary>Rozwiązanie</summary>
  p = (1,05 − 0,9)/(1,2 − 0,9) = 0,15/0,3 = <b>0,5</b>.<br>
  f<sub>u</sub> = max{120−100;0} = 20; f<sub>d</sub> = max{90−100;0} = 0.<br>
  f = (0,5·20 + 0,5·0)/1,05 = 10/1,05 ≈ <b>9,52</b>.
  </details></div>
  `
},
/* ---------------------------------------------------------------- 10 */
{
  id: "black-scholes",
  title: "10. Model Blacka–Scholesa",
  html: `
  <h2>Model Blacka–Scholesa <span class="tag">Wykład 11</span></h2>
  <p>Model B–S (1973) — najpopularniejszy <b>analityczny</b> model wyceny opcji.</p>

  <h3>Założenia klasycznej wersji</h3>
  <ul>
    <li>opcja na akcje jest <b>typu europejskiego</b>,</li>
    <li>od akcji <b>nie są wypłacane dywidendy</b>,</li>
    <li>stopa wolna od ryzyka jest <b>stała</b> w okresie do wygaśnięcia,</li>
    <li>ceny akcji zmieniają się w sposób <b>ciągły</b>,</li>
    <li>zmiany cen mają rozkład <b>logarytmiczno-normalny</b>,</li>
    <li>brak podatków, <b>zerowe koszty transakcyjne</b>,</li>
    <li>rynek działa w sposób ciągły,</li>
    <li>rynek dopuszcza <b>krótką sprzedaż</b>.</li>
  </ul>

  <h3>Wzory</h3>
  <div class="formula">d<sub>1</sub> = [ ln(S/F) + r·t ] / (σ·√t) + 0,5·σ·√t &nbsp;;&nbsp; d<sub>2</sub> = d<sub>1</sub> − σ·√t</div>
  <div class="formula"><b>C = S·N(d<sub>1</sub>) − F·e<sup>−rt</sup>·N(d<sub>2</sub>)</b></div>
  <div class="formula"><b>P = C − S + F·e<sup>−rt</sup></b></div>
  <div class="callout"><b>Parytet kupno–sprzedaż (put–call parity):</b> &nbsp; C − P = S − F·e<sup>−rt</sup></div>
  <p>N(d) — dystrybuanta standaryzowanego rozkładu normalnego; S — cena bazowego, F — cena wykonania,
  r — stopa roczna, t — czas w latach, σ — odchylenie standardowe stopy zwrotu.</p>
  `
},
/* ---------------------------------------------------------------- 11 */
{
  id: "strategie",
  title: "11. Strategie opcyjne",
  html: `
  <h2>Strategie opcyjne <span class="tag">Wykład 12</span></h2>
  <h3>Strategie proste</h3>
  <ul>
    <li><b>long call</b> — zakup opcji kupna,</li>
    <li><b>short call</b> — wystawienie opcji kupna,</li>
    <li><b>long put</b> — zakup opcji sprzedaży,</li>
    <li><b>short put</b> — wystawienie opcji sprzedaży.</li>
  </ul>

  <h3>Najprostsze strategie złożone (zabezpieczające)</h3>
  <ul>
    <li><b>covered call</b> — wystawienie call + zakup akcji (call pokryta instrumentem bazowym).</li>
    <li><b>covered put</b> — wystawienie put + krótka sprzedaż akcji.</li>
  </ul>

  <h3>Dwie grupy strategii złożonych</h3>
  <ul>
    <li><b>Kombinacje</b> (combination) — zakup lub sprzedaż różnych opcji (kupna i sprzedaży) na ten sam instrument
        bazowy. Należą tu: straddle (stelaż), strangle (wydłużony stelaż), strip, strap.</li>
    <li><b>Rozpiętości</b> (spread) — inwestor jest jednocześnie nabywcą i wystawcą opcji na ten sam instrument bazowy.</li>
  </ul>

  <h3>Straddle (stelaż) — ta sama cena wykonania</h3>
  <table class="tbl">
    <tr><th></th><th>long straddle</th><th>short straddle</th></tr>
    <tr><td>Skład</td><td>long call + long put</td><td>short call + short put</td></tr>
    <tr><td>Oczekiwanie</td><td>duże zmiany ceny (bez kierunku)</td><td>stabilizacja ceny przy cenie wykonania</td></tr>
    <tr><td>Skrajny wynik</td><td>maks. strata = suma 2 premii</td><td>maks. zysk = suma 2 premii</td></tr>
  </table>

  <h3>Strangle (wydłużony stelaż) — różne ceny wykonania</h3>
  <table class="tbl">
    <tr><th></th><th>long strangle</th><th>short strangle</th></tr>
    <tr><td>Skład</td><td>long call + long put (różne F)</td><td>short call + short put (różne F)</td></tr>
    <tr><td>Oczekiwanie</td><td>duże zmiany ceny (bez kierunku)</td><td>stabilizacja w przedziale między cenami wykonania</td></tr>
    <tr><td>Skrajny wynik</td><td>maks. strata = suma 2 premii</td><td>maks. zysk = suma 2 premii</td></tr>
  </table>

  <div class="example"><span class="lab">Przykład — long straddle</span>
  <p>Zakup call za 2 jp i put za 3 jp, obie z F = 100 jp, ten sam termin.</p>
  <details class="sol"><summary>Analiza</summary>
  Koszt (maks. strata) = 2 + 3 = <b>5 jp</b>. Próg opłacalności: <b>100 − 5 = 95</b> oraz <b>100 + 5 = 105</b>.
  Zysk pojawia się przy dużym ruchu ceny poniżej 95 lub powyżej 105 jp.
  </details></div>
  `
}
];

/* =========================================================================
   WZORY — szybka ściąga
   ========================================================================= */
const FORMULAS = [
  { t: "Parytet stóp (prosta)", f: "F<sub>t</sub>/S<sub>t</sub> = (1+r₂)/(1+r₁)", d: "Walutowy forward — model prosty." },
  { t: "Parytet stóp (ciągła)", f: "F<sub>t</sub>/S<sub>t</sub> = e^((r₂−r₁)·T)", d: "Walutowy forward — model ciągły." },
  { t: "Wynik forward (długa)", f: "(P<sub>T</sub> − P₀<sup>F</sup>) · liczba jednostek", d: "Zysk posiadacza; znak ujemny = strata." },
  { t: "FRA — różnica R", f: "R = |r − r<sub>FRA</sub>|·N·d / (D + r·d)", d: "Płaci ten, kto był na gorszej stronie stopy." },
  { t: "Futures (ciągła)", f: "F = S₀·e^(r·T) &nbsp;(z dochodem: e^((r−d)·T))", d: "Wycena teoretyczna." },
  { t: "Futures (prosta)", f: "F = S₀·(1 + r·t/365)", d: "t w dniach; z dochodem r→(r−d)." },
  { t: "Ryzyko bazy", f: "Ryzyko = F − S<sub>T</sub>", d: "Różnica cena terminowa − spot." },
  { t: "Wycena IRS", f: "r<sub>s</sub> = k·(1−(1/(1+r<sub>N</sub>/k))^N) / Σ(1/(1+r<sub>i</sub>/k))^i", d: "Stała stopa bez arbitrażu." },
  { t: "Wypłata call", f: "max{ S<sub>T</sub> − F ; 0 }", d: "Wartość wewnętrzna opcji kupna." },
  { t: "Wypłata put", f: "max{ F − S<sub>T</sub> ; 0 }", d: "Wartość wewnętrzna opcji sprzedaży." },
  { t: "Prawdopod. arbitrażowe", f: "p = (1+r<sub>F</sub>−d)/(u−d) &nbsp;|&nbsp; (e^r<sub>F</sub>−d)/(u−d)", d: "Model dwumianowy (prosta | ciągła)." },
  { t: "Dwumianowy 1-okres", f: "f = [p·f<sub>u</sub> + (1−p)·f<sub>d</sub>] / (1+r<sub>F</sub>)", d: "Wartość bieżąca opcji." },
  { t: "Black–Scholes call", f: "C = S·N(d₁) − F·e^(−rt)·N(d₂)", d: "Opcja europejska, bez dywidendy." },
  { t: "Black–Scholes put", f: "P = C − S + F·e^(−rt)", d: "Z parytetu kupno-sprzedaż." },
  { t: "Put–call parity", f: "C − P = S − F·e^(−rt)", d: "Zależność cen call i put." },
  { t: "d₁, d₂", f: "d₁ = [ln(S/F)+r·t]/(σ√t) + 0,5σ√t ; d₂ = d₁ − σ√t", d: "Argumenty dystrybuanty." },
  { t: "delta", f: "call: N(d₁) ∈[0,1] ; put: N(d₁)−1 ∈[−1,0]", d: "Reakcja na zmianę S." },
  { t: "gamma", f: "N(d₁)/(S·σ·√t)", d: "Zawsze dodatnia." },
  { t: "vega", f: "S·N(d₁)·√t / 100", d: "Reakcja na zmienność σ." }
];

/* =========================================================================
   PYTANIA TESTOWE — inspirowane zadaniami z książki o kontraktach i opcjach
   answer = indeks poprawnej odpowiedzi (0-based)
   ========================================================================= */
const QUIZZES = {
  rynki: {
    title: "Rynki finansowe i ryzyko",
    desc: "Segmenty rynku, instrumenty, klasyfikacja ryzyka.",
    icon: "🏦",
    questions: [
      { q: "Instrumenty rynku pieniężnego charakteryzują się terminem zapadalności:", o:["powyżej 5 lat","do 1 roku","od 1 do 3 lat","bezterminowym"], a:1, e:"Rynek pieniężny obejmuje instrumenty o zapadalności nieprzekraczającej 1 roku." },
      { q: "Który instrument jest papierem wartościowym o stałym dochodzie?", o:["akcja","obligacja","opcja","jednostka uczestnictwa"], a:1, e:"Obligacja dokumentuje pożyczkę i zwrot wraz z odsetkami — dochód stały. Akcja ma dochód zmienny." },
      { q: "Instrument pochodny to taki, którego wartość:", o:["jest stała w czasie","zależy od wartości instrumentu bazowego","jest zawsze równa zero","nie zależy od rynku"], a:1, e:"Derywat czerpie wartość z instrumentu bazowego." },
      { q: "Które instrumenty mają ryzyko symetryczne?", o:["opcje kupna","opcje sprzedaży","forward, futures, swap","warranty"], a:2, e:"Forward, futures i swap tworzą zobowiązanie po obu stronach — ryzyko symetryczne." },
      { q: "Arbitraż polega na:", o:["zabezpieczeniu portfela","osiąganiu korzyści z różnicy cen tego samego instrumentu","wypłacie dywidendy","emisji akcji"], a:1, e:"Arbitraż = korzyść z różnicy cen tego samego instrumentu bazowego." },
      { q: "Ryzyko stopy procentowej należy do ryzyka:", o:["systematycznego","niesystematycznego","kredytowego emitenta","operacyjnego firmy"], a:0, e:"To ryzyko zewnętrzne, niepodlegające kontroli podmiotu — systematyczne." },
      { q: "Ryzyko niedotrzymania warunków umowy przez emitenta (default risk) to ryzyko:", o:["systematyczne","niesystematyczne (specyficzne)","walutowe","inflacji"], a:1, e:"Default risk dotyczy konkretnego podmiotu — ryzyko niesystematyczne." },
      { q: "Od 15 kwietnia 2013 r. GPW w Warszawie działa w systemie transakcyjnym:", o:["WARSET","UTP","CATALYST","NYSE Direct"], a:1, e:"UTP (Universal Trading Platform) zastąpił WARSET." },
      { q: "Segment GPW przeznaczony do obrotu obligacjami i listami zastawnymi to:", o:["NewConnect","Catalyst","Główny Rynek","Treasury BondSpot"], a:1, e:"Catalyst — obrót obligacjami (prowadzony przez GPW i BondSpot)." },
      { q: "Zdanie „Unikanie ryzyka jest unikaniem zysku” odnosi się do:", o:["braku związku ryzyka i zysku","pozytywnego aspektu ryzyka (szansy)","wyłącznie strat","ryzyka kredytowego"], a:1, e:"Podkreśla, że ryzyko bywa też szansą — neutralne podejście do ryzyka." },
      { q: "Upadek Barings Bank (1995) był spowodowany działaniami tradera:", o:["Warrena Buffetta","Nicka Leesona","Johna Mertona","Myrona Scholesa"], a:1, e:"Nick Leeson spekulował na azjatyckich derywatach — straty ok. 1,39 mld USD." },
      { q: "Otwarte fundusze inwestycyjne charakteryzują się:", o:["stałą liczbą uczestników","zmienną liczbą uczestników i kapitału","brakiem możliwości zbycia jednostek","inwestowaniem wyłącznie w akcje"], a:1, e:"Jednostki uczestnictwa można nabywać i zbywać w dowolnym momencie." }
    ]
  },
  forwardfra: {
    title: "Forward i FRA",
    desc: "Kontrakty forward, parytet stóp, kontrakty FRA.",
    icon: "📄",
    questions: [
      { q: "W kontrakcie forward nabywca (pozycja długa) zobowiązuje się do:", o:["sprzedaży aktywów","zakupu aktywów w przyszłości po cenie ustalonej dziś","wypłaty premii","dostarczenia depozytu"], a:1, e:"Nabywca kupuje aktywa w terminie wykonania po cenie forward." },
      { q: "Posiadacz forwardu osiąga zysk, gdy w terminie wykonania:", o:["P_T < P₀^F","P_T = P₀^F","P_T > P₀^F","cena spot = 0"], a:2, e:"Zysk posiadacza = (P_T − P₀^F)·liczba jednostek > 0, gdy spot przewyższa cenę forward." },
      { q: "Wartość bieżąca walutowego forwardu w momencie zawarcia powinna być:", o:["dodatnia","ujemna","równa zero","równa premii"], a:2, e:"Kurs gwarantujący zerową wartość to parytet stóp procentowych." },
      { q: "Sytuacja S_t − F_t < 0 (dyskonto) oznacza, że rynek przewiduje, iż waluta 2 będzie:", o:["silniejsza","słabsza","niezmieniona","wycofana"], a:1, e:"Dyskonto → przewidywane osłabienie waluty 2 względem waluty 1." },
      { q: "Parytet stóp w modelu kapitalizacji prostej to:", o:["F/S = (1+r₁)/(1+r₂)","F/S = (1+r₂)/(1+r₁)","F/S = e^(r₂−r₁)","F/S = r₂ − r₁"], a:1, e:"F_t/S_t = (1+r₂)/(1+r₁)." },
      { q: "Dane: S = 4,00, r₁ = 2%, r₂ = 6% (prosta). Kurs forward F wynosi ok.:", o:["3,85","4,16","4,00","4,40"], a:1, e:"F = 4·(1,06/1,02) = 4·1,0392 ≈ 4,16." },
      { q: "W kontrakcie FRA wymieniana jest:", o:["pełna kwota nominalna","tylko różnica odsetkowa R","wyłącznie premia opcyjna","depozyt zabezpieczający"], a:1, e:"Kwota nominalna nie jest wymieniana; w T₁ płynie tylko różnica R." },
      { q: "W FRA, jeśli r < r_FRA, to różnicę R płaci:", o:["nabywca sprzedającemu","sprzedający nabywcy","izba rozrachunkowa","nikt"], a:0, e:"Przy r < r_FRA nabywca płaci sprzedającemu; przy r > r_FRA odwrotnie." },
      { q: "We wzorze FRA: R = |r − r_FRA|·N·d/(D + r·d), symbol d oznacza:", o:["stopę dywidendy","liczbę dni kontraktu (T₂−T₁)","liczbę dni w roku","deltę opcji"], a:1, e:"d = T₂ − T₁, liczba dni kontraktu; D to liczba dni w roku." },
      { q: "FRA wywodzi się z transakcji:", o:["spot–spot","forward–forward","futures–spot","swap–opcja"], a:1, e:"FRA pochodzi z transakcji forward–forward." }
    ]
  },
  futures: {
    title: "Kontrakty futures",
    desc: "Mechanizmy, wycena, hedging, spekulacja, arbitraż.",
    icon: "📈",
    questions: [
      { q: "Mechanizm rozliczania kontraktu futures przy każdej zmianie wartości to:", o:["clearing house","marking to market","short selling","spread"], a:1, e:"Marking to market — codzienne rozliczanie według rynku." },
      { q: "Izba rozrachunkowa (clearing house) w kontraktach futures:", o:["ustala premię opcyjną","gwarantuje wykonanie warunków kontraktu","emituje akcje","wypłaca dywidendę"], a:1, e:"Pośredniczy i gwarantuje warunki — eliminuje ryzyko kredytowe." },
      { q: "Kontrakty futures, w odróżnieniu od forward, są:", o:["pozagiełdowe i niestandaryzowane","giełdowe i standaryzowane","wyłącznie walutowe","instrumentami niesymetrycznymi"], a:1, e:"Futures są giełdowe i standaryzowane." },
      { q: "Cena rozliczenia F ustalana jest tak, aby początkowa wartość kontraktu wynosiła:", o:["premię","zero","cenę spot","depozyt"], a:1, e:"Początkowa wartość kontraktu = 0." },
      { q: "Wzór F = S₀·e^(r·T) dotyczy wyceny w modelu kapitalizacji:", o:["prostej","ciągłej","półrocznej","kwartalnej"], a:1, e:"Postać wykładnicza e^(rT) to kapitalizacja ciągła." },
      { q: "Dla instrumentu przynoszącego okresowy dochód d, cena futures (ciągła) to:", o:["S₀·e^(r+d)T","S₀·e^(r−d)T","S₀·e^(d−r)T","S₀·e^(r·d·T)"], a:1, e:"Dochód obniża cenę terminową: F = S₀·e^((r−d)T)." },
      { q: "Oblicz F: S₀ = 100, r = 6%, t = 73 dni (prosta, rok 365 dni):", o:["100,60","101,20","106,00","112,00"], a:1, e:"F = 100·(1 + 0,06·73/365) = 100·(1+0,012) = 101,20." },
      { q: "Ryzyko bazy kontraktu futures definiuje się jako:", o:["F · S_T","F − S_T","S_T / F","F + S_T"], a:1, e:"Ryzyko = F − S_T (różnica cena terminowa − spot)." },
      { q: "Jeśli cena futures < cena spot, to inwestor powinien:", o:["zamknąć wszystkie pozycje","utrzymać długą pozycję","utrzymać krótką pozycję","kupić opcję put"], a:1, e:"Cena futures powinna wzrosnąć — korzystna jest pozycja długa." },
      { q: "Importer obawiający się wzrostu kursu EUR/PLN powinien zająć pozycję:", o:["krótką w futures na EUR","długą w futures na EUR","long put na PLN","brak działania"], a:1, e:"Zakup (pozycja długa) kontraktów futures zabezpiecza przed wzrostem kursu." },
      { q: "Spekulant kupił 100 kontraktów po 1874 pkt (mnożnik 10 zł), zamknął po 2376 pkt. Zysk wynosi:", o:["50 200 zł","502 000 zł","5 020 zł","250 000 zł"], a:1, e:"(2376−1874)·10·100 = 502·1000 = 502 000 zł." },
      { q: "Gdy kontrakt jest przewartościowany (kurs > wartość teoretyczna), arbitraż polega na:", o:["zakupie bazowego i sprzedaży kontraktów","krótkiej sprzedaży bazowego i zakupie kontraktów","zakupie obu","sprzedaży obu"], a:0, e:"Przewartościowany → kup tani instrument bazowy, sprzedaj drogie kontrakty." },
      { q: "Eksporter obawiający się spadku kursu USD/PLN zajmuje pozycję:", o:["długą w futures na USD","krótką (sprzedaż) w futures na USD","long call na USD","kupuje akcje"], a:1, e:"Krótka pozycja w futures zabezpiecza przed spadkiem kursu." },
      { q: "Działania arbitrażystów na rynku terminowym prowadzą do:", o:["wzrostu różnic cenowych","wyrównania różnic między rynkiem kasowym a terminowym","spadku płynności","wzrostu ryzyka kredytowego"], a:1, e:"Arbitraż wyrównuje ceny, stabilizuje rynek i zwiększa płynność." }
    ]
  },
  swap: {
    title: "Kontrakty swap",
    desc: "IRS, CS, korzyści komparatywne, wycena.",
    icon: "🔄",
    questions: [
      { q: "Kontrakty swap zostały stworzone przez:", o:["giełdy","banki","rządy","fundusze emerytalne"], a:1, e:"Swapy powstały na rynku pozagiełdowym, stworzone przez banki." },
      { q: "Swap jest instrumentem o ryzyku:", o:["niesymetrycznym","symetrycznym","zerowym","wyłącznie walutowym"], a:1, e:"Podobnie jak forward i futures — ryzyko symetryczne." },
      { q: "Skrót IRS oznacza:", o:["Index Rate System","Interest Rate Swap","International Risk Standard","Internal Return Swap"], a:1, e:"IRS = Interest Rate Swap (swap procentowy)." },
      { q: "Celem operacji swapowych jest osiąganie korzyści:", o:["podatkowych","komparatywnych","arbitrażowych bez ryzyka","dywidendowych"], a:1, e:"Korzyści komparatywne ze zróżnicowanej oceny rynków." },
      { q: "W kontraktach swap:", o:["nie występuje ryzyko kredytowe","występuje ryzyko kredytowe","ryzyko jest zawsze zerowe","gwarantuje je giełda"], a:1, e:"Wymiana płatności rodzi ryzyko kredytowe (pogorszenie sytuacji strony)." },
      { q: "Bank B: stała 8% / zmienna LIBOR+1%; Firma A: stała 12% / zmienna LIBOR+3%. Łączna korzyść komparatywna wynosi:", o:["1%","2%","4%","6%"], a:1, e:"Różnice: stała 4%, zmienna 2%; korzyść = 4% − 2% = 2%." },
      { q: "Pośrednicy na rynku swap (dealerzy) przede wszystkim:", o:["zwiększają ryzyko","poprawiają płynność i ograniczają ryzyko kredytowe","emitują obligacje","ustalają stopę WIBOR"], a:1, e:"Dealerzy swapów poprawili płynność i ograniczyli ryzyko kredytowe." },
      { q: "Wycena IRS polega na wyznaczeniu stałej stopy r_s, przy której:", o:["zysk jest maksymalny","nie zachodzi możliwość arbitrażu","premia = 0","delta = 1"], a:1, e:"r_s to stopa eliminująca arbitraż." },
      { q: "Od początku XXI w. kontrakty IRS stanowią ponad ... światowego obrotu pozagiełdowymi derywatami:", o:["10%","25%","50%","90%"], a:2, e:"Ponad 50% obrotu OTC stanowią IRS." }
    ]
  },
  opcje: {
    title: "Opcje — podstawy",
    desc: "Call/put, europejska/amerykańska, moneyness, wartość.",
    icon: "🎫",
    questions: [
      { q: "Opcja daje jej posiadaczowi:", o:["obowiązek wykonania","prawo (ale nie obowiązek) wykonania","gwarancję zysku","prawo do dywidendy"], a:1, e:"Posiadacz ma prawo, wystawca ma obowiązek." },
      { q: "Opcja kupna (call) daje prawo do:", o:["sprzedaży instrumentu bazowego","zakupu instrumentu bazowego","wypłaty odsetek","emisji akcji"], a:1, e:"Call = prawo zakupu po cenie wykonania." },
      { q: "Opcja amerykańska może być wykonana:", o:["tylko w dniu wygaśnięcia","w dowolnym dniu do wygaśnięcia","tylko w USA","po wygaśnięciu"], a:1, e:"Amerykańska — w dowolnym dniu; europejska — tylko w dniu wygaśnięcia." },
      { q: "Opcja kupna jest 'in-the-money', gdy:", o:["cena wykonania < cena rynkowa","cena wykonania > cena rynkowa","cena wykonania = cena rynkowa","premia = 0"], a:0, e:"Call ITM: cena wykonania niższa niż rynkowa — opłaca się wykonać." },
      { q: "Wartość opcji jest sumą wartości:", o:["nominalnej i rynkowej","wewnętrznej i czasowej","wewnętrznej i nominalnej","delty i gammy"], a:1, e:"Premia = wartość wewnętrzna + wartość czasowa (zewnętrzna)." },
      { q: "Funkcja wypłaty europejskiej opcji kupna to:", o:["max{F − S_T; 0}","max{S_T − F; 0}","min{S_T − F; 0}","S_T − F"], a:1, e:"Call: max{S_T − F; 0}." },
      { q: "Wartość wewnętrzna call: F = 100, cena rynkowa = 102 wynosi:", o:["0","2","102","100"], a:1, e:"max{102 − 100; 0} = 2." },
      { q: "Wartość wewnętrzna put: F = 100, cena rynkowa = 97 wynosi:", o:["0","3","97","−3"], a:1, e:"max{100 − 97; 0} = 3." },
      { q: "Opcja put jest 'out-of-the-money', gdy:", o:["cena wykonania > cena rynkowa","cena wykonania < cena rynkowa","cena wykonania = cena rynkowa","S_T = 0"], a:1, e:"Put OTM: cena wykonania niższa niż rynkowa — nie opłaca się wykonać." },
      { q: "Wystawca (sprzedawca) opcji:", o:["ma prawo wyboru","jest zobowiązany do jej wykonania","płaci premię","nie ponosi ryzyka"], a:1, e:"Wystawca ma obowiązek wykonania w zamian za otrzymaną premię." }
    ]
  },
  greckie: {
    title: "Czynniki ceny i greckie",
    desc: "Wpływ czynników, delta, gamma, theta, vega, rho.",
    icon: "🔢",
    questions: [
      { q: "Wzrost ceny instrumentu bazowego (S) powoduje:", o:["wzrost ceny call i spadek ceny put","spadek ceny call i wzrost ceny put","wzrost obu","spadek obu"], a:0, e:"Wyższe S → droższy call, tańszy put." },
      { q: "Wzrost zmienności σ powoduje:", o:["spadek cen obu opcji","wzrost cen zarówno call, jak i put","wzrost tylko call","wzrost tylko put"], a:1, e:"Większa zmienność podnosi ceny obu typów opcji." },
      { q: "Współczynnik delta dla opcji kupna przyjmuje wartości z przedziału:", o:["[−1, 0]","[0, 1]","[−1, 1]","[1, 2]"], a:1, e:"delta_call ∈ [0,1]; delta_put ∈ [−1,0]." },
      { q: "Współczynnik gamma:", o:["jest zawsze ujemny","jest zawsze dodatni","może być dowolny","równy delcie"], a:1, e:"Gamma dla opcji jest zawsze dodatnia (tempo zmian delty)." },
      { q: "Współczynnik theta jest prawie zawsze:", o:["dodatni","ujemny","równy zero","równy 1"], a:1, e:"Wartość opcji maleje z upływem czasu → theta prawie zawsze ujemna." },
      { q: "Współczynnik vega mierzy wrażliwość ceny opcji na zmianę:", o:["ceny bazowego","zmienności σ","stopy procentowej","ceny wykonania"], a:1, e:"Vega = ∂C/∂σ — reakcja na zmienność." },
      { q: "Który współczynnik uznawany jest za najmniej ważny?", o:["delta","gamma","vega","rho"], a:3, e:"Rho (wrażliwość na stopę) uznaje się za najmniej istotny." },
      { q: "Wzrost stopy procentowej r prowadzi do:", o:["wzrostu ceny call i spadku ceny put","spadku ceny call","wzrostu obu","spadku obu"], a:0, e:"Wyższe r obniża wartość bieżącą ceny wykonania → droższy call, tańszy put." },
      { q: "Delta opcji informuje, ile akcji trzeba posiadać na jedną sprzedaną opcję, aby:", o:["zmaksymalizować zysk","zbudować strategię o zerowym ryzyku","zminimalizować premię","wykonać opcję"], a:1, e:"To idea delta-hedgingu — strategia o zerowym ryzyku." },
      { q: "Cena opcji C jest funkcją zmiennych:", o:["tylko S i F","F, S, t, σ, r","tylko σ i r","S, F i dywidendy"], a:1, e:"C = C(F, S, t, σ, r)." },
      { q: "Dla opcji akcyjnej wzrost dywidendy powoduje:", o:["wzrost ceny call","spadek ceny call i wzrost ceny put","wzrost obu","brak wpływu"], a:1, e:"Dywidenda obniża wartość akcji → tańszy call, droższy put." }
    ]
  },
  wycena: {
    title: "Wycena opcji",
    desc: "Model dwumianowy (CRR) i Black–Scholes.",
    icon: "🧮",
    questions: [
      { q: "Model dwumianowy (CRR) należy do modeli:", o:["ciągłych (analitycznych)","dyskretnych (numerycznych)","stochastycznych ciągłych","liniowych"], a:1, e:"Model dwumianowy to model dyskretny/numeryczny." },
      { q: "Model Blacka–Scholesa należy do modeli:", o:["dyskretnych","ciągłych (analitycznych)","symulacyjnych","drzew dwumianowych"], a:1, e:"B–S to model ciągły (analityczny)." },
      { q: "Prawdopodobieństwo arbitrażowe (kapitalizacja prosta) wynosi:", o:["(u−d)/(1+r_F)","(1+r_F−d)/(u−d)","(u−1−r_F)/(u−d)","(d−r_F)/(u−d)"], a:1, e:"p = (1+r_F−d)/(u−d)." },
      { q: "Warunek braku arbitrażu w modelu dwumianowym to:", o:["u < d","u > 1 + r_F","d > 1 + r_F","u = d"], a:1, e:"Wzrost u musi przewyższać wzrost z lokaty wolnej od ryzyka: u > 1+r_F." },
      { q: "Dane: u=1,2, d=0,9, r_F=5% (prosta). Prawdopodobieństwo arbitrażowe p wynosi:", o:["0,3","0,5","0,15","0,75"], a:1, e:"p = (1,05−0,9)/(1,2−0,9) = 0,15/0,3 = 0,5." },
      { q: "Wycena jednookresowej call: f_u=20, f_d=0, p=0,5, r_F=5% (prosta) daje:", o:["10,00","9,52","20,00","0,95"], a:1, e:"f = (0,5·20+0,5·0)/1,05 = 10/1,05 ≈ 9,52." },
      { q: "Wartość europejskiej opcji kupna w modelu B–S wyraża wzór:", o:["C = S·N(d₁) − F·e^(−rt)·N(d₂)","C = F·N(d₁) − S·N(d₂)","C = S − F","C = max{S−F;0}"], a:0, e:"C = S·N(d₁) − F·e^(−rt)·N(d₂)." },
      { q: "Parytet kupno–sprzedaż (put–call parity) ma postać:", o:["C + P = S","C − P = S − F·e^(−rt)","C − P = F − S","C·P = S·F"], a:1, e:"C − P = S − F·e^(−rt)." },
      { q: "Które NIE jest założeniem klasycznego modelu Blacka–Scholesa?", o:["opcja jest europejska","wypłacane są wysokie dywidendy","zerowe koszty transakcyjne","stała stopa wolna od ryzyka"], a:1, e:"B–S zakłada brak dywidend, a nie wysokie dywidendy." },
      { q: "W modelu dwumianowym wycena opcji amerykańskiej jest trudniejsza, bo:", o:["nie ma wzoru na p","w każdym węźle trzeba sprawdzić opłacalność wcześniejszego wykonania","u musi być ujemne","brak instrumentu bazowego"], a:1, e:"Trzeba sprawdzać, czy wcześniejsze wykonanie nie jest optymalne." }
    ]
  },
  strategie: {
    title: "Strategie opcyjne",
    desc: "Proste, covered, straddle, strangle, spread.",
    icon: "♟️",
    questions: [
      { q: "Strategia 'covered call' polega na:", o:["wystawieniu call + zakupie akcji","zakupie call + zakupie put","krótkiej sprzedaży akcji + put","zakupie dwóch call"], a:0, e:"Covered call = wystawienie opcji kupna pokryte zakupem akcji." },
      { q: "Long straddle składa się z:", o:["long call + short put","long call + long put (ta sama cena wykonania)","short call + short put","long call + long call"], a:1, e:"Long straddle = long call + long put o tej samej cenie i terminie." },
      { q: "Long straddle stosuje inwestor, który oczekuje:", o:["stabilizacji ceny","dużych zmian ceny bez pewności kierunku","tylko wzrostu","tylko spadku"], a:1, e:"Stelaż gra na dużą zmienność, niezależnie od kierunku." },
      { q: "Maksymalna strata nabywcy long straddle wynosi:", o:["zero","sumę dwóch zapłaconych premii","cenę wykonania","nieograniczona"], a:1, e:"Maks. strata = suma obu zapłaconych premii." },
      { q: "Różnica między strangle a straddle polega na tym, że strangle ma:", o:["ten sam termin, różne ceny wykonania","różne terminy, tę samą cenę","tylko opcje call","tylko opcje put"], a:0, e:"Strangle (wydłużony stelaż) — różne ceny wykonania, ten sam termin." },
      { q: "Short straddle przynosi maksymalny zysk równy:", o:["sumie dwóch zapłaconych premii","sumie dwóch otrzymanych premii","cenie wykonania","zero"], a:1, e:"Wystawca otrzymuje dwie premie — to jego maks. zysk." },
      { q: "Strategie typu 'spread' (rozpiętości) charakteryzują się tym, że inwestor:", o:["jest tylko nabywcą","jest jednocześnie nabywcą i wystawcą opcji na ten sam bazowy","wystawia tylko call","kupuje akcje i obligacje"], a:1, e:"Spread = jednoczesna pozycja nabywcy i wystawcy opcji." },
      { q: "Do strategii typu kombinacje NIE należy:", o:["straddle","strangle","strip","covered call"], a:3, e:"Kombinacje: straddle, strangle, strip, strap. Covered call to prosta strategia zabezpieczająca." },
      { q: "Long straddle: call za 2 jp i put za 3 jp, F=100. Progi opłacalności to:", o:["98 i 102","95 i 105","100 i 105","97 i 103"], a:1, e:"Koszt 5 jp → progi 100−5=95 oraz 100+5=105." },
      { q: "Short strangle stosuje wystawca oczekujący:", o:["dużych wzrostów","dużych spadków","stabilizacji ceny w przedziale między cenami wykonania","bankructwa emitenta"], a:2, e:"Wystawca zarabia premie, gdy cena pozostaje w przedziale między cenami wykonania." }
    ]
  }
};
