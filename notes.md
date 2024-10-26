# Leervragen sprint 13
In deze sprint ga ik mijzelf leervragen opstellen waar ik graag mee verder zou willen gaan

## Leervragen
- Hoe maak ik een beter en meer overzichtelijk ontwerp
- Hoe kan ik meer overzichtelijk documenteren
- Hoe plan ik mijn tijd beter in




## Maandag 2 september
Vandaag heb ik de intro gehad en gehoord hoe het jaar eruitziet. We kregen te horen hoe alles eruit ziet en wat de planning in het verloop van het jaar is. Ook hebben we groepjes gemaakt voor een nieuw project squad page. Ook hebben we met het team een teamcanvas opgesteld zodat we iedereens sterke en zwakke punten kennen en de vlakken waarop iedereen zich wilt verbeteren.

### Wat heb ik geleerd
Vandaag heb ik geleerd wat de plekken zijn om samen met mijn groepje te werken.

## Dinsdag 3 september

### Stage gesprek
Ik ben vandaag naar het bedrijf werktijden geweest om rond te kijken voor een eventuele stage. Ik heb daar mijn werk gepresenteerd aan de head developer en de baas van het bedrijf. Ze vonden het er goed uit zien en we hebben de mogelijkheden voor een stage besproken. Ik kan later dit jaar terug komen en heb de vrijheid om zelf een project voor hun te verzinnen dat aansluit bij hun bedrijf.

### Werken in groepjes
Vandaag zijn we gaan werken op school en hebben we inspiratie opgedaan via een gezamenlijk miro bord. We zijn gaan zitten in een van de faciliteiten van de hva We hebben onze ideeen met elkaar besproken via een groot scherm. Ook hebben we al een kleine taak verdeling gemaakt voor thuis. Ik zou het ontwerp gaan maken, want hier wil ik graag mee oefenen.

### Wat heb ik geleerd?

- Wat is svelte kit?
Svelte kit is een framework waarmee je websites kunt bouwen, het neemt zaken zoals routing uit handen en maakt de webrendering een stuk sneller wat goed is voor de peformance van de website.

- Hoe zet je een svelte project op?
1. open je terminal
2. gebruik npm create svelte@latest
3. kies een skeleton project met js
4. svelte is geinstalleerd!

- Hoe koppel je een API aan svelte
1. Voer een directus installatie toe in de root van je projectmap: npm install @directus/sdk

2. Maak een directus. js file in de src/libs directory en zet daar het volgende in:
import { createDirectus, rest } from '@directus/sdk';
import { readItems, readItem, updateItem, updateUser, createItem, deleteItem } from '@directus/sdk';
import { PUBLIC_APIURL } from '$env/static/public';

function getDirectusInstance(fetch) {
  	const options = fetch ? { globals: { fetch } } : {};
	const directus = createDirectus(PUBLIC_APIURL, options ).with(rest());
	return directus;
}

export default getDirectusInstance;

3. maak een hooks.server.js aan en zet daar het volgende in:
export async function handle({ event, resolve }) {
	return await resolve(event, {
		filterSerializedResponseHeaders: (key, value) => {
			return key.toLowerCase() === 'content-type';
		},
	});
}

4. Maak een .env file aan en zet daar het volgende in:
PUBLIC_APIURL = https://fdnd.directus.app
(een .env file is een verborgen map die ook in je gitignore staat aangegeven hier zet je gevoelige informatie in zoals API keys)

