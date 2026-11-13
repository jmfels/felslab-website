/* ============================================================
   FELS LAB — WEBSITE CONTENT
   ============================================================

   This is the ONLY file you need to edit.
   You never need to touch the .html files, style.css, or site.js.

   HOW TO EDIT:
   • Change any text by editing what's between the `backticks`.
   • Keep the backticks ` ` , the commas, and the { } and [ ]
     brackets exactly where they are.
   • You can use <em>italic</em>, <strong>bold</strong>, and
     <a href="...">links</a> inside any text.
   • To ADD a person, publication, or research theme: copy one
     existing block (from { to },) and paste it below, then edit.

   IMAGES:
   • Put picture files in the `images` folder next to index.html.
   • Then point to them like `images/hero.jpg`.
   • Leave an image empty `` to show a placeholder box instead.

   IF A PAGE SHOWS A RED BAR, you deleted a comma, bracket, or
   backtick by accident. Undo your last change and save again.
   ============================================================ */

window.LAB_DATA = {

  /* ---- Basics ---- */
  labName: `Fels Lab`,
  // Your email is split into two parts — the bit before the @ (`user`)
  // and the bit after it (`domain`). The site joins them back together
  // with an @ when the page loads. This keeps spam bots from finding your
  // address in this file, since the full "name@place" pattern never
  // appears here. Just edit each part; never type the @ yourself.
  email: { user: `max.fels`, domain: `nyulangone.org` },
  institution: `New York University`,   // shown in the footer, after the lab name

  /* ---- Interface text ----
     The small bits of wording the site adds around your content:
     menu labels, buttons, link text, and the placeholder labels shown
     where a photo hasn't been added yet. Change any of these the same
     way as everything else — edit between the backticks. */
  ui: {
    nav: {
      welcome:      `Welcome`,
      research:     `Research`,
      publications: `Publications`,
      people:       `People`,
      join:         `Join`,
      contact:      `Contact`
    },
    welcomeLinks: [            // the two links under the welcome text
      { label: `Read about the research →`, href: `research.html` },
      { label: `Join the lab →`,            href: `join.html` }
    ],
    scholarListLink:      `Full list on Google Scholar →`,
    placeholderTag:       `Placeholder`,        // the little tag on unfinished publications
    applyHeading:         `How to apply`,
    applySeparator:       `: `,                 // sits between each role and its materials (e.g. a colon, a dash " — ", or just " ")
    mapTitle:             `Lab location map`,   // label for screen readers; not shown on screen
    // Placeholder labels, shown only until you add the image:
    photoPlaceholder:     `PHOTO`,
    figurePlaceholder:    `Add a figure — set the image in data.js (e.g. images/figure1.jpg)`,
    heroPlaceholder:      `Add a lab photo — set hero.image in data.js (e.g. images/hero.jpg)`
  },

  /* ---- WELCOME page (index.html) ---- */
  hero: {
    image: `images/hero3.jpg`,                       // e.g. `images/hero.jpg` — a lab photo or microscopy image
    caption: ``,                     // optional caption under the image
    headline: `Viruses drive biological innovation.`,
    paragraphs: [
      `We are a new lab in the Department of Microbiology at New York University studying how viruses reshape core cellular processes such as translation and metabolism. We also study the vast repertoires of defense mechanisms cells have evolved to protect against viral infections.`
    ]
  },

  /* ---- RESEARCH page (research.html) ----
     Each theme is shown openly: a figure, a heading, and prose.
     Add a theme by copying one { } block. */
  research: {
    title: `Research`,
    intro: ``,                       // optional short intro under the page title
    themes: [
      {
        title: `Viral reprogramming of core cellular processes`,
        image: `images/R1.png`,                   // e.g. `images/translation.jpg`
        caption: ``,
        paragraphs: [
          `Looking at the foundation of an old building you will sometimes find a few stones that seem like they originated elsewhere. 
          These repurposed stones, called <i>spolia</i>, might be the only remaining parts of some long-lost structure and offer archaeologists unique glimpses of our history. 
          In biology, the acquisition of host genes by viruses over evolutionary time scales can be thought of as a molecular form of spolia. `,
          
          `Nowhere in the virosphere has this process gone further than among the so-called giant DNA viruses, which have amassed genomes that rival bacteria in size and complexity. We use giant DNA viruses to explore how aspects of core cellular processes, such as metabolism and biosynthesis, are co-opted and regulated by viruses. Our goal is to reveal the rules that govern these processes of life, and to uncover the evolutionary origins of the factors involved.`
        ]
      },
      {
        title: `The ribosome as a point of virus-host conflict`,
        image: `images/R2v4.jpg`,
        caption: ``,
        paragraphs: [
          `Since viruses lack ribosomes, establishing control of the host protein synthesis machinery is essential for viral replication. In turn, host cells maintain multi-layered forms of translation regulation that serve to limit protein synthesis during infection or cellular stress. This tension positions the ribosome as a central point of virus-host conflict.`,
          `Using structural biology approaches coupled with ribosome profiling, we visualize how human pathogens remodel host ribosomes to drive viral protein synthesis. Because viruses often repurpose existing cellular pathways, we also build on these insights into viral translation regulation to further our understanding of how host cells respond to stress conditions. `
        ]
      },
      {
        title: `Antiviral defense across the tree of life`,
        image: `images/R3.png`,
        caption: ``,
        paragraphs: [
          `The ability to mount a robust defense against viral infections is a shared requirement among all life. Across divergent organisms, this requirement has driven the evolution of antiviral mechanisms displaying both remarkable conservation and specialized innovation. Our lab studies how these mechanisms evolve and diversify.`,
          `We use amoebae, the hosts of giant DNA viruses, as our model system of choice to study antiviral immunity. As evolutionary “cousins” of metazoans, amoebae offer a distinct view of immunity unobstructed by some of the complications posed by multicellular eukaryotes. Applying comparative genomics, viral genetics, and biochemical reconstitution, we thus uncover novel ways that cells sense and respond to viral infections, before tracing the conservation across the tree of life. `
        ]
      }
    ]
  },

  /* ---- PEOPLE page (people.html) ----
     Add a lab member by copying one { } block.
     `note` is optional (fellowships, program, anything extra). */
  people: {
    title: `Current lab members`,
    members: [
      {
        name: `Max Fels, PhD`,
        role: `Principal Investigator`,
        photo: `images/max.jpg`,
        note: ``,
        email: { user: `max.fels`, domain: `nyulangone.org` },   // split like the one at the top — no @
        links: [ { label: `Google Scholar`, url: `https://scholar.google.com/citations?hl=en&user=0pDGQlkAAAAJ&view_op=list_works&sortby=pubdate` }, { label: `Bluesky`, url: `https://bsky.app/profile/mfels.bsky.social` } ]
      }
      // ,{
      //   name: `Jane Doe`,
      //   role: `Postdoctoral Researcher`,
      //   photo: `images/jane.jpg`,
      //   note: `NIH F32 Fellow`,
      //   email: { user: `jane.doe`, domain: `nyu.edu` }
      // }
    ],
    joining: {
      title: `Joining the lab`,
      paragraphs: [
        `The Fels Lab is brand new and we are currently recruiting <strong>postdoctoral researchers</strong> and <strong>research technicians</strong>. We also welcome rotation students. See the <a href="join.html">Join</a> page for details on each position and how to apply.`
      ]
    }
  },

  /* ---- PUBLICATIONS page (publications.html) ----
     One single list — every paper in `items` is shown, newest first.
     Each paper has five fields:
       year    — shown on its own line above the title
       title   — links to the paper's PubMed page (uses pmid below)
       authors — the full author list; wrap your name in
                 <strong>...</strong> to bold it
       journal — shown italic on its own line under the authors
       pmid    — the PubMed ID; shown after the journal and used for
                 the title's link. Leave `` empty for no PMID/link.
       featured — OPTIONAL. A "Featured in" line of coverage links
                 shown on its own line under the journal. Format:
                 featured: [ { label: `Outlet`, url: `https://…` } ]
                 List as many as you like; omit it for papers with none.
     Add a paper by copying one { } line. */
  publications: {
    title: `Publications`,
    intro: ``,   // optional line under the title; leave empty `` for none
    scholarUrl: `https://scholar.google.com/citations?hl=en&user=0pDGQlkAAAAJ&view_op=list_works&sortby=pubdate`,
    items: [
      { year: `2026`, title: `Giant DNA viruses encode a hallmark translation initiation complex of eukaryotic life`, authors: `<strong>Fels JM</strong>, Hill AB, Han R, Garcia JM, Bisio H, Abergel C, Kranzusch PJ, Lee ASY`, journal: `Cell`, pmid: `41709453`, featured: [
        { label: `Science`, url: `https://www.science.org/content/article/giant-viruses-hijack-their-hosts-protein-factories` },
        { label: `Nature`, url: `https://www.nature.com/articles/d41586-026-00532-w` },
        { label: `Nature Microbiology`, url: `https://www.nature.com/articles/s41564-026-02338-y` },
        { label: `Trends in Biochemical Sciences`, url: `https://www.cell.com/trends/biochemical-sciences/fulltext/S0968-0004(26)00172-6` },
        { label: `Current Biology`, url: `https://www.cell.com/current-biology/fulltext/S0960-9822(26)00380-5` },
        { label: `New Scientist`, url: `https://www.newscientist.com/article/2515941-giant-viruses-may-be-more-alive-than-we-thought/` },
        { label: `TWiV`, url: `https://www.microbe.tv/twiv/twiv-1301/` }
      ] },
      { year: `2025`, title: `Avidity and variable domain spacing strongly influence the therapeutic potency of bispecific antibodies against Crimean-Congo hemorrhagic fever virus`, authors: `Wang A, Monticelli SR, Wirchnianski AS, Abelson DM, Kuehne AI, Bakken RR, Middlecamp M, Weingart M, Vergnolle O, Bornholdt ZA, Moyer CL, Berrigan JL, West BR, <strong>Fels JM</strong>, Zeitlin L, Herbert AS, Chandran K, Bikash CR, Lai JR`, journal: `mBio`, pmid: `40237506` },
      { year: `2022`, title: `Genomic surveillance of SARS-CoV-2 during the first year of the pandemic in the Bronx enabled clinical and epidemiological inference`, authors: `<strong>Fels JM*</strong>, Khan S*, Forster R*, Skalina KA, Sirichand S, Fox AS, Bergman A, Mitchell WB, Wolgast LR, Szymczak WA, Bortz RH 3rd, Dieterle ME, Florez C, Haslwanter D, Jangra RK, Laudermilch E, Wirchnianski AS, Barnhill J, Goldman DL, Khine H, Goldstein DY, Daily JP, Chandran K, Kelly L`, journal: `Cold Spring Harbor Molecular Case Studies`, pmid: `35831070` },
      { year: `2022`, title: `Longitudinally monitored immune biomarkers predict the timing of COVID-19 outcomes`, authors: `Lasso G, Khan S, Allen SA, Mariano M, Florez C, Orner EP, Quiroz JA, Quevedo G, Massimi A, Hegde A, Wirchnianski AS, Bortz RH 3rd, Malonis RJ, Georgiev GI, Tong K, Herrera NG, Morano NC, Garforth SJ, Malaviya A, Khokhar A, Laudermilch E, Dieterle ME, <strong>Fels JM</strong>, Haslwanter D, Jangra RK, Barnhill J, Almo SC, Chandran K, Lai JR, Kelly L, Daily JP, Vergnolle O`, journal: `PLOS Computational Biology`, pmid: `35041647` },
      { year: `2022`, title: `Structural basis of synergistic neutralization of Crimean-Congo hemorrhagic fever virus by human antibodies`, authors: `Mishra AK, Hellert J, Freitas N, Guardado-Calvo P, Haouz A, <strong>Fels JM</strong>, Maurer DP, Abelson DM, Bornholdt ZA, Walker LM, Chandran K, Cosset FL, McLellan JS, Rey FA`, journal: `Science`, pmid: `34793197` },
      { year: `2021`, title: `A combination of receptor-binding domain and N-terminal domain neutralizing antibodies limits the generation of SARS-CoV-2 spike neutralization-escape mutants`, authors: `Haslwanter D, Dieterle ME, Wec AZ, O'Brien CM, Sakharkar M, Florez C, Tong K, Rappazzo CG, Lasso G, Vergnolle O, Wirchnianski AS, Bortz RH 3rd, Laudermilch E, <strong>Fels JM</strong>, Mengotto A, Malonis RJ, Georgiev GI, Quiroz JA, Wrapp D, Wang N, Dye KE, Barnhill J, Dye JM, McLellan JS, Daily JP, Lai JR, Herbert AS, Walker LM, Chandran K, Jangra RK`, journal: `mBio`, pmid: `34607456` },
      { year: `2021`, title: `Protective neutralizing antibodies from human survivors of Crimean-Congo hemorrhagic fever`, authors: `<strong>Fels JM*</strong>, Maurer DP*, Herbert AS*, Wirchnianski AS, Vergnolle O, Cross RW, Abelson DM, Moyer CL, Mishra AK, Aguilan JT, Kuehne AI, Pauli NT, Bakken RR, Nyakatura EK, Hellert J, Quevedo G, Lobel L, Balinandi S, Lutwama JJ, Zeitlin L, Geisbert TW, Rey FA, Sidoli S, McLellan JS, Lai JR, Bornholdt ZA, Dye JM, Walker LM, Chandran K`, journal: `Cell`, pmid: `34077751` },
      { year: `2021`, title: `Single-dilution COVID-19 antibody test with qualitative and quantitative readouts`, authors: `Bortz RH 3rd, Florez C, Laudermilch E, Wirchnianski AS, Lasso G, Malonis RJ, Georgiev GI, Vergnolle O, Herrera NG, Morano NC, Campbell ST, Orner EP, Mengotto A, Dieterle ME, <strong>Fels JM</strong>, Haslwanter D, Jangra RK, Celikgil A, Kimmel D, Lee JH, Mariano MC, Nakouzi A, Quiroz J, Rivera J, Szymczak WA, Tong K, Barnhill J, Forsell MNE, Ahlm C, Stein DT, Pirofski LA, Goldstein DY, Garforth SJ, Almo SC, Daily JP, Prystowsky MB, Faix JD, Fox AS, Weiss LM, Lai JR, Chandran K`, journal: `mSphere`, pmid: `33883259` },
      { year: `2021`, title: `Treatment of severe COVID-19 with convalescent plasma in Bronx, NYC`, authors: `Yoon HA, Bartash R, Gendlina I, Rivera J, Nakouzi A, Bortz RH 3rd, Wirchnianski AS, Paroder M, Fehn K, Serrano-Rahman L, Babb R, Sarwar UN, Haslwanter D, Laudermilch E, Florez C, Dieterle ME, Jangra RK, <strong>Fels JM</strong>, Tong K, Mariano MC, Vergnolle O, Georgiev GI, Herrera NG, Malonis RJ, Quiroz JA, Morano NC, Krause GJ, Sweeney JM, Cowman K, Allen S, Annam J, Applebaum A, Barboto D, Khokhar A, Lally BJ, Lee A, Lee M, Malaviya A, Sample R, Yang XA, Li Y, Ruiz R, Thota R, Barnhill J, Goldstein DY, Uehlinger J, Garforth SJ, Almo SC, Lai JR, Gil MR, Fox AS, Chandran K, Wang T, Daily JP, Pirofski LA`, journal: `JCI Insight`, pmid: `33476300` },
      { year: `2021`, title: `A glycoprotein mutation that emerged during the 2013–2016 Ebola virus epidemic alters proteolysis and accelerates membrane fusion`, authors: `<strong>Fels JM</strong>, Bortz RH 3rd, Alkutkar T, Mittler E, Jangra RK, Spence JS, Chandran K`, journal: `mBio`, pmid: `33593971` },
      { year: `2021`, title: `Characterization of the SARS-CoV-2 S protein: biophysical, biochemical, structural, and antigenic analysis`, authors: `Herrera NG, Morano NC, Celikgil A, Georgiev GI, Malonis RJ, Lee JH, Tong K, Vergnolle O, Massimi AB, Yen LY, Noble AJ, Kopylov M, Bonanno JB, Garrett-Thomson SC, Hayes DB, Bortz RH 3rd, Wirchnianski AS, Florez C, Laudermilch E, Haslwanter D, <strong>Fels JM</strong>, Dieterle ME, Jangra RK, Barnhill J, Mengotto A, Kimmel D, Daily JP, Pirofski LA, Chandran K, Brenowitz M, Garforth SJ, Eng ET, Lai JR, Almo SC`, journal: `ACS Omega`, pmid: `33458462` },
      { year: `2020`, title: `A replication-competent vesicular stomatitis virus for studies of SARS-CoV-2 spike-mediated cell entry and its inhibition`, authors: `Dieterle ME, Haslwanter D, Bortz RH 3rd, Wirchnianski AS, Lasso G, Vergnolle O, Abbasi SA, <strong>Fels JM</strong>, Laudermilch E, Florez C, Mengotto A, Kimmel D, Malonis RJ, Georgiev G, Quiroz J, Barnhill J, Pirofski LA, Daily JP, Dye JM, Lai JR, Herbert AS, Chandran K, Jangra RK`, journal: `Cell Host & Microbe`, pmid: `32738193` },
      { year: `2020`, title: `Broad neutralization of SARS-related viruses by human monoclonal antibodies`, authors: `Wec AZ, Wrapp D, Herbert AS, Maurer DP, Haslwanter D, Sakharkar M, Jangra RK, Dieterle ME, Lilov A, Huang D, Tse LV, Johnson NV, Hsieh CL, Wang N, Nett JH, Champney E, Burnina I, Brown M, Lin S, Sinclair M, Johnson C, Pudi S, Bortz R 3rd, Wirchnianski AS, Laudermilch E, Florez C, <strong>Fels JM</strong>, O'Brien CM, Graham BS, Nemazee D, Burton DR, Baric RS, Voss JE, Chandran K, Dye JM, McLellan JS, Walker LM`, journal: `Science`, pmid: `32540900` },
      { year: `2020`, title: `Exploiting pre-existing CD4+ T cell help from Bacille Calmette-Guérin vaccination to improve antiviral antibody responses`, authors: `Ng TW, Wirchnianski AS, Wec AZ, <strong>Fels JM</strong>, Johndrow CT, Saunders KO, Liao HX, Chan J, Jacobs WR Jr, Chandran K, Porcelli SA`, journal: `The Journal of Immunology`, pmid: `32513849` },
      { year: `2020`, title: `Real-time analysis of individual Ebola virus glycoproteins reveals pre-fusion, entry-relevant conformational dynamics`, authors: `Durham ND, Howard AR, Govindan R, Senjobe F, <strong>Fels JM</strong>, Diehl WE, Luban J, Chandran K, Munro JB`, journal: `Viruses`, pmid: `31952255` },
      { year: `2019`, title: `A hyperstabilizing mutation in the base of the Ebola virus glycoprotein acts at multiple steps to abrogate viral entry`, authors: `<strong>Fels JM</strong>, Spence JS, Bortz RH 3rd, Bornholdt ZA, Chandran K`, journal: `mBio`, pmid: `31289183` },
      { year: `2018`, title: `Protocadherin-1 is essential for cell entry by New World hantaviruses`, authors: `Jangra RK, Herbert AS, Li R, Jae LT, Kleinfelter LM, Slough MM, Barker SL, Guardado-Calvo P, Román-Sosa G, Dieterle ME, Kuehne AI, Muena NA, Wirchnianski AS, Nyakatura EK, <strong>Fels JM</strong>, Ng M, Mittler E, Pan J, Bharrhan S, Wec AZ, Lai JR, Sidhu SS, Tischler ND, Rey FA, Moffat J, Brummelkamp TR, Wang Z, Dye JM, Chandran K`, journal: `Nature`, pmid: `30464266` },
      { year: `2017`, title: `Immunization-elicited broadly protective antibody reveals ebolavirus fusion loop as a site of vulnerability`, authors: `Zhao X, Howell KA, He S, Brannan JM, Wec AZ, Davidson E, Turner HL, Chiang CI, Lei L, <strong>Fels JM</strong>, Vu H, Shulenin S, Turonis AN, Kuehne AI, Liu G, Ta M, Wang Y, Sundling C, Xiao Y, Spence JS, Doranz BJ, Holtsberg FW, Ward AB, Chandran K, Dye JM, Qiu X, Li Y, Aman MJ`, journal: `Cell`, pmid: `28525756` },
      { year: `2017`, title: `Antibodies from a human survivor define sites of vulnerability for broad protection against ebolaviruses`, authors: `Wec AZ, Herbert AS, Murin CD, Nyakatura EK, Abelson DM, <strong>Fels JM</strong>, He S, James RM, de La Vega MA, Zhu W, Bakken RR, Goodwin E, Turner HL, Jangra RK, Zeitlin L, Qiu X, Lai JR, Walker LM, Ward AB, Dye JM, Chandran K, Bornholdt ZA`, journal: `Cell`, pmid: `28525755` },
      { year: `2016`, title: `Calcium-dependent rubella virus fusion occurs in early endosomes`, authors: `Dubé M, Etienne L, <strong>Fels M</strong>, Kielian M`, journal: `Journal of Virology`, pmid: `27122589` }
    ]
  },

  /* ---- JOIN page (join.html) ---- */
  join: {
    title: `Join the lab`,
    intro: `The lab is brand new and we're currently recruiting broadly.`,
    roles: [
      { title: `Postdoctoral researcher`, body: `Several projects on viral reprogramming of core cellular processes, or on antiviral defense, are available. Lots of room for an imaginative scientist to take projects in unexpected directions.`, status: `Recruiting now` },
      { title: `Research technician`, body: `Help launch the lab and run day to day operations. Organized and curious people who are excited to build something new are encouraged to apply.`, status: `Recruiting now` },
      { title: `Graduate student`, body: `Prospective rotation students from the Vilcek Institute of Graduate Biomedical Sciences are very welcome. Please reach out to talk about rotation projects and what we're working on.`, status: `Rotations welcome` }
    ],
    applyIntro: `Please send an email along with the materials listed below to`,
    applyChecklist: [
      { who: `Postdoc`, what: `CV and a cover letter including a statement of research interests.` },
      { who: `Technician`, what: `CV and a short note about your experience and goals.` },
      { who: `Graduate students`, what: `A note about your interests and your timeline for rotations.` }
    ]
  },

  /* ---- CONTACT page (contact.html) ---- */
  contact: {
    title: `Contact`,
    social: [
      { label: `Bluesky`, url: `https://bsky.app/profile/mfels.bsky.social` },
      { label: `Google Scholar`, url: `https://scholar.google.com/citations?hl=en&user=0pDGQlkAAAAJ&view_op=list_works&sortby=pubdate` }
    ],
    address: [
      `New York University`,
      `Department of Microbiology`,
      `430 East 29th Street`,
      `Alexandria West, Room 404`,
      `New York, NY 10016`
    ],
    // Interactive map under the address. Leave empty `` to hide it.
    // To re-center it precisely: on Google Maps, click Share → "Embed a map"
    // → Copy HTML, and paste just the part inside src="..." between the backticks.
    mapEmbed: `https://maps.google.com/maps?q=430%20East%2029th%20Street%2C%20New%20York%2C%20NY%2010016&z=16&output=embed`
  }
};
