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
 ### Wat heb ik geleerd
 - math random kan je een random waarde geven
 - push.array laat je iets in een array stoppen

 ### Samenwerken groepje
 Ik heb vandaag een code review gegeven aan tristan en hem geholpen met zijn mansory grid. Ik heb de laatste puntjes op de i gezet kwa styling en hem geholpen de merge conflicts optelossen
