export interface KOVStep {
  role: string;
  action: string;
}

export interface KOVRegulation {
  id: string;
  kov: string;
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
    name: "Avaliku ürituse korraldamise ja pidamise kord Elva vallas",
    url: "https://www.riigiteataja.ee/akt/407102025007",
    revisionDate: "01.01.2026",
    deadlineDays: "10 tööpäeva",
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
    name: "Haljala vallas avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/423042022005",
    revisionDate: "01.05.2022",
    deadlineDays: "21-30 kalendripäeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    Start(["Protsessi algus"]) --> A["Korraldaja esitab taotluse ja lisadokumendid"]
    A --> B["Teenistuja vaatab taotluse läbi"]
    B --> C{"Kas taotluses on puudusi?"}:::decision
    
    C -- Jah --> D["Teenistuja määrab tähtaja puuduste kõrvaldamiseks"]
    D --> E{"Kas korraldaja kõrvaldab puudused?"}:::decision
    E -- Ei --> F["Taotlus jäetakse läbi vaatamata"]
    E -- Jah --> G["Võetakse menetlusse"]
    
    C -- Ei --> G
    
    G --> H{"Vallavalitsuse otsus 10 päeva jooksul"}:::decision
    
    H -- Loa andmisest keeldumine --> I["Motiveeritud keeldumise otsus"]
    H -- Loa andmine --> J["Loa andmine vallavalitsuse korraldusega"]
    
    I --> K["Korraldaja teavitamine"]:::external
    J --> L["Korraldaja ja PPA teavitamine"]:::external
    L --> M["Loa avalikustamine valla veebilehel"]
    
