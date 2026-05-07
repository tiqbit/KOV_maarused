export interface KOVStep {
  role: string;
  action: string;
}

export interface KOVRegulation {
  id: string;
  kov: string;
  maakond?: string;
  name: string;
  url: string;
  revisionDate: string;
  mermaid: string;
  steps: KOVStep[];
  deadlineDays?: string; // e.g. "15 tööpäeva"
  processingDays?: string; // e.g. "10 tööpäeva"
}

export const regulations: KOVRegulation[] = [
  {
    id: "alutaguse",
    kov: "Alutaguse vald",
    maakond: "Ida-Viru maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded Alutaguse vallas",
    url: "https://www.riigiteataja.ee/akt/403062021021?leiaKehtiv",
    revisionDate: "06.06.2021",
    deadlineDays: "15 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
  classDef default font-family:Inter,sans-serif,font-size:12px
  classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
  classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

  Start([Protsessi algus]) --> A[korraldaja: esitab taotluse ja lisad]
  A --> B{ametnik: kas on puudusi?}
  
  B -- Jah --> C[ametnik: määrab tähtaja puuduste kõrvaldamiseks]
  C --> D{korraldaja: kas kõrvaldab?}
  
  D -- Ei --> E[ametiasutus: jätab taotluse läbi vaatamata]
  E --> End([Protsessi lõpp])
  
  D -- Jah --> F
  B -- Ei --> F[ametnik: korraldab kooskõlastusringi]
  
  F --> G[Päästeamet ja PPA: kooskõlastavad taotluse]
  G --> H[Sisespetsialistid: kooskõlastavad 10 tööpäeva jooksul]
  
  H --> I{ametiasutus: otsustab loa andmise}
  
  I -- Jah --> J[ametnik: väljastab loa ja teavitab taotlejat]
  I -- Ei --> K[ametiasutus: keeldub loast ja teavitab taotlejat]
  
  J --> End
  K --> End

  class B,D,I decision
  class G external`,
    steps: [
      { role: "korraldaja", action: "esitab allkirjastatud taotluse koos lisadega vähemalt 15 tööpäeva enne üritust" },
      { role: "ametnik", action: "vaatab taotluse ja lisadokumentid läbi" },
      { role: "ametnik", action: "määrab puuduste korral tähtaja nende kõrvaldamiseks" },
      { role: "korraldaja", action: "kõrvaldab puudused määratud tähtajaks" },
      { role: "ametnik", action: "edastab taotluse kooskõlastamiseks Päästeametile, Politsei- ja Piirivalveametile ning ametiasutuse sisespetsialistidele" },
      { role: "ametiasutus", action: "otsustab loa andmise või sellest keeldumise" },
      { role: "ametnik", action: "väljastab loa ja teavitab korraldajat otsusest" }
    ]
  },
  {
    id: "anija",
    kov: "Anija vald",
    maakond: "Harju maakond",
    name: "Anija vallas avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/426022022032?leiaKehtiv",
    revisionDate: "01.03.2022",
    deadlineDays: "15 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
  classDef default font-family:Inter,sans-serif,font-size:12px
  classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
  classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
  A[Korraldaja: koostab taotluse ja lisadokumendid] --> B[Korraldaja: kooskõlastab taotluse PPA ja Päästeametiga]
  B:::external --> C[Korraldaja: esitab taotluse vallavalitsusele]
  C --> D{Kas taotlus on nõuetekohane?}
  D:::decision -- Ei --> E[Vallavalitsus: määrab tähtaja puuduste kõrvaldamiseks]
  E --> F[Korraldaja: kõrvaldab puudused]
  F --> D
  D -- Jah --> G[Vallavalitsus: otsustab loa andmise või keeldumise]
  G --> H[Vallavalitsus: vormistab korralduse ja teavitab korraldajat]`,
    steps: [
      { role: "Korraldaja", action: "koostab taotluse ja lisadokumendid" },
      { role: "Korraldaja", action: "kooskõlastab taotluse Politsei- ja Piirivalveametiga ning lahtise tule või pürotehnika kasutamisel Päästeametiga" },
      { role: "Korraldaja", action: "esitab taotluse vallavalitsusele hiljemalt 15 tööpäeva enne üritust" },
      { role: "Vallavalitsus", action: "vaatab taotluse läbi ja kontrollib puuduste olemasolu" },
      { role: "Vallavalitsus", action: "määrab vajadusel tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kõrvaldab puudused määratud tähtajaks" },
      { role: "Vallavalitsus", action: "otsustab loa andmise või sellest keeldumise 10 tööpäeva jooksul" },
      { role: "Vallavalitsus", action: "vormistab otsuse vallavalitsuse korraldusena ja teavitab korraldajat" }
    ]
  },
  {
    id: "antsla",
    kov: "Antsla vald",
    maakond: "Võru maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded Antsla vallas",
    url: "https://www.riigiteataja.ee/akt/428062022096",
    revisionDate: "01.07.2022",
    deadlineDays: "10 tööpäeva",
    processingDays: "10 päeva",
    mermaid: `graph TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: Kooskõlastuste hankimine välistelt osapooltelt ja maaomanikult] ::: external
    B[Korraldaja: Taotluse ja lisadokumentide esitamine vallavalitsusele]
    C{Vallavalitsus: Kas taotlus vastab nõuetele ja on põhjendatud?} ::: decision
    D[Vallavalitsus: Loa andmisest keeldumine ja korraldaja teavitamine]
    E[Vallavalitsus: Loa väljastamine vallavalitsuse korraldusega]
    F[Vallavalitsus: PPA ja Põllumajandus- ja Toiduameti teavitamine] ::: external

    A --> B
    B --> C
    C -- Ei --> D
    C -- Jah --> E
    E --> F`,
    steps: [
      { role: "korraldaja", action: "hankib kinnisasja või maa-ala omaniku nõusoleku ning vajadusel kooskõlastused Transpordiametilt, Keskkonnaametilt, Päästeametilt ja Politsei- ja Piirivalveametilt" },
      { role: "korraldaja", action: "esitab vallavalitsusele allkirjastatud kirjaliku taotluse koos kõigi nõutavate lisadokumentidega hiljemalt 10 tööpäeva enne ürituse toimumist" },
      { role: "vallavalitsus", action: "vaatab esitatud taotluse läbi ja kontrollib selle vastavust nõuetele" },
      { role: "vallavalitsus", action: "otsustab loa andmise või sellest keeldumise 10 päeva jooksul alates nõuetekohase taotluse saamisest" },
      { role: "vallavalitsus", action: "vormistab otsuse vallavalitsuse korraldusena ja väljastab selle korraldajale" },
      { role: "vallavalitsus", action: "edastab loa andmise korralduse teadmiseks Politsei- ja Piirivalveametile ning toidu käitlemise korral ka Põllumajandus- ja Toiduametile" }
    ]
  },
  {
    id: "elva",
    kov: "Elva vald",
    maakond: "Tartu maakond",
    name: "Avaliku ürituse korraldamise ja pidamise kord Elva vallas",
    url: "https://www.riigiteataja.ee/akt/407102025007",
    revisionDate: "01.01.2026",
    deadlineDays: "20-30 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    Start(["Korraldaja esitab taotluse"]) --> Review["Vallavalitsus vaatab taotluse läbi"]
    Review --> CheckMissing{"Kas esineb puudusi?"}:::decision
    
    CheckMissing -- Jah --> Fix["Korraldaja kõrvaldab puudused"]
    Fix --> Review
    
    CheckMissing -- Ei --> ExtCoord["Väliste osapoolte kooskõlastused (PPA, PA, TTJA jt)"]:::external
    ExtCoord --> RiskType{"Kõrgendatud turvarisk?"}:::decision
    
    RiskType -- Jah --> GovOrder["Vallavalitsuse korraldus"]
    RiskType -- Ei --> OfficialDec["Määratud teenistuja otsus"]
    
    GovOrder --> Notify["Korraldaja teavitamine"]
    OfficialDec --> Notify
    Notify --> End(["Protsessi lõpp"])`,
    steps: [
      { role: "Korraldaja", action: "esitab vormikohase taotluse ja lisadokumentid digitaalselt läbi SPOKU keskkonna või kirjalikult (vähemalt 20–30 tööpäeva enne üritust)" },
      { role: "Vallavalitsus", action: "vaatab taotluse ja lisadokumendid läbi 10 tööpäeva jooksul" },
      { role: "Vallavalitsus", action: "kontrollib andmete ja kooskõlastuste piisavust ning määrab vajadusel tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kõrvaldab puudused ja esitab vajadusel nõutud kooskõlastused väliste ametkondadega (PPA, Päästeamet, TTJA jt)" },
      { role: "Vallavalitsus", action: "(kõrgendatud turvariski korral) otsustab loa andmise või sellest keeldumise korraldusega 10 tööpäeva jooksul" },
      { role: "Ametnik", action: "(tavajuhul) otsustab loa andmise või sellest keeldumise" },
      { role: "Vallavalitsus", action: "teavitab korraldajat tehtud otsusest" }
    ]
  },
  {
    id: "haapsalu",
    kov: "Haapsalu linn",
    maakond: "Lääne maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/408062021048?leiaKehtiv",
    revisionDate: "11.06.2021",
    deadlineDays: "10 tööpäeva",
    processingDays: "5 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    Start((Algus)) --> A
    A["Korraldaja: kooskõlastab koha omaniku või valdajaga"]:::external --> B
    B["Korraldaja: esitab linnavalitsusele ürituse teate"] --> C
    C{"Linnavalitsus: kontrollib nõuetele vastavust"}:::decision -->|Puudused| D
    D["Linnavalitsus: määrab tähtaja puuduste kõrvaldamiseks"] --> E
    E["Korraldaja: kõrvaldab puudused või esitab selgitusi"] --> B
    C -- Vastab nõuetele --> F["Linnavalitsus: väljastab ürituse pidamise loa"]
    F --> G["Linnavalitsus: teavitab Politseid ja teisi organeid"]:::external
    G --> End((Lõpp))`,
    steps: [
      { role: "Korraldaja", action: "hangib toimumiskoha omaniku või valdaja kooskõlastuse" },
      { role: "Korraldaja", action: "esitab linnavalitsusele vähemalt 10 tööpäeva enne üritust avaliku ürituse teate ja vajalikud lisadokumentid (liiklusskeem, turvaplaan jms)" },
      { role: "Linnavalitsus", action: "kontrollib teate vastavust nõuetele ning nõutud dokumentide olemasolu" },
      { role: "Linnavalitsus", action: "(puuduste korral) määrab tähtaja puuduste kõrvaldamiseks või küsib täiendavaid selgitusi" },
      { role: "Korraldaja", action: "(vajadusel) kõrvaldab puudused või esitab selgitused" },
      { role: "Linnavalitsus", action: "annab ürituse pidamiseks loa" },
      { role: "Linnavalitsus", action: "edastab teate loa andmise kohta Politsei- ja Piirivalveametile ning teistele haldus- ja järelevalveorganitele" }
    ]
  },
  {
    id: "haljala",
    kov: "Haljala vald",
    maakond: "Lääne-Viru maakond",
    name: "Haljala vallas avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/423042022005",
    revisionDate: "01.05.2022",
    deadlineDays: "21-30 kalendripäeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: kooskõlastab tegevused asutustega]:::external --> B[Korraldaja: esitab taotluse ja lisad]
    B --> C[Teenistuja: kontrollib dokumente]
    C --> D{Kas taotlus on nõuetekohane?}:::decision
    D -- Ei --> E[Korraldaja: kõrvaldab puudused]
    E --> C
    D -- Jah --> F{Vallavalitsus: otsustab loa andmise}:::decision
    F -- Jah --> G[Vallavalitsus: väljastab loa]
    F -- Ei --> H[Korraldaja: teavitus keeldumisest]
    G --> I[PPA: teavitamine loast]:::external
    G --> J[Vald: avalikustamine veebis]`,
    steps: [
      { role: "Korraldaja", action: "kooskõlastab kõrgendatud turvariski korral ürituse eelnevalt PPA ja Päästeametiga ning vajadusel Keskkonnaametiga" },
      { role: "Korraldaja", action: "esitab vormikohase taotluse and kooskõlastused (vähemalt 21 või 30 päeva enne)" },
      { role: "Teenistuja", action: "kontrollib taotluse ja dokumentide nõuetele vastavust ning määrab vajadusel puuduste kõrvaldamise tähtaja" },
      { role: "Vallavalitsus", action: "otsustab loa andmise või sellest keeldumise 10 päeva jooksul" },
      { role: "Vallavalitsus", action: "teavitab korraldajat ja PPA-d loa andmisest ning avalikustab loa valla veebilehel" }
    ]
  },
  {
    id: "harku",
    kov: "Harku vald",
    maakond: "Harju maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded Harku valla haldusterritooriumil",
    url: "https://www.riigiteataja.ee/akt/408042026021?leiaKehtiv",
    revisionDate: "11.04.2026",
    deadlineDays: "14-30 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab taotluse SPOKU-s] --> B[Loa andja: kontrollib dokumente]
    B --> C{Kas on nõuetekohane?}:::decision
    C -- Ei --> D[Taotleja: kõrvaldab puudused]
    D --> B
    C -- Jah --> E[Loa andja: kooskõlastamine PPA ja PA-ga]:::external
    E --> F{Loa andja: otsustab loa andmise}:::decision
    F -- Jah --> G[Loa andja: väljastab loa]
    F -- Ei --> H[Taotleja: teavitamine keeldumisest]
    G --> I[PPA/PA/Taotleja: teavitamine 2 tp jooksul]:::external`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse ja lisad SPOKU infosüsteemis (vähemalt 14 või 30 tööpäeva enne)" },
      { role: "Loa andja", action: "vaatab taotluse läbi ja määrab vajadusel puuduste kõrvaldamise tähtaja" },
      { role: "Loa andja", action: "edastab taotluse kooskõlastamiseks PPA-le ja Päästeametile" },
      { role: "PPA/PA", action: "kooskõlastavad taotluse ja seavad vajadusel lisatingimused" },
      { role: "Loa andja", action: "annab ürituse loa või keeldub sellest 10 tööpäeva jooksul" },
      { role: "Loa andja", action: "teavitab taotlejat ja kooskõlastajaid tehtud otsusest 2 tööpäeva jooksul" }
    ]
  },
  {
    id: "hiiumaa",
    kov: "Hiiumaa vald",
    maakond: "Hiiu maakond",
    name: "Hiiumaa vallas avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/427042024044?leiaKehtiv",
    revisionDate: "30.04.2024",
    deadlineDays: "15 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab elektroonilise taotluse] --> B[Ametnik: kontrollib taotlust]
    B --> C{Kas taotlus vajab kooskõlastamist?}:::decision
    C -- Jah --> D[Ametid: kooskõlastamine/teavitamine]:::external
    C -- Ei --> E[Ametnik: valmistab ette otsuse]
    D --> E
    E --> F{Otsustaja: otsustab loa andmise}:::decision
    F -- Jah --> G[Ametnik: väljastab loa]
    F -- Ei --> H[Taotleja: teavitamine keeldumisest]
    G --> I[PPA/Ametid: teavitamine loast]:::external`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse valla iseteeninduskeskkonnas (vähemalt 15 tööpäeva või 30 kalendripäeva enne)" },
      { role: "Ametnik", action: "vaatab taotluse läbi ja nõuab vajadusel puuduste kõrvaldamist" },
      { role: "Ametnik", action: "edastab taotluse kooskõlastamiseks või teavitab PPA-d, Päästeametit ja teisi asjaomaseid asutusi" },
      { role: "Ametnik/Vallavalitsus", action: "otsustab loa andmise või keeldumise vastavalt oma pädevusele" },
      { role: "Ametnik", action: "teavitab taotlejat, PPA-d ja teisi ametiasutusi loa andmisest või sellest keeldumisest" }
    ]
  },
  {
    id: "haademeeste",
    kov: "Häädemeeste vald",
    maakond: "Pärnu maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded Häädemeeste vallas",
    url: "https://www.riigiteataja.ee/akt/412062019001",
    revisionDate: "15.06.2019",
    deadlineDays: "20-30 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: kooskõlastus politseiga]:::external --> B[Korraldaja: esitab taotluse ja lisad]
    B --> C[Teenistuja: kontrollib dokumente]
    C --> D{Kas taotlus on täielik?}:::decision
    D -- Ei --> E[Korraldaja: kõrvaldab puudused]
    E --> C
    D -- Jah --> F{Vallavalitsus: otsustab loa andmise}:::decision
    F -- Jah --> G[Vallavalitsus: väljastab loa]
    F -- Ei --> H[Korraldaja: teavitus keeldumisest]
    G --> I[PPA/Organid: teavitamine ärakirjaga]:::external`,
    steps: [
      { role: "Korraldaja", action: "kooskõlastab taotluse eelnevalt politseikonstaabliga" },
      { role: "Korraldaja", action: "esitab vormikohase taotluse (vähemalt 20 või 30 päeva enne)" },
      { role: "Teenistuja", action: "kontrollib taotluse vastavust nõuetele ja määrab vajadusel tähtaja puuduste kõrvaldamiseks" },
      { role: "Vallavalitsus", action: "annab loa 10 tööpäeva jooksul nõuetekohase taotluse saamisest" },
      { role: "Vallavalitsus", action: "edastab loa taotlejale ja ärakirja PPA-le ning teistele organitele" }
    ]
  },
  {
    id: "joelahtme",
    kov: "Jõelähtme vald",
    maakond: "Harju maakond",
    name: "Jõelähtme valla avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/402052014008",
    revisionDate: "01.07.2014",
    deadlineDays: "14 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab taotluse ja lisad] --> B{Kas on kõrgendatud risk?}:::decision
    B -- Jah --> C[Korraldaja: kooskõlastus PPA/PA-ga]:::external
    B -- Ei --> D[Vallavalitsus: menetleb taotlust]
    C --> D
    D --> E{Vallavalitsus: otsustab loa andmise}:::decision
    E -- Jah --> F[Vallavalitsus: väljastab korralduse]
    E -- Ei --> G[Korraldaja: teavitus keeldumisest]
    F --> H[Korraldaja: teavitamine 2 tp jooksul]`,
    steps: [
      { role: "Korraldaja", action: "esitab vormikohase taotluse (vähemalt 14 päeva enne üritust)" },
      { role: "Korraldaja", action: "kooskõlastab kõrgendatud riski korral turvaplaani eelnevalt prefektuuri ja päästekeskusega" },
      { role: "Vallavalitsus", action: "vaatab taotluse läbi ning nõuab vajadusel puuduste kõrvaldamist" },
      { role: "Vallavalitsus", action: "otsustab loa andmise korraldusega 10 tööpäeva jooksul" },
      { role: "Vallavalitsus", action: "teavitab korraldajat loa andmisest või keeldumisest 2 tööpäeva jooksul" }
    ]
  },
  {
    id: "jogeva",
    kov: "Jõgeva vald",
    maakond: "Jõgeva maakond",
    name: "Jõgeva vallas avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/401072021001",
    revisionDate: "01.09.2021",
    deadlineDays: "20 kalendripäeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A["Korraldaja: Esitab taotluse"] --> B["Menetleja: Kontrollib taotlust 3 tööpäeva jooksul"]
    B --> C{"Kas on puudusi?"}:::decision
    C -- Jah --> D["Korraldaja: Kõrvaldab puudused"]
    D --> B
    C -- Ei --> E["Menetleja: Suunab siseseks kooskõlastamiseks"]
    E --> F{"Kas on erijuhtum?"}:::decision
    F -- Jah --> G["Vallavalitsus: Annab loa"]
    F -- Ei --> H["Menetleja: Annab loa"]
    G --> I["Menetleja: Teavitab Politseid ja Päästeametit"]:::external
    H --> I`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse üldjuhul 20 kalendripäeva enne üritust" },
      { role: "Menetleja", action: "kontrollib 3 tööpäeva jooksul taotluse vastavust ja määrab vajadusel tähtaja puuduste kõrvaldamiseks" },
      { role: "Menetleja", action: "suunab taotluse kooskõlastamiseks asjaomastele valla teenistujatele või asutustele" },
      { role: "Vallavalitsus/Menetleja", action: "annab loa haldusaktiga (Vallavalitsus erijuhul, Menetleja tavajuhul)" },
      { role: "Menetleja", action: "teavitab loa andmisest viivitamata Politseid, Päästeametit ja vajadusel teisi ametkondi" }
    ]
  },
  {
    id: "johvi",
    kov: "Jõhvi vald",
    maakond: "Ida-Viru maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded Jõhvi vallas",
    url: "https://www.riigiteataja.ee/akt/406102023008?leiaKehtiv",
    revisionDate: "09.10.2023",
    deadlineDays: "2 nädalat",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A["Korraldaja: Hangib vajalikud kooskõlastused PPA, PA jm"]:::external --> B["Korraldaja: Esitab taotluse koos lisadega"]
    B --> C["Ametnik: Vaatab taotluse läbi"]
    C --> D{"Kas on puudusi?"}:::decision
    D -- Jah --> E["Korraldaja: Esitab täiendavad dokumendid"]
    E --> C
    D -- Ei --> F["Ametnik: Esitab eelnõu valitsuse istungile"]
    F --> G["Vallavalitsus: Otsustab loa andmise korraldusega"]
    G --> H["Vallavalitsus: Teavitab Politseid"]:::external`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse vähemalt 2 nädalat enne üritust" },
      { role: "Korraldaja", action: "esitab koos taotlusega kinnistu omaniku, Päästeameti, Politsei ja vajadusel Keskkonnaameti kooskõlastused" },
      { role: "Ametnik", action: "vaatab taotluse läbi ja nõuab vajadusel täiendavaid dokumente või kooskõlastusi" },
      { role: "Ametnik", action: "esitab valitsuse istungile eelnõu loa andmiseks 5 tööpäeva jooksul" },
      { role: "Vallavalitsus", action: "otsustab loa andmise korraldusega" },
      { role: "Vallavalitsus", action: "teavitab loa andmisest viivitamatult Politsei- ja Piirivalveameti Ida prefektuuri" }
    ]
  },
  {
    id: "jarva",
    kov: "Järva vald",
    maakond: "Järva maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/404072025048?leiaKehtiv",
    revisionDate: "07.07.2025",
    deadlineDays: "15 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A["Korraldaja: Esitab taotluse"] --> B["Menetleja: Vaatab taotluse läbi"]
    B --> C{"Kas on puudusi?"}:::decision
    C -- Jah --> D["Korraldaja: Kõrvaldab puudused"]
    D --> B
    C -- Ei --> E["Menetleja: Kooskõlastab taotluse 10 tööpäeva jooksul"]
    E --> F["Menetleja: Koostab eelnõu"]
    F --> G["Loa andja: Otsustab loa andmise"]
    G --> H["Ametiasutus: Väljastab loa"]
    H --> I["Ametiasutus: Teavitab politseid"]:::external`,
    steps: [
      { role: "Korraldaja", action: "esitab allkirjastatud taotluse vähemalt 15 tööpäeva enne üritust" },
      { role: "Menetleja", action: "vaatab taotluse läbi ja nõuab vajadusel täiendavaid dokumente või kooskõlastusi" },
      { role: "Menetleja", action: "määrab puuduste korral tähtaja nende kõrvaldamiseks" },
      { role: "Menetleja", action: "kooskõlastab taotluse kümne tööpäeva jooksul" },
      { role: "Menetleja", action: "koostab loa eelnõu ja edastab selle loa andjale" },
      { role: "Loa andja", action: "otsustab loa andmise ja allkirjastab selle" },
      { role: "Ametiasutus", action: "väljastab loa korraldajale ja teavitab politseid" }
    ]
  },
  {
    id: "kadrina",
    kov: "Kadrina vald",
    maakond: "Lääne-Viru maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded Kadrina vallas",
    url: "https://www.riigiteataja.ee/akt/408042025036?leiaKehtiv",
    revisionDate: "11.04.2025",
    deadlineDays: "30 kalendripäeva",
    processingDays: "14 tööpäeva",
    mermaid: `graph TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A["Korraldaja: Kooskõlastab ürituse PA ja PPA-ga"]:::external --> B["Korraldaja: Esitab taotluse iseteeninduses"]
    B --> C["Ametnik: Vaatab taotluse läbi"]
    C --> D{"Kas on puudusi?"}:::decision
    D -- Jah --> E["Korraldaja: Kõrvaldab puudused max 7 päeva jooksul"]
    E --> C
    D -- Ei --> F["Ametiasutus: Teavitab politseid"]:::external
    F --> G["Vallavalitsus: Otsustab loa andmise 14 tp jooksul"]`,
    steps: [
      { role: "Korraldaja", action: "kooskõlastab kõrgendatud turvariskiga ürituse Päästeameti ja Politseiga ning hangib maaomaniku nõusoleku" },
      { role: "Korraldaja", action: "esitab taotluse vähemalt 30 kalendripäeva enne üritust iseteeninduskeskkonnas" },
      { role: "Ametnik", action: "vaatab taotluse läbi" },
      { role: "Ametnik", action: "määrab puuduste korral tähtaja (kuni 7 päeva) nende kõrvaldamiseks" },
      { role: "Ametiasutus", action: "teavitab politseid ürituse korraldamisest" },
      { role: "Vallavalitsus", action: "otsustab loa andmise 14 tööpäeva jooksul arvates taotluse saamisest" }
    ]
  },
  {
    id: "kambja",
    kov: "Kambja vald",
    maakond: "Tartu maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/431082018011",
    revisionDate: "03.09.2018",
    deadlineDays: "7-14 tööpäeva",
    processingDays: "3 päeva",
    mermaid: `graph TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    Start((Algus)) --> K1["Korraldaja: esitab teatise"]
    K1 --> M1["Menetleja: vaatab läbi ja kontrollib"]
    M1 --> D1{"Kas on puudusi?"}:::decision
    D1 -- Jah --> K2["Korraldaja: kõrvaldab puudused"]
    K2 --> M1
    D1 -- Ei --> M2["Menetleja: suunab kooskõlastamisele"]
    M2 --> E1["Kooskõlastaja: hindab ja kooskõlastab"]:::external
    E1 --> D2{"Kas kooskõlastatud?"}:::decision
    D2 -- Jah --> M3["Menetleja: otsustab loa andmise"]
    D2 -- Ei --> Reject["Luba ei anta"]
    M3 --> M4["Menetleja: teavitab osapooli ja avaldab info"]
    M4 --> End((Lõpp))`,
    steps: [
      { role: "korraldaja", action: "esitab avaliku ürituse teatise (vähemalt 7 või 14 päeva enne)" },
      { role: "menetleja", action: "vaatab teatise läbi ja kontrollib andmete õigsust ning määrab vajadusel tähtaja puuduste kõrvaldamiseks" },
      { role: "korraldaja", action: "kõrvaldab puudused (vajadusel)" },
      { role: "menetleja", action: "korraldab teatise kooskõlastamise pädevate asutustega" },
      { role: "kooskõlastaja", action: "annab kooskõlastuse või nõuab täiendavat teavet/toiminguid" },
      { role: "menetleja", action: "otsustab ürituse lubamise või mittelubamise (vähemalt 3 päeva enne üritust)" },
      { role: "menetleja", action: "teavitab otsusest korraldajat ja ametiasutusi (PPA, vajadusel Päästeamet ja TTJA) ning avaldab info valla veebilehel" }
    ]
  },
  {
    id: "kanepi",
    kov: "Kanepi vald",
    maakond: "Põlva maakond",
    name: "Avaliku ürituse korraldamise nõuded Kanepi vallas",
    url: "https://www.riigiteataja.ee/akt/431102019002",
    revisionDate: "03.11.2019",
    deadlineDays: "15 päeva",
    processingDays: "14 tööpäeva",
    mermaid: `graph TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    Start((Algus)) --> K1["Korraldaja: esitab taotluse"]
    K1 --> D1{"Kõrgendatud risk?"}:::decision
    D1 -- Jah --> E1["Korraldaja: kooskõlastab turvaplaani PPA/PA-ga"]:::external
    E1 --> VV1
    D1 -- Ei --> VV1["Vallavalitsus: menetleb taotlust"]
    VV1 --> VV2{"Kas otsus on positiivne?"}:::decision
    VV2 -- Jah --> VV3["Vallavalitsus: väljastab loa"]
    VV2 -- Ei --> Reject["Vallavalitsus: keeldub loast"]
    VV3 --> VV4["Vallavalitsus: teavitab korraldajat"]
    Reject --> VV4
    VV4 --> End((Lõpp))`,
    steps: [
      { role: "korraldaja", action: "esitab vormikohase taotluse (vähemalt 15 päeva enne)" },
      { role: "korraldaja", action: "esitab lõpliku turvaplaani Lõuna Päästekeskusele ja Lõuna prefektuurile (kõrgendatud turvariski korral)" },
      { role: "vallavalitsus", action: "menetleb taotlust ja otsustab loa andmise (14 tööpäeva jooksul)" },
      { role: "vallavalitsus", action: "teavitab korraldajat otsusest (3 tööpäeva jooksul)" }
    ]
  },
  {
    id: "kastre",
    kov: "Kastre vald",
    maakond: "Tartu maakond",
    name: "Kastre valla avaliku ürituse korraldamise kord",
    url: "https://www.riigiteataja.ee/akt/410082018006",
    revisionDate: "13.08.2018",
    deadlineDays: "21 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    Start((Algus)) --> K1["Korraldaja: hangib vajalikud kooskõlastused"]
    K1 --> E1["Välised osapooled: PPA, PA, tee omanik"]:::external
    E1 --> K2["Korraldaja: esitab taotluse KOV-ile"]
    K2 --> M1["Menetleja: vaatab taotluse läbi"]
    M1 --> D1{"Kas on puudusi?"}:::decision
    D1 -- Jah --> K3["Korraldaja: kõrvaldab puudused"]
    K3 --> M1
    D1 -- Ei --> VV1["Vallavalitsus: langetab otsuse"]
    VV1 --> VV2["Vallavalitsus: teavitab korraldajat"]
    VV2 --> End((Lõpp))`,
    steps: [
      { role: "korraldaja", action: "esitab kooskõlastustaotluse (vähemalt 21 päeva enne)" },
      { role: "korraldaja", action: "taotleb politsei kooskõlastuse ja tee omaniku nõusoleku (liikluse ümberkorraldamisel)" },
      { role: "korraldaja", action: "kooskõlastab avaliku lõkke tegemise Päästeametiga (vajadusel)" },
      { role: "menetleja", action: "vaatab taotluse ja lisad läbi (3 tööpäeva jooksul) ja määrab vajadusel puuduste kõrvaldamiseks tähtaja" },
      { role: "korraldaja", action: "kõrvaldab puudused (vajadusel)" },
      { role: "vallavalitsus", action: "annab loa või jätab andmata (10 tööpäeva jooksul)" },
      { role: "vallavalitsus", action: "teavitab korraldajat otsusest (3 tööpäeva jooksul)" }
    ]
  },
  {
    id: "kehtna",
    kov: "Kehtna vald",
    maakond: "Rapla maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/410032026007?leiaKehtiv",
    revisionDate: "13.03.2026",
    deadlineDays: "20 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    Start((Algus)) --> K1["Korraldaja: esitab taotluse"]
    K1 --> M1["Menetleja: vaatab taotluse läbi"]
    M1 --> D1{"Lisadokumente vaja?"}:::decision
    D1 -- Jah --> K2["Korraldaja: esitab lisadokumendid"]
    K2 --> M1
    D1 -- Ei --> VV1["Vallavalitsus: annab loa korraldusega"]
    VV1 --> VV2["Vallavalitsus: edastab loa korraldajale"]
    VV2 --> End((Lõpp))`,
    steps: [
      { role: "korraldaja", action: "esitab taotluse (vähemalt 20 päeva enne)" },
      { role: "menetleja", action: "vaatab taotluse läbi (7 päeva jooksul) ja otsustab täiendavate dokumentide või kooskõlastuste vajaduse" },
      { role: "korraldaja", action: "esitab nõutud lisad (vajadusel)" },
      { role: "vallavalitsus", action: "annab loa korraldusega (pärast kõigi dokumentide laekumist)" },
      { role: "vallavalitsus", action: "saadab korralduse korraldajale (3 päeva jooksul)" }
    ]
  },
  {
    id: "keila",
    kov: "Keila linn",
    maakond: "Harju maakond",
    name: "Keila linna avaliku ürituse korraldamise ja pidamise eeskiri",
    url: "https://www.riigiteataja.ee/akt/408052014057",
    revisionDate: "01.07.2014",
    deadlineDays: "14 päeva",
    processingDays: "10 päeva",
    mermaid: `graph TD
  classDef default font-family:Inter,sans-serif,font-size:12px
  classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
  classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
  Start((Algus)) --> K1["Korraldaja: esitab taotluse ja skeemid"]
  K1 --> M1["Menetleja: vaatab taotluse läbi"]
  M1 --> D1{"Kas on vaja lisasid?"}:::decision
  D1 -- Jah --> K2["Korraldaja: esitab lisadokumendid"]
  K2 --> M1
  D1 -- Ei --> M2["Menetleja: otsustab loa andmise"]
  M2 --> M3["Menetleja: teavitab korraldajat"]
  M3 --> End((Lõpp))`,
    steps: [
      { role: "korraldaja", action: "esitab allkirjastatud taotluse (vähemalt 14 päeva enne)" },
      { role: "korraldaja", action: "lisab kooskõlastatud liikluskorralduse skeemi (liikluse ümberkorraldamisel)" },
      { role: "menetleja", action: "vaatab taotluse läbi ning otsustab lisadokumentide või kooskõlastuste vajaduse" },
      { role: "korraldaja", action: "esitab täiendavad dokumendid (vajadusel)" },
      { role: "menetleja", action: "otsustab loa andmise (10 päeva jooksul)" },
      { role: "menetleja", action: "teavitab korraldajat otsusest" }
    ]
  },
  {
    id: "kihnu",
    kov: "Kihnu vald",
    maakond: "Pärnu maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded Kihnu vallas",
    url: "https://www.riigiteataja.ee/akt/414052024008?leiaKehtiv",
    revisionDate: "17.05.2024",
    deadlineDays: "30 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A["Korraldaja: esitab taotluse"] --> B["Ametiasutus: registreerib taotluse"]
    B --> C["Menetleja: vaatab läbi"]
    C --> D{"Kas on puudusi?"}:::decision
    D -- Jah --> E["Menetleja: määrab tähtaja kõrvaldamiseks"]
    E --> F["Korraldaja: kõrvaldab puudused"]
    F --> C
    D -- Ei --> G["Vallavalitsus: vaatab läbi"]
    G --> H{"Kas anda luba?"}:::decision
    H -- Jah --> I["Vallavalitsus: vormistab loa korraldusega"]
    I --> J["Ametiasutus: kannab kalendrisse"]
    H -- Ei --> K["Vallavalitsus: teatab keeldumisest"]`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse koos lisadega vähemalt 30 päeva enne üritust" },
      { role: "Ametiasutus", action: "registreerib esitatud taotluse" },
      { role: "Menetleja", action: "vaatab taotluse ja lisad läbi" },
      { role: "Menetleja", action: "(puuduste korral) määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "(vajadusel) kõrvaldab puudused määratud tähtajaks" },
      { role: "Vallavalitsus", action: "otsustab loa andmise või keeldumise 10 tööpäeva jooksul" },
      { role: "Vallavalitsus", action: "vormistab loa andmise korraldusena (keeldumisel teatab sellest korraldajale koos põhjendustega)" },
      { role: "Ametiasutus", action: "kannab ürituse valla veebilehel olevasse kalendrisse" }
    ]
  },
  {
    id: "kiili",
    kov: "Kiili vald",
    maakond: "Harju maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/428122023051?leiaKehtiv",
    revisionDate: "31.12.2023",
    deadlineDays: "14 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A["Korraldaja: esitab taotluse"] --> B["Menetleja: vaatab läbi"]
    B --> C{"Vajadus kooskõlastada?"}:::decision
    C -- Jah --> D["Menetleja: edastab riigiasutustele"]:::external
    D --> E["Väline osapool: kooskõlastab"]:::external
    E --> F["Vallavalitsus: vaatab läbi"]
    C -- Ei --> F
    F --> G{"Kas anda luba?"}:::decision
    G -- Jah --> H["Vallavalitsus: väljastab loa"]
    G -- Ei --> I["Vallavalitsus: teatab keeldumisest"]`,
    steps: [
      { role: "Korraldaja", action: "esitab allkirjastatud taotluse vähemalt 14 päeva enne üritust" },
      { role: "Menetleja", action: "vaatab taotluse läbi ja otsustab lisadokumentide vajaduse" },
      { role: "Menetleja", action: "(vajadusel) edastab taotluse kooskõlastamiseks riigi ametiasutustele või teistele organisatsioonidele" },
      { role: "Vallavalitsus", action: "otsustab loa andmise või keeldumise 10 tööpäeva jooksul" },
      { role: "Vallavalitsus", action: "(keeldumisel) teatab sellest kirjalikult 3 tööpäeva jooksul" }
    ]
  },
  {
    id: "kohila",
    kov: "Kohila vald",
    maakond: "Rapla maakond",
    name: "Avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/402062015017?leiaKehtiv",
    revisionDate: "05.06.2015",
    deadlineDays: "10 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A["Korraldaja: esitab taotluse"] --> B["Vallavalitsus: vaatab läbi"]
    B --> C{"Kas anda luba?"}:::decision
    C -- Jah --> D["Vallavalitsus: väljastab loa"]
    D --> E["Vallavalitsus: teavitab prefektuuri ja päästekeskust"]:::external
    C -- Ei --> F["Vallavalitsus: keeldub loast"]`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse vähemalt 10 tööpäeva enne ürituse toimumist" },
      { role: "Vallavalitsus", action: "vaatab taotluse läbi ja otsustab loa andmise" },
      { role: "Vallavalitsus", action: "teavitab nõusoleku andmisest viivitamata asukohajärgset prefektuuri ja päästekeskust" }
    ]
  },
  {
    id: "kohtla-jarve",
    kov: "Kohtla-Järve linn",
    maakond: "Ida-Viru maakond",
    name: "Kohtla-Järve linnas avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/410122019004",
    revisionDate: "01.01.2020",
    deadlineDays: "15-20 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A["Korraldaja: esitab taotluse"] --> B["Valitsus: vaatab läbi"]
    B --> C{"Kas on puudusi?"}:::decision
    C -- Jah --> D["Valitsus: määrab tähtaja kõrvaldamiseks"]
    D --> E["Korraldaja: kõrvaldab puudused"]
    E --> B
    C -- Ei --> F["Valitsus: teavitab menetlusse võtmisest"]
    F --> G["Valitsus: otsustab loa andmise"]
    G --> H{"Kas anda luba?"}:::decision
    H -- Jah --> I["Valitsus: väljastab korralduse"]
    H -- Ei --> J["Valitsus: keeldub ja põhjendab"]`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse vähemalt 15 tööpäeva (või 20 tööpäeva keerulisemate tingimuste korral) enne" },
      { role: "Valitsus", action: "vaatab läbi taotluse ja lisadokumendid" },
      { role: "Valitsus", action: "(puuduste korral) määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Valitsus", action: "teavitab korraldajat e-posti teel taotluse menetlusse võtmisest" },
      { role: "Valitsus", action: "otsustab loa andmise või keeldumise korraldusega" }
    ]
  },
  {
    id: "kose",
    kov: "Kose vald",
    maakond: "Harju maakond",
    name: "Kose valla avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/407092023011",
    revisionDate: "10.09.2023",
    deadlineDays: "10-30 päeva",
    processingDays: "14 kalendripäeva",
    mermaid: `graph TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A["Korraldaja: esitab taotluse SPOKUs"] --> B["Ametnik: vaatab läbi"]
    B --> C{"Vajadus kooskõlastada?"}:::decision
    C -- Jah --> D["Ametnik: saadab PPA/PA-le"]:::external
    D --> E["Väline osapool: kooskõlastab"]:::external
    E --> F["Vallavalitsus: otsustab loa andmise"]
    C -- Ei --> F
    F --> G{"Kas anda luba?"}:::decision
    G -- Jah --> H["Vallavalitsus: väljastab loa"]
    H --> I["Vallavalitsus: teavitab PPA-d/PA-d"]:::external
    G -- Ei --> J["Vallavalitsus: teatab korraldajale ja ametitele"]`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse läbi iseteeninduskeskkonna SPOKU (kõrgendatud riskiga 30 päeva, tavaline 10 päeva enne)" },
      { role: "Vallavalitsuse ametnik", action: "(vajadusel) saadab taotluse kooskõlastusteks PPA-le ja/või PA-le ning teadmiseks TTJA-le" },
      { role: "Vallavalitsus", action: "annab loa 14 kalendripäeva jooksul vallavalitsuse korraldusega" },
      { role: "Vallavalitsus", action: "informeerib loa andmisest PPA-d ja PA-d" },
      { role: "Vallavalitsus", action: "(keeldumisel) teatab sellest kirjalikult 3 tööpäeva jooksul" },
      { role: "Menetleja", action: "(keeldumisel) informeerib kooskõlastanud ametiasutusi 2 tööpäeva jooksul" }
    ]
  },
  {
    id: "kuusalu",
    kov: "Kuusalu vald",
    maakond: "Harju maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/420122023045?leiaKehtiv",
    revisionDate: "23.12.2023",
    deadlineDays: "15 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A["Korraldaja: esitab e-taotluse"] --> B["Ametnik: kontrollib taotlust"]
    B --> C{"Kõrgendatud turvarisk?"}:::decision
    C -- Jah --> D["Vallavalitsus: kooskõlastab PPA/PA-ga"]:::external
    D --> E["Väline osapool: kooskõlastab"]:::external
    E --> F["Ametnik: otsustab loa andmise"]
    C -- Ei --> F
    F --> G{"Kas anda luba?"}:::decision
    G -- Jah --> H["Ametnik: väljastab loa"]
    H --> I["Ametnik: teavitab PPA/PA/TTJA"]:::external
    G -- Ei --> J["Ametnik: teatab keeldumisest"]`,
    steps: [
      { role: "Korraldaja", action: "esitab elektroonilise taotluse vähemalt 15 tööpäeva enne" },
      { role: "Ametnik", action: "kontrollib vastavust ja nõuab vajadusel puuduste kõrvaldamist" },
      { role: "Vallavalitsus", action: "(vajadusel) edastab taotluse kooskõlastamiseks PPA-le ja/või Päästeametile" },
      { role: "Ametnik", action: "annab loa kirjaliku otsusega 10 tööpäeva jooksul (suuremate ürituste puhul otsustab vallavalitsus)" },
      { role: "Ametnik", action: "teavitab Põhja prefektuuri, Päästeametit ja vajadusel TTJA-d ürituse toimumisest" },
      { role: "Ametnik", action: "(keeldumisel) teatab sellest kirjalikult 10 tööpäeva jooksul" }
    ]
  },
  {
    id: "loksa",
    kov: "Loksa linn",
    maakond: "Harju maakond",
    name: "Loksa linnas avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/416052015003",
    revisionDate: "19.05.2015",
    deadlineDays: "14 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab vormikohase teate] --> B[Menetleja: vaatab läbi ja määrab vajadusel lisatingimused]
    B --> C[Menetleja: valmistab ette korralduse eelnõu]
    C --> D{Linnavalitsus: otsustab kooskõlastuse andmise}:::decision
    D -- Ei --> E[Korraldaja: teavitus keeldumisest]
    D -- Jah --> F[Menetleja: väljastab kooskõlastuse]
    F --> G[PPA: teavitamine üritusest]:::external
    F --> H[Korraldaja: saab kooskõlastuse]`,
    steps: [
      { role: "Korraldaja", action: "esitab vormikohase avaliku ürituse teate (vähemalt 14 päeva enne üritust)" },
      { role: "Menetleja", action: "vaatab teate läbi ja otsustab vajadusel täiendavate dokumentide või kooskõlastuste esitamise vajaduse" },
      { role: "Menetleja", action: "valmistab ette linnavalitsuse korralduse eelnõu" },
      { role: "Linnavalitsus", action: "annab 10 tööpäeva jooksul avaliku ürituse pidamiseks kooskõlastuse (loa)" },
      { role: "Menetleja", action: "edastab kooskõlastuse korraldajale ja teavitab viivitamata PPA Põhja prefektuuri" }
    ]
  },
  {
    id: "luunja",
    kov: "Luunja vald",
    maakond: "Tartu maakond",
    name: "Avaliku ürituse korraldamise kord",
    url: "https://www.riigiteataja.ee/akt/405092023021?leiaKehtiv",
    revisionDate: "01.01.2024",
    deadlineDays: "20 päeva",
    processingDays: "14 päeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: kooskõlastab vajadusel PPA-ga]:::external --> B[Korraldaja: esitab digitaalse taotluse]
    B --> C[Ametnik: vaatab läbi ja kontrollib nõuetele vastavust]
    C --> D{Vallavalitsus: otsustab loa andmise}:::decision
    D -- Ei --> E[Korraldaja: teavitus keeldumisest]
    D -- Jah --> F[Vallavalitsus: väljastab loa]
    F --> G[Korraldaja: saab ürituse loa]`,
    steps: [
      { role: "Korraldaja", action: "kooskõlastab ürituse PPA-ga enne taotluse esitamist (kui osalejaid >300 ja kaasneb riskitegur)" },
      { role: "Korraldaja", action: "esitab digitaalselt allkirjastatud taotluse koos lisadokumentidega (vähemalt 20 päeva enne üritust)" },
      { role: "Ametnik", action: "vaatab taotluse läbi ja määrab vajadusel tähtaja puuduste kõrvaldamiseks" },
      { role: "Vallavalitsus", action: "annab 14 päeva jooksul loa või keeldub sellest" }
    ]
  },
  {
    id: "laane-harju",
    kov: "Lääne-Harju vald",
    maakond: "Harju maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/431122024017?leiaKehtiv",
    revisionDate: "03.01.2025",
    deadlineDays: "20-30 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab taotluse SPOKU-s] --> B[Teenistuja: vaatab läbi ja kontrollib dokumente]
    B --> C{Kas on vajalikud välised kooskõlastused?}:::decision
    C -- Jah --> D[PPA/PA: kooskõlastamine]:::external
    C -- Ei --> E[Vallavalitsus: menetleb taotlust]
    D --> E
    E --> F{Vallavalitsus: otsustab loa andmise}:::decision
    F -- Ei --> G[Korraldaja: teavitus keeldumisest]
    F -- Jah --> H[Vallavalitsus: väljastab korralduse]
    H --> I[PPA: teavitamine loast]:::external
    H --> J[Korraldaja: saab ürituse loa]`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse SPOKU infosüsteemi kaudu (vähemalt 20 või 30 päeva enne)" },
      { role: "Teenistuja", action: "vaatab taotluse läbi ja küsib vajadusel täiendavaid andmeid või dokumente" },
      { role: "Teenistuja", action: "edastab vajadusel taotluse kooskõlastamiseks riigi ametiasutustele (PPA, Päästeamet)" },
      { role: "Vallavalitsus", action: "otsustab loa andmise või keeldumise 10 tööpäeva jooksul" },
      { role: "Vallavalitsus", action: "edastab otsuse taotlejale ning ärakirja PPA-le" }
    ]
  },
  {
    id: "laane-nigula",
    kov: "Lääne-Nigula vald",
    maakond: "Lääne maakond",
    name: "Avalike ürituste korraldamise ja pidamise kord Lääne-Nigula vallas",
    url: "https://www.riigiteataja.ee/akt/425112020022?leiaKehtiv",
    revisionDate: "28.11.2020",
    deadlineDays: "14 päeva",
    processingDays: "10 päeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab vormikohase taotluse] --> B[Ametnik: vaatab läbi ja kontrollib lisasid]
    B --> C{Kas on kõrgendatud risk või liiklusmuudatus?}:::decision
    C -- Jah --> D[Vallavalitsus: otsustab loa andmise]
    C -- Ei --> E[Ametiasutuse juht: otsustab loa andmise]
    D --> F{Otsus?}:::decision
    E --> F
    F -- Jah --> G[KOV: väljastab haldusakti]
    F -- Ei --> H[Korraldaja: teavitus keeldumisest]
    G --> I[PPA/Kooskõlastajad: teavitamine]:::external`,
    steps: [
      { role: "Korraldaja", action: "esitab vormikohase taotluse (vähemalt 14 päeva enne)" },
      { role: "Ametnik", action: "vaatab taotluse läbi ja küsib vajadusel täiendavaid dokumente või kooskõlastusi" },
      { role: "Ametiasutuse juht või volitatud ametnik", action: "otsustab loa andmise tavajuhul" },
      { role: "Vallavalitsus", action: "otsustab loa andmise (kui kaasneb kõrge risk, teede sulgemine või liiklusmuudatus)" },
      { role: "Vallavalitsus", action: "teavitab korraldajat ja kooskõlastajaid loa väljastamisest või kehtetuks tunnistamisest" }
    ]
  },
  {
    id: "laaneranna",
    kov: "Lääneranna vald",
    maakond: "Pärnu maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/414052025004?leiaKehtiv",
    revisionDate: "17.05.2025",
    deadlineDays: "20 kalendripäeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab taotluse SPOKU-s] --> B[Menetleja: kontrollib vastavust 10 tp jooksul]
    B --> C{Kas on öörahu, veekogu või >500 in?}:::decision
    C -- Jah --> D[Vallavalitsus: otsustab loa andmise]
    C -- Ei --> E[Majandusosakond: otsustab loa andmise]
    D --> F{Otsus?}:::decision
    E --> F
    F -- Jah --> G[Menetleja: vormistab loa]
    G --> H[PPA/PA/TTJA: teavitamine]:::external
    F -- Ei --> I[Korraldaja: teavitus keeldumisest]`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse SPOKU keskkonnas (vähemalt 20 kalendripäeva enne)" },
      { role: "Menetleja", action: "kontrollib 10 tööpäeva jooksul taotluse vastavust nõuetele" },
      { role: "Menetleja", action: "saadab nõuetekohase taotluse otsustamiseks vallavalitsusele või majandusosakonnale" },
      { role: "Vallavalitsus", action: "otsustab loa andmise (kui on öörahu, >500 in, veekogu jms)" },
      { role: "Majandusosakond", action: "otsustab loa andmise (muudel juhtudel)" },
      { role: "Menetleja", action: "teavitab viivitamata väliseid osapooli (PPA, Päästeamet, Ühistranspordikeskus, TTJA)" }
    ]
  },
  {
    id: "luganuse",
    kov: "Lüganuse vald",
    maakond: "Ida-Viru maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/403042025027?leiaKehtiv",
    revisionDate: "06.04.2025",
    deadlineDays: "10 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab taotluse ja lisad] --> B[Teenistuja: kontrollib nõuetele vastavust]
    B --> C{Kas on vajalik väline kooskõlastus/teavitus?}:::decision
    C -- Jah --> D[PPA/PA/TTJA: kooskõlastamine/teavitamine]:::external
    C -- Ei --> E[Vallavalitsus: koostab loa eelnõu]
    D --> E
    E --> F{Vallavalitsus: otsustab loa andmise}:::decision
    F -- Jah --> G[Vallavalitsus: väljastab loa]
    F -- Ei --> H[Korraldaja: teavitus keeldumisest]
    G --> I[PPA: teavitamine väljastatud loast]:::external`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse (vähemalt 10 tööpäeva enne üritust)" },
      { role: "Teenistuja", action: "vaatab taotluse läbi ja kontrollib vastavust nõuetele" },
      { role: "Vallavalitsus", action: "edastab taotluse vajadusel kooskõlastamiseks PPA-le või teadmiseks Päästekeskusele/TTJA-le" },
      { role: "Vallavalitsus", action: "annab loa vähemalt 2 tööpäeva enne üritust" },
      { role: "Vallavalitsus", action: "teavitab PPA-d kõigist loa saanud üritustest" }
    ]
  },
  {
    id: "maardu",
    kov: "Maardu linn",
    maakond: "Harju maakond",
    name: "Avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/428062014071",
    revisionDate: "01.07.2014",
    deadlineDays: "14 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab vormikohase loataotluse] --> B[Korraldaja: hangib vajadusel kooskõlastused]
    B --> C[Politsei/Pääste: kooskõlastamine]:::external
    C --> D[Linnavalitsus: vaatab taotluse läbi]
    B --> D
    D --> E{Linnavalitsus: otsustab loa andmise}:::decision
    E -- Jah --> F[Linnavalitsus: väljastab loa]
    E -- Ei --> G[Linnavalitsus: teavitus keeldumisest]
    F --> H[Korraldaja: saab teavituse 2 tp jooksul]`,
    steps: [
      { role: "Korraldaja", action: "esitab vormikohase loataotluse (vähemalt 14 päeva enne üritust)" },
      { role: "Korraldaja", action: "lisab taotlusele vajalikud kooskõlastused (maaomanik, vajadusel politsei- ja päästeasutus)" },
      { role: "Linnavalitsus", action: "vaatab taotluse läbi ja otsustab loa andmise (10 tööpäeva jooksul)" },
      { role: "Linnavalitsus", action: "teavitab taotlejat otsusest (2 tööpäeva jooksul)" }
    ]
  },
  {
    id: "muhu",
    kov: "Muhu vald",
    maakond: "Saare maakond",
    name: "Avalike ürituste korraldamise kord",
    url: "https://www.riigiteataja.ee/akt/425042023005",
    revisionDate: "28.04.2023",
    deadlineDays: "10 tööpäeva",
    processingDays: "7 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab teatise] --> B[Vallavalitsus: vaatab läbi istungil]
    B --> C{Kas on riskikriteeriumid?}:::decision
    C -- Jah --> D[Politsei: kooskõlastamine]:::external
    C -- Ei --> E[Vallavalitsus: koostab korralduse]
    D --> E
    E --> F{Vallavalitsus: kinnitab toimumise}:::decision
    F -- Jah --> G[Vallavalitsus: väljastab korralduse]
    F -- Ei --> H[Korraldaja: teavitus keeldumisest]
    G --> I[Politsei: teavitamine üritusest]:::external`,
    steps: [
      { role: "Korraldaja", action: "esitab vormikohase teatise (vähemalt 10 tööpäeva enne üritust)" },
      { role: "Vallavalitsus", action: "vaatab teatise läbi istungil ja küsib vajadusel lisainfot" },
      { role: "Vallavalitsus", action: "edastab teatise kooskõlastamiseks politseile (kui esinevad riskikriteeriumid)" },
      { role: "Vallavalitsus", action: "kinnitab ürituse toimumise korraldusega" },
      { role: "Vallavalitsus", action: "edastab teavituse kinnitatud ürituse kohta politseile" }
    ]
  },
  {
    id: "mulgi",
    kov: "Mulgi vald",
    maakond: "Viljandi maakond",
    name: "Mulgi valla avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/411112020034",
    revisionDate: "14.11.2020",
    deadlineDays: "30 päeva",
    processingDays: "15 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab digitaalse taotluse] --> B[Korraldaja: lisab erikooskõlastused]
    B --> C[Riigiametid: kooskõlastamine]:::external
    C --> D[Vallavalitsus: menetleb taotlust]
    B --> D
    D --> E{Vallavalitsus: otsustab loa andmise}:::decision
    E -- Jah --> F[Vallavalitsus: vormistab korralduse]
    E -- Ei --> G[Korraldaja: motiveeritud keeldumine]
    F --> H[PPA/Pääste: teavitamine loast]:::external`,
    steps: [
      { role: "Korraldaja", action: "esitab digitaalselt allkirjastatud loa taotluse (vähemalt 30 päeva enne üritust)" },
      { role: "Korraldaja", action: "lisab vajadusel erikooskõlastused (nt Muinsuskaitseamet, Transpordiamet)" },
      { role: "Vallavalitsus", action: "vaatab taotluse läbi ja kooskõlastab selle" },
      { role: "Vallavalitsus", action: "otsustab loa andmise korraldusega (15 tööpäeva jooksul)" },
      { role: "Vallavalitsus", action: "teavitab loa andmisest PPA-d ja Päästeametit" }
    ]
  },
  {
    id: "mustvee",
    kov: "Mustvee vald",
    maakond: "Jõgeva maakond",
    name: "Avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/424092021008?leiaKehtiv",
    revisionDate: "27.09.2021",
    deadlineDays: "7 päeva",
    processingDays: "5 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab taotluse] --> B[Korraldaja: hangib kooskõlastused]
    B --> C[Maaomanik/Transpordiamet: kooskõlastus]:::external
    C --> D[Vallavalitsus: vaatab läbi 5 tp jooksul]
    B --> D
    D --> E{Vallavalitsus: otsustab loa andmise}:::decision
    E -- Jah --> F[Vallavalitsus: väljastab loa]
    E -- Ei --> G[Vallavalitsus: motiveeritud keeldumine]
    F --> H[Korraldaja: teavitus 2 tp jooksul]`,
    steps: [
      { role: "Korraldaja", action: "esitab vormikohase taotluse (hiljemalt 7 päeva enne üritust)" },
      { role: "Korraldaja", action: "kooskõlastab taotluse asjaomaste osapooltega (Transpordiamet, maaomanik)" },
      { role: "Vallavalitsus", action: "vaatab taotluse ja lisad läbi (5 tööpäeva jooksul)" },
      { role: "Vallavalitsus", action: "otsustab loa andmise ja määrab vajadusel lisatingimused" },
      { role: "Vallavalitsus", action: "teavitab korraldajat otsusest (2 tööpäeva jooksul)" }
    ]
  },
  {
    id: "marjamaa",
    kov: "Märjamaa vald",
    maakond: "Rapla maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/419102018015",
    revisionDate: "22.10.2018",
    deadlineDays: "14 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab loa taotluse] --> B[Menetleja: vaatab läbi ja määrab vajadused]
    B --> C{Kas on vajalikud lisakooskõlastused?}:::decision
    C -- Jah --> D[Politsei/Pääste: kooskõlastamine]:::external
    C -- Ei --> E[Menetleja: teeb otsuse eelnõu]
    D --> E
    E --> F{Menetleja: otsustab loa andmise}:::decision
    F -- Jah --> G[Menetleja: väljastab kirjaliku loa]
    F -- Ei --> H[Korraldaja: teavitus keeldumisest 3 tp jooksul]`,
    steps: [
      { role: "Korraldaja", action: "esitab allkirjastatud loa taotluse (vähemalt 14 päeva enne üritust)" },
      { role: "Menetleja", action: "vaatab taotluse läbi ja nõuab vajadusel täiendavaid dokumente või kooskõlastusi" },
      { role: "Korraldaja", action: "lisab taotlusele kooskõlastatud liiklusskeemi või turvaplaani" },
      { role: "Menetleja", action: "annab loa või keeldub sellest (10 tööpäeva jooksul)" },
      { role: "Menetleja", action: "teavitab korraldajat otsusest (3 tööpäeva jooksul)" }
    ]
  },
  {
    id: "narva",
    kov: "Narva linn",
    maakond: "Ida-Viru maakond",
    name: "Narva linna avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/429052015027",
    revisionDate: "01.06.2015",
    deadlineDays: "20 tööpäeva",
    processingDays: "20 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A["Korraldaja: esitab loataotluse"] --> B["Ametiasutus: vaatab läbi ja kontrollib puudusi"]
    B --> C{"Kas on vajalikud kooskõlastused?"}:::decision
    C -- Jah --> D["Ametiasutus: kooskõlastamine PPA/PA-ga"]:::external
    C -- Ei --> E["Linnavalitsus: menetleb taotlust"]
    D --> E
    E --> F{"Linnavalitsus: otsustab loa andmise"}:::decision
    F -- Jah --> G["Linnavalitsus: väljastab loa"]
    F -- Ei --> H["Korraldaja: teavitamine keeldumisest"]
    G --> I["PPA/PA: teavitamine loast"]:::external
    G --> J["Korraldaja: saab ürituse loa"]`,
    steps: [
      { role: "Korraldaja", action: "esitab linnavalitsusele vormikohase loataotluse (hiljemalt 20 tööpäeva enne üritust)" },
      { role: "Ametiasutus", action: "registreerib taotluse ja vaatab läbi selle ning lisadokumendid" },
      { role: "Ametiasutus", action: "määrab vajadusel tähtaja puuduste kõrvaldamiseks või lisakooskõlastuste esitamiseks" },
      { role: "Ametiasutus", action: "korraldab taotluse kooskõlastamise asjaomaste ametiasutustega (kõrgendatud turvariski korral PPA ja Päästeametiga)" },
      { role: "Linnavalitsus", action: "otsustab loa andmise või sellest keeldumise 20 tööpäeva jooksul" },
      { role: "Linnavalitsus", action: "teavitab viivitamatult taotlejat ning PPA ja Päästeameti prefektuure/keskusi" }
    ]
  },
  {
    id: "narva-joesuu",
    kov: "Narva-Jõesuu linn",
    maakond: "Ida-Viru maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded Narva-Jõesuu linnas",
    url: "https://www.riigiteataja.ee/akt/406042022004",
    revisionDate: "09.04.2022",
    deadlineDays: "14 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A["Korraldaja: esitab taotluse ja lisad"] --> B["Korraldaja: hangib vajadusel PPA/PA kooskõlastuse"]:::external
    B --> C["Linnavalitsus: vaatab läbi taotluse ja kooskõlastused"]
    C --> D{"Kas on vajalik tagatisraha?"}:::decision
    D -- Jah --> E["Korraldaja: tasub tagatisraha"]
    D -- Ei --> F["Linnavalitsus: koostab korralduse"]
    E --> F
    F --> G{"Linnavalitsus: otsustab loa andmise"}:::decision
    G -- Jah --> H["Linnavalitsus: väljastab loa korraldusega"]
    G -- Ei --> I["Korraldaja: motiveeritud keeldumine"]`,
    steps: [
      { role: "Korraldaja", action: "esitab linnavalitsusele allkirjastatud taotluse (hiljemalt 14 päeva enne üritust)" },
      { role: "Korraldaja", action: "lisab turvariski korral PPA-ga kooskõlastatud turvaplaani ning vajadusel muud kooskõlastused" },
      { role: "Linnavalitsus", action: "vaatab taotluse läbi ja võib nõuda tagatisraha heakorra tagamiseks" },
      { role: "Linnavalitsus", action: "väljastab loa korraldusega pärast kõigi kooskõlastuste laekumist" },
      { role: "Linnavalitsus", action: "märgib loale tingimused ja ettekirjutused" }
    ]
  },
  {
    id: "noo",
    kov: "Nõo vald",
    maakond: "Tartu maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded Nõo vallas",
    url: "https://www.riigiteataja.ee/akt/411062015003",
    revisionDate: "14.06.2015",
    deadlineDays: "14 päeva",
    processingDays: "7 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A["Korraldaja: esitab taotluse"] --> B["Menetleja: kontrollib vastavust ja nõuab lisasid"]
    B --> C{"Kas on vajalikud lisakooskõlastused?"}:::decision
    C -- Jah --> D["Asjaomased asutused: kooskõlastamine"]:::external
    C -- Ei --> E["Menetleja: valmistab ette otsuse"]
    D --> E
    E --> F{"Vallavalitsus: otsustab loa andmise"}:::decision
    F -- Jah --> G["Vallavalitsus: väljastab loa korraldusega"]
    F -- Ei --> H["Korraldaja: teavitus keeldumisest"]
    G --> I["Korraldaja: teavitus e-posti teel"]`,
    steps: [
      { role: "Korraldaja", action: "esitab vallavalitsusele allkirjastatud loataotluse (koos olemasolevate kooskõlastustega)" },
      { role: "Menetleja", action: "vaatab taotluse läbi ja otsustab täiendavate dokumentide või kooskõlastuste vajaduse" },
      { role: "Vallavalitsus", action: "annab loa 7 tööpäeva jooksul nõuetekohase taotluse saamisest" },
      { role: "Vallavalitsus", action: "vormistab loa korraldusena ja edastab selle taotlejale üldjuhul e-posti teel" }
    ]
  },
  {
    id: "otepaa",
    kov: "Otepää vald",
    maakond: "Valga maakond",
    name: "Avaliku ürituse korraldamise ja pidamise kord Otepää vallas",
    url: "https://www.riigiteataja.ee/akt/427122024008",
    revisionDate: "30.12.2024",
    deadlineDays: "15 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A["Korraldaja: esitab taotluse ja kooskõlastused"]:::external --> B["Loa andja: vaatab läbi ja kontrollib puudusi"]
    B --> C{"Kas taotlus on nõuetekohane?"}:::decision
    C -- Ei --> D["Korraldaja: kõrvaldab puudused"]
    D --> B
    C -- Jah --> E{"Loa andja: otsustab loa andmise"}:::decision
    E -- Jah --> F["Loa andja: väljastab loa ja lisatingimused"]
    E -- Ei --> G["Korraldaja: teavitus keeldumisest"]
    F --> H["PPA/PTA: teavitamine loast"]:::external
    F --> I["Korraldaja: saab ürituse loa"]`,
    steps: [
      { role: "Korraldaja", action: "esitab vallavalitsusele taotluse koos asjaomaste asutuste kooskõlastustega (vähemalt 15 tööpäeva enne üritust)" },
      { role: "Loa andja", action: "menetleb taotlust ja määrab vajadusel tähtaja puuduste kõrvaldamiseks" },
      { role: "Loa andja", action: "väljastab loa või keeldub sellest 10 tööpäeva jooksul" },
      { role: "Loa andja", action: "määrab vajadusel lisatingimused (nt avalikkuse teavitamine)" },
      { role: "Loa andja", action: "teavitab loa andmisest PPA-d ja vajadusel PTA-d" }
    ]
  },
  {
    id: "paide",
    kov: "Paide linn",
    maakond: "Järva maakond",
    name: "Avaliku ürituse korraldamise ja pidamise kord Paide linnas",
    url: "https://www.riigiteataja.ee/akt/430062021016?leiaKehtiv",
    revisionDate: "13.03.2014",
    deadlineDays: "15 tööpäeva",
    processingDays: "7 kalendripäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A["Korraldaja: esitab avalduse ja lisad"] --> B["Ametnik: kontrollib ja nõuab lisateavet"]
    B --> C["Ametnik: esitab ülevaate LV istungile"]
    C --> D{"Ametnik: otsustab loa andmise"}:::decision
    D -- Jah --> E["Ametnik: väljastab loa allkirjaga"]
    D -- Ei --> F["Korraldaja: teavitus keeldumisest"]
    E --> G["Politsei: teavitamine loast"]:::external
    E --> H["Ametiasutus: info avaldamine veebis"]`,
    steps: [
      { role: "Korraldaja", action: "esitab linnavalitsusele avalduse koos lisadokumentide ja kinnistu omaniku kooskõlastusega (vähemalt 15 tööpäeva enne)" },
      { role: "Ametiasutuse ametnik", action: "vaatab avalduse läbi ja nõuab vajadusel lisateavet või puuduste kõrvaldamist" },
      { role: "Ametiasutuse ametnik", action: "esitab menetluses olevatest avaldustest ülevaate linnavalitsuse istungile" },
      { role: "Ametiasutuse ametnik", action: "annab loa 7 kalendripäeva jooksul avalduse saabumisest" },
      { role: "Ametiasutuse ametnik", action: "teavitab taotlejat ja politseid ning avaldab info veebilehel" }
    ]
  },
  {
    id: "peipsiaare",
    kov: "Peipsiääre vald",
    maakond: "Tartu maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/403072024021?leiaKehtiv",
    revisionDate: "06.07.2024",
    deadlineDays: "30 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: hangib vajalikud kooskõlastused]:::external --> B[Korraldaja: esitab taotluse ja lisad]
    B --> C[Menetleja: vaatab läbi ja kontrollib puudusi]
    C --> D{Kas taotlus on nõuetekohane?}:::decision
    D -- Ei --> E[Korraldaja: kõrvaldab puudused]
    E --> C
    D -- Jah --> F{Vallavalitsus: otsustab loa andmise}:::decision
    F -- Ei --> G[Korraldaja: teavitamine keeldumisest]
    F -- Jah --> H[Vallavalitsus: väljastab korralduse]
    H --> I[PPA/PA/TTJA: teavitamine loast]:::external
    H --> J[Korraldaja: saab ürituse loa]`,
    steps: [
      { role: "Korraldaja", action: "hangib vajadusel kooskõlastused (omanik, PPA, PA, KeA)" },
      { role: "Korraldaja", action: "esitab vormikohase taotluse (vähemalt 30 päeva enne)" },
      { role: "Menetleja", action: "vaatab taotluse läbi ja kontrollib puudusi" },
      { role: "Vallavalitsus", action: "otsustab loa andmise ja vormistab korralduse" },
      { role: "Vallavalitsus", action: "teavitab korraldajat ja väliseid asutusi (PPA, PA, TTJA) kahe tööpäeva jooksul" }
    ]
  },
  {
    id: "pohja-parnumaa",
    kov: "Põhja-Pärnumaa vald",
    maakond: "Pärnu maakond",
    name: "Avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/407032019006?leiaKehtiv",
    revisionDate: "10.03.2019",
    deadlineDays: "10-30 päeva",
    processingDays: "5 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab teate ja lisadokumendid] --> B[Ametnik: kontrollib andmeid ja nõuab parandusi]
    B --> C{Kas teade vastab nõuetele?}:::decision
    C -- Ei --> D[Korraldaja: parandab teadet]
    D --> B
    C -- Jah --> E{Ametnik: otsustab loa andmise}:::decision
    E -- Ei --> F[Korraldaja: teavitamine keeldumisest]
    E -- Jah --> G[Ametnik: väljastab kirjaliku loa]
    G --> H[PPA/PA: teavitamine loast]:::external
    G --> I[Veebitoimetaja: ürituse kandmine kalendrisse]`,
    steps: [
      { role: "Korraldaja", action: "esitab teate ja lisad (10 või 30 päeva enne)" },
      { role: "Vastutav ametnik", action: "kontrollib andmeid ja nõuab vajadusel parandusi" },
      { role: "Vastutav ametnik", action: "otsustab loa andmise 5 tööpäeva jooksul" },
      { role: "Vastutav ametnik", action: "vormistab kirjaliku loa" },
      { role: "Vastutav ametnik", action: "teavitab PPA-d, Päästeametit ja valla veebitoimetajat" }
    ]
  },
  {
    id: "pohja-sakala",
    kov: "Põhja-Sakala vald",
    maakond: "Viljandi maakond",
    name: "Põhja-Sakala vallas avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/406112018028",
    revisionDate: "09.11.2018",
    deadlineDays: "10 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: hangib välised kooskõlastused]:::external --> B[Korraldaja: esitab teate ja lisad]
    B --> C[Menetleja: kontrollib dokumente ja lisasid]
    C --> D{Kas on vajalikud täiendused?}:::decision
    D -- Jah --> E[Korraldaja: esitab täiendavad andmed]
    E --> C
    D -- Ei --> F{Vallavalitsus: otsustab loa andmise}:::decision
    F -- Ei --> G[Korraldaja: teavitamine keeldumisest]
    F -- Jah --> H[Vallavalitsus: väljastab korralduse]
    H --> I[PPA/TTJA: teavitamine loast]:::external`,
    steps: [
      { role: "Korraldaja", action: "hangib vajadusel kooskõlastused (omanik, PPA, PA, KeA, Transpordiamet)" },
      { role: "Korraldaja", action: "esitab teate ja lisad (vähemalt 10 tööpäeva enne)" },
      { role: "Menetleja", action: "kontrollib nõuetekohasust ja lisasid" },
      { role: "Vallavalitsus", action: "otsustab loa andmise ja vormistab korralduse" },
      { role: "Vallavalitsus", action: "teavitab PPA-d ja TTJA-d" }
    ]
  },
  {
    id: "poltsamaa",
    kov: "Põltsamaa vald",
    maakond: "Jõgeva maakond",
    name: "Avaliku ürituse korraldamise kord",
    url: "https://www.riigiteataja.ee/akt/427022018004",
    revisionDate: "02.03.2018",
    deadlineDays: "10 tööpäeva",
    processingDays: "5 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab taotluse ja kooskõlastused] --> B[Menetleja: vaatab läbi ja kontrollib vastavust]
    B --> C{Kas taotlus on nõuetekohane?}:::decision
    C -- Ei --> D[Korraldaja: kõrvaldab puudused]
    D --> B
    C -- Jah --> E{Menetleja: otsustab loa andmise}:::decision
    E -- Ei --> F[Korraldaja: teavitamine keeldumisest]
    E -- Jah --> G[Menetleja: väljastab haldusakti]
    G --> H[PPA/PA: viivitamatu teavitamine]:::external`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse ja lisad (vähemalt 10 tööpäeva enne)" },
      { role: "Menetleja", action: "vaatab läbi ja kontrollib nõuetele vastavust ning kooskõlastusi" },
      { role: "Menetleja", action: "otsustab loa andmise 5 tööpäeva jooksul" },
      { role: "Menetleja", action: "väljastab haldusakti ja informeerib viivitamatult PPA-d ning Päästeametit" }
    ]
  },
  {
    id: "polva",
    kov: "Põlva vald",
    maakond: "Põlva maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded Põlva vallas",
    url: "https://www.riigiteataja.ee/akt/419092018010?leiaKehtiv",
    revisionDate: "22.09.2018",
    deadlineDays: "14-30 päeva",
    processingDays: "3 päeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: kooskõlastab ürituse asutustega]:::external --> B[Korraldaja: esitab taotluse ja lisad]
    B --> C[Menetleja: kontrollib nõuetekohasust]
    C --> D{Kas on vaja täiendavaid arvamusi?}:::decision
    D -- Jah --> E[Asutused: arvamuse andmine]:::external
    E --> F
    D -- Ei --> F[Menetleja: valmistab ette otsuse]
    F --> G{Loa andja: otsustab loa andmise}:::decision
    G -- Ei --> H[Korraldaja: teavitamine keeldumisest]
    G -- Jah --> I[Loa andja: väljastab loa]
    I --> J[PPA/TTJA: teavitamine loast]:::external`,
    steps: [
      { role: "Korraldaja", action: "hangib vajalikud kooskõlastused (PPA, PA, Maanteeamet, KeA jm)" },
      { role: "Korraldaja", action: "esitab taotluse ja lisad (14 või 30 päeva enne)" },
      { role: "Menetleja", action: "vaatab läbi ja nõuab vajadusel täiendusi" },
      { role: "Loa andja", action: "otsustab loa andmise vähemalt 3 päeva enne üritust" },
      { role: "Loa andja", action: "teavitab korraldajat ja väliseid asutusi (PPA, TTJA)" }
    ]
  },
  {
    id: "parnu",
    kov: "Pärnu linn",
    maakond: "Pärnu maakond",
    name: "Avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/431052019009",
    revisionDate: "03.06.2019",
    deadlineDays: "14-60 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab taotluse] --> B[Teenistus: kontrollib andmeid]
    B --> C{Kas üritus toimub öörahu ajal?}:::decision
    C -- Jah --> D[Linnavalitsus: annab kellaaegadele nõusoleku]
    C -- Ei --> E[Komisjon: menetleb taotlust]
    D --> E
    E --> F{Komisjon: otsustab loa andmise}:::decision
    F -- Jah --> G[Menetleja: väljastab loa]
    F -- Ei --> H[Korraldaja: teavitus keeldumisest]
    G --> I[PPA/PA/TTJA: teavitamine]:::external
    G --> J[Valla veeb: avaldamine]`,
    steps: [
      { role: "Korraldaja", action: "esitab vormikohase taotluse (vähemalt 14, 30 või 60 päeva varem)" },
      { role: "Kultuuri- ja sporditeenistus", action: "kontrollib andmeid ja määrab vajadusel puuduste kõrvaldamise tähtaja" },
      { role: "Linnavalitsus", action: "annab nõusoleku kellaaegade osas (kui üritus toimub öörahu ajal)" },
      { role: "Komisjon", action: "otsustab loa andmise või andmata jätmise konsensuse alusel" },
      { role: "Menetleja", action: "teavitab viivitamatult korraldajat ning PPA-d, PA-d ja TTJA-d" }
    ]
  },
  {
    id: "raasiku",
    kov: "Raasiku vald",
    maakond: "Harju maakond",
    name: "Raasiku valla avaliku korra eeskiri",
    url: "https://www.riigiteataja.ee/akt/404092014018",
    revisionDate: "07.09.2014",
    deadlineDays: "14 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab taotluse] --> B[Vallavalitsus: vaatab läbi istungil]
    B --> C{Kas on vajalikud lisadokumendid?}:::decision
    C -- Jah --> D[Korraldaja: esitab täiendused]
    D --> B
    C -- Ei --> E{Vallavalitsus: otsustab loa andmise}:::decision
    E -- Jah --> F[Vallavalitsus: väljastab loa]
    E -- Ei --> G[Korraldaja: motiveeritud keeldumine]`,
    steps: [
      { role: "Korraldaja", action: "esitab loa taotluse (vähemalt 14 päeva varem)" },
      { role: "Vallavalitsus", action: "vaatab taotluse läbi istungil ja nõuab vajadusel täiendavaid dokumente või kooskõlastusi" },
      { role: "Vallavalitsus", action: "väljastab loa 10 tööpäeva jooksul viimase nõuetekohase dokumendi saamisest" },
      { role: "Vallavalitsus", action: "teavitab taotlejat loa andmisest või sellest keeldumisest" }
    ]
  },
  {
    id: "rae",
    kov: "Rae vald",
    maakond: "Harju maakond",
    name: "Rae valla avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/429062023054",
    revisionDate: "02.07.2023",
    deadlineDays: "15-20 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab taotluse SPOKU-s] --> B[Menetleja: kontrollib dokumente]
    B --> C{Kas on kõrgendatud turvarisk?}:::decision
    C -- Jah --> D[PPA: kooskõlastamine ja tingimused]:::external
    C -- Ei --> E[Vallavalitsus: menetleb taotlust]
    D --> E
    E --> F{Vallavalitsus: otsustab loa andmise}:::decision
    F -- Jah --> G[Vallavalitsus: vormistab korralduse]
    F -- Ei --> H[Korraldaja: teavitus keeldumisest]
    G --> I[PPA/PA: teavitamine loast]:::external`,
    steps: [
      { role: "Korraldaja", action: "esitab vormikohase taotluse SPOKU keskkonnas (15 või 20 päeva varem)" },
      { role: "Menetleja", action: "vaatab taotluse läbi ja nõuab vajadusel täiendavat teavet" },
      { role: "PPA", action: "kooskõlastab kõrgendatud turvariskiga ürituse korral turvaplaani ja tingimused" },
      { role: "Vallavalitsus", action: "annab ürituse loa korraldusega" },
      { role: "Menetleja", action: "teavitab loa andmisest PPA-d ja vajadusel teisi asutusi" }
    ]
  },
  {
    id: "rakvere-linn",
    kov: "Rakvere linn",
    maakond: "Lääne-Viru maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/430092025025?leiaKehtiv",
    revisionDate: "03.10.2025",
    deadlineDays: "15 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab teate SPOKU-s] --> B[Ametiasutus: kontrollib vastavust]
    B --> C{Kas teates on puudusi?}:::decision
    C -- Jah --> D[Korraldaja: kõrvaldab puudused]
    D --> B
    C -- Ei --> E{Linnavalitsus: otsustab nõusoleku}:::decision
    E -- Jah --> F[Linnavalitsus: annab nõusoleku]
    E -- Ei --> G[Korraldaja: teavitus keeldumisest]
    F --> H[PPA: teavitamine nõusolekust]:::external`,
    steps: [
      { role: "Korraldaja", action: "esitab teate SPOKU kaudu (vähemalt 15 tööpäeva varem)" },
      { role: "Ametiasutus", action: "kontrollib teate vastavust ja määrab vajadusel tähtaja puuduste kõrvaldamiseks" },
      { role: "Linnavalitsus", action: "otsustab nõusoleku andmise pärast nõuetekohaste dokumentide esitamist" },
      { role: "Ametiasutus", action: "edastab korralduse nõusoleku kohta PPA-le ja teistele järelevalveorganitele" }
    ]
  },
  {
    id: "rakvere-vald",
    kov: "Rakvere vald",
    maakond: "Lääne-Viru maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded Rakvere vallas",
    url: "https://www.riigiteataja.ee/akt/406072023070?leiaKehtiv",
    revisionDate: "09.07.2023",
    deadlineDays: "14-30 päeva",
    processingDays: "15 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab avalduse ja kooskõlastused] --> B{Kas on kõrgendatud turvarisk?}:::decision
    B -- Jah --> C[PPA/PA: turvaplaani kooskõlastamine]:::external
    B -- Ei --> D[Vallasekretär: koostab eelnõu]
    C --> D
    D --> E{Vallavalitsus: otsustab loa andmise}:::decision
    E -- Jah --> F[Vallavalitsus: väljastab loa]
    E -- Ei --> G[Korraldaja: teavitus keeldumisest]
    F --> H[Valla veeb: avalikustamine]`,
    steps: [
      { role: "Korraldaja", action: "esitab vormikohase avalduse koos kinnistu omaniku kooskõlastusega (14 või 30 päeva varem)" },
      { role: "PPA/PA", action: "kooskõlastavad vajadusel kõrgendatud turvariskiga ürituse turvaplaani" },
      { role: "Vallasekretär", action: "valmistab ette vallavalitsuse korralduse eelnõu" },
      { role: "Vallavalitsus", action: "annab loa 15 tööpäeva jooksul või jätab loa andmata" },
      { role: "Vallavalitsus", action: "avalikustab info loa andmise kohta valla veebilehel" }
    ]
  },
  {
    id: "rapla",
    kov: "Rapla vald",
    maakond: "Rapla maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded Rapla vallas",
    url: "https://www.riigiteataja.ee/akt/403052024007",
    revisionDate: "06.05.2024",
    deadlineDays: "14-30 päeva",
    processingDays: "14 päeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab taotluse] --> B[Menetleja: kontrollib nõuetekohasust 5 tp jooksul]
    B --> C{Kas on puudusi?}:::decision
    C -- Jah --> D[Korraldaja: kõrvaldab puudused]
    D --> B
    C -- Ei --> E{Kas aeg ja koht on vabad ning sobivad?}:::decision
    E -- Ei --> F[Menetleja: ettepanek muutmiseks või keeldumine]
    E -- Jah --> G[Menetleja: väljastab loa haldusaktiga]
    G --> H[Korraldaja: saab loa kätte vähemalt 3 tp enne]`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse (vähemalt 14 või 30 päeva varem)" },
      { role: "Menetleja", action: "kontrollib taotluse nõuetekohasust (5 tööpäeva jooksul)" },
      { role: "Korraldaja", action: "kõrvaldab vajadusel puudused" },
      { role: "Menetleja", action: "kontrollib kogunemiste kattuvust ja sisu sobivust" },
      { role: "Menetleja", action: "otsustab loa andmise (haldusaktiga vähemalt 3 tööpäeva enne üritust)" }
    ]
  },
  {
    id: "ruhnu",
    kov: "Ruhnu vald",
    maakond: "Saare maakond",
    name: "Ruhnu valla avaliku ürituse korraldamise kord",
    url: "https://www.riigiteataja.ee/akt/427062014025",
    revisionDate: "01.07.2014",
    deadlineDays: "14 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab taotluse] --> B[Korraldaja: kooskõlastamine PPA-ga]:::external
    B --> C{Kas on kõrgendatud turvarisk?}:::decision
    C -- Jah --> D[Korraldaja: kooskõlastamine Päästeametiga]:::external
    C -- Ei --> E[Vallavalitsus: vaatab taotluse läbi]
    D --> E
    E --> F{Vallavalitsus: otsustab loa andmise 10 tp jooksul}:::decision
    F -- Jah --> G[Vallavalitsus: väljastab loa korraldusega]
    F -- Ei --> H[Korraldaja: teavitus keeldumisest]
    G --> I[Korraldaja: teavitamine 2 tp jooksul]`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse (vähemalt 14 päeva varem)" },
      { role: "Korraldaja", action: "kooskõlastab taotluse Lääne prefektuuriga (kõrgendatud riski korral ka Päästeametiga)" },
      { role: "Vallavalitsus", action: "vaatab taotluse läbi ja kontrollib puudusi" },
      { role: "Vallavalitsus", action: "otsustab loa andmise (10 tööpäeva jooksul)" },
      { role: "Vallavalitsus", action: "teavitab korraldajat otsusest (2 tööpäeva jooksul)" }
    ]
  },
  {
    id: "rouge",
    kov: "Rõuge vald",
    maakond: "Võru maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/409072021026?leiaKehtiv",
    revisionDate: "12.07.2021",
    deadlineDays: "15 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab taotluse] --> B[Vallavalitsus: vaatab läbi 3 tp jooksul]
    B --> C{Kas on puudusi või lisavajadusi?}:::decision
    C -- Jah --> D[Korraldaja: täiendab taotlust]
    D --> B
    C -- Ei --> E{Vallavalitsus: otsustab loa andmise}:::decision
    E -- Jah --> F[Vallavalitsus: väljastab loa]
    E -- Ei --> G[Korraldaja: teavitus keeldumisest]
    F --> H[PPA: teavitamine loast]:::external`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse (vähemalt 15 tööpäeva varem)" },
      { role: "Vallavalitsus", action: "vaatab taotluse läbi (3 tööpäeva jooksul)" },
      { role: "Korraldaja", action: "kõrvaldab vajadusel puudused või esitab lisakooskõlastusi" },
      { role: "Vallavalitsus", action: "annab ürituse korraldamiseks loa" },
      { role: "Vallavalitsus", action: "edastab loa Politsei- ja Piirivalveametite teadmiseks" }
    ]
  },
  {
    id: "rapina",
    kov: "Räpina vald",
    maakond: "Põlva maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/401092021006",
    revisionDate: "04.09.2021",
    deadlineDays: "7-21 päeva",
    processingDays: "10 päeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: kooskõlastused asutustega]:::external --> B[Korraldaja: esitab taotluse]
    B --> C[Menetleja: kontrollib nõuetekohasust]
    C --> D{Kas on vajalikke täiendusi?}:::decision
    D -- Jah --> E[Korraldaja: kõrvaldab puudused]
    E --> C
    D -- Ei --> F{Vallavalitsus: otsustab loa andmise 7 p varem}:::decision
    F -- Jah --> G[Vallavalitsus: väljastab loa korraldusega]
    F -- Ei --> H[Korraldaja: teavitus keeldumisest]
    G --> I[PPA/PA/TTJA: teavitamine loast]:::external`,
    steps: [
      { role: "Korraldaja", action: "kooskõlastab ürituse asjaomaste asutustega (PPA, PA, Keskkonnaamet, teeomanik jt)" },
      { role: "Korraldaja", action: "esitab loakohustusega ürituse taotluse (vähemalt 21 kalendripäeva varem)" },
      { role: "Menetleja", action: "kontrollib taotlust ja andmete õigsust" },
      { role: "Vallavalitsus", action: "otsustab loa andmise (vähemalt 7 kalendripäeva varem)" },
      { role: "Vallavalitsus", action: "teavitab loa andmisest PPA-d, Päästeametit ja vajadusel TTJA-d" }
    ]
  },
  {
    id: "saarde",
    kov: "Saarde vald",
    maakond: "Pärnu maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded Saarde vallas",
    url: "https://www.riigiteataja.ee/akt/421012025011",
    revisionDate: "24.01.2025",
    deadlineDays: "14 kalendripäeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab taotluse and lisad] --> B[Vallavalitsus: vaatab läbi 14 p jooksul]
    B --> C{Kas taotlus on täielik?}:::decision
    C -- Ei --> D[Korraldaja: kõrvaldab puudused]
    D --> B
    C -- Jah --> E{Vallavalitsus: otsustab loa andmise}:::decision
    E -- Jah --> F[Vallavalitsus: väljastab loa korraldusega]
    E -- Ei --> G[Korraldaja: teavitus keeldumisest]
    F --> H[PPA/PA: vajadusel teavitamine]:::external`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse koos asendiplaani ja vajalike nõusolekutega (vähemalt 14 kalendripäeva varem)" },
      { role: "Vallavalitsus", action: "vaatab taotluse läbi (14 kalendripäeva jooksul)" },
      { role: "Korraldaja", action: "kõrvaldab vajadusel puudused" },
      { role: "Vallavalitsus", action: "otsustab loa andmise ja määrab lisatingimused" },
      { role: "Vallavalitsus", action: "vormistab loa korraldusena" }
    ]
  },
  {
    id: "saaremaa",
    kov: "Saaremaa vald",
    maakond: "Saare maakond",
    name: "Avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/430052025040?leiaKehtiv",
    revisionDate: "02.06.2025",
    deadlineDays: "15-30 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab digitaalse taotluse] --> B[Menetleja: kontrollib dokumente ja kooskõlastusi]
    B --> C{Kas on vajalikud välised kooskõlastused?}:::decision
    C -- Jah --> D[Ametid: PPA/PA/KeA kooskõlastamine]:::external
    C -- Ei --> E[Menetleja: ettepanek istungile]
    D --> E
    E --> F{Vallavalitsus: otsustab loa andmise}:::decision
    F -- Ei --> G[Korraldaja: motiveeritud keeldumine]
    F -- Jah --> H[Osakonnajuhataja: allkirjastab otsuse]
    H --> I[PPA/PA: teavitamine loast]:::external
    H --> J[Korraldaja: saab ürituse loa]`,
    steps: [
      { role: "Korraldaja", action: "esitab digitaalselt allkirjastatud taotluse valla veebilehe kaudu (tavajuhul 15 p, kõrgendatud riskiga 30 p varem)" },
      { role: "Menetleja", action: "kontrollib taotlust ja hangib vajadusel täiendavad kooskõlastused (nt PPA, PA, Keskkonnaamet)" },
      { role: "Menetleja", action: "esitab ettepaneku loa andmiseks vallavalitsuse istungile" },
      { role: "Vallavalitsus", action: "otsustab loa andmise istungi protokolli märgitava otsusega 7 tööpäeva jooksul" },
      { role: "Osakonnajuhataja", action: "allkirjastab loa andmise otsuse" },
      { role: "Menetleja", action: "teavitab loa andmist PPA-d, Päästeametit ja teisi kooskõlastajaid" }
    ]
  },
  {
    id: "saku",
    kov: "Saku vald",
    maakond: "Harju maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/425042025030?leiaKehtiv",
    revisionDate: "28.04.2025",
    deadlineDays: "14 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab taotluse ja lisad] --> B[Menetleja: vaatab läbi ja määrab vajadused]
    B --> C{Kas on vajalikud lisakooskõlastused?}:::decision
    C -- Jah --> D[Ametid: PPA/PA/TTJA kooskõlastus]:::external
    C -- Ei --> E[Menetleja: valmistab ette korralduse]
    D --> E
    E --> F{Vallavalitsus: otsustab loa andmise}:::decision
    F -- Ei --> G[Menetleja: teavitus keeldumisest 3 tp jooksul]
    F -- Jah --> H[Vallavalitsus: väljastab loa korraldusega]
    H --> I[Korraldaja: saab ürituse loa]`,
    steps: [
      { role: "Korraldaja", action: "esitab vormikohase allkirjastatud taotluse koos lisadokumentidega (vähemalt 14 päeva varem)" },
      { role: "Menetleja", action: "vaatab taotluse läbi ja otsustab täiendavate dokumentide või kooskõlastuste (PPA, PA, TTJA) vajaduse" },
      { role: "Vallavalitsus", action: "annab loa korraldusega 10 tööpäeva jooksul" },
      { role: "Menetleja", action: "teavitab korraldajat otsusest kirjalikult hiljemalt 3 tööpäeva jooksul" }
    ]
  },
  {
    id: "saue",
    kov: "Saue vald",
    maakond: "Harju maakond",
    name: "Korrakaitseseaduse rakendamine Saue vallas",
    url: "https://www.riigiteataja.ee/akt/408052018009",
    revisionDate: "11.05.2018",
    deadlineDays: "14 kalendripäeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: hangib eelnevad kooskõlastused]:::external --> B[Korraldaja: esitab taotluse]
    B --> C[Menetleja: kontrollib nõuetele vastavust]
    C --> D{Kas taotlus on nõuetekohane?}:::decision
    D -- Ei --> E[Korraldaja: kõrvaldab puudused]
    E --> C
    D -- Jah --> F{Vallavalitsus: otsustab loa andmise}:::decision
    F -- Ei --> G[Korraldaja: motiveeritud keeldumine]
    F -- Jah --> H[Vallavalitsus: väljastab loa korraldusega]
    H --> I[PPA/TTJA: teavitamine loast]:::external
    H --> J[Vald: avalikustamine veebilehel]`,
    steps: [
      { role: "Korraldaja", action: "kooskõlastab loa taotluse enne esitamist seaduses sätestatud juhtudel asutuste ja omanikuga" },
      { role: "Korraldaja", action: "esitab allkirjastatud taotluse vallavalitsusele (vähemalt 14 kalendripäeva varem)" },
      { role: "Menetleja", action: "vaatab taotluse läbi ja kontrollib dokumentide vastavust nõuetele" },
      { role: "Vallavalitsus", action: "annab nõusoleku (loa) oma korraldusega 10 tööpäeva jooksul" },
      { role: "Menetleja", action: "avalikustab loa andmed valla veebilehel ja teavitab viivitamatult PPA-d ning vajadusel TTJA-d" }
    ]
  },
  {
    id: "setomaa",
    kov: "Setomaa vald",
    maakond: "Võru maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/413062018007",
    revisionDate: "16.06.2018",
    deadlineDays: "14 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab loa taotluse ja lisad] --> B[Menetleja: vaatab läbi ja kontrollib puudusi]
    B --> C{Kas on vajalikud lisakooskõlastused?}:::decision
    C -- Jah --> D[Ametid: kooskõlastamine]:::external
    C -- Ei --> E[Menetleja: valmistab ette korralduse]
    D --> E
    E --> F{Vallavalitsus: otsustab loa andmise}:::decision
    F -- Ei --> G[Korraldaja: teavitus keeldumisest 10 tp jooksul]
    F -- Jah --> H[Vallavalitsus: väljastab loa korraldusega]
    H --> I[PPA: teavitamine üritusest]:::external`,
    steps: [
       { role: "Korraldaja", action: "esitab vallavalitsusele vormikohase taotluse (vähemalt 14 tööpäeva varem)" },
       { role: "Menetleja", action: "vaatab taotluse läbi ja määrab vajadusel tähtaja puuduste kõrvaldamiseks või lisakooskõlastuste hankimiseks" },
       { role: "Vallavalitsus", action: "annab ürituse läbiviimiseks loa oma korraldusega 10 tööpäeva jooksul" },
       { role: "Menetleja", action: "teavitab ürituse toimumisest PPA kohalikku prefektuuri" }
     ]
  },
  {
    id: "sillamae",
    kov: "Sillamäe linn",
    maakond: "Ida-Viru maakond",
    name: "Sillamäe linna haldusterritooriumil ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/413072023010?leiaKehtiv",
    revisionDate: "16.07.2023",
    deadlineDays: "14-40 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab teate osakonnale] --> B[Osakond: kontrollib nõuetekohasust]
    B --> C[Osakond: eelnõu sisekooskõlastamine]
    C --> D{Linnavalitsus: otsustab kooskõlastamise}:::decision
    D -- Ei --> E[Korraldaja: teavitus kooskõlastamata jätmisest]
    D -- Jah --> F[Linnavalitsus: kooskõlastab ürituse]
    F --> G[PPA/PA/Kiirabi: teavitamine]:::external
    F --> H[Linn: avalikustamine veebilehel]`,
    steps: [
      { role: "Korraldaja", action: "esitab vormikohase teate haridus- ja kultuuriosakonnale (sõltuvalt tüübist 14, 30 või 40 päeva varem)" },
      { role: "Osakond", action: "registreerib teate ja kontrollib andmete nõuetekohasust" },
      { role: "Osakond", action: "valmistab ette linnavalitsuse korralduse eelnõu ja kooskõlastab selle asjaomaste osakondadega (linnamajandus, arenguosakond jt)" },
      { role: "Linnavalitsus", action: "kooskõlastab ürituse pidamise (või jätab kooskõlastamata)" },
      { role: "Linnavalitsus", action: "teavitab kooskõlastatud üritusest viivitamatult PPA-d, kiirabi, Päästeametit ning avalikustab teabe linna veebilehel" }
    ]
  },
  {
    id: "tallinna",
    kov: "Tallinna linn",
    maakond: "Harju maakond",
    name: "Tallinna linnas avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/418032023020?leiaKehtiv",
    revisionDate: "21.03.2023",
    deadlineDays: "10-30 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
  classDef default font-family:Inter,sans-serif,font-size:12px
  classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
  classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
  A[Korraldaja: esitab taotluse AKIS-es] --> B[Linnakantselei: kontrollib dokumente]
  B --> C{Kas on puudusi?}:::decision
  C -- Jah --> D[Korraldaja: kõrvaldab puudused]
  D --> B
  C -- Ei --> E[Ametid/PPA/PA: kooskõlastamine]:::external
  E --> F{Linnakantselei: otsustab loa andmise}:::decision
  F -- Ei --> G[Korraldaja: teavitamine keeldumisest]
  F -- Jah --> H[Linnakantselei: väljastab loa]
  H --> I[PPA: teavitamine loast]:::external
  H --> J[Linn: info avaldamine veebis]`,
    steps: [
      { role: "Korraldaja", action: "esitab loa taotluse AKIS infosüsteemi kaudu või linnakantseleisse (hiljemalt 10-30 tööpäeva varem)" },
      { role: "Linnakantselei", action: "registreerib taotluse ja kontrollib dokumentide nõuetekohasust" },
      { role: "Linnakantselei", action: "edastab taotluse elektroonilisele kooskõlastusringile (linnaosa valitsus, PPA, Päästeamet)" },
      { role: "Kooskõlastajad", action: "vaatavad taotluse läbi ja määravad vajadusel lisatingimused" },
      { role: "Linnakantselei/Linnavalitsus", action: "otsustab loa andmise või sellest keeldumise (10-30 tööpäeva jooksul)" },
      { role: "Linnakantselei", action: "teavitab taotlejat ja PPA-d ning avalikustab info Tallinna veebilehel" }
    ]
  },
  {
    id: "tapa",
    kov: "Tapa vald",
    maakond: "Lääne-Viru maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/429032019065",
    revisionDate: "01.04.2019",
    deadlineDays: "15-30 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab digitaalse taotluse] --> B[Ametnik: kontrollib nõuetekohasust]
    B --> C{Kas on kõrgendatud risk?}:::decision
    C -- Jah --> D[PPA/PA: kooskõlastamine]:::external
    D --> E[Otsustaja: menetleb taotlust]
    C -- Ei --> E
    E --> F{Otsustaja: otsustab loa andmise}:::decision
    F -- Ei --> G[Korraldaja: teavitamine keeldumisest]
    F -- Jah --> H[KOV: väljastab loa/korralduse]
    H --> I[PPA/PA/TTJA: teavitamine loast]:::external`,
    steps: [
      { role: "Korraldaja", action: "kooskõlastab vajadusel taotluse Muinsuskaitseameti või kaitseala valitsejaga" },
      { role: "Korraldaja", action: "esitab vormikohase taotluse digitaalselt allkirjastatuna (hiljemalt 15-30 päeva varem)" },
      { role: "Ametnik", action: "vaatab taotluse läbi (5 tööpäeva jooksul) ja nõuab vajadusel puuduste kõrvaldamist" },
      { role: "Vallavalitsus/Ametnik", action: "edastab kõrgendatud riskiga ürituse korral taotluse kooskõlastamiseks PPA-le ja Päästeametile" },
      { role: "Vallavalitsus", action: "annab loa korraldusega (teatud juhtudel) või Ametnik: annab loa otsusega" },
      { role: "Ametnik", action: "teavitab korraldajat ja ametkondi ning avaldab andmed valla sündmuste kalendris" }
    ]
  },
  {
    id: "tartu-linn",
    kov: "Tartu linn",
    maakond: "Tartu maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/409072022044?leiaKehtiv",
    revisionDate: "12.07.2022",
    deadlineDays: "15-60 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab teate osakonnale] --> B[Osakond: kontrollib andmeid]
    B --> C[Asjaomased isikud: kooskõlastamine]:::external
    C --> D{Kas kooskõlastus on antud?}:::decision
    D -- Ei --> E[Loa andja: keeldub loa andmisest]
    D -- Jah --> F[Loa andja: väljastab loa otsusega]
    F --> G[Korraldaja/Kooskõlastajad: teavitamine]`,
    steps: [
      { role: "Korraldaja", action: "esitab avaliku ürituse teate kultuuriosakonnale (hiljemalt 15-60 päeva varem)" },
      { role: "Kultuuriosakond", action: "korraldab teate kooskõlastamise asjaomaste pädevate isikutega" },
      { role: "Kooskõlastajad", action: "annavad kooskõlastuse või nõuavad täiendavaid selgitusi/dokumente" },
      { role: "Loa andja (spetsialist)", action: "vaatab teate läbi ja otsustab loa andmise või sellest keeldumise" },
      { role: "Loa andja", action: "vormistab loa otsusega ja määrab vajadusel märkused/tingimused" },
      { role: "Kultuuriosakond", action: "teavitab korraldajat ja kooskõlastajaid tehtud otsusest" }
    ]
  },
  {
    id: "tartu-vald",
    kov: "Tartu vald",
    maakond: "Tartu maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/424052023010",
    revisionDate: "27.05.2023",
    deadlineDays: "30 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab taotluse SPOKU-s] --> B[Menetleja: vaatab läbi ja kontrollib lisasid]
    B --> C{Kas on kõrgendatud risk?}:::decision
    C -- Jah --> D[PPA/PA/TTJA: kooskõlastamine/teavitus]:::external
    D --> E[Vallavalitsus: koostab korralduse]
    C -- Ei --> E
    E --> F{Vallavalitsus: otsustab loa andmise}:::decision
    F -- Ei --> G[Korraldaja: teavitus keeldumisest]
    F -- Jah --> H[Vallavalitsus: väljastab korralduse]
    H --> I[PPA/Ametid: viivitamatu teavitamine]:::external`,
    steps: [
      { role: "Korraldaja", action: "kooskõlastab ürituse kinnistu omanikuga ja vajadusel Keskkonnaametiga" },
      { role: "Korraldaja", action: "esitab taotluse SPOKU keskkonnas (vähemalt 30 päeva varem, väikeüritusel 14 päeva)" },
      { role: "Menetleja", action: "vaatab taotluse läbi ja määras vajadusel puuduste kõrvaldamise tähtaja" },
      { role: "Menetleja", action: "edastab kõrgendatud riskiga ürituse taotluse PPA-le, Päästeametile või TTJA-le" },
      { role: "Vallavalitsus", action: "annab ürituse läbiviimiseks loa oma korraldusega" },
      { role: "Menetleja", action: "teavitab korraldajat ja ametiasutusi otsusest 2 tööpäeva jooksul" }
    ]
  },
  {
    id: "toila",
    kov: "Toila vald",
    maakond: "Ida-Viru maakond",
    name: "Avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/403052022002",
    revisionDate: "06.05.2022",
    deadlineDays: "30 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab taotluse ja kooskõlastused]:::external --> B[Ametnik: kontrollib nõuetekohasust]
    B --> C{Kas on puudusi?}:::decision
    C -- Jah --> D[Korraldaja: kõrvaldab puudused]
    D --> B
    C -- Ei --> E[Vallavalitsus: menetleb taotlust]
    E --> F{Vallavalitsus: otsustab loa andmise}:::decision
    F -- Ei --> G[Korraldaja: teavitamine keeldumisest]
    F -- Jah --> H[Ametnik: väljastab loa]
    H --> I[PPA/PA/TTJA: teavitamine loast]:::external`,
    steps: [
      { role: "Korraldaja", action: "kooskõlastab taotluse asutustega (nt Transpordiamet, omanik, PPA/PA)" },
      { role: "Korraldaja", action: "esitab allkirjastatud loataotluse vallavalitsusele (vähemalt 30 tööpäeva varem)" },
      { role: "Ametnik", action: "vaatab taotluse läbi ja nõuab vajadusel lisateavet või puuduste kõrvaldamist" },
      { role: "Ametnik", action: "esitab nõuetekohase taotluse vallavalitsusele otsustamiseks" },
      { role: "Vallavalitsus", action: "annab loa (10 tööpäeva jooksul) või keeldub sellest" },
      { role: "Ametnik", action: "teavitab korraldajat ja PPA-d järgmisel tööpäeval pärast otsuse tegemist" }
    ]
  },
  {
    id: "tori",
    kov: "Tori vald",
    maakond: "Pärnu maakond",
    name: "Avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/403042024017?leiaKehtiv",
    revisionDate: "06.04.2024",
    deadlineDays: "14 kalendripäeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab taotluse ja lisad] --> B[Vallavalitsus: vaatab läbi 10 p jooksul]
    B --> C{Kas taotlus on nõuetekohane?}:::decision
    C -- Ei --> D[Korraldaja: kõrvaldab puudused]
    D --> B
    C -- Jah --> E{Vallavalitsus: otsustab loa andmise}:::decision
    E -- Ei --> F[Korraldaja: teavitamine keeldumisest]
    E -- Jah --> G[Vallavalitsus: väljastab loa]
    G --> H[PPA/Ametid: teavitamine loast]:::external`,
    steps: [
      { role: "Korraldaja", action: "esitab allkirjastatud loataotluse koos lisadokumentidega (hiljemalt 14 kalendripäeva varem)" },
      { role: "Vallavalitsus", action: "vaatab taotluse ja lisad läbi 10 kalendripäeva jooksul" },
      { role: "Vallavalitsus", action: "määras vajadusel tähtaja puuduste kõrvaldamiseks või lisakooskõlastuste hankimiseks" },
      { role: "Korraldaja", action: "esitab liikluse ümberkorraldamisel tee omaniku ja PPA-ga kooskõlastatud liiklusskeemi" },
      { role: "Vallavalitsus", action: "väljastab korraldajale loa (kui kõik nõuded on täidetud) ja määrab vajadusel lisatingimused" },
      { role: "Vallavalitsus", action: "teavitab loa väljastamisest PPA-d ja teisi pädevaid asutusi" }
    ]
  },
  {
    id: "torva",
    kov: "Tõrva vald",
    maakond: "Valga maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/425092020019",
    revisionDate: "01.10.2020",
    deadlineDays: "10 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab teate 10p varem] --> B[Menetleja: kontrollib dokumente]
    B --> C{Kas on puudusi?}:::decision
    C -- Jah --> D[Korraldaja: kõrvaldab puudused]
    D --> B
    C -- Ei --> E[Vallavalitsus: kooskõlastamine pädevate isikutega]:::external
    E --> F{Vallavalitsus: otsustab loa andmise}:::decision
    F -- Ei --> G[Korraldaja: teavitamine keeldumisest]
    F -- Jah --> H[Vallavalitsus: väljastab korralduse]
    H --> I[PPA/PA/Kiirabi: teavitamine loast]:::external`,
    steps: [
      { role: "Korraldaja", action: "esitab vallavalitsusele avaliku ürituse teate (vähemalt 10 päeva varem)" },
      { role: "Menetleja", action: "vaatab teate ja lisadokumendid läbi ning määrab vajadusel puuduste kõrvaldamise tähtaja" },
      { role: "Vallavalitsus", action: "korraldab teate kooskõlastamise pädevate isikutega" },
      { role: "Vallavalitsus", action: "otsustab loa andmise ja vormistab selle korraldusena" },
      { role: "Loa andja", action: "teavitab viivitamatult loa andmisest PPA prefektuuri, kiirabi ja Päästeametit" }
    ]
  },
  {
    id: "tyri",
    kov: "Türi vald",
    maakond: "Järva maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded Türi vallas",
    url: "https://www.riigiteataja.ee/akt/403052018076",
    revisionDate: "06.05.2018",
    deadlineDays: "3-7 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab teatise] --> B[Menetleja: kontrollib nõudeid]
    B --> C{Kas on vajalik lisakooskõlastus?}:::decision
    C -- Jah --> D[Menetleja: teavitus kooskõlastamise vajadusest]:::external
    C -- Ei --> E[Menetleja: kinnitab vastuväidete puudumise]
    D --> E
    E --> F[Menetleja: teavitab PPA-d 2p varem]:::external
    F --> G[Vald: lisamine kalendrisse]`,
    steps: [
      { role: "Korraldaja", action: "esitab Türi Vallavalitsusele teatise ürituse korraldamisest (3–7 päeva varem)" },
      { role: "Menetleja", action: "kontrollib teatise nõuetekohasust ja registreerib selle dokumendiregistris" },
      { role: "Menetleja", action: "annab teatise esitajale teada vastuväidete puudumisest või teatab lisakooskõlastuse vajadusest" },
      { role: "Menetleja", action: "teavitab vähemalt 2 päeva enne üritust Politsei- ja Piirivalveameti prefektuuri" },
      { role: "Menetleja", action: "kannab ürituse valla veebilehel avaldatud sündmuste kalendrisse" }
    ]
  },
  {
    id: "valga",
    kov: "Valga vald",
    maakond: "Valga maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/409052025006?leiaKehtiv",
    revisionDate: "12.05.2025",
    deadlineDays: "30 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: hankib vajadusel kooskõlastused]:::external --> B[Korraldaja: esitab taotluse 30 tp varem]
    B --> C[Menetleja: kontrollib dokumente]
    C --> D{Kas on puudusi?}:::decision
    D -- Jah --> E[Korraldaja: kõrvaldab puudused]
    E --> C
    D -- Ei --> F{Menetleja: otsustab loa andmise}:::decision
    F -- Ei --> G[Korraldaja: teavitamine keeldumisest]
    F -- Jah --> H[Menetleja: väljastab loa]
    H --> I[PPA: teavitamine loast]:::external`,
    steps: [
      { role: "Korraldaja", action: "kooskõlastab ürituse vajadusel PPA, Päästeameti ja teiste asutustega" },
      { role: "Korraldaja", action: "esitab vallavalitsusele taotluse (vähemalt 30 tööpäeva varem)" },
      { role: "Menetleja", action: "menetleb taotlust ja määrab vajadusel tähtaja puuduste kõrvaldamiseks" },
      { role: "Menetleja", action: "väljastab loa või keeldub sellest (10 tööpäeva jooksul)" },
      { role: "Vallavalitsus", action: "teavitab kirjalikult PPA-d loa andmisest või sellest keeldumisest" }
    ]
  },
  {
    id: "viimsi",
    kov: "Viimsi vald",
    maakond: "Harju maakond",
    name: "Viimsi vallas avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/420062020029?leiaKehtiv",
    revisionDate: "23.06.2020",
    deadlineDays: "14 päeva",
    processingDays: "10 päeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab taotluse osakonnale] --> B[Osakond: vaatab läbi ja määrab tähtaja]
    B --> C{Kas on puudusi?}:::decision
    C -- Jah --> D[Korraldaja: kõrvaldab puudused]
    D --> B
    C -- Ei --> E{Osakond: otsustab loa andmise}:::decision
    E -- Ei --> F[Osakond: teavitus keeldumisest]
    E -- Jah --> G[Osakond: väljastab loa]
    G --> H[PPA: teavitamine ja järelevalve]:::external`,
    steps: [
      { role: "Korraldaja", action: "esitab järelevalveosakonnale vormikohase taotluse (vähemalt 14 päeva varem)" },
      { role: "Osakond", action: "vaatab taotluse läbi ja määrab puuduste korral tähtaja nende kõrvaldamiseks" },
      { role: "Osakond", action: "otsustab loa andmise või keeldumise 10 päeva jooksul" },
      { role: "Osakond", action: "väljastab loa ja määrab vajadusel lisatingimused" },
      { role: "Ametnik", action: "teavitab Politsei- ja Piirivalveametit üritusest vastavalt oma pädevusele" }
    ]
  },
  {
    id: "viljandi-linn",
    kov: "Viljandi linn",
    maakond: "Viljandi maakond",
    name: "Viljandi linna avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/406022024009?leiaKehtiv",
    revisionDate: "09.02.2024",
    deadlineDays: "10 päeva",
    processingDays: "5 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab taotluse ja lisad] --> B[Menetleja: kooskõlastamine asutustega]:::external
    B --> C[Menetleja: vaatab läbi ja kontrollib]
    C --> D{Kas üritus on öisel ajal?}:::decision
    D -- Jah --> E[Linnavalitsus: annab loa korraldusega]
    D -- Ei --> F[Menetleja: väljastab loa]
    E --> G[Korraldaja: teavitus otsusest]
    F --> G`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse koos kõigi dokumentidega (hiljemalt 10 päeva varem)" },
      { role: "Menetleja", action: "kooskõlastab taotluse PPA, Päästeameti, PTA ja teiste asjaomaste asutustega" },
      { role: "Menetleja", action: "kontrollib nõuetekohasust ja määrab puuduste kõrvaldamise tähtaja" },
      { role: "Menetleja", action: "otsustab loa andmise 5 tööpäeva jooksul" },
      { role: "Linnavalitsus", action: "annab loa korraldusega, kui üritus toimub öisel ajal" },
      { role: "Menetleja", action: "teavitab korraldajat ja kooskõlastajaid loa andmisest või keeldumisest" }
    ]
  },
  {
    id: "viljandi-vald",
    kov: "Viljandi vald",
    maakond: "Viljandi maakond",
    name: "Avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/403072021037",
    revisionDate: "06.07.2021",
    deadlineDays: "15 päeva",
    processingDays: "14 päeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab taotluse ja kooskõlastused]:::external --> B[Ametnik: vaatab läbi ja kontrollib]
    B --> C{Kas on puudusi?}:::decision
    C -- Jah --> D[Korraldaja: kõrvaldab puudused]
    D --> B
    C -- Ei --> E{Ametnik: otsustab loa andmise}:::decision
    E -- Ei --> F[Ametnik: teavitus keeldumisest]
    E -- Jah --> G[Ametnik: väljastab loa]
    G --> H[PPA: teavitamine üritusest]:::external`,
    steps: [
      { role: "Korraldaja", action: "esitab ametiasutusele allkirjastatud taotluse koos dokumentide ja kooskõlastustega (vähemalt 15 päeva varem)" },
      { role: "Ametnik", action: "vaatab taotluse läbi ja määrab vajadusel tähtaja puuduste kõrvaldamiseks" },
      { role: "Ametnik", action: "annab loa 14 päeva jooksul või keeldub sellest" },
      { role: "Ametnik", action: "teavitab asukohajärgset prefektuuri tema haldusterritooriumil peetavast avalikust üritusest" }
    ]
  },
  {
    id: "vinni",
    kov: "Vinni vald",
    maakond: "Lääne-Viru maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/408062018027",
    revisionDate: "11.06.2018",
    deadlineDays: "5 päeva",
    processingDays: "3 päeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab teate 5p varem] --> B[Menetleja: vaatab läbi ja kontrollib]
    B --> C{Kas teade vastab nõuetele?}:::decision
    C -- Ei --> D[Korraldaja: parandab puudused]
    D --> B
    C -- Jah --> E[Menetleja: registreerib dokumendiregistris]
    E --> F[PPA: viivitamatu teavitamine]:::external
    F --> G[Vald: lisamine kalendrisse]`,
    steps: [
      { role: "Korraldaja", action: "esitab vallavalitsusele teate koos vajalike dokumentidega (vähemalt 5 päeva varem)" },
      { role: "Menetleja", action: "kontrollib teate nõuetekohasust ja määrab vajadusel puuduste kõrvaldamise tähtaja" },
      { role: "Menetleja", action: "registreerib nõuetekohaselt esitatud teate vallavalitsuse dokumendiregistris" },
      { role: "Menetleja", action: "teavitab viivitamatult PPA Ida prefektuuri ürituse toimumisest" },
      { role: "Menetleja", action: "kannab ürituse valla veebilehel avaldatud sündmuste kalendrisse" }
    ]
  },
  {
    id: "viru-nigula",
    kov: "Viru-Nigula vald",
    maakond: "Lääne-Viru maakond",
    name: "Avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/429072025002?leiaKehtiv",
    revisionDate: "01.08.2025",
    deadlineDays: "30 päeva",
    processingDays: "20 päeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab taotluse] --> B[Ametnik: vaatab läbi 5 tp jooksul]
    B --> C{Kas on puudusi?}:::decision
    C -- Jah --> D[Korraldaja: kõrvaldab puudused]
    D --> B
    C -- Ei --> E{Kas on riskikriteeriumid?}:::decision
    E -- Jah --> F[PPA/PA: kooskõlastamine]:::external
    F --> G[Vallavalitsus: menetleb taotlust]
    E -- Ei --> G
    G --> H{Vallavalitsus: otsustab loa andmise}:::decision
    H -- Ei --> I[Korraldaja: teavitamine keeldumisest]
    H -- Jah --> J[Ametnik: väljastab loa]
    J --> K[PPA/PA: teavitamine loast]:::external
    J --> L[Vald: avalikustamine kodulehel]`,
    steps: [
      { role: "Korraldaja", action: "esitab vormikohase ürituse loa taotluse (vähemalt 30 päeva enne üritust)" },
      { role: "Ametnik", action: "vaatab taotluse läbi (5 tööpäeva jooksul) ja määrab vajadusel tähtaja puuduste kõrvaldamiseks" },
      { role: "Ametnik", action: "edastab taotluse kooskõlastamiseks Päästeametile ja/või Politsei- ja Pirivalveametile (kui esinevad riskikriteeriumid)" },
      { role: "Vallavalitsus", action: "otsustab loa andmise (20 päeva jooksul)" },
      { role: "Ametnik", action: "edastab info väljastatud loa kohta PPA-le ja Päästeametile ning avalikustab andmed valla kodulehel" }
    ]
  },
  {
    id: "vormsi",
    kov: "Vormsi vald",
    maakond: "Lääne maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded Vormsi vallas",
    url: "https://www.riigiteataja.ee/akt/422052015002",
    revisionDate: "25.05.2015",
    deadlineDays: "14 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab taotluse] --> B[Ametnik: vaatab taotluse läbi]
    B --> C{Kas on puudusi?}:::decision
    C -- Jah --> D[Korraldaja: täiendab taotlust]
    D --> B
    C -- Ei --> E{Otsustaja?}:::decision
    E -- Istung --> F[Vallavalitsus: otsustab loa andmise]
    E -- Ametnik --> G[Ametnik: otsustab loa andmise]
    F --> H{Otsus?}:::decision
    G --> H
    H -- Ei --> I[Korraldaja: motiveeritud keeldumine]
    H -- Jah --> J[Ametnik: väljastab digiallkirjastatud loa]`,
    steps: [
      { role: "Korraldaja", action: "esitab vormikohase loa taotluse (vähemalt 14 tööpäeva enne üritust)" },
      { role: "Ametnik", action: "vaatab taotluse läbi ja määrab vajadusel tähtaja puuduste kõrvaldamiseks või nõuab lisakooskõlastusi" },
      { role: "Ametnik", action: "võib suunata taotluse otsustamiseks vallavalitsuse istungile" },
      { role: "Vallavalitsus/Ametnik", action: "annab loa või keeldub sellest (10 tööpäeva jooksul)" },
      { role: "Ametnik", action: "väljastab loa digiallkirjastatud kooskõlastusega" }
    ]
  },
  {
    id: "voru-linn",
    kov: "Võru linn",
    maakond: "Võru maakond",
    name: "Ürituse korraldamise kord",
    url: "https://www.riigiteataja.ee/akt/421062014036",
    revisionDate: "01.07.2014",
    deadlineDays: "20 päeva",
    processingDays: "7 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab taotluse] --> B[Korraldaja: kooskõlastus politsei/ametitega]:::external
    B --> C[Korraldaja: teavitus liiklusmuudatustest]:::external
    C --> D[Ametnik: kontrollib vastavust 7 tp jooksul]
    D --> E{Kas vastab nõuetele?}:::decision
    E -- Ei --> F[Ametnik: määra tähtaeg või lõpeta menetlus]
    E -- Jah --> G[Linnavalitsus: koostab korralduse]
    G --> H{Linnavalitsus: otsustab loa andmise}:::decision
    H -- Ei --> I[Korraldaja: teavitus keeldumisest]
    H -- Jah --> J[Linnavalitsus: väljastab loa korraldusega]`,
    steps: [
      { role: "Korraldaja", action: "esitab linnavalitsusele taotluse (vähemalt 20 päeva enne üritust)" },
      { role: "Korraldaja", action: "kooskõlastab ürituse politseiga ja vajadusel teiste ametitega (vähemalt 10 päeva enne)" },
      { role: "Korraldaja", action: "teavitab liiklusmuudatuste korral ühistransporti ja kinnistuomanikke (vähemalt 10 päeva enne)" },
      { role: "Ametnik", action: "kontrollib taotluse vastavust nõuetele (7 tööpäeva jooksul)" },
      { role: "Linnavalitsus", action: "annab ürituse loa korraldusega" }
    ]
  },
  {
    id: "voru-vald",
    kov: "Võru vald",
    maakond: "Võru maakond",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/429062023081?leiaKehtiv",
    revisionDate: "02.07.2023",
    deadlineDays: "30 kalendripäeva",
    processingDays: "15 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab taotluse] --> B[Menetleja: vaatab läbi 5 tp jooksul]
    B --> C{Kas on vaja lisadokumente?}:::decision
    C -- Jah --> D[Menetleja: teavitab vajadusest]:::external
    D --> E[Korraldaja: esitab lisad 10p jooksul]
    E --> F[Menetleja: menetleb dokumente]
    C -- Ei --> F
    F --> G{Menetleja: otsustab loa andmise}:::decision
    G -- Ei --> H[Korraldaja: teavitus keeldumisest]
    G -- Jah --> I[Menetleja: väljastab loa haldusaktina]
    I --> J[Korraldaja: saab loa 10p enne üritust]`,
    steps: [
      { role: "Korraldaja", action: "esitab vallavalitsusele vormikohase taotluse (vähemalt 30 kalendripäeva enne)" },
      { role: "Menetleja", action: "vaatab taotluse läbi ja teavitab korraldajat (5 tööpäeva jooksul) vajalikest lisadokumentidest või kooskõlastustest" },
      { role: "Korraldaja", action: "esitab nõutavad lisadokumendid (10 kalendripäeva jooksul)" },
      { role: "Menetleja", action: "koostab haldusakti (loa) ja edastab selle korraldajale (hiljemalt 10 kalendripäeva enne üritust)" }
    ]
  },
  {
    id: "vaike-maarja",
    kov: "Väike-Maarja vald",
    maakond: "Lääne-Viru maakond",
    name: "Väike-Maarja vallas avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/405042024052?leiaKehtiv",
    revisionDate: "08.04.2024",
    deadlineDays: "10 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `flowchart TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A[Korraldaja: esitab taotluse] --> B[Ametnik: kontrollib taotlust]
    B --> C{Kas on puudusi?}:::decision
    C -- Jah --> D[Ametnik: küsib lisasid/kooskõlastusi]:::external
    D --> B
    C -- Ei --> E[Ametnik: esitab eelnõu istungile]
    E --> F{Vallavalitsus: otsustab loa andmise}:::decision
    F -- Ei --> G[Korraldaja: teavitus keeldumisest]
    F -- Jah --> H[Vallavalitsus: väljastab loa korraldusega]
    H --> I[PPA: viivitamatu teavitamine]:::external
    H --> J[Korraldaja: teavitus e-posti teel]`,
    steps: [
      { role: "Korraldaja", action: "esitab vallavalitsusele loa taotluse (vähemalt 10 tööpäeva enne üritust)" },
      { role: "Ametnik", action: "vaatab taotluse läbi ja nõuab vajadusel täiendavaid dokumente või kooskõlastusi" },
      { role: "Ametnik", action: "valmistab ette ja esitab vallavalitsuse istungile korralduse eelnõu" },
      { role: "Vallavalitsus", action: "otsustab loa andmise korraldusega" },
      { role: "Ametnik", action: "teavitab loa andmisest viivitamatult PPA Ida prefektuuri ja saadab otsuse korraldaja e-posti aadressile" }
    ]
  }
];


