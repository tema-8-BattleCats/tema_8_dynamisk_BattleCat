# Teknisk dokumentation – [ El-Sync ]

<!-- Te opdaterer senere og fjerner fra dokumentationsrapport -->

## Om projektet

Dette projekt er lavet som en del af Tema 8. Vi har udviklet et dynamisk site med HTML, CSS og JavaScript, hvor indholdet bliver hentet fra et Rest API.

Sitet består af flere sider, hvor brugeren kan:

- se en liste med produktkategorier
- udfylde en formular med kunde-idéer
- klikke ind på liste med produkttype
- filtrere indhold
- klikke ind på site med produktdetaljer

## Links

- GitHub repository: [https://github.com/orgs/tema-8-BattleCats/repositories]
- GitHub Pages: [indsæt link]
<!-- mangler at indsætte github pages link ovenfor -->
- Figma: [https://www.figma.com/design/7N2eYvrN6O6aGbRYuXYVG5/T8---Team-projekt?node-id=1-5&t=sq88Z355IVQ8m74L-1]
- Figjam: [https://www.figma.com/board/G2ut9DzZqOBSYmF63fvd5o/T8---Team-projekt?node-id=0-1&t=hxAgLVo1tetHgBe6-1]
- Trello: [https://trello.com/invite/b/69aec41a850ad95e45eb3974/ATTIf8e499315eca23c2f8d90ddef8a9ab4c2CD0B930/t8-battlecatsss]

---

## Projektstruktur

Projektet er opdelt i HTML, CSS og JavaScript-filer.

```
project/
├── index.html
├── form.html
├── productlist.html
├── productdetails.html
├── css/
│   └── custom.css
    └── general.css
    └── style.css
    └── form.css
├── js/
    ├── general.js
│   ├── index.js
│   ├── form.js
│   ├── productlist.js
│   ├── productdetails.js
└── README.md

```

### Filbeskrivelser

- **index.html** – forsiden
- **productlist.html** – viser en liste med data fra API'et
- **productdetails.html** – viser detaljer om en valgt opskrift
- **form.html** – indeholder formularen
- **css-filer** – styrer designet
- **JavaScript-filer** – styrer dynamisk indhold på de respektive sider

---

## Hvordan koden fungerer

Vi har opdelt JavaScript, så hver side har sin egen fil.

### index.js

Bruges til forsiden. Her vises dynamisk indhold i form af kategorierne, herunder smartphones, tablets, laptops og mobile-accessories. Derudover kan brugeren udfylde en formular til produktforslag.

### productlist.js

henter data fra Rest API og viser hvilke produkter der er indenfor den valgte kategori

### productdetails.js

henter data fra Rest API, der viser detaljer om det repsektive produkt. Den læser et id fra URL'en og henter derefter det rigtige produkt fra Rest API'et.

Det gør det muligt at genbruge den samme HTML-side til mange produkter. I stedet for at lave én side per produkt, bruger vi ét id i URL'en til at vise det rigtige indhold.

**Flow:**

1. Siden loader
2. JavaScript kører
3. Data hentes fra Rest API
4. Data bliver gennemgået med loop
5. HTML bliver indsat i DOM'en
6. Brugeren kan klikke på en kategori → et produkt

### form.js

Styrer formularen og validering af inputfelter.
Denne fil bruges til at sikre, at brugeren udfylder formularen korrekt. Det gør formularen mere brugervenlig og mindsker fejl.

---

## Navngivning

Vi har navngivet vores filer, variabler og funktioner så de så tydeligt som muligt er selvforklarende.

### Eksempler på variabler

<!-- indsæt eksempler på variabler her -->

```javascript
const recipeContainer;
const recipeId;
const selectedCategory;
```

<!-- indsæt eksempler på funktioner her -->

### Eksempler på funktioner

```javascript
fetchRecipes();
showRecipes();
showRecipeDetails();
validateForm();
```

<!-- tjek at vi har anvendt camelCase -->

Vi har brugt camelCase i JavaScript, fordi det gør koden mere ensartet og lettere at læse.

---

## Kommentarer i koden

Vi har kommenteret de steder i koden, hvor det giver mening.
Fx ved funktioner, fetch-kald og steder hvor der sker DOM-manipulation.

<!-- Mangler at blive opdateret nedenfor -->

**Eksempel:**

```javascript
// Henter produkter fra Rest API'et
async function fetchProducts() {
  const res = await fetch(apiURL);
  const data = await res.json();
  return data.products;
}
```

Vi har prøvet ikke at skrive kommentarer til helt åbenlyse ting, men kun dér hvor det hjælper forståelsen.

---

<!-- Te note - er nået hertil -->

## Data og JSON-struktur

Vi henter data fra et API i JSON-format.

**Et objekt kan fx se sådan ud:**

```json
{
  "id": 1,
  "title": "Opskriftsnavn",
  "description": "Kort beskrivelse",
  "category": "dessert",
  "cookTime": 45,
  "servings": 4,
  "thumbnail": "billede.jpg"
}
```

### Felter vi bruger

- **id** – bruges til at sende brugeren videre til detaljesiden
- **title** – opskriftsnavn
- **description** – beskrivelse af opskriften
- **category** – opskriftkategori (fx dessert, hovedret, forret)
- **cookTime** – tilberedningstid i minutter
- **servings** – antal portioner
- **thumbnail** – opskriftsbillede

---

## Formular og validering

Vi har lavet en formular, hvor brugeren kan indtaste oplysninger.

**HTML-validering:**

- `required` – feltet skal udfyldes
- `type="email"` – validerer email-format
- `type="number"` – accepterer kun tal

Det sikrer, at brugeren ikke kan sende formularen, hvis felterne ikke er udfyldt korrekt.

---

## Git og branches

Vi har brugt GitHub til at samarbejde om projektet.

Vi har arbejdet med branches, så vi ikke sad og ændrede i det samme på samme tid.

Vi navngav branchene med feature først og navnet på den, der lavede branchen til sidst.

### Eksempler på branches

- `feature-forside-steen`
- `feature-opskriftsliste-peter`
- `feature-detaljeside-karsten`
- `feature-formular-pia`

### Workflow

1. Lave en branch med feature-navn og eget navn til sidst
2. Kode en feature
3. Committe ændringer
4. Pushe til GitHub
5. Merge til main når det virkede

Det gjorde det nemmere at holde styr på, hvem der lavede hvad.

---

## Bæredygtighed

Vi har tænkt bæredygtighed ind i projektet ved at holde page weight under 250 kb samt en enkel informationasarkitektur.

**Tiltag:**

- Ingen videoer
- Ingen tunge frameworks
- Genbruge af kode
- Optimerede billeder

---

## Udfordringer undervejs

En af vores udfordringer var at få data fra Rest API’et vist korrekt på siderne.
Det var også lidt svært at få id med videre i URL’en til detaljesiden.

**Løsninger:**

- Console.logge data undervejs
- Teste fetch-kald separat
- Bruge URLSearchParams
- Dele opgaverne mere tydeligt i gruppen

---

## Mulige forbedringer

Hvis vi skulle arbejde videre med projektet, kunne vi forbedre det ved at tilføje:

- Søgefunktion
- Error handling
- Loading state

---

## Gruppemedlemmer

- Steen I. Sko
- Peter Pedal
- Karsten Lange Løgstrup
- Pia Planlægger
