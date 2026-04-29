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
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse vähemalt 15 tööpäeva enne"]
    s1["KOV: vaatab taotluse ja lisadokumendid läbi"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: määrab tähtaja puuduste kõrvaldamiseks"]
    s4(["KOV-korraldaja: kooskõlastab PPA ja Päästeametiga (kõrgendatud turvariskiga)"])
    s5["KOV: ametnik kooskõlastab valla spetsialistidega 10 tööpäeva jooksul"]
    s6{"KOV: kas luba anda?"}
    s7["KOV: väljastab loa või keeldub motiveeritud otsusega"]
    s8["KOV: teavitab loa andmisest järgmisel tööpäeval"]
    s9["KOV: teavitab keeldumisest 3 tööpäeva jooksul"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --> s6
    s6 --|Ei|--> s7
    s6 --|Jah|--> s7
    s7 --> s8
    s7 --> s9

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s6 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse vähemalt 15 tööpäeva enne" },
      { role: "KOV", action: "ametnik vaatab taotluse ja lisadokumendid läbi" },
      { role: "KOV", action: "Kas esineb puudusi?" },
      { role: "(Jah) KOV", action: "määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV-korraldaja", action: "kooskõlastab PPA ja Päästeametiga (kõrgendatud turvariskiga korral)" },
      { role: "KOV", action: "ametnik kooskõlastab valla spetsialistidega ja määrab tingimused 10 tööpäeva jooksul" },
      { role: "KOV", action: "väljastab loa või keeldub motiveeritud otsusega" },
      { role: "KOV", action: "teavitab loa andmisest järgmisel tööpäeval" },
      { role: "KOV", action: "teavitab keeldumisest 3 tööpäeva jooksul" }
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
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse hiljemalt 15 tööpäeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas puudusi esineb?"}
    s3["KOV: määrab tähtaja puuduste kõrvaldamiseks"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: väljastab loa korraldusena 10 tööpäeva jooksul"]
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
      { role: "Korraldaja", action: "esitab taotluse hiljemalt 15 tööpäeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "annab loa 10 tööpäeva jooksul korraldusena" }
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
    s0["Korraldaja: esitab taotluse vähemalt 10 tööpäeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas puudusi esineb?"}
    s3["KOV: määrab tähtaja kõrvaldamiseks"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: väljastab loa korraldusega 10 päeva jooksul"]
    s7["KOV: keeldub loa andmisest"]
    s8(["KOV: edastab loa teadmiseks PPA-le"])

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7
    s6 --> s8

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse vähemalt 10 tööpäeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "väljastab loa korraldusega 10 päeva jooksul" }
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
    s0["Korraldaja: esitab taotluse 20-30 tööpäeva enne"]
    s1["KOV: vaatab taotluse ja lisadokumendid läbi 10 tööpäeva jooksul"]
    s2{"KOV: kas on vaja lisadokumente?"}
    s3["KOV: määra tähtaja puuduste kõrvaldamiseks"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga (kõrgendatud turvariskiga)"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: väljastab loa korraldusega 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest motiveeritud otsusega"]
    s8["KOV: teavitab PPA-d loa andmisest või keeldumisest"]

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
      { role: "Korraldaja", action: "esitab taotluse hiljemalt 20-30 tööpäeva enne" },
      { role: "KOV", action: "vaatab taotluse ja selle lisadokumendid läbi 10 tööpäeva jooksul" },
      { role: "KOV", action: "Kas on vaja lisadokumente või kooskõlastusi?" },
      { role: "(Jah) KOV", action: "määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga (kõrgendatud turvariskiga korral)" },
      { role: "KOV", action: "otsustab loa andmise 10 tööpäeva jooksul korraldusega" },
      { role: "KOV", action: "teavitab PPA-d ja kooskõlastanud ametkondi" }
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
    mermaid: `graph TD
    s0["Korraldaja: esitab teate vähemalt 10 tööpäeva enne"]
    s1["KOV: kontrollib teadet ja menetleb"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: määrab tähtaja puuduste kõrvaldamiseks"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: väljastab ürituse pidamise loa"]
    s7["KOV: keeldub loa andmisest"]
    s8["KOV: edastab loa andmise teate PPA Lääne Prefektuurile"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7
    s6 --> s8

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab teate vähemalt 10 tööpäeva enne" },
      { role: "KOV", action: "kontrollib teadet ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "väljastab ürituse pidamise loa" },
      { role: "KOV", action: "edastab teate loa andmise kohta PPA Lääne Prefektuurile" }
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
    s0["Korraldaja: esitab taotluse 21-30 päeva enne"]
    s1["KOV: teenistuja vaatab taotluse läbi"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: määrab tähtaja puuduste kõrvaldamiseks"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: väljastab korraldusega loa 10 päeva jooksul"]
    s7["KOV: keeldub loa andmisest"]
    s8["KOV: teavitab PPA-d loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7
    s6 --> s8

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 21-30 päeva enne" },
      { role: "KOV", action: "teenistuja vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga (kõrgendatud turvariskiga korral)" },
      { role: "KOV", action: "otsustab loa andmise 10 päeva jooksul ja teavitab PPA-d" }
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
    s0["Korraldaja: esitab taotluse 14-30 tööpäeva enne"]
    s1["KOV: vaatab läbi"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: määrab tähtaja puuduste kõrvaldamiseks"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: väljastab loa 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]
    s8["KOV: saadab otsuse korraldajale ja PPA-le"]

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
      { role: "Korraldaja", action: "esitab taotluse 14-30 tööpäeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "otsustab loa andmise 10 tööpäeva jooksul ja teavitab PPA-d" }
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
    s0["Korraldaja: esitab taotluse 15-30 päeva enne"]
    s1["KOV: ametnik vaatab läbi"]
    s2{"KOV: kas taotlus on täielik?"}
    s3["KOV: määrab tähtaja puuduste kõrvaldamiseks"]
    s4(["KOV: kooskõlastab PPA ja Päästeametetiga (kõrgendatud turvariskiga)"])
    s5{"KOV: kas luba anda?"}
    s6["KOV/Ametnik: väljastab loa 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]
    s8["KOV: teavitab taotlejat ja PPA-d"]

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
      { role: "Korraldaja", action: "esitab taotluse vähemalt 15 tööpäeva enne (30 päeva kui kooskõlastused)" },
      { role: "KOV", action: "ametnik vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "kooskõlastab PPA ja Päästeametiga (kõrgendatud turvariski korral)" },
      { role: "KOV/Ametnik", action: "väljastab loa või keeldub 10 tööpäeva jooksul" },
      { role: "KOV", action: "teavitab taotlejat ja PPA-d" }
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
    s0["Korraldaja: esitab taotluse 20-30 päeva enne"]
    s1["KOV: teenistuja vaatab läbi"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: määrab tähtaja puuduste kõrvaldamiseks"]
    s4(["Korraldaja: kooskõlastab PPA-ga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: annab loa 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest motiveeritud korraldusega"]
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
      { role: "Korraldaja", action: "esitab taotluse 20-30 päeva enne" },
      { role: "KOV", action: "teenistuja vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab Politseiga" },
      { role: "KOV", action: "annab loa 10 tööpäeva jooksul ja teavitab PPA-d" }
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
    s0["Korraldaja: esitab taotluse vähemalt 14 päeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas puudusi esineb?"}
    s3["KOV: määrab tähtaja puuduste kõrvaldamiseks"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: väljastab loa 10 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]
    s8["KOV: teavitab korraldajat ja PPA-d"]

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
      { role: "Korraldaja", action: "esitab taotluse vähemalt 14 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "otsustab loa andmise 10 tööpäeva jooksul" }
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
    s0["Korraldaja: esitab taotluse üldjuhul 20 kalendripäeva enne"]
    s1["KOV: menetleja kontrollib taotlust 3 tööpäeva jooksul"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: määrab tähtaja puuduste kõrvaldamiseks"]
    s4(["KOV: kooskõlastab valla asutustega ja vajadusel PPA/PäA-ga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: väljastab loa haldusaktina"]
    s7["KOV: jätab loa andmata"]
    s8["KOV: teavitab PPA-d ja PäA-d"]

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
      { role: "Korraldaja", action: "esitab taotluse üldjuhul 20 kalendripäeva enne" },
      { role: "KOV", action: "menetleja kontrollib taotlust 3 tööpäeva jooksul ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "kooskõlastab taotluse valla asutustega ja vajadusel PPA/PäA-ga" },
      { role: "KOV", action: "otsustab loa andmise ja väljastab loa haldusaktina" },
      { role: "KOV", action: "teavitab PPA-d ja PäA-d" }
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
    s0["Korraldaja: esitab taotluse 2 nädalat enne"]
    s1["KOV: ametnik vaatab läbi"]
    s2{"KOV: kas puudusi esineb?"}
    s3["KOV: nõuab täiendavaid dokumente ja kooskõlastusi"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga (kõrgendatud turvariskiga)"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: väljastab loa valitsuse korraldusega"]
    s7["KOV: jätab taotluse rahuldamata"]

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
      { role: "Korraldaja", action: "esitab taotluse vähemalt kaks nädalat enne" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga (kõrgendatud turvariskiga korral)" },
      { role: "KOV", action: "ametnik vaatab läbi ja esitab valitsusele eelnõu 5 tööpäeva jooksul" },
      { role: "KOV", action: "väljastab loa korraldusega" }
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
    s0["Korraldaja: esitab taotluse 15 tööpäeva enne"]
    s1["KOV: menetleja vaatab läbi"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: määrab tähtaja kõrvaldamiseks"]
    s4(["KOV-korraldaja: kooskõlastab PPA ja Päästeametiga (vajadusel)"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: väljastab loa (allkirjastab vallavanem või osakonnajuhataja)"]
    s7["KOV: keeldub loa andmisest motiveeritud otsusega"]
    s8["KOV: teavitab PPA-d loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7
    s6 --> s8

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 15 tööpäeva enne" },
      { role: "KOV", action: "menetleja vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV-korraldaja", action: "kooskõlastab PPA ja Päästeametiga (vajadusel)" },
      { role: "KOV", action: "väljastab loa ja teavitab PPA-d" }
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
    s0["Korraldaja: esitab taotluse 30 kalendripäeva enne"]
    s1["KOV: ametnik vaatab läbi"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: määrab tähtaja puuduste kõrvaldamiseks"]
    s4(["KOV-korraldaja: kooskõlastab PPA ja Päästeametiga (kõrgendatud turvariskiga)"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: vallavalitsus väljastab loa 14 tööpäeva jooksul"]
    s7["KOV: keeldub loa andmisest"]
    s8["KOV: teavitab PPA-d ürituse korraldamisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s6
    s5 --|Ei|--> s7
    s6 --> s8

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 30 kalendripäeva enne" },
      { role: "KOV", action: "ametnik vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV-korraldaja", action: "kooskõlastab PPA ja Päästeametiga (kõrgendatud turvariskiga korral)" },
      { role: "KOV", action: "teavitab PPA-d" },
      { role: "KOV", action: "vallavalitsus väljastab loa 14 tööpäeva jooksul" }
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
    s0["Korraldaja: esitab teatise 7-14 tööpäeva enne"]
    s1["KOV: menetleja vaatab läbi"]
    s2{"KOV: kas on vaja täiendavaid selgitusi?"}
    s3["Korraldaja: esitab selgitused"]
    s4(["KOV-korraldaja: kooskõlastab PPAga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: teavitab PPA-d ja veebitoimetajat"]
    s7["KOV: otsustab lubamise vähemalt 3 päeva enne"]
    s8["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Jah|--> s7
    s5 --|Ei|--> s8
    s7 --> s6

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab teatise 7-14 tööpäeva enne" },
      { role: "KOV", action: "menetleja vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV-korraldaja", action: "kooskõlastab PPAga (vajadusel)" },
      { role: "KOV", action: "otsustab lubamise vähemalt 3 päeva enne ja teavitab PPA-d" }
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
    s0["Korraldaja: esitab taotluse 15 päeva enne"]
    s1["KOV: vaatab läbi"]
    s2{"KOV: kas nõuded on täidetud?"}
    s3["KOV: nõuab täiendavaid andmeid"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga (kui tuleneb seadusest)"])
    s5{"KOV: kas kooskõlastused on positiivsed?"}
    s6["KOV: väljastab loa korraldusega 14 tööpäeva jooksul"]
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
      { role: "Korraldaja", action: "esitab taotluse 15 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga (kui tuleneb seadusest)" },
      { role: "KOV", action: "väljastab loa korraldusega 14 tööpäeva jooksul" }
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
    s0["Korraldaja: esitab kooskõlastustaotluse 21 päeva enne"]
    s1["KOV: vaatab läbi"]
    s2{"KOV: kas esineb puudusi?"}
    s3["KOV: määrab tähtaja kõrvaldamiseks"]
    s4(["Korraldaja: teavitab PPA-d ja PäA-d"])
    s5(["Korraldaja: kooskõlastab PPA ja PäA-ga (vastavatel juhtudel)"])
    s6{"KOV: kas luba anda?"}
    s7["KOV: väljastab loa 10 tööpäeva jooksul"]
    s8["KOV: keeldub loa andmisest"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --> s6
    s6 --|Jah|--> s7
    s6 --|Ei|--> s8

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s6 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab kooskõlastustaotluse 21 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "teavitab PPA-d ja Päästeametit" },
      { role: "Korraldaja", action: "kooskõlastab PPA (liikluse korral) ja PäA-ga (lõkke korral)" },
      { role: "KOV", action: "väljastab loa 10 tööpäeva jooksul või keeldub" }
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
    s0["Korraldaja: esitab taotluse 20 päeva enne"]
    s1["KOV: menetleja vaatab läbi 7 päeva jooksul"]
    s2{"KOV: kas puudusi esineb?"}
    s3["KOV: nõuab täiendavaid dokumente või kooskõlastusi"]
    s4(["Korraldaja: kooskõlastab PPA ja Päästeametiga (vajadusel)"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: annab loa korraldusega ja teavitab 3 päeva jooksul"]
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
      { role: "KOV", action: "menetleja vaatab läbi 7 päeva jooksul ja määra tähtaja puuduste kõrvaldamiseks" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga (vajadusel)" },
      { role: "KOV", action: "annab loa korraldusega ja teavitab 3 päeva jooksul" }
    ]
  },
  {
    id: "keila",
    kov: "Keila linn",
    name: "Keila linna avaliku ürituse korraldamise ja pidamise eeskiri",
    url: "https://www.riigiteataja.ee/akt/408052014057",
    revisionDate: "01.07.2014",
    mermaid: `graph TD
    s0["Korraldaja: esitab taotluse 14 päeva enne"]
    s1["KOV: vaatab läbi"]
    s2{"KOV: kas on vaja täiendavaid kooskõlastusi?"}
    s3["Korraldaja: hangib kooskõlastused"]
    s4(["KOV: kooskõlastab PPAga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: keeldub loa andmisest"]
    s7["KOV: otsustab loa 10 päeva jooksul"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s4
    s3 --> s1
    s4 --> s5
    s5 --|Ei|--> s6
    s5 --|Jah|--> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 14 päeva enne" },
      { role: "KOV", action: "vaatab läbi" },
      { role: "KOV", action: "Kas on vaja täiendavaid kooskõlastusi?" },
      { role: "(Jah) Korraldaja", action: "hangib kooskõlastused" },
      { role: "(Ei) KOV", action: "kooskõlastab PPAga" },
      { role: "KOV", action: "Kas luba anda?" },
      { role: "KOV", action: "keeldub loa andmisest" },
      { role: "KOV", action: "otsustab loa 10 päeva jooksul" }
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
    s0["Korraldaja: esitab taotluse 30 päeva enne"]
    s1["KOV: vaatab läbi ja kontrollib"]
    s2{"KOV: kas puudusi esineb?"}
    s3["KOV: määrab tähtaja kõrvaldamiseks"]
    s4(["KOV: kooskõlastab PPA ja Päästeametiga"])
    s5{"KOV: kas luba anda?"}
    s6["KOV: keeldub loa andmisest"]
    s7["KOV: annab loa 10 tööpäeva jooksul korraldusega"]
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
      { role: "KOV", action: "annab loa 10 tööpäeva jooksul korraldusega" },
      { role: "KOV", action: "teavitab PPA-d ja Päästeametit" }
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
    s0["Korraldaja: esitab taotluse 14 päeva enne"]
    s1["KOV: menetleja vaatab läbi"]
    s2(["KOV: kooskõlastab PPA ja Päästeametiga"])
    s3["KOV: menetleb taotlust"]
    s4{"KOV: kas luba anda?"}
    s5["KOV: annab loa 10 tööpäeva jooksul"]
    s6["KOV: keeldub loa andmisest"]
    s7["KOV: teavitab PPA-d ja Päästeametit"]

    s0 --> s1
    s1 --> s2
    s2 --> s3
    s3 --> s4
    s4 --|Jah|--> s5
    s4 --|Ei|--> s6
    s5 --> s7
    s6 --> s7

    style s2 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s4 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 14 päeva enne" },
      { role: "KOV", action: "menetleja vaatab läbi ja koordineerib PPA ja PäA-ga" },
      { role: "KOV", action: "otsustab loa andmise 10 tööpäeva jooksul" },
      { role: "KOV", action: "teavitab PPA-d ja Päästeametit" }
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
    s0["Korraldaja: esitab taotluse 10 tööpäeva enne"]
    s1["KOV: vaatab läbi ja määrab vajadusel lisatingimused"]
    s2{"KOV: kas oht on välistatud?"}
    s3(["KOV: kooskõlastab PPA ja Päästeametiga"])
    s4{"KOV: kas luba anda?"}
    s5["KOV: väljastab loa"]
    s6["KOV: keeldub loa andmisest või tühistab loa"]
    s7["KOV: teavitab PPA-d ja Päästeametit"]

    s0 --> s1
    s1 --> s2
    s2 --|Ei|--> s6
    s2 --|Jah|--> s3
    s3 --> s4
    s4 --|Jah|--> s5
    s4 --|Ei|--> s6
    s5 --> s7
    s6 --> s7

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s4 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse hiljemalt 10 tööpäeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab vajadusel lisatingimused" },
      { role: "KOV", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "väljastab loa või keeldub/tühistab" },
      { role: "KOV", action: "teavitab viivitamata PPA-d ja Päästeametit" }
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
    s0["Korraldaja: esitab taotluse 15-20 tööpäeva enne"]
    s1["KOV: vaatab läbi ja määrab puuduste kõrvaldamiseks tähtaja"]
    s2{"KOV: kas taotlus on nõuetekohane?"}
    s3(["Korraldaja: kooskõlastab PPA ja Päästeametiga"])
    s4{"KOV: kas luba anda?"}
    s5["KOV: annab loa korraldusega"]
    s6["KOV: keeldub loa andmisest"]
    s7["KOV: teavitab PPA-d ja Päästeametit"]

    s0 --> s1
    s1 --> s2
    s2 --|Jah|--> s3
    s2 --|Ei|--> s1
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
      { role: "Korraldaja", action: "esitab taotluse 15-20 tööpäeva enne" },
      { role: "Korraldaja", action: "kooskõlastab PPA ja Päästeametiga" },
      { role: "KOV", action: "vaatab läbi ning määrab puuduste kõrvaldamiseks tähtaja" },
      { role: "KOV", action: "otsustab loa andmise ja teavitab PPA-d ning PäA-d" }
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
    s0["Korraldaja: esitab taotluse 10-30 päeva enne"]
    s1["KOV: vaatab läbi"]
    s2{"KOV: kas on kõrgendatud risk?"}
    s3(["KOV: kooskõlastab taotluse PPA ja Päästeametiga"])
    s4["KOV: menetleb"]
    s5{"KOV: kas luba anda?"}
    s6["KOV: annab loa 14 kalendripäeva jooksul"]
    s7["KOV: keeldub loa andmisesst"]
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

    style s2 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    style s3 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style s5 fill:#fffbeb,stroke:#fbbf24,stroke-width:2px
    classDef default font-family:Inter,sans-serif,font-size:12px`,
    steps: [
      { role: "Korraldaja", action: "esitab taotluse 10-30 päeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "kooskõlastab taotluse PPA ja Päästeametiga (kõrgendatud turvariskiga korral)" },
      { role: "KOV", action: "otsustab loa andmise 14 kalendripäeva jooksul ja teavitab ametiasutusi" }
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
    s0["Korraldaja: esitab taotluse 15 tööpäeva enne"]
    s1["KOV: vaatab läbi"]
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
      { role: "Korraldaja", action: "esitab taotluse 15 tööpäeva enne" },
      { role: "KOV", action: "vaatab läbi ja määrab tähtaja puuduste kõrvaldamiseks" },
      { role: "KOV", action: "kooskõlastab PPA ja Päästeametit (vajadusel)" },
      { role: "KOV", action: "väljastab loa 10 tööpäeva jooksul" },
      { role: "KOV", action: "teavitab PPA-d ja Päästeametit" }
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