    K --> End(["Protsessi lõpp"])
    M --> End
    F --> End`,
    steps: [
      { role: "korraldaja", action: "esitab vähemalt 21 päeva (liikluse ümberkorraldamisel 30 päeva) enne üritust taotluse koos nõutud lisadokumentidega (sh kinnistu omaniku nõusolek, vajadusel liiklusskeem, turvaplaan ja kooskõlastused)" },
      { role: "teenistuja", action: "vaatab taotluse läbi" },
      { role: "teenistuja", action: "puuduste esinemisel määrab tähtaja nende kõrvaldamiseks" },
      { role: "korraldaja", action: "kõrvaldab puudused määratud tähtaja jooksul" },
      { role: "vallavalitsus", action: "otsustab loa andmise või sellest keeldumise 10 päeva jooksul nõuetekohase taotluse saamisest" },
      { role: "vallavalitsus", action: "teavitab otsusest korraldajat, Politsei- ja Piirivalveametit ning vajadusel teisi osapooli" },
      { role: "vallavalitsus", action: "avalikustab väljastatud loa valla veebilehel" }
    ]
  },
  {
    id: "harku",
    kov: "Harku vald",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded Harku valla haldusterritooriumil",
    url: "https://www.riigiteataja.ee/akt/408042026021?leiaKehtiv",
    revisionDate: "11.04.2026",
    deadlineDays: "14-30 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
  classDef default font-family:Inter,sans-serif,font-size:12px
  classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
  classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

  A[Korraldaja: esitab taotluse ja lisad SPOKU keskkonnas] --> B[KOV: vaatab taotluse läbi]
  B --> C{Kas esineb puudusi?}:::decision
  C -- Jah --> D[KOV: määras tähtaja puuduste kõrvaldamiseks]
  D --> E{Kas puudused kõrvaldatakse?}:::decision
  E -- Ei --> F[KOV: jätab taotluse läbi vaatamata]
  E -- Jah --> G[KOV: võtab taotluse menetlusse]
  C -- Ei --> G
  G --> H[PPA ja Päästeamet: kooskõlastavad taotluse]:::external
  H --> I{Kas luba väljastatakse?}:::decision
  I -- Jah --> J[KOV: vormistab ja väljastab avaliku ürituse loa]
  I -- Ei --> K[KOV: teeb motiveeritud keeldumise otsuse]
  J --> L[KOV: toimetab otsuse korraldajale ja teavitab ameteid]:::external
  K --> L`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse ja lisad SPOKU keskkonnas vähemalt 14 tööpäeva (teatud juhtudel 30 päeva) enne üritust" },
      { role: "KOV", action: "vaatab taotluse läbi ja kontrollib dokumentide nõuetekohasust" },
      { role: "KOV", action: "puuduste ilmnemisel määrab korraldajale tähtaja niiden kõrvaldamiseks" },
      { role: "Korraldaja", action: "kõrvaldab puudused määratud tähtajaks" },
      { role: "KOV", action: "edastab taotluse kooskõlastamiseks Politsei- ja Piirivalveametile ning Päästeametile" },
      { role: "KOV", action: "annab loa või keeldub sellest motiveeritud otsusega 10 tööpäeva jooksul" },
      { role: "KOV", action: "toimetab otsuse korraldajale kätte 2 tööpäeva jooksul ja teavitab kooskõlastanud asutusi" }
    ]
  },
  {
    id: "hiiumaa",
    kov: "Hiiumaa vald",
    name: "Hiiumaa vallas avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/427042024044?leiaKehtiv",
    revisionDate: "30.04.2024",
    deadlineDays: "15 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
  classDef default font-family:Inter,sans-serif,font-size:12px
  classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
  classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

  A[Korraldaja: esitab taotluse ja lisad iseteeninduskeskkonnas] --> B[KOV ametnik: vaatab taotluse läbi]
  B --> C{Kas esineb puudusi?}:::decision
  C -- Jah --> D[KOV ametnik: määrab tähtaja puuduste kõrvaldamiseks]
  D --> E{Kas puudused kõrvaldatakse?}:::decision
  E -- Ei --> F[KOV ametnik: jätab taotluse läbi vaatamata]
  E -- Jah --> G[KOV ametnik: võtab taotluse menetlusse]
  C -- Ei --> G
  G --> H[Välised osapooled: kooskõlastavad taotluse või saavad teavituse]:::external
  H --> I{Kas luba väljastatakse?}:::decision
  I -- Jah --> J[KOV ametnik / Vallavalitsus: vormistab ja väljastab loa]
  I -- Ei --> K[KOV ametnik / Vallavalitsus: teeb motiveeritud keeldumise otsuse]
  J --> L[KOV ametnik: teavitab korraldajat ja asutusi otsusest]:::external
  K --> L`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse ja lisad elektroonselt iseteeninduskeskkonnas vähemalt 15 tööpäeva (teatud kooskõlastuste vajadusel 30 kalendripäeva) enne üritust" },
      { role: "KOV ametnik", action: "vaatab taotluse läbi ja kontrollib dokumentide nõuetekohasust" },
      { role: "KOV ametnik", action: "puuduste ilmnemisel määrab korraldajale tähtaja nende kõrvaldamiseks" },
      { role: "Korraldaja", action: "kõrvaldab puudused määratud tähtajaks" },
      { role: "KOV ametnik", action: "edastab taotluse kooskõlastamiseks või teavitab asjakohaseid asutusi (PPA, Päästeamet, Keskkonnaamet jt)" },
      { role: "KOV ametnik / Vallavalitsus", action: "annab loa või keeldub sellest motiveeritud otsusega" },
      { role: "KOV ametnik", action: "teavitab taotlejat, Politsei- ja Piirivalveametit ning vajadusel teisi ametiasutusi loa andmisest või sellest keeldumisest" }
    ]
  },
  {
    id: "haademeeste",
    kov: "Häädemeeste vald",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded Häädemeeste vallas",
    url: "https://www.riigiteataja.ee/akt/412062019001",
    revisionDate: "15.06.2019",
    deadlineDays: "20-30 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef DP fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef EXT fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A["Korraldaja: Kooskõlastab taotluse politseikonstaabliga"]:::EXT
    B["Korraldaja: Esitab taotluse vallavalitsusele"]
    C["Menetleja: Kontrollib taotluse vastavust ja dokumente"]
    D{"Kas on puudusi?"}:::DP
    E["Menetleja: Määrab tähtaja puuduste kõrvaldamiseks"]
    F["Korraldaja: Kõrvaldab puudused"]
    G{"Kas anda luba?"}:::DP
    H["Vallavalitsus: Väljastab avaliku ürituse loa"]
    I["Vallavalitsus: Esitab motiveeritud keeldumise"]
    J["Vallavalitsus: Teavitab PPA-d ja teisi organeid"]:::EXT

    A --> B
    B --> C
    C --> D
    D -- Jah --> E
    E --> F
    F --> C
    D -- Ei --> G
    G -- Jah --> H
    G -- Ei --> I
    H --> J`,
    steps: [
      { role: "Korraldaja", action: "kooskõlastab taotluse politseikonstaabliga" },
      { role: "Korraldaja", action: "esitab vormikohase loa taotluse vallavalitsusele vähemalt 20 päeva (liikluse ümberkorraldamisel 30 päeva) enne üritust" },
      { role: "Menetleja", action: "vaatab taotluse läbi ja kontrollib selle vastavust nõuetele ning dokumentide olemasolu" },
      { role: "Menetleja", action: "puuduste ilmnemisel määrab tähtaja nende kõrvaldamiseks" },
      { role: "Korraldaja", action: "kõrvaldab puudused määratud tähtaja jooksul" },
      { role: "Vallavalitsus", action: "annab loa 10 tööpäeva jooksul nõuetekohase taotluse laekumisest või esitab motiveeritud keeldumise" },
      { role: "Vallavalitsus", action: "edastab loa korraldajale ning ärakirja Politsei- ja Piirivalveametile ja teistele organitele" }
    ]
  },
  {
    id: "joelahtme",
    kov: "Jõelähtme vald",
    name: "Jõelähtme valla avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/402052014008",
    revisionDate: "01.07.2014",
    deadlineDays: "14 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    classDef default font-family:Inter,sans-serif,font-size:12px
    classDef decision fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef external fill:#eff6ff,stroke:#3b82f6,stroke-width:2px

    A["Korraldaja: Esitab taotluse"] --> B{"Kas on kõrgendatud turvarisk?"}:::decision
    B -- Jah --> C["Korraldaja: Kooskõlastab turvaplaani PPA ja PA-ga"]:::external
    C --> D
    B -- Ei --> D["Vallavalitsus: Vaatab taotluse läbi"]
    D --> E{"Kas on puudusi?"}:::decision
    E -- Jah --> F["Korraldaja: Kõrvaldab puudused"]
    F --> D
    E -- Ei --> G["Vallavalitsus: Teeb otsuse 10 tööpäeva jooksul"]
    G --> H["Vallavalitsus: Teavitab korraldajat 2 tööpäeva jooksul"]`,
    steps: [
      { role: "Korraldaja", action: "esitab vormikohase loa taotluse vähemalt 14 päeva enne üritust" },
      { role: "Korraldaja", action: "lisab kõrgendatud turvariski korral esmase turvaplaani" },
      { role: "Korraldaja", action: "kooskõlastab lõpliku turvaplaani Põhja Päästekeskuse ja Põhja prefektuuriga" },
      { role: "Korraldaja", action: "lisab vajadusel maaomaniku või Harju Maavalitsuse kooskõlastuse" },
      { role: "Vallavalitsus", action: "registreerib taotluse ja kontrollib seda, määrates vajadusel tähtaja puuduste kõrvaldamiseks" },
      { role: "Vallavalitsus", action: "otsustab loa andmise korraldusega 10 tööpäeva jooksul" },
      { role: "Vallavalitsus", action: "teavitab korraldajat otsusest 2 tööpäeva jooksul" }
    ]
  },
  {
    id: "jogeva",
    kov: "Jõgeva vald",
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
    name: "Keila linna avaliku ürituse korraldamise ja pidamise eeskiri",
    url: "https://www.riigiteataja.ee/akt/408052014057",
    revisionDate: "01.07.2014",
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
    name: "Loksa linnas avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/416052015003",
    revisionDate: "19.05.2015",
    deadlineDays: "14 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab teate 14 päeva enne"]
    s1["KOV: vaatab läbi"]
    s2{"KOV: kas üritus vastab nõuetele?"}
    s3["KOV: määrab tähtaja puuduste kõrvaldamiseks"]
    s4(["KOV: teavitab PPA-d"])
    s5{"KOV: kas kooskõlastada?"}
    s6["KOV: keeldub kooskõlastamisest"]
    s7["KOV: annab kooskõlastuse 10 tööpäeva jooksul"]

    s0 --> s1
    s1 --> s2
    s2 --|Ei|--> s3
    s2 --|Jah|--> s5
    s3 --> s1
    s5 --|Ei|--> s6
    s5 --|Jah|--> s7
    s7 --> s4

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab teate 14 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "annab kooskõlastuse 10 tööpäeva jooksul" },
      { role: "KOV", action: "teavitab PPA-d" }
    ]
  },
  {
    id: "luunja",
    kov: "Luunja vald",
    name: "Avaliku ürituse korraldamise kord",
    url: "https://www.riigiteataja.ee/akt/405092023021?leiaKehtiv",
    revisionDate: "01.01.2024",
    deadlineDays: "20 päeva",
    processingDays: "14 päeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 20 päeva enne"]
    s1["KOV: vaatab läbi"]
    s2{"KOV: kas osalejate arv > 300 jm kriteeriumid?"}
    s3(["Korraldaja: esitab eelneva PPA kooskõlastuse"])
    s4["KOV: menetleja määrab puuduste kõrvaldamise tähtaja"]
    s5{"KOV: kas luba anda?"}
    s6["KOV: annab loa 14 päeva jooksul"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s4
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s3 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 20 päeva enne" },
      { role: "Korraldaja", action: "kooskõlastab PPA-ga" },
      { role: "KOV", action: "menetleja vaatab läbi ja määrab puuduste kõrvaldamise tähtaja" },
      { role: "KOV", action: "annab loa 14 päeva jooksul" }
    ]
  },
  {
    id: "laane-harju",
    kov: "Lääne-Harju vald",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/431122024017?leiaKehtiv",
    revisionDate: "03.01.2025",
    deadlineDays: "20-30 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 20-30 päeva enne"]
    s1["KOV: vaatab läbi"]
    s2{"KOV: kas puudusi esineb?"}
    s3["KOV: määrab tähtaja kõrvaldamiseks"]
    s4(["KOV: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: otsustab loa 10 tööpäeva jooksul korraldusega"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 20-30 päeva enne" },
      { role: "KOV", action: "teenistuja vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "otsustab loa andmise 10 tööpäeva jooksul" }
    ]
  },
  {
    id: "laane-nigula",
    kov: "Lääne-Nigula vald",
    name: "Avalike ürituste korraldamise ja pidamise kord Lääne-Nigula vallas",
    url: "https://www.riigiteataja.ee/akt/425112020022?leiaKehtiv",
    revisionDate: "28.11.2020",
    deadlineDays: "14 päeva",
    processingDays: "10 päeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 14 päeva enne"]
    s1["KOV: vaatab läbi"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: määrab tähtaja kõrvaldamiseks"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: väljastab loa haldusaktiga"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 14 päeva enne" },
      { role: "KOV", action: "ametnik vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "väljastab loa haldusaktiga" }
    ]
  },
  {
    id: "laaneranna",
    kov: "Lääneranna vald",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/414052025004?leiaKehtiv",
    revisionDate: "17.05.2025",
    deadlineDays: "20 kalendripäeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 20 kalendripäeva enne"]
    s1["KOV: vaatab läbi"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: määrab tähtaja kõrvaldamiseks"]
    s4(["KOV: teavitab PPA-d ja PäA-d"])
    s5{"KOV: kas luba anda?"}
    s6["KOV/Majandusosakond: annab loa haldusaktina"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s5
    s3 --> s1
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7
    s6 --> s4

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 20 kalendripäeva enne" },
      { role: "KOV", action: "menetleja kontrollib taotlust ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "teavitab PPA-d ja Päästeametit" },
      { role: "KOV/Majandusosakond", action: "annab loa haldusaktina" }
    ]
  },
  {
    id: "luganuse",
    kov: "Lüganuse vald",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/403042025027?leiaKehtiv",
    revisionDate: "06.04.2025",
    deadlineDays: "10 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 10 tööpäeva enne"]
    s1["KOV: vaatab läbi"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: määrab tähtaja kõrvaldamiseks"]
    s4(["KOV: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: annab loa korraldusega 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]
    s8["KOV: teavitab PPA-d ja Päästeametit"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7
    s6 --> s8
    s7 --> s8

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 10 tööpäeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "annab loa korraldusega 10 tööpäeva jooksul" },
      { role: "KOV", action: "teavitab PPA-d ja Päästeametit" }
    ]
  },
  {
    id: "maardu",
    kov: "Maardu linn",
    name: "Avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/428062014071",
    revisionDate: "01.07.2014",
    deadlineDays: "14 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab loataotluse 14 päeva enne"]
    s1["KOV: vaatab läbi"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: määrab tähtaja kõrvaldamiseks"]
    s4(["KOV: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: otsustab loa andmise 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]
    s8["KOV: teavitab PPA-d ja Päästeametit"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7
    s6 --> s8
    s7 --> s8

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab loataotluse 14 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "otsustab loa andmise 10 tööpäeva jooksul" },
      { role: "KOV", action: "teavitab PPA-d ja Päästeametit" }
    ]
  },
  {
    id: "muhu",
    kov: "Muhu vald",
    name: "Avalike ürituste korraldamise kord",
    url: "https://www.riigiteataja.ee/akt/425042023005",
    revisionDate: "28.04.2023",
    deadlineDays: "10 tööpäeva",
    processingDays: "7 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab teatise 10 tööpäeva enne"]
    s1["KOV: vaatab läbi ja kontrollib nõuetekohasust"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: määrab puuduste kõrvaldamise tähtaja"]
    s4(["KOV: teavitab PPA-d ja Päästeametit"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: kinnitab toimumise korraldusega 7 tööpäeva jooksul"]
    s7["KOV: keeldub kinnitamast"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab teatise 10 tööpäeva enne" },
      { role: "KOV", action: "vaatab läbi ning määrab vajadusel puuduste kõrvaldamise tähtaja" },
      { role: "KOV", action: "teavitab PPA-d ja Päästeametit" },
      { role: "KOV", action: "kinnitab toimumise korraldusega 7 tööpäeva jooksul" }
    ]
  },
  {
    id: "mulgi",
    kov: "Mulgi vald",
    name: "Mulgi valla avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/411112020034",
    revisionDate: "14.11.2020",
    deadlineDays: "30 päeva",
    processingDays: "15 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 30 päeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: määrab tähtaja kõrvaldamiseks"]
    s4(["KOV: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: keeldub loa andmisest"]
    s7["KOV/Valitsus: otsustab 15 tööpäeva jooksul"]
    s8["KOV: teavitab PPA-d ja Päästeametit"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Ei|--> s6
    s5 --|Jah|--> s7
    s7 --> s8
    s6 --> s8

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 30 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV/Valitsus", action: "otsustab 15 tööpäeva jooksul" },
      { role: "KOV", action: "teavitab PPA-d ja Päästeametit" }
    ]
  },
  {
    id: "mustvee",
    kov: "Mustvee vald",
    name: "Avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/424092021008?leiaKehtiv",
    revisionDate: "27.09.2021",
    deadlineDays: "7 päeva",
    processingDays: "5 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 7 päeva enne"]
    s1["KOV: vaatab läbi"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: määrab tähtaja kõrvaldamiseks"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: otsustab loa andmise 5 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]
    s8["KOV: teavitab PPA-d ja Päästeametit"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7
    s6 --> s8
    s7 --> s8

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 7 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "otsustab loa andmise 5 tööpäeva jooksul" },
      { role: "KOV", action: "teavitab PPA-d ja Päästeametit" }
    ]
  },
  {
    id: "marjamaa",
    kov: "Märjamaa vald",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/419102018015",
    revisionDate: "22.10.2018",
    deadlineDays: "14 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 14 päeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas puudusi esineb?"}
    s3["KOV: määrab tähtaja puuduste kõrvaldamiseks"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: annab loa 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]
    s8["KOV: teavitab PPA-d ja Päästeametit"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7
    s6 --> s8
    s7 --> s8

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 14 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "annab loa 10 tööpäeva jooksul" },
      { role: "KOV", action: "teavitab PPA-d ja Päästeametit" }
    ]
  },
  {
    id: "narva",
    kov: "Narva linn",
    name: "Narva linnas avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/429052015027",
    revisionDate: "01.06.2015",
    deadlineDays: "20 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 20 tööpäeva enne"]
    s1["KOV: vaatab läbi"]
    s2{"KOV: kas taotlus on täielik?"}
    s3["KOV: määrab puuduste kõrvaldamise tähtaja"]
    s4(["KOV: kooskõlastab PPA-ga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: otsustab loa andmise 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]
    s8["KOV: teavitab PPA-d"]

    s0 --> s1
    s1 --> s2
    s2 --|Ei|--> s3
    s2 --|Jah|--> s4
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7
    s6 --> s8
    s7 --> s8

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 20 tööpäeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "kooskõlastab PPA-ga" },
      { role: "KOV", action: "otsustab loa andmise 10 tööpäeva jooksul" },
      { role: "KOV", action: "teavitab PPA-d" }
    ]
  },
  {
    id: "narva-joesuu",
    kov: "Narva-Jõesuu linn",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded Narva-Jõesuu linnas",
    url: "https://www.riigiteataja.ee/akt/406042022004",
    revisionDate: "09.04.2022",
    deadlineDays: "14 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 14 päeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas puudusi esineb?"}
    s3["Korraldaja: kõrvaldab puudused"]
    s4(["KOV: kooskõlastab PPA-ga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: annab loa korraldusega 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]
    s8["KOV: teavitab PPA-d"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7
    s6 --> s8
    s7 --> s8

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 14 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "kooskõlastab PPA-ga" },
      { role: "KOV", action: "annab loa korraldusega 10 tööpäeva jooksul" },
      { role: "KOV", action: "teavitab PPA-d" }
    ]
  },
  {
    id: "noo",
    kov: "Nõo vald",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded Nõo vallas",
    url: "https://www.riigiteataja.ee/akt/411062015003",
    revisionDate: "14.06.2015",
    deadlineDays: "14 päeva",
    processingDays: "7 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas andmed on vastavad?"}
    s3["KOV: keeldub menetlemisest"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: annab loa 7 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Ei|--> s3
    s2 --|Jah|--> s4
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "annab loa 7 tööpäeva jooksul" }
    ]
  },
  {
    id: "otepaa",
    kov: "Otepää vald",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/427122024008",
    revisionDate: "30.12.2024",
    deadlineDays: "15 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 15 tööpäeva enne"]
    s1["KOV: vaatab läbi"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: määrab tähtaja kõrvaldamiseks"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga (PPA kooskõlastab valla asutusega)"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: väljastab loa 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 15 tööpäeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "väljastab loa 10 tööpäeva jooksul" }
    ]
  },
  {
    id: "paide",
    kov: "Paide linn",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/430062021016?leiaKehtiv",
    revisionDate: "03.07.2021",
    deadlineDays: "15 tööpäeva",
    processingDays: "7 kalendripäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab avalduse 15 tööpäeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: nõuab puuduste kõrvaldamist"]
    s4(["KOV: kooskõlastab partneritega"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: annab loa 7 kalendripäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab avalduse 15 tööpäeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "kooskõlastab partneritega" },
      { role: "KOV", action: "annab loa 7 kalendripäeva jooksul" }
    ]
  },
  {
    id: "peipsiaare",
    kov: "Peipsiääre vald",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/403072024021?leiaKehtiv",
    revisionDate: "06.07.2024",
    deadlineDays: "30 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 30 päeva enne"]
    s1["KOV: vaatab läbi"]
    s2{"KOV: kas puudusi esineb?"}
    s3["KOV: määrab tähtaja kõrvaldamiseks"]
    s4(["KOV: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: annab loa korraldusega 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]
    s8["KOV: teavitab PPA-d ja Päästeametit"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7
    s6 --> s8
    s7 --> s8

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 30 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "annab loa korraldusega 10 tööpäeva jooksul" },
      { role: "KOV", action: "teavitab PPA-d ja Päästeametit" }
    ]
  },
  {
    id: "pohja-parnumaa",
    kov: "Põhja-Pärnumaa vald",
    name: "Avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/407032019006?leiaKehtiv",
    revisionDate: "10.03.2019",
    deadlineDays: "10-30 päeva",
    processingDays: "5 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab teate 10-30 päeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: teavitab puudustest"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: otsustab loa 5 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab teate 10-30 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "otsustab loa 5 tööpäeva jooksul" }
    ]
  },
  {
    id: "pohja-sakala",
    kov: "Põhja-Sakala vald",
    name: "Põhja-Sakala vallas avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/406112018028",
    revisionDate: "09.11.2018",
    deadlineDays: "10 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab teate 10 tööpäeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: määrab tähtaja kõrvaldamiseks"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: annab nõusoleku korraldusega 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab teate 10 tööpäeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "annab nõusoleku korraldusega 10 tööpäeva jooksul" }
    ]
  },
  {
    id: "poltsamaa",
    kov: "Põltsamaa vald",
    name: "Avaliku ürituse korraldamise kord",
    url: "https://www.riigiteataja.ee/akt/427022018004",
    revisionDate: "02.03.2018",
    deadlineDays: "10 tööpäeva",
    processingDays: "5 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 10 tööpäeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas nõuded on täidetud?"}
    s3["KOV: määrab tähtaja puuduste kõrvaldamiseks"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: annab loa 5 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Ei|--> s3
    s2 --|Jah|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 10 tööpäeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "annab loa 5 tööpäeva jooksul" }
    ]
  },
  {
    id: "polva",
    kov: "Põlva vald",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded Põlva vallas",
    url: "https://www.riigiteataja.ee/akt/419092018010?leiaKehtiv",
    revisionDate: "22.09.2018",
    deadlineDays: "7-14 päeva",
    processingDays: "3 päeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab teate/taotluse 7-14 päeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas esineb puudusi?"}
    s3["Korraldaja: kõrvaldab puudused"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: otsustab loa andmise vähemalt 3 päeva enne"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab teate/taotluse 7-14 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "otsustab loa andmise vähemalt 3 päeva enne" }
    ]
  },
  {
    id: "parnu",
    kov: "Pärnu linn",
    name: "Avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/431052019009",
    revisionDate: "03.06.2019",
    deadlineDays: "14-30 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 14-30 päeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas riskid on maandatud?"}
    s3["KOV: nõuab täiendavaid meetmeid või määrab puuduste kõrvaldamise tähtaja"]
    s4(["KOV: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV/Komisjon: otsustab loa andmise 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]
    s8["KOV: teavitab PPA-d ja Päästeametit"]

    s0 --> s1
    s1 --> s2
    s2 --|Ei|--> s3
    s2 --|Jah|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7
    s6 --> s8
    s7 --> s8

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 14-30 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "kooskõlastab PPA ja Päästeametiga (vajadusel)" },
      { role: "KOV/Komisjon", action: "otsustab loa andmise 10 tööpäeva jooksul" },
      { role: "KOV", action: "teavitab PPA-d ja Päästeametit" }
    ]
  },
  {
    id: "raasiku",
    kov: "Raasiku vald",
    name: "Raasiku valla avaliku korra eeskiri",
    url: "https://www.riigiteataja.ee/akt/404092014018",
    revisionDate: "07.09.2014",
    deadlineDays: "14 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse vähemalt 14 päeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas vajab lisaandmeid või kooskõlastusi?"}
    s3["Korraldaja: hangib kooskõlastused (sh PPA ja Päästeamet)"]
    s4["KOV: kontrollib nõuetele vastavust"]
    s5{"KOV: kas luba anda?"}
    s6["KOV: väljastab loa 10 tööpäeva jooksul viimasest kooskõlastusest"]
    s7["KOV: motiveeritud keeldumine"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab vormikohase taotluse vähemalt 14 päeva enne üritust" },
      { role: "KOV", action: "vaatab läbi ning määrab vajadusel puuduste kõrvaldamise tähtaja" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "väljastab loa 10 tööpäeva jooksul viimasest dokumentist/kooskõlastusest" }
    ]
  },
  {
    id: "rae",
    kov: "Rae vald",
    name: "Rae valla avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/429062023054",
    revisionDate: "02.07.2023",
    deadlineDays: "15-20 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 15-20 tööpäeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas taotlus vastab nõuetele?"}
    s3["KOV: määrab tähtaja puuduste kõrvaldamiseks"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: annab loa korraldusega 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Ei|--> s3
    s2 --|Jah|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 15-20 tööpäeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "annab loa korraldusega 10 tööpäeva jooksul" }
    ]
  },
  {
    id: "rakvere-linn",
    kov: "Rakvere linn",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/430092025025?leiaKehtiv",
    revisionDate: "03.10.2025",
    deadlineDays: "15 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab teate 15 tööpäeva enne"]
    s1["KOV: vaatab läbi"]
    s2{"KOV: kas puudusi esineb?"}
    s3["KOV: määrab tähtaja kõrvaldamiseks"]
    s4(["KOV: teavitab PPA-d ja Päästeametit"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: otsustab nõusoleku andmise 10 tööpäeva jooksul"]
    s7["KOV: keeldub nõusolekust"]
    s8["KOV: teavitab partnereid"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s5
    s3 --> s1
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7
    s6 --> s8
    s7 --> s8

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab teate 15 tööpäeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "otsustab nõusoleku andmise 10 tööpäeva jooksul" },
      { role: "KOV", action: "teavitab partnereid" }
    ]
  },
  {
    id: "rakvere-vald",
    kov: "Rakvere vald",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded Rakvere vallas",
    url: "https://www.riigiteataja.ee/akt/406072023070?leiaKehtiv",
    revisionDate: "09.07.2023",
    deadlineDays: "14-30 päeva",
    processingDays: "15 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab avalduse 14-30 päeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas puudusi esineb?"}
    s3["KOV: määrab tähtaja kõrvaldamiseks"]
    s4(["KOV: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: annab loa 15 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]
    s8["KOV: teavitab PPA-d ja Päästeametit"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7
    s6 --> s8
    s7 --> s8

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab avalduse 14-30 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "annab loa 15 tööpäeva jooksul" },
      { role: "KOV", action: "teavitab PPA-d ja Päästeametit" }
    ]
  },
  {
    id: "rapla",
    kov: "Rapla vald",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded Rapla vallas",
    url: "https://www.riigiteataja.ee/akt/403052024007",
    revisionDate: "06.05.2024",
    deadlineDays: "14-30 päeva",
    processingDays: "14 päeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 14-30 päeva enne"]
    s1["KOV: vaatab läbi"]
    s2{"KOV: kas riskid on maandatud?"}
    s3["KOV: nõuab täiendavaid meetmeid või määrab puuduste kõrvaldamise tähtaja"]
    s4(["KOV: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: otsustab loa 14 päeva jooksul"]
    s7["KOV: keeldub loa andmisest"]
    s8["KOV: teavitab PPA-d ja Päästeametit"]

    s0 --> s1
    s1 --> s2
    s2 --|Ei|--> s3
    s2 --|Jah|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7
    s6 --> s8
    s7 --> s8

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 14-30 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "kooskõlastab PPA ja Päästeametiga (vajadusel)" },
      { role: "KOV", action: "otsustab loa 14 päeva jooksul" },
      { role: "KOV", action: "teavitab PPA-d ja Päästeametit" }
    ]
  },
  {
    id: "ruhnu",
    kov: "Ruhnu vald",
    name: "Ruhnu valla avaliku ürituse korraldamise kord",
    url: "https://www.riigiteataja.ee/akt/427062014025",
    revisionDate: "01.07.2014",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 14 päeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas puudusi esineb?"}
    s3["KOV: määrab tähtaja puuduste kõrvaldamiseks"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: otsustab loa 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 14 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "otsustab loa 10 tööpäeva jooksul" }
    ]
  },
  {
    id: "rouge",
    kov: "Rõuge vald",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/409072021026?leiaKehtiv",
    revisionDate: "12.07.2021",
    deadlineDays: "15 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 15 tööpäeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas taotlus on täielik?"}
    s3["KOV: määrab puuduste kõrvaldamise tähtaja"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: annab loa 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Ei|--> s3
    s2 --|Jah|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 15 tööpäeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "annab loa 10 tööpäeva jooksul" }
    ]
  },
  {
    id: "rapina",
    kov: "Räpina vald",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/401092021006",
    revisionDate: "04.09.2021",
    deadlineDays: "7-21 päeva",
    processingDays: "10 päeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab teatise/taotluse 7-21 päeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas puudusi esineb?"}
    s3["KOV: määrab tähtaja kõrvaldamiseks"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: annab loa 10 päeva jooksul"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab teatise/taotluse 7-21 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "annab loa 10 päeva jooksul" }
    ]
  },
  {
    id: "saarde",
    kov: "Saarde vald",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded Saarde vallas",
    url: "https://www.riigiteataja.ee/akt/421012025011",
    revisionDate: "24.01.2025",
    deadlineDays: "14 kalendripäeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 14 kalendripäeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: määrab tähtaja kõrvaldamiseks"]
    s4(["KOV: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: keeldub loa andmisest"]
    s7["KOV: vormistab loa korraldusena 10 tööpäeva jooksul"]
    s8["KOV: teavitab PPA-d ja Päästeametit"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Ei|--> s6
    s5 --|Jah|--> s7
    s7 --> s8
    s6 --> s8

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 14 kalendripäeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "vormistab loa korraldusena 10 tööpäeva jooksul" },
      { role: "KOV", action: "teavitab PPA-d ja Päästeametit" }
    ]
  },
  {
    id: "saaremaa",
    kov: "Saaremaa vald",
    name: "Avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/430052025040?leiaKehtiv",
    revisionDate: "02.06.2025",
    deadlineDays: "15-30 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 15-30 päeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas on vaja täiendavaid kooskõlastusi?"}
    s3(["KOV: kooskõlastab PPA ja Päästeametiga"])
    s4["KOV: menetleb ja kontrollib nõudeid"]
    s5{"KOV: kas luba anda?"}
    s6["KOV: otsustab loa andmise 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]
    s8["KOV: teavitab PPA-d ja Päästeametit"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s4
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7
    s6 --> s8
    s7 --> s8

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s3 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 15-30 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "otsustab loa andmise 10 tööpäeva jooksul" },
      { role: "KOV", action: "teavitab PPA-d ja Päästeametit" }
    ]
  },
  {
    id: "saku",
    kov: "Saku vald",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/425042025030?leiaKehtiv",
    revisionDate: "28.04.2025",
    deadlineDays: "14 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 14 päeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas puudusi esineb?"}
    s3["KOV: määrab tähtaja kõrvaldamiseks"]
    s4(["KOV: kooskõlastab Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: annab loa 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]
    s8["KOV: teavitab PPA-d"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7
    s6 --> s8
    s7 --> s8

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 14 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "kooskõlastab Päästeametiga (vajadusel)" },
      { role: "KOV", action: "annab loa 10 tööpäeva jooksul" },
      { role: "KOV", action: "teavitab PPA-d" }
    ]
  },
  {
    id: "saue",
    kov: "Saue vald",
    name: "Korrakaitseseaduse rakendamine Saue vallas",
    url: "https://www.riigiteataja.ee/akt/408052018009",
    revisionDate: "11.05.2018",
    deadlineDays: "14 kalendripäeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 14 kalendripäeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas on vaja lisakooskõlastusi?"}
    s3["Korraldaja: esitab lisakooskõlastused"]
    s4(["KOV: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: annab loa 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 14 kalendripäeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "annab loa 10 tööpäeva jooksul" }
    ]
  },
  {
    id: "setomaa",
    kov: "Setomaa vald",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/413062018007",
    revisionDate: "16.06.2018",
    deadlineDays: "14 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 14 tööpäeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas puudusi esineb?"}
    s3["KOV: määrab tähtaja kõrvaldamiseks"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: annab loa 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 14 tööpäeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "annab loa 10 tööpäeva jooksul" }
    ]
  },
  {
    id: "sillamae",
    kov: "Sillamäe linn",
    name: "Sillamäe linna haldusterritooriumil ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/413072023010?leiaKehtiv",
    revisionDate: "16.07.2023",
    deadlineDays: "14-40 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab teate 14-40 päeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: teavitab puudustest või määrab tähtaja kõrvaldamiseks"]
    s4(["KOV: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: kooskõlastab ürituse pidamise (loa andmine) 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab teate 14-40 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "kooskõlastab ürituse pidamise (loa andmine) 10 tööpäeva jooksul" }
    ]
  },
  {
    id: "tallinna",
    kov: "Tallinna linn",
    name: "Tallinna linnas avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/418032023020?leiaKehtiv",
    revisionDate: "21.03.2023",
    deadlineDays: "10-30 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 10-30 tööpäeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas on suurüritus (>3000 in)?"}
    s3(["KOV: kooskõlastab PPA, Päästeameti ja MUPO-ga"])
    s4["KOV: menetleb ja kontrollib nõudeid"]
    s5{"KOV: kas luba anda?"}
    s6["KOV/Linnakantselei: otsustab loa andmise 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]
    s8["KOV: teavitab PPA-d ja Päästeametit"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s4
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7
    s6 --> s8
    s7 --> s8

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s3 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 10-30 tööpäeva enne" },
      { role: "KOV", action: "vaatab läbi ja määretakse puuduste kõrvaldamiseks tähtaeg" },
      { role: "KOV", action: "kooskõlastab PPA, Päästeameti ja MUPO-ga" },
      { role: "KOV/Linnakantselei", action: "otsustab loa andmise 10 tööpäeva jooksul" },
      { role: "KOV", action: "teavitab PPA-d ja Päästeametit" }
    ]
  },
  {
    id: "tapa",
    kov: "Tapa vald",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/429032019065",
    revisionDate: "01.04.2019",
    deadlineDays: "15-30 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 15-30 päeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: määrab tähtaja kõrvaldamiseks"]
    s4(["KOV: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: annab loa 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]
    s8["KOV: teavitab PPA-d ja Päästeametit"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7
    s6 --> s8
    s7 --> s8

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 15-30 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "annab loa 10 tööpäeva jooksul" },
      { role: "KOV", action: "teavitab PPA-d ja Päästeametit" }
    ]
  },
  {
    id: "tartu-linn",
    kov: "Tartu linn",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/409072022044?leiaKehtiv",
    revisionDate: "12.07.2022",
    deadlineDays: "15-60 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab teate 15-60 tööpäeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas on vaja liikluspiiranguid?"}
    s3(["KOV: kooskõlastab liikluskorralduse ametiga"])
    s4{"KOV: kas luba anda?"}
    s5["KOV: annab loa otsusega 10 tööpäeva jooksul"]
    s6["KOV: keeldub loa andmisest"]
    s7["KOV: teavitab PPA-d"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s4
    s4 --|Jah|--> s5
    s4 --|Ei|--> s6
    s5 --> s7
    s6 --> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s3 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s4 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab teate 15-60 tööpäeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "kooskõlastab liikluskorralduse ametiga (vajadusel)" },
      { role: "KOV", action: "annab loa otsusega 10 tööpäeva jooksul" },
      { role: "KOV", action: "teavitab PPA-d" }
    ]
  },
  {
    id: "tartu-vald",
    kov: "Tartu vald",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/424052023010",
    revisionDate: "27.05.2023",
    deadlineDays: "30 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 30 päeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: määrab tähtaja kõrvaldamiseks"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: annab loa korraldusega 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 30 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "annab loa korraldusega 10 tööpäeva jooksul" }
    ]
  },
  {
    id: "toila",
    kov: "Toila vald",
    name: "Avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/403052022002",
    revisionDate: "06.05.2022",
    deadlineDays: "30 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 30 tööpäeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: määrab tähtaja kõrvaldamiseks"]
    s4(["KOV: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: annab loa 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]
    s8["KOV: teavitab PPA-d ja Päästeametit"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7
    s6 --> s8
    s7 --> s8

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 30 tööpäeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "annab loa 10 tööpäeva jooksul" },
      { role: "KOV", action: "teavitab PPA-d ja Päästeametit" }
    ]
  },
  {
    id: "tori",
    kov: "Tori vald",
    name: "Avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/403042024017?leiaKehtiv",
    revisionDate: "06.04.2024",
    deadlineDays: "14 kalendripäeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 14 kalendripäeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas puudusi esineb?"}
    s3["KOV: teavitab puudustest"]
    s4(["KOV: kooskõlastab PPA-ga (linnas ja asulates / muidu teavitab) ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: väljastab loa 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 14 kalendripäeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "kooskõlastab PPA (asukohatasand) ja Päästeametiga" },
      { role: "KOV", action: "väljastab loa 10 tööpäeva jooksul" }
    ]
  },
  {
    id: "torva",
    kov: "Tõrva vald",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/425092020019",
    revisionDate: "01.10.2020",
    deadlineDays: "10 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab teate 10 päeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: määrab tähtaja kõrvaldamiseks"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: annab loa korraldusega 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab teate 10 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määräb tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "annab loa korraldusega 10 tööpäeva jooksul" }
    ]
  },
  {
    id: "tyri",
    kov: "Türi vald",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded Türi vallas",
    url: "https://www.riigiteataja.ee/akt/403052018076",
    revisionDate: "06.05.2018",
    deadlineDays: "3-7 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab teatise 3-7 tööpäeva enne"]
    s1["KOV: kontrollib ja vaatab läbi"]
    s2{"KOV: kas on vaja täiendavaid kooskõlastusi?"}
    s3(["KOV: kooskõlastab Päästeametiga"])
    s4["KOV: menetleb ja kontrollib nõudeid"]
    s5{"KOV: kas lubada üritus sündmuste kalendrisse?"}
    s6["KOV: kannab sündmuse kalendrisse 10 tööpäeva jooksul"]
    s7["KOV: keeldub kooskõlastusest"]
    s8["KOV: teavitab PPA-d"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s4
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7
    s6 --> s8
    s7 --> s8

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s3 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab teatise 3-7 tööpäeva enne" },
      { role: "KOV", action: "kontrollib ja vaatab läbi" },
      { role: "KOV", action: "kooskõlastab Päästeametiga (vajadusel)" },
      { role: "KOV", action: "kandmine sündmuste kalendrisse 10 tööpäeva jooksul" },
      { role: "KOV", action: "teavitab PPA-d" }
    ]
  },
  {
    id: "valga",
    kov: "Valga vald",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/409052025006?leiaKehtiv",
    revisionDate: "12.05.2025",
    deadlineDays: "30 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 30 tööpäeva enne"]
    s1["KOV: kontrollib ja vaatab läbi"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: määrab tähtaja kõrvaldamiseks"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: väljastab loa 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 30 tööpäeva enne" },
      { role: "KOV", action: "kontrollib ja vaatab läbi ning määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "väljastab loa 10 tööpäeva jooksul" }
    ]
  },
  {
    id: "viimsi",
    kov: "Viimsi vald",
    name: "Viimsi vallas avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/420062020029?leiaKehtiv",
    revisionDate: "23.06.2020",
    deadlineDays: "14 päeva",
    processingDays: "10 päeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 14 päeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas puudusi esineb?"}
    s3["KOV: määretakse tähtaeg täiendamiseks"]
    s4(["KOV: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: väljastab loa 10 päeva jooksul"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 14 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määretakse puuduste kõrvaldamiseks tähtaeg" },
      { role: "KOV", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "väljastab loa 10 päeva jooksul" }
    ]
  },
  {
    id: "viljandi-linn",
    kov: "Viljandi linn",
    name: "Viljandi linna avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/406022024009?leiaKehtiv",
    revisionDate: "09.02.2024",
    deadlineDays: "10 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 10 päeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: määrab tähtaja kõrvaldamiseks"]
    s4(["KOV: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: väljastab loa 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]
    s8["KOV: teavitab PPA-d ja Päästeametit"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7
    s6 --> s8
    s7 --> s8

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 10 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "väljastab loa 10 tööpäeva jooksul" },
      { role: "KOV", action: "teavitab PPA-d ja Päästeametit" }
    ]
  },
  {
    id: "viljandi-vald",
    kov: "Viljandi vald",
    name: "Avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/403072021037",
    revisionDate: "06.07.2021",
    deadlineDays: "15 päeva",
    processingDays: "14 päeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 15 päeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas andmed on tõesed ja puudusteta?"}
    s3["KOV: keeldub menetlemisest või määrab tähtaja kõrvaldamiseks"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: annab loa 14 päeva jooksul"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Ei|--> s3
    s2 --|Jah|--> s4
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 15 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "annab loa 14 päeva jooksul" }
    ]
  },
  {
    id: "vinni",
    kov: "Vinni vald",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/408062018027",
    revisionDate: "11.06.2018",
    deadlineDays: "5 päeva",
    processingDays: "3 päeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab teate 5 päeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas teade vastab nõuetele?"}
    s3["KOV: keelab ürituse pidamise 3 päeva jooksul"]
    s4(["KOV: teavitab PPA-d ja Päästeametit"])
    s5["KOV: lubab ürituse pidamise (vaikimisi või teavitusega)"]

    s0 --> s1
    s1 --> s2
    s2 --|Ei|--> s3
    s2 --|Jah|--> s4
    s4 --> s5

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab teate 5 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja kontrollib" },
      { role: "KOV", action: "teavitab PPA-d ja Päästeametit" },
      { role: "KOV", action: "lubab ürituse pidamise 3 päeva jooksul" }
    ]
  },
  {
    id: "viru-nigula",
    kov: "Viru-Nigula vald",
    name: "Avaliku ürituse korraldamise ja pidamise kord",
    url: "https://www.riigiteataja.ee/akt/429072025002?leiaKehtiv",
    revisionDate: "01.08.2025",
    deadlineDays: "30 päeva",
    processingDays: "20 päeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 30 päeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: määrab tähtaja kõrvaldamiseks"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: annab loa 20 päeva jooksul"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 30 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "annab loa 20 päeva jooksul" }
    ]
  },
  {
    id: "vormsi",
    kov: "Vormsi vald",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded Vormsi vallas",
    url: "https://www.riigiteataja.ee/akt/422052015002",
    revisionDate: "25.05.2015",
    deadlineDays: "14 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 14 tööpäeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: teavitab puudustest või määrab tähtaja kõrvaldamiseks"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: annab loa 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 14 tööpäeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "annab loa 10 tööpäeva jooksul" }
    ]
  },
  {
    id: "voru-linn",
    kov: "Võru linn",
    name: "Ürituse korraldamise kord",
    url: "https://www.riigiteataja.ee/akt/421062014036",
    revisionDate: "01.07.2014",
    deadlineDays: "20 päeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 20 päeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: teavitab puudustest või määrab tähtaja kõrvaldamiseks"]
    s4(["KOV: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: annab loa korraldusega 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 20 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "annab loa korraldusega 10 tööpäeva jooksul" }
    ]
  },
  {
    id: "voru-vald",
    kov: "Võru vald",
    name: "Avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/429062023081?leiaKehtiv",
    revisionDate: "02.07.2023",
    deadlineDays: "30 kalendripäeva",
    processingDays: "15 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 30 kalendripäeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas on vaja täiendavaid kooskõlastusi?"}
    s3["KOV: teavitab vajalike kooskõlastuste osas"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: koostab haldusakti ja väljastab loa 15 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s4
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 30 kalendripäeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "väljastab loa 15 tööpäeva jooksul" }
    ]
  },
  {
    id: "vaike-maarja",
    kov: "Väike-Maarja vald",
    name: "Väike-Maarja vallas avaliku ürituse korraldamise ja pidamise nõuded",
    url: "https://www.riigiteataja.ee/akt/405042052?leiaKehtiv",
    revisionDate: "08.04.2024",
    deadlineDays: "10 tööpäeva",
    processingDays: "10 tööpäeva",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 10 tööpäeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: määrab tähtaja kõrvaldamiseks"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: annab loa korraldusega 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 10 tööpäeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "annab loa korraldusega 10 tööpäeva jooksul" }
    ]
  }
];