5. Maak een +page.js file aan in de map van de pagina waar je directus verbonden wilt hebben en zet daar het volgende in:
/** @type {import('./$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch);
	return {
		people: await directus.request(readItems('person')),
	};
}

- Hoe werken routes
Routes kun je maken doormiddel van een mappen structuur als je een nieuwe pagina wilt die contact heet maak je in de src een map aan genaamd contact en zet je daar een +page.svelte in. Vervolgens als je /contact typt kom je in die pagina.


## woensdag 4 september
Vandaag hebben we de hele github opgezet met een projectboard, Hier hebben we een werkwijze afgesproken met elkaar. We gaan allemaal componenten bouwen die we aan elkaar onderverdelen. Deze componenten kunnen later weer hergebruikt worden in het project. Dit is ons stappenplan

1. elk component wordt een issue en een taak in het projectboard
2. per component wordt er een branch aangemaakt
3. je pakt de taak op in overleg vanuit het project board 
4. Wanneer je klaar bent met je component vertel je wat je gemaakt hebt in een merge request en laat je deze reviewen
5. Wanneer deze gemerged en goedgekeurd is verplaats je deze naar done


### Begeleiden bij cmd
Vandaag heb ik de cmd begeleid we hebben het over fonts gehad, ik heb een paar groepjes kunnen helpen waarbij het font niet goed geimplementeerd was. Er werden vooral quotes vergeten bij de font naam semi-columns en spel fouten.

### Les
Vandaag heb ik geleerd in de les hoe je een basic svelte setup kunt maken
ook heb ik geleerd hoe de route structuur eruit ziet en hoe svelte in elkaar zit

- mijn vragen voor vandaag zijn:
- hoe gebruik je componenten 
- hoe werk je optimaal samen in svelt

### Samenwerken groepje
Ik heb vandaag een ontwerp gemaakt en hierbij gewerkt aan mijn ontwerp skills. Ik heb deze vervolgens gepresenteerd aan de groep en die vonden het een goed ontwerp. Vervolgens zijn we een werkwijze gaan bedenken. We hebben besloten om met components te gaan werken. Voor elke component willen we een branch maken. Ook hebben we taakverdeling gegeven in het groepje en zijn we overeengekomen wie wat doet en afspraken gemaakt over hoe we te werk gaan.

1. elke opdracht / component krijgt een branch
2. je maakt een component wanneer er iets meer dan 1 x gebruikt wordt
3. als er gewerkt wordt aan de component geef je dit aan in het project board
4. als je een component af hebt verplaats je hem naar review
5. als je de component door het groepje hebt laten reviewen vanuit een merge request kan je deze pushen

### Donderdag 5 september
Vandaag heb ik vooral gebouwd ik heb de issue component card opgepakt en afgebouwd. Ik heb het component zo gemaakt dat als je een image link in de card array zet er automtisch een nieuwe card wordt aagemaakt met die image daarin.

### Wat heb ik geleerd
Ik heb geleerd hoe ik javascript variabelen kan importeren en kan gebruiken op meerdere pagina's. Je kunt de variabele exporteren met export.
Ook heb ik geleerd dat je makkelijk een variabele kan gebruiken om bijvoorvbeeld een link intevullen door deze {} haakjes met de variabele naam ertussen te gebruiken.

## Vrijdag 6 september
Vandaag heb ik met mijn groepje al het werk gemerged en elkaar codereviews gegeven voor er gemerged werd. Ook heb ik bij de eerste jaars gekeken naar hun profile cards en hun issues ingeschoten en feedback gegeven. Vervolgens heb ik dit ook gedaan met de projecten van de tweede jaars.

## issues

https://github.com/ambersr/your-tribe-profile-card/issues/8
https://github.com/misspastelwitch/your-tribe-profile-card/issues/10

https://github.com/nadiachaja/your-tribe-profile-card/issues/new?permalink=https://github.com/nadiachaja/your-tribe-profile-card/blob/6ba44c2bf96f0cbcd812aeb70f88f0abf6cb21e9/index.html%23L14C5-L14C43

https://github.com/nadiachaja/your-tribe-profile-card/issues/9


### Wat heb ik geleerd
- Components
Components zijn onderdelen die je meer dan een keer gebruikt het is handig om deze aan te kunnen roepen

## Maandag 9 sebtember
 ### les kill your darlings en figma
 Ik heb vandag les gehad over figma dit heb ik daar geleerd

 - Je kunt components maken door rechter muisknop te doen en dan component hierdoor kan je deze in een keer veranderen als je er meerdere van hebt
 - Variant je kunt een variant van een component maken hierdoor heb je er een die unique is en bijvorbeeld een andere kleur heeft
 - met cmd+g kun je elementen groeperen
 - met cmd+o maak je een cirkel

 ## Dinsdag 10 september
 ### Samenwerken met groepje
 We hebben vandaag onze darlings gekilled, we hebben nieuwe ideeen en inspiratie opgedaan en dit in figma gezet. Vervolgens hebben wij een nieuwe ontwerpen gemaakt en gestemd welke wij het beste vonden. Deze dag was vooral knopen doorhakken.

 ## Woensdag 11 september
 ## Samenwerken groepje
 Vandaag hebben wij onze github klaar gestoomd voor de nieuwe sprint. We hebben het werk van sprint 1 in een nieuwe branch gezet en zijn weer begonnen met een clean instalatie van svelte. We hebben nieuwe issues aangemaakt en branches. Ook hebben we een taak verdeling gemaakt via het projectboard en daar de issues in verwerkt.

 ## Donderdag 12 september
 ### Bouwen
 vandaag heb ik een cardcomponent gebouwd die 5 random mensen laat zien

 ### Samenwerken groepje
 Ik heb vandaag een code review gegeven aan tristan en hem geholpen met zijn mansory grid. Ik heb de laatste puntjes op de i gezet kwa styling en hem geholpen de merge conflicts optelossen. Ook heb ik zijn merge request gereviewd.

 ### Wat heb ik geleerd
 - math random kan je een random waarde geven
 - push.array laat je iets in een array stoppen
 - Hoe je samenwerkt aan een code via github

 ## Vrijdag 13 sebtemper
### Review samenwerken
We hebben een review gehad over samenwerken, deze review ging erg goed. We lopen zelfs voor! We hebben aan justus laten zien hoe wij te werk gaan met issues branches en het project board dit was een professionele werkwijze!

#### Tips / wat heb ik geleerd
- Je kunt je issues sluiten met #fixes
- Probeer de taken in kleinere delen op te splitsen
- Probeer moscow toetepassen voor prioriteit
- Om prioriteit te stellen kun je planning poker toepassen en de taak op deze manier in kleinere delen opsplitsen 


### Welove web
We hebben een we love web gekregen over toegankelijkheid en gekke dingen maken met css op het web.

#### Wat heb ik geleerd?
- Al scoort je pagina 100% toegankelijkheid, is deze niet altijd toegankelijk voor de echte gebruiker dit weet je pas wanneer je met de gebruikers waarvoor dit bedoelt is een test uitvoert.
- Probeer ook leuke dingen te maken op het web zo zorg je ervoor dat niet elke webpagina hetzelfde is.
- Een navigatie is vaak helemaal niet goed voor toegankelijkheid dit zorgt er namelijk voor dat je alle links hoort voor dat je de content van de site hoort zo ben je onnodig lang bezig.

## Maandag 16 sebtemper
Vandaag was ik helaas ziek thuis.

### Werken aan visite kaartje
Ik heb vandaag verder gewerkt aan mijn visite kaartje ik heb er een leuke easter egg in gebouwd er vallen nu html elementen uit de lucht als je op de knop front-end development klikt. Dit heb ik gedaan omdat ik een wat creatiever visite kaartje wil en wat meer met css wil oefenen. De we love web heeft mij hiervoor geinspireerd.

## Dinsdag 17 sebtemper
Vandaag ben ik met mijn team gaan zitten om te kijken wat we willen opleveren voor de laatste sprint, ook hebben we issues aangemaakt en het projectboard voorbereid op het testen.

### Wat heb ik geleerd
- Hoe je makkelijk een taakverdeling maakt voor het testen 
- Hoe je het testen vooruit plant
- Hoe je prioriteiten stelt voor de laatste onderdelen van de sprint

## Woensdag 18 september
vandaag heb ik de laatste puntjes op de i gezet en een scroll animation component gemaakt met css voor de opdracht, ik heb hier research naar gedaan en in een appart project mee lopen testen.

### Les
In de les hadden wij een wrap-up ik heb geleerd hoe je een goede readme schrijft en samen met mijn team een readme voor ons project opgesteld.

### Wat heb ik geleerd
- Hoe schrijf je een goede readme
- Hoe werken css onscroll animations

## Donderdag 19 september
Vandaag heb ik de readme voor mijn profile card geschreven en de code hiervan gerefactored, ook heb ik de website volledig getest.

## Wat heb ik geleerd
- meer ervaring opgedaan met testen
- meer ervaring opgedaan met readme schrijven

## vrijdag 20 september 
Vandaag hebben we het project opgeleverd en hebben de eerste jaars gekeken naar ons project dit ging erg goed

## Maandag 23 september
Vandaag hebben we de nieuwe opdracht gekregen ik moet met een groepje een radio app maken voor het mediahuis. We hebben vandaag een mail gestuurd naar de opdracht gever gestuurd om een afspraak te maken, voor het bespreken van de opdracht. Ook hebben we de basis voor het svelte kit project opgesteld.

## Dinsdag 24 september
Vandaag zijn we als groepje langsgeweest bij de opdracht gever. We hebben een rondlijding gehad bij triple. Ook hebben we de opdracht besproken, deze hebben wij van te voren al doorgenomen en vragen over bedacht, in dit gesprek hebben wij deze allemaal kunnen stellen

## Woensdag 25 september 
Vandaag hebben wij een datamodel opgesteld we sisten niet zeker hoe de opdracht gever de data wou versturen naar aanlijding hiervan hebben wij ons data model doorgemaild. Ook heb ik wat ideen in een ontwerp uitgewerkt die ik had voor de website.

## Donderdag 26 
Vandaag hebben we de website ontleed in taken, componenten en functies. Hier hebben wij issues van gemaakt en deze doormiddel van planning poker in het project board gezet.


## Vrijdag 4 oktober

### We love web
Nicolas (nicodotcomputer) is een creative developer die vooral met js cs webGl unity genAI en llm werkt. Hij richt zich onderanderen op animaties en hoe deze kunnen helpen een verhaal te vertellen en zo de aandacht van de gebruiker te trekken.

### Vita architecture
in deze website laat hij zien hoe je met een animatie kan laten zien waar de site over gaat, hij had een soort protaal gecreerd waarin je verschillende foto's van hun werk kon zien. Ook heeft hij creatieve animaties zoals scroll waarmee je projecten kan zien en het lijkt alsof je een bol rond gaat, hij maakt van iets saais iets leuks zodat de gebruiker er mee kan spelen.

### Lief amsterdam
Op deze site speelt er automatisch een fil af die een beter beeld geeft over wat het bedrijf doet, ook staat er onderaan een scroll label zodat je uitgenodigd wordt om te scrollen. Ook speelt hij met de titel door dit op de achtergrond te tonen wat de website duidelijk maakt maar ook speels. Hij gebruikt een creatieve manier voor de plattegrond door deze op te bouwen uit elementen zodat de gebruiker er interactie mee kan hebben.

### Lifeworld
Op deze site staat vooral veel text daarom speelt nicolas vooral veel met animaties wat de tekst meer laat opvallen en meer interessant maakt.

### LOER
Dit is een architecttuur site hij maakt dit duidelijk door de site op een blauwdruk te lijken.

### Mountain 
Hier heeft hij een 3d render van de berg gemaakt zodat het leuker is voor de mensen om naar te kijken.


### Conclusie
- Zie animaties en interactie als een toevoeging aan het origineel
- Wees open minded
- Stel de vraag aan jezelf wat het je brengt en vraag voor feedback 
- Wees klaar om veel tijd te spenderen op animaties


## Maandag 7 oktober

### Les agile werken

#### Waterfall method
Alles wat je gaat bouwen documenteer je heel uitgebreid voor je het gaat bouwen. Het wordt waterfall genoemd omdat je via stappen schematisch naar beneden werkt.


## Dinsdag 8 oktober
Ik heb vandaag met mijn groepje online gewerkt ik ging verder aan mijn issue de weekweergave maken. Vandaag heb ik eraan gewerkt om een soort vervaag effect te maken aan de zijkant zodat het lijkt alsof de weken die niet in beeld zijn wegvagen. Dit heb ik gedaan met een before en een after. Ook heb ik een scroll functie gemaakt waarmee je doormiddel van het klikken op de links en rechts button kan scrollen. Hiervan heb ik geleerd dat je met :bind een element aan een variabele kan binden en dat je met scrollBy een button door een carousel kunt laten scrollen.

## Woensdag 9 oktober

### Wrap up 
#### Wat heeft een goede oplevering nodig
- een goede readme
- leg in de readme uit hoe de code werkt
- probeer de must haves af te hebben
- een example env bestand maken
- nette code
- duidelijke comments plaatsen zodat de code makkelijk optepaken is voor een volgende 
- geen console logs
- goede tabs
- eventueel een release
- goede pull request strategie
- gestructureerde code conventies
- goede components
- Testen
- live pagina
- linter
- hoe wil een opdrachtgever de opdracht opgeleverd hebben

#### Hoe maak je een goede readme?
- gebruikte bronnen
- link naar projectboard
- installatie guide
- uitleg code
- uitleg wat je hebt gebouwd
- licentie
- change log

#### Wat doe je bij een sprintreview
- met de opdrachtgever en elkaar terugblikken wat je hebt gedaan
- demo / presentatie geven
- werk opleveren
- plannen voor de komende sprint
- feedback vragen
- testen bespreken 
- voorstellen doen
- je team genoten feedback geven
- agenda maken

#### Hoe ziet een goede demo eruit
- website laten zien 
- langs de user stories gaan
- laten zien wat er nog niet is gelukt aan de hand van het design
- stilstaan waarbij je feedback wilt hebben
- enthousiasme

##### Rollen tijdens demo
- presentator
- notulist (op issues)
- cheerleader
- tijd bewaarder

# Maandag 14 oktober

## Lses

Choises choises

tijdens de sprint:
- onderzoek je een nieuwe techstack voor het ontwerpen en bouwen van een website voor een opdrachtgever.
- verantwoord en presenteer je jouw gemaakte keuze.
- Neem je de mentorrol in de jaar 1 tribe serieus.

Mentoring workshop

Anderhalve week om een techstack te kiezen en eventueel met een ander cms 

### onderweg naar de midterm 
heb je de meesterrproef en vrije ruimte al
- je moet 12 bewijslasten van de 15 inleveren en allen je beste

### Vrije ruimte 
- andere bachelor deelnemen
- minor ondernemerschap (onderneming opzetten)
- Schakelprogramma naar cmd kan je in 2 max 2,5 jaar kan je je bachelor halen. je kunt niet alle bewijslast halen. kwa techniek.
- FDND agency dan werk je verder aan de projecten waarmee je nu werkt maar krijgt meer verantwoording.
- Stage 10 weken is meeloop stage dan heb je weinig verantwoording
- 20 weken stage heb je meer verantwoording waar je eigen projecten of een deel ervan doet waarmee je de meesterproef doet op stage. bij stage moet je zelf je bewijslast verzamelen, je hebt wel terugkom dagen waar je begeleid wordt.

### Hoe kies je een techstack

- welk platfowm
- wat voor project
- scale
- hoeveel werken eraan
- peformance
- expertize
- maintanance
- cost


- developer experience
- user experience
- content management experience

kijk in javascript op jamstack

Ga verder aan je project werk aan dezelfde users stories en epics.


# Woensdag 16 oktober
## Talk directus choises choices
Directus is een cms met een aanpasbare ui, en is ontworpen voor gebruiksgemak en een snelle opzet. 

Zijn rol is de user expierence verbeteren ze bouwen de website, directus streaming en het directus platform. Ze letten op hoe ze mensen directus kunnen leren en alles zo duidelijk mogelijk kunnen maken. Ze hopen op die manier dat ze directus fijn vinden en het aanschaffen. Directus is een soort van opensource het enige verschil is dat als je meer dan 5 miljoen per jaar verdient dat je moet betalen. Ook verdienen ze geld met cursussen.

## hoe werken ze
iedereen werkt remote thuis op de tijden die overeenkomen in de verschillende tijdzones hebben ze alle meetings. 

## keuzes 

Je hebt verschillende keuzes snel goedkoop en kwaliteit je kan nooit alle 3 tegelijk hebben.
alle keuzes hebben afwegingen en het kan nooit perfect zijn.

- perfectionisme
Het moeilijke met perfectionisme is dat het langer duurt om te leveren en het duurder wordt. 

- tech stack selection
Je kunt pre build components gebruiken dan ben je sneller maar dan lijkt het op alle andere apps. Op die manier kun je je keuzes baseren
Ook kun je soms beter kiezen voor een framework dat wat meer outdated is als je er wat meer van weet zodat je meer tijd hebt.

## Peformance vs maintainability 
overwegingen:
- Hoe erg sneller kan je je website maken
- Hoeveel mensen gebruiken het

Bij directus kijken ze naar peformance omdat je super veel databases kunt inladen.

## Tailwind
Via tailwind kan je heel makkelijk styling doormiddel van classes toevoegen. Maar het kan het waard zijn om dit niet te gebruiken zodat mensen die nieuw zijn in het project dat niet perse hoeven leren om eraan te kunnen werken.

## Velocity vs flexibility 
als je een componten of tailwind gebruikt kan het makkelijker en sneller zijn maar je hebt wel minder creatieve opties

## Innovation vs reliability
Elk bedrijf steekt geld in producten en die genereren meer winst. Ook kan er geld naar reasearche en development gaan. dit kan geld kosten wanneer het project faalt maar het kan ook een goed product opleveren die je meer winst oplevert

## AI
AI kost geld maakt wel alles sneller maar kan het ook fout hebben. Je kan het overwegen met deze stappen, 
- hoe accuraat moet het zijn
- wie neemt de verandtwoordelijkheid als het niet goed is

## cost benefits analyse


- the tech stack maakt waarschijnlijk niet uit omdat de users het toch niet merken, behalve als er superveel mensen op de site komen
- Je gaat slechte beslissingen maken goeie beslisingen komen met tijd en ervaring
- Richt je keuzes op de gebruikers 

## imposter syndrome 
Vaak als je imposter syndrome hebt ben je beter dan als je het niet hebt omdat je dan streeft naar beter worden. 

## directus tv
directus tv heeft een show waaarmee je heel directus leert.

Dit zijn de shows die je moet kijken
- acces controlls
- directus connect


## Features van directus
- webhook kan je een website koppelen en de data versturen
- theming: hiermee kan je het thema veranderen
- directus realtime: De data wordt de heletijd upgedate via een websocket
- extensions: je kan met extensions functies in directus toevoegen



## Talk shyanta

## waar richt tripple zich op
- development
- deels design 
- en technische kennis

## Cultuur
Tripple wilt mooie dingen maken met mooie mensen tripple deelt veel innovatie met elkaar en geeft elkaar presentaties over nieuwe kennis. Ook is innovatie erg belangrijk binnen tripple. Om up to date te blijven ga je ook naar converenties. Ook staan ze voor gezelligheid en feesten.

### Het webteam
Er zijn 3 losse teams die werken in de zelfde stack de teams werken in svelte of in react. Als het een nieuw project is gaan ze veel eerder naar svelte dan react. Later hebben ze ook SmartTV geinplementeerd. Voor smarttv bouwen ze met svelt omdat deze lightweight is en kleinere pakketen stuurt. 

### Way of working
Bij tripple werken ze scrum, ze werken met dailystandup, revinement alle tickets worden ingescaht op uren basis, retrospectives om terug te blikken, sprintreviews en planningen. Ze werken met gierra om de tickets te verwerken. Ze werken via azure devops. Code reviews, feature brands. Ook gebruiken zij conventional commits oftewel #fix, feature. 
In de core werken ze met html, scss en typescript. 

### wat kan invloed hebben op een tech stack
Het ligt vooral aan je product. Als je snelheid nodig hebt of iets meer complex. Heb je een wens voor animaties.



## Talk justus 

### Argumentatie
zondag 23:59 moet portflow ingeleverd zijn 12 indicatoren en daar kies je je beste van 


# Vrijdg 18 oktober

## Welove web 
Dion Pieters Begon als iemand die de dropship sites optimalisren, hij vond het leuker om wat meer de creatieve kant op te gaan. En wat meer met development doen. Hij is later voor zichzelf begonnen. 

### Waarom wil je een portfolio
je bent je eigen ergste klant, want je de site is nooit af. Ook moet je je afvragen wat je wilt laten zien en aan wie je het wilt laten zien. Hoeveel tijd moet je eraan besteden. Ook is een vraag moet een designer kunnen developen en een developer moet kunnen designen. Dion is van mening dat het niet hoeft omdat je dan de creatiefste dingen bedenkt.

## Wat vind jij van tech stacks
Alles lijkt best erg op elkaar daarom kan je erg flexibel zijn in techstacks en pas ik mij makkelijk aan.

# Maandag 21 oktober

## Woensdag 23 oktober

 # Vrijdag 25 oktober



 aanleveren werk

 1. knopje create snapshot
 2. kies de juiste mapjes
 4. kies 1 per indicator 12 intotaal
 5. geef je snapshot een naam: Snapshot semester 3 midterm
 6. Druk op save

 Inleveren
 1. ga naar tools en frameworks
2. assignments 
3. ga naar inleverpunt
4. een zip bestand met alle repo's van s13 14 en 15
5. die bestanden voeg je toe bij add a file
6. druk op insert stuff
7. selecteer de snapshot die je wilt inleveren
8. je ziet de snapshot getoond worden
9. klik op insert
10. klik op submit

beoordeling
beroordelingen gaan nu per criteria inplaats van indicator