const wcagObj = {
  criterion : [
    { // 1.1.1.
      "criteria" : "1.1.1 Contingut no textual", 
      "link" : "https://www.w3.org/TR/WCAG21/#non-text-content", 
      "level" : "A",
      "version" : "2.0", 
      "goal" : "Proporcioneu alternatives de text per a qualsevol contingut que no sigui de text perquè es pugui canviar a altres formes que les persones necessitin, com ara lletra gran, braille, parla, símbols o un llenguatge més simple.", 
      "intent" : "La intenció d'aquest criteri d'èxit és fer que la informació que es transmet per contingut no textual sigui accessible mitjançant l'ús d'una alternativa de text. Les alternatives de text són una forma principal de fer accessible la informació perquè es poden representar mitjançant qualsevol modalitat sensorial (per exemple, visual, auditiva o tàctil) per satisfer les necessitats de l'usuari. Proporcionar alternatives de text permet que la informació sigui representada de diverses maneres per una varietat d'agents d'usuari. Per exemple, una persona que no pot veure una imatge pot fer llegir l'alternativa del text en veu alta mitjançant un discurs sintetitzat. Una persona que no pot escoltar un fitxer d'àudio pot mostrar l'alternativa de text perquè el pugui llegir. En el futur, les alternatives de text també permetran traduir la informació més fàcilment a la llengua de signes o a una forma més senzilla de la mateixa llengua.", 
      "benefits" : "<ul><li>Aquest criteri d'èxit ajuda les persones que tenen dificultats per percebre el contingut visual. La tecnologia d'assistència pot llegir el text en veu alta, presentar-lo visualment o convertir-lo en braille.</li><li>Les alternatives de text poden ajudar a algunes persones que tenen dificultats per entendre el significat de fotografies, dibuixos i altres imatges (per exemple, dibuixos lineals, dissenys gràfics, pintures, representacions tridimensionals), gràfics, gràfics, animacions, etc.</li><li>Les persones sordes, amb problemes d'audició o que tenen problemes per entendre la informació d'àudio per qualsevol motiu poden llegir la presentació del text. La recerca està en curs sobre la traducció automàtica de text a la llengua de signes.</li><li>Les persones sordcegues poden llegir el text en braille.</li><li>A més, les alternatives de text donen suport a la possibilitat de cercar contingut que no sigui de text i de reutilitzar el contingut de diverses maneres.</li></ul>", 
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html#techniques",
      "verification" : "<ul><li>A. Tot contingut no textual ha de tenir una alternativa textual breu que proporcioni la mateixa informació o compleixi el mateix propòsit que el contingut no textual.</li><li>B. Les alternatives textuals s'han d'actualitzar quan canvieu el contingut no textual.</li><li>C. Les imatges incloses des de CSS han de ser purament decoratives i no han d'aportar informació tret que hi hagi alternativa textual a la pàgina.</li><li>D. En els grups d'imatges que transmeten una única informació de forma conjunta es proporciona en una sola de les imatges descrivint tot el grup, deixant la resta com a decoratives.</li><li>E. L'art ASCII, les emoticones i el leetspeak han de disposar d'alternatives textuals immediatament abans o després que transmetin la mateixa informació. Si amb una alternativa textual curta no és suficient per transmetre la mateixa informació o complir el mateix propòsit que el contingut no textual, aleshores a l'alternativa textual curta s'ha de proporcionar una breu descripció del contingut no textual ia més es proporciona una alternativa textual llarga que sí que transmeti la mateixa informació o compleixi el mateix propòsit.</li><li>G. Les imatges que tenen alguna funcionalitat com els enllaços, àrees actives de mapes d'imatge o botons de tipus imatge als formularis, tenen un text alternatiu que n'identifica el propòsit.</li><li>H. Els enllaços acompanyats d'imatges que actuen com a enllaç al mateix recurs han d'estar combinats en un únic enllaç. El contingut d'àudio, vídeo o multimèdia (incloent contingut en directe), els tests o exercicis que podrien ser invàlids si es mostren com a text, així com el contingut la funció principal del qual és produir una experiència sensorial específica (música, quadres, etc.) han de tenir una alternativa textual breu com a etiqueta descriptiva que almenys identifiqui quin és el contingut no textual.</li><li>J. Els CAPTCHA han de disposar d'una alternativa textual que descriu el propòsit del CAPTCHA ia més ha d'existir un CAPTCHA alternatiu que compleix el mateix propòsit però en una modalitat diferent. </li><li>K. Les imatges decoratives han de tenir un text alternatiu buit i no tenir un títol, o bé s'hi inclouen des dels fulls d'estil, de manera que puguin ser ignorats pels productes de suport.</li></ul>", 
      "tools" : "<ul><li>A. Web Developer Toolbar.</li><li>1. Images - Outline images without alt attributes > Comprovar si hi ha alguna imatge ressaltada, és un error i se li ha de proporcionar un atribut “alt”.</li><li>2. Images - Display alt attributes > Valorar si el text d'aquest atribut descriu la funció de la imatge.</li><li>B. Web Developer Toolbar.</li><li>1. Images - Display alt attributes > Valoreu si el text d'aquest atribut s'adapta als canvis en el contingut no textual.</li><li>C.Web Developer Toolbar. Images - Outline all images > Verificar que les imatges introduïdes des de les fulles d'estil (les que no es mostren ressaltades) no transmeten informació important. Si alguna imatge transmet informació important, verificar que la informació està disponible per a les eines de suport.</li><li>C. Web Developer Toolbar. Images - Display alt attributes > Localizar las imágenes que actúan como un grupo y verificar que se proporciona un texto alternativo adecuado en una de las imágenes y que el resto tienen un texto alternativo vacío.</li><li>E. Web Developer Toolbar. Images - Display alt attributes > Localitzar els elements que actuen art ASCII, emoticones i leetspeak i verificar que es proporciona un text alternatiu adequat immediatament abans o després.</li></ul>", 
      "category" : ["content"]
    },
    
    { // 1.2.1.
      "criteria" : "1.2.1 Només àudio i només vídeo (pregravat)", 
      "link" : "https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded", 
      "level" : "A",
      "version" : "2.0", 
      "goal" : "Es proporcionen subtítols per a tot el contingut d'àudio pregravat en mitjans sincronitzats, excepte quan el mitjà és una alternativa de mitjans per al text i està clarament etiquetat com a tal.", 
      "intent" : "La intenció d'aquest Criteri d'èxit és posar a disposició de tots els usuaris la informació transmesa per contingut només d'àudio pregravat i només de vídeo pregravat. Les alternatives per als mitjans basats en el temps que es basen en text fan que la informació sigui accessible perquè el text es pot representar mitjançant qualsevol modalitat sensorial (per exemple, visual, auditiva o tàctil) per satisfer les necessitats de l'usuari. En el futur, el text també es podria traduir a símbols, llenguatge de signes o formes més senzilles de la llengua (futur).", 
      "benefits" : "<ul><li>Aquest criteri d'èxit ajuda les persones que tenen dificultats per percebre el contingut visual. La tecnologia d'assistència pot llegir alternatives de text en veu alta, presentar-les visualment o convertir-les en braille.</li><li>Les alternatives per a mitjans cronometrats que es basen en text poden ajudar a algunes persones que tenen dificultats per entendre el significat del contingut de vídeo pregravat.</li><li>Les persones sordes, tenen problemes d'audició o tenen problemes per entendre la informació d'àudio per qualsevol motiu poden llegir la presentació del text. S'estan realitzant investigacions sobre la traducció automàtica de text a la llengua de signes.</li><li>Les persones sordcegues poden llegir el text en braille.</li><li>A més, el text admet la possibilitat de cercar contingut que no sigui de text i de reutilitzar el contingut de diverses maneres.</li></ul>", 
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded.html#techniques",
      "verification" : "-", 
      "tools" :"-", 
      "category" : ["audio-video"]
    },
    
    { //1.2.2.
      "criteria" : 
      {
        "ca" : "1.2.2 Subtítols (pregravats)", 
        "es" : "1.2.2 Subtítulos (pregrabados)", 
        "en" : "1.2.2 Captions (Prerecorded)"
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#captions-prerecorded",
      "level" : "A",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Es proporcionen subtítols per a tot el contingut d'àudio pregravat en mitjans sincronitzats, excepte quan el mitjà és una alternativa de mitjans per al text i està clarament etiquetat com a tal.", 
        "es" : "Se proporcionan subtítulos para todo el contenido de audio pregrabado en medios sincronizados, excepto cuando el medio es una alternativa de medios para el texto y está claramente etiquetado como tal.", 
        "en" : "Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest criteri d'èxit és permetre que les persones sordes o amb problemes d'audició vegin presentacions multimèdia sincronitzades. Els subtítols proporcionen la part del contingut disponible mitjançant la pista d'àudio. Els subtítols no només inclouen diàlegs, sinó que identifiquen qui parla i inclouen informació no verbal que es transmet a través del so, inclosos efectes sonors significatius.</p><p>Es reconeix que en l'actualitat pot haver-hi dificultats per crear subtítols per a material sensible al temps i això pot fer que l'autor s'enfronti a l'opció de retardar la informació fins que els subtítols estiguin disponibles o publicar contingut sensible al temps que sigui inaccessible. als sords, almenys durant l'interval fins que els subtítols estiguin disponibles. Amb el pas del temps, les eines de subtítols i la incorporació dels subtítols al procés de lliurament poden escurçar o eliminar aquests retards.</p><p>Els subtítols no són necessaris quan el suport sincronitzat és, en si mateix, una presentació alternativa d'informació que també es presenta mitjançant text a la pàgina web. Per exemple, si la informació d'una pàgina va acompanyada d'una presentació multimèdia sincronitzada que no presenta més informació de la que ja es presenta en el text, però és més fàcil d'entendre per a persones amb discapacitats cognitives, del llenguatge o d'aprenentatge, llavors no caldria ser-ho. subtítols ja que la informació ja es presenta a la pàgina en text o en alternatives de text (per exemple, per a imatges).</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es permitir que las personas sordas o con dificultades auditivas vean presentaciones multimedia sincronizadas. Los subtítulos proporcionan la parte del contenido disponible a través de la pista de audio. Los subtítulos no solo incluyen diálogo, sino que también identifican quién está hablando e incluyen información no verbal transmitida a través del sonido, incluidos efectos de sonido significativos.</p><p>Se reconoce que en la actualidad puede haber dificultades para crear subtítulos para material sensible al tiempo y esto puede dar lugar a que el autor se enfrente a la opción de retrasar la información hasta que los subtítulos estén disponibles, o publicar contenido sensible al tiempo que es inaccesible. para los sordos, al menos durante el intervalo hasta que los subtítulos estén disponibles. Con el tiempo, las herramientas para los subtítulos, así como la integración de los subtítulos en el proceso de entrega, pueden acortar o eliminar dichos retrasos.</p><p>Los subtítulos no son necesarios cuando los medios sincronizados son, en sí mismos, una presentación alternativa de información que también se presenta mediante texto en la página web. Por ejemplo, si la información en una página va acompañada de una presentación multimedia sincronizada que no presenta más información de la que ya se presenta en el texto, pero es más fácil de entender para las personas con discapacidades cognitivas, de lenguaje o de aprendizaje, entonces no sería necesario subtitulado ya que la información ya se presenta en la página en texto o en alternativas de texto (por ejemplo, para imágenes).</p>", 
        "en" : "<p>The intent of this Success Criterion is to enable people who are deaf or hard of hearing to watch synchronized media presentations. Captions provide the part of the content available via the audio track. Captions not only include dialogue, but identify who is speaking and include non-speech information conveyed through sound, including meaningful sound effects.</p><p>It is acknowledged that at the present time there may be difficulty in creating captions for time-sensitive material and this may result in the author being faced with the choice of delaying the information until captions are available, or publishing time-sensitive content that is inaccessible to the deaf, at least for the interval until captions are available. Over time, the tools for captioning as well as building the captioning into the delivery process can shorten or eliminate such delays.</p><p>Captions are not needed when the synchronized media is, itself, an alternate presentation of information that is also presented via text on the Web page. For example, if information on a page is accompanied by a synchronized media presentation that presents no more information than is already presented in text, but is easier for people with cognitive, language, or learning disabilities to understand, then it would not need to be captioned since the information is already presented on the page in text or in text alternatives (e.g., for images).</p>",
      },
      "benefits" :
      {
        "ca" : "Les persones sordes o amb pèrdua auditiva poden accedir a la informació auditiva del contingut multimèdia sincronitzat mitjançant subtítols.", 
        "es" : "Las personas sordas o con pérdida auditiva pueden acceder a la información auditiva en el contenido multimedia sincronizado a través de subtítulos.", 
        "en" : "People who are deaf or have a hearing loss can access the auditory information in the synchronized media content through captions.",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["audio-video"] 
    },
    
    { // 1.2.3.
      "criteria" : 
      {
        "ca" : "1.2.3 Descripció d'àudio o mitjans alternatius (pregravats)", 
        "es" : "1.2.3 Descripción de audio o medios alternativos (pregrabados)", 
        "en" : "1.2.3 Audio Description or Media Alternative (Prerecorded)",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded", 
      "level" : "A",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Es proporciona una alternativa per als mitjans basats en el temps o la descripció dàudio del contingut de vídeo pregravat per als mitjans sincronitzats, excepte quan els mitjans són una alternativa de mitjans per al text i estan clarament etiquetats com a tals.", 
        "es" : "Se proporciona una alternativa para los medios basados en el tiempo o la descripción de audio del contenido de video pregrabado para los medios sincronizados, excepto cuando los medios son una alternativa de medios para el texto y están claramente etiquetados como tales.", 
        "en" : "An alternative for time-based media or audio description of the prerecorded video content is provided for synchronized media, except when the media is a media alternative for text and is clearly labeled as such.",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest Criteri d'èxit és proporcionar a les persones cegues o amb discapacitat visual accés a la informació visual en una presentació multimèdia sincronitzada. Aquest criteri d'èxit descriu dos enfocaments, qualsevol dels quals es pot utilitzar.</p><p>Un enfocament és proporcionar una descripció d'àudio del contingut del vídeo. L'àudiodescripció augmenta la part d'àudio de la presentació amb la informació necessària quan la part de vídeo no està disponible. Durant les pauses existents en el diàleg, l'àudiodescripció proporciona informació sobre accions, personatges, canvis d'escena i text en pantalla que són importants i que no es descriuen ni es parlen a la banda sonora principal.</p><p>El segon enfocament consisteix a proporcionar tota la informació dels mitjans sincronitzats (tant visuals com auditius) en forma de text. Una alternativa per als mitjans basats en el temps proporciona una descripció en execució de tot el que està passant al contingut multimèdia sincronitzat. L'alternativa per als mitjans de comunicació basats en el temps llegeix alguna cosa com un guió o un llibre. A diferència de l'àudiodescripció, la descripció de la part de vídeo no es limita només a les pauses del diàleg existent. Es proporcionen descripcions completes de tota la informació visual, inclòs el context visual, les accions i expressions dels actors i qualsevol altre material visual. A més, es descriuen sons que no són de parla (rialles, veus fora de la pantalla, etc.) i s'inclouen transcripcions de tots els diàlegs. La seqüència de la descripció i les transcripcions dels diàlegs són la mateixa que la seqüència del propi mitjà sincronitzat. Com a resultat, l'alternativa per als mitjans basats en el temps pot proporcionar una representació molt més completa del contingut multimèdia sincronitzat que només l'àudiodescripció.</p>", 
        "es" : "<p> La intención de este Criterio de cumplimiento es proporcionar a las personas ciegas o con discapacidad visual acceso a la información visual en una presentación multimedia sincronizada. Este Criterio de Conformidad describe dos enfoques, cualquiera de los cuales se puede utilizar. </p> <p> Un enfoque es proporcionar una descripción de audio del contenido del video. La descripción de audio aumenta la parte de audio de la presentación con la información necesaria cuando la parte de video no está disponible. Durante las pausas existentes en el diálogo, la descripción de audio proporciona información sobre acciones, personajes, cambios de escena y texto en pantalla que son importantes y que no se describen ni se pronuncian en la pista de sonido principal. </p> <p> El segundo enfoque implica proporcionar toda la información en los medios sincronizados (tanto visual como auditiva) en forma de texto. Una alternativa para los medios basados en el tiempo proporciona una descripción continua de todo lo que sucede en el contenido de los medios sincronizados. La alternativa para los medios basados en el tiempo es algo así como un guión o un libro. A diferencia de la descripción de audio, la descripción de la parte de video no se limita solo a las pausas en el diálogo existente. Se proporcionan descripciones completas de toda la información visual, incluido el contexto visual, las acciones y expresiones de los actores, y cualquier otro material visual. Además, se describen los sonidos que no son del habla (risas, voces fuera de la pantalla, etc.) y se incluyen las transcripciones de todos los diálogos. La secuencia de la descripción y las transcripciones de los diálogos es la misma que la secuencia en el propio medio sincronizado. Como resultado, la alternativa para los medios basados en el tiempo puede proporcionar una representación mucho más completa del contenido de los medios sincronizados que la descripción de audio por sí sola.</p>", 
        "en" : "<p>The intent of this Success Criterion is to provide people who are blind or visually impaired access to the visual information in a synchronized media presentation. This Success Criterion describes two approaches, either of which can be used.</p><p>One approach is to provide audio description of the video content. The audio description augments the audio portion of the presentation with the information needed when the video portion is not available. During existing pauses in dialogue, audio description provides information about actions, characters, scene changes, and on-screen text that are important and are not described or spoken in the main sound track.</p><p>The second approach involves providing all of the information in the synchronized media (both visual and auditory) in text form. An alternative for time-based media provides a running description of all that is going on in the synchronized media content. The alternative for time-based media reads something like a screenplay or book. Unlike audio description, the description of the video portion is not constrained to just the pauses in the existing dialogue. Full descriptions are provided of all visual information, including visual context, actions and expressions of actors, and any other visual material. In addition, non-speech sounds (laughter, off-screen voices, etc.) are described, and transcripts of all dialogue are included. The sequence of description and dialogue transcripts are the same as the sequence in the synchronized media itself. As a result, the alternative for time-based media can provide a much more complete representation of the synchronized media content than audio description alone.</p>",
      },
      "benefits" :
      {
        "ca" : "Aquest criteri d'èxit pot ajudar algunes persones que tenen dificultats per veure vídeos o altres continguts multimèdia sincronitzats, incloses les persones que tenen dificultats per percebre o entendre imatges en moviment.", 
        "es" : "Este Criterio de Conformidad puede ayudar a algunas personas que tienen dificultades para ver videos u otro contenido multimedia sincronizado, incluidas las personas que tienen dificultades para percibir o comprender imágenes en movimiento.", 
        "en" : "This Success Criterion may help some people who have difficulty watching video or other synchronized media content, including people who have difficulty perceiving or understanding moving images.",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["audio-video"]
    },
    
    { // 1.2.4.
      "criteria" : 
      {
        "ca" : "1.2.4 Subtítols (en directe)", 
        "es" : "1.2.4 Subtítulos (en vivo)", 
        "en" : "1.2.4 Captions (Live)",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#captions-live", 
      "level" : "AA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Es proporcionen subtítols per a tot el contingut dàudio en viu en mitjans sincronitzats.", 
        "es" : "Se proporcionan subtítulos para todo el contenido de audio en vivo en medios sincronizados.", 
        "en" : "Captions are provided for all live audio content in synchronized media.",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest criteri d'èxit és permetre que les persones sordes o amb problemes d'audició vegin presentacions en temps real. Els subtítols proporcionen la part del contingut disponible a través de la pista d'àudio. Els subtítols no només inclouen diàlegs, sinó que també identifiquen qui parla i anoten efectes de so i altres àudios significatius.</p><p>Aquest criteri d'èxit estava pensat per aplicar-se a l'emissió de mitjans sincronitzats i no pretén exigir trucades multimèdia bidireccionals entre dos o més. les persones mitjançant aplicacions web s'han de subtitular independentment de les necessitats dels usuaris. La responsabilitat de proporcionar subtítols recairia en els proveïdors de contingut (els que truca) o en l'amfitrió, i no en l'aplicació.</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es permitir que las personas sordas o con problemas de audición vean presentaciones en tiempo real. Los subtítulos proporcionan la parte del contenido disponible a través de la pista de audio. Los subtítulos no solo incluyen el diálogo, sino que también identifican quién está hablando y anotan efectos de sonido y otro audio significativo. las personas a través de aplicaciones web deben estar subtituladas independientemente de las necesidades de los usuarios. La responsabilidad de proporcionar subtítulos recaería en los proveedores de contenido (las personas que llaman) o en la persona que llama amfitrión, y no en la aplicación.</p>", 
        "en" : "<p>The intent of this Success Criterion is to enable people who are deaf or hard of hearing to watch real-time presentations. Captions provide the part of the content available via the audio track. Captions not only include dialogue, but also identify who is speaking and notate sound effects and other significant audio.</p><p>This success criterion was intended to apply to broadcast of synchronized media and is not intended to require that two-way multimedia calls between two or more individuals through web apps must be captioned regardless of the needs of users. Responsibility for providing captions would fall to the content providers (the callers) or the “host” caller, and not the application.</p>",
      },
      "benefits" :
      {
        "ca" : "Les persones sordes o amb pèrdua auditiva poden accedir a la informació auditiva del contingut multimèdia sincronitzat mitjançant subtítols.", 
        "es" : "Las personas sordas o con pérdida auditiva pueden acceder a la información auditiva en el contenido multimedia sincronizado a través de subtítulos.", 
        "en" : "People who are deaf or have a hearing loss can access the auditory information in the synchronized media content through captions.",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/captions-live.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/captions-live.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["audio-video"]
    },
    
    { // 1.2.5.
      "criteria" : 
      {
        "ca" : "1.2.5 Descripció d'àudio (pregravat)", 
        "es" : "1.2.5 Descripción de audio (pregrabado)", 
        "en" : "1.2.5 Audio Description (Prerecorded)",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#audio-description-prerecorded", 
      "level" : "AA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Es proporciona descripció dàudio per a tot el contingut de vídeo pregravat en mitjans sincronitzats.", 
        "es" : "Se proporciona descripción de audio para todo el contenido de video pregrabado en medios sincronizados.", 
        "en" : "Audio description is provided for all prerecorded video content in synchronized media.",
      },
      "intent" : 
      {
        "ca" : "La intenció d'aquest criteri d'èxit és proporcionar a les persones cegues o amb discapacitat visual accés a la informació visual en una presentació multimèdia sincronitzada. L'àudiodescripció augmenta la part d'àudio de la presentació amb la informació necessària quan la part de vídeo no està disponible. Durant les pauses existents en el diàleg, l'àudiodescripció proporciona informació sobre accions, personatges, canvis d'escena i text en pantalla que són importants i que no es descriuen ni es diuen a la banda sonora principal.", 
        "es" : "La intención de este Criterio de Conformidad es proporcionar a las personas ciegas o con discapacidad visual acceso a la información visual en una presentación multimedia sincronizada. La descripción de audio aumenta la parte de audio de la presentación con la información necesaria cuando la parte de video no está disponible. Durante las pausas existentes en el diálogo, la descripción de audio proporciona información sobre acciones, personajes, cambios de escena y texto en pantalla que son importantes y que no se describen ni se pronuncian en la pista de sonido principal.", 
        "en" : "The intent of this Success Criterion is to provide people who are blind or visually impaired access to the visual information in a synchronized media presentation. The audio description augments the audio portion of the presentation with the information needed when the video portion is not available. During existing pauses in dialogue, audio description provides information about actions, characters, scene changes, and on-screen text that are important and are not described or spoken in the main sound track.",
      },
      "benefits" :
      {
        "ca" : "Les persones cegues o amb baixa visió, així com aquelles amb limitacions cognitives que tenen dificultats per interpretar visualment el que està passant, es beneficien de l'àudiodescripció de la informació visual.", 
        "es" : "Las personas ciegas o con baja visión, así como aquellas con limitaciones cognitivas que tienen dificultades para interpretar visualmente lo que está sucediendo, se benefician de la descripción de audio de la información visual.", 
        "en" : "People who are blind or have low vision as well as those with cognitive limitations who have difficulty interpreting visually what is happening benefit from audio description of visual information.",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["audio-video"]
    },
    
    { // 1.2.6.
      "criteria" : 
      {
        "ca" : "1.2.6 Llenguatge de senyals (pregravat)", 
        "es" : "1.2.6 Lenguaje de señas (pregrabado)", 
        "en" : "1.2.6 Sign Language (Prerecorded)",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#sign-language-prerecorded", 
      "level" : "AAA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Es proporciona interpretació en llenguatge de senyals per a tot el contingut dàudio pregravat en mitjans sincronitzats.", 
        "es" : "Se proporciona interpretación en lenguaje de señas para todo el contenido de audio pregrabado en medios sincronizados.", 
        "en" : "Sign language interpretation is provided for all prerecorded audio content in synchronized media.",
      },
      "intent" : 
      {
        "ca" : "La intenció d'aquest criteri d'èxit és permetre que les persones sordes o amb problemes d'audició i que parlen amb fluïdesa una llengua de signes entenguin el contingut de la pista d'àudio de les presentacions multimèdia sincronitzades. El text escrit, com el que es troba als subtítols, sovint és una segona llengua. Com que la llengua de signes ofereix la capacitat de proporcionar entonació, emoció i altra informació d'àudio que es reflecteix en la interpretació de la llengua de signes, però no en els subtítols, la interpretació de la llengua de signes proporciona un accés més ric i equivalent als mitjans sincronitzats. Les persones que es comuniquen àmpliament en llengua de signes també són més ràpides en llenguatge de signes i els mitjans sincronitzats són una presentació basada en el temps.", 
        "es" : "La intención de este Criterio de Conformidad es permitir que las personas sordas o con problemas de audición y que dominan el lenguaje de señas comprendan el contenido de la pista de audio de las presentaciones multimedia sincronizadas. El texto escrito, como el que se encuentra en los subtítulos, suele ser un segundo idioma. Debido a que el lenguaje de señas brinda la capacidad de proporcionar entonación, emoción y otra información de audio que se refleja en la interpretación del lenguaje de señas, pero no en los subtítulos, la interpretación del lenguaje de señas brinda un acceso más rico y equivalente a los medios sincronizados. Las personas que se comunican ampliamente en lenguaje de señas también son más rápidas en lenguaje de señas y los medios sincronizados son una presentación basada en el tiempo.", 
        "en" : "The intent of this Success Criterion is to enable people who are deaf or hard of hearing and who are fluent in a sign language to understand the content of the audio track of synchronized media presentations. Written text, such as that found in captions, is often a second language. Because sign language provides the ability to provide intonation, emotion and other audio information that is reflected in sign language interpretation, but not in captions, sign language interpretation provides richer and more equivalent access to synchronized media. People who communicate extensively in sign language are also faster in sign language and synchronized media is a time-based presentation.",
      },
      "benefits" :
      {
        "ca" : "Les persones el llenguatge humà de les quals és una llengua de signes de vegades tenen una capacitat de lectura limitada. És possible que aquestes persones no puguin llegir i comprendre els subtítols i, per tant, necessiten una interpretació en llengua de signes per accedir al contingut multimèdia sincronitzat.", 
        "es" : "Las personas cuyo lenguaje humano es un lenguaje de signos a veces tienen una capacidad de lectura limitada. Es posible que estas personas no puedan leer y comprender los subtítulos y, por lo tanto, requieran una interpretación en lenguaje de señas para obtener acceso al contenido de los medios sincronizados.", 
        "en" : "People whose human language is a sign language sometimes have limited reading ability. These individuals may not be able to read and comprehend the captions and thus require a sign language interpretation to gain access to the synchronized media content.",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/sign-language-prerecorded.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/sign-language-prerecorded.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },
    
    { // 1.2.7.
      "criteria" : 
      {
        "ca" : "1.2.7 Descripció d'àudio ampliada (pregravada)", 
        "es" : "1.2.7 Descripción de audio ampliada (pregrabada)", 
        "en" : "1.2.7 Extended Audio Description (Prerecorded)",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#extended-audio-description-prerecorded", 
      "level" : "AAA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Quan les pauses a l'àudio de primer pla són insuficients per permetre que les descripcions d'àudio transmetin el sentit del vídeo, es proporciona una descripció d'àudio estesa per a tot el contingut de vídeo pregravat a mitjans sincronitzats.", 
        "es" : "Cuando las pausas en el audio de primer plano son insuficientes para permitir que las descripciones de audio transmitan el sentido del video, se proporciona una descripción de audio extendida para todo el contenido de video pregrabado en medios sincronizados.", 
        "en" : "Where pauses in foreground audio are insufficient to allow audio descriptions to convey the sense of the video, extended audio description is provided for all prerecorded video content in synchronized media.",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest criteri d'èxit és proporcionar a les persones cegues o amb discapacitat visual l'accés a una presentació multimèdia sincronitzada més enllà del que es pot proporcionar amb una descripció d'àudio estàndard. Això es fa congelant periòdicament la presentació multimèdia sincronitzada i reproduint una descripció d'àudio addicional. Aleshores es reprèn la presentació multimèdia sincronitzada.</p><p>Com que interromp la visualització per a aquells que no necessiten la descripció addicional, sovint es proporcionen tècniques que us permeten activar i desactivar la funció. Alternativament, es poden proporcionar versions amb i sense la descripció addicional.</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es proporcionar a las personas ciegas o con discapacidad visual acceso a una presentación multimedia sincronizada más allá de lo que puede proporcionar una descripción de audio estándar. Esto se hace congelando periódicamente la presentación multimedia sincronizada y reproduciendo una descripción de audio adicional. A continuación, se reanuda la presentación multimedia sincronizada.</p><p>Debido a que interrumpe la visualización para aquellos que no necesitan la descripción adicional, a menudo se proporcionan técnicas que le permiten activar y desactivar la función. Alternativamente, se pueden proporcionar versiones con y sin la descripción adicional.</p>", 
        "en" : "<p>The intent of this Success Criterion is to provide people who are blind or visually impaired access to a synchronized media presentation beyond that which can be provided by standard audio description. This is done by periodically freezing the synchronized media presentation and playing additional audio description. The synchronized media presentation is then resumed.</p><p>Because it disrupts viewing for those who do not need the additional description, techniques that allow you to turn the feature on and off are often provided. Alternately, versions with and without the additional description can be provided.</p>",
      },
      "benefits" :
      {
        "ca" : "Les persones cegues, les persones amb baixa visió que no veuen la pantalla, així com les persones amb limitacions cognitives que tenen dificultats per interpretar visualment el que està succeint, solen utilitzar l'àudiodescripció de la informació visual. Tanmateix, si hi ha massa diàleg, l'àudiodescripció és insuficient. L'àudiodescripció ampliada pot proporcionar la informació addicional necessària per entendre el vídeo.", 
        "es" : "Las personas ciegas, las personas con baja visión que no pueden ver la pantalla, así como las personas con limitaciones cognitivas que tienen dificultades para interpretar visualmente lo que está sucediendo, a menudo utilizan una descripción de audio de la información visual. Sin embargo, si hay demasiado diálogo, la descripción de audio es insuficiente. La descripción de audio ampliada puede proporcionar la información adicional necesaria para comprender el video.", 
        "en" : "People who are blind, people with low vision who cannot see the screen, as well as those with cognitive limitations who have difficulty interpreting visually what is happening, often use audio description of the visual information. However, if there is too much dialogue the audio description is insufficient. Extended audio description can provide the additional information needed to understand the video.",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/extended-audio-description-prerecorded.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/extended-audio-description-prerecorded.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },
    
    { // 1.2.8.
      "criteria" : 
      {
        "ca" : "1.2.8 Mitjans alternatius (pregravats)", 
        "es" : "1.2.8 Medios alternativos (pregrabados)", 
        "en" : "1.2.8 Media Alternative (Prerecorded)",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#media-alternative-prerecorded", 
      "level" : "AAA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Es proporciona una alternativa per als mitjans basats en el temps per a tots els mitjans sincronitzats pregravats i per a tots els mitjans només de vídeo pregravats.", 
        "es" : "Se proporciona una alternativa para los medios basados ​​en el tiempo para todos los medios sincronizados pregrabados y para todos los medios solo de video pregrabados.", 
        "en" : "An alternative for time-based media is provided for all prerecorded synchronized media and for all prerecorded video-only media.",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest criteri d'èxit és posar material audiovisual a disposició de les persones amb una visió massa pobre per llegir els subtítols de manera fiable i amb una audició massa baixa per escoltar de manera fiable el diàleg i l'àudiodescripció. Això es fa proporcionant una alternativa per als mitjans basats en el temps.</p><p>Aquest enfocament implica proporcionar tota la informació dels mitjans sincronitzats (tant visuals com auditius) en forma de text. Una alternativa per als mitjans basats en el temps proporciona una descripció en execució de tot el que està passant al contingut multimèdia sincronitzat. L'alternativa per als mitjans de comunicació basats en el temps llegeix alguna cosa com un llibre. A diferència de l'àudiodescripció, la descripció de la part de vídeo no es limita només a les pauses del diàleg existent. Es proporcionen descripcions completes de tota la informació visual, inclòs el context visual, les accions i expressions dels actors i qualsevol altre material visual. A més, es descriuen sons que no són de parla (rialles, veus fora de la pantalla, etc.) i s'inclouen transcripcions de tots els diàlegs. La seqüència de descripcions i transcripcions de diàlegs és la mateixa que la seqüència dels mitjans sincronitzats. Com a resultat, l'alternativa per als mitjans basats en el temps pot proporcionar una representació molt més completa del contingut multimèdia sincronitzat que només la descripció d'àudio.</p><p>Si hi ha alguna interacció com a part de la presentació multimèdia sincronitzada (p. ex., 'prem ara per respondre el pregunta') aleshores l'alternativa per als mitjans de comunicació basats en el temps proporcionaria hiperenllaços o el que sigui necessari per oferir una funcionalitat paral·lela. mitjans basats en l'ús d'una pantalla braille actualitzable.</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es hacer que el material audiovisual esté disponible para las personas cuya visión es demasiado pobre para leer subtítulos de manera confiable y cuya audición es demasiado pobre para escuchar el diálogo y la descripción de audio de manera confiable. Esto se hace proporcionando una alternativa para los medios basados en el tiempo.</p><p>Este enfoque implica proporcionar toda la información en los medios sincronizados (tanto visual como auditiva) en forma de texto. Una alternativa para los medios basados en el tiempo proporciona una descripción continua de todo lo que sucede en el contenido de los medios sincronizados. La alternativa para los medios basados en el tiempo es algo así como un libro. A diferencia de la descripción de audio, la descripción de la parte de video no se limita solo a las pausas en el diálogo existente. Se proporcionan descripciones completas de toda la información visual, incluido el contexto visual, las acciones y expresiones de los actores, y cualquier otro material visual. Además, se describen los sonidos que no son del habla (risas, voces fuera de la pantalla, etc.) y se incluyen las transcripciones de todos los diálogos. La secuencia de descripciones y transcripciones de diálogos es la misma que la secuencia en el propio medio sincronizado. Como resultado, la alternativa para los medios basados en el tiempo puede proporcionar una representación mucho más completa del contenido de los medios sincronizados que la descripción de audio sola.</p><p>Si hay alguna interacción como parte de la presentación de los medios sincronizados (por ejemplo, 'presione ahora para responder al pregunta') entonces la alternativa para los medios basados en el tiempo proporcionaría hipervínculos o lo que sea necesario para proporcionar una funcionalidad paralela. multimedia basados en el uso de una pantalla braille actualizable.</p>", 
        "en" : "<p>The intent of this Success Criterion is to make audio visual material available to individuals whose vision is too poor to reliably read captions and whose hearing is too poor to reliably hear dialogue and audio description. This is done by providing an alternative for time-based media.</p><p>This approach involves providing all of the information in the synchronized media (both visual and auditory) in text form. An alternative for time-based media provides a running description of all that is going on in the synchronized media content. The alternative for time-based media reads something like a book. Unlike audio description, the description of the video portion is not constrained to just the pauses in the existing dialogue. Full descriptions are provided of all visual information, including visual context, actions and expressions of actors, and any other visual material. In addition, non-speech sounds (laughter, off-screen voices, etc.) are described, and transcripts of all dialogue are included. The sequence of descriptions and dialogue transcripts is the same as the sequence in the synchronized media itself. As a result, the alternative for time-based media can provide a much more complete representation of the synchronized media content than audio description alone.</p><p>If there is any interaction as part of the synchronized media presentation (e.g., 'press now to answer the question') then the alternative for time-based media would provide hyperlinks or whatever is needed to provide parallel functionality.#Individuals whose vision is too poor to reliably read captions and whose hearing is too poor to reliably hear dialogue can access the alternative for time-based media by using a refreshable braille display.</p>",
      },
      "benefits" :
      {
        "ca" : "Les persones que no poden veure bé o gens i que tampoc no poden escoltar bé o gens poden tenir accés a la informació en presentacions audiovisuals.", 
        "es" : "Las personas que no pueden ver bien o en absoluto y que tampoco oyen bien o en absoluto pueden acceder a la información en presentaciones audiovisuales.", 
        "en" : "People who cannot see well or at all and who also cannot hear well or at all can get access to information in audio-visual presentations.",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/media-alternative-prerecorded.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/media-alternative-prerecorded.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },
    
    { // 1.2.9.
      "criteria" : 
      {
        "ca" : "1.2.9 Només àudio (en directe)", 
        "es" : "1.2.9 Solo audio (en vivo)", 
        "en" : "1.2.9 Audio-only (Live)",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#audio-only-live", 
      "level" : "AAA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Es proporciona una alternativa per als mitjans basats en el temps que presenta informació equivalent al contingut de només àudio en viu.", 
        "es" : "Se proporciona una alternativa para los medios basados ​​en el tiempo que presenta información equivalente al contenido de solo audio en vivo.", 
        "en" : "An alternative for time-based media that presents equivalent information for live audio-only content is provided.",
      },
      "intent" : 
      {
        "ca" : "La intenció d'aquest criteri d'èxit és fer que la informació transmesa per àudio en directe, com ara videoconferències, discursos en directe i transmissió web de ràdio, sigui accessible mitjançant l'ús d'una alternativa de text. Un servei de subtítols de text en directe permetrà que l'àudio en directe sigui accessible per a persones sordes o amb dificultats auditives, o que no puguin escoltar l'àudio. Aquests serveis utilitzen un operador humà format que escolta el que es diu i utilitza un teclat especial per introduir el text amb només un petit retard. Són capaços de capturar un esdeveniment en directe amb un alt grau de fidelitat, i també d'inserir notes en qualsevol àudio no parlat que és essencial per entendre l'esdeveniment. De vegades, una transcripció és una possibilitat si l'àudio en directe segueix un guió establert; però es prefereix un servei de subtítols en directe perquè es reprodueix al mateix ritme que l'àudio en si, i es pot adaptar a qualsevol desviació del guió que es pugui produir. no es considera que compleix aquest criteri d'èxit.#Aquest criteri d'èxit s'ha d'aplicar a la difusió d'àudio i no pretén exigir que les trucades d'àudio bidireccionals entre dues o més persones mitjançant aplicacions web s'hagin de subtitular independentment de les necessitats dels usuaris. La responsabilitat de proporcionar subtítols recairia en els proveïdors de contingut (els que truca) o en l''amfitrió', i no en l'aplicació.", 
        "es" : "La intención de este Criterio de Conformidad es hacer que la información transmitida por audio en vivo, como videoconferencias, discursos en vivo y transmisiones por Internet de radio, sea accesible mediante el uso de una alternativa de texto. Un servicio de subtítulos de texto en vivo permitirá que el audio en vivo sea accesible para las personas sordas o con problemas de audición, o que de otra manera no pueden escuchar el audio. Dichos servicios utilizan un operador humano capacitado que escucha lo que se dice y usa un teclado especial para ingresar el texto con solo un pequeño retraso. Pueden capturar un evento en vivo con un alto grado de fidelidad, y también insertar notas en cualquier audio no hablado que es esencial para comprender el evento. Una transcripción es a veces una posibilidad si el audio en vivo sigue un guión establecido; pero se prefiere un servicio de subtítulos en vivo porque se reproduce al mismo ritmo que el audio y puede adaptarse a cualquier desviación del guión que pueda ocurrir. No se considerará que cumple con este Criterio de cumplimiento. # Este criterio de cumplimiento se diseñó para aplicarse a la transmisión de audio y no requiere que las llamadas de audio bidireccionales entre dos o más personas a través de aplicaciones web deban estar subtituladas independientemente de las necesidades de los usuarios. La responsabilidad de proporcionar subtítulos recaería en los proveedores de contenido (las personas que llaman) o en la persona que llama 'anfitriona', y no en la aplicación.", 
        "en" : "The intent of this Success Criterion is to make information conveyed by live audio, such as video conferencing, live speeches and radio Webcasts, accessible through the use of a text alternative. A live text caption service will enable live audio to be accessible to people who are deaf or hard of hearing, or who cannot otherwise hear the audio. Such services use a trained human operator who listens in to what is being said and uses a special keyboard to enter the text with only a small delay. They are able to capture a live event with a high degree of fidelity, and also to insert notes on any non spoken audio which is essential to understanding the event. A transcript is sometimes a possibility if the live audio is following a set script; but a live caption service is preferred because it plays out at the same pace as the audio itself, and can adapt to any deviations from the script that might occur.#Using untrained operators, or providing a transcript which differs markedly from what actually happens would not be considered meeting this Success Criterion.#This success criterion was intended to apply to broadcast of audio and is not intended to require that two-way audio calls between two or more individuals through web apps must be captioned regardless of the needs of users. Responsibility for providing captions would fall to the content providers (the callers) or the “host” caller, and not the application.",
      },
      "benefits" :
      {
        "ca" : "", 
        "es" : "", 
        "en" : "",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/audio-only-live.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/audio-only-live.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },
    
    { // 1.3.1.
      "criteria" : 
      {
        "ca" : "1.3.1 Informació i relacions", 
        "es" : "1.3.1 Información y relaciones", 
        "en" : "1.3.1 Info and Relationships",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#info-and-relationships", 
      "level" : "A",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Quan la seqüència en què es presenta el contingut afecta el seu significat, es pot determinar mitjançant programació una seqüència de lectura correcta.", 
        "es" : "Cuando la secuencia en la que se presenta el contenido afecta su significado, se puede determinar mediante programación una secuencia de lectura correcta.", 
        "en" : "When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest Criteri d'èxit és garantir que la informació i les relacions implicades pel format visual o auditiu es preservin quan canvia el format de presentació. Per exemple, el format de presentació canvia quan el contingut és llegit per un lector de pantalla o quan un full d'estil d'usuari es substitueix pel full d'estil proporcionat per l'autor.</p><p>Els usuaris vidents perceben l'estructura i les relacions a través de diversos indicis visuals: els encapçalaments solen estar en una font més gran i en negreta, separats dels paràgrafs per línies en blanc; els elements de la llista estan precedits d'una vinyeta i potser amb sagnat; els paràgrafs estan separats per una línia en blanc; els elements que comparteixen una característica comuna s'organitzen en files i columnes tabulars; els camps de formulari es poden posicionar com a grups que comparteixen etiquetes de text; es pot utilitzar un color de fons diferent per indicar que diversos elements estan relacionats entre si; les paraules que tenen un estatus especial s'indiquen canviant la família de tipus de lletra i/o en negreta, cursiva o subratllant-les; Els elements que comparteixen una característica comuna s'organitzen en una taula on la relació de les cel·les que comparteixen la mateixa fila o columna i la relació de cada cel·la amb la seva fila i/o capçalera de columna són necessàries per entendre'ls; etcètera. Tenir aquestes estructures i aquestes relacions determinades programàticament o disponibles al text garanteix que la informació important per a la comprensió serà perceptible per a tothom.</p><p>També es poden utilitzar senyals auditius. Per exemple, un timbre pot indicar l'inici d'una nova secció; es pot utilitzar un canvi en el to de la veu o la velocitat de la parla per emfatitzar informació important o per indicar el text citat; etc.</p><p>Quan aquestes relacions són perceptibles per a un conjunt d'usuaris, aquestes relacions es poden fer que siguin perceptibles per a tots. Un mètode per determinar si la informació s'ha proporcionat correctament o no a tots els usuaris és accedir a la informació en sèrie en diferents modalitats.</p><p>Si els enllaços a elements del glossari s'implementen mitjançant elements d'ancoratge (o l'element d'enllaç adequat per a la tecnologia en ús) i s'identifiquen amb una font diferent, un usuari de lector de pantalla escoltarà que l'element és un enllaç quan es trobi el terme del glossari encara que és possible que no rebin informació sobre el canvi de font. Un catàleg en línia pot indicar preus utilitzant una font més gran de color vermell. Un lector de pantalla o una persona que no pot percebre el vermell, encara té la informació sobre el preu sempre que vagi precedida del símbol de la moneda.</p><p>Algunes tecnologies no proporcionen un mitjà per determinar programàticament alguns tipus d'informació i relacions. En aquest cas, hauria d'haver una descripció de text de la informació i les relacions. Per exemple, 'tots els camps obligatoris estan marcats amb un asterisc (*)'. La descripció del text ha d'estar a prop de la informació que està descrivint (quan la pàgina està linealitzada), com ara a l'element pare o a l'element adjacent.</p><p>També hi pot haver casos en què pot ser una crida de judici sobre si les relacions s'han de determinar programàticament o presentar-se en text. No obstant això, quan les tecnologies donen suport a les relacions programàtiques, es recomana fermament que la informació i les relacions es determinin programàticament en lloc de descriure's en el text.</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es garantizar que la información y las relaciones implícitas en el formato visual o auditivo se conserven cuando cambie el formato de la presentación. Por ejemplo, el formato de la presentación cambia cuando un lector de pantalla lee el contenido o cuando se sustituye la hoja de estilo proporcionada por el autor por una hoja de estilo del usuario.</p><p>Los usuarios videntes perciben la estructura y las relaciones a través de varias señales visuales: los encabezados suelen estar en una fuente más grande y en negrita separados de los párrafos por líneas en blanco; los elementos de la lista están precedidos por una viñeta y tal vez sangrados; los párrafos están separados por una línea en blanco; los elementos que comparten una característica común se organizan en filas y columnas tabulares; los campos de formulario se pueden colocar como grupos que comparten etiquetas de texto; se puede utilizar un color de fondo diferente para indicar que varios elementos están relacionados entre sí; las palabras que tienen un estatus especial se indican cambiando la familia de fuentes y/o poniéndolas en negrita, cursiva o subrayadas; los elementos que comparten una característica común se organizan en una tabla donde la relación de las celdas que comparten la misma fila o columna y la relación de cada celda con su encabezado de fila y/o columna son necesarias para la comprensión; y así. Tener estas estructuras y estas relaciones determinadas programáticamente o disponibles en el texto asegura que la información importante para la comprensión sea perceptible para todos.</p><p>También se pueden usar señales auditivas. Por ejemplo, un timbre podría indicar el comienzo de una nueva sección; se puede usar un cambio en el tono de voz o la velocidad del habla para enfatizar información importante o para indicar texto citado; etc</p><p>Cuando tales relaciones son perceptibles para un conjunto de usuarios, esas relaciones pueden hacerse perceptibles para todos. Un método para determinar si la información se ha proporcionado correctamente o no a todos los usuarios es acceder a la información en serie en diferentes modalidades.</p><p>Si los enlaces a elementos del glosario se implementan mediante elementos de anclaje (o el elemento de enlace adecuado para la tecnología en uso) y se identifican con una fuente diferente, un usuario de lector de pantalla escuchará que el elemento es un enlace cuando se encuentra el término del glosario aunque es posible que no reciban información sobre el cambio en la fuente. Un catálogo en línea puede indicar los precios usando una fuente más grande de color rojo. Un lector de pantalla o una persona que no puede percibir el rojo, todavía tiene la información sobre el precio siempre que esté precedida por el símbolo de la moneda.</p><p>Algunas tecnologías no proporcionan un medio para determinar mediante programación algunos tipos de información y relaciones. En ese caso, debe haber una descripción de texto de la información y las relaciones. Por ejemplo, 'todos los campos obligatorios están marcados con un asterisco (*)'. La descripción del texto debe estar cerca de la información que describe (cuando la página está linealizada), como en el elemento principal o en el elemento adyacente.</p><p>También puede haber casos en los que puede ser un juicio en cuanto a si las relaciones deben determinarse programáticamente o presentarse en texto. Sin embargo, cuando las tecnologías respaldan las relaciones programáticas, se recomienda encarecidamente que la información y las relaciones se determinen programáticamente en lugar de describirlas en el texto.</p>", 
        "en" : "<p>The intent of this Success Criterion is to ensure that information and relationships that are implied by visual or auditory formatting are preserved when the presentation format changes. For example, the presentation format changes when the content is read by a screen reader or when a user style sheet is substituted for the style sheet provided by the author.</p><p>Sighted users perceive structure and relationships through various visual cues — headings are often in a larger, bold font separated from paragraphs by blank lines; list items are preceded by a bullet and perhaps indented; paragraphs are separated by a blank line; items that share a common characteristic are organized into tabular rows and columns; form fields may be positioned as groups that share text labels; a different background color may be used to indicate that several items are related to each other; words that have special status are indicated by changing the font family and /or bolding, italicizing, or underlining them; items that share a common characteristic are organized into a table where the relationship of cells sharing the same row or column and the relationship of each cell to its row and/or column header are necessary for understanding; and so on. Having these structures and these relationships programmatically determined or available in text ensures that information important for comprehension will be perceivable to all.</p><p>Auditory cues may be used as well. For example, a chime might indicate the beginning of a new section; a change in voice pitch or speech rate may be used to emphasize important information or to indicate quoted text; etc.</p><p>When such relationships are perceivable to one set of users, those relationships can be made to be perceivable to all. One method of determining whether or not information has been properly provided to all users is to access the information serially in different modalities.</p><p>If links to glossary items are implemented using anchor elements (or the proper link element for the technology in use) and identified using a different font face, a screen reader user will hear that the item is a link when the glossary term is encountered even though they may not receive information about the change in font face. An on-line catalog may indicate prices using a larger font colored red. A screen reader or person who cannot perceive red, still has the information about the price as long as it is preceded by the currency symbol.</p><p>Some technologies do not provide a means to programmatically determine some types of information and relationships. In that case then there should be a text description of the information and relationships. For instance, 'all required fields are marked with an asterisk (*)'. The text description should be near the information it is describing (when the page is linearized), such as in the parent element or in the adjacent element.</p><p>There may also be cases where it may be a judgment call as to whether the relationships should be programmatically determined or be presented in text. However, when technologies support programmatic relationships, it is strongly encouraged that information and relationships be programmatically determined rather than described in text.</p>",
      },
      "benefits" :
      {
        "ca" : "<ul><li>Aquest criteri d'èxit ajuda les persones amb diferents discapacitats permetent als agents d'usuari adaptar el contingut segons les necessitats dels usuaris individuals.</li><li>Els usuaris cecs (utilitzant un lector de pantalla) es beneficien quan la informació transmesa a través del color també està disponible en text (incloses alternatives de text per a imatges que utilitzen el color per transmetre informació).</li><li>És possible que els usuaris sordcecs que utilitzen pantalles actualitzables en braille (text) no puguin accedir a la informació depenent del color.</li></ul>", 
        "es" : "<ul><li>Este Criterio de Conformidad ayuda a las personas con diferentes discapacidades al permitir que los agentes de usuario adapten el contenido de acuerdo con las necesidades de los usuarios individuales.</li><li>Los usuarios ciegos (que usan un lector de pantalla) se benefician cuando la información transmitida a través del color también está disponible en texto (incluidas las alternativas de texto para imágenes que usan color para transmitir información).</li><li>Es posible que los usuarios sordociegos que utilizan pantallas actualizables braille (texto) no puedan acceder a la información que depende del color.</li></ul>", 
        "en" : "<ul><li>This Success Criterion helps people with different disabilities by allowing user agents to adapt content according to the needs of individual users.</li><li>Users who are blind (using a screen reader) benefit when information conveyed through color is also available in text (including text alternatives for images that use color to convey information).</li><li>Users who are deaf-blind using braille (text) refreshable displays may be unable to access color-dependent information.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["content"]
    },
    
    { // 1.3.2.
      "criteria" : 
      {
        "ca" : "1.3.2 Seqüència significativa", 
        "es" : "1.3.2 Secuencia significativa", 
        "en" : "1.3.2 Meaningful Sequence",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#meaningful-sequence", 
      "level" : "A",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Quan la seqüència en què es presenta el contingut afecta el seu significat, es pot determinar mitjançant programació una seqüència de lectura correcta.", 
        "es" : "Cuando la secuencia en la que se presenta el contenido afecta su significado, se puede determinar mediante programación una secuencia de lectura correcta.", 
        "en" : "When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest criteri d'èxit és permetre que un agent d'usuari proporcioni una presentació alternativa del contingut tot conservant l'ordre de lectura necessari per comprendre el significat. És important que sigui possible determinar programàticament almenys una seqüència del contingut que tingui sentit. El contingut que no compleix aquest Criteri d'èxit pot confondre o desorientar els usuaris quan la tecnologia d'assistència llegeix el contingut en un ordre incorrecte, o quan s'apliquen fulls d'estil alternatius o altres canvis de format.</p><p>Una seqüència té sentit si l'ordre del contingut de la seqüència no es pot canviar sense afectar-ne el significat. Per exemple, si una pàgina conté dos articles independents, l'ordre relatiu dels articles pot no afectar el seu significat, sempre que no estiguin entrellaçats. En aquesta situació, els articles en si mateixos poden tenir una seqüència significativa, però el contenidor que conté els articles pot no tenir una seqüència significativa.</p><p>La semàntica d'alguns elements defineix si el seu contingut és o no una seqüència significativa. Per exemple, en HTML, el text és sempre una seqüència significativa. Les taules i les llistes ordenades són seqüències significatives, però les llistes no ordenades no ho són.</p><p>L'ordre del contingut en una seqüència no sempre és significatiu. Per exemple, l'ordre relatiu de la secció principal d'una pàgina web i d'una secció de navegació no afecta el seu significat. Poden ocórrer en qualsevol ordre en la seqüència de lectura determinada programadament. Com a altre exemple, un article de revista conté diverses barres laterals de text destacat. L'ordre de l'article i les barres laterals no afecta el seu significat. En aquests casos, hi ha una sèrie d'ordres de lectura diferents per a una pàgina web que poden satisfer el Criteri d'èxit.</p><p>Per a més claredat:</p><ol><li>Proporcionar un ordre lineal particular només és necessari quan afecta el significat.</li><li>Pot haver-hi més d'un ordre que sigui 'correcte' (segons la definició WCAG 2.0).</li><li>Només cal proporcionar una comanda correcta.</li></ol>", 
        "es" : "<p>La intención de este Criterio de Conformidad es permitir que un agente de usuario proporcione una presentación alternativa del contenido mientras conserva el orden de lectura necesario para comprender el significado. Es importante que sea posible determinar programáticamente al menos una secuencia del contenido que tenga sentido. El contenido que no cumple con este Criterio de Conformidad puede confundir o desorientar a los usuarios cuando la tecnología de asistencia lee el contenido en el orden incorrecto, o cuando se aplican hojas de estilo alternativas u otros cambios de formato.</p><p>Una secuencia es significativa si el orden del contenido de la secuencia no se puede cambiar sin afectar su significado. Por ejemplo, si una página contiene dos artículos independientes, es posible que el orden relativo de los artículos no afecte su significado, siempre que no estén intercalados. En tal situación, los propios artículos pueden tener una secuencia significativa, pero el contenedor que contiene los artículos puede no tener una secuencia significativa.</p><p>La semántica de algunos elementos define si su contenido es o no una secuencia significativa. Por ejemplo, en HTML, el texto siempre es una secuencia significativa. Las tablas y las listas ordenadas son secuencias significativas, pero las listas desordenadas no lo son.</p><p>El orden del contenido en una secuencia no siempre es significativo. Por ejemplo, el orden relativo de la sección principal de una página web y una sección de navegación no afecta su significado. Podrían ocurrir en cualquier orden en la secuencia de lectura determinada mediante programación. Como otro ejemplo, un artículo de revista contiene varias barras laterales de llamadas. El orden del artículo y las barras laterales no afecta su significado. En estos casos, hay varios órdenes de lectura diferentes para una página web que pueden satisfacer el Criterio de Conformidad.</p><p>Para mayor claridad:</p><ol><li>Solo se requiere proporcionar un orden lineal particular cuando afecta el significado.</li><li>Puede haber más de un pedido que sea 'correcto' (según la definición de WCAG 2.0).</li><li>Solo se debe proporcionar un pedido correcto.</li></ol>", 
        "en" : "<p>The intent of this Success Criterion is to enable a user agent to provide an alternative presentation of content while preserving the reading order needed to understand the meaning. It is important that it be possible to programmatically determine at least one sequence of the content that makes sense. Content that does not meet this Success Criterion may confuse or disorient users when assistive technology reads the content in the wrong order, or when alternate style sheets or other formatting changes are applied.</p><p>A sequence is meaningful if the order of content in the sequence cannot be changed without affecting its meaning. For example, if a page contains two independent articles, the relative order of the articles may not affect their meaning, as long as they are not interleaved. In such a situation, the articles themselves may have meaningful sequence, but the container that contains the articles may not have a meaningful sequence.</p><p>The semantics of some elements define whether or not their content is a meaningful sequence. For instance, in HTML, text is always a meaningful sequence. Tables and ordered lists are meaningful sequences, but unordered lists are not.</p><p>The order of content in a sequence is not always meaningful. For example, the relative order of the main section of a Web page and a navigation section does not affect their meaning. They could occur in either order in the programmatically determined reading sequence. As another example, a magazine article contains several callout sidebars. The order of the article and the sidebars does not affect their meaning. In these cases there are a number of different reading orders for a Web page that can satisfy the Success Criterion.</p><p>For clarity:</p><ol><li>Providing a particular linear order is only required where it affects meaning.</li><li>There may be more than one order that is 'correct' (according to the WCAG 2.0 definition).</li><li>Only one correct order needs to be provided.</li></ol>",
      },
      "benefits" :
      {
        "ca" : "Aquest criteri d'èxit pot ajudar les persones que confien en tecnologies d'assistència que llegeixen contingut en veu alta. El significat evident en la seqüenciació de la informació a la presentació per defecte serà el mateix quan el contingut es presenti de forma oral.", 
        "es" : "Este Criterio de Conformidad puede ayudar a las personas que dependen de tecnologías de asistencia que leen contenido en voz alta. El significado evidente en la secuencia de la información en la presentación predeterminada será el mismo cuando el contenido se presente en forma hablada.", 
        "en" : "This Success Criterion may help people who rely on assistive technologies that read content aloud. The meaning evident in the sequencing of the information in the default presentation will be the same when the content is presented in spoken form.",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["structure"]
    },
    
    { // 1.3.3.
      "criteria" : 
      {
        "ca" : "1.3.3 Característiques sensorials", 
        "es" : "1.3.3 Características sensoriales", 
        "en" : "1.3.3 Sensory Characteristics",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#sensory-characteristics", 
      "level" : "A",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Les instruccions proporcionades per comprendre i operar el contingut no es basen únicament en les característiques sensorials dels components, com ara la forma, el color, la mida, la ubicació visual, l'orientació o el so.", 
        "es" : "Las instrucciones proporcionadas para comprender y operar el contenido no se basan únicamente en las características sensoriales de los componentes, como la forma, el color, el tamaño, la ubicación visual, la orientación o el sonido.", 
        "en" : "Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, color, size, visual location, orientation, or sound.",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest Criteri d'èxit és garantir que tots els usuaris puguin accedir a les instruccions per utilitzar el contingut, fins i tot quan no poden percebre la forma o la mida o utilitzar informació sobre la ubicació o l'orientació espacial. Alguns continguts es basen en el coneixement de la forma o la posició dels objectes que no estan disponibles a l'estructura del contingut (per exemple, 'botó rodó' o 'botó a la dreta'). Alguns usuaris amb discapacitat no són capaços de percebre la forma o la posició a causa de la naturalesa de les tecnologies d'assistència que utilitzen. Aquest criteri d'èxit requereix que es proporcioni informació addicional per aclarir qualsevol cosa que depengui d'aquest tipus d'informació.</p><p>Proporcionar informació mitjançant la forma i/o la ubicació, però, és un mètode eficaç per a molts usuaris, inclosos aquells amb limitacions cognitives. Aquesta disposició no hauria de desanimar aquest tipus de pistes, sempre que la informació també es proporcioni d'altres maneres.</p><p>En alguns idiomes, s'entén habitualment que 'a dalt' fa referència al contingut anterior a aquest punt del contingut i 'a sota' es refereix al contingut posterior a aquest punt. En aquests idiomes, si el contingut al qual es fa referència es troba al lloc adequat de l'ordre de lectura i les referències són inequívoques, afirmacions com ara 'trieu un dels enllaços següents' o 'tots els anteriors' s'ajustarien a aquest Criteri d'èxit.</p><p>WCAG va ser dissenyat per aplicar-se només als controls que es mostraven en una pàgina web. La intenció era evitar la descripció dels controls només mitjançant referències a indicis visuals o auditius. Quan s'aplica això a les instruccions per operar els controls físics del maquinari (per exemple, un quiosc web amb contingut dedicat), es poden descriure indicis tàctils del maquinari (per exemple, la tecla en forma de fletxa, la tecla rodona del costat dret). Aquest criteri d'èxit no pretén evitar l'ús de senyals tàctils a les instruccions.</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es garantizar que todos los usuarios puedan acceder a las instrucciones para usar el contenido, incluso cuando no puedan percibir la forma o el tamaño o usar información sobre la ubicación espacial o la orientación. Algunos contenidos se basan en el conocimiento de la forma o la posición de los objetos que no están disponibles en la estructura del contenido (por ejemplo, 'botón redondo' o 'botón a la derecha'). Algunos usuarios con discapacidades no pueden percibir la forma o la posición debido a la naturaleza de las tecnologías de asistencia que utilizan. Este Criterio de Conformidad requiere que se proporcione información adicional para aclarar cualquier cosa que dependa de este tipo de información.</p><p>Sin embargo, proporcionar información utilizando la forma y/o la ubicación es un método eficaz para muchos usuarios, incluidos aquellos con limitaciones cognitivas. Esta disposición no debería desalentar esos tipos de señales siempre que la información también se proporcione de otras maneras.</p><p>En algunos idiomas, se entiende comúnmente que 'arriba' se refiere al contenido anterior a ese punto en el contenido y 'abajo' se refiere al contenido después de ese punto. En dichos idiomas, si el contenido al que se hace referencia está en el lugar apropiado en el orden de lectura y las referencias no son ambiguas, afirmaciones como 'elija uno de los enlaces a continuación' o 'todos los anteriores' se ajustarían a este Criterio de Conformidad.</p><p>WCAG se diseñó para aplicarse solo a los controles que se mostraban en una página web. La intención era evitar describir los controles únicamente a través de referencias a señales visuales o auditivas. Al aplicar esto a las instrucciones para operar controles físicos de hardware (p. ej., un quiosco web con contenido dedicado), se pueden describir señales táctiles en el hardware (p. ej., la tecla con forma de flecha, la tecla redonda en el lado derecho). Este criterio de éxito no pretende evitar el uso de señales táctiles en las instrucciones.</p>", 
        "en" : "<p>The intent of this Success Criterion is to ensure that all users can access instructions for using the content, even when they cannot perceive shape or size or use information about spatial location or orientation. Some content relies on knowledge of the shape or position of objects that are not available from the structure of the content (for example, 'round button' or 'button to the right'). Some users with disabilities are not able to perceive shape or position due to the nature of the assistive technologies they use. This Success Criterion requires that additional information be provided to clarify anything that is dependent on this kind of information.</p><p>Providing information using shape and/or location, however, is an effective method for many users including those with cognitive limitations. This provision should not discourage those types of cues as long as the information is also provided in other ways.</p><p>In some languages, it is commonly understood that 'above' refers to the content previous to that point in the content and 'below' refers to the content after that point. In such languages, if the content being referenced is in the appropriate place in the reading order and the references are unambiguous, statements such as 'choose one of the links below' or 'all of the above' would conform to this Success Criterion.</p><p>WCAG was designed to apply only to controls that were displayed on a web page. The intent was to avoid describing controls solely via references to visual or auditory cues. When applying this to instructions for operating physical hardware controls (e.g. a web kiosk with dedicated content), tactile cues on the hardware might be described (e.g. the arrow shaped key, the round key on the right side). This success criterion is not intended to prevent the use of tactile cues in instructions.</p>",
      },
      "benefits" :
      {
        "ca" : "Les persones cegues i les persones amb baixa visió poden no ser capaços d'entendre la informació si es transmet per forma i/o ubicació. Proporcionar informació addicional que no sigui la forma i/o la ubicació els permetrà entendre la informació que es transmet per forma i/o sols.", 
        "es" : "Es posible que las personas ciegas y las personas con problemas de visión no puedan comprender la información si se transmite por forma y/o ubicación. Proporcionar información adicional además de la forma y/o la ubicación les permitirá comprender la información transmitida por la forma y/o solo.", 
        "en" : "People who are blind and people who have low vision may not be able to understand information if it is conveyed by shape and/or location. Providing additional information other than shape and/or location will allow them to understand the information conveyed by shape and/or alone.",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["content"]
    },
    
    { // 1.3.4.
      "criteria" : 
      {
        "ca" : "1.3.4 Orientació", 
        "es" : "1.3.4 Orientación", 
        "en" : "1.3.4 Orientation",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#orientation", 
      "level" : "AA",
      "version" : "2.1", 
      "goal" : 
      {
        "ca" : "El contingut no restringeix la seva visualització i funcionament a una única orientació de visualització, com a vertical o horitzontal, llevat que sigui essencial una orientació de visualització específica.", 
        "es" : "El contenido no restringe su visualización y funcionamiento a una única orientación de visualización, como vertical u horizontal, a menos que sea esencial una orientación de visualización específica.", 
        "en" : "Content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is essential.",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest criteri d'èxit és garantir que el contingut es mostri en l'orientació (vertical o horitzontal) preferida per l'usuari. Alguns llocs web i aplicacions configuren i restringeixen automàticament la pantalla a una orientació de visualització concreta i esperen que els usuaris responguin girant el dispositiu perquè coincideixi, però això pot crear problemes. Alguns usuaris tenen els seus dispositius muntats en una orientació fixa (per exemple, al braç d'una cadira de rodes elèctrica). Per tant, els llocs web i les aplicacions han d'admetre ambdues orientacions sense restringir l'orientació. Els canvis de contingut o de funcionalitat deguts a la mida de la pantalla no estan coberts per aquest criteri que se centra en les restriccions d'orientació.</p><p>Històricament, els dispositius solien tenir una pantalla d'orientació fixa i tot el contingut es va crear per coincidir amb aquesta orientació de la pantalla. Avui en dia, la majoria de dispositius portàtils i molts altres dispositius (per exemple, monitors) tenen una capacitat de maquinari per ajustar dinàmicament l'orientació de la pantalla predeterminada en funció de la informació del sensor. L'objectiu d'aquest criteri d'èxit és que els autors mai han de restringir l'orientació del contingut, garantint així que sempre coincideixi amb l'orientació de visualització del dispositiu.</p><p>És important distingir entre la responsabilitat de l'autor de no restringir el contingut a una orientació específica i la configuració específica del dispositiu que regeix el bloqueig de l'orientació de la pantalla.</p><p>Molts dispositius de mà ofereixen un interruptor mecànic o una configuració del sistema (o tots dos) per permetre a l'usuari bloquejar la pantalla del dispositiu a una orientació específica. Quan un usuari decideix bloquejar tot el seu dispositiu a una orientació, s'espera que totes les aplicacions adoptin aquesta configuració i mostrin el contingut en conseqüència.</p><p>Aquest criteri d'èxit complementa la configuració d''orientació de bloqueig' del dispositiu. Una pàgina web que no restringeixi la seva orientació de visualització sempre admetrà la configuració d'orientació a nivell de sistema, ja que la configuració del sistema la recull l'agent d'usuari. Alternativament, si no hi ha cap bloqueig d'orientació a nivell de dispositiu, l'agent d'usuari hauria de mostrar la pàgina segons l'orientació del dispositiu (ja sigui per defecte o l'orientació actual determinada pels sensors del dispositiu).</p><p>L'excepció de les coses considerades essencials s'adreça a situacions en què el contingut només s'entendria en una determinada orientació, o en què la tecnologia restringeix les possibles orientacions. Si el contingut està dirigit a un entorn específic que només està disponible en una orientació (com ara un televisor), el contingut pot restringir l'orientació. Tecnologies com la realitat virtual utilitzen pantalles dins d'ulleres que no poden canviar l'orientació respecte als ulls de l'usuari.</p>", 
        "en" : "<p>The intent of this Success Criterion is to ensure that content displays in the orientation (portrait or landscape) preferred by the user. Some websites and applications automatically set and restrict the screen to a particular display orientation and expect that users will respond by rotating their device to match, but this can create problems. Some users have their devices mounted in a fixed orientation (e.g. on the arm of a power wheelchair). Therefore, websites and applications need to support both orientations by not restricting the orientation. Changes in content or functionality due to the size of display are not covered by this criterion which is focused on restrictions of orientation.</p><p>Historically, devices tended to have a fixed-orientation display, and all content was created to match that display orientation. Today, most handhelds and many other devices (e.g., monitors) have a hardware-level ability to dynamically adjust default display orientation based on sensor information. The goal of this Success Criterion is that authors should never restrict content's orientation, thus ensuring that it always match the device display orientation.</p><p>It is important to distinguish between an author's responsibility not to restrict content to a specific orientation, and device-specific settings governing the locking of display orientation.</p><p>Many hand-held devices offer a mechanical switch or a system setting (or both) to allow the user to lock the device display to a specific orientation. Where a user decides to lock their entire device to an orientation, all applications are expected to pick up that setting and to display content accordingly.</p><p>This Success Criterion complements device 'lock orientation' settings. A web page that does not restrict its display orientation will always support the system-level orientation setting, since the system setting is picked up by the user agent. Alternatively, where a device-level orientation lock is not in place, the user agent should display the page according to the orientation of the device (either its default, or the current orientation determined by any device sensors).</p><p>The exception for things considered essential is aimed at situations where the content would only be understood in a particular orientation, or where the technology restricts the possible orientations. If content is aimed at a specific environment which is only available in one orientation (such as a television) then the content can restrict the orientation. Technologies such as virtual reality use screens within goggles that cannot change orientation relative to the user's eyes.</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es garantizar que el contenido se muestre en la orientación (vertical u horizontal) preferida por el usuario. Algunos sitios web y aplicaciones configuran y restringen automáticamente la pantalla a una orientación de visualización particular y esperan que los usuarios respondan girando su dispositivo para que coincida, pero esto puede crear problemas. Algunos usuarios tienen sus dispositivos montados en una orientación fija (por ejemplo, en el brazo de una silla de ruedas eléctrica). Por lo tanto, los sitios web y las aplicaciones deben admitir ambas orientaciones al no restringir la orientación. Los cambios en el contenido o la funcionalidad debido al tamaño de la pantalla no están cubiertos por este criterio que se centra en las restricciones de orientación.</p><p>Históricamente, los dispositivos tendían a tener una pantalla de orientación fija y todo el contenido se creaba para coincidir con esa orientación de pantalla. Hoy en día, la mayoría de los dispositivos portátiles y muchos otros dispositivos (por ejemplo, monitores) tienen una capacidad a nivel de hardware para ajustar dinámicamente la orientación predeterminada de la pantalla en función de la información del sensor. El objetivo de este Criterio de Conformidad es que los autores nunca deben restringir la orientación del contenido, asegurando así que siempre coincida con la orientación de visualización del dispositivo.</p><p>Es importante distinguir entre la responsabilidad del autor de no restringir el contenido a una orientación específica y la configuración específica del dispositivo que rige el bloqueo de la orientación de la pantalla.</p><p>Muchos dispositivos portátiles ofrecen un interruptor mecánico o una configuración del sistema (o ambos) para permitir que el usuario bloquee la pantalla del dispositivo en una orientación específica. Cuando un usuario decide bloquear todo su dispositivo a una orientación, se espera que todas las aplicaciones adopten esa configuración y muestren el contenido en consecuencia.</p><p>Este Criterio de Conformidad complementa la configuración de 'orientación de bloqueo' del dispositivo. Una página web que no restringe su orientación de visualización siempre admitirá la configuración de orientación a nivel del sistema, ya que la configuración del sistema la selecciona el agente de usuario. Alternativamente, cuando no se haya implementado un bloqueo de orientación a nivel de dispositivo, el agente de usuario debe mostrar la página de acuerdo con la orientación del dispositivo (ya sea su orientación predeterminada o la orientación actual determinada por los sensores del dispositivo).</p><p>La excepción de las cosas consideradas esenciales está dirigida a situaciones donde el contenido sólo se entendería en una determinada orientación, o donde la tecnología restringe las posibles orientaciones. Si el contenido está dirigido a un entorno específico que solo está disponible en una orientación (como un televisor), entonces el contenido puede restringir la orientación. Tecnologías como la realidad virtual usan pantallas dentro de gafas que no pueden cambiar la orientación en relación con los ojos del usuario.</p>",
      },
      "benefits" :
      {
        "ca" : "<ul><li>Els usuaris amb problemes de destresa, que tinguin un dispositiu muntat, podran utilitzar el contingut en la seva orientació fixa.</li><li>Els usuaris amb baixa visió podran veure el contingut amb l'orientació que els funcioni millor, per exemple, per augmentar la mida del text visualitzant el contingut en horitzontal.</li></ul>", 
        "es" : "<ul><li>Los usuarios con problemas de destreza que tengan un dispositivo montado podrán usar el contenido en su orientación fija.</li><li>Los usuarios con problemas de visión podrán ver el contenido en la orientación que más les convenga, por ejemplo, para aumentar el tamaño del texto viendo el contenido en formato horizontal.</li></ul>", 
        "en" : "<ul><li>Users with dexterity impairments, who have a mounted device will be able to use the content in their fixed orientation.</li><li>Users with low-vision will be able to view content in the orientation that works best for them, for example to increase the text size by viewing content in landscape.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/orientation.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/orientation.html#techniques",
      "verification" :
      {
        "ca" : "<p>Objectiu: aconseguir que es pugui visualitzar i operar amb tots els continguts en qualsevol tipus d'orientació de la pantalla (p.ex. en vertical o en horitzontal), excepte si es considera essencial una orientació específica.</p> <p>No hi ha zones amb les que no es pugui operar o que no es mostrin en qualsevol de les configuracions dorientació del dispositiu.</p>", 
        "es" : "<p>Objetivo: lograr que se pueda visualizar y operar con todos los contenidos en cualquier tipo de orientación de la pantalla (p.ej. en vertical o en horizontal), excepto si se considera como esencial una orientación específica.</p><p>No deben existir zonas con las que no se pueda operar o que no se muestren en cualquiera de las configuraciones de orientación del dispositivo.</p>", 
        "en" : "<p>Goal: to make it possible to view and operate all content in any type of screen orientation (eg portrait or landscape), except if a specific orientation is considered essential.</p> <p>There should be no zones that cannot be operated or displayed in any of the device orientation settings.</p>",
      }, 
      "tools" :
      {
        "ca" : "<p>Nom de l'eina: Inspector de codi font del navegador</p><p>Procediment de comprovació:</p><ol><li>Usant l'eina d'inspecció de codi del navegador:<ul><li >A Chrome, feu clic al botó “Toggle device toolbar” de la part superior esquerra</li><li>Al Firefox, feu clic al botó “Vista de disseny adaptable” de la part superior dreta</li></ul ></li><li>A la finestra on es visualitza la pàgina, apareix a la part superior uns camps on es pot modificar la resolució per imitar el comportament d'un dispositiu. Si feu clic sobre l'element ressaltat en vermell, la visualització s'intercanvia entre disposició horitzontal i vertical.</li><li>Una vegada realitzats els passos anteriors, cal comprovar que es poden visualitzar totes les funcionalitats tant en horitzontal com en vertical. </li></ol>", 
        "es" : "<p>Nombre de la herramienta: Inspector de código fuente del navegador</p><p>Procedimiento de comprobación:</p><ol><li>Usando la herramienta de inspección de código del navegador:<ul><li>En Chrome, pulsar en el botón “Toggle device toolbar” de la parte superior izquierda</li><li>En Firefox, pulsar en el botón “Vista de diseño adaptable” de la parte superior derecha</li></ul></li><li>En la ventana donde se visualiza la página, aparece en la parte superior unos campos en los que se puede modificar la resolución para imitar el comportamiento de un dispositivo. Si se pulsa sobre el elemento resaltado en rojo, la visualización se intercambia entre disposición horizontal y vertical.</li><li>Una vez realizados los pasos anteriores, debe comprobarse que se pueden visualizar todas las funcionalidades tanto en horizontal como en vertical.</li></ol>", 
        "en" : "<p>Tool name: Browser Source Code Inspector</p><p>Checking procedure:</p><ol><li>Using the Browser Source Code Inspection Tool:<ul><li >In Chrome, click the “Toggle device toolbar” button on the top left</li><li>In Firefox, click the “Responsive Layout View” button on the top right</li></ul ></li><li>In the window where the page is displayed, some fields appear at the top in which the resolution can be modified to imitate the behavior of a device. If you click on the element highlighted in red, the display switches between horizontal and vertical layout.</li><li>Once the previous steps have been carried out, you must check that all the functionalities can be displayed both horizontally and vertically. </li></ol>",
      },
      "category" : ["structure"]
    },
    
    { // 1.3.5.
      "criteria" : 
      {
        "ca" : "1.3.5 Identificar el propòsit d'entrada", 
        "es" : "1.3.5 Identificar el propósito de entrada", 
        "en" : "1.3.5 Identify Input Purpose",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#identify-input-purpose", 
      "level" : "AA",
      "version" : "2.1", 
      "goal" : 
      {
        "ca" : "El propòsit de cada camp d'entrada que recopila informació sobre l'usuari es pot determinar mitjançant la programació quan:<ul><li>El camp d'entrada té un propòsit identificat a la secció Propòsits d'entrada per als components de la interfície d'usuari; i</li><li>El contingut s'implementa utilitzant tecnologies amb suport per identificar el significat esperat per a les dades d'entrada del formulari.</li></ul>", 
        "es" : "El propósito de cada campo de entrada que recopila información sobre el usuario se puede determinar mediante programación cuando:<ul><li>El campo de entrada tiene un propósito identificado en la sección Propósitos de entrada para los componentes de la interfaz de usuario; y</li><li>El contenido se implementa utilizando tecnologías con soporte para identificar el significado esperado para los datos de entrada del formulario.</li></ul>",
        "en" : "The purpose of each input field collecting information about the user can be programmatically determined when:<ul><li>The input field serves a purpose identified in the Input Purposes for User Interface Components section; and</li><li>The content is implemented using technologies with support for identifying the expected meaning for form input data.</li></ul>",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest Criteri d'èxit és garantir que el propòsit d'una entrada de formulari que recull informació sobre l'usuari es pugui determinar mitjançant programació, de manera que els agents d'usuari puguin extreure i presentar aquest propòsit als usuaris mitjançant diferents modalitats. La capacitat de declarar de manera programàtica el tipus específic de dades que s'espera en un camp concret facilita l'ompliment de formularis, especialment per a persones amb discapacitats cognitives.</p><p>Les etiquetes visibles i les instruccions adequades poden ajudar els usuaris a entendre el propòsit dels camps d'entrada del formulari, però els usuaris poden beneficiar-se de que els camps que recullen tipus específics d'informació es mostrin d'una manera inequívoca, coherent i possiblement personalitzada per a diferents modalitats, ja sigui per defecte en els seus agent d'usuari, o mitjançant l'ajuda de tecnologies d'assistència.</p><p>Per a alguns camps d'entrada, l'atribut type ja ofereix una manera d'especificar àmpliament la intenció del camp d'entrada, per exemple, input type='tel', input type='email' o input type='password'. Tanmateix, només es tracta de categories molt àmplies, que descriuen el tipus d'entrada, però no necessàriament la seva finalitat, especialment pel que fa als camps d'entrada específics de l'usuari. Com a exemple, type='email' indica que el camp és per a una adreça de correu electrònic, però no aclareix si la finalitat és introduir l'adreça de correu electrònic de l'usuari o el correu electrònic d'una altra persona.</p><p>Aquest criteri d'èxit defineix els tipus de propòsits d'entrada dels components de la interfície d'usuari, que es troben a la Secció 7 de la Recomanació WCAG 2.1 , que han de ser identificables programadament. Quan aquests propòsits d'entrada de l'usuari estan presents, i si la tecnologia admet fer-ho, el propòsit de camp ha de ser identificable programadament.</p><p>L'atribut d'autocompletar HTML només accepta un nombre determinat de valors fixos ben definits específics. Això permet una definició o identificació més precisa de la finalitat que l'atribut type, per exemple, permetent a l'autor especificar un tipus de nom específic: Nom (autocomplete='name'), Given Name (autocomplete='given-name'), Nom de família (autocomplete='nom de família'), així com Nom d'usuari (autocomplete='nom d'usuari') i Àlies (completar automàticament='àlies').</p><p>En adoptar i reutilitzar aquesta taxonomia predefinida de definicions, els agents d'usuari i les tecnologies d'assistència ara poden presentar el propòsit de les entrades als usuaris en diferents modalitats. Per exemple, les tecnologies d'assistència poden mostrar icones familiars al costat dels camps d'entrada per ajudar els usuaris que tenen dificultats per llegir. Es pot mostrar una icona d'un pastís d'aniversari davant d'un camp d'entrada amb autocomplete='bday', o la icona d'un telèfon davant d'un camp d'entrada amb autocomplete='tel'.</p><p>A més de reutilitzar aquesta taxonomia, quan s'utilitza la tècnica d'atribut d'emplenament automàtic per complir aquest criteri d'èxit, els navegadors i altres agents d'usuari poden suggerir i 'emplenar automàticament' el contingut correcte emplenant automàticament aquests camps en funció de les entrades anteriors de l'usuari emmagatzemades al navegador. En definir definicions més granulars de propòsits d'entrada habituals, per exemple, 'aniversari' (completar automàticament = 'bday'), els navegadors poden emmagatzemar valors personalitzats per a cadascun d'aquests camps (data d'aniversari de l'usuari). L'usuari se sent alleugerit d'haver d'escriure la informació i pot confirmar o, si cal, canviar el valor del camp, un avantatge significatiu per als usuaris amb problemes de memòria, dislèxia i altres discapacitats.</p><p>Si un camp d'entrada accepta dos tipus diferents de propòsit d'entrada (com en els camps combinats de nom d'usuari/correu electrònic d'usuari) i la tecnologia utilitzada no permet definir valors de propòsit múltiple, és vàlid proporcionar un valor o l'altre o deixar de banda. la designació del propòsit d'entrada en conjunt.</p><p>Quan l'agent d'usuari i el suport de tecnologia d'assistència per a altres formats de metadades maduren, es poden utilitzar esquemes de metadades com el mòdul de contingut semàntic de personalització a més o en lloc de l'atribut d'autocompletar HTML per identificar la finalitat dels camps d'entrada. També poden suportar adaptacions automatitzades que identifiquen i sincronitzen les etiquetes d'entrada proporcionades per l'autor amb vocabularis o símbols definits que s'utilitzen en el seu lloc per etiquetar les entrades.</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es garantizar que el propósito de una entrada de formulario que recopile información sobre el usuario pueda determinarse mediante programación, de modo que los agentes de usuario puedan extraer y presentar este propósito a los usuarios utilizando diferentes modalidades. La capacidad de declarar mediante programación el tipo específico de datos esperados en un campo en particular facilita el llenado de formularios, especialmente para las personas con discapacidades cognitivas.</p><p>Las etiquetas e instrucciones visibles apropiadas pueden ayudar a los usuarios a comprender el propósito de los campos de entrada de formulario, pero los usuarios pueden beneficiarse de tener campos que recopilan tipos específicos de información que se representan de una manera inequívoca, coherente y posiblemente personalizada para diferentes modalidades, ya sea a través de valores predeterminados en sus agente de usuario, o mediante la ayuda de tecnologías de asistencia.</p><p>Para algunos campos de entrada, el atributo de tipo ya ofrece una forma de especificar ampliamente la intención del campo de entrada, por ejemplo, tipo de entrada='tel', tipo de entrada='correo electrónico' o tipo de entrada='contraseña'. Sin embargo, estas son solo categorías muy amplias, que describen el tipo de entrada, pero no necesariamente su propósito, especialmente en lo que se refiere a los campos de entrada específicos del usuario. Como ejemplo, type='email' indica que el campo es para una dirección de correo electrónico pero no aclara si el propósito es ingresar la dirección de correo electrónico del usuario o el correo electrónico de alguna otra persona.</p><p>Este criterio de éxito define los tipos de propósitos de entrada del componente de la interfaz de usuario, que se encuentran en la Sección 7 de la Recomendación WCAG 2.1 , que deben ser identificables mediante programación. Cuando estos propósitos de entrada del usuario están presentes, y si la tecnología lo permite, el propósito del campo debe ser identificable mediante programación.</p><p>El atributo de autocompletar de HTML solo acepta un cierto número de valores fijos específicos bien definidos. Esto permite una definición o identificación de propósito más detallada que el atributo de tipo, por ejemplo, al permitir que el autor especifique un tipo específico de nombre: Nombre (autocomplete='nombre'), Nombre (autocomplete='nombre'), Apellido (autocompletar='nombre-de-familia'), así como Nombre de usuario (autocompletar='nombre de usuario') y Apodo (autocompletar='apodo').</p><p>Al adoptar y reutilizar esta taxonomía predefinida de definiciones, los agentes de usuario y las tecnologías de asistencia ahora pueden presentar el propósito de las entradas a los usuarios en diferentes modalidades. Por ejemplo, las tecnologías de asistencia pueden mostrar íconos familiares junto a los campos de entrada para ayudar a los usuarios que tienen dificultades para leer. Se puede mostrar un icono de un pastel de cumpleaños delante de un campo de entrada con autocompletar='cumpleaños', o el icono de un teléfono delante de un campo de entrada con autocompletar='tel'.</p><p>Además de reutilizar esta taxonomía, cuando se usa la técnica de atributo de autocompletar para cumplir con este Criterio de Conformidad, los navegadores y otros agentes de usuario pueden sugerir y 'autocompletar' el contenido correcto completando automáticamente estos campos en función de la entrada del usuario anterior almacenada en el navegador. Al definir definiciones más granulares de propósitos de entrada comunes, por ejemplo, 'Cumpleaños' (autocompletar = 'cumpleaños'), los navegadores pueden almacenar valores personalizados para cada uno de estos campos (la fecha de cumpleaños del usuario). El usuario se libera de tener que escribir la información y, en cambio, puede confirmar o, si es necesario, cambiar el valor del campo, un beneficio significativo para los usuarios con problemas de memoria, dislexia y otras discapacidades.</p><p>Si un campo de entrada acepta dos tipos diferentes de propósito de entrada (como en los campos combinados de nombre de usuario/correo electrónico de usuario) y la tecnología utilizada no permite definir valores de propósitos múltiples, es válido proporcionar uno u otro valor o dejar de lado la designación del propósito de entrada en conjunto.</p><p>Cuando la compatibilidad con el agente de usuario y la tecnología de asistencia para otros formatos de metadatos madura, se pueden usar esquemas de metadatos como el Módulo de contenido de semántica de personalización además o en lugar del atributo de autocompletar HTML para identificar el propósito de los campos de entrada. También pueden admitir adaptaciones automatizadas que identifican y relacionan las etiquetas de entrada proporcionadas por el autor con vocabularios o símbolos definidos que se utilizan en su lugar para etiquetar las entradas.</p>", 
        "en" : "<p>The intent of this Success Criterion is to ensure that the purpose of a form input collecting information about the user can be programmatically determined, so that user agents can extract and present this purpose to users using different modalities. The ability to programmatically declare the specific kind of data expected in a particular field makes filling out forms easier, especially for people with cognitive disabilities.</p><p>Appropriate visible labels and instruction can help users understand the purpose of form input fields, but users may benefit from having fields that collect specific types of information be rendered in an unambiguous, consistent, and possibly customized way for different modalities - either through defaults in their user agent, or through the aid of assistive technologies.</p><p>For some input fields, the type attribute already offers a way to broadly specify the intention of the input field, for example, input type='tel', input type='email', or input type='password'. However, these are only very broad categories, describing the type of input, but not necessarily its purpose, especially as it relates to user-specific input fields. As an example, type='email' indicates that the field is for an e-mail address but does not clarify if the purpose is for entering the user's e-mail address or some other person's e-mail.</p><p>his success criterion defines the types of user interface component input purposes, found in Section 7 of the WCAG 2.1 Recommendation, that must be programmatically identifiable. When these user input purposes are present, and if the technology supports doing so, the field purpose must be programmatically identifiable.</p><p>This success criterion defines the types of user interface component input purposes, found in Section 7 of the WCAG 2.1 Recommendation, that must be programmatically identifiable. When these user input purposes are present, and if the technology supports doing so, the field purpose must be programmatically identifiable.</p><p>The HTML autocomplete attribute only accepts a certain number of specific well-defined fixed values. This allows a more fine-grained definition or identification of purpose than the type attribute, for example, by allowing the author to specify a specific type of name: Name (autocomplete='name'), Given Name (autocomplete='given-name'), Family Name (autocomplete='family-name'), as well as Username (autocomplete='username'), and Nickname (autocomplete='nickname').</p><p>By adopting and repurposing this predefined taxonomy of definitions, user agents and assistive technologies can now present the purpose of the inputs to users in different modalities. For example, assistive technologies may display familiar icons next to input fields to help users who have difficulties reading. An icon of a birthday cake may be shown in front of an input field with autocomplete='bday', or the icon of a telephone in front of an input field with autocomplete='tel'.</p><p>In addition to repurposing this taxonomy, when the autocomplete attribute technique is used to meet this Success Criterion, browsers and other user-agents can suggest and 'autofill' the right content by autocompleting these fields based on past user input stored in the browser. By defining more granular definitions of common input purposes, for example “Birthday” (autocomplete=”bday”), browsers can store personalized values for each of these fields (the user's birthday date). The user is relieved of having to type the information and can instead confirm or, if needed, change the value of the field, a significant benefit for users with memory issues, dyslexia, and other disabilities. Because the autocomplete values are independent of language, users that may not be familiar with the text used to visually identify user input fields (the label) can still have that purpose consistently identified to them due to the fixed taxonomy of terms.</p><p>If an input field accepts two different types of input purpose (as in combined user name/user email fields) and the technology used does not allow multiple purpose values to be defined, it is valid to provide either one or the other value or leave out the designation of input purpose altogether.</p><p>When the user agent and assistive technology support for other metadata formats matures, metadata schemes like the Personalization Semantics Content Module may be used in addition or instead of the HTML autocomplete attribute to identify the purpose of input fields. They can also support automated adaptations that identify and match author-provided input labels to defined vocabularies or symbols that are used instead for labelling inputs.</p>",
      },
      "benefits" :
      {
        "ca" : "<ul><li>Les persones amb discapacitats relacionades amb el llenguatge i la memòria o les discapacitats que afecten la funció executiva i la presa de decisions es beneficien de la informació personal d'emplenament automàtic del navegador (com ara el nom o l'adreça) quan s'utilitza l'atribut d'emplenament automàtic per complir aquest criteri d'èxit, la qual cosa significa que la informació no han de ser recordats per l'usuari.</li><li>Les persones amb paràlisi cerebral, ictus, lesions al cap, malalties de la neurona motora o discapacitat d'aprenentatge de vegades prefereixen imatges per a la comunicació. Poden utilitzar tecnologia d'assistència que afegeix icones als camps d'entrada per comunicar visualment el propòsit dels camps.</li><li>Les persones amb discapacitat motriu també es beneficien de reduir la necessitat d'introduir manualment a l'hora d'omplir formularis.</li></ul>", 
        "es" : "<ul><li>Las personas con discapacidad motora también se benefician de la reducción de la necesidad de entrada manual al completar formularios.</li><li>Las personas con discapacidad motora también se benefician de la reducción de la necesidad de entrada manual al completar formularios.</li><li>Las personas con discapacidad motora también se benefician de la reducción de la necesidad de entrada manual al completar formularios.</li></ul>", 
        "en" : "<ul><li>People with language and memory related disabilities or disabilities that affects executive function and decision-making benefit from the browser auto-filling personal information (such as name or address) when the autocomplete attribute is used to meet this Success Criterion, which means information does not need to be remembered by the user.</li><li>People with cerebral palsy, stroke, head injury, motor neuron disease or learning disability sometimes prefer images for communication. They can employ assistive technology which adds icons to input fields to communicate the purpose of the fields visually.</li><li>People with motor impairments also benefit from reducing the need for manual input when filling out forms.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html#techniques",
      "verification" :
      {
        "ca" : "<p>Objectiu: identificar el propòsit dels camps d'introducció de dades de manera que es pugui determinar automàticament la finalitat dels que sol·liciten informació sobre les persones.</p><p>S'ha d'incorporar algun mètode perquè el navegador pugui determinar automàticament el tipus de dades requerit</p>", 
        "es" : "<p>Objetivo: identificar el propósito de los campos de introducción de datos de forma que se pueda determinar automáticamente la finalidad de aquellos que solicitan información acerca de las personas.</p><p>Debe incorporarse algún método para que el navegador pueda determinar automáticamente el tipo de datos requerido</p>", 
        "en" : "<p>Goal: to identify the purpose of data entry fields so that the purpose of those requesting information about people can be automatically determined.</p><p>Some method must be incorporated so that the browser can automatically determine the required data type</p>",
      }, 
      "tools" :
      {
        "ca" : "<p>Nom de l'eina: Web Developer Toolbar</p><p>Procediment de comprovació:</p><ol><li>Seleccionar “Forms - Display form details”.</li><li>Localitzar els camps de formulari que sol·liciten informació sobre les persones.</li><li>Verificar que tenen l'atribut “autocomplet” amb un valor d'acord amb el seu propòsit, segons els criteris establerts a WCAG 2.1.7. Section 7: Input Purposes for User Interface Components.</li></ol>", 
        "es" : "<p>Nombre de la herramienta: Web Developer Toolbar</p><p>Procedimiento de comprobación:</p><ol><li>Seleccionar “Forms - Display form details”.</li><li>Localizar los campos de formulario que solicitan información acerca de las personas.</li><li>Verificar que tienen el atributo “autocomplete” con un valor acorde a su propósito, según los criterios establecidos en WCAG 2.1 7. Section 7: Input Purposes for User Interface Components.</li></ol>", 
        "en" : "<p>Tool name: Web Developer Toolbar</p><p>Check procedure:</p><ol><li>Select “Forms - Display form details”.</li><li>Locate the form fields that request information about people.</li><li>Verify that they have the “autocomplete” attribute with a value according to their purpose, according to the criteria established in WCAG 2.1.7. Section 7: Input Purposes for User Interface Components.</li></ol>",
      },
      "category" : ["forms-and-UI"]
    },
    
    { // 1.3.6.
      "criteria" : 
      {
        "ca" : "1.3.6 Identificar el Propòsit", 
        "es" : "1.3.6 Identificar Propósito", 
        "en" : "1.3.6 Identify Purpose",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#identify-purpose", 
      "level" : "AAA",
      "version" : "2.1", 
      "goal" : 
      {
        "ca" : "Al contingut implementat mitjançant llenguatges de marcatge, el propòsit dels components, icones i regions de la interfície d'usuari es pot determinar mitjançant programació.", 
        "es" : "En el contenido implementado mediante lenguajes de marcado, el propósito de los componentes, iconos y regiones de la interfaz de usuario se puede determinar mediante programación.", 
        "en" : "In content implemented using markup languages, the purpose of User Interface Components, icons, and regions can be programmatically determined.",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest criteri d'èxit és garantir que el propòsit de molts elements d'una pàgina es pugui determinar mitjançant programació, de manera que els agents d'usuari puguin extreure i presentar aquest propòsit als usuaris mitjançant diferents modalitats.</p><p>Molts usuaris amb vocabulari limitat es basen en termes o símbols coneguts per utilitzar el web. No obstant això, el que és familiar per a un usuari pot no ser conegut per a un altre. Quan els autors indiquen el propòsit, els usuaris poden aprofitar la personalització i les preferències de l'usuari per carregar un conjunt de símbols o vocabulari conegut.</p><p>Aquest Criteri d'èxit requereix que l'autor associ programàticament el propòsit de les icones, les regions i els components (com ara botons, enllaços i camps) perquè els agents d'usuari puguin determinar el propòsit de cadascun i adaptar els indicadors o la terminologia perquè siguin comprensibles per a l'usuari. S'aconsegueix afegint semàntica o metadades que proporcionen aquest context. És semblant a afegir informació sobre el rol (com exigeix la 4.2.1), però en comptes de proporcionar informació sobre què és el component de la interfície d'usuari (com ara una imatge), proporciona informació sobre què representa el component (com ara un enllaç a la pàgina d'inici).</p><p>La identificació de regions de la pàgina permet a les persones eliminar o destacar regions amb el seu agent d'usuari.</p><p>Els productes per a persones que no són vocals sovint utilitzen símbols per ajudar els usuaris a comunicar-se. Aquests símbols són de fet el llenguatge de la gent. Malauradament, molts d'aquests símbols estan subjectes a drets d'autor i no són interoperables. Això vol dir que els usuaris finals només poden utilitzar un dispositiu i no poden utilitzar contingut, aplicacions o tecnologies d'assistència que no hagin estat creats per una sola empresa.</p><p>Aquest criteri d'èxit permet que els símbols siguin interoperables perquè els usuaris de símbols puguin entendre contingut diferent que no només ha estat creat per una empresa. Quan els símbols dels usuaris s'assignen als mateixos nodes, els agents d'usuari poden carregar el símbol comprensible per l'usuari. Aleshores, la gent pot comprar els símbols i utilitzar-los en diferents dispositius o aplicacions. (Tingueu en compte que els símbols encara serien propietaris, però llavors podrien ser interoperables.)</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es garantizar que el propósito de muchos elementos en una página se pueda determinar mediante programación, de modo que los agentes de usuario puedan extraer y presentar ese propósito a los usuarios utilizando diferentes modalidades.</p><p>Muchos usuarios con vocabularios limitados confían en términos o símbolos familiares para usar la web. Sin embargo, lo que es familiar para un usuario puede no serlo para otro. Cuando los autores indican el propósito, los usuarios pueden aprovechar la personalización y las preferencias del usuario para cargar un conjunto de símbolos o vocabulario familiar para ellos.</p><p>Este Criterio de Conformidad requiere que el autor asocie mediante programación el propósito de íconos, regiones y componentes (como botones, enlaces y campos) para que los agentes de usuario puedan determinar el propósito de cada uno y adaptar indicadores o terminología para hacerlos comprensibles para el usuario. Se logra agregando semántica o metadatos que proporcionan este contexto. Es similar a agregar información de roles (como lo requiere 4.2.1), pero en lugar de proporcionar información sobre qué es el componente de la interfaz de usuario (como una imagen), proporciona información sobre lo que representa el componente (como un enlace a la página de inicio).</p><p>La identificación de regiones de la página permite a las personas eliminar o resaltar regiones con su agente de usuario.</p><p>Los productos para personas que no hablan a menudo usan símbolos para ayudar a los usuarios a comunicarse. Estos símbolos son, de hecho, el lenguaje de las personas. Desafortunadamente, muchos de estos símbolos están sujetos a derechos de autor y no son interoperables. Eso significa que los usuarios finales solo pueden usar un dispositivo y no pueden usar contenido, aplicaciones o tecnologías de asistencia que no hayan sido creados por una sola empresa.</p><p>Este Criterio de Conformidad permite que los símbolos sean interoperables para que los usuarios de símbolos puedan comprender diferentes contenidos que no fueron creados por una sola empresa. Cuando los símbolos de los usuarios se asignan a los mismos nodos, los agentes de usuario pueden cargar el símbolo comprensible para el usuario. Luego, las personas pueden comprar los símbolos y usarlos en diferentes dispositivos o aplicaciones. (Tenga en cuenta que los símbolos seguirían siendo propietarios, pero luego podrían ser interoperables).</p>", 
        "en" : "<p>The intent of this Success Criterion is to ensure that the purpose of many elements on a page can be programmatically determined, so that user agents can extract and present that purpose to users using different modalities.</p><p>Many users with limited vocabularies rely on familiar terms or symbols in order to use the web. However, what is familiar to one user may not be familiar to another. When authors indicate the purpose, users can take advantage of personalization and user preferences to load a set of symbols or vocabulary familiar to them.</p><p>This Success Criterion requires the author to programmatically associate the purpose of icons, regions and components (such as buttons, links, and fields) so that user agents can determine the purpose of each and adapt indicators or terminology to make them understandable for the user. It is achieved by adding semantics or metadata that provide this context.</p><p>Identifying regions of the page allows people to remove or highlight regions with their user agent.</p><p>Products for people who are non-vocal often use symbols to help users communicate. These symbols are in fact people's language. Unfortunately, many of these symbols are both subject to copyright and not interoperable. That means end users can only use one device, and cannot use content, apps, or assistive technologies that have not been made by a single company.</p><p>This Success Criterion enables symbols to be interoperable so that symbol users can understand different content that was not just made by one company. When users' symbols are mapped to the same nodes, then user agents can load the user-understandable symbol. People can then buy the symbols and use them across different devices or applications. (Note that the symbols would still be proprietary, but they could then be interoperable.)</p>",
      },
      "benefits" :
      {
        "ca" : "<ul><li>Memòria</li><li>Concentració i atenció</li><li>Relacionat amb la llengua</li><li>Funció executiva i presa de decisions.</li></ul>El compliment d'aquest criteri d'èxit ajuda els usuaris que necessiten suport addicional o una interfície familiar, inclosa la necessitat de:<ul><li>Símbols i gràfics que els usuaris estan familiaritzats</li><li>Menys funcions i menys sobrecàrrega cognitiva</li><li>Dreceres de teclat</li></ul>", 
        "es" : "<ul><li>Memoria</li><li>Enfoque y atención</li><li>Relacionado con el idioma</li><li>Función ejecutiva y toma de decisiones.</li></ul>Cumplir este Criterio de Conformidad ayuda a los usuarios que necesitan soporte adicional o una interfaz familiar, incluida la necesidad de:<ul><li>Símbolos y gráficos con los que los usuarios están familiarizados</li><li>Menos funciones y menos sobrecarga cognitiva</li><li>Atajos de teclado</li></ul>", 
        "en" : "People who benefit have many different cognitive disabilities including:<ul><li>Memory.</li><li>Focus and attention.</li><li>Language-related.</li><li>Executive function and decision making.</li></ul>Meeting this Success Criterion helps users who need extra support or a familiar interface, including the need for:<ul><li>Symbols and graphics with which users are familiar.</li><li>Fewer features and less cognitive overload.</li><li>Keyboard shortcuts</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },
    
    { // 1.4.1.
      "criteria" : 
      {
        "ca" : "1.4.1 Ús del color", 
        "es" : "1.4.1 Uso del color", 
        "en" : "1.4.1 Use of Color",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#use-of-color", 
      "level" : "A",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "El color no es fa servir com a únic mitjà visual per transmetre informació, indicar una acció, provocar una resposta o distingir un element visual.", 
        "es" : "El color no se utiliza como el único medio visual para transmitir información, indicar una acción, provocar una respuesta o distinguir un elemento visual.", 
        "en" : "Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest Criteri d'èxit és garantir que tots els usuaris puguin accedir a la informació que es transmet per diferències de color, és a dir, mitjançant l'ús de color on cada color té un significat assignat. Si la informació es transmet mitjançant diferències de color en una imatge (o un altre format que no sigui de text), és possible que els usuaris amb deficiències de color no vegin el color. En aquest cas, proporcionar la informació que es transmet amb color mitjançant un altre mitjà visual garanteix que els usuaris que no veuen el color encara puguin percebre la informació.</p><p>El color és un actiu important en el disseny de contingut web, millorant el seu atractiu estètic, la seva usabilitat i la seva accessibilitat. Tanmateix, alguns usuaris tenen dificultats per percebre el color. Les persones amb visió parcial sovint experimenten una visió del color limitada i molts usuaris grans no veuen bé el color. A més, les persones que utilitzin pantalles i navegadors de només text, de color limitat o monocroms no podran accedir a la informació que es presenta només en color.</p><p>Exemples d'informació transmesa per diferències de color: 'els camps obligatoris són vermells', 'l'error es mostra en vermell' i 'Les vendes de Mary són en vermell, les de Tom són en blau'. Alguns exemples d'indicacions d'una acció inclouen: utilitzar el color per indicar que s'obrirà un enllaç en una finestra nova o que una entrada de la base de dades s'ha actualitzat correctament. Un exemple de sol·licitar una resposta seria: utilitzar el ressaltat als camps del formulari per indicar que un camp obligatori s'ha deixat en blanc.</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es garantizar que todos los usuarios puedan acceder a la información que se transmite mediante diferencias de color, es decir, mediante el uso de colores donde cada color tiene un significado asignado. Si la información se transmite a través de diferencias de color en una imagen (u otro formato que no sea texto), es posible que los usuarios con deficiencias de color no vean el color. En este caso, proporcionar la información transmitida con color a través de otro medio visual garantiza que los usuarios que no pueden ver el color aún puedan percibir la información.</p><p>El color es un activo importante en el diseño de contenido web, ya que mejora su atractivo estético, su facilidad de uso y su accesibilidad. Sin embargo, algunos usuarios tienen dificultad para percibir el color. Las personas con visión parcial a menudo experimentan una visión limitada de los colores y muchos usuarios mayores no ven bien los colores. Además, las personas que utilizan pantallas y navegadores de solo texto, colores limitados o monocromáticos no podrán acceder a la información que se presenta solo en color.</p><p>Ejemplos de información transmitida por diferencias de color: 'los campos obligatorios están en rojo', 'el error se muestra en rojo' y 'las ventas de Mary están en rojo, las de Tom están en azul'. Ejemplos de indicaciones de una acción incluyen: usar color para indicar que un enlace se abrirá en una nueva ventana o que una entrada de la base de datos se actualizó correctamente.</p>", 
        "en" : "<p>La intención de este Criterio de Conformidad es garantizar que todos los usuarios puedan acceder a la información que se transmite mediante diferencias de color, es decir, mediante el uso de colores donde cada color tiene un significado asignado. Si la información se transmite a través de diferencias de color en una imagen (u otro formato que no sea texto), es posible que los usuarios con deficiencias de color no vean el color. En este caso, proporcionar la información transmitida con color a través de otro medio visual garantiza que los usuarios que no pueden ver el color aún puedan percibir la información.</p><p>El color es un activo importante en el diseño de contenido web, ya que mejora su atractivo estético, su facilidad de uso y su accesibilidad. Sin embargo, algunos usuarios tienen dificultad para percibir el color. Las personas con visión parcial a menudo experimentan una visión limitada de los colores y muchos usuarios mayores no ven bien los colores. Además, las personas que utilizan pantallas y navegadores de solo texto, colores limitados o monocromáticos no podrán acceder a la información que se presenta solo en color.</p><p>Ejemplos de información transmitida por diferencias de color: 'los campos obligatorios están en rojo', 'el error se muestra en rojo' y 'las ventas de Mary están en rojo, las de Tom están en azul'. Ejemplos de indicaciones de una acción incluyen: usar color para indicar que un enlace se abrirá en una nueva ventana o que una entrada de la base de datos se actualizó correctamente.</p>",
      },
      "benefits" :
      {
        "ca" : "<ul><li>Els usuaris amb visió parcial sovint experimenten una visió del color limitada.</li><li>És possible que alguns usuaris més grans no puguin veure bé el color.</li><li>Els usuaris que tenen daltonisme es beneficien quan la informació transmesa pel color està disponible d'altres maneres visuals.</li><li>És possible que les persones que utilitzen pantalles de només text, color limitat o monocrom no puguin accedir a la informació que depèn del color.</li><li>Els usuaris que tinguin problemes per distingir entre colors poden buscar o escoltar senyals de text.</li><li>Les persones que utilitzen pantalles Braille o altres interfícies tàctils poden detectar senyals de text mitjançant el tacte.</li></ul>", 
        "es" : "<ul><li>Los usuarios con visión parcial a menudo experimentan una visión de color limitada.</li><li>Es posible que algunos usuarios mayores no puedan ver bien el color.</li><li>Los usuarios que tienen daltonismo se benefician cuando la información transmitida por el color está disponible de otras formas visuales.</li><li>Es posible que las personas que utilizan pantallas monocromáticas, de color limitado o de solo texto no puedan acceder a la información que depende del color.</li><li>Los usuarios que tienen problemas para distinguir entre colores pueden mirar o escuchar las señales de texto.</li><li>Las personas que usan pantallas Braille u otras interfaces táctiles pueden detectar señales de texto al tacto.</li></ul>", 
        "en" : "<ul><li>Users with partial sight often experience limited color vision.</li><li>Some older users may not be able to see color well.</li><li>Users who have color-blindness benefit when information conveyed by color is available in other visual ways.</li><li>People using text-only, limited color, or monochrome displays may be unable to access color-dependent information.</li><li>Users who have problems distinguishing between colors can look or listen for text cues.</li><li>People using Braille displays or other tactile interfaces can detect text cues by touch.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["colour"]
    },
    
    { // 1.4.2.
      "criteria" : 
      {
        "ca" : "1.4.2 Àudio Control", 
        "es" : "1.4.2 Audio Control", 
        "en" : "1.4.2 Audio Control",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#audio-control", 
      "level" : "A",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Si qualsevol àudio en una pàgina web es reprodueix automàticament durant més de 3 segons, hi ha un mecanisme disponible per pausar o aturar làudio, o hi ha un mecanisme disponible per controlar el volum dàudio independentment del nivell de volum general del sistema.", 
        "es" : "Si cualquier audio en una página web se reproduce automáticamente durante más de 3 segundos, hay un mecanismo disponible para pausar o detener el audio, o hay un mecanismo disponible para controlar el volumen de audio independientemente del nivel de volumen general del sistema.", 
        "en" : "If any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.",
      },
      "intent" : 
      {
        "ca" : "Les persones que utilitzen programari de lectura de pantalla poden tenir dificultats per escoltar la sortida de la veu si es reprodueix un altre àudio al mateix temps. Aquesta dificultat s'agreuja quan la sortida de veu del lector de pantalla es basa en programari (com la majoria d'avui) i es controla mitjançant el mateix control de volum que el so. Per tant, és important que l'usuari pugui desactivar el so de fons. Nota: tenir control del volum inclou poder reduir-ne el volum a zero.", 
        "es" : "A las personas que usan software de lectura de pantalla les puede resultar difícil escuchar la salida de voz si se está reproduciendo otro audio al mismo tiempo. Esta dificultad se agrava cuando la salida de voz del lector de pantalla está basada en software (como la mayoría hoy en día) y se controla a través del mismo control de volumen que el sonido. Por lo tanto, es importante que el usuario pueda desactivar el sonido de fondo. Nota: Tener el control del volumen incluye poder reducir su volumen a cero.", 
        "en" : "Individuals who use screen reading software can find it hard to hear the speech output if there is other audio playing at the same time. This difficulty is exacerbated when the screen reader's speech output is software based (as most are today) and is controlled via the same volume control as the sound. Therefore, it is important that the user be able to turn off the background sound. Note: Having control of the volume includes being able to reduce its volume to zero.",
      },
      "benefits" :
      {
        "ca" : "<ul><li>Les persones que utilitzen tecnologies de lectura de pantalla poden escoltar el lector de pantalla sense que es reprodueixin altres sons. Això és especialment important per a aquells que tenen problemes d'audició i per a aquells els lectors de pantalla dels quals utilitzen el volum del sistema (de manera que no poden baixar el so ni augmentar el lector de pantalla).</li><li>Aquest criteri d'èxit també beneficia les persones que tenen dificultats per centrar-se en el contingut visual (inclòs el text) quan es reprodueix l'àudio.</li></ul>", 
        "es" : "<ul><li>Las personas que usan tecnologías de lectura de pantalla pueden escuchar el lector de pantalla sin que se reproduzcan otros sonidos. Esto es especialmente importante para aquellos que tienen problemas de audición y para aquellos cuyos lectores de pantalla usan el volumen del sistema (para que no puedan bajar el sonido y subir el lector de pantalla).</li><li>Este Criterio de Conformidad también beneficia a las personas que tienen dificultades para concentrarse en el contenido visual (incluido el texto) cuando se reproduce el audio.</li></ul>", 
        "en" : "<ul><li>Individuals who use screen reading technologies can hear the screen reader without other sounds playing. This is especially important for those who are hard of hearing and for those whose screen readers use the system volume (so they cannot turn sound down and screen reader up).</li><li>This Success Criterion also benefits people who have difficulty focusing on visual content (including text) when audio is playing.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["audio-video"]
    },
    
    { // 1.4.3.
      "criteria" : 
      {
        "ca" : "1.4.3 Contrast (Mínim)", 
        "es" : "1.4.3 Contraste (Mínimo)", 
        "en" : "1.4.3 Contrast (Minimum)",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#contrast-minimum", 
      "level" : "AA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "La presentació visual de text i imatges de text té una relació de contrast d'almenys 4,5:1, excepte pel següent:<ul><li>Text gran: el text a gran escala i les imatges de text a gran escala tenen una relació de contrast d'almenys 3:1;</li><li>Incidental: text o imatges de text que formen part d'un component d'interfície d'usuari inactiu, que són decoració pura, que no són visibles per a ningú o que formen part d'una imatge que conté un altre contingut visual significatiu, no tenen requisits de contrast.</li><li>Logotips: el text que forma part d'un logotip o una marca no té requisits de contrast.</li></ul>", 
        "es" : "La presentación visual de texto e imágenes de texto tiene una relación de contraste de al menos 4,5:1, excepto por lo siguiente:<ul><li>Texto grande: el texto a gran escala y las imágenes de texto a gran escala tienen una relación de contraste de al menos 3:1;</li><li>Incidental: texto o imágenes de texto que forman parte de un componente de interfaz de usuario inactivo, que son pura decoración, que no son visibles para nadie o que forman parte de una imagen que contiene otro contenido visual significativo, no tienen requisitos de contraste.</li><li>Logotipos: el texto que forma parte de un logotipo o marca no tiene requisitos de contraste.</li></ul>", 
        "en" : "The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:<ul><li>Large Text : Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;</li><li>Incidental : Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.</li><li>Logotypes : Text that is part of a logo or brand name has no contrast requirement.</li></ul>",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest criteri d'èxit és proporcionar prou contrast entre el text i el seu fons perquè pugui ser llegit per persones amb baixa visió moderada (que no utilitzen tecnologia d'assistència que millora el contrast). Per a les persones sense deficiències de color, la tonalitat i la saturació tenen un efecte mínim o nul sobre la llegibilitat, tal com s'avalua pel rendiment lector (Knoblauch et al., 1991). Les deficiències de color poden afectar una mica el contrast de luminància. Per tant, a la recomanació, el contrast es calcula de manera que el color no sigui un factor clau perquè les persones amb dèficit de visió del color també tinguin un contrast adequat entre el text i el fons.</p><p>S'exclou el text decoratiu i que no transmet cap informació. Per exemple, si s'utilitzen paraules aleatòries per crear un fons i les paraules es podrien reordenar o substituir sense canviar el significat, llavors seria decoratiu i no hauria de complir aquest criteri.</p><p>El text que és més gran i té traços de caràcters més amples és més fàcil de llegir amb un contrast més baix. Per tant, el requisit de contrast per a un text més gran és menor. Això permet als autors utilitzar una gamma més àmplia d'opcions de color per a text gran, cosa que és útil per al disseny de pàgines, especialment els títols. El text de 18 punts o el text en negreta de 14 punts es considera prou gran com per requerir una relació de contrast més baixa. (Vegeu les directrius de la impremta americana per a cecs per a la impressió gran i les directrius de la biblioteca del congrés per a la lletra gran a Recursos). '18 punts' i 'negreta' poden tenir significats diferents en diferents tipus de lletra, però, tret de tipus de lletra molt prims o inusuals, haurien de ser suficients. Com que hi ha tantes fonts diferents, s'utilitzen les mesures generals i s'inclou una nota sobre tipus de lletra elegants o prims.</p><p>Els requisits de contrast del text esmentats anteriorment també s'apliquen a les imatges de text (text que s'ha representat en píxels i després s'ha emmagatzemat en un format d'imatge) tal com s'indica al Criteri d'èxit 1.4.3.</p><p>Aquest requisit s'aplica a situacions en què les imatges de text s'havien d'entendre com a text. No s'inclouen textos incidentals, com ara fotografies que inclouen un senyal de carrer. Tampoc el text que per alguna raó està dissenyat per ser invisible per a tots els espectadors. El text estilitzat, com en els logotips corporatius, s'ha de tractar en funció de la seva funció a la pàgina, que pot o no garantir la inclusió del contingut en el text alternatiu. Les directrius visuals corporatives més enllà del logotip i el logotip no s'inclouen a l'excepció.</p><p>En aquesta disposició hi ha una excepció que diu 'que formen part d'una imatge que conté un altre contingut visual significatiu'. Aquesta excepció està destinada a separar les imatges que tenen text de les imatges de text que es fan per substituir el text per tal d'aconseguir un aspecte particular.</p><p>El criteri d'èxit de contrast mínim (1.4.3) s'aplica al text de la pàgina, inclòs el text del marcador de posició i el text que es mostra quan el punter passa per sobre d'un objecte o quan un objecte té el focus del teclat. Si alguna d'aquestes s'utilitza en una pàgina, el text ha de proporcionar un contrast suficient.</p><p>Tot i que aquest criteri d'èxit només s'aplica al text, es produeixen problemes similars amb el contingut presentat en gràfics, gràfics, diagrames i altra informació no basada en text. El contingut presentat d'aquesta manera també hauria de tenir un bon contrast per garantir que més usuaris puguin accedir a la informació.</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es proporcionar suficiente contraste entre el texto y su fondo para que pueda ser leído por personas con una visión moderadamente baja (que no utilizan tecnología de asistencia para mejorar el contraste). Para las personas sin deficiencias de color, el tono y la saturación tienen un efecto mínimo o nulo sobre la legibilidad según lo evaluado por el rendimiento de lectura (Knoblauch et al., 1991). Las deficiencias de color pueden afectar un poco el contraste de luminancia. Por tanto, en la recomendación, el contraste se calcula de forma que el color no sea un factor clave para que las personas con déficit de visión cromática también tengan un contraste adecuado entre el texto y el fondo.</p><p>Se excluye el texto que es decorativo y no transmite información. Por ejemplo, si se usan palabras al azar para crear un fondo y las palabras se pueden reorganizar o sustituir sin cambiar el significado, entonces sería decorativa y no tendría que cumplir con este criterio.</p><p>El texto que es más grande y tiene trazos de caracteres más anchos es más fácil de leer con un contraste más bajo. Por lo tanto, el requisito de contraste para un texto más grande es menor. Esto permite a los autores utilizar una gama más amplia de opciones de color para textos grandes, lo que resulta útil para el diseño de páginas, en particular los títulos. El texto de 18 puntos o el texto en negrita de 14 puntos se considera lo suficientemente grande como para requerir una relación de contraste más baja. (Consulte las Directrices para la impresión en letra grande de la American Printing House for the Blind y las Directrices para la impresión en letra grande de la Biblioteca del Congreso en Recursos). '18 puntos' y 'negrita' pueden tener diferentes significados en diferentes fuentes pero, a excepción de fuentes muy finas o inusuales, deberían ser suficientes. Dado que hay tantas fuentes diferentes, se utilizan las medidas generales y se incluye una nota sobre fuentes elegantes o finas.</p><p>Los requisitos de contraste para el texto mencionados anteriormente también se aplican a las imágenes de texto (texto que se ha convertido en píxeles y luego se ha almacenado en un formato de imagen) como se establece en el Criterio de Conformidad 1.4.3.</p><p>Este requisito se aplica a situaciones en las que se pretendía que las imágenes de texto se entendieran como texto. No se incluye el texto incidental, como en las fotografías que incluyen un cartel de calle. Tampoco es texto que por alguna razón está diseñado para ser invisible para todos los espectadores. El texto estilizado, como en los logotipos corporativos, debe tratarse en términos de su función en la página, lo que puede justificar o no incluir el contenido en el texto alternativo. Las pautas visuales corporativas más allá del logotipo y el logotipo no se incluyen en la excepción.</p><p>En esta disposición hay una excepción que dice 'que son parte de una imagen que contiene otro contenido visual significativo'. Esta excepción está destinada a separar las imágenes que tienen texto de las imágenes de texto que se realizan para reemplazar el texto con el fin de obtener un aspecto particular.</p><p>El criterio de éxito de contraste mínimo (1.4.3) se aplica al texto de la página, incluido el texto de marcador de posición y el texto que se muestra cuando un puntero se desplaza sobre un objeto o cuando un objeto tiene el foco del teclado. Si alguno de estos se utiliza en una página, el texto debe proporcionar suficiente contraste.</p><p>Aunque este Criterio de Conformidad solo se aplica al texto, se producen problemas similares con el contenido presentado en tablas, gráficos, diagramas y otra información no basada en texto. El contenido presentado de esta manera también debe tener un buen contraste para garantizar que más usuarios puedan acceder a la información.</p>", 
        "en" : "<p>The intent of this Success Criterion is to provide enough contrast between text and its background so that it can be read by people with moderately low vision (who do not use contrast-enhancing assistive technology). For people without color deficiencies, hue and saturation have minimal or no effect on legibility as assessed by reading performance (Knoblauch et al., 1991). Color deficiencies can affect luminance contrast somewhat. Therefore, in the recommendation, the contrast is calculated in such a way that color is not a key factor so that people who have a color vision deficit will also have adequate contrast between the text and the background.</p><p>Text that is decorative and conveys no information is excluded. For example, if random words are used to create a background and the words could be rearranged or substituted without changing meaning, then it would be decorative and would not need to meet this criterion.</p><p>Text that is larger and has wider character strokes is easier to read at lower contrast. The contrast requirement for larger text is therefore lower. This allows authors to use a wider range of color choices for large text, which is helpful for design of pages, particularly titles. 18 point text or 14 point bold text is judged to be large enough to require a lower contrast ratio. (See The American Printing House for the Blind Guidelines for Large Printing and The Library of Congress Guidelines for Large Print under Resources). '18 point' and 'bold' can both have different meanings in different fonts but, except for very thin or unusual fonts, they should be sufficient. Since there are so many different fonts, the general measures are used and a note regarding fancy or thin fonts is included.</p><p></p><p></p><p></p><p></p><p></p>",
      },
      "benefits" :
      {
        "ca" : "Les persones amb baixa visió sovint tenen dificultats per llegir un text que no contrasta amb el seu fons. Això es pot agreujar si la persona té una deficiència de visió del color que redueix encara més el contrast. Proporcionar una relació de contrast de luminància mínima entre el text i el seu fons pot fer que el text sigui més llegible encara que la persona no vegi la gamma completa de colors. També funciona per als individus rars que no veuen color.", 
        "es" : "Las personas con baja visión a menudo tienen dificultad para leer un texto que no contrasta con su fondo. Esto puede empeorar si la persona tiene una deficiencia en la visión del color que reduce aún más el contraste. Proporcionar una relación de contraste de luminancia mínima entre el texto y su fondo puede hacer que el texto sea más legible incluso si la persona no ve la gama completa de colores. También funciona para las raras personas que no ven ningún color.", 
        "en" : "People with low vision often have difficulty reading text that does not contrast with its background. This can be exacerbated if the person has a color vision deficiency that lowers the contrast even further. Providing a minimum luminance contrast ratio between the text and its background can make the text more readable even if the person does not see the full range of colors. It also works for the rare individuals who see no color.",
      },
      "examples" : "",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["font-size", "structure"]
    },
    
    { // 1.4.4.
      "criteria" : 
      {
        "ca" : "1.4.4 Canviar la mida del text", 
        "es" : "1.4.4 Cambiar el tamaño del texto", 
        "en" : "1.4.4 Resize text",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#resize-text", 
      "level" : "AA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "A excepció dels subtítols i les imatges de text, el text es pot canviar de mida sense tecnologia dassistència fins a un 200 per cent sense pèrdua de contingut o funcionalitat.", 
        "es" : "A excepción de los subtítulos y las imágenes de texto, el texto se puede cambiar de tamaño sin tecnología de asistencia hasta en un 200 por ciento sin pérdida de contenido o funcionalidad.", 
        "en" : "Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality.",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest criteri d'èxit és garantir que el text representat visualment, inclosos els controls basats en text (caràcters de text que s'han mostrat perquè es puguin veure [en comparació amb els caràcters de text que encara estan en forma de dades, com ara ASCII]) escalat amb èxit perquè pugui ser llegit directament per persones amb discapacitat visual lleu, sense requerir l'ús de tecnologia d'assistència com una lupa de pantalla. Els usuaris poden beneficiar-se d'escalar tot el contingut de la pàgina web, però el text és el més important.</p><p>L'escala del contingut és principalment una responsabilitat de l'agent d'usuari. Els agents d'usuari que compleixen UAAG 1.0 Checkpoint 4.1 permeten als usuaris configurar l'escala de text. La responsabilitat de l'autor és crear contingut web que no impedeix que l'agent d'usuari escala el contingut de manera eficaç. Els autors poden satisfer aquest Criteri d'èxit verificant que el contingut no interfereixi amb el suport de l'agent d'usuari per canviar la mida del text, inclosos els controls basats en text, o proporcionant suport directe per canviar la mida del text o canviar el disseny. Un exemple de suport directe pot ser mitjançant un script del costat del servidor que es pot utilitzar per assignar diferents fulls d'estil.</p><p>L'autor no pot confiar en l'agent d'usuari per satisfer aquest criteri d'èxit per al contingut HTML si els usuaris no tenen accés a un agent d'usuari amb suport de zoom. Per exemple, si treballen en un entorn que els requereix utilitzar IE 6.</p><p>Si l'autor utilitza una tecnologia els agents d'usuari de la qual no proporcionen suport de zoom, l'autor és responsable de proporcionar aquest tipus de funcionalitat directament o de proporcionar contingut que funcioni amb el tipus de funcionalitat proporcionat per l'agent d'usuari. Si l'agent d'usuari no ofereix la funcionalitat de zoom però permet que l'usuari canviï la mida del text, l'autor és responsable d'assegurar-se que el contingut es mantingui utilitzable quan es canvia la mida del text.</p><p>Alguns components de la interfície d'usuari que funcionen com una etiqueta i requereixen l'activació per part de l'usuari per accedir al contingut no són prou amples per acollir el contingut de l'etiqueta. Per exemple, a les aplicacions de correu web, la columna d'assumpte pot no ser prou àmplia com per acomodar totes les capçaleres de l'assumpte possibles, però activar la capçalera de l'assumpte porta l'usuari al missatge complet amb la capçalera de l'assumpte complet. Als fulls de càlcul basats en web, el contingut de la cel·la que és massa llarg per mostrar-se en una columna es pot truncar i el contingut complet de la cel·la està disponible per a l'usuari quan la cel·la rep el focus. El contingut d'un component d'interfície d'usuari també pot arribar a ser massa ampli a les interfícies d'usuari on l'usuari pot canviar la mida de l'amplada de la columna. En aquest tipus de component d'interfície d'usuari, no cal l'ajustament de línia; El truncament és acceptable si el contingut complet del component està disponible en el focus o després de l'activació de l'usuari i una indicació que es pot accedir a aquesta informació es proporciona a l'usuari d'alguna manera, a més del fet que està truncada.</p><p>El contingut compleix el criteri d'èxit si es pot escalar fins al 200%, és a dir, fins al doble d'amplada i alçada. Els autors poden donar suport a l'escala més enllà d'aquest límit, però, a mesura que l'escala es fa més extrema, els dissenys adaptatius poden introduir problemes d'usabilitat. Per exemple, les paraules poden ser massa amples per encaixar a l'espai horitzontal que tenen al seu abast, provocant que es trobin; les restriccions de disseny poden fer que el text se superposi amb un altre contingut quan s'amplia; o només pot cabre una paraula d'una frase a cada línia, fent que la frase es mostri com una columna vertical de text difícil de llegir.</p><p>El grup de treball considera que el 200% és un allotjament raonable que pot suportar una àmplia gamma de dissenys i distribucions, i complementa les lupes de pantalla més antigues que proporcionen una ampliació mínima del 200%. Per sobre del 200%, el zoom (que canvia la mida del text, les imatges i les regions de disseny i crea un llenç més gran que pot requerir un desplaçament horitzontal i vertical) pot ser més efectiu que el canvi de mida del text. La tecnologia d'assistència dedicada al suport de zoom s'utilitzaria normalment en aquesta situació i pot oferir una millor accessibilitat que els intents de l'autor de donar suport directament a l'usuari.</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es garantizar que el texto representado visualmente, incluidos los controles basados ​​en texto (caracteres de texto que se han mostrado para que se puedan ver [vs. caracteres de texto que todavía están en forma de datos, como ASCII]) pueden ser escalado con éxito para que pueda ser leído directamente por personas con discapacidades visuales leves, sin requerir el uso de tecnología de asistencia como una lupa de pantalla. Los usuarios pueden beneficiarse de escalar todo el contenido de la página web, pero el texto es más importante.</p><p>La escala del contenido es principalmente una responsabilidad del agente de usuario. Los agentes de usuario que cumplen con UAAG 1.0 Checkpoint 4.1 permiten a los usuarios configurar la escala de texto. La responsabilidad del autor es crear contenido web que no impida que el agente de usuario escale el contenido de manera efectiva. Los autores pueden satisfacer este Criterio de Conformidad verificando que el contenido no interfiera con el soporte del agente de usuario para cambiar el tamaño del texto, incluidos los controles basados ​​en texto, o proporcionando soporte directo para cambiar el tamaño del texto o cambiar el diseño. Un ejemplo de soporte directo podría ser a través de un script del lado del servidor que se puede usar para asignar diferentes hojas de estilo.</p><p>El autor no puede confiar en que el agente de usuario satisfaga este Criterio de Conformidad para el contenido HTML si los usuarios no tienen acceso a un agente de usuario compatible con zoom. Por ejemplo, si trabajan en un entorno que requiere que usen IE 6.</p><p>Si el autor está utilizando una tecnología cuyos agentes de usuario no brindan soporte de zoom, el autor es responsable de proporcionar este tipo de funcionalidad directamente o de proporcionar contenido que funcione con el tipo de funcionalidad proporcionada por el agente de usuario. Si el agente de usuario no proporciona la funcionalidad de zoom pero permite que el usuario cambie el tamaño del texto, el autor es responsable de garantizar que el contenido siga siendo utilizable cuando se cambia el tamaño del texto.</p><p>Algunos componentes de la interfaz de usuario que funcionan como una etiqueta y requieren que el usuario los active para acceder al contenido no son lo suficientemente anchos para acomodar el contenido de la etiqueta. Por ejemplo, en las aplicaciones de correo web, la columna de asunto puede no ser lo suficientemente ancha para acomodar todos los encabezados de asunto posibles, pero activar el encabezado de asunto lleva al usuario al mensaje completo con el encabezado de asunto completo. En las hojas de cálculo basadas en la web, el contenido de la celda que es demasiado largo para mostrarse en una columna se puede truncar y el contenido completo de la celda está disponible para el usuario cuando la celda recibe el foco. El contenido de un componente de la interfaz de usuario también puede volverse demasiado ancho en las interfaces de usuario donde el usuario puede cambiar el tamaño del ancho de la columna. En este tipo de componente de interfaz de usuario, no se requiere ajuste de línea; el truncamiento es aceptable si el contenido completo del componente está disponible en el foco o después de la activación del usuario y se proporciona al usuario una indicación de que se puede acceder a esta información de alguna manera además del hecho de que está truncado.</p><p>El contenido cumple el Criterio de Conformidad si se puede escalar hasta un 200 %, es decir, hasta el doble de ancho y alto. Los autores pueden admitir escalar más allá de ese límite; sin embargo, a medida que la escala se vuelve más extrema, los diseños adaptables pueden presentar problemas de usabilidad. Por ejemplo, las palabras pueden ser demasiado anchas para caber en el espacio horizontal disponible para ellas, lo que hace que se trunquen; las restricciones de diseño pueden hacer que el texto se superponga con otro contenido cuando se escala más grande; o solo puede caber una palabra de una oración en cada línea, lo que hace que la oración se muestre como una columna vertical de texto que es difícil de leer.</p><p>El grupo de trabajo considera que el 200 % es una adaptación razonable que puede admitir una amplia gama de diseños y diseños, y complementa los amplificadores de pantalla más antiguos que brindan un aumento mínimo del 200 %. Por encima del 200 %, el zoom (que cambia el tamaño del texto, las imágenes y las regiones de diseño y crea un lienzo más grande que puede requerir desplazamiento tanto horizontal como vertical) puede ser más eficaz que el cambio de tamaño del texto. La tecnología de asistencia dedicada al soporte de zoom generalmente se usaría en tal situación y puede proporcionar una mejor accesibilidad que los intentos del autor de apoyar al usuario directamente.</p>", 
        "en" : "<p>The intent of this Success Criterion is to ensure that visually rendered text, including text-based controls (text characters that have been displayed so that they can be seen [vs. text characters that are still in data form such as ASCII]) can be scaled successfully so that it can be read directly by people with mild visual disabilities, without requiring the use of assistive technology such as a screen magnifier. Users may benefit from scaling all content on the Web page, but text is most critical.</p><p>The scaling of content is primarily a user agent responsibility. User agents that satisfy UAAG 1.0 Checkpoint 4.1 allow users to configure text scale. The author's responsibility is to create Web content that does not prevent the user agent from scaling the content effectively. Authors may satisfy this Success Criterion by verifying that content does not interfere with user agent support for resizing text, including text-based controls, or by providing direct support for resizing text or changing the layout. An example of direct support might be via server-side script that can be used to assign different style sheets.</p><p>The author cannot rely on the user agent to satisfy this Success Criterion for HTML content if users do not have access to a user agent with zoom support. For example, if they work in an environment that requires them to use IE 6.</p><p>If the author is using a technology whose user agents do not provide zoom support, the author is responsible to provide this type of functionality directly or to provide content that works with the type of functionality provided by the user agent. If the user agent doesn't provide zoom functionality but does let the the user change the text size, the author is responsible for ensuring that the content remains usable when the text is resized.</p><p>Some user interface components that function as a label and require activation by the user to access content are not wide enough to accommodate the label's content. For example, in Web mail applications the subject column may not be wide enough to accommodate every possible subject header, but activating the subject header takes the user to the full message with the full subject header. In Web-based spreadsheets, cell content that is too long to be displayed in a column can be truncated, and the full content of the cell is available to the user when the cell receives focus. The content of a user interface component may also become too wide in user interfaces where the user can resize the column width. In this type of user interface component, line wrapping is not required; truncation is acceptable if the component's full content is available on focus or after user activation and an indication that this information can be accessed, is provided to the user in some way besides the fact that it is truncated.</p><p>Content satisfies the Success Criterion if it can be scaled up to 200%, that is, up to twice the width and height. Authors may support scaling beyond that limit, however, as scaling becomes more extreme, adaptive layouts may introduce usability problems. For example, words may be too wide to fit into the horizontal space available to them, causing them to be truncated; layout constraints may cause text to overlap with other content when it is scaled larger; or only one word of a sentence may fit on each line, causing the sentence to be displayed as a vertical column of text that is difficult to read.</p><p>The working group feels that 200% is a reasonable accommodation that can support a wide range of designs and layouts, and complements older screen magnifiers that provide a minimum magnification of 200%. Above 200%, zoom (which resizes text, images, and layout regions and creates a larger canvas that may require both horizontal and vertical scrolling) may be more effective than text resizing. Assistive technology dedicated to zoom support would usually be used in such a situation and may provide better accessibility than attempts by the author to support the user directly.</p>",
      },
      "benefits" :
      {
        "ca" : "Aquest criteri d'èxit ajuda les persones amb baixa visió permetent-los augmentar la mida del text del contingut perquè puguin llegir-lo.", 
        "es" : "Este Criterio de Conformidad ayuda a las personas con baja visión al permitirles aumentar el tamaño del texto en el contenido para que puedan leerlo.", 
        "en" : "This Success Criterion helps people with low vision by letting them increase text size in content so that they can read it.",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["font-size", "structure"]
    },
    
    { // 1.4.5.
      "criteria" : 
      {
        "ca" : "1.4.5 Imatges de text", 
        "es" : "1.4.5 Imágenes de texto", 
        "en" : "1.4.5 Images of Text",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#images-of-text", 
      "level" : "AA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Si les tecnologies que es fan servir poden aconseguir la presentació visual, s'utilitza text per transmetre informació en lloc d'imatges de text, excepte per les següents:<ul><li>Personalitzable: la imatge del text es pot personalitzar visualment segons els requisits de lusuari;</li><li>Essencial: una presentació particular del text és essencial per a la informació que es transmet.</li></ul>", 
        "es" : "Si las tecnologías que se utilizan pueden lograr la presentación visual, se utiliza texto para transmitir información en lugar de imágenes de texto, excepto por lo siguiente:<ul><li>Personalizable: la imagen del texto se puede personalizar visualmente según los requisitos del usuario;</li><li>Esencial: una presentación particular del texto es esencial para la información que se transmite.</li></ul>", 
        "en" : "If the technologies being used can achieve the visual presentation, text is used to convey information rather than images of text except for the following: <ul><li>Customizable : The image of text can be visually customized to the user's requirements;</li><li>Essential : A particular presentation of text is essential to the information being conveyed.</li></ul>",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest Criteri d'èxit és animar els autors, que utilitzen tecnologies capaços d'aconseguir la presentació visual predeterminada desitjada, perquè les persones que necessiten una presentació visual concreta del text puguin ajustar la presentació del text segons sigui necessari. Això inclou les persones que requereixen el text amb una mida de lletra, color de primer pla i fons, família de tipus de lletra, interlineat o alineació en particular.</p><p>Si un autor pot utilitzar el text per aconseguir el mateix efecte visual, hauria de presentar la informació com a text en lloc d'utilitzar una imatge. Si per qualsevol motiu, l'autor no pot formatar el text per obtenir el mateix efecte, l'efecte no es presentarà de manera fiable als agents d'usuari disponibles habitualment, o l'ús d'una tecnologia per complir aquest criteri interferiria amb el compliment d'altres criteris, com ara 1.4. 4, llavors es pot utilitzar una imatge de text. Això inclou els casos en què una presentació particular del text és essencial per a la informació que es transmet, com ara mostres de tipus, logotips, marca, etc. També es poden utilitzar imatges de text per utilitzar un tipus de lletra en particular que no s'ha desplegat àmpliament o que l'autor no.</p><p>Les imatges de text també es poden utilitzar quan els usuaris puguin personalitzar la imatge de text per adaptar-se als seus requisits.</p><p>La definició d'imatge de text conté la nota: Nota: això no inclou el text que forma part d'una imatge que contingui un altre contingut visual important. Alguns exemples d'aquestes imatges inclouen gràfics, captures de pantalla i diagrames que transmeten visualment informació important a través de més que només text.</p><p>Les tècniques per satisfer aquest Criteri d'èxit són les mateixes que les del Criteri d'èxit 1.4.9, excepte que només s'han d'aplicar si la presentació visual es pot aconseguir amb les tecnologies que utilitza l'autor. Per al criteri d'èxit 1.4.9, les tècniques suficients només s'aplicarien quan l'usuari pugui personalitzar la sortida.</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es animar a los autores, que están utilizando tecnologías que son capaces de lograr la presentación visual predeterminada deseada, a permitir que las personas que requieren una presentación visual particular del texto puedan ajustar la presentación del texto según sea necesario. Esto incluye a las personas que requieren el texto en un tamaño de fuente particular, color frontal y de fondo, familia de fuentes, interlineado o alineación.</p><p>Si un autor puede usar texto para lograr el mismo efecto visual, debe presentar la información como texto en lugar de usar una imagen. Si por alguna razón, el autor no puede formatear el texto para obtener el mismo efecto, el efecto no se presentará de manera confiable en los agentes de usuario comúnmente disponibles, o el uso de una tecnología para cumplir con este criterio interferiría con el cumplimiento de otros criterios, como 1.4. 4, entonces se puede usar una imagen de texto. Esto incluye instancias en las que una presentación particular de texto es esencial para la información que se transmite, como muestras tipográficas, logotipos, marcas, etc. el autor no</p><p>Las imágenes de texto también se pueden utilizar cuando es posible que los usuarios personalicen la imagen de texto para que coincida con sus requisitos.</p><p>La definición de imagen de texto contiene la nota: Nota: Esto no incluye el texto que es parte de una imagen que contiene otro contenido visual significativo. Los ejemplos de tales imágenes incluyen gráficos, capturas de pantalla y diagramas que transmiten visualmente información importante a través de algo más que texto.</p><p>Las técnicas para satisfacer este Criterio de Conformidad son las mismas que las del Criterio de Conformidad 1.4.9, excepto que solo deben aplicarse si la presentación visual se puede lograr con las tecnologías que utiliza el autor. Para el Criterio de Conformidad 1.4.9, las técnicas suficientes se aplicarían solo cuando el usuario pueda personalizar el resultado.</p>", 
        "en" : "<p>The intent of this Success Criterion is to encourage authors, who are using technologies which are capable of achieving their desired default visual presentation, to enable people who require a particular visual presentation of text to be able to adjust the text presentation as needed. This includes people who require the text in a particular font size, foreground and background color, font family, line spacing or alignment.</p><p>If an author can use text to achieve the same visual effect, he or she should present the information as text rather than using an image. If for any reason, the author cannot format the text to get the same effect, the effect won't be reliably presented on the commonly available user agents, or using a technology to meet this criterion would interfere with meeting other criteria such as 1.4.4, then an image of text can be used. This includes instances where a particular presentation of text is essential to the information being conveyed, such as type samples, logotypes, branding, etc. Images of text may also be used in order to use a particular font that is either not widely deployed or which the author doesn't have the right to redistribute, or to ensure that the text would be anti-aliased on all user agents.</p><p>Images of text can also be used where it is possible for users to customize the image of text to match their requirements.</p><p>The definition of image of text contains the note: Note: This does not include text that is part of a picture that contains significant other visual content. Examples of such pictures include graphs, screenshots, and diagrams which visually convey important information through more than just text.</p><p>Techniques for satisfying this Success Criterion are the same as those for Success Criterion 1.4.9, except that they only need to apply if the visual presentation can be achieved with the technologies that the author is using. For Success Criterion 1.4.9, the sufficient techniques would be applied only when the user can customize the output.</p>",
      },
      "benefits" :
      {
        "ca" : "<ul><li>Persones amb baixa visió (que poden tenir problemes per llegir el text amb la família de tipus de lletra de l'autor, la mida i/o el color).</li><li>Persones amb problemes de seguiment visual (que poden tenir problemes per llegir el text amb l'interlineat i/o l'alineació de l'autor).</li><li>Persones amb discapacitats cognitives que afecten la lectura.</li></ul>", 
        "es" : "<ul><li>Personas con baja visión (que pueden tener problemas para leer el texto con la familia de fuentes, el tamaño y/o el color del autor).</li><li>Personas con problemas de seguimiento visual (que pueden tener problemas para leer el texto con el espacio entre líneas y/o la alineación del autor).</li><li>Personas con discapacidades cognitivas que afectan a la lectura.</li></ul>", 
        "en" : "<ul><li>People with low vision (who may have trouble reading the text with the authored font family, size and/or color).</li><li>People with visual tracking problems (who may have trouble reading the text with the authored line spacing and/or alignment).</li><li>People with cognitive disabilities that affect reading.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["content"]
    },
    
    { // 1.4.6.
      "criteria" : 
      {
        "ca" : "1.4.6 Contrast (millorat)", 
        "es" : "1.4.6 Contraste (mejorado)", 
        "en" : "1.4.6 Contrast (Enhanced)",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#contrast-enhanced", 
      "level" : "AAA",
      "version" : "2.1", 
      "goal" : 
      {
        "ca" : "La presentació visual de text i imatges de text té una relació de contrast d'almenys 7:1, excepte pel següent:<ul><li>Text gran: el text a gran escala i les imatges de text a gran escala tenen una relació de contrast d'almenys 4,5:1;</li><li>Incidental: text o imatges de text que formen part d'un component d'interfície d'usuari inactiu, que són decoració pura, que no són visibles per a ningú o que formen part d'una imatge que conté un altre contingut visual significatiu, no tenen requisits de contrast.</li><li>Logotips: El text que forma part d'un logotip o una marca no té requisits de contrast.</li></ul>", 
        "es" : "	La presentación visual de texto e imágenes de texto tiene una relación de contraste de al menos 7:1, excepto por lo siguiente:<ul><li>Texto grande: el texto a gran escala y las imágenes de texto a gran escala tienen una relación de contraste de al menos 4,5:1;</li><li>Incidental: texto o imágenes de texto que forman parte de un componente de interfaz de usuario inactivo, que son pura decoración, que no son visibles para nadie o que forman parte de una imagen que contiene otro contenido visual significativo, no tienen requisitos de contraste.</li><li>Logotipos: El texto que forma parte de un logotipo o marca no tiene requisitos de contraste.</li></ul>",
        "en" : "The visual presentation of text and images of text has a contrast ratio of at least 7:1, except for the following: <ul><li>Large Text : Large-scale text and images of large-scale text have a contrast ratio of at least 4.5:1;</li><li>Incidental : Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.</li><li>Logotypes: Text that is part of a logo or brand name has no contrast requirement.</li></ul>",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest criteri d'èxit és proporcionar prou contrast entre el text i el seu fons perquè pugui ser llegit per persones amb baixa visió moderada (que no utilitzen tecnologia d'assistència que millora el contrast). Per a les persones sense deficiències de color, la tonalitat i la saturació tenen un efecte mínim o nul sobre la llegibilitat, tal com s'avalua pel rendiment lector (Knoblauch et al., 1991). Les deficiències de color poden afectar una mica el contrast de luminància. Per tant, a la recomanació, el contrast es calcula de manera que el color no sigui un factor clau perquè les persones amb dèficit de visió del color també tinguin un contrast adequat entre el text i el fons.</p><p>S'exclou el text decoratiu i que no transmet cap informació. Per exemple, si s'utilitzen paraules aleatòries per crear un fons i les paraules es podrien reordenar o substituir sense canviar el significat, llavors seria decoratiu i no hauria de complir aquest criteri.</p><p>El text que és més gran i té traços de caràcters més amples és més fàcil de llegir amb un contrast més baix. Per tant, el requisit de contrast per a un text més gran és menor. Això permet als autors utilitzar una gamma més àmplia d'opcions de color per a text gran, cosa que és útil per al disseny de pàgines, especialment els títols. El text de 18 punts o el text en negreta de 14 punts es considera prou gran com per requerir una relació de contrast més baixa. (Vegeu les directrius de la impremta americana per a cecs per a la impressió gran i les directrius de la biblioteca del congrés per a la lletra gran a Recursos). '18 punts' i 'negreta' poden tenir significats diferents en diferents tipus de lletra, però, tret de tipus de lletra molt prims o inusuals, haurien de ser suficients. Com que hi ha tantes fonts diferents, s'utilitzen les mesures generals i s'inclou una nota sobre tipus de lletra elegants o prims.<p></p>Els requisits de contrast del text esmentats anteriorment també s'apliquen a les imatges de text (text que s'ha representat en píxels i després s'ha emmagatzemat en un format d'imatge) tal com s'indica al Criteri d'èxit 1.4.5.</p><p>Aquest requisit s'aplica a situacions en què les imatges de text s'havien d'entendre com a text. No s'inclouen textos incidentals, com ara fotografies que inclouen un senyal de carrer. Tampoc el text que per alguna raó està dissenyat per ser invisible per a tots els usuaris. El text estilitzat, com en els logotips corporatius, s'ha de tractar en funció de la seva funció a la pàgina, que pot o no garantir la inclusió del contingut en el text alternatiu. Les directrius visuals corporatives més enllà del logotip i el logotip no s'inclouen a l'excepció.</p><p>En aquesta disposició hi ha una excepció que diu 'que formen part d'una imatge que conté un altre contingut visual significatiu'. Aquesta excepció està destinada a separar les imatges que tenen text de les imatges de text que es fan per substituir el text per tal d'aconseguir un aspecte particular.</p><p>Tot i que aquest criteri d'èxit només s'aplica al text, es produeixen problemes similars amb el contingut presentat en gràfics, gràfics, diagrames i altra informació no basada en text. El contingut presentat d'aquesta manera també hauria de tenir un bon contrast per garantir que més usuaris puguin accedir a la informació.</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es proporcionar suficiente contraste entre el texto y su fondo para que pueda ser leído por personas con una visión moderadamente baja (que no utilizan tecnología de asistencia para mejorar el contraste). Para las personas sin deficiencias de color, el tono y la saturación tienen un efecto mínimo o nulo sobre la legibilidad según lo evaluado por el rendimiento de lectura (Knoblauch et al., 1991). Las deficiencias de color pueden afectar un poco el contraste de luminancia. Por tanto, en la recomendación, el contraste se calcula de forma que el color no sea un factor clave para que las personas con déficit de visión cromática también tengan un contraste adecuado entre el texto y el fondo.</p><p>Se excluye el texto que es decorativo y no transmite información. Por ejemplo, si se usan palabras al azar para crear un fondo y las palabras se pueden reorganizar o sustituir sin cambiar el significado, entonces sería decorativa y no tendría que cumplir con este criterio.</p><p>El texto que es más grande y tiene trazos de caracteres más anchos es más fácil de leer con un contraste más bajo. Por lo tanto, el requisito de contraste para un texto más grande es menor. Esto permite a los autores utilizar una gama más amplia de opciones de color para textos grandes, lo que resulta útil para el diseño de páginas, en particular los títulos. El texto de 18 puntos o el texto en negrita de 14 puntos se considera lo suficientemente grande como para requerir una relación de contraste más baja. (Consulte las Directrices para la impresión en letra grande de la American Printing House for the Blind y las Directrices para la impresión en letra grande de la Biblioteca del Congreso en Recursos). '18 puntos' y 'negrita' pueden tener diferentes significados en diferentes fuentes pero, a excepción de fuentes muy finas o inusuales, deberían ser suficientes. Dado que hay tantas fuentes diferentes, se utilizan las medidas generales y se incluye una nota sobre fuentes elegantes o finas.</p><p>Los requisitos de contraste para el texto mencionados anteriormente también se aplican a las imágenes de texto (texto que se ha convertido en píxeles y luego se ha almacenado en un formato de imagen) como se indica en el Criterio de Conformidad 1.4.5</p><p>Este requisito se aplica a situaciones en las que se pretendía que las imágenes de texto se entendieran como texto. No se incluye el texto incidental, como en las fotografías que incluyen un cartel de calle. Tampoco lo es el texto que por alguna razón está diseñado para ser invisible para todos los usuarios. El texto estilizado, como en los logotipos corporativos, debe tratarse en términos de su función en la página, lo que puede justificar o no incluir el contenido en el texto alternativo. Las pautas visuales corporativas más allá del logotipo y el logotipo no se incluyen en la excepción.</p><p>En esta disposición hay una excepción que dice 'que son parte de una imagen que contiene otro contenido visual significativo'. Esta excepción está destinada a separar las imágenes que tienen texto de las imágenes de texto que se realizan para reemplazar el texto con el fin de obtener un aspecto particular.</p><p>Aunque este Criterio de Conformidad solo se aplica al texto, se producen problemas similares con el contenido presentado en tablas, gráficos, diagramas y otra información no basada en texto. El contenido presentado de esta manera también debe tener un buen contraste para garantizar que más usuarios puedan acceder a la información.</p>", 
        "en" : "<p>The intent of this Success Criterion is to provide enough contrast between text and its background so that it can be read by people with moderately low vision (who do not use contrast-enhancing assistive technology). For people without color deficiencies, hue and saturation have minimal or no effect on legibility as assessed by reading performance (Knoblauch et al., 1991). Color deficiencies can affect luminance contrast somewhat. Therefore, in the recommendation, the contrast is calculated in such a way that color is not a key factor so that people who have a color vision deficit will also have adequate contrast between the text and the background.</p><p>Text that is decorative and conveys no information is excluded. For example, if random words are used to create a background and the words could be rearranged or substituted without changing meaning, then it would be decorative and would not need to meet this criterion.</p><p>Text that is larger and has wider character strokes is easier to read at lower contrast. The contrast requirement for larger text is therefore lower. This allows authors to use a wider range of color choices for large text, which is helpful for design of pages, particularly titles. 18 point text or 14 point bold text is judged to be large enough to require a lower contrast ratio. (See The American Printing House for the Blind Guidelines for Large Printing and The Library of Congress Guidelines for Large Print under Resources). '18 point' and 'bold' can both have different meanings in different fonts but, except for very thin or unusual fonts, they should be sufficient. Since there are so many different fonts, the general measures are used and a note regarding fancy or thin fonts is included.</p><p>The previously-mentioned contrast requirements for text also apply to images of text (text that has been rendered into pixels and then stored in an image format) as stated in Success Criterion 1.4.5.</p><p>This requirement applies to situations in which images of text were intended to be understood as text. Incidental text, such as in photographs that happen to include a street sign, are not included. Nor is text that for some reason is designed to be invisible to all users. Stylized text, such as in corporate logos, should be treated in terms of its function on the page, which may or may not warrant including the content in the text alternative. Corporate visual guidelines beyond logo and logotype are not included in the exception.</p><p>In this provision there is an exception that reads 'that are part of a picture that contains significant other visual content,'. This exception is intended to separate pictures that have text in them from images of text that are done to replace text in order to get a particular look.</p><p>Although this Success Criterion only applies to text, similar issues occur for content presented in charts, graphs, diagrams, and other non-text-based information. Content presented in this manner should also have good contrast to ensure that more users can access the information.</p>",
      },
      "benefits" :
      {
        "ca" : "Les persones amb baixa visió sovint tenen dificultats per llegir un text que no contrasta amb el seu fons. Això es pot agreujar si la persona té una deficiència de visió del color que redueix encara més el contrast. Proporcionar una relació de contrast de luminància mínima entre el text i el seu fons pot fer que el text sigui més llegible encara que la persona no vegi la gamma completa de colors. També funciona per als individus rars que no veuen color.", 
        "es" : "Las personas con baja visión a menudo tienen dificultad para leer un texto que no contrasta con su fondo. Esto puede empeorar si la persona tiene una deficiencia en la visión del color que reduce aún más el contraste. Proporcionar una relación de contraste de luminancia mínima entre el texto y su fondo puede hacer que el texto sea más legible incluso si la persona no ve la gama completa de colores. También funciona para las raras personas que no ven ningún color.", 
        "en" : "People with low vision often have difficulty reading text that does not contrast with its background. This can be exacerbated if the person has a color vision deficiency that lowers the contrast even further. Providing a minimum luminance contrast ratio between the text and its background can make the text more readable even if the person does not see the full range of colors. It also works for the rare individuals who see no color.",
      },
      "examples" : "",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },
    
    { // 1.4.7.
      "criteria" : 
      {
        "ca" : "1.4.7 Àudio de fons baix o nul", 
        "es" : "1.4.7 Audio de fondo bajo o nulo", 
        "en" : "1.4.7 Low or No Background Audio",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#low-or-no-background-audio", 
      "level" : "AAA",
      "version" : "2.1", 
      "goal" : 
      {
        "ca" : "Per a contingut pregravat de només àudio que (1) conté principalment veu en primer pla, (2) no és un CAPTCHA d'àudio ni un logotip d'àudio, i (3) no és una vocalització destinada a ser principalment una expressió musical, com ara cantar o rapejar, almenys un dels següents és veritable:<ul><li>Sense fons: l'àudio no conté sons de fons.</li><li>Apagar: els sons de fons es poden apagar.</li><li>20 dB : Els sons de fons són almenys 20 decibels més baixos que el contingut de la parla en primer pla, amb l'excepció de sons ocasionals que duren només un o dos segons.</li></ul>", 
        "es" : "Para contenido pregrabado de solo audio que (1) contiene principalmente voz en primer plano, (2) no es un CAPTCHA de audio ni un logotipo de audio, y (3) no es una vocalización destinada a ser principalmente una expresión musical, como cantar o rapear, al menos uno de los siguientes es verdadero:<ul><li>Sin fondo: el audio no contiene sonidos de fondo.</li><li>Apagar: los sonidos de fondo se pueden apagar.</li><li>20 dB : Los sonidos de fondo son al menos 20 decibeles más bajos que el contenido del habla en primer plano, con la excepción de sonidos ocasionales que duran solo uno o dos segundos.</li></ul>", 
        "en" : "For prerecorded audio-only content that (1) contains primarily speech in the foreground, (2) is not an audio CAPTCHA or audio logo, and (3) is not vocalization intended to be primarily musical expression such as singing or rapping, at least one of the following is true: <ul><li>No Background : The audio does not contain background sounds.</li><li>Turn Off : The background sounds can be turned off.</li><li>20 dB : The background sounds are at least 20 decibels lower than the foreground speech content, with the exception of occasional sounds that last for only one or two seconds.</li></ul>",
      },
      "intent" : 
      {
        "ca" : "La intenció d'aquest criteri d'èxit és assegurar-se que els sons que no són de parla siguin prou baixos perquè un usuari amb dificultats auditives pugui separar la parla dels sons de fons o d'altres continguts de soroll en primer pla.", 
        "es" : "La intención de este Criterio de Conformidad es garantizar que cualquier sonido que no sea del habla sea lo suficientemente bajo como para que un usuario con problemas de audición pueda separar el habla de los sonidos de fondo u otro ruido del contenido del habla en primer plano.", 
        "en" : "The intent of this Success Criterion is to ensure that any non-speech sounds are low enough that a user who is hard of hearing can separate the speech from background sounds or other noise foreground speech content.",
      },
      "benefits" :
      {
        "ca" : "Les persones amb problemes d'audició sovint tenen grans dificultats per separar la parla del so de fons.", 
        "es" : "Las personas con problemas de audición a menudo tienen grandes dificultades para separar el habla del sonido de fondo.", 
        "en" : "People who are hard of hearing often have great difficulty separating speech from background sound.",
      },
      "examples" : "",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/low-or-no-background-audio.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },
    
    { // 1.4.8.
      "criteria" : 
      {
        "ca" : "1.4.8 Presentació visual", 
        "es" : "1.4.8 Presentación visual", 
        "en" : "1.4.8 Visual Presentation",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#visual-presentation", 
      "level" : "AAA",
      "version" : "2.1", 
      "goal" : 
      {
        "ca" : "Per a la presentació visual de blocs de text, hi ha un mecanisme disponible per aconseguir el següent:<ul><li>Lusuari pot seleccionar els colors de primer pla i de fons.</li><li>L'amplada no supera els 80 caràcters o glifs (40 si és CJK).</li><li>El text no està justificat (alineat als marges esquerre i dret).</li><li>L'interlineat (interlineat) és almenys d'espai i mig dins dels paràgrafs, i l'interlineat és almenys 1,5 vegades més gran que l'interlineat.</li><li>El text es pot canviar de mida sense tecnologia dassistència fins a un 200 per cent duna manera que no requereix que lusuari es desplaci horitzontalment per llegir una línia de text en una finestra de pantalla completa.</li></ul>", 
        "es" : "Para la presentación visual de bloques de texto, hay un mecanismo disponible para lograr lo siguiente:<ul><li>El usuario puede seleccionar los colores de primer plano y de fondo.</li><li>El ancho no supera los 80 caracteres o glifos (40 si es CJK).</li><li>El texto no está justificado (alineado a los márgenes izquierdo y derecho).</li><li>El interlineado (interlineado) es al menos de espacio y medio dentro de los párrafos, y el interlineado es al menos 1,5 veces mayor que el interlineado.</li><li>El texto se puede cambiar de tamaño sin tecnología de asistencia hasta en un 200 por ciento de una manera que no requiere que el usuario se desplace horizontalmente para leer una línea de texto en una ventana de pantalla completa.</li></ul>", 
        "en" : "For the visual presentation of blocks of text, a mechanism is available to achieve the following:<ul><li>Foreground and background colors can be selected by the user.</li><li>Width is no more than 80 characters or glyphs (40 if CJK).</li><li>Text is not justified (aligned to both the left and the right margins).</li><li>Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing.</li><li>Text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text on a full-screen window.</li></ul>",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest criteri d'èxit és garantir que el text representat visualment es presenta de manera que es pugui percebre sense que la seva disposició interfereixi amb la seva llegibilitat. Les persones amb algunes discapacitats cognitives, del llenguatge i d'aprenentatge i alguns usuaris amb baixa visió no poden percebre el text i/o perdre el seu lloc de lectura si el text es presenta de manera difícil de llegir.</p><p>Les persones amb alguna discapacitat visual o cognitiva han de poder seleccionar el color del text i el color del fons. De vegades trien combinacions que semblen poc intuïtives per a algú sense aquesta discapacitat. De vegades aquestes combinacions tenen un contrast molt baix. De vegades només funcionen combinacions de colors molt específiques. El control del color o altres aspectes de la presentació del text fa una gran diferència en la seva comprensió.</p><p>Per a les persones amb alguna discapacitat lectora o visual, les línies llargues de text poden convertir-se en una barrera important. Tenen problemes per mantenir el seu lloc i seguir el flux del text. Tenir un bloc de text estret fa que sigui més fàcil per continuar a la línia següent d'un bloc. Les línies no han de superar els 80 caràcters o glifos (40 si CJK), on els glifos són l'element d'escriptura del sistema d'escriptura del text. Els estudis han demostrat que els caràcters xinesos, japonesos i coreans (CJK) són aproximadament el doble d'amplada que els caràcters que no són CJK quan tots dos tipus de caràcters es mostren amb característiques que aconsegueixen la mateixa llegibilitat, de manera que l'amplada de línia màxima per als caràcters CJK és la meitat de la de caràcters no CJK.</p><p>Les persones amb algunes discapacitats cognitives tenen dificultats per fer un seguiment del text on les línies estan juntes. Proporcionar espai addicional entre línies i paràgrafs els permet fer un millor seguiment de la línia següent i reconèixer quan han arribat al final d'un paràgraf. El millor és que hi hagi diverses opcions diferents, per exemple, espai i mig i espai doble per a l'interlineat. Per espai i mig dins dels paràgrafs volem dir que la part superior d'una línia està un 150% més enllà de la part superior de la línia que hi ha a sota del que seria cert quan el text estigui 'a espai únic' (l'espai predeterminat per a la font). Per l'espaiat de paràgrafs que és 1.</p><p>Les persones amb determinades discapacitats cognitives tenen problemes per llegir textos que estan justificats tant a l'esquerra com a la dreta. L'espaiat desigual entre les paraules en un text totalment justificat pot fer que l'espai 'rius de blanc' s'escorri per la pàgina dificultant i en alguns casos impossible la lectura. La justificació del text també pot fer que les paraules estiguin molt espaiades, de manera que els és difícil localitzar els límits de les paraules.</p><p>L'escala del contingut és principalment una responsabilitat de l'agent d'usuari. Els agents d'usuari que compleixen UAAG 1.0 Checkpoint 4.1 permeten als usuaris configurar l'escala de text. La responsabilitat de l'autor és crear contingut web que no impedeixi a l'agent d'usuari escalar el contingut i que permeti la redistribució del contingut dins de l'amplada actual de la finestra gràfica. Vegeu 1.4.2: Canviar la mida del text per a una discussió addicional sobre el canvi de mida del text.</p><p>L'escala del contingut és principalment una responsabilitat de l'agent d'usuari. Els agents d'usuari que compleixen UAAG 1.0 Checkpoint 4.1 permeten als usuaris configurar l'escala de text. La responsabilitat de l'autor és crear contingut web que no impedeixi a l'agent d'usuari escalar el contingut i que permeti la redistribució del contingut dins de l'amplada actual de la finestra gràfica. Vegeu 1.4.2: Canviar la mida del text per a una discussió addicional sobre el canvi de mida del text.</p><p>El requisit de desplaçament horitzontal no s'aplica als dispositius de pantalla petita on es poden mostrar paraules llargues en una sola línia i requereixen que els usuaris es desplacen horitzontalment. Als efectes d'aquest requisit, els autors s'han d'assegurar que el contingut compleix aquest requisit a les pantalles estàndard d'escriptori/ordinador portàtil amb la finestra del navegador maximitzada. Com que la gent generalment manté els seus ordinadors durant uns quants anys, és millor no confiar en les últimes resolucions de pantalla d'escriptori/portàtil, sinó tenir en compte les resolucions de visualització d'escriptori/ordinador portàtil habituals al llarg de diversos anys a l'hora de fer aquesta avaluació.</p><p>L'embolcall sempre hauria de ser possible sempre que les paraules no siguin tan llargues que una sola paraula sigui més de la meitat de l'amplada d'una pantalla completa. Els URI molt llargs poden sortir al costat d'una pantalla ampliada, però no es considerarien text per a 'llegir' i, per tant, no violarien aquesta disposició.</p><p>Aquesta disposició no vol dir que un usuari mai hauria d'utilitzar el desplaçament horitzontal. Només vol dir que no haurien de fer servir el desplaçament horitzontal cap endavant i cap enrere per llegir una línia de text. Per exemple, si una pàgina consta de dues columnes de text de la mateixa mida, automàticament compliria aquesta disposició. Ampliar la pàgina significaria que la primera columna estava completament a la pantalla i que l'usuari només podria desplaçar-se verticalment per la pàgina per llegir-la. Per llegir la segona columna, es desplaçarien horitzontalment cap a la dreta, on la columna de la dreta encaixaria completament dins de l'amplada de la pantalla, i llegiria aquesta columna sense més desplaçament horitzontal.</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es garantizar que el texto representado visualmente se presente de tal manera que pueda percibirse sin que su diseño interfiera con su legibilidad. Las personas con algunas discapacidades cognitivas, del lenguaje y del aprendizaje y algunos usuarios con baja visión no pueden percibir el texto y/o pierden su lugar de lectura si el texto se presenta de una manera que les resulta difícil de leer.</p><p>Las personas con alguna discapacidad visual o cognitiva deben poder seleccionar el color del texto y el color del fondo. A veces eligen combinaciones que parecen poco intuitivas para alguien sin esa discapacidad. A veces, estas combinaciones tienen un contraste muy bajo. A veces, solo les funcionan combinaciones de colores muy específicas. El control del color u otros aspectos de la presentación del texto marca una gran diferencia en su comprensión.</p><p>Para las personas con alguna discapacidad visual o de lectura, las largas líneas de texto pueden convertirse en una barrera importante. Tienen problemas para mantenerse en su lugar y seguir el flujo del texto. Tener un bloque de texto angosto les facilita continuar a la siguiente línea en un bloque. Las líneas no deben exceder los 80 caracteres o glifos (40 si es CJK), donde los glifos son el elemento de escritura en el sistema de escritura del texto. Los estudios han demostrado que los caracteres chinos, japoneses y coreanos (CJK) tienen aproximadamente el doble de ancho que los caracteres que no son CJK cuando ambos tipos de caracteres se muestran con características que logran la misma legibilidad, por lo que el ancho de línea máximo para los caracteres CJK es la mitad del de caracteres no CJK.</p><p>A las personas con algunas discapacidades cognitivas les resulta difícil rastrear el texto donde las líneas están muy juntas. Proporcionar espacio adicional entre líneas y párrafos les permite seguir mejor la línea siguiente y reconocer cuándo han llegado al final de un párrafo. Es mejor si hay varias opciones diferentes, por ejemplo, espacio y medio y espacio doble para el espacio entre líneas. Por espacio y medio dentro de los párrafos queremos decir que la parte superior de una línea está un 150 % más alejada de la parte superior de la línea que se encuentra debajo de lo que sería cierto cuando el texto tiene 'espaciado simple' (el espaciado predeterminado para la fuente). Por espacio entre párrafos que es 1.</p><p>Las personas con ciertas discapacidades cognitivas tienen problemas para leer textos justificados tanto a la izquierda como a la derecha. El espaciado desigual entre las palabras en un texto completamente justificado puede causar que el espacio en blanco corra por la página, lo que dificulta la lectura y, en algunos casos, la hace imposible. La justificación del texto también puede hacer que las palabras estén muy juntas, de modo que les resulte difícil ubicar los límites de las palabras.</p><p>La disposición de cambio de tamaño garantiza que el texto representado visualmente (caracteres de texto que se han mostrado para que se puedan ver [vs. caracteres de texto que todavía están en forma de datos, como ASCII]) se puede escalar correctamente sin necesidad de que el usuario se desplace hacia la izquierda y hacia la derecha. para ver todo el contenido. Cuando el contenido se ha creado para que esto sea posible, se dice que el contenido se redistribuye. Esto permite a las personas con baja visión y personas con discapacidades cognitivas aumentar el tamaño del texto sin desorientarse.</p><p>La escala del contenido es principalmente una responsabilidad del agente de usuario. Los agentes de usuario que cumplen con UAAG 1.0 Checkpoint 4.1 permiten a los usuarios configurar la escala de texto. La responsabilidad del autor es crear contenido web que no impida que el agente de usuario escale el contenido y que permita el reflujo del contenido dentro del ancho actual de la ventana gráfica. Consulte 1.4.2: Cambiar el tamaño del texto para ver una discusión adicional sobre el cambio de tamaño del texto.</p><p>El requisito de desplazamiento horizontal no está destinado a aplicarse a dispositivos de pantalla pequeña donde las palabras largas pueden mostrarse en una sola línea y requieren que los usuarios se desplacen horizontalmente. A los efectos de este requisito, los autores deben asegurarse de que el contenido cumpla con este requisito en pantallas estándar de computadoras de escritorio o portátiles con la ventana del navegador maximizada. Dado que las personas generalmente conservan sus computadoras durante varios años, es mejor no confiar en las últimas resoluciones de pantalla de computadoras de escritorio/portátiles, sino considerar las resoluciones de pantalla comunes de computadoras de escritorio/portátiles en el transcurso de varios años al realizar esta evaluación.</p><p>El ajuste siempre debe ser posible siempre que las palabras no sean tan largas que una sola palabra ocupe más de la mitad del ancho de una pantalla completa. Los URI muy largos pueden salirse del costado de una pantalla ampliada, pero no se considerarían texto para 'lectura' y, por lo tanto, no violarían esta disposición.</p><p>Esta disposición no significa que un usuario nunca necesite usar el desplazamiento horizontal. Solo significa que no necesitarían usar el desplazamiento horizontal hacia adelante y hacia atrás para leer una línea de texto. Por ejemplo, si una página consistiera en dos columnas de texto del mismo tamaño, cumpliría automáticamente con esta disposición. Ampliar la página significaría que la primera columna estaría completamente en la pantalla y el usuario podría simplemente desplazarse verticalmente hacia abajo en la página para leerla. Para leer la segunda columna, se desplazarían horizontalmente hacia la derecha, donde la columna de la derecha encajaría completamente dentro del ancho de la pantalla, y leerían esa columna sin más desplazamiento horizontal.</p>", 
        "en" : "<p>The intent of this Success Criterion is to ensure that visually rendered text is presented in such a manner that it can be perceived without its layout interfering with its readability. People with some cognitive, language and learning disabilities and some low vision users cannot perceive the text and/or lose their reading place if the text is presented in a manner that is difficult for them to read.</p><p>People with some visual or cognitive disabilities need to be able to select the color of text and the color of the background. They sometimes choose combinations that seem unintuitive to someone without that disability. Sometimes these combinations have very low contrast. Sometimes only very specific color combinations work for them. Control of color or other aspects of text presentation makes a huge difference to their comprehension.</p><p>For people with some reading or vision disabilities, long lines of text can become a significant barrier. They have trouble keeping their place and following the flow of text. Having a narrow block of text makes it easier for them to continue on to the next line in a block. Lines should not exceed 80 characters or glyphs (40 if CJK), where glyphs are the element of writing in the writing system for the text. Studies have shown that Chinese, Japanese and Korean (CJK) characters are approximately twice as wide as non-CJK characters when both types of characters are displayed with characteristics that achieve the same readability, so the maximum line width for CJK characters is half that of non-CJK characters.</p><p>People with some cognitive disabilities find it difficult to track text where the lines are close together. Providing extra space between lines and paragraphs allows them to better track the next line and to recognize when they have reached the end of a paragraph. It is best if there are several different options, for instance, space-and-a-half and double spacing for line spacing. By space and a half within paragraphs we mean that top of one line is 150% further from the top of the line below it than would be true when the text is 'single spaced' (the default spacing for the font). By Paragraph spacing that is 1.5 times larger than the line spacing we mean that the spacing from the top of the last line of 1 paragraph is 250% farther from the Top of the first line of the next paragraph (i.e., that there is a blank line between the two paragraphs that is 150% of the single space blank line).</p><p>People with certain cognitive disabilities have problems reading text that is both left and right justified. The uneven spacing between words in fully justified text can cause 'rivers of white' space to run down the page making reading difficult and in some cases impossible. Text justification can also cause words to be spaced closely together, so that it is difficult for them to locate word boundaries.</p><p>The resizing provision ensures that visually rendered text (text characters that have been displayed so that they can be seen [vs. text characters that are still in data form such as ASCII]) can be scaled successfully without requiring that the user scroll left and right to see all of the content. When the content has been authored so that this is possible, the content is said to reflow. This permits people with low vision and people with cognitive disabilities to increase the size of the text without becoming disoriented.</p><p>The scaling of content is primarily a user agent responsibility. User agents that satisfy UAAG 1.0 Checkpoint 4.1 allow users to configure text scale. The author's responsibility is to create Web content that does not prevent the user agent from scaling the content and that allows the reflow of the content within the current width of the viewport. See 1.4.2: Resize text for additional discussion of resizing text.</p><p>The horizontal scrolling requirement is not intended to apply to small-screen devices where long words may be displayed on a single line and require users to scroll horizontally. For the purposes of this requirement, authors should ensure that content meets this requirement on standard desktop/laptop displays with the browser window maximized. Since people generally keep their computers for several years, it is best not to rely on the latest desktop/laptop display resolutions but to consider the common desktop/laptop display resolutions over the course of several years when making this evaluation.</p><p>Wrapping should always be possible as long as words are not so long that a single word is more than half the width of a full screen. Very long URIs may run off the side of an enlarged screen, but they would not be considered text for 'reading' and, therefore, would not violate this provision.</p><p>This provision does not mean that a user would never need to use horizontal scrolling. It only means that they would not need to use horizontal scrolling back and forth to read a line of text. For example, if a page consisted of two equal sized columns of text, it would automatically meet this provision. Enlarging the page would mean that the first column was completely on screen and the user could just scroll vertically down the page to read it. To read the second column, they would horizontally scroll to the right, where the right hand column would then fit entirely within the width of the screen, and read that column without further horizontal scrolling.</p>",
      },
      "benefits" :
      {
        "ca" : "<p>Aquest criteri d'èxit ajuda els usuaris amb poca visió deixant-los veure el text sense distreure les funcions de presentació. Els permet configurar el text d'una manera que els sigui més fàcil de veure, deixant-los controlar el color i la mida dels blocs de text.</p><p>Aquest criteri d'èxit ajuda les persones amb discapacitats cognitives, del llenguatge i d'aprenentatge a percebre el text i fer un seguiment de la seva ubicació dins de blocs de text.</p><ul><li>Les persones amb algunes discapacitats cognitives poden llegir millor el text quan seleccionen les seves pròpies combinacions de color de primer pla i fons.</li><li>Les persones amb algunes discapacitats cognitives poden fer un seguiment de les seves ubicacions més fàcilment quan els blocs de text són estrets i quan poden configurar la quantitat d'espai entre línies i paràgrafs.</li><li>Les persones amb algunes discapacitats cognitives poden llegir el text més fàcilment quan l'espaiat entre les paraules és regular.</li></ul>", 
        "es" : "<p>Este Criterio de Conformidad ayuda a los usuarios con baja visión al permitirles ver el texto sin distraer las funciones de presentación. Les permite configurar el texto de manera que les resulte más fácil verlo al permitirles controlar el color y el tamaño de los bloques de texto.</p><p>Este Criterio de Conformidad ayuda a las personas con discapacidades cognitivas, del lenguaje y del aprendizaje a percibir el texto y rastrear su ubicación dentro de los bloques de texto.</p><ul><li>Las personas con algunas discapacidades cognitivas pueden leer mejor el texto cuando seleccionan sus propias combinaciones de colores de fondo y de primer plano.</li><li>Las personas con algunas discapacidades cognitivas pueden rastrear sus ubicaciones más fácilmente cuando los bloques de texto son estrechos y cuando pueden configurar la cantidad de espacio entre líneas y párrafos.</li><li>Las personas con algunas discapacidades cognitivas pueden leer textos con más facilidad cuando el espacio entre palabras es regular.</li></ul>", 
        "en" : "<p>This Success Criterion helps low vision users by letting them see text without distracting presentational features. It lets them configure text in ways that will be easier for them to see by letting them control the color and size of blocks of text.</p><p>This Success Criterion helps people with cognitive, language and learning disabilities perceive text and track their location within blocks of text.</p><ul><li>People with some cognitive disabilities can read text better when they select their own foreground and background color combinations.</li><li>People with some cognitive disabilities can track their locations more easily when blocks of text are narrow and when they can configure the amount of space between lines and paragraphs.</li><li>People with some cognitive disabilities can read text more easily when the spacing between words is regular.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },
    
    { // 1.4.9.
      "criteria" : 
      {
        "ca" : "1.4.9 Imatges de text (sense excepció", 
        "es" : "1.4.9 Imágenes de texto (sin excepción", 
        "en" : "1.4.9 Images of Text (No Exception)",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#images-of-text-no-exception", 
      "level" : "AAA",
      "version" : "2.1", 
      "goal" : 
      {
        "ca" : "Les imatges de text només es fan servir per a decoració pura o quan una presentació particular del text és essencial per a la informació que es transmet.", 
        "es" : "Las imágenes de texto solo se utilizan para decoración pura o cuando una presentación particular del texto es esencial para la información que se transmite.", 
        "en" : "Images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed.",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest criteri d'èxit és permetre que les persones que necessiten una presentació visual concreta del text puguin ajustar la presentació del text segons sigui necessari. Això inclou les persones que requereixen el text amb una mida de lletra, color de primer pla i fons, família de tipus de lletra, interlineat o alineació en particular.</p><p>Això significa implementar el text d'una manera que permeti canviar la seva presentació o proporcionar un mecanisme pel qual els usuaris poden seleccionar una presentació alternativa. L'ús d'imatges de text és un exemple d'implementació que no permet als usuaris alterar la presentació del text dins d'aquest.</p><p>En algunes situacions, una presentació visual particular del text és essencial per a la informació que es transmet. Això significa que la informació es perdria sense aquesta presentació visual en particular. En aquest cas, no cal implementar el text de manera que permeti canviar-ne la presentació. Això inclou text que mostra un aspecte visual concret del text, com ara una família de tipus de lletra concreta, o text que transmet una identitat, com ara text dins del logotip d'una empresa.</p><p>El text decoratiu no requereix implementar el text de manera que permeti canviar-ne la presentació.</p><p>La definició d'imatge de text conté la nota: Nota: això no inclou el text que forma part d'una imatge que contingui un altre contingut visual important. Alguns exemples d'aquestes imatges inclouen gràfics, captures de pantalla i diagrames que transmeten visualment informació important a través de més que només text.</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es permitir que las personas que requieren una presentación visual particular del texto puedan ajustar la presentación del texto según sea necesario. Esto incluye a las personas que requieren el texto en un tamaño de fuente particular, color frontal y de fondo, familia de fuentes, interlineado o alineación.</p><p>Esto significa implementar el texto de una manera que permita cambiar su presentación o proporcionar un mecanismo mediante el cual los usuarios puedan seleccionar una presentación alternativa. El uso de imágenes de texto es un ejemplo de una implementación que no permite a los usuarios alterar la presentación del texto que contiene.</p><p>En algunas situaciones, una presentación visual particular del texto es esencial para la información que se transmite. Esto significa que la información se perdería sin esa presentación visual en particular. En este caso, no se requiere implementar el texto de manera que permita cambiar su presentación. Esto incluye texto que demuestra un aspecto visual particular del texto, como una familia de fuentes en particular, o texto que transmite una identidad, como el texto dentro del logotipo de una empresa.</p><p>El texto que es decorativo no requiere implementar el texto de una manera que permita cambiar su presentación.</p><p>La definición de imagen de texto contiene la nota: Nota: Esto no incluye el texto que es parte de una imagen que contiene otro contenido visual significativo. Los ejemplos de tales imágenes incluyen gráficos, capturas de pantalla y diagramas que transmiten visualmente información importante a través de algo más que texto.</p>", 
        "en" : "<p>The intent of this Success Criterion is to enable people who require a particular visual presentation of text to be able to adjust the text presentation as required. This includes people who require the text in a particular font size, foreground and background color, font family, line spacing or alignment.</p><p>This means implementing the text in a manner that allows its presentation to be changed or providing a mechanism by which users can select an alternate presentation. Using images of text is an example of an implementation that does not allow users to alter the presentation of the text within it.</p><p>In some situations, a particular visual presentation of the text is essential to the information being conveyed. This means that information would be lost without that particular visual presentation. In this case implementing the text in a manner that allows its presentation to be changed is not required. This includes text that demonstrates a particular visual aspect of the text, such as a particular font family, or text that conveys an identity, such as text within a company logo.</p><p>Text that is decorative does not require implementing the text in a manner that allows its presentation to be changed.</p><p>The definition of image of text contains the note: Note: This does not include text that is part of a picture that contains significant other visual content. Examples of such pictures include graphs, screenshots, and diagrams which visually convey important information through more than just text.</p>",
      },
      "benefits" :
      {
        "ca" : "<ul><li>Persones amb baixa visió (que poden tenir problemes per llegir el text amb la família de tipus de lletra de l'autor, la mida i/o el color).</li><li>Persones amb problemes de seguiment visual (que poden tenir problemes per llegir el text amb l'interlineat i/o l'alineació de l'autor).</li><li>Persones amb discapacitats cognitives que afecten la lectura.</li></ul>", 
        "es" : "<ul><li>Personas con baja visión (que pueden tener problemas para leer el texto con la familia de fuentes, el tamaño y/o el color del autor).</li><li>Personas con problemas de seguimiento visual (que pueden tener problemas para leer el texto con el espacio entre líneas y/o la alineación del autor).</li><li>Personas con discapacidades cognitivas que afectan a la lectura.</li></ul>", 
        "en" : "<ul><li>People with low vision (who may have trouble reading the text with the authored font family, size and/or color).</li><li>People with visual tracking problems (who may have trouble reading the text with the authored line spacing and/or alignment).</li><li>People with cognitive disabilities that affect reading.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/images-of-text-no-exception.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/images-of-text-no-exception.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },
    
    { // 1.4.10.
      "criteria" : 
      {
        "ca" : "1.4.10 Reflux", 
        "es" : "1.4.10 Reflujo", 
        "en" : "1.4.10 Reflow",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#reflow", 
      "level" : "AA",
      "version" : "2.1", 
      "goal" : 
      {
        "ca" : "El contingut es pot presentar sense pèrdua dinformació o funcionalitat, i sense necessitat de desplaçar-se en dues dimensions per:<ul><li>Contingut de desplaçament vertical amb una amplada equivalent a 320 píxels CSS;</li><li>Contingut de desplaçament horitzontal a una alçada equivalent a 256 píxels CSS.</li></ul>Excepte per parts del contingut que requereixen un disseny bidimensional per al seu ús o significat.", 
        "es" : "El contenido se puede presentar sin pérdida de información o funcionalidad, y sin necesidad de desplazarse en dos dimensiones para:<ul><li>Contenido de desplazamiento vertical con un ancho equivalente a 320 píxeles CSS;</li><li>Contenido de desplazamiento horizontal a una altura equivalente a 256 píxeles CSS.</li></ul>Excepto por partes del contenido que requieren un diseño bidimensional para su uso o significado.", 
        "en" : "Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for:<ul><li>Vertical scrolling content at a width equivalent to 320 CSS pixels;</li><li>Horizontal scrolling content at a height equivalent to 256 CSS pixels.</li></ul>Except for parts of the content which require two-dimensional layout for usage or meaning.",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest criteri d'èxit és donar suport a les persones amb baixa visió que necessiten ampliar el text i llegir-lo en una sola columna. Quan s'utilitza el zoom del navegador per escalar el contingut al 400%, es redistribueix, és a dir, es presenta en una columna de manera que no cal desplaçar-se en més d'una direcció.</p><p>Per a persones amb baixa visió, el text ampliat amb redistribució permet llegir. És crític. L'ampliació permet la percepció dels personatges. Reflow permet el seguiment. El seguiment segueix les línies de text, inclòs el des del final d'una línia fins al començament de la línia següent.</p><p>És important evitar la necessitat de desplaçar-se en la direcció de la lectura per revelar línies tallades per la finestra gràfica, perquè aquest desplaçament augmenta significativament l'esforç necessari per llegir. També és important que el contingut no s'amagui fora de la pantalla. Per exemple, fer zoom en una pàgina de desplaçament vertical no hauria de fer que el contingut s'amagui a un costat.</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es ayudar a las personas con baja visión que necesitan ampliar el texto y leerlo en una sola columna. Cuando se utiliza el zoom del navegador para escalar el contenido al 400 %, se redistribuye, es decir, se presenta en una columna para que no sea necesario desplazarse en más de una dirección.</p><p>Para las personas con baja visión, el texto ampliado con reflujo permite la lectura. Esto es crítico. La ampliación permite la percepción de los personajes. El reflujo permite el seguimiento. El seguimiento es seguir líneas de texto, incluido ir desde el final de una línea hasta el principio de la siguiente.</p><p>Es importante evitar la necesidad de desplazarse en la dirección de lectura para revelar las líneas que están cortadas por la ventana gráfica, ya que dicho desplazamiento aumenta significativamente el esfuerzo necesario para leer. También es importante que el contenido no se oculte fuera de la pantalla. Por ejemplo, hacer zoom en una página que se desplaza verticalmente no debería hacer que el contenido se oculte a un lado.</p>", 
        "en" : "<p>The intent of this Success Criterion is to support people with low vision who need to enlarge text and read it in a single column. When the browser zoom is used to scale content to 400%, it reflows - i.e., it is presented in one column so that scrolling in more than one direction is not necessary.</p><p>For people with low vision, enlarged text with reflow enables reading. It is critical. Enlargement enables perception of characters. Reflow enables tracking. Tracking is following along lines of text, including getting from the end of one line to the beginning of the next line. </p><p>Avoiding the need to scroll in the direction of reading in order to reveal lines that are cut off by the viewport is important, because such scrolling significantly increases the effort required to read. It is also important that content is not hidden off-screen. For example, zooming into a vertically scrolling page should not cause content to be hidden to one side.</p>",
      },
      "benefits" :
      {
        "ca" : "<ul><li>Vista d'una columna en disseny responsiu. Un lloc utilitza disseny responsive. Quan una persona s'apropa a més del 300%, el disseny es redistribueix a una columna. L'usuari pot llegir el contingut fàcilment i no ha de desplaçar-se de costat per llegir-lo.</li><li>PDF que ofereix redistribució. En un PDF creat per adaptar-se a PDF/accessibilitat universal (ISO 14289), el contingut es pot redistribuir i ampliar per fer possible la lectura per a algú amb baixa visió.</li></ul>", 
        "es" : "<ul><li>Vista de una columna en diseño receptivo. Un sitio utiliza diseño receptivo. Cuando una persona se acerca a más del 300 %, el diseño se redistribuye a una columna. El usuario puede leer el contenido fácilmente y no tiene que desplazarse hacia los lados para leer.</li><li>PDF que ofrece redistribución.En un PDF creado para cumplir con PDF/Accesibilidad universal (ISO 14289), el contenido se puede redistribuir y acercar para que la lectura sea posible para alguien con visión reducida.</li></ul>", 
        "en" : "<ul><li>One column view in responsive design. A site uses responsive design. When a person zooms in to over 300%, the layout is reflowed to one column. The user can read the content easily and does not have to scroll sideways to read.</li><li>PDF offering reflow. In a PDF created to conform to PDF/Universal Accessibility (ISO 14289), the content can be reflowed and zoomed in to make reading possible for someone with low-vision.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/reflow.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/reflow.html#techniques",
      "verification" :
      {
        "ca" : "<p>Objectiu: assegurar que no cal fer scroll en dues dimensions en àrees de visualització reduïdes, millorant així l'experiència de les persones amb baixa visió.</p><p>El contingut s'ha de poder presentar sense pèrdua d'informació o funcionalitat i sense necessitat de realitzar scroll en dues dimensions en àrees de visualització reduïdes (320x256 píxels CSS).</p>", 
        "es" : "<p>Objetivo: asegurar que no es necesario realizar scroll en dos dimensiones en áreas de visualización reducidas, mejorando así la experiencia de las personas con baja visión.</p><p>El contenido debe poder presentarse sin pérdida de información o funcionalidad y sin necesidad de realizar scroll en dos dimensiones en áreas de visualización reducidas (320x256 píxeles CSS).</p>", 
        "en" : "<p>Goal: to ensure that it is not necessary to scroll in two dimensions in reduced display areas, thus improving the experience of people with low vision.</p><p>The content must be able to be presented without loss of information or functionality and without the need to scroll in two dimensions in reduced display areas (320x256 CSS pixels).</p>",
      }, 
      "tools" :
      {
        "ca" : "<p>Nom de l'eina: Inspector de codi font del navegador</p><p>Procediment de comprovació:</p><ol><li>Usant l'eina d'inspecció de codi del navegador:<ul><li>A Chrome, feu clic al botó “Toggle device toolbar” de la part superior esquerra</li><li>Al Firefox, feu clic al botó “Vista de disseny adaptable” de la part superior dreta</li></ul></li><li>A la finestra on es visualitza la pàgina, apareix a la part superior uns camps on es pot modificar la resolució per imitar el comportament d'un dispositiu. Seleccionar una resolució de 320x256.</li><li>Verificar que totes les funcionalitats de la pàgina són operables i es visualitzen de manera correcta sense necessitat de fer doble scroll.</li></ol>", 
        "es" : "<p>Nombre de la herramienta: Inspector de código fuente del navegador</p><p>Procedimiento de comprobación:</p><ol><li>Usando la herramienta de inspección de código del navegador:<ul><li>En Chrome, pulsar en el botón “Toggle device toolbar” de la parte superior izquierda</li><li>En Firefox, pulsar en el botón “Vista de diseño adaptable” de la parte superior derecha</li></ul></li><li>En la ventana donde se visualiza la página, aparece en la parte superior unos campos en los que se puede modificar la resolución para imitar el comportamiento de un dispositivo. Seleccionar una resolución de 320x256.</li><li>Verificar que todas las funcionalidades de la página son operables y se visualizan de manera correcta sin necesidad de hacer doble scroll.</li></ol>", 
        "en" : "<p>Tool name: Browser Source Code Inspector</p><p>Checking procedure:</p><ol><li>Using the Browser Source Code Inspection Tool:<ul><li>In Chrome, click the “Toggle device toolbar” button on the top left</li><li>In Firefox, click the “Responsive Layout View” button on the top right</li></ul></li><li>In the window where the page is displayed, some fields appear at the top in which the resolution can be modified to imitate the behavior of a device. Select a resolution of 320x256.</li><li></li>Verify that all the functionalities of the page are operable and are displayed correctly without the need to scroll twice.</ol>",
      },
      "category" : ["structure"]
    },
    
    { // 1.4.11.
      "criteria" : 
      {
        "ca" : "1.4.11 Contrast sense text", 
        "es" : "1.4.11 Contraste sin texto", 
        "en" : "1.4.11 Non-text Contrast",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#non-text-contrast", 
      "level" : "AA",
      "version" : "2.1", 
      "goal" : 
      {
        "ca" : "La presentació visual del següent té una relació de contrast d'almenys 3:1 davant dels colors adjacents:<ul><li>Components de la interfície d'usuari: informació visual necessària per identificar els components i els estats de la interfície d'usuari, excepte els components inactius o quan l'aparença del component la determina l'agent d'usuari i l'autor no la modifica;</li><li>Objectes gràfics: Parts de gràfics necessaris per comprendre el contingut, excepte quan una presentació particular de gràfics és essencial per a la informació que es transmet.</li></ul>", 
        "es" : "	La presentación visual de lo siguiente tiene una relación de contraste de al menos 3:1 frente a los colores adyacentes:<ul><li>Componentes de la interfaz de usuario: información visual necesaria para identificar los componentes y estados de la interfaz de usuario, excepto los componentes inactivos o cuando la apariencia del componente la determina el agente de usuario y el autor no la modifica;</li><li>Objetos gráficos: Partes de gráficos necesarios para comprender el contenido, excepto cuando una presentación particular de gráficos es esencial para la información que se transmite.</li></ul>", 
        "en" : "The visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s):<ul><li>User Interface Components : Visual information required to identify user interface components and states, except for inactive components or where the appearance of the component is determined by the user agent and not modified by the author;</li><li>Graphical Objects : Parts of graphics required to understand the content, except when a particular presentation of graphics is essential to the information being conveyed.</li></ul>",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest criteri d'èxit és garantir que els components actius de la interfície d'usuari (és a dir, els controls) i els gràfics significatius són distingibles per persones amb baixa visió moderada. Els requisits i la justificació són similars als del text gran a 1.4.3 Contrast (mínim).</p><p>Els controls de baix contrast són més difícils de percebre i les persones amb discapacitat visual els poden perdre completament. De la mateixa manera, si es necessita un gràfic per entendre el contingut o la funcionalitat de la pàgina web, hauria de ser perceptible per persones amb baixa visió o altres discapacitats sense necessitat de tecnologia d'assistència que millori el contrast.</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es garantizar que las personas con visión moderadamente baja puedan distinguir los componentes activos de la interfaz de usuario (es decir, los controles) y los gráficos significativos. Los requisitos y la justificación son similares a los del texto grande en 1.4.3 Contraste (mínimo).</p><p>Los controles de bajo contraste son más difíciles de percibir y las personas con discapacidad visual pueden pasarlos por alto por completo. De manera similar, si se necesita un gráfico para comprender el contenido o la funcionalidad de la página web, entonces debe ser perceptible para las personas con baja visión u otras discapacidades sin necesidad de tecnología de asistencia que realce el contraste.</p>", 
        "en" : "<p>The intent of this Success Criterion is to ensure that active user interface components (i.e., controls) and meaningful graphics are distinguishable by people with moderately low vision. The requirements and rationale are similar to those for large text in 1.4.3 Contrast (Minimum).</p><p>Low contrast controls are more difficult to perceive, and may be completely missed by people with a visual impairment. Similarly, if a graphic is needed to understand the content or functionality of the webpage then it should be perceivable by people with low vision or other impairments without the need for contrast-enhancing assistive technology.</p>",
      },
      "benefits" :
      {
        "ca" : "Les persones amb baixa visió sovint tenen dificultats per percebre gràfics que tenen un contrast insuficient. Això es pot agreujar si la persona té una deficiència de visió del color que redueix encara més el contrast. Proporcionar una luminància relativa (diferència de lluminositat) de 3:1 o més pot fer que aquests elements es distingeixin més quan la persona no veu una gamma completa de colors.", 
        "es" : "Las personas con baja visión a menudo tienen dificultad para percibir gráficos que tienen un contraste insuficiente. Esto puede empeorar si la persona tiene una deficiencia en la visión del color que reduce aún más el contraste. Proporcionar una luminancia relativa (diferencia de luminosidad) de 3:1 o mayor puede hacer que estos elementos se distingan más cuando la persona no ve una gama completa de colores.", 
        "en" : "People with low vision often have difficulty perceiving graphics that have insufficient contrast. This can be exacerbated if the person has a color vision deficiency that lowers the contrast even further. Providing a relative luminance (lightness difference) of 3:1 or greater can make these items more distinguishable when the person does not see a full range of colors.",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html#techniques",
      "verification" :
      {
        "ca" : "<p>Objectiu: proporcionar el contrast suficient entre el primer pla i el fons en els components d'interfície d'usuari i objectes gràfics perquè les persones amb baixa visió puguin llegir el contingut.</p><p>S'ha d'assegurar una ràtio mínim de contrast d'almenys 3:1 als colors adjacents de:</p><ul><li>Components de la interfície d'usuari: la informació visual necessària per identificar els components de la interfície d'usuari i els estats.</li><li>Objectes gràfics: totes les parts dels gràfics que siguin necessàries per comprendre el contingut.</li></ul>", 
        "es" : "<p>Objetivo: proporcionar el suficiente contraste entre el primer plano y el fondo en los componentes de interfaz de usuario y objetos gráficos para que las personas con baja visión puedan leer el contenido.</p><p>Se debe asegurar un ratio mínimo de contraste de al menos 3:1 en los colores adyacentes de:</p><ul><li>Componentes de la interfaz de usuario: la información visual necesaria para identificar los componentes de la interfaz de usuario y los estados.</li><li>Objetos gráficos: todas las partes de los gráficos que sean necesarias para comprender el contenido.</li></ul>", 
        "en" : "<p>Goal: to provide sufficient contrast between the foreground and background in user interface components and graphical objects so that people with low vision can read the content.</p><p>A ratio must be ensured. minimum contrast of at least 3:1 in adjacent colors of:</p><ul><li>UI Components: The visual information needed to identify UI components and states.</li><li>Graphic objects: all the parts of the graphics that are necessary to understand the content.</li></ul>",
      }, 
      "tools" :
      {
        "ca" : "<p>Nom de l'eina: Colour Contrast Analyser</p><p>Procediment de comprovació:</p><ol><li>Localitzar tots els elements visuals que siguin necessaris per a la comprensió o interactuació, com per exemple: <ul><li>Components d'interfície d'usuari com ara botons o camps de formulari.</li><li>Objectes gràfics com les icones (sempre que representin funcionalitats essencials per comprendre el contingut), diagrames o gràfiques.</li ><li>Indicador del focus dels elements</li></ul></li><li>Comprovar que presenten un contrast d'almenys 3:1 amb els colors adjacents. Per fer-ho, amb l'eina Colour Contrast Analyser s'utilitzaran les icones següents per seleccionar colors adjacents:<ul><li>Amb el comptagotes a la secció de 'Foreground colour' seleccionar el color principal (p.ex. el color de fons de un botó, el color de la vora d'un camp de formulari, el color d'una línia d'una gràfica...)</li><li>Amb el comptagotes a la secció de 'Background colour' seleccionar el color adjacent al seleccionat a l'opció “a” (p.ex. el fons de la pàgina, el fons d'un altre component...)</li><li>Comprovar que el “Contrast ratio” que apareix al costat de “WCAG 2.1 resuts” és superior a 3:1.</li></ul></li></ol>", 
        "es" : "<p>Nombre de la herramienta: Colour Contrast Analyser</p><p>Procedimiento de comprobación:</p><ol><li>Localizar todos los elementos visuales que sean necesarios para la comprensión o interactuación, como por ejemplo:<ul><li>Componentes de interfaz de usuario como los botones o campos de formulario.</li><li>Objetos gráficos como los iconos (siempre que representen funcionalidades esenciales para comprender el contenido), diagramas o gráficas.</li><li>Indicador del foco de los elementos</li></ul></li><li>Comprobar que presentan un contraste de al menos 3:1 con los colores adyacentes. Para ello, con la herramienta Colour Contrast Analyser se utilizarán los siguientes iconos para seleccionar colores adyacentes:<ul><li>Con el cuentagotas en la sección de 'Foreground colour' seleccionar el color principal (p.ej. el color de fondo de un botón, el color del borde de un campo de formulario, el color de una línea de una gráfica...)</li><li>Con el cuentagotas en la sección de 'Background colour' seleccionar el color adyacente al seleccionado en la opción “a” (p.ej.el fondo de la página, el fondo de otro componente...)</li><li>Comprobar que el “Contrast ratio” que aparece al lado de “WCAG 2.1 resuts” es superior a 3:1.</li></ul></li></ol>", 
        "en" : "<p>Tool name: Color Contrast Analyzer</p><p>Check procedure:</p><ol><li>Locate all the visual elements that are necessary for understanding or interaction, such as: <ul><li>User interface components such as buttons or form fields.</li><li>Graphic objects such as icons (as long as they represent essential functionalities to understand the content), diagrams or graphs.</li ><li>Element focus indicator</li></ul></li><li>Check that they have a contrast of at least 3:1 with the adjacent colors. To do this, with the Color Contrast Analyzer tool the following icons will be used to select adjacent colors:<ul><li>With the dropper in the 'Foreground colour' section select the main color (eg the background color of a button, the border color of a form field, the color of a graph line...)</li><li>With the dropper in the 'Background colour' section select the color adjacent to the one selected in option “a” (eg the background of the page, the background of another component...)</li><li>Check that the “Contrast ratio” that appears next to “WCAG 2.1 resuts” is greater than 3:1.</li></ul></li></ol>",
      },
      "category" : ["colour", "forms-and-UI"]
    },
    
    { // 1.4.12.
      "criteria" : 
      {
        "ca" : "1.4.12 Espaiat de text", 
        "es" : "1.4.12 Espaciado de texto", 
        "en" : "1.4.12 Text Spacing",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#text-spacing", 
      "level" : "AA",
      "version" : "2.1", 
      "goal" : 
      {
        "ca" : "Al contingut implementat mitjançant llenguatges de marcatge que admeten les següents propietats d'estil de text, no es produeix pèrdua de contingut o funcionalitat en configurar tot el següent i no canviar cap altra propietat d'estil:<ul><li>Alçada de línia (interlineat) a almenys 1,5 vegades la mida de font;</li><li>Espaiar els paràgrafs següents almenys 2 vegades la mida de la font;</li><li>Espaiat entre lletres (seguiment) d'almenys 0,12 vegades la mida de la font;</li><li>Espaiat entre paraules d'almenys 0,16 vegades la mida de la font.</li></ul>Excepció: els llenguatges humans i les escriptures que no usen una o més d'aquestes propietats d'estil de text al text escrit poden conformar-se usant només les propietats que existeixen per a aquesta combinació de llenguatge i escriptura.", 
        "es" : "En el contenido implementado mediante lenguajes de marcado que admiten las siguientes propiedades de estilo de texto, no se produce pérdida de contenido o funcionalidad al configurar todo lo siguiente y no cambiar ninguna otra propiedad de estilo:<ul><li>Altura de línea (interlineado) a al menos 1,5 veces el tamaño de fuente;</li><li>Espaciar los siguientes párrafos al menos 2 veces el tamaño de la fuente;</li><li>Espaciado entre letras (seguimiento) de al menos 0,12 veces el tamaño de la fuente;</li><li>Espaciado entre palabras de al menos 0,16 veces el tamaño de la fuente.</li></ul>Excepción: los lenguajes humanos y las escrituras que no usan una o más de estas propiedades de estilo de texto en el texto escrito pueden conformarse usando solo las propiedades que existen para esa combinación de lenguaje y escritura.", 
        "en" : "In content implemented using markup languages that support the following text style properties, no loss of content or functionality occurs by setting all of the following and by changing no other style property:<ul><li>Line height (line spacing) to at least 1.5 times the font size;</li><li>Spacing following paragraphs to at least 2 times the font size;</li><li>Letter spacing (tracking) to at least 0.12 times the font size;</li><li>Word spacing to at least 0.16 times the font size.</li></ul>Exception: Human languages and scripts that do not make use of one or more of these text style properties in written text can conform using only the properties that exist for that combination of language and script.",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest criteri d'èxit (SC) és garantir que la gent pugui anul·lar l'espaiat de text especificat per l'autor per millorar la seva experiència de lectura. Cadascun dels requisits estipulats a les quatre vinyetes del SC permet que l'usuari pugui adaptar l'estil del text a les seves necessitats.</p><p>Les mètriques especificades estableixen una línia de base mínima. Els valors entre les mètriques de l'autor i les mètriques especificades en aquest SC no haurien de tenir pèrdua de contingut ni de funcionalitat.</p><p>Aquest SC se centra en la capacitat d'augmentar l'espai entre línies, paraules, lletres i paràgrafs. Qualsevol combinació d'aquests pot ajudar l'usuari a llegir el text de manera eficaç. A més, garantir que els usuaris puguin anul·lar la configuració de l'autor per a l'espaiat també augmenta significativament la probabilitat que l'usuari pugui establir altres preferències d'estil. Per exemple, és possible que un usuari hagi de canviar a una família de tipus de lletra més àmplia que la que l'autor ha establert per llegir el text amb eficàcia.</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad (SC) es garantizar que las personas puedan anular el espaciado de texto especificado por el autor para mejorar su experiencia de lectura. Cada uno de los requisitos estipulados en las cuatro viñetas del SC ayuda a garantizar que el usuario pueda adaptar el estilo del texto para satisfacer sus necesidades.</p><p>Las métricas especificadas establecen una línea base mínima. Los valores entre las métricas del autor y las métricas especificadas en esta SC no deben tener pérdida de contenido o funcionalidad.</p><p>Este SC se centra en la capacidad de aumentar el espacio entre líneas, palabras, letras y párrafos. Cualquier combinación de estos puede ayudar a un usuario a leer el texto de manera efectiva. Además, garantizar que los usuarios puedan anular la configuración del autor para el espaciado también aumenta significativamente la probabilidad de que el usuario pueda establecer otras preferencias de estilo. Por ejemplo, un usuario puede necesitar cambiar a una familia de fuentes más amplia que la establecida por el autor para poder leer el texto de manera efectiva.</p>", 
        "en" : "<p>The intent of this Success Criterion (SC) is to ensure that people can override author specified text spacing to improve their reading experience. Each of the requirements stipulated in the SC's four bullets helps ensure text styling can be adapted by the user to suit their needs.</p><p>The specified metrics set a minimum baseline. The values in between the author's metrics and the metrics specified in this SC should not have loss of content or functionality.</p><p>This SC focuses on the ability to increase spacing between lines, words, letters, and paragraphs. Any combination of these may assist a user with effectively reading text. As well, ensuring users can override author settings for spacing also significantly increases the likelihood other style preferences can be set by the user. For example, a user may need to change to a wider font family than the author has set in order to effectively read text.</p>",
      },
      "benefits" :
      {
        "ca" : "<ul><li>Les persones amb baixa visió que necessiten més espai entre línies, paraules i lletres són capaços de llegir text.</li><li>Les persones amb dislèxia poden augmentar l'espai entre línies, paraules i lletres per augmentar la velocitat de lectura.</li><li>Tot i que aquest SC no ho requereix, els espais en blanc entre blocs de text poden ajudar les persones amb discapacitats cognitives a discernir seccions i cridar caselles.</li></ul>", 
        "es" : "<ul><li>Las personas con baja visión que necesitan más espacio entre líneas, palabras y letras pueden leer el texto.</li><li>Las personas con dislexia pueden aumentar el espacio entre líneas, palabras y letras para aumentar la velocidad de lectura</li><li>Aunque no es un requisito de esta SC, los espacios en blanco entre bloques de texto pueden ayudar a las personas con discapacidades cognitivas a distinguir secciones y marcar cuadros.</li></ul>", 
        "en" : "<ul><li>People with low vision who require increased space between lines, words, and letters are able to read text.</li><li>People with dyslexia may increase space between lines, words, and letters to increase reading speed.</li><li>Although not required by this SC, white space between blocks of text can help people with cognitive disabilities discern sections and call out boxes.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html#techniques",
      "verification" :
      {
        "ca" : "<p>Objectiu: assegurar que els usuaris puguin modificar algunes de les característiques del text per adaptar el contingut a les seves necessitats.</p><p>Heu de permetre un ajustament de les següents característiques del text sense que es perdi contingut o funcionalitat: </p><ol><li>Ajustar l'alt de la línia fins a almenys 1.5 vegades la mida de la font</li><li>Espaciar els paràgrafs fins a almenys el doble de la mida de la font</li> <li>Ajustar l'espai entre lletres fins a almenys 0.12 vegades la mida de la font</li><li>Ajustar l'espaiat entre paraules fins a almenys 0.16 vegades la mida de la font.</li></ol>", 
        "es" : "<p>Objetivo: asegurar que los usuarios puedan modificar algunas de las características del texto para adaptar el contenido a sus necesidades.</p><p>Debe permitirse un ajuste de las siguientes características del texto sin que se pierda contenido o funcionalidad:</p><ol><li>Ajustar el alto de la línea hasta al menos 1.5 veces el tamaño de la fuente</li><li>Espaciar los párrafos hasta al menos el doble del tamaño de la fuente</li><li>Ajustar el espacio entre letras hasta al menos 0.12 veces el tamaño de la fuente</li><li>Ajustar el espaciado entre palabras hasta al menos 0.16 veces el tamaño de la fuente.</li></ol>", 
        "en" : "<p>Objective: to ensure that users can modify some of the features of the text to adapt the content to their needs.</p><p>An adjustment of the following features of the text should be allowed without losing content or functionality: </p><ol><li>Adjust line height to at least 1.5 times the font size</li><li>Space paragraphs to at least twice the font size</li> <li>Adjust letter spacing to at least 0.12 times the font size</li><li>Adjust word spacing to at least 0.16 times the font size.</li></ol>",
      }, 
      "tools" :
      {
        "ca" : "<p>Nom de l'eina: Bookmarklet “Text spacing” de Steve Faulkner</p><p>Procediment de comprovació:</p><ol><li>A la barra de marcadors del navegador, polsar sobre el marcador “ Text spacing”. L'aspecte gràfic de la web haurà hagut de canviar per mostrar unes característiques del text que compleixen els criteris anteriors.</li><li>Comprovar que amb la nova visualització de pantalla no hi ha:<ul><li>Textos tallats</li><li>Superposicions de textos</li></ul></li></ol>", 
        "es" : "<p>Nombre de la herramienta: Bookmarklet “Text spacing” de Steve Faulkner</p><p>Procedimiento de comprobación:</p><ol><li>En la barra de marcadores del navegador, pulsar sobre el marcador “Text spacing”. El aspecto gráfico de la web habrá tenido que cambiar para mostrar unas características del texto que cumplen los criterios anteriores.</li><li>Comprobar que con la nueva visualización de pantalla no existen:<ul><li>Textos cortados</li><li>Superposiciones de textos</li></ul></li></ol>", 
        "en" : "<p>Tool name: Steve Faulkner's “Text spacing” bookmarklet</p><p>Check procedure:</p><ol><li>In the browser's bookmarks bar, click on the bookmark “ Text spacing”. The graphic aspect of the web will have had to change to show some characteristics of the text that meet the above criteria.</li><li>Check that with the new screen display there are no:<ul><li>Cut texts</li><li>Text Overlays</li></ul></li></ol>",
      },
      "category" : ["structure"]
    },
    
    { // 1.4.13.
      "criteria" : 
      {
        "ca" : "1.4.13 Contingut en Hover o Focus", 
        "es" : "1.4.13 Contenido en Hover o Focus", 
        "en" : "1.4.13 Content on Hover or Focus",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus", 
      "level" : "AA",
      "version" : "2.1", 
      "goal" : 
      {
        "ca" : "On rebre i després treure el punter o el focus del teclat desencadena contingut addicional perquè es torni visible i després s'oculti, el següent és cert:<ul><li>Un sol ús: hi ha un mecanisme disponible per descartar el contingut addicional sense moure el punter o el focus del teclat, llevat que el contingut addicional comuniqui un error d'entrada o no oculti o reemplaceu un altre contingut;</li><li>Hoverable: si el punter pot activar el contingut addicional, aleshores el punter es pot moure sobre el contingut addicional sense que desaparegui el contingut addicional;</li><li>Persistent: el contingut addicional roman visible fins que s'elimina el disparador de desplaçament o enfocament, l'usuari el descarta o la informació ja no és vàlida.</li></ul>Excepció: la presentació visual del contingut addicional està controlada per l'agent d'usuari i no l'ha modificat l'autor.", 
        "es" : "Donde recibir y luego quitar el puntero o el foco del teclado desencadena contenido adicional para que se vuelva visible y luego se oculte, lo siguiente es cierto:<ul><li>Desechable: hay un mecanismo disponible para descartar el contenido adicional sin mover el puntero o el foco del teclado, a menos que el contenido adicional comunique un error de entrada o no oculte o reemplace otro contenido;</li><li>Hoverable: si el puntero puede activar el contenido adicional, entonces el puntero se puede mover sobre el contenido adicional sin que desaparezca el contenido adicional;</li><li>Persistente: el contenido adicional permanece visible hasta que se elimina el disparador de desplazamiento o enfoque, el usuario lo descarta o su información ya no es válida.</li></ul>Excepción: la presentación visual del contenido adicional está controlada por el agente de usuario y no es modificada por el autor.", 
        "en" : "Where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true:<ul><li>Dismissable : A mechanism is available to dismiss the additional content without moving pointer hover or keyboard focus, unless the additional content communicates an input error or does not obscure or replace other content;</li><li>Hoverable : If pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing;</li><li>Persistent : The additional content remains visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid.</li></ul>Exception: The visual presentation of the additional content is controlled by the user agent and is not modified by the author.",
      },
      "intent" : 
      {
        "ca" : "<p>El contingut addicional que apareix i desapareix en coordinació amb el focus del teclat o el punter del cursor sovint provoca problemes d'accessibilitat. Els motius d'aquests problemes inclouen:</p><ol><li>És possible que l'usuari no tingués la intenció de desencadenar la interacció</li><li>És possible que l'usuari no sàpiga que ha aparegut contingut nou</li><li>El nou contingut pot interferir amb la capacitat d'un usuari per fer una tasca</li></ul><p>Alguns exemples d'aquestes interaccions poden incloure consells d'eines personalitzats, submenús i altres finestres emergents no modals que es mostren al passar el cursor i al focus. La intenció d'aquest criteri d'èxit és garantir que els autors que fan que aparegui i desaparegui contingut addicional d'aquesta manera han de dissenyar la interacció de manera que els usuaris puguin:</p><ul><li>percebre el contingut addicional I</li><li>Descartar-lo sense interrompre la seva experiència a la pàgina.</li></ul><p>Normalment hi ha mitjans més previsibles i accessibles per afegir contingut a la pàgina, que es recomana als autors que utilitzin. Si un autor decideix fer aparèixer i desaparèixer contingut addicional en coordinació amb el focus i el teclat, aquest criteri d'èxit especifica tres condicions que s'han de complir:</p><ul><li>Descartable</li><li>Flotable</li><li>Persistent</li></ul><p>Cadascun d'ells es tracta en una secció separada.</p>", 
        "es" : "<p>El contenido adicional que aparece y desaparece en coordinación con el enfoque del teclado o el desplazamiento del puntero a menudo genera problemas de accesibilidad. Las razones de tales problemas incluyen:</p><ol><li>Es posible que el usuario no haya tenido la intención de desencadenar la interacción</li><li>El usuario puede no saber que ha aparecido nuevo contenido</li><li>El nuevo contenido puede interferir con la capacidad del usuario para realizar una tarea</li></ul><p>Los ejemplos de tales interacciones pueden incluir información sobre herramientas personalizada, submenús y otras ventanas emergentes no modales que se muestran al pasar el mouse y enfocar. La intención de este criterio de éxito es garantizar que los autores que hacen que aparezca y desaparezca contenido adicional de esta manera deben diseñar la interacción de tal manera que los usuarios puedan:</p><ul><li>Percibir el contenido adicional Y</li><li>Descartarlo sin interrumpir su experiencia en la página.</li></ul><p>Por lo general, existen medios más predecibles y accesibles para agregar contenido a la página, que se recomienda a los autores que utilicen. Si un autor elige hacer que aparezca y desaparezca contenido adicional en coordinación con el cursor y el enfoque del teclado, este criterio de éxito especifica tres condiciones que deben cumplirse:</p><ul><li>Descartable</li><li>Flotante</li><li>Persistente</li></ul><p>Cada uno de estos se discute en una sección separada.</p>", 
        "en" : "<p>Additional content that appears and disappears in coordination with keyboard focus or pointer hover often leads to accessibility issues. Reasons for such issues include:</p><ol><li>The user may not have intended to trigger the interaction</li><li>The user may not know new content has appeared</li><li>The new content may intefere with a user's ability to do a task</li></ul><p>Examples of such interactions can include custom tooltips, sub-menus and other nonmodal popups which display on hover and focus. The intent of this success criterion is to ensure that authors who cause additional content to appear and disappear in this manner must design the interaction in such a way that users can:</p><ul><li>Perceive the additional content AND</li><li>Dismiss it without disrupting their page experience.</li></ul><p>There are usually more predictable and accessible means of adding content to the page, which authors are recommended to employ. If an author does choose to make additional content appear and disappear in coordination with hover and keyboard focus, this success criterion specifies three conditions that must be met:</p><ul><li>Dismissable</li><li>Hoverable</li><li>Persistent</li></ul><p>Each of these is discussed in a separate section.</p>",
      },
      "benefits" :
      {
        "ca" : "<ul><li>Els usuaris amb baixa visió que visualitzin contingut amb ampliació podran veure-ho millor al passar el cursor o enfocar sense reduir l'ampliació desitjada.</li><li>Els usuaris que augmenten la mida dels cursors del ratolí mitjançant la configuració de la plataforma o la tecnologia d'assistència podran utilitzar una tècnica per veure contingut enfosquit al passar el cursor.</li><li>Els usuaris amb baixa visió o discapacitats cognitives tindran temps suficient per percebre contingut addicional que apareix al passar el cursor o enfocar i veure el contingut activador amb menys distracció.</li><li>Els usuaris amb poca precisió del punter podran descartar més fàcilment contingut addicional activat sense voler</li></ul>", 
        "es" : "<ul><li>Los usuarios con baja visión que ven el contenido bajo aumento podrán ver mejor el contenido al pasar el mouse o enfocarlo sin reducir el aumento deseado.</li><li>Los usuarios que aumenten el tamaño de los cursores del mouse a través de la configuración de la plataforma o la tecnología de asistencia podrán emplear una técnica para ver el contenido oculto al pasar el mouse.</li><li>Los usuarios con problemas de visión o discapacidades cognitivas tendrán el tiempo adecuado para percibir el contenido adicional que aparece al pasar el mouse por encima o al enfocar y para ver el contenido desencadenante con menos distracción.</li><li>los usuarios con baja precisión del puntero podrán descartar más fácilmente el contenido adicional activado involuntariamente</li></ul>", 
        "en" : "<ul><li>Users with low vision who view content under magnification will be better able to view content on hover or focus without reducing their desired magnification.</li><li>Users who increase the size of mouse cursors via platform settings or assistive technology will be able to employ a technique to view obscured content on hover.</li><li>Users with low vision or cognitive disabilities will have adequate time to perceive additional content appearing on hover or focus and to view the trigger content with less distraction.</li><li>Users with low pointer accuracy will be able to more easily dismiss unintentionally-triggered additional content.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html#techniques",
      "verification" :
      {
        "ca" : "<p>Objectiu: assegurar que els continguts que es mostren o oculten quan un element rep o perd el punter o el focus del teclat poden ser percebuts i descartats pels usuaris, sense que perjudiqui lexperiència dús</p><p> Si quan un element rep o perd el punter (p. ex. hover del ratolí) o el focus del teclat (focus) es mostra o oculta algun contingut addicional, aleshores s'ha de complir el següent:</p><ul><li >Heu d'haver disponible un mecanisme que permeti descartar el contingut addicional sense necessitat de moure el punter o canviar el focus del teclat tret que el contingut addicional informi sobre un error a l'entrada de dades o no tapi o reemplaci un altre contingut.</li><li>Si el punter pot mostrar el contingut addicional, llavors el punter es pot moure sobre el contingut addicional sense que aquest desaparegui.</li><li>El contingut addicional ha de romandre visible fins que es retiri el punter o el focus del teclat o bé l'usuari el descarti (pel primer punt) o la seva informació no segueixi sent vàlida.</li></ul>", 
        "es" : "<p>Objetivo: asegurar que los contenidos que se muestran u ocultan cuando un elemento recibe o pierde el puntero o el foco del teclado pueden ser percibidos y descartados por los usuarios, sin que perjudique la experiencia de uso</p><p>Si cuando un elemento recibe o pierde el puntero (p. ej. hover del ratón) o el foco del teclado (focus) se muestra u oculta algún contenido adicional, entonces se debe cumplir lo siguiente:</p><ul><li>Debe haber disponible un mecanismo que permita descartar el contenido adicional sin necesidad de mover el puntero o cambiar el foco del teclado a no ser que el contenido adicional informe acerca de un error en la entrada de datos o no tape o reemplace otro contenido.</li><li>Si el puntero puede mostrar el contenido adicional, entonces el puntero se puede mover sobre el contenido adicional sin que éste desaparezca.</li><li>El contenido adicional debe permanecer visible hasta que se retire el puntero o el foco del teclado o bien el usuario lo descarte (por el primer punto) o su información no siga siendo válida.</li></ul>", 
        "en" : "<p>Goal: to ensure that the contents that are shown or hidden when an element receives or loses the pointer or keyboard focus can be perceived and discarded by users, without harming the user experience</p><p> If when an element receives or loses the pointer (eg mouse hover) or keyboard focus (focus) some additional content is shown or hidden, then the following must be true:</p><ul><li >A mechanism should be available that allows the extra content to be discarded without moving the pointer or changing keyboard focus unless the extra content reports an error in data entry or does not cover or replace other content.</li><li>If the pointer can display the extra content, then the pointer can be moved over the extra content without it disappearing.</li><li>The extra content must remain visible until the pointer is removed or the keyboard focus or the user discards it (by the first point) or your information is no longer valid.</li></ul>",
      }, 
      "tools" :
      {
        "ca" : "<p>Nom de l'eina: Comprovació manual</p><p>Procediment de comprovació:</p><ol><li>Navegar a través de la pàgina utilitzant el ratolí o el teclat perquè tots els elements vagin rebent el focus.</li><li>Si es mostra algun contingut addicional, verificar que:<ul><li>Si el contingut addicional tapa un altre element, hi ha una manera de descartar-lo sense moure el ratolí o canviar el focus del teclat (excepte si es tracta d'un informe d'error).</li><li>Es pot moure el ratolí sobre el contingut addicional sense que aquest desaparegui.</li><li>El contingut addicional només desapareix quan l'usuari el descarti o quan la seva informació no segueixi sent vàlida.</li></ul></li></ol>", 
        "es" : "<p>Nombre de la herramienta: Comprobación manual</p><p>Procedimiento de comprobación:</p><ol><li>Navegar a través de la página utilizando el ratón o el teclado para que todos los elementos vayan recibiendo el foco.</li><li>Si se muestra algún contenido adicional, verificar que:<ul><li>Si el contenido adicional tapa a otro elemento, existe un modo de descartarlo sin mover el ratón o cambiar el foco del teclado (excepto si se trata de un informe de error).</li><li>Se puede mover el ratón sobre el contenido adicional sin que éste desaparezca.</li><li>El contenido adicional sólo desaparece cuando el usuario lo descarte o cuando su información no siga siendo válida.</li></ul></li></ol>", 
        "en" : "<p>Tool name: Manual check</p><p>Check procedure:</p><ol><li>Navigate through the page using the mouse or keyboard so that all elements are received the focus.</li><li>If any additional content is displayed, check that:<ul><li>If the additional content obscures another element, there is a way to dismiss it without moving the mouse or changing the keyboard focus (except if it's a bug report).</li><li>You can move the mouse over the extra content without it disappearing.</li><li>The extra content only disappears when the user dismisses it or when your information is no longer valid.</li></ul></li></ol>",
      },
      "category" : ["dynamic-content", "keyboard"]
    },
    
    { // 2.1.1.
      "criteria" : 
      {
        "ca" : "2.1.1 Teclat", 
        "es" : "2.1.1 Teclado", 
        "en" : "2.1.1 Keyboard",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#keyboard", 
      "level" : "A",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Tota la funcionalitat del contingut es pot operar mitjançant una interfície de teclat sense requerir temps específics per a pulsacions de tecles individuals, excepte quan la funció subjacent requereix una entrada que depèn de la ruta de moviment de l'usuari i no només dels punts finals.", 
        "es" : "Toda la funcionalidad del contenido se puede operar a través de una interfaz de teclado sin requerir tiempos específicos para pulsaciones de teclas individuales, excepto cuando la función subyacente requiere una entrada que depende de la ruta de movimiento del usuario y no solo de los puntos finales.", 
        "en" : "All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest Criteri d'èxit és garantir que, sempre que sigui possible, el contingut es pugui operar mitjançant un teclat o una interfície de teclat (per tal que es pugui utilitzar un teclat alternatiu). Quan el contingut es pot operar mitjançant un teclat o un teclat alternatiu, és operable per persones sense visió (que no poden utilitzar dispositius com ara ratolins que requereixen coordinació ull-mà), així com per persones que han d'utilitzar teclats alternatius o dispositius d'entrada que actuen. com a emuladors de teclat. Els emuladors de teclat inclouen programari d'entrada de veu, programari sip-and-puff, teclats en pantalla, programari d'escaneig i una varietat de tecnologies d'assistència i teclats alternatius.</p><p>Els exemples de 'temps específics per a pulsacions de tecles individuals' inclouen situacions en què un usuari hauria de repetir o executar diverses pulsacions de tecla en un curt període de temps o en què s'ha de mantenir premuda una tecla durant un període prolongat abans de registrar la pulsació de tecla.</p><p>La frase 'excepte quan la funció subjacent requereix una entrada que depèn de la ruta del moviment de l'usuari i no només dels punts finals' s'inclou per separar aquelles coses que no es poden controlar raonablement des d'un teclat.</p><p>La majoria de les accions realitzades per un dispositiu apuntador també es poden fer des del teclat (per exemple, fer clic, seleccionar, moure, dimensionar). Tanmateix, hi ha una petita classe d'entrada que es fa amb un dispositiu apuntador que no es pot fer des del teclat de cap manera coneguda sense requerir un nombre excessiu de pulsacions de tecles. El dibuix a mà lliure, la pintura a l'aquarel·la i el vol amb un helicòpter per una cursa d'obstacles són exemples de funcions que requereixen una entrada depenent del camí. Dibuixar línies rectes, formes geomètriques regulars, canviar la mida de les finestres i arrossegar objectes a una ubicació (quan el camí cap a aquesta ubicació no és rellevant) no requereix una entrada depenent del camí.</p><p>L'ús de MouseKeys no satisfaria aquest criteri d'èxit perquè no és un teclat equivalent a l'aplicació; és un equivalent del ratolí (és a dir, sembla un ratolí per a l'aplicació).</p><p>Se suposa que el disseny de les funcions d'entrada de l'usuari té en compte que les funcions d'accessibilitat del teclat del sistema operatiu poden estar en ús. Per exemple, el bloqueig de tecles modificadores pot estar activat. El contingut continua funcionant en aquest entorn, sense enviar esdeveniments que xoquin amb el bloqueig de la tecla modificadora per produir resultats inesperats.</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es garantizar que, siempre que sea posible, el contenido se pueda operar a través de un teclado o una interfaz de teclado (para que se pueda usar un teclado alternativo). Cuando el contenido se puede operar a través de un teclado o teclado alternativo, es operable por personas sin visión (que no pueden usar dispositivos como ratones que requieren coordinación ojo-mano) así como por personas que deben usar teclados alternativos o dispositivos de entrada que actúan como emuladores de teclado. Los emuladores de teclado incluyen software de entrada de voz, software sorbo y soplo, teclados en pantalla, software de escaneo y una variedad de tecnologías de asistencia y teclados alternativos.</p><p>Los ejemplos de 'tiempos específicos para pulsaciones de teclas individuales' incluyen situaciones en las que se requiere que un usuario repita o ejecute varias pulsaciones de teclas en un período corto de tiempo o donde se debe mantener presionada una tecla durante un período prolongado antes de que se registre la pulsación de tecla.</p><p>La frase 'excepto cuando la función subyacente requiera una entrada que dependa de la ruta del movimiento del usuario y no solo de los puntos finales' se incluye para separar aquellas cosas que no se pueden controlar razonablemente desde un teclado.</p><p>La mayoría de las acciones realizadas por un dispositivo señalador también se pueden realizar desde el teclado (por ejemplo, hacer clic, seleccionar, mover, cambiar el tamaño). Sin embargo, hay una pequeña clase de entrada que se realiza con un dispositivo señalador que no se puede realizar desde el teclado de ninguna manera conocida sin requerir un número excesivo de pulsaciones de teclas. Dibujar a mano alzada, pintar con acuarela y volar un helicóptero a través de una carrera de obstáculos son ejemplos de funciones que requieren una entrada dependiente de la ruta. Dibujar líneas rectas, formas geométricas regulares, cambiar el tamaño de las ventanas y arrastrar objetos a una ubicación (cuando la ruta a esa ubicación no es relevante) no requiere una entrada dependiente de la ruta.</p><p>El uso de MouseKeys no cumpliría este Criterio de Conformidad porque no es un teclado equivalente a la aplicación; es un equivalente de mouse (es decir, parece un mouse para la aplicación).</p><p>Se supone que el diseño de las funciones de entrada del usuario tiene en cuenta que las funciones de accesibilidad del teclado del sistema operativo pueden estar en uso. Por ejemplo, se puede activar el bloqueo de teclas modificadoras. El contenido continúa funcionando en dicho entorno, sin enviar eventos que colisionarían con el bloqueo de la tecla modificadora para producir resultados inesperados.</p>", 
        "en" : "<p>The intent of this Success Criterion is to ensure that, wherever possible, content can be operated through a keyboard or keyboard interface (so an alternate keyboard can be used). When content can be operated through a keyboard or alternate keyboard, it is operable by people with no vision (who cannot use devices such as mice that require eye-hand coordination) as well as by people who must use alternate keyboards or input devices that act as keyboard emulators. Keyboard emulators include speech input software, sip-and-puff software, on-screen keyboards, scanning software and a variety of assistive technologies and alternate keyboards. Individuals with low vision also may have trouble tracking a pointer and find the use of software much easier (or only possible) if they can control it from the keyboard.</p><p>Examples of 'specific timings for individual keystrokes' include situations where a user would be required to repeat or execute multiple keystrokes within a short period of time or where a key must be held down for an extended period before the keystroke is registered.</p><p>The phrase 'except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints' is included to separate those things that cannot reasonably be controlled from a keyboard.</p><p>Most actions carried out by a pointing device can also be done from the keyboard (for example, clicking, selecting, moving, sizing). However, there is a small class of input that is done with a pointing device that cannot be done from the keyboard in any known fashion without requiring an inordinate number of keystrokes. Free hand drawing, watercolor painting, and flying a helicopter through an obstacle course are all examples of functions that require path dependent input. Drawing straight lines, regular geometric shapes, re-sizing windows and dragging objects to a location (when the path to that location is not relevant) do not require path dependent input.</p><p>The use of MouseKeys would not satisfy this Success Criterion because it is not a keyboard equivalent to the application; it is a mouse equivalent (i.e., it looks like a mouse to the application).</p><p>It is assumed that the design of user input features takes into account that operating system keyboard accessibility features may be in use. For example, modifier key locking may be turned on. Content continues to function in such an environment, not sending events that would collide with the modifier key lock to produce unexpected results.</p>",
      },
      "benefits" :
      {
        "ca" : "<ul><li>Persones cegues (que no poden utilitzar dispositius com ara ratolins que requereixen coordinació ull-mà).</li><li>Persones amb baixa visió (que poden tenir problemes per trobar o fer un seguiment d'un indicador a la pantalla).</li><li>Algunes persones amb tremolors a les mans troben molt difícil utilitzar un ratolí i, per tant, solen utilitzar un teclat.</li></ul>", 
        "es" : "<ul><li>Personas ciegas (que no pueden usar dispositivos como ratones que requieren coordinación ojo-mano).</li><li>Personas con baja visión (que pueden tener problemas para encontrar o seguir un indicador de puntero en la pantalla).</li><li>A algunas personas con temblores en las manos les resulta muy difícil usar un mouse y, por lo tanto, generalmente usan un teclado.</li></ul>", 
        "en" : "<ul><li>People who are blind (who cannot use devices such as mice that require eye-hand coordination).</li><li>People with low vision (who may have trouble finding or tracking a pointer indicator on screen).</li><li>Some people with hand tremors find using a mouse very difficult and therefore usually use a keyboard.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["custom-controls", "forms-and-UI", "keyboard"]
    },
    
    { // 2.1.2.
      "criteria" : 
      {
        "ca" : "2.1.2 Sense parany de teclat", 
        "es" : "2.1.2 Sin trampa de teclado", 
        "en" : "2.1.2 No Keyboard Trap",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#no-keyboard-trap", 
      "level" : "A",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Si el focus del teclat es pot moure a un component de la pàgina usant una interfície de teclat, llavors el focus es pot allunyar d'aquest component usant només una interfície de teclat i, si requereix més que tecles de fletxa o de tabulació sense modificar altres mètodes de sortida estàndard, s'informa a l'usuari del mètode per allunyar el focus.", 
        "es" : "Si el foco del teclado se puede mover a un componente de la página usando una interfaz de teclado, entonces el foco se puede alejar de ese componente usando solo una interfaz de teclado y, si requiere más que teclas de flecha o de tabulación sin modificar u otros métodos de salida estándar, se informa al usuario del método para alejar el foco.", 
        "en" : "If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest Criteri d'èxit és garantir que el contingut no 'té trampa' el focus del teclat dins de les subseccions del contingut d'una pàgina web. Aquest és un problema comú quan es combinen diversos formats dins d'una pàgina i es representen mitjançant complements o aplicacions incrustades.</p><p>Hi pot haver moments en què la funcionalitat de la pàgina web restringeixi l'enfocament a una subsecció del contingut, sempre que l'usuari sàpiga sortir d'aquest estat i 'sense trampa' el focus.</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es garantizar que el contenido no 'tiene trampa' el enfoque del teclado dentro de las subsecciones del contenido de una página web. Este es un problema común cuando se combinan múltiples formatos dentro de una página y se procesan mediante complementos o aplicaciones incrustadas.</p><p>Puede haber ocasiones en las que la funcionalidad de la página web restrinja el foco a una subsección del contenido, siempre que el usuario sepa cómo salir de ese estado y 'sin trampa' el foco.</p>", 
        "en" : "<p>The intent of this Success Criterion is to ensure that that content does not 'trap' keyboard focus within subsections of content on a Web page. This is a common problem when multiple formats are combined within a page and rendered using plug-ins or embedded applications.</p><p>There may be times when the functionality of the Web page restricts the focus to a subsection of the content, as long as the user knows how to leave that state and 'untrap' the focus.</p>",
      },
      "benefits" :
      {
        "ca" : "Persones que depenen d'un teclat o d'una interfície de teclat per utilitzar el web, incloses les persones cegues i les persones amb discapacitat física.", 
        "es" : "Personas que dependen de un teclado o una interfaz de teclado para usar la Web, incluidas las personas ciegas y las personas con discapacidades físicas.", 
        "en" : "People who rely on a keyboard or keyboard interface to use the Web including people who are blind and people with physical disabilities.",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["keyboard"]
    },
    
    { // 2.1.3.
      "criteria" : 
      {
        "ca" : "2.1.3 Teclat (sense excepció)", 
        "es" : "2.1.3 Teclado (sin excepción)", 
        "en" : "2.1.3 Keyboard (No Exception)",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#keyboard-no-exception", 
      "level" : "AAA",
      "version" : "2.1", 
      "goal" : 
      {
        "ca" : "Tota la funcionalitat del contingut es pot operar mitjançant una interfície de teclat sense requerir temps específics per a pulsacions de tecles individuals.", 
        "es" : "Toda la funcionalidad del contenido se puede operar a través de una interfaz de teclado sin requerir tiempos específicos para pulsaciones de teclas individuales.", 
        "en" : "All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes.",
      },
      "intent" : 
      {
        "ca" : "La intenció d'aquest criteri d'èxit és garantir que tot el contingut es pugui operar des del teclat. És el mateix que el Criteri d'èxit 2.1.1, tret que no es permeten excepcions. Això no vol dir que el contingut on la funció subjacent requereix una entrada que depèn del camí del moviment de l'usuari i no només dels punts finals (exclosos dels requisits de 2.1.1) s'hagi de fer accessible amb el teclat. Més aviat, vol dir que el contingut que utilitza entrada depenent del camí no pot complir amb aquest criteri d'èxit i, per tant, no pot complir la Directriu 2.1 al nivell AAA.", 
        "es" : "La intención de este Criterio de Conformidad es garantizar que todo el contenido se pueda operar desde el teclado. Esto es lo mismo que el Criterio de Conformidad 2.1.1, excepto que no se permiten excepciones. Esto no significa que el contenido en el que la función subyacente requiere una entrada que depende de la ruta de movimiento del usuario y no solo de los puntos finales (excluidos de los requisitos de 2.1.1) deba ser accesible mediante teclado. Más bien, significa que el contenido que usa una entrada dependiente de la ruta no puede cumplir con este Criterio de Conformidad y, por lo tanto, no puede cumplir con la Pauta 2.1 en el Nivel AAA.", 
        "en" : "The intent of this Success Criterion is to ensure that all content is operable from the keyboard. This is the same as Success Criterion 2.1.1, except that no exceptions are allowed. This does not mean that content where the underlying function requires input that depends on the path of the user's movement and not just the endpoints (excluded from the requirements of 2.1.1) must be made keyboard accessible. Rather, it means that content that uses path-dependent input cannot conform to this Success Criterion and therefore cannot meet Guideline 2.1 at Level AAA.",
      },
      "benefits" :
      {
        "ca" : "", 
        "es" : "", 
        "en" : "",
      },
      "examples" : "",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/keyboard-no-exception.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },
    
    { // 2.1.4.
      "criteria" : 
      {
        "ca" : "2.1.4 Accessos directes de tecles de caràcters", 
        "es" : "2.1.4 Accesos directos de teclas de caracteres", 
        "en" : "2.1.4 Character Key Shortcuts",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#character-key-shortcuts", 
      "level" : "A",
      "version" : "2.1", 
      "goal" : 
      {
        "ca" : "Si s'implementa una drecera de teclat en el contingut usant només lletres (incloses lletres majúscules i minúscules), signes de puntuació, números o símbols, llavors almenys un dels següents és veritable:<ul><li>Desactivar: Hi ha un mecanisme disponible per desactivar la drecera;</li><li>Reassignació: hi ha un mecanisme disponible per reassignar la drecera per utilitzar un o més caràcters de teclat no imprimibles (per exemple, Ctrl, Alt, etc.);</li><li>Actiu només al focus: el mètode abreujat de teclat per a un component de la interfície d'usuari només està actiu quan aquest component té el focus.</li></ul>", 
        "es" : "Si se implementa un atajo de teclado en el contenido usando solo letras (incluidas letras mayúsculas y minúsculas), signos de puntuación, números o símbolos, entonces al menos uno de los siguientes es verdadero:<ul><li>Desactivar: Hay un mecanismo disponible para desactivar el atajo;</li><li>Reasignación: hay un mecanismo disponible para reasignar el atajo para usar uno o más caracteres de teclado no imprimibles (por ejemplo, Ctrl, Alt, etc.);</li><li>Activo solo en el foco: el método abreviado de teclado para un componente de la interfaz de usuario solo está activo cuando ese componente tiene el foco.</li></ul>", 
        "en" : "If a keyboard shortcut is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true:<ul><li>Turn off : A mechanism is available to turn the shortcut off;</li><li>Remap : A mechanism is available to remap the shortcut to use one or more non-printable keyboard characters (e.g. Ctrl, Alt, etc);</li><li>Active only on focus : The keyboard shortcut for a user interface component is only active when that component has focus.</li></ul>",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquesta crítica d'èxit és reduir l'activació accidental de les dreceres del teclat. Les dreceres de tecles de caràcters funcionen bé per a molts usuaris de teclat, però són inadequades i frustrants per als usuaris d'entrada de veu (el mitjà d'entrada dels quals són cadenes de lletres) i per als usuaris de teclat que són propensos a colpejar tecles accidentalment. Per solucionar aquest problema, els autors han de permetre que els usuaris desactivin o reconfiguren les dreceres que només estan formades per tecles de caràcters.</p><p>Tingueu en compte que aquest criteri d'èxit no afecta components com ara quadres de llista i menús desplegables. Tot i que aquests components contenen valors (paraules) que es poden seleccionar amb una o més tecles de caràcters, les dreceres només estan actives quan els components tenen el focus. Es pot accedir a altres components, com ara menús, o obrir-los amb una única drecera sense caràcters (per exemple, Alt o Alt+F) abans de prémer una tecla de caràcter únic per seleccionar un element. Això fa que el camí complet per invocar un menú sigui una drecera de dos passos que inclou una clau no imprimible. Les tecles  d'accés tampoc es veuen afectades perquè inclouen tecles modificadores.</p><p>Els usuaris d'entrada de veu solen treballar en un únic mode on poden utilitzar una combinació d'ordres de dictat i de veu. Això funciona bé perquè l'usuari sap fer una pausa abans i després de les ordres, i les ordres solen tenir almenys dues paraules. Així, per exemple, un usuari pot dir una mica de dictat, com ara 'el vaixell petit', després fer una pausa i dir una ordre per eliminar aquest dictat, com ara 'Suprimeix la línia'. En canvi, si l'usuari digués les dues frases juntes sense una pausa, tota la frase sortiria com a dictat (és a dir, 'la línia d'eliminació del vaixell petit'). Tot i que els programes d'entrada de veu sovint inclouen modes que només escolten per al dictat o només per a ordres, la majoria dels usuaris de parla utilitzen el mode global tot el temps perquè és un flux de treball molt més eficient. Podria disminuir l'eficiència de les ordres de manera significativa si els usuaris canviessin al mode d'ordres abans i després d'emetre cada ordre.</p><p>Els usuaris de parla també poden pronunciar la majoria de les ordres del teclat (per exemple, 'preme Control Foxtrot') sense cap problema. Si el lloc web o l'aplicació té el teclat habilitat, l'usuari de veu també pot escriure una macro de veu nativa que crida a l'ordre del teclat, com ara 'Aquesta impressió' per dur a terme Ctrl+P.</p><p>Les dreceres d'una sola tecla són l'excepció. Tot i que l'ús de tecles d'una sola lletra com a controls pot ser adequat i eficient per a molts usuaris de teclat, les dreceres d'una sola tecla són desastroses per als usuaris de parla. La raó d'això és que quan només s'utilitza una sola tecla per disparar una ordre, una paraula parlada pot convertir-se en una pluja d'ordres d'una sola tecla si el focus del cursor es troba al lloc equivocat.</p><p>Per exemple, un usuari d'entrada de veu anomenada Kim té el cursor enfocat a la finestra principal d'una aplicació de correu web que utilitza tecles de drecera habituals per navegar ('k'), arxivar ('y') i silenciar missatges ('m'). Un company de feina anomenat Mike entra a la seva oficina i diu 'Hola Kim' i el seu micròfon ho capta. La Y de 'hey' arxiva el missatge actual. K a 'Kim' es mou una conversa cap avall i M silencia un missatge o fil. I, si Kim mira cap amunt i diu 'Hey Mike' sense recordar-se d'apagar el micròfon, les mateixes tres coses succeeixen en una seqüència diferent.</p><p>Un usuari que interactua amb una pàgina web o una aplicació web que no utilitza dreceres d'un sol caràcter no té aquest problema. Les cadenes de caràcters inadvertides de l'aplicació de veu no s'interpreten com a dreceres si cal una tecla modificadora. Un usuari de parla que omple un formulari d'entrada de text pot trobar que una frase que el micròfon de veu capta accidentalment provoca que s'introdueixi text perdut al camp, però que es veu i es desfà fàcilment. La secció Recursos d'aquesta pàgina conté enllaços a vídeos que demostren aquest tipus de problemes.</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es reducir la activación accidental de atajos de teclado. Los atajos de teclas de caracteres funcionan bien para muchos usuarios de teclado, pero son inapropiados y frustrantes para los usuarios de entrada de voz, cuyo medio de entrada son cadenas de letras, y para los usuarios de teclado que son propensos a presionar teclas accidentalmente. Para corregir este problema, los autores deben permitir que los usuarios desactiven o reconfiguren los accesos directos que se componen únicamente de teclas de caracteres.</p><p>Tenga en cuenta que este criterio de éxito no afecta a componentes como cuadros de lista y menús desplegables. Aunque estos componentes contienen valores (palabras) que pueden seleccionarse con una o más teclas de caracteres, los accesos directos solo están activos cuando los componentes tienen el foco. Se puede acceder o abrir otros componentes, como los menús, con un solo atajo sin caracteres (por ejemplo, Alt o Alt+F) antes de presionar una tecla de un solo carácter para seleccionar un elemento. Esto hace que la ruta completa para invocar un menú sea un atajo de dos pasos que incluye una clave no imprimible. Las teclas de acceso  tampoco se ven afectadas porque incluyen teclas modificadoras.</p><p>Los usuarios de entrada de voz generalmente trabajan en un solo modo en el que pueden usar una combinación de dictado y comandos de voz. Esto funciona bien porque el usuario sabe hacer una pausa antes y después de los comandos, y los comandos suelen tener al menos dos palabras. Entonces, por ejemplo, un usuario puede decir un poco de dictado, como 'el bote pequeño', luego hacer una pausa y decir un comando para eliminar ese dictado, como 'Eliminar línea'. Por el contrario, si el usuario dijera las dos frases juntas sin pausa, la frase completa saldría como un dictado (es decir, 'la línea de eliminación del bote pequeño'). Aunque los programas de entrada de voz a menudo incluyen modos que escuchan solo dictados o solo comandos, la mayoría de los usuarios de voz utilizan el modo integral todo el tiempo porque es un flujo de trabajo mucho más eficiente. Podría disminuir significativamente la eficiencia del comando si los usuarios cambiaran al modo de comando y regresaran antes y después de emitir cada comando.</p><p>Los usuarios de voz también pueden pronunciar la mayoría de los comandos del teclado (p. ej., 'presione Control Foxtrot') sin ningún problema. Si el sitio web o la aplicación están habilitados para teclado, el usuario de voz también puede escribir una macro de voz nativa que llama al comando de teclado, como 'Esta impresión' para ejecutar Ctrl+P.</p><p>Los atajos de una sola tecla son la excepción. Si bien el uso de teclas de una sola letra como controles puede ser apropiado y eficiente para muchos usuarios de teclado, los atajos de una sola tecla son desastrosos para los usuarios de voz. La razón de esto es que cuando solo se usa una sola tecla para disparar un comando, una palabra hablada puede convertirse en un aluvión de comandos de una sola tecla si el foco del cursor está en el lugar equivocado.</p><p>Por ejemplo, un usuario de entrada de voz llamado Kim tiene el foco del cursor en la ventana principal de una aplicación de correo web que utiliza métodos abreviados de teclado comunes para navegar ('k'), archivar ('y') y silenciar mensajes ('m'). . Un compañero de trabajo llamado Mike entra a su oficina y dice 'Hola Kim' y su micrófono lo capta. La Y de 'hey' archiva el mensaje actual. K en 'Kim' baja una conversación y M silencia un mensaje o hilo. Y, si Kim mira hacia arriba y dice 'Hola Mike' sin acordarse de apagar el micrófono, suceden las mismas tres cosas en una secuencia diferente.</p><p>Un usuario que interactúa con una página web o una aplicación web que no usa accesos directos de un solo carácter no tiene este problema. Las cadenas de caracteres inadvertidas de la aplicación de voz no se interpretan como atajos si se requiere una tecla modificadora. Un usuario de voz que completa un formulario de entrada de texto puede encontrar que una frase que es captada accidentalmente por el micrófono de voz da como resultado que se ingrese texto perdido en el campo, pero que se ve y se deshace fácilmente. La sección Recursos de esta página contiene enlaces a videos que muestran este tipo de problemas.</p>", 
        "en" : "<p>The intent of this Success Crition is to reduce accidental activation of keyboard shortcuts. Character key shortcuts work well for many keyboard users, but are inappropriate and frustrating for speech input users — whose means of input is strings of letters — and for keyboard users who are prone to accidentally hit keys. To rectify this issue, authors need to allow users to turn off or reconfigure shortcuts that are made up of only character keys.</p><p>Note that this success criterion doesn't affect components such as listboxes and drop-down menus. Although these components contain values (words) that may be selected by one or more character keys, the shortcuts are only active when the components have focus. Other components such as menus may be accessed or opened with a single non-character shortcut (e.g., Alt or Alt+F) before pressing a single character key to select an item. This makes the full path to invoking a menu a two-step shortcut that includes a non-printable key. Accesskeys are also not affected because they include modifier keys.</p><p>Speech Input users generally work in a single mode where they can use a mix of dictation and speech commands. This works well because the user knows to pause before and after commands, and commands are usually at least two words long. So, for instance, a user might say a bit of dictation, such as 'the small boat', then pause, and say a command to delete that dictation, such as 'Delete Line'. In contrast, if the user were to say the two phrases together without a pause, the whole phrase would come out as dictation (i.e., 'the small boat delete line'). Although speech input programs often include modes that listen only for dictation or only for commands, most speech users use the all-encompassing mode all the time because it is a much more efficient workflow. It could decrease command efficiency significantly if users were to change to command mode and back before and after issuing each command.</p><p>Speech users can also speak most keyboard commands (e.g., 'press Control Foxtrot') without any problems. If the website or app is keyboard enabled, the speech user can also write a native speech macro that calls the keyboard command, such as 'This Print' to carry out Ctrl+P.</p><p>Single-key shortcuts are the exception. While using single letter keys as controls might be appropriate and efficient for many keyboard users, single-key shortcuts are disastrous for speech users. The reason for this is that when only a single key is used to trip a command, a spoken word can become a barrage of single-key commands if the cursor focus happens to be in the wrong place.</p><p>For example, a speech-input user named Kim has her cursor focus in the main window of a web mail application that uses common keyboard shortcuts to navigate ('k'), archive ('y') and mute messages ('m'). A coworker named Mike enters her office and says 'Hey Kim' and her microphone picks that up. The Y of 'hey' archives the current message. K in 'Kim' moves down one conversation and M mutes a message or thread. And, if Kim looks up and says 'Hey Mike' without remembering to turn off the microphone, the same three things happen in a different sequence.</p><p>A user interacting with a webpage or web app that doesn't use single-character shortcuts doesn't have this problem. Inadvertent strings of characters from the speech application are not interpreted as shortcuts if a modifier key is required. A speech user filling in a text input form may find that a phrase that is accidentally picked up by the speech microphone results in stray text being entered into the field, but that is easily seen and undone. The Resources section of this page contains links to videos demonstrating these types of issues.</p>",
      },
      "benefits" :
      {
        "ca" : "<ul><li>Els usuaris de veu podran desactivar les dreceres d'una sola tecla perquè puguin evitar que se'n disparin de manera accidental alhora. Això permetrà als usuaris de veu fer un ús complet dels programes que ofereixen dreceres d'una sola tecla als usuaris del teclat.</li><li>Els usuaris només amb teclat que tenen problemes d'habilitat també poden ser propensos a colpejar les tecles accidentalment. Aquests usuaris podrien evitar les dreceres problemàtiques d'un sol caràcter desactivant-les o modificant-les per incloure almenys una clau que no sigui de caràcter.</li><li>Permetre que totes les tecles de drecera es tornin a assignar pot ajudar els usuaris amb algunes discapacitats cognitives, ja que es poden assignar les mateixes dreceres per dur a terme les mateixes accions en diferents aplicacions.</li></ul>", 
        "es" : "<ul><li>Los usuarios de voz podrán desactivar los atajos de una sola tecla para evitar disparar accidentalmente lotes de ellos a la vez. Esto permitirá a los usuarios de voz hacer un uso completo de los programas que ofrecen accesos directos de una sola tecla a los usuarios de teclado.</li><li>Los usuarios de teclado que tienen problemas de destreza también pueden ser propensos a pulsar teclas accidentalmente. Esos usuarios podrían evitar atajos problemáticos de un solo carácter apagándolos o modificándolos para incluir al menos una tecla que no sea de carácter.</li><li>Permitir que todas las teclas de acceso directo se reasignen puede ayudar a los usuarios con algunas discapacidades cognitivas, ya que se pueden asignar los mismos accesos directos para realizar las mismas acciones en diferentes aplicaciones.</li></ul>", 
        "en" : "<ul><li>Speech users will be able to turn off single-key shortcuts so they can avoid accidentally firing batches of them at once. This will allow speech users to make full use of programs that offer single-key shortcuts to keyboard users.</li><li>Keyboard-only users who have dexterity challenges can also be prone to accidentally hitting keys. Those users would be able to avoid problematic single character shortcuts by turning them off or modifying them to include at least one non-character key.</li><li>Allowing all shortcut keys to be remapped can help users with some cognitive disabilities, since the same shortcuts can be assigned to perform the same actions across different applications.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html#techniques",
      "verification" :
      {
        "ca" : "<p>Objectiu: evitar que les persones que interactuen mitjançant entrades de veu activin els elements d'interacció de forma accidental</p><p>Quan s'utilitzin dreceres de teclat usant una única lletra, signe de puntuació, número o símbol llavors es ha de complir almenys una de les condicions següents:</p><ul><li>Hi ha un mecanisme que permet desactivar la drecera de teclat</li><li>Existeix un mecanisme que permet reassignar la drecera de teclat per emprar a el seu lloc una altra tecla no imprimible (ex, Ctrl, Alt, etc.)</li><li>La drecera de teclat només es pot activar quan el component té el focus del teclat.</li></ul>", 
        "es" : "<p>Objetivo: evitar que las personas que interactúan mediante entradas de voz activen los elementos de interacción de forma accidental</p><p>Cuando se empleen atajos de teclado usando una única letra, signo de puntuación, número o símbolo entonces se debe cumplir al menos una de las siguientes condiciones:</p><ul><li>Existe un mecanismo que permite desactivar el atajo de teclado</li><li>Existe un mecanismo que permite reasignar el atajo de teclado para emplear en su lugar otra tecla no imprimible (ej, Ctrl, Alt, etc.)</li><li>El atajo de teclado sólo se puede activar cuando el componente tiene el foco del teclado.</li></ul>", 
        "en" : "<p>Goal: to prevent people interacting via voice input from accidentally activating interaction elements</p><p>When using keyboard shortcuts using a single letter, punctuation, number or symbol then must meet at least one of the following conditions:</p><ul><li>There is a mechanism that allows you to disable the keyboard shortcut</li><li>There is a mechanism that allows you to reassign the keyboard shortcut to use in instead another non-printable key (eg, Ctrl, Alt, etc.)</li><li>The keyboard shortcut can only be activated when the component has keyboard focus.</li></ul>",
      }, 
      "tools" :
      {
        "ca" : "<p>Nom de l'eina: Comprovació manual</p><p>Procediment de comprovació:</p><ol><li>Si la pàgina no proporciona mètodes per desactivar les dreceres de teclat o bé per reassignar-les a una altra lletra no imprimible:<ul><li>Accedir al lloc web assegurant que cap element té el focus.</li><li>Pulsar les lletres identificades com a dreceres de teclat. Si no disposeu d'aquesta informació, feu clic a totes les lletres (caràcters, números i signes de puntuació).</li><li>Verificar que no s'ha generat cap acció després d'aquesta interacció.</li></ul></li></ol>", 
        "es" : "<p>Nombre de la herramienta: Comprobación manual</p><p>Procedimiento de comprobación:</p><ol><li>Si la página no proporciona métodos para desactivar los atajos de teclado o bien para reasignarlos a otra letra no imprimible:<ul><li>Acceder al sitio web asegurando que ningún elemento tiene el foco.</li><li>Pulsar las letras identificadas como atajos de teclado. Si no se dispone de esta información, pulsar todas las letras (caracteres, números y signos de puntuación).</li><li>Verificar que no se ha generado ninguna acción tras esta interacción.</li></ul></li></ol>", 
        "en" : "<p>Tool name: Manual check</p><p>Check procedure:</p><ol><li>If the page does not provide methods to disable keyboard shortcuts or to reassign them to another letter unprintable:<ul><li>Access the website ensuring that no element has focus.</li><li>Press the letters identified as keyboard shortcuts. If this information is not available, press all the letters (characters, numbers and punctuation marks).</li><li>Verify that no action has been generated after this interaction.</li></ul></li></ol>",
      },
      "category" : ["keyboard"]
    },
    
    { // 2.2.1.
      "criteria" : 
      {
        "ca" : "2.2.1 Temporització ajustable", 
        "es" : "2.2.1 Temporización ajustable", 
        "en" : "2.2.1 Timing Adjustable",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#timing-adjustable", 
      "level" : "A",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Per a cada límit de temps establert pel contingut, almenys un dels següents és veritable:<ul><li>Desactivar: l'usuari pot desactivar el límit de temps abans de trobar-lo; o</li><li>Ajustar: l'usuari pot ajustar el límit de temps abans de trobar-lo en un rang ampli que és almenys deu vegades la durada de la configuració predeterminada; o</li><li>Estendre: s'adverteix a l'usuari abans que expiri el temps i se li atorguen almenys 20 segons per estendre el límit de temps amb una simple acció (per exemple, 'pressionar la barra d'espai'), i l'usuari pot estendre el límit de temps almenys deu vegades; o</li><li>Excepció en temps real: el límit de temps és una part requerida dun esdeveniment en temps real (per exemple, una subhasta), i no és possible cap alternativa al límit de temps; o</li><li>Excepció Essencial: El límit de temps és essencial i ampliar-lo invalidaria l'activitat; o</li><li>Excepció de 20 hores: el límit de temps és superior a 20 hores.</li></ul>", 
        "es" : "Para cada límite de tiempo establecido por el contenido, al menos uno de los siguientes es verdadero:<ul><li>Desactivar: el usuario puede desactivar el límite de tiempo antes de encontrarlo; o</li><li>Ajustar: el usuario puede ajustar el límite de tiempo antes de encontrarlo en un amplio rango que es al menos diez veces la duración de la configuración predeterminada; o</li><li>Extender: se advierte al usuario antes de que expire el tiempo y se le otorgan al menos 20 segundos para extender el límite de tiempo con una simple acción (por ejemplo, 'presionar la barra espaciadora'), y el usuario puede extender el límite de tiempo al menos diez veces ; o</li><li>Excepción en tiempo real: el límite de tiempo es una parte requerida de un evento en tiempo real (por ejemplo, una subasta), y no es posible ninguna alternativa al límite de tiempo; o</li><li>Excepción Esencial: El límite de tiempo es esencial y ampliarlo invalidaría la actividad; o</li><li>Excepción de 20 horas: el límite de tiempo es superior a 20 horas.</li></ul>", 
        "en" : "For each time limit that is set by the content, at least one of the following is true:<ul><li>Turn off : The user is allowed to turn off the time limit before encountering it; or</li><li>Adjust : The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or</li><li>Extend : The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, 'press the space bar'), and the user is allowed to extend the time limit at least ten times; or</li><li>Real-time Exception : The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or</li><li>Essential Exception : The time limit is essential and extending it would invalidate the activity; or</li><li>20 Hour Exception : The time limit is longer than 20 hours.</li></ul>",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest Criteri d'èxit és garantir que els usuaris amb discapacitat tinguin el temps adequat per interactuar amb el contingut web sempre que sigui possible. Les persones amb discapacitat com la ceguesa, la baixa visió, les destreses i les limitacions cognitives poden requerir més temps per llegir contingut o per realitzar funcions com ara omplir formularis en línia. Si les funcions web depenen del temps, serà difícil per a alguns usuaris realitzar l'acció necessària abans que es produeixi un límit de temps. Això pot fer que el servei sigui inaccessible per a ells. Dissenyar funcions que no depenguin del temps ajudarà les persones amb discapacitat a completar aquestes funcions. Proporcionar opcions per desactivar els límits de temps, personalitzar la durada dels límits de temps, o sol·licitar més temps abans que es produeixi un límit de temps ajuda aquells usuaris que necessiten més temps del previst per completar amb èxit les tasques. Aquestes opcions s'enumeren en l'ordre que serà més útil per a l'usuari. Desactivar els límits de temps és millor que personalitzar la durada dels límits de temps, que és millor que demanar més temps abans que es produeixi un límit de temps.</p><p>Qualsevol procés que es produeixi sense que l'usuari s'iniciï després d'un temps determinat o de manera periòdica és un límit de temps. Això inclou actualitzacions parcials o completes del contingut (per exemple, l'actualització de la pàgina), canvis al contingut o la caducitat d'una finestra d'oportunitat perquè un usuari reaccioni a una sol·licitud d'entrada.</p><p>També inclou contingut que avança o s'actualitza a un ritme superior a la capacitat de l'usuari per llegir-lo i/o entendre'l. En altres paraules, el contingut animat, en moviment o en desplaçament introdueix un límit de temps en la capacitat d'un usuari per llegir el contingut.</p><p>En alguns casos, però, no és possible canviar el límit de temps (per exemple, per a una subhasta o un altre esdeveniment en temps real) i, per tant, es preveuen excepcions per a aquests casos.</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es garantizar que los usuarios con discapacidades tengan el tiempo adecuado para interactuar con el contenido web siempre que sea posible. Las personas con discapacidades como ceguera, baja visión, problemas de destreza y limitaciones cognitivas pueden necesitar más tiempo para leer el contenido o realizar funciones como completar formularios en línea. Si las funciones web dependen del tiempo, será difícil para algunos usuarios realizar la acción requerida antes de que se cumpla un límite de tiempo. Esto puede hacer que el servicio sea inaccesible para ellos. Diseñar funciones que no dependan del tiempo ayudará a las personas con discapacidades a tener éxito en completar estas funciones. Proporcionar opciones para deshabilitar los límites de tiempo, personalizar la duración de los límites de tiempo, o solicitar más tiempo antes de que se alcance un límite de tiempo ayuda a aquellos usuarios que requieren más tiempo del esperado para completar las tareas con éxito. Estas opciones se enumeran en el orden en que serán más útiles para el usuario. Deshabilitar los límites de tiempo es mejor que personalizar la duración de los límites de tiempo, que es mejor que solicitar más tiempo antes de que se produzca un límite de tiempo.</p><p>Cualquier proceso que ocurra sin la iniciación del usuario después de un tiempo establecido o de forma periódica es un límite de tiempo. Esto incluye actualizaciones parciales o completas de contenido (por ejemplo, actualización de página), cambios en el contenido o la expiración de una ventana de oportunidad para que un usuario reaccione a una solicitud de entrada.</p><p>También incluye contenido que avanza o se actualiza a un ritmo que supera la capacidad del usuario para leerlo o comprenderlo. En otras palabras, el contenido animado, en movimiento o desplazable introduce un límite de tiempo en la capacidad del usuario para leer el contenido.</p><p>En algunos casos, sin embargo, no es posible cambiar el límite de tiempo (por ejemplo, para una subasta u otro evento en tiempo real) y, por lo tanto, se prevén excepciones para esos casos.</p>", 
        "en" : "<p>The intent of this Success Criterion is to ensure that users with disabilities are given adequate time to interact with Web content whenever possible. People with disabilities such as blindness, low vision, dexterity impairments, and cognitive limitations may require more time to read content or to perform functions such as filling out on-line forms. If Web functions are time-dependent, it will be difficult for some users to perform the required action before a time limit occurs. This may render the service inaccessible to them. Designing functions that are not time-dependent will help people with disabilities succeed at completing these functions. Providing options to disable time limits, customize the length of time limits, or request more time before a time limit occurs helps those users who require more time than expected to successfully complete tasks. These options are listed in the order that will be most helpful for the user. Disabling time limits is better than customizing the length of time limits, which is better than requesting more time before a time limit occurs.</p><p>Any process that happens without user initiation after a set time or on a periodic basis is a time limit. This includes partial or full updates of content (for example, page refresh), changes to content, or the expiration of a window of opportunity for a user to react to a request for input.</p><p>It also includes content that is advancing or updating at a rate beyond the user's ability to read and/or understand it. In other words, animated, moving or scrolling content introduces a time limit on a user's ability to read content.</p><p>In some cases, however, it is not possible to change the time limit (for example, for an auction or other real-time event) and exceptions are therefore provided for those cases.</p>",
      },
      "benefits" :
      {
        "ca" : "<ul><li>Les persones amb discapacitat física sovint necessiten més temps per reaccionar, escriure i completar activitats. Les persones amb baixa visió necessiten més temps per localitzar coses a la pantalla i llegir. Les persones cegues i que utilitzen lectors de pantalla poden necessitar més temps per entendre els dissenys de la pantalla, trobar informació i utilitzar els controls. Les persones amb limitacions cognitives o lingüístiques necessiten més temps per llegir i comprendre. Les persones sordes i que es comuniquen en llengua de signes poden necessitar més temps per llegir la informació impresa en text (que pot ser una segona llengua per a alguns).</li><li>En les circumstàncies en què un intèrpret de llenguatge de signes pot relacionar contingut d'àudio amb un usuari sord, també és important controlar els límits de temps.</li><li>Les persones amb discapacitats lectores, limitacions cognitives i discapacitats d'aprenentatge que necessiten més temps per llegir o comprendre la informació poden tenir més temps per llegir la informació posant en pausa el contingut.</li></ul>", 
        "es" : "<ul><li>Las personas con discapacidades físicas a menudo necesitan más tiempo para reaccionar, escribir y completar actividades. Las personas con baja visión necesitan más tiempo para ubicar cosas en la pantalla y para leer. Las personas ciegas que usan lectores de pantalla pueden necesitar más tiempo para comprender los diseños de pantalla, encontrar información y operar los controles. Las personas que tienen limitaciones cognitivas o de lenguaje necesitan más tiempo para leer y comprender. Las personas sordas y que se comunican en lenguaje de señas pueden necesitar más tiempo para leer la información impresa en texto (que puede ser un segundo idioma para algunos).</li><li>En circunstancias en las que un intérprete de lenguaje de señas pueda estar relacionando contenido de audio con un usuario sordo, también es importante controlar los límites de tiempo.</li><li>Las personas con discapacidades de lectura, limitaciones cognitivas y discapacidades de aprendizaje que pueden necesitar más tiempo para leer o comprender la información pueden tener tiempo adicional para leer la información al pausar el contenido.</li></ul>", 
        "en" : "<ul><li>People with physical disabilities often need more time to react, to type and to complete activities. People with low vision need more time to locate things on screen and to read. People who are blind and using screen readers may need more time to understand screen layouts, to find information and to operate controls. People who have cognitive or language limitations need more time to read and to understand. People who are deaf and communicate in sign language may need more time to read information printed in text (which may be a second language for some).</li><li>In circumstances where a sign-language interpreter may be relating audio content to a user who is deaf, control over time limits is also important.</li><li>People with reading disabilities, cognitive limitations, and learning disabilities who may need more time to read or comprehend information can have additional time to read the information by pausing the content.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["dynamic-content"]
    },

    { // 2.2.2.
      "criteria" : 
      {
        "ca" : "2.2.2 Pausa Aturar Amagar", 
        "es" : "2.2.2 Pausa Detener Ocultar", 
        "en" : "2.2.2 Pause Stop Hide",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#pause-stop-hide", 
      "level" : "A",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Per a informació en moviment, parpelleig, desplaçament o actualització automàtica, tot el següent és veritable:<ul><li>Moviment, parpelleig, desplaçament: per a qualsevol informació en moviment, parpelleig o desplaçament que (1) s'iniciï automàticament, (2) duri més de cinc segons i (3) es presenti en paral·lel amb un altre contingut, hi ha un mecanisme perquè l'usuari pausar-lo, aturar-lo o amagar-lo llevat que el moviment, parpelleig o desplaçament sigui part d'una activitat en què sigui essencial; i</li><li>Actualització automàtica: per a qualsevol informació d'actualització automàtica que (1) s'iniciï automàticament i (2) es presenti en paral·lel amb un altre contingut, hi ha un mecanisme perquè l'usuari la pausi, l'aturi, l'oculti o controli la freqüència de l'actualització tret que l'actualització automàtica sigui part d'una activitat on sigui essencial.</li></ul>", 
        "es" : "Para información en movimiento, parpadeo, desplazamiento o actualización automática, todo lo siguiente es verdadero:<ul><li>Movimiento, parpadeo, desplazamiento: para cualquier información en movimiento, parpadeo o desplazamiento que (1) se inicie automáticamente, (2) dure más de cinco segundos y (3) se presente en paralelo con otro contenido, existe un mecanismo para que el usuario pausarlo, detenerlo u ocultarlo a menos que el movimiento, parpadeo o desplazamiento sea parte de una actividad en la que sea esencial; y</li><li>Actualización automática: para cualquier información de actualización automática que (1) se inicie automáticamente y (2) se presente en paralelo con otro contenido, existe un mecanismo para que el usuario la pause, la detenga, la oculte o controle la frecuencia de la actualizar a menos que la actualización automática sea parte de una actividad donde sea esencial.</li></ul>", 
        "en" : "For moving, blinking, scrolling, or auto-updating information, all of the following are true:<ul><li>Moving, blinking, scrolling : For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential; and</li><li>Auto-updating : For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.</li></ul>",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest Criteri d'èxit és evitar distreure els usuaris durant la seva interacció amb una pàgina web.</p><p>'Moure, parpellejar i desplaçar-se' fa referència al contingut en què el contingut visible transmet una sensació de moviment. Els exemples habituals inclouen imatges en moviment, presentacions multimèdia sincronitzades, animacions, jocs en temps real i tickers de desplaçament. 'Actualització automàtica' fa referència al contingut que s'actualitza o desapareix en funció d'un interval de temps preestablert. El contingut comú basat en el temps inclou àudio, informació meteorològica actualitzada automàticament, notícies, actualitzacions de preus de les accions i presentacions i missatges d'avançament automàtic. Els requisits per moure, parpellejar i desplaçar-se contingut i per a l'actualització automàtica del contingut són els mateixos, tret que:</p><ul><li>Els autors tenen l'opció de proporcionar a l'usuari un mitjà per controlar la freqüència d'actualitzacions quan el contingut s'actualitza automàticament i</li><li>No hi ha cap excepció de cinc segons per a l'actualització automàtica, ja que no té gaire sentit fer l'actualització automàtica durant uns segons i després aturar-se</li></ul><p>El contingut que es mou o s'actualitza automàticament pot ser una barrera per a qualsevol persona que tingui problemes per llegir text estacionari ràpidament, així com per a qualsevol persona que tingui problemes per fer un seguiment d'objectes en moviment. També pot causar problemes als lectors de pantalla.</p><p>Moure contingut també pot ser una distracció greu per a algunes persones. A determinats grups, especialment aquells amb trastorns de dèficit d'atenció, els continguts parpellejants els distreuen, cosa que els fa difícil concentrar-se en altres parts de la pàgina web. Es van triar cinc segons perquè són prou llargs per cridar l'atenció d'un usuari, però no tant perquè un usuari no pugui esperar la distracció si és necessari per utilitzar la pàgina.</p><p>El contingut que està en pausa es pot reprendre en temps real o continuar reproduint-se des del punt de la presentació on l'usuari va deixar.</p><p>[...]</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es evitar distraer a los usuarios durante su interacción con una página web.</p><p>'Movimiento, parpadeo y desplazamiento' se refiere al contenido en el que el contenido visible transmite una sensación de movimiento. Los ejemplos comunes incluyen películas, presentaciones de medios sincronizados, animaciones, juegos en tiempo real y teletipos de acciones en movimiento. 'Actualización automática' se refiere al contenido que se actualiza o desaparece en función de un intervalo de tiempo preestablecido. El contenido común basado en el tiempo incluye audio, información meteorológica actualizada automáticamente, noticias, actualizaciones de precios de acciones y presentaciones y mensajes de avance automático. Los requisitos para mover, parpadear y desplazar contenido y para actualizar automáticamente el contenido son los mismos, excepto que:</p><ul><li>Los autores tienen la opción de proporcionar al usuario un medio para controlar la frecuencia de las actualizaciones cuando el contenido se actualiza automáticamente y</li><li>No hay una excepción de cinco segundos para la actualización automática, ya que no tiene mucho sentido actualizar automáticamente durante unos segundos y luego detenerse</li></ul><p>El contenido que se mueve o se actualiza automáticamente puede ser una barrera para cualquier persona que tenga problemas para leer rápidamente un texto fijo, así como para cualquier persona que tenga problemas para rastrear objetos en movimiento. También puede causar problemas a los lectores de pantalla.</p><p>Mover contenido también puede ser una gran distracción para algunas personas. Ciertos grupos, particularmente aquellos con trastornos de déficit de atención, encuentran que el contenido parpadeante los distrae, lo que les dificulta concentrarse en otras partes de la página web. Se eligieron cinco segundos porque es suficiente para llamar la atención del usuario, pero no tanto como para que el usuario no pueda esperar a que pase la distracción si es necesario para usar la página.</p><p>El contenido que está en pausa puede reanudarse en tiempo real o continuar reproduciéndose desde el punto de la presentación donde el usuario lo dejó.</p><p>[...]</p>", 
        "en" : "<p>The intent of this Success Criterion is to avoid distracting users during their interaction with a Web page.</p><p>'Moving, blinking and scrolling' refers to content in which the visible content conveys a sense of motion. Common examples include motion pictures, synchronized media presentations, animations, real-time games, and scrolling stock tickers. 'Auto-updating' refers to content that updates or disappears based on a preset time interval. Common time-based content includes audio, automatically updated weather information, news, stock price updates, and auto-advancing presentations and messages. The requirements for moving, blinking and scrolling content and for auto-updating content are the same except that:</p><ul><li>Authors have the option of providing the user with a means to control the frequency of updates when content is auto-updating and</li><li>There is no five second exception for auto-updating since it makes little sense to auto-update for a few seconds and then stop</li></ul><p>Content that moves or auto-updates can be a barrier to anyone who has trouble reading stationary text quickly as well as anyone who has trouble tracking moving objects. It can also cause problems for screen readers.</p><p>Moving content can also be a severe distraction for some people. Certain groups, particularly those with attention deficit disorders, find blinking content distracting, making it difficult for them to concentrate on other parts of the Web page. Five seconds was chosen because it is long enough to get a user's attention, but not so long that a user cannot wait out the distraction if necessary to use the page.</p><p>Content that is paused can either resume in real-time or continue playing from the point in the presentation where the user left off.</p><p>[...]</p>",
      },
      "benefits" :
      {
        "ca" : "<ul><li>Proporcionar contingut que deixi de parpellejar al cap de cinc segons o proporcionar un mecanisme perquè els usuaris deixin de parpellejar contingut permet a les persones amb determinades discapacitats interactuar amb la pàgina web.</li><li>Un ús del contingut que parpelleja és cridar l'atenció del visitant sobre aquest contingut. Tot i que aquesta és una tècnica eficaç per a tots els usuaris amb visió, pot ser un problema per a alguns usuaris si persisteix. Per a determinats col·lectius, com ara persones amb baixa alfabetització, discapacitat lectora i intel·lectual, i persones amb trastorns de dèficit d'atenció, el contingut que parpelleja pot dificultar o fins i tot impossible la interacció amb la resta de la pàgina web.</li></ul>", 
        "es" : "<ul><li>Proporcionar contenido que deje de parpadear después de cinco segundos o proporcionar un mecanismo para que los usuarios dejen de parpadear permite que las personas con ciertas discapacidades interactúen con la página web.</li><li>Un uso del contenido que parpadea es atraer la atención del visitante hacia ese contenido. Aunque esta es una técnica efectiva para todos los usuarios con visión, puede ser un problema para algunos usuarios si persiste. Para ciertos grupos, incluidas las personas con bajo nivel de alfabetización, discapacidad intelectual y de lectura, y personas con trastornos por déficit de atención, el contenido que parpadea puede dificultar o incluso imposibilitar la interacción con el resto de la página web.</li></ul>", 
        "en" : "<ul><li>Providing content that stops blinking after five seconds or providing a mechanism for users to stop blinking content allows people with certain disabilities to interact with the Web page.</li><li>One use of content that blinks is to draw the visitor's attention to that content. Although this is an effective technique for all users with vision, it can be a problem for some users if it persists. For certain groups, including people with low literacy, reading and intellectual disabilities, and people with attention deficit disorders, content that blinks may make it difficult or even impossible to interact with the rest of the Web page.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["dynamic-content"]
    },
    
    { // 2.2.3.
      "criteria" : 
      {
        "ca" : "2.3.2 Tres centelleigs", 
        "es" : "2.3.2 Tres destellos", 
        "en" : "2.3.2 Three Flashes",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#no-timing", 
      "level" : "AAA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "El temps no és una part essencial de l'esdeveniment o activitat presentat pel contingut, tret dels mitjans sincronitzats no interactius i els esdeveniments en temps real.", 
        "es" : "El tiempo no es una parte esencial del evento o actividad presentado por el contenido, a excepción de los medios sincronizados no interactivos y los eventos en tiempo real.", 
        "en" : "Timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events.",
      },
      "intent" : 
      {
        "ca" : "La intenció d'aquest criteri d'èxit és minimitzar l'aparició de contingut que requereixi una interacció temporal. Això permet que les persones amb ceguesa, baixa visió, limitacions cognitives o deficiències motrius puguin interactuar amb el contingut. Això difereix del criteri d'èxit del nivell A perquè l'única excepció és per als esdeveniments en temps real.", 
        "es" : "La intención de este Criterio de Conformidad es minimizar la aparición de contenido que requiera una interacción cronometrada. Esto permite que las personas con ceguera, baja visión, limitaciones cognitivas o deficiencias motoras interactúen con el contenido. Esto difiere del Criterio de Conformidad del Nivel A en que la única excepción es para eventos en tiempo real.", 
        "en" : "The intent of this Success Criterion is to minimize the occurrence of content that requires timed interaction. This enables people with blindness, low vision, cognitive limitations, or motor impairments to interact with content. This differs from the Level A Success Criterion in that the only exception is for real-time events.",
      },
      "benefits" :
      {
        "ca" : "<ul><li>Les persones amb discapacitat física sovint necessiten més temps per reaccionar, escriure i completar activitats. Les persones amb baixa visió necessiten més temps per localitzar coses a la pantalla i llegir. Les persones cegues i que utilitzen lectors de pantalla poden necessitar més temps per entendre els dissenys de la pantalla, trobar informació i utilitzar els controls. Les persones amb limitacions cognitives o lingüístiques necessiten més temps per llegir i comprendre. Les persones sordes i que es comuniquen en llengua de signes poden necessitar més temps per llegir la informació impresa en text (que pot ser una segona llengua per a alguns).</li><li>En les circumstàncies en què un intèrpret de llenguatge de signes pot relacionar contingut d'àudio amb un usuari sord, també és important controlar els límits de temps.</li></ul>", 
        "es" : "<ul><li>Las personas con discapacidades físicas a menudo necesitan más tiempo para reaccionar, escribir y completar actividades. Las personas con baja visión necesitan más tiempo para ubicar cosas en la pantalla y para leer. Las personas ciegas que usan lectores de pantalla pueden necesitar más tiempo para comprender los diseños de pantalla, encontrar información y operar los controles. Las personas que tienen limitaciones cognitivas o de lenguaje necesitan más tiempo para leer y comprender. Las personas sordas y que se comunican en lenguaje de señas pueden necesitar más tiempo para leer la información impresa en texto (que puede ser un segundo idioma para algunos).</li><li>En circunstancias en las que un intérprete de lenguaje de señas pueda estar relacionando contenido de audio con un usuario sordo, también es importante controlar los límites de tiempo.</li></ul>", 
        "en" : "<ul><li>People with physical disabilities often need more time to react, to type and to complete activities. People with low vision need more time to locate things on screen and to read. People who are blind and using screen readers may need more time to understand screen layouts, to find information and to operate controls. People who have cognitive or language limitations need more time to read and to understand. People who are deaf and communicate in sign language may need more time to read information printed in text (which may be a second language for some).</li><li>In circumstances where a sign-language interpreter may be relating audio content to a user who is deaf, control over time limits is also important.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/no-timing.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/no-timing.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },
    
    { // 2.2.4.
      "criteria" : 
      {
        "ca" : "2.2.4 Interrupcions", 
        "es" : "2.2.4 Interrupciones", 
        "en" : "2.2.4 Interruptions",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#interruptions", 
      "level" : "AAA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Les interrupcions poden ser postergades o suprimides per l'usuari, excepte les interrupcions que impliquin una emergència.", 
        "es" : "Las interrupciones pueden ser postergadas o suprimidas por el usuario, excepto las interrupciones que impliquen una emergencia.", 
        "en" : "Interruptions can be postponed or suppressed by the user, except interruptions involving an emergency.",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest criteri d'èxit és permetre als usuaris desactivar les actualitzacions de l'autor/servidor excepte en cas d'emergència. Les emergències inclourien missatges d'alerta d'emergència civil o qualsevol altre missatge que adverteixi de perills per a la salut, la seguretat o la propietat, inclosa la pèrdua de dades, la pèrdua de connexió, etc.</p><p>Això permet l'accés de persones amb limitacions cognitives o trastorns d'atenció, permetent-los centrar-se en el contingut. També permet als usuaris cecs o amb baixa visió mantenir el focus de 'visualització' en el contingut que estan llegint actualment.</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es permitir que los usuarios desactiven las actualizaciones del autor/servidor, excepto en casos de emergencia. Las emergencias incluirían mensajes de alerta de emergencia civil o cualquier otro mensaje que advierta sobre el peligro para la salud, la seguridad o la propiedad, incluida la pérdida de datos, la pérdida de conexión, etcétera.</p><p>Esto permite el acceso de personas con limitaciones cognitivas o trastornos de atención al permitirles concentrarse en el contenido. También permite a los usuarios ciegos o con baja visión mantener su enfoque de 'visualización' en el contenido que están leyendo actualmente.</p>", 
        "en" : "<p>The intent of this Success Criterion is to allow users to turn off updates from the author/server except in emergencies. Emergencies would include civil emergency alert messages or any other messages that warn of danger to health, safety, or property, including data loss, loss of connection, etcetera.</p><p>This allows access by people with cognitive limitations or attention disorders by enabling them to focus on the content. It also allows users who are blind or have low vision to keep their 'viewing' focus on the content they are currently reading.</p>",
      },
      "benefits" :
      {
        "ca" : "<ul><li>Les persones amb trastorns per dèficit d'atenció poden centrar-se en el contingut sense distraccions.</li><li>Les persones amb baixa visió o que utilitzen lectors de pantalla no tindran contingut actualitzat mentre el vegin (cosa que pot provocar discontinuïtats i malentesos si comencen a llegir en un tema i acaben en un altre).</li></ul>", 
        "es" : "<ul><li>Las personas con trastornos por déficit de atención pueden concentrarse en el contenido sin distracciones.</li><li>Las personas con baja visión o que utilizan lectores de pantalla no tendrán actualizado el contenido mientras lo visualizan (lo que puede generar discontinuidad y malentendidos si comienzan a leer en un tema y terminan en otro).</li></ul>", 
        "en" : "<ul><li>Individuals with attention deficit disorders can focus on content without distraction.</li><li>Individuals with low vision or who use screen readers will not have content updated while they are viewing it (which can lead to discontinuity and misunderstanding if they start reading in one topic and finish in another).</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/interruptions.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/interruptions.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },
    
    { // 2.2.5.
      "criteria" : 
      {
        "ca" : "2.2.5 Re-autenticació", 
        "es" : "2.2.5 Re-autenticación", 
        "en" : "2.2.5 Re-authenticating",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#re-authenticating", 
      "level" : "AAA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Quan caduceu una sessió autenticada, l'usuari pot continuar l'activitat sense pèrdua de dades després de tornar a autenticar-se.", 
        "es" : "Cuando caduca una sesión autenticada, el usuario puede continuar la actividad sin pérdida de datos después de volver a autenticarse.", 
        "en" : "When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating.",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest Criteri d'èxit és permetre a tots els usuaris completar transaccions autenticades que tinguin límits de temps d'inactivitat o altres circumstàncies que facin que un usuari es tanqui la sessió mentre es troba en plena transacció.</p><p>Per motius de seguretat, molts llocs implementen un límit de temps d'autenticació després d'un determinat període d'inactivitat. Aquests límits de temps poden causar problemes a les persones amb discapacitat perquè poden trigar més a completar l'activitat.</p><p>Altres llocs tancaran la sessió una persona d'una sessió si una persona inicia sessió al lloc web des d'un altre ordinador o si sorgeixen altres activitats que fan que el lloc sospiti de si la persona segueix sent la mateixa persona legítima que va iniciar sessió originalment. Quan els usuaris tanquen la sessió mentre encara estan enmig d'una transacció, és important que se'ls doni la possibilitat de tornar-se a autenticar i continuar amb la transacció sense perdre cap dada ja introduïda.</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es permitir que todos los usuarios completen transacciones autenticadas que tienen límites de tiempo de inactividad u otras circunstancias que harían que se cerrara la sesión de un usuario mientras estaba completando la transacción.</p><p>Por razones de seguridad, muchos sitios implementan un límite de tiempo de autenticación después de un cierto período de inactividad. Estos límites de tiempo pueden causar problemas a las personas con discapacidad porque les puede llevar más tiempo completar la actividad.</p><p>Otros sitios cerrarán la sesión de una persona si una persona inicia sesión en el sitio web desde otra computadora o si surgen otras actividades que hacen que el sitio sospeche de si la persona sigue siendo la misma persona legítima que inició sesión originalmente. Cuando los usuarios cierran sesión mientras aún están en medio de una transacción, es importante que tengan la capacidad de volver a autenticarse y continuar con la transacción sin perder ningún dato ya ingresado.</p>", 
        "en" : "<p>The intent of this Success Criterion is to allow all users to complete authenticated transactions that have inactivity time limits or other circumstances that would cause a user to be logged out while in the midst of completing the transaction.</p><p>For security reasons, many sites implement an authentication time limit after a certain period of inactivity. These time limits may cause problems for persons with disabilities because it may take longer for them to complete the activity.</p><p>Other sites will log a person out of a session if a person logs in on the Web site from another computer or if other activities arise that make the site suspicious of whether the person is still the same legitimate person who logged in originally. When users are logged out while still in the midst of a transaction - it is important that they be given the ability to re-authenticate and continue with the transaction without the loss of any data already entered.</p>",
      },
      "benefits" :
      {
        "ca" : "<ul><li>Aquest criteri d'èxit beneficia les persones que poden necessitar més temps per completar una activitat. Les persones amb limitacions cognitives poden llegir lentament i requereixen temps addicional per llegir i respondre un qüestionari. Els usuaris que interactuen mitjançant un lector de pantalla poden necessitar més temps per navegar i completar un formulari complicat. Una persona amb discapacitat motriu o que navegui amb un dispositiu d'entrada alternatiu pot necessitar més temps per navegar o completar l'entrada d'un formulari.</li><li>En les circumstàncies en què un intèrpret de llenguatge de signes pot relacionar contingut d'àudio amb un usuari sord, també és important controlar els límits de temps.</li></ul>", 
        "es" : "<ul><li>Este Criterio de Conformidad beneficia a las personas que pueden necesitar tiempo adicional para completar una actividad. Las personas con limitaciones cognitivas pueden leer lentamente y requerir tiempo adicional para leer y responder un cuestionario. Los usuarios que interactúan a través de un lector de pantalla pueden necesitar más tiempo para navegar y completar un formulario complicado. Una persona con impedimentos motores o que navega con un dispositivo de entrada alternativo puede necesitar tiempo adicional para navegar o completar la entrada dentro de un formulario.</li><li>En circunstancias en las que un intérprete de lenguaje de señas pueda estar relacionando contenido de audio con un usuario sordo, también es importante controlar los límites de tiempo.</li></ul>", 
        "en" : "<ul><li>This Success Criterion benefits people who may require additional time to complete an activity. People with cognitive limitations may read slowly and require additional time to read and respond to a questionnaire. Users interacting via a screen reader may need extra time to navigate and complete a complicated form. A person with motor impairments or who navigates with an alternative input device may require additional time to navigate through or complete input within a form.</li><li>In circumstances where a sign-language interpreter may be relating audio content to a user who is deaf, control over time limits is also important.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/re-authenticating.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/re-authenticating.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["content"]
    },
    
    { // 2.2.6.
      "criteria" : 
      {
        "ca" : "2.2.6 Temps despera", 
        "es" : "2.2.6 Tiempos de espera", 
        "en" : "2.2.6 Timeouts",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#timeouts", 
      "level" : "AAA",
      "version" : "2.1", 
      "goal" : 
      {
        "ca" : "S'adverteix els usuaris sobre la durada de qualsevol inactivitat de l'usuari que pugui causar la pèrdua de dades, tret que les dades es conservin durant més de 20 hores quan l'usuari no realitza cap acció.", 
        "es" : "Se advierte a los usuarios sobre la duración de cualquier inactividad del usuario que pueda causar la pérdida de datos, a menos que los datos se conserven durante más de 20 horas cuando el usuario no realiza ninguna acción.", 
        "en" : "Users are warned of the duration of any user inactivity that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.",
      },
      "intent" : 
      {
        "ca" : "<p></p><p></p><p></p><p></p><p></p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es garantizar que cuando se usa un tiempo de espera, los usuarios saben qué duración de inactividad hará que la página se agote y resulte en la pérdida de datos. El uso de eventos cronometrados puede presentar barreras significativas para los usuarios con discapacidades cognitivas, ya que estos usuarios pueden requerir más tiempo para leer contenido o realizar funciones, como completar un formulario en línea.</p><p>Durante la finalización de un proceso en línea, como reservar una habitación de hotel o comprar un boleto de avión, un usuario con una discapacidad cognitiva puede verse abrumado con largas instrucciones y el ingreso de datos necesarios para completar el proceso. Es posible que el usuario no pueda completar el proceso de una vez y necesite tomarse un descanso. Los usuarios deben poder abandonar un proceso sin perder su lugar actual dentro del proceso y sin perder la información que ya se ha ingresado. Si los usuarios no pueden tomar un descanso y revisar su trabajo, a menudo muchos no podrán completar una tarea correctamente.</p><p>Este Criterio de Conformidad funciona en conjunto con el Criterio de Conformidad 2.2.1 Temporización Ajustable, pero se enfoca específicamente en la notificación de tiempos de espera relacionados con la inactividad del usuario.</p><p>La mejor manera de cumplir con este criterio de éxito es mantener los datos del usuario durante al menos 20 horas. Esto permite que el usuario con discapacidades y la comunidad de personas mayores comiencen y terminen una tarea, tomando descansos según sea necesario. Sin embargo, cuando no sea práctico guardar los datos del usuario, el autor debe advertir al usuario sobre la duración de la inactividad, lo que resultará en un tiempo de espera. Los tiempos de espera deben mostrarse al usuario una vez al comienzo de la tarea o proceso relacionado y no en cada paso.</p><p>Este criterio de éxito solo se aplica a los tiempos de espera que están dentro del conocimiento o control del proveedor de contenido. Por ejemplo, si el usuario cierra un navegador web o dispositivo y pierde contenido en una página abierta que aún no se ha enviado, no se han violado los criterios de éxito.</p>", 
        "en" : "<p>The intent of this Success Criterion is to ensure that when a timeout is used, users know what duration of inactivity will cause the page to time out and result in lost data. The use of timed events can present significant barriers for users with cognitive disabilities, as these users may require more time to read content or to perform functions, such as completing an online form.</p><p>During the completion of an online process, such as to reserve a hotel room or purchase a plane ticket, a user with a cognitive impairment may become overwhelmed with lengthy instructions and data input required to complete the process. The user may not be able to complete the process in one sitting and may need to take a break. Users should be able to leave a process without losing their current place within the process, and without losing information that has already been entered. If users cannot take a break and check their work, many will often be unable to complete a task correctly.</p><p>This Success Criterion works in tandem with Success Criterion 2.2.1 Timing Adjustable, but is specifically focused on notification of timeouts related to user inactivity.</p><p>The best way to conform to this success criteria is to keep the user data for at least 20 hours. This enables the user with disabilities and the aging community to start and finish a task, taking breaks as needed. However, when it is not practical to save the user data the author must warn the user about the duration of inactivity which will result in a timeout. Timeouts should be displayed to the user once at the beginning of the related task or process and not at each step.</p><p>This success criterion only applies to timeouts that are within the content provider's knowledge or control. For example, if the user closes a web browser or device and loses content in an open page that has not yet been submitted, the success criteria has not been violated.</p>",
      },
      "benefits" :
      {
        "ca" : "<p>Aquest criteri d'èxit ajuda els usuaris assegurant-se que reben notificacions sobre els temps d'espera relacionats amb la inactivitat.</p><p>Quan un usuari sàpiga quant de temps té per a una tasca, sabrà si pot fer un descans necessari i reprendre la seva feina sense necessitat de tornar a començar. Això permet a molts usuaris completar tasques en línia que d'altra manera no podrien fer. Si existeix una situació en què és necessari un temps d'espera, l'usuari s'adverteix a l'inici de la tasca sobre la durada d'inactivitat que generaria un temps d'espera. L'usuari pot decidir llavors si pot gestionar aquesta tasca o no en el temps donat, o si necessita preparar materials abans d'iniciar un procés. Això reduirà la frustració de perdre feina a causa d'un temps mort.</p><p>Aquest criteri d'èxit ajuda les persones amb moltes discapacitats cognitives diferents, incloses les persones amb:</p><ul><li>Discapacitats relacionades amb el llenguatge;</li><li>Discapacitats relacionades amb la memòria;</li><li>Discapacitats relacionades amb la concentració i l'atenció; i</li><li>Discapacitats que afecten la funció executiva i la presa de decisions.</li></ul>", 
        "es" : "<p>Este Criterio de Conformidad ayuda a los usuarios al garantizar que se les notifiquen los tiempos de espera relacionados con la inactividad.</p><p>Cuando un usuario sabe cuánto tiempo tiene permitido para una tarea, sabrá si puede tomar un descanso necesario y reanudar su trabajo sin necesidad de comenzar de nuevo. Esto permite a muchos usuarios completar tareas en línea que de otro modo no podrían realizar. Si existe una situación en la que es necesario un tiempo de espera, se advierte al usuario al comienzo de la tarea sobre la duración de la inactividad que generaría un tiempo de espera. El usuario puede entonces decidir si puede manejar esta tarea o no en el tiempo dado, o si necesita preparar materiales antes de iniciar un proceso. Esto reducirá la frustración de perder trabajo debido a un tiempo de espera.</p><p>Este Criterio de Conformidad ayuda a las personas con muchas discapacidades cognitivas diferentes, incluidas las personas con:</p><ul><li>Discapacidades relacionadas con el lenguaje;</li><li>Discapacidades relacionadas con la memoria;</li><li>Discapacidades relacionadas con el enfoque y la atención; y</li><li>Discapacidades que afectan la función ejecutiva y la toma de decisiones.</li></ul>", 
        "en" : "<p>This Success Criterion helps users by ensuring they are notified about timeouts related to inactivity.</p><p>When a user knows how much time they are allowed for a task, they will know whether they can take a needed break and resume their work without needing to start again. This enables many users to complete tasks online that they otherwise could not do. If a situation exists where a timeout is necessary, the user is warned at the start of the task about the length of inactivity that would generate a timeout. The user can then decide if they can manage this task or not in the given time, or if they need to prepare materials in advance of starting a process. This will reduce the frustration of losing work due to a timeout.</p><p>This Success Criterion helps people with many different cognitive disabilities, including people with:</p><ul><li>Language-related disabilities;</li><li>Memory-related disabilities;</li><li>Focus-and-attention-related disabilities; and</li></li><li>Disabilities that affect executive function and decision making.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/timeouts.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/timeouts.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },
    
    { // 2.3.1.
      "criteria" : 
      {
        "ca" : "2.3.1 Tres centelleigs o per sota del llindar", 
        "es" : "2.3.1 Tres destellos o por debajo del umbral", 
        "en" : "2.3.1 Three Flashes or Below Threshold",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold", 
      "level" : "A",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Les pàgines web no contenen res que parpellegeu més de tres vegades en qualsevol període d'un segon, o el parpelleig està per sota dels llindars de parpelleig general i parpelleig vermell.", 
        "es" : "Las páginas web no contienen nada que parpadee más de tres veces en cualquier período de un segundo, o el parpadeo está por debajo de los umbrales de parpadeo general y parpadeo rojo.", 
        "en" : "Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds.",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest criteri d'èxit és permetre als usuaris accedir al contingut complet d'un lloc sense provocar convulsions a causa de la fotosensibilitat.</p><p>Les persones que tenen convulsions fotosensibles poden tenir una convulsió provocada per contingut que parpelleja a determinades freqüències durant més d'uns quants flaixos. Les persones són encara més sensibles al parpelleig vermell que a altres colors, de manera que es fa una prova especial per al parpelleig vermell saturat. Aquestes directrius es basen en directrius per a la indústria de la radiodifusió adaptades per a pantalles d'ordinador, on el contingut es veu des d'una distància més propera (utilitzant un angle de visió més gran).</p><p>El parpelleig pot ser causat per la pantalla, l'ordinador que renderitza la imatge o pel contingut que s'està renderitzant. L'autor no té control dels dos primers. Es poden abordar pel disseny i la velocitat de la pantalla i l'ordinador. La intenció d'aquest criteri és garantir que el parpelleig que infringeix els llindars de flaix no sigui causat pel contingut en si. Per exemple, el contingut podria contenir un videoclip o una imatge animada d'una sèrie de flaixos estroboscòpics o primers plans d'explosions de foc ràpid.</p><p>Aquest criteri d'èxit substitueix un criteri molt més restrictiu a WCAG 1.0 que no permetia cap parpelleig (fins i tot d'un sol píxel) dins d'un ampli rang de freqüències (de 3 a 50 Hz). Aquest criteri d'èxit es basa en les especificacions existents que s'utilitzen al Regne Unit i altres per a la transmissió de televisió i s'ha adaptat per a la visualització de la pantalla d'ordinador. La pantalla de 1024 x 768 s'utilitza com a resolució de pantalla de referència per a l'avaluació. El bloc de 341 x 256 píxels representa una visió de 10 graus a una distància de visualització típica. (El camp de 10 graus es pren de les especificacions originals i representa la part central de la visió de l'ull, on les persones són més susceptibles als estímuls fotogràfics).</p><p>L'àrea combinada de flaixos que es produeixen simultàniament i de forma contigua significa l'àrea total que realment parpelleja al mateix temps. Es calcula sumant l'àrea contigua que parpelleja simultàniament dins de qualsevol angle de visió de 10 graus.</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es permitir que los usuarios accedan al contenido completo de un sitio sin inducir convulsiones debido a la fotosensibilidad.</p><p>Las personas que tienen trastornos convulsivos fotosensibles pueden tener un ataque desencadenado por contenido que parpadea a ciertas frecuencias durante más de unos pocos destellos. Las personas son incluso más sensibles a los destellos rojos que a otros colores, por lo que se proporciona una prueba especial para los destellos rojos saturados. Estas pautas se basan en pautas para la industria de la radiodifusión adaptadas para pantallas de computadora, donde el contenido se ve desde una distancia más cercana (usando un ángulo de visión más grande).</p><p>El parpadeo puede ser causado por la pantalla, la computadora que muestra la imagen o el contenido que se muestra. El autor no tiene control sobre los dos primeros. Pueden ser abordados por el diseño y la velocidad de la pantalla y la computadora. La intención de este criterio es garantizar que el parpadeo que viola los umbrales de flash no sea causado por el contenido en sí. Por ejemplo, el contenido podría contener un videoclip o una imagen animada de una serie de destellos estroboscópicos o primeros planos de explosiones de fuego rápido.</p><p>Este Criterio de Conformidad reemplaza un criterio mucho más restrictivo en WCAG 1.0 que no permitía ningún parpadeo (incluso de un solo píxel) dentro de un amplio rango de frecuencia (3 a 50 Hz). Este Criterio de Conformidad se basa en las especificaciones existentes en uso en el Reino Unido y por otros para la transmisión de televisión y ha sido adaptado para visualización en pantalla de computadora. La pantalla de 1024 x 768 se utiliza como resolución de pantalla de referencia para la evaluación. El bloque de 341 x 256 píxeles representa una ventana gráfica de 10 grados a una distancia de visualización típica. (El campo de 10 grados se toma de las especificaciones originales y representa la porción de visión central del ojo, donde las personas son más susceptibles a los estímulos fotográficos).</p><p>El área combinada de destellos que ocurren concurrente y contiguamente significa el área total que realmente está destellando al mismo tiempo. Se calcula sumando el área contigua que parpadea simultáneamente dentro de cualquier ángulo de visión de 10 grados.</p>", 
        "en" : "<p>The intent of this Success Criterion is to allow users to access the full content of a site without inducing seizures due to photosensitivity.</p><p>Individuals who have photosensitive seizure disorders can have a seizure triggered by content that flashes at certain frequencies for more than a few flashes. People are even more sensitive to red flashing than to other colors, so a special test is provided for saturated red flashing. These guidelines are based on guidelines for the broadcasting industry as adapted for computer screens, where content is viewed from a closer distance (using a larger angle of vision).</p><p>Flashing can be caused by the display, the computer rendering the image or by the content being rendered. The author has no control of the first two. They can be addressed by the design and speed of the display and computer. The intent of this criterion is to ensure that flicker that violates the flash thresholds is not caused by the content itself. For example, the content could contain a video clip or animated image of a series of strobe flashes, or close-ups of rapid-fire explosions.</p><p>This Success Criterion replaces a much more restrictive criterion in WCAG 1.0 that did not allow any flashing (even of a single pixel) within a broad frequency range (3 to 50 Hz). This Success Criterion is based on existing specifications in use in the UK and by others for television broadcast and has been adapted for computer display viewing. The 1024 x 768 screen is used as the reference screen resolution for the evaluation. The 341 x 256 pixel block represents a 10 degree viewport at a typical viewing distance. (The 10 degree field is taken from the original specifications and represents the central vision portion of the eye, where people are most susceptible to photo stimuli.)</p><p>The combined area of flashes occurring concurrently and contiguously means the total area that is actually flashing at the same time. It is calculated by adding up the contiguous area that is flashing simultaneously within any 10 degree angle of view.</p>",
      },
      "benefits" :
      {
        "ca" : "Les persones que tinguin convulsions quan visualitzin material intermitent podran veure tot el material d'un lloc sense tenir cap convulsió i sense haver de perdre's l'experiència completa del contingut limitant-se a alternatives de text. Això inclou persones amb epilèpsia fotosensible, així com altres trastorns de convulsions fotosensibles.", 
        "es" : "Las personas que tienen convulsiones al ver material intermitente podrán ver todo el material en un sitio sin tener una convulsión y sin tener que perderse la experiencia completa del contenido al estar limitados a alternativas de texto. Esto incluye a las personas con epilepsia fotosensible y otros trastornos convulsivos fotosensibles.", 
        "en" : "Individuals who have seizures when viewing flashing material will be able to view all of the material on a site without having a seizure and without having to miss the full experience of the content by being limited to text alternatives. This includes people with photosensitive epilepsy as well as other photosensitive seizure disorders.",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["dynamic-content"]
    },
    
    { // 2.3.2.
      "criteria" : 
      {
        "ca" : "2.3.2 Tres centelleigs", 
        "es" : "2.3.2 Tres destellos", 
        "en" : "2.3.2 Three Flashes",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#three-flashes", 
      "level" : "AAA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Les pàgines web no contenen res que parpellegi més de tres vegades en qualsevol període dun segon.", 
        "es" : "Las páginas web no contienen nada que parpadee más de tres veces en cualquier período de un segundo.", 
        "en" : "Web pages do not contain anything that flashes more than three times in any one second period.",
      },
      "intent" : 
      {
        "ca" : "<p>The purpose of this Success Criterion is to further reduce the chance of seizures. Seizures cannot be completely eliminated since some people are so sensitive. However, by eliminating all 3-per-second flashing over any area of the screen, the chances of a person having a seizure are further reduced than when just meeting the measures ordinarily used today in standards internationally, as we do at Level A.</p><p>Whereas Success Criterion 2.3.1 allows flashing if it is dim enough or has a small enough area, Success Criterion 2.3.2 does not allow flashing greater than 3 per second, regardless of brightness or size. As a result, even a single flashing pixel would violate this criterion. The intent is to guard against flashing larger than a single pixel, but since an unknown amount of magnification or high contrast setting may be applied, the prohibition is against any flashing.</p>", 
        "es" : "<p>El propósito de este Criterio de Conformidad es reducir aún más la posibilidad de incautaciones. Las convulsiones no se pueden eliminar por completo ya que algunas personas son muy sensibles. Sin embargo, al eliminar todos los parpadeos de 3 por segundo sobre cualquier área de la pantalla, las posibilidades de que una persona tenga una convulsión se reducen aún más que cuando solo se cumplen las medidas que se usan normalmente hoy en día en los estándares internacionales, como lo hacemos en el Nivel A.</p><p>Mientras que el Criterio de Conformidad 2.3.1 permite el parpadeo si es lo suficientemente tenue o tiene un área lo suficientemente pequeña, el Criterio de Conformidad 2.3.2 no permite un parpadeo superior a 3 por segundo, independientemente del brillo o el tamaño. Como resultado, incluso un solo píxel intermitente violaría este criterio. La intención es protegerse contra el parpadeo de más de un píxel, pero dado que se puede aplicar una cantidad desconocida de aumento o una configuración de alto contraste, la prohibición es contra cualquier parpadeo.</p>", 
        "en" : "<p>The purpose of this Success Criterion is to further reduce the chance of seizures. Seizures cannot be completely eliminated since some people are so sensitive. However, by eliminating all 3-per-second flashing over any area of the screen, the chances of a person having a seizure are further reduced than when just meeting the measures ordinarily used today in standards internationally, as we do at Level A.</p><p>Whereas Success Criterion 2.3.1 allows flashing if it is dim enough or has a small enough area, Success Criterion 2.3.2 does not allow flashing greater than 3 per second, regardless of brightness or size. As a result, even a single flashing pixel would violate this criterion. The intent is to guard against flashing larger than a single pixel, but since an unknown amount of magnification or high contrast setting may be applied, the prohibition is against any flashing.</p>",
      },
      "benefits" :
      {
        "ca" : "Individuals who have seizures when viewing flashing material will be able to view all of the material on a site without having a seizure and without having to miss the full experience of the content by being limited to text alternatives. This includes people with photosensitive epilepsy as well as other photosensitive seizure disorders.", 
        "es" : "Las personas que tienen convulsiones al ver material intermitente podrán ver todo el material en un sitio sin tener una convulsión y sin tener que perderse la experiencia completa del contenido al estar limitados a alternativas de texto. Esto incluye a las personas con epilepsia fotosensible y otros trastornos convulsivos fotosensibles.", 
        "en" : "Individuals who have seizures when viewing flashing material will be able to view all of the material on a site without having a seizure and without having to miss the full experience of the content by being limited to text alternatives. This includes people with photosensitive epilepsy as well as other photosensitive seizure disorders.",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/three-flashes.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/three-flashes.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },
    
    { // 2.3.3.
      "criteria" : 
      {
        "ca" : "2.3.3 Animació a partir de les interaccions", 
        "es" : "2.3.3 Animación a partir de interacciones", 
        "en" : "2.3.3 Animation from Interactions",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#animation-from-interactions", 
      "level" : "AAA",
      "version" : "2.1", 
      "goal" : 
      {
        "ca" : "L'animació de moviment desencadenada per la interacció es pot desactivar, tret que l'animació sigui essencial per a la funcionalitat o la informació que es transmet.", 
        "es" : "La animación de movimiento desencadenada por la interacción se puede desactivar, a menos que la animación sea esencial para la funcionalidad o la información que se transmite.", 
        "en" : "Motion animation triggered by interaction can be disabled, unless the animation is essential to the functionality or the information being conveyed.",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest criteri d'èxit és permetre als usuaris evitar que l'animació es mostri a les pàgines web. Alguns usuaris experimenten distraccions o nàusees amb el contingut animat. Per exemple, si el desplaçament d'una pàgina fa que es moguin elements (a part del moviment essencial associat al desplaçament), pot provocar trastorns vestibulars. Les reaccions del trastorn vestibular (oïda interna) inclouen marejos, nàusees i mals de cap. Una altra animació que sovint no és essencial és el desplaçament de paral·laxi. El desplaçament de paral·laxi es produeix quan els fons es mouen a una velocitat diferent als primers plans. L'animació que és essencial per a la funcionalitat o la informació d'una pàgina web està permesa per aquest Criteri d'èxit.</p><p>'Animació a partir d'interaccions' s'aplica quan la interacció d'un usuari inicia una animació no essencial. En canvi, 2.2.2 Pausa, Atura, Amaga s'aplica quan la pàgina web inicia l'animació.</p><p>Com pot un lloc web reduir les possibilitats de desencadenar un trastorn vestibular? Trieu qualsevol de les solucions següents. Eviteu utilitzar animacions innecessàries. Proporcioneu un control perquè els usuaris desactivin les animacions no essencials de la interacció de l'usuari. Aprofiteu la funció de reduir el moviment de l'agent d'usuari o del sistema operatiu.</p><p>Què passa amb el moviment causat per un usuari que es desplaça per una pàgina? Moure contingut nou a la finestra gràfica és essencial per al desplaçament. L'usuari controla el moviment de desplaçament essencial de manera que està permès. Afegiu només animació no essencial a la interacció de desplaçament d'una manera responsable. Doneu sempre als usuaris la possibilitat de desactivar els moviments innecessaris.</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es permitir a los usuarios evitar que se muestren animaciones en las páginas web. Algunos usuarios experimentan distracción o náuseas por el contenido animado. Por ejemplo, si el desplazamiento de una página hace que los elementos se muevan (aparte del movimiento esencial asociado con el desplazamiento), puede desencadenar trastornos vestibulares. Las reacciones del trastorno vestibular (oído interno) incluyen mareos, náuseas y dolores de cabeza. Otra animación que a menudo no es esencial es el desplazamiento de paralaje. El desplazamiento de paralaje ocurre cuando los fondos se mueven a una velocidad diferente a la de los primeros planos. Este Criterio de Conformidad permite la animación que es esencial para la funcionalidad o la información de una página web.</p><p>La 'animación a partir de interacciones' se aplica cuando la interacción de un usuario inicia una animación no esencial. Por el contrario, 2.2.2 Pausa, Detener, Ocultar se aplica cuando la página web inicia la animación.</p><p>¿Cómo puede un sitio web reducir las posibilidades de desencadenar un trastorno vestibular? Elija cualquiera de las siguientes soluciones. Evite el uso de animaciones innecesarias. Proporcione un control para que los usuarios desactiven las animaciones no esenciales de la interacción del usuario. Aproveche la función de reducción de movimiento en el agente de usuario o el sistema operativo.</p><p>¿Qué pasa con el movimiento causado por un usuario que se desplaza por una página? Mover contenido nuevo a la ventana gráfica es esencial para desplazarse. El usuario controla el movimiento de desplazamiento esencial para que esté permitido. Solo agregue animaciones no esenciales a la interacción de desplazamiento de manera responsable. Ofrezca siempre a los usuarios la posibilidad de desactivar los movimientos innecesarios.</p>", 
        "en" : "<p>The intent of this Success Criterion is to allow users to prevent animation from being displayed on Web pages. Some users experience distraction or nausea from animated content. For example, if scrolling a page causes elements to move (other than the essential movement associated with scrolling) it can trigger vestibular disorders. Vestibular (inner ear) disorder reactions include dizziness, nausea and headaches. Another animation that is often non-essential is parallax scrolling. Parallax scrolling occurs when backgrounds move at a different rate to foregrounds. Animation that is essential to the functionality or information of a web page is allowed by this Success Criterion.</p><p>'Animation from interactions' applies when a user’s interaction initiates non-essential animation. In contrast, 2.2.2 Pause, Stop, Hide applies when the web page initiates animation.</p><p>How can a website reduce the chances of triggering a vestibular disorder? Choose any one of the following solutions. Avoid using unnecessary animation. Provide a control for users to turn off non-essential animations from user interaction. Take advantage of the reduce motion feature in the user-agent or operating system.</p><p>What about movement caused by a user scrolling a page? Moving new content into the viewport is essential for scrolling. The user controls the essential scrolling movement so it is allowed. Only add non-essential animation to the scrolling interaction in a responsible way. Always give users the ability to turn off unnecessary movement.</p>",
      },
      "benefits" :
      {
        "ca" : "Trastorns vestibulars<ul><li>Les persones amb trastorns vestibulars necessiten controlar el moviment provocat per les interaccions. El moviment no essencial pot desencadenar reaccions de trastorn vestibular. Les reaccions del trastorn vestibular (oïda interna) inclouen distracció, marejos, mals de cap i nàusees.</li><li>Cita de Persona: 'Atura aquest moviment addicional! M'estàs marejant tant que no puc concentrar-me. Ara he d'apagar l'ordinador i anar a estirar'</li></ul>", 
        "es" : "Trastornos vestibulares<ul><li>Las personas con trastornos vestibulares necesitan controlar el movimiento provocado por las interacciones. El movimiento no esencial puede desencadenar reacciones de trastornos vestibulares. Las reacciones del trastorno vestibular (oído interno) incluyen distracción, mareos, dolores de cabeza y náuseas.</li><li>Cita de Persona: '¡Detén ese movimiento extra! Me estás mareando tanto que no puedo concentrarme. Ahora tengo que apagar mi computadora y acostarme'.</li></ul>", 
        "en" : "Vestibular Disorder<ul><li>People with vestibular disorders need control over movement triggered by interactions. Non-essential movement can trigger vestibular disorder reactions. Vestibular (inner ear) disorder reactions include distraction, dizziness, headaches and nausea.</li><li>Persona Quote: 'Stop that extra movement! You are making me so dizzy I cannot concentrate. Now I have to turn off my computer and go lie down.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },
    
    { // 2.4.1.
      "criteria" : 
      {
        "ca" : "2.4.1 Blocs de derivació", 
        "es" : "2.4.1 Bloques de derivación", 
        "en" : "2.4.1 Bypass Blocks",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#bypass-blocks", 
      "level" : "A",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Hi ha un mecanisme disponible per eludir blocs de contingut que es repeteixen a diverses pàgines web.", 
        "es" : "Hay un mecanismo disponible para eludir bloques de contenido que se repiten en varias páginas web.", 
        "en" : "A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest criteri d'èxit és permetre a les persones que naveguen de manera seqüencial pel contingut un accés més directe al contingut principal de la pàgina web. Les pàgines web i les aplicacions sovint tenen contingut que apareix en altres pàgines o pantalles. Alguns exemples de blocs de contingut repetits inclouen, entre d'altres, enllaços de navegació, gràfics d'encapçalaments i marcs publicitaris. Les petites seccions repetides, com ara paraules individuals, frases o enllaços individuals, no es consideren blocs als efectes d'aquesta disposició.</p><p>Això contrasta amb la capacitat d'un usuari vident d'ignorar el material repetit, ja sigui centrant-se al centre de la pantalla (on normalment apareix el contingut principal) o la capacitat d'un usuari del ratolí per seleccionar un enllaç amb un sol clic del ratolí en lloc de trobar tots els enllaços o control de formulari que va abans de l'element que volen.</p><p>No és la intenció d'aquest criteri d'èxit exigir als autors que proporcionin mètodes que siguin redundants amb la funcionalitat proporcionada per l'agent d'usuari. La majoria dels navegadors web proporcionen dreceres de teclat per moure l'atenció de l'usuari a la part superior de la pàgina, de manera que si es proporciona un conjunt d'enllaços de navegació a la part inferior d'una pàgina web, pot ser que no sigui necessari un enllaç 'omet'.</p><p>Encara que el criteri d'èxit no utilitza específicament el terme 'dins d'un conjunt de pàgines web', s'implica el concepte de pàgines pertanyents a un conjunt. No s'espera que un autor eviti qualsevol possible duplicació de contingut en dues pàgines que no estiguin d'alguna manera relacionades entre si; que no són 'pàgines web que comparteixen un propòsit comú i que són creades pel mateix autor, grup o organització' (la definició de conjunt de pàgines web).</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es permitir a las personas que navegan secuencialmente a través del contenido un acceso más directo al contenido principal de la página web. Las páginas web y las aplicaciones suelen tener contenido que aparece en otras páginas o pantallas. Los ejemplos de bloques repetidos de contenido incluyen, entre otros, enlaces de navegación, gráficos de encabezado y marcos publicitarios. Las pequeñas secciones repetidas, como palabras individuales, frases o enlaces únicos, no se consideran bloques a los efectos de esta disposición.</p><p>Esto contrasta con la capacidad de un usuario vidente de ignorar el material repetido, ya sea enfocándose en el centro de la pantalla (donde generalmente aparece el contenido principal) o la capacidad de un usuario de mouse para seleccionar un enlace con un solo clic del mouse en lugar de encontrar cada enlace o control de formulario que viene antes del elemento que desean.</p><p>No es la intención de este Criterio de Conformidad exigir a los autores que proporcionen métodos que sean redundantes para la funcionalidad proporcionada por el agente de usuario. La mayoría de los navegadores web proporcionan métodos abreviados de teclado para mover el foco del usuario a la parte superior de la página, por lo que si se proporciona un conjunto de enlaces de navegación en la parte inferior de una página web, proporcionar un enlace para 'saltar' puede ser innecesario.</p><p>Aunque el criterio de éxito no utiliza específicamente el término “dentro de un conjunto de páginas web”, el concepto de páginas pertenecientes a un conjunto está implícito. No se esperaría que un autor evite cualquier posible duplicación de contenido en dos páginas cualesquiera que no estén relacionadas entre sí de alguna manera; que no son “páginas web que comparten un propósito común y que son creadas por el mismo autor, grupo u organización” (la definición de conjunto de páginas web).</p>", 
        "en" : "<p>The intent of this Success Criterion is to allow people who navigate sequentially through content more direct access to the primary content of the Web page. Web pages and applications often have content that appears on other pages or screens. Examples of repeated blocks of content include but are not limited to navigation links, heading graphics, and advertising frames. Small repeated sections such as individual words, phrases or single links are not considered blocks for the purposes of this provision.</p><p></p><p></p><p></p>",
      },
      "benefits" :
      {
        "ca" : "Quan aquest criteri d'èxit no es compleix, pot ser difícil que les persones amb algunes discapacitats puguin arribar al contingut principal d'una pàgina web de manera ràpida i senzilla:<ul><li>Els usuaris de lectors de pantalla que visiten diverses pàgines del mateix lloc poden evitar haver d'escoltar tots els gràfics d'encapçalaments i desenes d'enllaços de navegació a cada pàgina abans que es parli el contingut principal.</li><li>Les persones que només utilitzen el teclat o una interfície de teclat poden arribar al contingut amb menys pulsacions de tecles. En cas contrari, és possible que hagin de fer desenes de pulsacions de tecla abans d'arribar a un enllaç a l'àrea de contingut principal. Això pot trigar molt de temps i pot causar dolor físic greu a alguns usuaris.</li><li>Les persones que utilitzen lupes de pantalla no han de cercar entre els mateixos encapçalaments o altres blocs d'informació per trobar on comença el contingut cada vegada que entren a una pàgina nova.</li><li>Les persones amb limitacions cognitives, així com les persones que utilitzen lectors de pantalla, poden beneficiar-se quan els enllaços s'agrupen en llistes</li></ul>", 
        "es" : "Cuando no se cumple este Criterio de Conformidad, puede resultar difícil para las personas con alguna discapacidad acceder al contenido principal de una página web de forma rápida y sencilla:<ul><li>Los usuarios de lectores de pantalla que visitan varias páginas en el mismo sitio pueden evitar tener que escuchar todos los gráficos de encabezado y docenas de enlaces de navegación en cada página antes de que se hable el contenido principal.</li><li>Las personas que usan solo el teclado o una interfaz de teclado pueden acceder al contenido con menos pulsaciones de teclas. De lo contrario, es posible que tengan que hacer docenas de pulsaciones de teclas antes de llegar a un enlace en el área de contenido principal. Esto puede tomar mucho tiempo y puede causar dolor físico severo a algunos usuarios.</li><li>Las personas que usan ampliadores de pantalla no tienen que buscar a través de los mismos encabezados u otros bloques de información para encontrar dónde comienza el contenido cada vez que ingresan a una nueva página.</li><li>Las personas con limitaciones cognitivas, así como las personas que usan lectores de pantalla, pueden beneficiarse cuando los enlaces se agrupan en listas.</li></ul>", 
        "en" : "When this Success Criterion is not satisfied, it may be difficult for people with some disabilities to reach the main content of a Web page quickly and easily:<ul><li>Screen reader users who visit several pages on the same site can avoid having to hear all heading graphics and dozens of navigation links on every page before the main content is spoken.</li><li>People who use only the keyboard or a keyboard interface can reach content with fewer keystrokes. Otherwise, they might have to make dozens of keystrokes before reaching a link in the main content area. This can take a long time and may cause severe physical pain for some users.</li><li>People who use screen magnifiers do not have to search through the same headings or other blocks of information to find where the content begins each time they enter a new page.</li><li>People with cognitive limitations as well as people who use screen readers may benefit when links are grouped into lists.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["structure"]
    },
    
    { // 2.4.2.
      "criteria" : 
      {
        "ca" : "2.4.2 Pàgina titulada", 
        "es" : "2.4.2 Página titulada", 
        "en" : "2.4.2 Page Titled",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#page-titled", 
      "level" : "A",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Les pàgines web tenen títols que descriuen el tema o el propòsit.", 
        "es" : "Las páginas web tienen títulos que describen el tema o el propósito.", 
        "en" : "Web pages have titles that describe topic or purpose.",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest Criteri d'èxit és ajudar els usuaris a trobar contingut i orientar-s'hi, assegurant-se que cada pàgina web té un títol descriptiu. Els títols identifiquen la ubicació actual sense que els usuaris llegeixin o interpretin el contingut de la pàgina. Quan els títols apareixen als mapes del lloc o a les llistes de resultats de la cerca, els usuaris poden identificar més ràpidament el contingut que necessiten. Els agents d'usuari posen a disposició de l'usuari el títol de la pàgina fàcilment per identificar-la. Per exemple, un agent d'usuari pot mostrar el títol de la pàgina a la barra de títol de la finestra o com el nom de la pestanya que conté la pàgina.</p><p>En els casos en què la pàgina és un document o una aplicació web, el nom del document o aplicació web seria suficient per descriure la finalitat de la pàgina. Tingueu en compte que no cal utilitzar el nom del document o de l'aplicació web; altres coses també poden descriure el propòsit o el tema de la pàgina.</p><p>Els criteris d'èxit 2.4.4 i 2.4.9 tracten la finalitat dels enllaços, molts dels quals són enllaços a pàgines web. Aquí també, el nom d'un document o aplicació web a què s'enllaça seria suficient per descriure la finalitat de l'enllaç. Que l'enllaç i el títol coincideixin, o siguin molt semblants, és una bona pràctica i proporciona continuïtat entre l'enllaç 'en què s'ha fet clic' i la pàgina web a la qual arriba l'usuari.</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es ayudar a los usuarios a encontrar contenido y orientarse dentro de él asegurándose de que cada página web tenga un título descriptivo. Los títulos identifican la ubicación actual sin requerir que los usuarios lean o interpreten el contenido de la página. Cuando los títulos aparecen en mapas de sitios o listas de resultados de búsqueda, los usuarios pueden identificar más rápidamente el contenido que necesitan. Los agentes de usuario hacen que el título de la página esté fácilmente disponible para el usuario para identificar la página. Por ejemplo, un agente de usuario puede mostrar el título de la página en la barra de título de la ventana o como el nombre de la pestaña que contiene la página.</p><p>En los casos en que la página sea un documento o una aplicación web, el nombre del documento o la aplicación web será suficiente para describir el propósito de la página. Tenga en cuenta que no es obligatorio utilizar el nombre del documento o aplicación web; otras cosas también pueden describir el propósito o el tema de la página.</p><p>Los Criterios de Conformidad 2.4.4 y 2.4.9 se ocupan del propósito de los enlaces, muchos de los cuales son enlaces a páginas web. Aquí también, el nombre de un documento o aplicación web a la que se vincula sería suficiente para describir el propósito del vínculo. Hacer que el enlace y el título coincidan, o que sean muy similares, es una buena práctica y proporciona continuidad entre el enlace en el que se hace clic y la página web a la que llega el usuario.</p>", 
        "en" : "<p>The intent of this Success Criterion is to help users find content and orient themselves within it by ensuring that each Web page has a descriptive title. Titles identify the current location without requiring users to read or interpret page content. When titles appear in site maps or lists of search results, users can more quickly identify the content they need. User agents make the title of the page easily available to the user for identifying the page. For instance, a user agent may display the page title in the window title bar or as the name of the tab containing the page.</p><p>In cases where the page is a document or a web application, the name of the document or web application would be sufficient to describe the purpose of the page. Note that it is not required to use the name of the document or web application; other things may also describe the purpose or the topic of the page.</p><p>Success Criteria 2.4.4 and 2.4.9 deal with the purpose of links, many of which are links to web pages. Here also, the name of a document or web application being linked to would be sufficient to describe the purpose of the link. Having the link and the title agree, or be very similar, is good practice and provides continuity between the link 'clicked on' and the web page that the user lands on.</p>",
      },
      "benefits" :
      {
        "ca" : "<ul><li>Aquest criteri beneficia a tots els usuaris en permetre als usuaris identificar de manera ràpida i senzilla si la informació continguda a la pàgina web és rellevant per a les seves necessitats.</li><li>Les persones amb discapacitat visual es beneficiaran de poder diferenciar contingut quan hi hagi diverses pàgines web obertes.</li><li>Les persones amb discapacitat cognitiva, memòria a curt termini limitada i discapacitats lectores també es beneficien de la capacitat d'identificar contingut pel seu títol.</li><li>Aquest criteri també beneficia les persones amb problemes de mobilitat greus el mode de funcionament de les quals es basa en l'àudio quan es navega entre pàgines web.</li></ul>", 
        "es" : "<ul><li>Este criterio beneficia a todos los usuarios al permitirles identificar rápida y fácilmente si la información contenida en la página Web es relevante para sus necesidades.</li><li>Las personas con discapacidades visuales se beneficiarán al poder diferenciar el contenido cuando se abren varias páginas web.</li><li>Las personas con discapacidades cognitivas, memoria a corto plazo limitada y problemas de lectura también se benefician de la capacidad de identificar el contenido por su título.</li><li>Este criterio también beneficia a las personas con problemas de movilidad severos cuyo modo de operación depende del audio cuando navegan entre páginas web.</li></ul>", 
        "en" : "<ul><li>This criterion benefits all users in allowing users to quickly and easily identify whether the information contained in the Web page is relevant to their needs.</li><li>People with visual disabilities will benefit from being able to differentiate content when multiple Web pages are open.</li><li>People with cognitive disabilities, limited short-term memory and reading disabilities also benefit from the ability to identify content by its title.</li><li>This criterion also benefits people with severe mobility impairments whose mode of operation relies on audio when navigating between Web pages.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["structure"]
    },
    
    { // 2.4.3.
      "criteria" : 
      {
        "ca" : "2.4.3 Ordre de Focus", 
        "es" : "2.4.3 Orden de Focus", 
        "en" : "2.4.3 Focus Order",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#focus-order", 
      "level" : "A",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Si podeu navegar seqüencialment per una pàgina web i les seqüències de navegació afecten el significat o l'operació, els components enfocables reben l'enfocament en un ordre que preserva el significat i l'operabilitat.", 
        "es" : "Si se puede navegar secuencialmente por una página web y las secuencias de navegación afectan el significado o la operación, los componentes enfocables reciben el enfoque en un orden que preserva el significado y la operabilidad.", 
        "en" : "If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest Criteri d'èxit és assegurar-se que quan els usuaris naveguen seqüencialment pel contingut, troben informació en un ordre coherent amb el significat del contingut i que es pot operar des del teclat. Això redueix la confusió permetent als usuaris formar un model mental coherent del contingut. Pot haver-hi diferents ordres que reflecteixin relacions lògiques en el contingut. Per exemple, moure's pels components d'una taula una fila a la vegada o una columna alhora reflecteixen les relacions lògiques del contingut. Qualsevol ordre pot complir aquest Criteri d'èxit.</p><p>La manera com es determina l'ordre de navegació seqüencial al contingut web es defineix per la tecnologia del contingut. Per exemple, HTML simple defineix la navegació seqüencial mitjançant la noció d'ordre de tabulació. L'HTML dinàmic pot modificar la seqüència de navegació mitjançant scripts juntament amb l'addició d'un atribut tabindex per permetre el focus en elements addicionals. Si no s'utilitzen atributs de scripting o tabulació, l'ordre de navegació és l'ordre en què els components apareixen al flux de contingut. (Vegeu l'especificació HTML 4.01, secció 17.11, 'Donar focus a un element').</p><p>Un exemple de navegació amb teclat que no és la navegació seqüencial abordada per aquest criteri d'èxit és l'ús de la navegació amb les tecles de fletxa per recórrer un component d'arbre. L'usuari pot utilitzar les tecles de fletxa amunt i avall per moure's d'un node d'arbre a un altre. Si premeu la tecla de fletxa dreta es pot expandir un node, i després, amb la tecla de fletxa avall, es mourà als nodes que s'han ampliat. Aquesta seqüència de navegació segueix la seqüència esperada per a un control d'arbre: a mesura que s'amplien o es redueixen elements addicionals, s'afegeixen o s'eliminen de la seqüència de navegació.</p><p>És possible que l'ordre de focus no sigui idèntic a l'ordre de lectura determinat programadament (vegeu el Criteri d'èxit 1.3.2) sempre que l'usuari encara pugui comprendre i operar la pàgina web. Com que hi pot haver diversos ordres de lectura lògics possibles per al contingut, l'ordre del focus pot coincidir amb qualsevol d'ells. Tanmateix, quan l'ordre d'una presentació en particular difereix de l'ordre de lectura determinat programadament, els usuaris d'una d'aquestes presentacions poden tenir dificultats per entendre o utilitzar la pàgina web. Els autors haurien de considerar acuradament tots aquests usuaris mentre dissenyen les seves pàgines web.</p><p>Per exemple, un usuari de lector de pantalla interactua amb l'ordre de lectura determinat programadament, mentre que un usuari de teclat visual interacciona amb la presentació visual de la pàgina web. S'ha de tenir cura perquè l'ordre d'enfocament tingui sentit per a aquests dos conjunts d'usuaris i no sembli que cap d'ells salti aleatòriament.</p><p>Per a més claredat:</p><ol><li>Els components enfocables han de rebre el focus en un ordre que preservi el significat i l'operabilitat només quan les seqüències de navegació afecten el significat i l'operabilitat.</li><li>En aquells casos en què es requereixi, pot haver-hi més d'una comanda que preservi el sentit i l'operabilitat.</li><li>Si hi ha més d'un ordre que preservi el significat i l'operabilitat, només cal proporcionar-ne un.</li></ol>", 
        "es" : "<p>La intención de este Criterio de Conformidad es garantizar que cuando los usuarios naveguen secuencialmente a través del contenido, encuentren información en un orden que sea coherente con el significado del contenido y que se pueda operar desde el teclado. Esto reduce la confusión al permitir que los usuarios formen un modelo mental consistente del contenido. Puede haber diferentes órdenes que reflejen relaciones lógicas en el contenido. Por ejemplo, moverse a través de los componentes de una tabla una fila a la vez o una columna a la vez reflejan las relaciones lógicas en el contenido. Cualquiera de las órdenes puede satisfacer este Criterio de Conformidad.</p><p>La forma en que se determina el orden de navegación secuencial en el contenido web está definida por la tecnología del contenido. Por ejemplo, HTML simple define la navegación secuencial a través de la noción de orden de tabulación. El HTML dinámico puede modificar la secuencia de navegación utilizando secuencias de comandos junto con la adición de un atributo tabindex para permitir el enfoque en elementos adicionales. Si no se utilizan atributos de scripting o tabindex, el orden de navegación es el orden en que aparecen los componentes en el flujo de contenido. (Consulte la especificación HTML 4.01, sección 17.11, 'Dar foco a un elemento').</p><p>Un ejemplo de navegación con teclado que no es la navegación secuencial abordada por este Criterio de Conformidad es usar la navegación con teclas de flecha para atravesar un componente de árbol. El usuario puede usar las teclas de flecha hacia arriba y hacia abajo para moverse de un nodo de árbol a otro. Presionar la tecla de flecha hacia la derecha puede expandir un nodo, luego usar la tecla de flecha hacia abajo, se moverá a los nodos recién expandidos. Esta secuencia de navegación sigue la secuencia esperada para un control de árbol: a medida que se expanden o contraen elementos adicionales, se agregan o eliminan de la secuencia de navegación.</p><p>El orden de enfoque puede no ser idéntico al orden de lectura determinado mediante programación (consulte el Criterio de Conformidad 1.3.2), siempre que el usuario aún pueda comprender y operar la página web. Dado que puede haber varios órdenes lógicos de lectura posibles para el contenido, el orden de enfoque puede coincidir con cualquiera de ellos. Sin embargo, cuando el orden de una presentación en particular difiere del orden de lectura determinado mediante programación, los usuarios de una de estas presentaciones pueden tener dificultades para comprender u operar la página web. Los autores deben considerar cuidadosamente a todos estos usuarios al diseñar sus páginas Web.</p><p>Por ejemplo, un usuario de un lector de pantalla interactúa con el orden de lectura determinado mediante programación, mientras que un usuario vidente del teclado interactúa con la presentación visual de la página web. Se debe tener cuidado para que el orden de enfoque tenga sentido para ambos conjuntos de usuarios y no parezca que ninguno de ellos salta al azar.</p><p>Para mayor claridad:</p><ol><li>Los componentes enfocables deben recibir el enfoque en un orden que conserve el significado y la operabilidad solo cuando las secuencias de navegación afecten el significado y la operabilidad.</li><li>En aquellos casos en que se requiera, podrá haber más de una orden que preservará el sentido y la operatividad.</li><li>Si hay más de una orden que conserva sentido y operatividad, solo se necesita proporcionar una de ellas.</li></ol>", 
        "en" : "<p>The intent of this Success Criterion is to ensure that when users navigate sequentially through content, they encounter information in an order that is consistent with the meaning of the content and can be operated from the keyboard. This reduces confusion by letting users form a consistent mental model of the content. There may be different orders that reflect logical relationships in the content. For example, moving through components in a table one row at a time or one column at a time both reflect the logical relationships in the content. Either order may satisfy this Success Criterion.</p><p>The way that sequential navigation order is determined in Web content is defined by the technology of the content. For example, simple HTML defines sequential navigation via the notion of tabbing order. Dynamic HTML may modify the navigation sequence using scripting along with the addition of a tabindex attribute to allow focus to additional elements. If no scripting or tabindex attributes are used, the navigation order is the order that components appear in the content stream. (See HTML 4.01 Specification, section 17.11, 'Giving focus to an element').</p><p>An example of keyboard navigation that is not the sequential navigation addressed by this Success Criterion is using arrow key navigation to traverse a tree component. The user can use the up and down arrow keys to move from tree node to tree node. Pressing the right arrow key may expand a node, then using the down arrow key, will move into the newly expanded nodes. This navigation sequence follows the expected sequence for a tree control - as additional items get expanded or collapsed, they are added or removed from the navigation sequence.</p><p>The focus order may not be identical to the programmatically determined reading order (see Success Criterion 1.3.2) as long as the user can still understand and operate the Web page. Since there may be several possible logical reading orders for the content, the focus order may match any of them. However, when the order of a particular presentation differs from the programmatically determined reading order, users of one of these presentations may find it difficult to understand or operate the Web page. Authors should carefully consider all these users as they design their Web pages.</p><p>For example, a screen reader user interacts with the programmatically determined reading order, while a sighted keyboard user interacts with the visual presentation of the Web page. Care should be taken so that the focus order makes sense to both of these sets of users and does not appear to either of them to jump around randomly.</p><p>For clarity:</p><ol><li>Focusable components need to receive focus in an order that preserves meaning and operability only when navigation sequences affect meaning and operability.</li><li>In those cases where it is required, there may be more than one order that will preserve meaning and operability.</li><li>If there is more than one order that preserves meaning and operability, only one of them needs to be provided.</li></ol>",
      },
      "benefits" :
      {
        "ca" : "Aquestes tècniques beneficien els usuaris de teclat que naveguen per documents de manera seqüencial i esperen que l'ordre de focus sigui coherent amb l'ordre de lectura seqüencial.<ul><li>Les persones amb discapacitat de mobilitat que han de dependre de l'accés al teclat per operar una pàgina es beneficien d'un ordre d'enfocament lògic i utilitzable.</li><li>Les persones amb discapacitat que dificulten la lectura poden desorientar-se quan les tabulacions es concentren en algun lloc inesperat. Es beneficien d'un ordre d'enfocament lògic.</li><li>Les persones amb discapacitat visual poden desorientar-se quan les pestanyes es concentren en algun lloc inesperat o quan no poden trobar fàcilment el contingut que envolta un element interactiu.</li><li>És possible que només una petita part de la pàgina sigui visible per a una persona que faci servir una lupa de pantalla amb un alt nivell d'ampliació. Aquest usuari pot interpretar un camp en un context incorrecte si l'ordre de focus no és lògic.</li></ul>", 
        "es" : "Estas técnicas benefician a los usuarios de teclados que navegan por los documentos secuencialmente y esperan que el orden de enfoque sea coherente con el orden de lectura secuencial.<ul><li>Las personas con problemas de movilidad que deben confiar en el acceso al teclado para operar una página se benefician de un orden de enfoque lógico y utilizable.</li><li>Las personas con discapacidades que dificultan la lectura pueden desorientarse cuando las tabulaciones se enfocan en un lugar inesperado. Se benefician de un orden de enfoque lógico.</li><li>Las personas con discapacidades visuales pueden desorientarse cuando el tabulador se enfoca en un lugar inesperado o cuando no pueden encontrar fácilmente el contenido que rodea un elemento interactivo.</li><li>Solo una pequeña parte de la página puede ser visible para una persona que usa una lupa de pantalla con un alto nivel de aumento. Dicho usuario puede interpretar un campo en el contexto incorrecto si el orden de enfoque no es lógico.</li></ul>", 
        "en" : "<ul>People with mobility impairments who must rely on keyboard access for operating a page benefit from a logical, usable focus order.<li></li><li>People with disabilities that make reading difficult can become disoriented when tabbing takes focus someplace unexpected. They benefit from a logical focus order.</li><li>People with visual impairments can become disoriented when tabbing takes focus someplace unexpected or when they cannot easily find the content surrounding an interactive element.</li><li>Only a small portion of the page may be visible to an individual using a screen magnifier at a high level of magnification. Such a user may interpret a field in the wrong context if the focus order is not logical.</li></ul>",
        "en" : "<ul><li></li><li>People with disabilities that make reading difficult can become disoriented when tabbing takes focus someplace unexpected. They benefit from a logical focus order.</li><li>People with visual impairments can become disoriented when tabbing takes focus someplace unexpected or when they cannot easily find the content surrounding an interactive element.</li><li>Only a small portion of the page may be visible to an individual using a screen magnifier at a high level of magnification. Such a user may interpret a field in the wrong context if the focus order is not logical.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["structure"]
    },
    
    { // 2.4.4.
      "criteria" : 
      {
        "ca" : "2.4.4 Propòsit de lenllaç (en context)", 
        "es" : "2.4.4 Propósito del enlace (en contexto)", 
        "en" : "2.4.4 Link Purpose (In Context)",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#link-purpose-in-context", 
      "level" : "A",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "El propòsit de cada enllaç es pot determinar a partir del text de lenllaç només o del text de lenllaç juntament amb el seu context denllaç determinat mitjançant programació, excepte quan el propòsit de lenllaç sigui ambigu per als usuaris en general.", 
        "es" : "El propósito de cada enlace se puede determinar a partir del texto del enlace solo o del texto del enlace junto con su contexto de enlace determinado mediante programación, excepto cuando el propósito del enlace sea ambiguo para los usuarios en general.", 
        "en" : "The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general.",
      },
      "intent" : 
      {
        "ca" : "", 
        "es" : "", 
        "en" : "The intent of this Success Criterion is to help users understand the purpose of each link so they can decide whether they want to follow the link. Whenever possible, provide link text that identifies the purpose of the link without needing additional context. Assistive technology has the ability to provide users with a list of links that are on the Web page. Link text that is as meaningful as possible will aid users who want to choose from this list of links. Meaningful link text also helps those who wish to tab from link to link. Meaningful links help users choose which links to follow without requiring complicated strategies to understand the page.",
      },
      "benefits" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "A link contains text that gives a description of the information at that URI.#A link is preceded by a text description of the information at that URI.#Both an icon and text are included in the same link.#A list of book titles.#News article summaries.",
      },
      "examples" : "",
      "techniques" : "",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["content", "link"]
    },
    
    { // 2.4.5.
      "criteria" : 
      {
        "ca" : "2.4.5 Múltiples formes", 
        "es" : "2.4.5 Múltiples formas", 
        "en" : "2.4.5 Multiple Ways",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#multiple-ways", 
      "level" : "AA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Hi ha més duna manera disponible per ubicar una pàgina web dins un conjunt de pàgines web, excepte quan la pàgina web és el resultat o un pas en un procés.", 
        "es" : "Hay más de una manera disponible para ubicar una página web dentro de un conjunto de páginas web, excepto cuando la página web es el resultado o un paso en un proceso.", 
        "en" : "More than one way is available to locate a Web page within a set of Web pages except where the Web Page is the result of, or a step in, a process.",
      },
      "intent" : 
      {
        "ca" : "", 
        "es" : "", 
        "en" : "The intent of this Success Criterion is to make it possible for users to locate content in a manner that best meets their needs. Users may find one technique easier or more comprehensible to use than another.#Even small sites should provide users some means of orientation. For a three or four page site, with all pages linked from the home page, it may be sufficient simply to provide links from and to the home page where the links on the home page can also serve as a site map.",
      },
      "benefits" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "Providing an opportunity to navigate sites in more than one manner can help people find information faster. Users with visual impairments may find it easier to navigate to the correct part of the site by using a search, rather than scrolling through a large navigation bar using a screen magnifier or screen reader. A person with cognitive disabilities may prefer a table of contents or site map that provides an overview of the site rather than reading and traversing through several Web pages. Some users may prefer to explore the site in a sequential manner, moving from Web page to Web page in order to best understand the concepts and layout.#Individuals with cognitive limitations may find it easier to use search features than to use a hierarchical navigation scheme that is difficult to understand.",
      },
      "examples" : "",
      "techniques" : "",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["content"]
    },
    
    { // 2.4.6.
      "criteria" : 
      {
        "ca" : "2.4.6 Encapçalaments i Etiquetes", 
        "es" : "2.4.6 Encabezados y Etiquetas", 
        "en" : "2.4.6 Headings and Labels",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#headings-and-labels", 
      "level" : "AA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Les capçaleres i les etiquetes descriuen el tema o el propòsit.", 
        "es" : "Los encabezados y las etiquetas describen el tema o el propósito.", 
        "en" : "Headings and labels describe topic or purpose.",
      },
      "intent" : 
      {
        "ca" : "", 
        "es" : "", 
        "en" : "The intent of this Success Criterion is to help users understand what information is contained in Web pages and how that information is organized. When headings are clear and descriptive, users can find the information they seek more easily, and they can understand the relationships between different parts of the content more easily. Descriptive labels help users identify specific components within the content.#Labels and headings do not need to be lengthy. A word, or even a single character, may suffice if it provides an appropriate cue to finding and navigating content.",
      },
      "benefits" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "Descriptive headings are especially helpful for users who have disabilities that make reading slow and for people with limited short-term memory. These people benefit when section titles make it possible to predict what each section contains.#Form input controls with labels that clearly describe the content that is expected to be entered helps users know how to successfully complete the form.#When headings and labels are also correctly marked up and identified in accordance with 1.3.1: Info and Relationships, this Success Criterion helps people who use screen readers by ensuring that labels and headings are meaningful when read out of context, for example, in an automatically generated list of headings/table of contents, or when jumping from heading to heading within a page.",
      },
      "examples" : "",
      "techniques" : "",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["custom-controls", "forms-and-UI"]
    },
    
    { // 2.4.7.
      "criteria" : 
      {
        "ca" : "2.4.7 Focus visible", 
        "es" : "2.4.7 Focus visible", 
        "en" : "2.4.7 Focus Visible",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#focus-visible", 
      "level" : "AA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Qualsevol interfície d'usuari operable per teclat té un mode d'operació on és visible l'indicador d'enfocament del teclat.", 
        "es" : "Cualquier interfaz de usuario operable por teclado tiene un modo de operación donde el indicador de enfoque del teclado es visible.", 
        "en" : "Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.",
      },
      "intent" : 
      {
        "ca" : "", 
        "es" : "", 
        "en" : "The intent of this Success Criterion is to help users understand what information is contained in Web pages and how that information is organized. When headings are clear and descriptive, users can find the information they seek more easily, and they can understand the relationships between different parts of the content more easily. Descriptive labels help users identify specific components within the content.#Labels and headings do not need to be lengthy. A word, or even a single character, may suffice if it provides an appropriate cue to finding and navigating content.",
      },
      "benefits" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "Descriptive headings are especially helpful for users who have disabilities that make reading slow and for people with limited short-term memory. These people benefit when section titles make it possible to predict what each section contains.#Form input controls with labels that clearly describe the content that is expected to be entered helps users know how to successfully complete the form.#When headings and labels are also correctly marked up and identified in accordance with 1.3.1: Info and Relationships, this Success Criterion helps people who use screen readers by ensuring that labels and headings are meaningful when read out of context, for example, in an automatically generated list of headings/table of contents, or when jumping from heading to heading within a page.",
      },
      "examples" : "",
      "techniques" : "",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["custom-controls", "forms-and-UI"]
    },
    
    { // 2.4.8.
      "criteria" : 
      {
        "ca" : "2.4.8 Ubicació", 
        "es" : "2.4.8 Ubicación", 
        "en" : "2.4.8 Location",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#location", 
      "level" : "AAA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "La informació sobre la ubicació de lusuari dins un conjunt de pàgines web està disponible.", 
        "es" : "La información sobre la ubicación del usuario dentro de un conjunto de páginas web está disponible.", 
        "en" : "Information about the user's location within a set of Web pages is available.",
      },
      "intent" : 
      {
        "ca" : "", 
        "es" : "", 
        "en" : "The intent of this Success Criterion is to provide a way for the user to orient herself within a set of Web pages, a Web site, or a Web application and find related information.",
      },
      "benefits" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "This Success Criterion is helpful for people with a short attention span who may become confused when following a long series of navigation steps to a Web page. It is also helpful when a user follows a link directly to a page deep within a set of Web pages and needs to navigate that Web site to understand the content of that page or to find more related information.",
      },
      "examples" : "",
      "techniques" : "",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },
    
    { // 2.4.9.
      "criteria" : 
      {
        "ca" : "2.4.9 Propòsit de l'enllaç (només enllaç)", 
        "es" : "2.4.9 Propósito del enlace (solo enlace)", 
        "en" : "2.4.9 Link Purpose (Link Only)",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#link-purpose-link-only", 
      "level" : "AAA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Hi ha un mecanisme disponible per permetre que el propòsit de cada enllaç s'identifiqui només a partir del text de l'enllaç, excepte quan el propòsit de l'enllaç sigui ambigu per als usuaris en general.", 
        "es" : "Hay un mecanismo disponible para permitir que el propósito de cada enlace se identifique solo a partir del texto del enlace, excepto cuando el propósito del enlace sea ambiguo para los usuarios en general.", 
        "en" : "A mechanism is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be ambiguous to users in general.",
      },
      "intent" : 
      {
        "ca" : "", 
        "es" : "", 
        "en" : "The intent of this Success Criterion is to help users understand the purpose of each link in the content, so they can decide whether they want to follow it. Best practice is that links with the same destination would have the same descriptions, but links with different purposes and destinations would have different descriptions (see also Success Criterion 3.2.4 which calls for consistency in identifying components that have the same functionality). Because the purpose of a link can be identified from its link text, links can be understood when they are out of context, such as when the user agent provides a list of all the links on a page.",
      },
      "benefits" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "This Success Criterion helps people with motion impairment by letting them skip Web pages that they are not interested in, avoiding the keystrokes needed to visit the referenced content and then return to the current content.#People with cognitive limitations will not become disoriented by extra navigation to and from content they are not interested in.#People with visual disabilities will benefit from not losing their place in the content when they return to the original page. The screen reader's list of links is more useful for finding information because the target of the links are described.",
      },
      "examples" : "",
      "techniques" : "",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },
    
    { // 2.4.10.
      "criteria" : 
      {
        "ca" : "2.4.10 Títols de secció", 
        "es" : "2.4.10 Títulos de sección", 
        "en" : "2.4.10 Section Headings",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#section-headings", 
      "level" : "AAA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Les capçaleres de les seccions s'utilitzen per organitzar el contingut.", 
        "es" : "Los encabezados de las secciones se utilizan para organizar el contenido.", 
        "en" : "Section headings are used to organize the content.",
      },
      "intent" : 
      {
        "ca" : "", 
        "es" : "", 
        "en" : "The intent of this Success Criterion is to provide headings for sections of a Web page, when the page is organized into sections. For instance, long documents are often divided into a variety of chapters, chapters have subtopics and subtopics are divided into various sections, sections into paragraphs, etc. When such sections exist, they need to have headings that introduce them. This clearly indicates the organization of the content, facilitates navigation within the content, and provides mental 'handles' that aid in comprehension of the content. Other page elements may complement headings to improve presentation (e.g., horizontal rules and boxes), but visual presentation is not sufficient to identify document sections.",
      },
      "benefits" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "People who are blind will know when they have moved from one section of a Web page to another and will know the purpose of each section.#People with some learning disabilities will be able to use the headings to understand the overall organization of the page content more easily.#People who navigate content by keyboard will be able to jump the focus from heading to heading, enabling them to find quickly content of interest.#In pages where content in part of the page updates, headings can be used to quickly access updated content.",
      },
      "examples" : "",
      "techniques" : "",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },

    { // 2.4.11.
      "criteria" : 
      {
        "ca" : "2.4.11 Aspecte de Focus (mínim)", 
        "es" : "2.4.11 Aspecto de Focus (mínimo)", 
        "en" : "2.4.11 Focus Appearance (Minimum)",
      }, 
      "link" : "https://www.w3.org/TR/WCAG22/#focus-appearance-minimum", 
      "level" : "AA",
      "version" : "2.2", 
      "goal" : 
      {
        "ca" : "Quan els components de la interfície d'usuari reben el focus del teclat, es compleixen tots els aspectes següents:<ul><li>Àrea de contrast: hi ha una àrea de l'indicador d'enfocament que té una relació de contrast de com a mínim 3:1 entre els colors en els estats Focused i Unfocused.</li><li>Àrea mínima: L'àrea de contrast és com a mínim tan gran com:<ul><li>Contorn: l'àrea d'un perímetre de 1 píxel CSS de gruix del component Unfocused, o</li><li>Forma: l'àrea d'una línia de 4 píxels CSS de gruix al costat més curt d'un quadre delimitador mínim del component desenfocat, i no més prima que 2 píxels CSS.</li></ul></li><li>Contrast adjacent: l'àrea de contrast també té una relació de contrast de com a mínim 3:1 davant dels colors adjacents al component enfocat, o l'àrea de contrast té un gruix de com a mínim 2 píxels CSS.</li><li>No és completament ocult: l'element que té el focus no està completament ocult pel contingut creat per l'autor.</li></ul>", 
        "es" : "Cuando los componentes de la interfaz de usuario reciben el foco del teclado, todo lo siguiente es verdadero:<ul><li>Área de contraste: hay un área del indicador de enfoque que tiene una relación de contraste de al menos 3:1 entre los colores en los estados enfocado y desenfocado.</li><li>Área mínima: El área de contraste es al menos tan grande como:<ul><li>Contorno: el área de un perímetro de 1 píxel CSS de espesor del componente desenfocado, o</li><li>Forma: el área de una línea de 4 píxeles CSS de grosor a lo largo del lado más corto de un cuadro delimitador mínimo del componente desenfocado, y no más delgada que 2 píxeles CSS.</li></ul></li><li>Contraste adyacente: el área de contraste también tiene una relación de contraste de al menos 3:1 frente a los colores adyacentes en el componente enfocado, o el área de contraste tiene un grosor de al menos 2 píxeles CSS.</li><li>No completamente oculto: el elemento que tiene el foco no está completamente oculto por el contenido creado por el autor.</li></ul>", 
        "en" : "When user interface components receive keyboard focus, all of the following are true:<ul><li>Contrasting area: There is an area of the focus indicator that has a contrast ratio of at least 3:1 between the colors in the focused and unfocused states.</li><li>Minimum area: The contrasting area is at least as large as:<ul><li>Outline: the area of a 1 CSS pixel thick perimeter of the unfocused component, or</li><li>Shape: the area of a 4 CSS pixel thick line along the shortest side of a minimum bounding box of the unfocused component, and no thinner than 2 CSS pixels.</li></ul></li><li>Adjacent contrast: The contrasting area also has a contrast ratio of least 3:1 against adjacent colors in the focused component, or the contrasting area has a thickness of at least 2 CSS pixels.</li><li>Not fully obscured: The item with focus is not entirely hidden by author-created content.</li></ul>",
      },
      "intent" : 
      {
        "ca" : "<p>L'objectiu d'aquest criteri d'èxit és garantir que un indicador de focus del teclat sigui clarament visible i perceptible. Aquest criteri està estretament relacionat amb 2.4.7 Focus Visible i 1.4.11 Contrast sense text. Quan el focus visible només requereix un indicador d'enfocament visible, 2.4.11 defineix un nivell mínim de visibilitat. Quan el contrast sense text requereix que un component tingui un contrast adequat contra el fons en cadascun dels seus estats, 2.4.11 requereix un contrast suficient entre els estats enfocat i no enfocat.</p><p>Per a persones vidents amb discapacitat de mobilitat que utilitzen un dispositiu semblant al teclat (p. ex., un interruptor, entrada de veu), conèixer el punt d'enfocament actual és molt important. L'enfocament visible també ha de satisfer les necessitats dels usuaris amb poca visió, que també poden ser usuaris només de teclat.</p><p>Un indicador d'enfocament de teclat pot adoptar diferents formes; aquest criteri d'èxit estableix un requisit perquè es pugui distingir clarament. Per exemple, l'ús d'un contorn gruixut que contrasti amb el fons que hi ha darrere del component superarà aquest criteri.</p><p>El requisit de mida mínima per a cada indicador de focus que es mostra a dalt són:</p><ul><li>A 1 píxel CSS contorn fosc fora del botó, separat del botó per 1 píxel;</li><li>Un contorn clar de 2 píxels de gruix dins del botó;</li><li>Un contorn fosc de 2 píxels de gruix al voltant el botó.</li></ul><p>Els indicadors de focus predeterminats en alguns navegadors poden ser difícils de veure, com ara un contorn de punts d'1 px o un indicador blau que passa a estar sobre un fons blau. En general, és millor definir un estil d'enfocament del teclat que compleixi aquest criteri o provar els estils de focus als navegadors en què es confia per a la seva conformitat.</p>", 
        "es" : "<p>El propósito de este Criterio de Conformidad es garantizar que el indicador de enfoque del teclado sea claramente visible y perceptible. Este criterio está estrechamente relacionado con 2.4.7 Foco visible y 1.4.11 Contraste sin texto. Donde Foco Visible simplemente requiere un indicador de foco visible, 2.4.11 define un nivel mínimo de visibilidad. Donde Non-text Contrast requiere que un componente tenga un contraste adecuado contra el fondo en cada uno de sus estados, 2.4.11 requiere suficiente contraste entre los estados enfocado y no enfocado.</p><p>Para personas videntes con problemas de movilidad que usan un dispositivo similar a un teclado (p. ej., un interruptor, entrada de voz), conocer el punto de enfoque actual es muy importante. El enfoque visible también debe satisfacer las necesidades de los usuarios con baja visión, que también pueden ser usuarios de solo teclado.</p><p>Un indicador de enfoque del teclado puede tomar diferentes formas; este Criterio de Conformidad establece un requisito para hacerlo claramente distinguible. Por ejemplo, el uso de un contorno grueso que contraste con el fondo detrás del componente pasaría este criterio.</p><p>El requisito de tamaño mínimo para cada indicador de enfoque que se muestra arriba es:</p><ul><li>A 1 contorno oscuro de píxel CSS fuera del botón, separado del botón por 1 píxel;</li><li>Un contorno claro de 2 píxeles de grosor dentro del botón;</li><li>Un contorno oscuro de 2 píxeles de grosor alrededor el botón.</li></ul><p>Los indicadores de enfoque predeterminados en algunos navegadores pueden ser difíciles de ver, como un contorno punteado de 1 px o un indicador azul que resulta estar sobre un fondo azul. Por lo general, es mejor definir un estilo de enfoque de teclado que cumpla con este criterio o probar los estilos de enfoque en los navegadores en los que se confía para la conformidad.</p>", 
        "en" : "<p>The purpose of this Success Criterion is to ensure a keyboard focus indicator is clearly visible and discernible. This criterion is closely related to 2.4.7 Focus Visible and 1.4.11 Non-text Contrast. Where Focus Visible merely requires a visible focus indicator, 2.4.11 defines a minimum level of visibility. Where Non-text Contrast requires a component to have adequate contrast against the background in each of its states, 2.4.11 requires sufficient contrast between the focused and unfocused states.</p><p>For sighted people with mobility impairments who use a keyboard-like device (e.g., a switch, voice input), knowing the current point of focus is very important. Visible focus must also meet the needs of low-vision users, who may also be keyboard-only users.</p><p>A keyboard focus indicator can take different forms; this Success Criterion sets a requirement to make it clearly distinguishable. For example, using a thick outline that contrasts with the background behind the component would pass this criterion.</p><p>The minimum size requirement for each focus indicator shown above are:</p><ul><li>A 1 CSS pixel dark outline outside the button, separated from the button by 1 pixel;</li><li>A 2-pixel thick light outline inside the button;</li><li>A 2-pixel thick dark outline around the button.</li></ul><p>The default focus indicators in some browsers can be difficult to see, such as a 1px dotted outline, or a blue indicator which happens to be on a blue background. It is generally best to either define a keyboard focus style which meets this criterion, or test the focus styles across the browsers that are relied upon for conformance.</p>",
      },
      "benefits" :
      {
        "ca" : "<ul><li>Aquest criteri d'èxit ajuda qualsevol persona que confia en el teclat per fer servir la pàgina, ja que els permet determinar visualment el component en què interactuaran les operacions del teclat en qualsevol moment.</li><li>Persones amb atenció. les limitacions, les limitacions de la memòria a curt termini o les limitacions en els processos executius es beneficien de poder descobrir on es troba el focus.</li></ul>", 
        "es" : "<ul><li>Este Criterio de Conformidad ayuda a cualquiera que utilice el teclado para operar la página, permitiéndole determinar visualmente el componente en el que las operaciones del teclado interactuarán en cualquier momento.</li><li>Personas con atención Las limitaciones, las limitaciones de la memoria a corto plazo o las limitaciones en los procesos ejecutivos se benefician al poder descubrir dónde se encuentra el foco.</li></ul>", 
        "en" : "<ul><li>This Success Criterion helps anyone who relies on the keyboard to operate the page, by letting them visually determine the component on which keyboard operations will interact at any point in time.</li><li>People with attention limitations, short term memory limitations, or limitations in executive processes benefit by being able to discover where the focus is located.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-minimum.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-minimum.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },
    
    { // 2.4.12.
      "criteria" : 
      {
        "ca" : "2.4.12 Aspecte de Focus (millorat)", 
        "es" : "2.4.12 Aspecto de Focus (mejorado)", 
        "en" : "2.4.12 Focus Appearance (Enhanced)",
      }, 
      "link" : "https://www.w3.org/TR/WCAG22/#focus-appearance-enhanced", 
      "level" : "AAA",
      "version" : "2.2", 
      "goal" : 
      {
        "ca" : "Quan els components de la interfície dusuari tenen el focus del teclat, tot el següent és cert:<ul><li>Àrea de contrast: hi ha una àrea de l'indicador d'enfocament que té una relació de contrast d'almenys 4,5:1 entre els colors als estats enfocats i desenfocats.</li><li>Àrea mínima: l'àrea de contrast és com a mínim el doble de l'àrea d'un perímetre de 1 píxel CSS del component desenfocat;</li><li>No enfosquit: el contingut creat per l'autor no amaga cap part de l'indicador d'enfocament.</li></ul>", 
        "es" : "Cuando los componentes de la interfaz de usuario tienen el foco del teclado, todo lo siguiente es cierto:<ul><li>Área de contraste: hay un área del indicador de enfoque que tiene una relación de contraste de al menos 4,5:1 entre los colores en los estados enfocado y desenfocado.</li><li>Área mínima: el área de contraste es al menos el doble del área de un perímetro de 1 píxel CSS del componente desenfocado;</li><li>No oscurecido: el contenido creado por el autor no oculta ninguna parte del indicador de enfoque.</li></ul>", 
        "en" : "When user interface components have keyboard focus, all of the following are true:<ul><li>Contrasting area: There is an area of the focus indicator that has a contrast ratio of at least 4.5:1 between the colors in the focused and unfocused states.</li><li>Minimum area: The contrasting area is at least double the area of a 1 CSS pixel perimeter of the unfocused component;</li><li>Not obscured: No part of the focus indicator is hidden by author-created content.</li></ul>",
      },
      "intent" : 
      {
        "ca" : "<p>L'objectiu d'aquest criteri d'èxit és garantir que un indicador de focus del teclat sigui molt visible. Aquest criteri està estretament relacionat amb el Criteri d'èxit 2.4.11 Aspecte del focus (mínim) i defineix un nivell més alt de visibilitat per a l'indicador de focus.</p><p>En relació al Focus Visible (millorat), aquest criteri:</p> <ul><li>Amplia l'àrea mínima a 2 píxels CSS al voltant del perímetre.</li><li>Augmenta el canvi de contrast a 4,5:1.</li><li>No permet cap part del l'indicador d'enfocament es veu enfosquit per altres continguts creats per l'autor.</li></ul><p>La resta d'aspectes del criteri d'èxit són els mateixos que el focus visible (mínim).</p>", 
        "es" : "<p>El propósito de este Criterio de Conformidad es garantizar que el indicador de enfoque del teclado sea muy visible. Este criterio está estrechamente relacionado con el Criterio de Conformidad 2.4.11 Aspecto del foco (mínimo) y define un mayor nivel de visibilidad para el indicador de foco.</p><p>En relación con el foco visible (mejorado), este criterio:</p> <ul><li>Expande el área mínima a 2 píxeles CSS alrededor del perímetro.</li><li>Aumenta el cambio de contraste a 4,5:1.</li><li>No permite ninguna parte del el indicador de foco sea oscurecido por otro contenido creado por el autor.</li></ul><p>Los otros aspectos del Criterio de Conformidad son los mismos que Foco Visible (Mínimo).</p>", 
        "en" : "<p>The purpose of this Success Criterion is to ensure a keyboard focus indicator is highly visible. This criterion is closely related to Success Criterion 2.4.11 Focus Appearance (Minimum) and defines a higher level of visibility for the focus indicator.</p><p>In relation to Focus Visible (enhanced) this criterion:</p><ul><li>Expands the minimum area to 2 CSS pixels around the perimeter.</li><li>Increases the change of contrast to 4.5:1.</li><li>Does not allow for any part of the focus indicator to be obscured by other, author-created content.</li></ul><p>The other aspects of the Success Criterion are the same as Focus Visible (Minimum).</p>",
      },
      "benefits" :
      {
        "ca" : "<p>Els avantatges d'aquest criteri d'èxit són similars a l'aspecte del focus (mínim).</p><ul><li>Els usuaris de teclat visuals poden determinar visualment amb quin component interaccionarà mitjançant les operacions del teclat.</li><li. >Les persones amb baixa visió poden seguir millor un indicador d'enfocament molt visible.</li><li>Les persones amb limitacions d'atenció, limitacions de memòria a curt termini o limitacions en els processos executius es beneficien de poder descobrir on es troba el focus. </li></ul>", 
        "es" : "<p>Los beneficios de este Criterio de Conformidad son similares a la Apariencia de Enfoque (Mínima).</p><ul><li>Los usuarios de teclados videntes pueden determinar visualmente con qué componente se interactuará usando las operaciones del teclado.</li><li >Las personas con baja visión pueden seguir mejor un indicador de enfoque muy visible.</li><li>Las personas con limitaciones de atención, limitaciones de memoria a corto plazo o limitaciones en los procesos ejecutivos se benefician al poder descubrir dónde se encuentra el foco. </li></ul>", 
        "en" : "<p>The benefits of this Success Criterion are similar to Focus Appearance (Minimum).</p><ul><li>Sighted keyboard users can visually determine which component will be interacted with using keyboard operations.</li><li>People with low vision are better able to follow a highly visible focus indicator.</li><li>People with attention limitations, short term memory limitations, or limitations in executive processes benefit by being able to discover where the focus is located.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },
    
    { // 2.4.13.
      "criteria" : 
      {
        "ca" : "2.4.13 Navegació de salt de pàgina", 
        "es" : "2.4.13 Navegación de salto de página", 
        "en" : "2.4.13 Page Break Navigation",
      }, 
      "link" : "https://www.w3.org/TR/WCAG22/#page-break-navigation", 
      "level" : "A",
      "version" : "2.2", 
      "goal" : 
      {
        "ca" : "Per al contingut web amb localitzadors de salts de pàgina, hi ha un mecanisme disponible per navegar a cada localitzador.", 
        "es" : "Para el contenido web con localizadores de saltos de página, hay un mecanismo disponible para navegar a cada localizador.", 
        "en" : "For web content with page break locators, a mechanism is available to navigate to each locator.",
      },
      "intent" : 
      {
        "ca" : "<p>L'objectiu d'aquest Criteri d'èxit és permetre que tots els usuaris localitzin el mateix contingut mitjançant localitzadors de salts de pàgina, independentment de si utilitzen versions impresas o digitals d'una publicació. Això és important per als usuaris amb discapacitat que poden transformar la informació per consumir-la més fàcilment.</p><p>La numeració de pàgines ha estat durant molt de temps una manera fonamental d'identificar i comunicar la ubicació de parts específiques del contingut publicat. Els números de pàgina s'utilitzen en referències, notes al peu, notes finals, bibliografies i taules de contingut. En particular, són crítics en entorns acadèmics i d'aprenentatge. Quan els participants utilitzen la mateixa edició d'un llibre imprès, els números de pàgina proporcionen un mitjà per assegurar-se que tothom està 'a la mateixa pàgina'.</p><p>La publicació digital, alhora que ofereix un major accés a la informació, amenaça la capacitat de tothom per localitza la informació per número de pàgina. Això es deu al fet que la mida de la pantalla i les preferències de l'usuari poden alterar el contingut. En una implementació, una pantalla de contingut es pot considerar una pàgina i la paginació es pot actualitzar perquè coincideixi amb el nombre de pantalles de contingut en un dispositiu específic. En un altre, la numeració de pàgines pot deixar d'utilitzar-se en una versió digital. En qualsevol cas, un usuari la numeració de les pàgines del qual ja no coincideix amb la versió impresa no pot trobar fàcilment la informació per referències de números de pàgina.</p><p>La publicació digital ofereix un accés crucial al contingut per a persones cegues, amb baixa visió, dislèxia o altres discapacitats cognitives. És probable que aquests usuaris adaptin el contingut mitjançant un disseny diferent o una tecnologia d'assistència. Proporcionar un mecanisme pel qual els usuaris de versions digitals puguin navegar mitjançant números de pàgina, garanteix que tots els usuaris puguin arribar fàcilment a la mateixa ubicació del document.</p><p>L'abast d'aquest criteri és el contingut web que forma part d'una pàgina web. EPUB pot complir aquesta definició si està disponible per llegir-la en un URI. El cas més comú que està a l'abast és un llibre EPUB convertit per ser llegit per un navegador web.</p>", 
        "es" : "<p>El propósito de este Criterio de Conformidad es permitir que todos los usuarios ubiquen el mismo contenido usando localizadores de saltos de página, independientemente de si usan versiones impresas o digitales de una publicación. Esto es importante para los usuarios con discapacidades que pueden transformar la información para consumirla más fácilmente.</p><p>La numeración de páginas ha sido durante mucho tiempo una forma fundamental de identificar y comunicar la ubicación de partes específicas del contenido publicado. Los números de página se utilizan en referencias, notas al pie, notas al final, bibliografías y tablas de contenido. En particular, son fundamentales en entornos académicos y de aprendizaje. Cuando los participantes usan la misma edición de un libro impreso, los números de página brindan un medio para garantizar que todos estén 'en la misma página'.</p><p>La publicación digital, si bien brinda un mayor acceso a la información, amenaza la capacidad de todos para localizar información por número de página. Esto se debe a que el tamaño de la pantalla y las preferencias del usuario pueden alterar el contenido. En una implementación, una pantalla de contenido puede considerarse una página y la paginación puede actualizarse para que coincida con el número de pantallas de contenido en un dispositivo específico. En otro, la numeración de páginas puede dejar de utilizarse en una versión digital. En cualquier caso, un usuario cuya numeración de páginas ya no coincida con la versión impresa no podrá ubicar fácilmente la información mediante las referencias de números de página.</p><p>La publicación digital proporciona un acceso crucial al contenido para las personas ciegas, con problemas de visión, dislexia o otras discapacidades cognitivas. Es probable que dichos usuarios adapten el contenido utilizando un diseño diferente o tecnología de asistencia. Proporcionar un mecanismo mediante el cual los usuarios de las versiones digitales puedan navegar a través de los números de página garantiza que todos los usuarios puedan llegar fácilmente a la misma ubicación del documento.</p><p>El alcance de este criterio es el contenido web que forma parte de una página web. EPUB puede cumplir con esta definición si está disponible para leer en un URI. El caso más común que está en el alcance es un libro EPUB convertido para ser leído por un navegador web.</p>", 
        "en" : "<p>The purpose of this Success Criterion is to let all users locate the same content using page break locators, regardless of whether they use print or digital versions of a publication. This is important to users with disabilities who may transform the information to more easily consume it.</p><p>Page numbering has long been a fundamental way to identify and communicate the location of specific parts of published content. Page numbers are used in references, footnotes, endnotes, bibliographies, and tables of content. Particularly, they are critical in academic and learning environments. When participants use the same edition of a printed book, page numbers provide a means to ensure everyone is 'on the same page.'</p><p>Digital publishing, while providing greater access to information, threatens the ability for everyone to locate information by page number. This is because screen size and user preferences can alter content. In one implementation, a screen of content may be considered a page, and the pagination may be updated to match the number of screens of content on a specific device. In another, the page numbering may cease to be used at all in a digital version. In either case, a user whose page numbering no longer matches the printed version cannot easily locate information by page number references.</p><p>Digital publishing provides crucial access to content for people who are blind, have low vision, dyslexia or other cognitive disabilities. Such users are likely to adapt content by using a different layout or assistive technology. Providing a mechanism by which users of digital versions can navigate via page numbers, ensures all users can easily reach the same document location.</p><p>The scope of this criterion is web content that is part of a Web page. EPUB can fulfill this definition if it is available to read at a URI. The more common case that is in scope is an EPUB book converted to be read by a web browser.</p>",
      },
      "benefits" :
      {
        "ca" : "Les persones que utilitzin un lector de pantalla o adaptin la visualització del contingut encara podran trobar el seu lloc i trobar referències a continguts basats en números de pàgina de la versió impresa o predeterminada de la publicació.", 
        "es" : "Las personas que usan un lector de pantalla o adaptan la visualización del contenido aún podrán encontrar su lugar y encontrar referencias al contenido que se basan en los números de página de la versión impresa o predeterminada de la publicación.", 
        "en" : "People who use a screenreader or adapt the display of the content will still be able to find their place and find references to content that are based on page numbers of the print or default version of the publication.",
      },
      "examples" : "https://www.w3.org/WAI/WCAG22/Understanding/page-break-navigation.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG22/Understanding/page-break-navigation.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },

    { // 2.5.1.
      "criteria" : 
      {
        "ca" : "2.5.1 Gestos de punter", 
        "es" : "2.5.1 Gestos de puntero", 
        "en" : "2.5.1 Pointer Gestures",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#pointer-gestures", 
      "level" : "A",
      "version" : "2.1", 
      "goal" : 
      {
        "ca" : "Tota la funcionalitat que utilitza gestos multipunt o basats en rutes per a l'operació es pot operar amb un sol punter sense un gest basat en rutes, llevat que sigui essencial un gest multipunt o basat en rutes.", 
        "es" : "	Toda la funcionalidad que utiliza gestos multipunto o basados en rutas para la operación se puede operar con un solo puntero sin un gesto basado en rutas, a menos que sea esencial un gesto multipunto o basado en rutas.", 
        "en" : "All functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential.",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest criteri d'èxit és garantir que el contingut es pugui controlar amb una varietat de dispositius d'apunt, habilitats i tecnologies d'assistència. Algunes persones no poden fer gestos d'una manera precisa, o poden utilitzar un dispositiu d'entrada especialitzat o adaptat, com ara un punter de cap, un sistema de mirada o un emulador de ratolí controlat per veu. Alguns mètodes de senyalització no tenen la capacitat o la precisió per realitzar gestos multipunt o basats en camins.</p><p>Un gest basat en camins implica una interacció on no només importen els punts finals. Si passar per un punt intermedi (generalment prop de l'inici del gest) també afecta el seu significat, llavors és un gest basat en el camí. L'usuari activa un punter (punt de partida), realitza un moviment que passa per almenys un punt intermedi abans de desenganxar el punter (punt final). El punt intermedi defineix que el gest requereix un camí específic, encara que no estigui definit el camí complet.</p><p>Alguns exemples de gestos basats en camins inclouen lliscar, lliscants i carrusels que depenen de la direcció d'interacció, i altres gestos que tracen un camí prescrit, com ara el dibuix d'una forma específica. Aquests camins es poden dibuixar amb un dit o un llapis en una pantalla tàctil, tauleta gràfica o trackpad, o amb un ratolí, joystick o dispositiu de punter similar.</p><p>Les interaccions de punter on el moviment entre els punts inicial i final pot anar en qualsevol direcció i són totalment no prescriptives no es basen en el camí.</p><p>Alguns exemples de gestos multipunt inclouen un zoom de pessic amb dos dits, un toc dividit on un dit descansa a la pantalla i un segon toc amb el dit, o un toc o llisca amb dos o tres dits. Els usuaris poden trobar-se difícil o impossible d'aconseguir-los si escrivien i assenyalen amb un sol dit o un pal.</p><p>Els autors han d'assegurar-se que el seu contingut es pot operar sense gestos multipunt o basats en camins. Els gestos multipunt o basats en camins es poden utilitzar sempre que la funcionalitat també es pugui operar mitjançant un altre mètode, com ara un toc, un clic, un doble toc, un doble clic, una pressió llarga o fer clic i mantenir premut.</p><p>[...]</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es garantizar que el contenido se pueda controlar con una variedad de dispositivos de señalización, habilidades y tecnologías de asistencia. Algunas personas no pueden realizar gestos de manera precisa, o pueden usar un dispositivo de entrada especializado o adaptado, como un puntero de cabeza, un sistema de mirada o un emulador de mouse controlado por voz. Algunos métodos de señalización carecen de la capacidad o la precisión para realizar gestos multipunto o basados en rutas.</p><p>Un gesto basado en ruta implica una interacción en la que no solo importan los puntos finales. Si pasar por un punto intermedio (generalmente cerca del comienzo del gesto) también afecta su significado, entonces es un gesto basado en una ruta. El usuario engancha un puntero (punto de partida), realiza un movimiento que pasa por al menos un punto intermedio antes de soltar el puntero (punto final). El punto intermedio define el gesto que requiere una ruta específica, incluso si la ruta completa no está definida.</p><p>Los ejemplos de gestos basados en rutas incluyen deslizamiento, controles deslizantes y carruseles que dependen de la dirección de la interacción, y otros gestos que trazan una ruta prescrita, como dibujar una forma específica. Dichas rutas se pueden dibujar con un dedo o un lápiz óptico en una pantalla táctil, una tableta gráfica o un trackpad, o con un mouse, joystick o dispositivo de puntero similar.</p><p>Las interacciones de puntero en las que el movimiento entre los puntos inicial y final puede ir en cualquier dirección y son completamente no prescriptivas no están basadas en rutas.</p><p>Los ejemplos de gestos multipunto incluyen un zoom de pellizco con dos dedos, un toque dividido donde un dedo descansa en la pantalla y un segundo dedo toca, o un toque o deslizamiento con dos o tres dedos. A los usuarios les puede resultar difícil o imposible lograrlos si escriben y señalan con un solo dedo o palo.</p><p>Los autores deben asegurarse de que su contenido se pueda operar sin gestos multipunto o basados en rutas. Se pueden usar gestos multipunto o basados en rutas siempre que la funcionalidad también se pueda operar con otro método, como tocar, hacer clic, tocar dos veces, hacer doble clic, mantener presionado o hacer clic y mantener presionado.</p><p>[...]</p>", 
        "en" : "<p>The intent of this Success Criterion is to ensure that content can be controlled with a range of pointing devices, abilities, and assistive technologies. Some people cannot perform gestures in a precise manner, or they may use a specialized or adapted input device such as a head pointer, eye-gaze system, or speech-controlled mouse emulator. Some pointing methods lack the capability or accuracy to perform multipoint or path-based gestures.</p><p>A path-based gesture involves an interaction where not just the endpoints matter. If going through an intermediate point (usually near the start of the gesture) also affects its meaning then it is a path-based gesture. The user engages a pointer (starting point), carries out a movement that goes through at least one intermediate-point before disengaging the pointer (end point). The intermediate point defines the gesture as requiring a specific path, even if the complete path is not defined.</p><p>Examples of path-based gestures include swiping, sliders and carousels dependent on the direction of interaction, and other gestures which trace a prescribed path such as the drawing a specific shape. Such paths may be drawn with a finger or stylus on a touchscreen, graphics tablet, or trackpad, or with a mouse, joystick, or similar pointer device.</p><p>Pointer interactions where the movement between the start and end points can go in any direction and are entirely non-prescriptive are not path-based.</p><p>Examples of multipoint gestures include a two-finger pinch zoom, a split tap where one finger rests on the screen and a second finger taps, or a two- or three-finger tap or swipe. Users may find it difficult or impossible to accomplish these if they type and point with a single finger or stick.</p><p>Authors must ensure that their content can be operated without multipoint or path-based gestures. Multipoint or path-based gestures can be used so long as the functionality can also be operated by another method, such as a tap, click, double tap, double click, long press, or click & hold.</p><p>[...]</p>",
      },
      "benefits" :
      {
        "ca" : "<ul><li>Els usuaris que no puguin (de manera precisa) realitzar gestos de punter complexos tindran mitjans alternatius per operar el contingut.</li><li>La disponibilitat d'elements d'interfície d'usuari proporcionats com a alternativa per a gestos complexos ajuda els usuaris que sovint no són conscients de la compatibilitat amb gestos de punter complexos. Això pot ser especialment beneficiós per als usuaris amb discapacitats cognitives o d'aprenentatge.</li></ul>", 
        "es" : "<ul><li>Los usuarios que no puedan (con precisión) realizar gestos de puntero complejos tendrán medios alternativos para operar el contenido.</li><li>La disponibilidad de los elementos de la interfaz de usuario proporcionados como respaldo para gestos complejos ayuda a los usuarios que a menudo no conocen la compatibilidad con gestos de puntero complejos. Esto puede ser especialmente beneficioso para los usuarios con discapacidades cognitivas o de aprendizaje.</li></ul>", 
        "en" : "<ul><li>Users who cannot (accurately) perform complex pointer gestures will have alternative means for operating the content.</li><li>The availability of user interface elements provided as a fallback for complex gestures helps users who may often be unaware of the support for complex pointer gestures. This can be especially beneficial for users with cognitive or learning disabilities.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html#techniques",
      "verification" :
      {
        "ca" : "<p>Objectiu: assegurar que el contingut es pot operar des d'un gran nombre de dispositius d'entrada senzills de manera que les persones amb problemes de mobilitat puguin interactuar fàcilment.</p><p>Tota la funcionalitat que empri gestos multipunt o dependents de la trajectòria realitzada també s'ha de poder fer emprant un únic punt de contacte i sense traços, mitjançant una pulsació senzilla amb un dit o amb un punter.</p>", 
        "es" : "<p>Objetivo: asegurar que el contenido se puede operar desde un gran número de dispositivos de entrada sencillos de forma que las personas con problemas de movilidad puedan interactuar de manera fácil.</p><p>Toda la funcionalidad que emplee gestos multipunto o dependientes de la trayectoria realizada también se debe poder realizar empleando un único punto de contacto y sin trazos, mediante una pulsación sencilla con un dedo o con un puntero.</p>", 
        "en" : "<p>Goal: to ensure that content can be operated from a large number of simple input devices so that people with mobility impairments can easily interact.</p><p>All functionality using multipoint gestures or dependent on the path taken should also be able to be done using a single point of contact and without traces, by means of a simple press with a finger or with a pointer.</p>",
      }, 
      "tools" :
      {
        "ca" : "<p>Nom de l'eina: Comprovació manual</p><p>Procediment de comprovació:</p><ol><li>Localitzar els elements en què cal fer una interacció amb gestos complexos (p.ex. pinça amb dos dits, pulsació amb un dit mentre un altre es manté enganxat a la pantalla, pulsació múltiple amb diversos dits o desplaçaments d'un o diversos dits)</li><li>Verificar que hi ha una manera d'accedir a la mateixa funcionalitat utilitzant un gest senzill o mitjançant un punter.</li></ol>", 
        "es" : "<p>Nombre de la herramienta: Comprobación manual</p><p>Procedimiento de comprobación:</p><ol><li>Localizar los elementos en los que hay que realizar una interacción con gestos complejos (p.ej. pinza con dos dedos, pulsación con un dedo mientras otro se mantiene pegado a la pantalla, pulsación múltiple con varios dedos o desplazamientos de uno o varios dedos)</li><li>Verificar que existe un modo de acceder a la misma funcionalidad utilizando un gesto sencillo o a través de un puntero.</li></ol>", 
        "en" : "<p>Tool name: Manual check</p><p>Check procedure:</p><ol><li>Locate elements that need to be interacted with complex gestures (eg. pinch with two fingers, tap with one finger while another is on the screen, multi-tap with several fingers or scrolls of one or several fingers)</li><li>Verify that there is a way to access the same functionality using a simple gesture or through a pointer.</li></ol>",
      },
      "category" : ["custom-controls"]
    },
    
    { // 2.5.2.
      "criteria" : 
      {
        "ca" : "2.5.2 Cancel·lació de punter", 
        "es" : "2.5.2 Cancelación de puntero", 
        "en" : "2.5.2 Pointer Cancellation",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#pointer-cancellation", 
      "level" : "A",
      "version" : "2.1", 
      "goal" : 
      {
        "ca" : "Per a la funcionalitat que es pot operar usant un sol punter, almenys un dels següents és veritable:<ul><li>Sense esdeveniment descendent: l'esdeveniment descendent del punter no es fa servir per executar cap part de la funció;</li><li>Cancel·lar o desfer: la finalització de la funció és a l'esdeveniment ascendent i hi ha un mecanisme disponible per cancel·lar la funció abans de completar-la o per desfer la funció després de completar-la;</li><li>Up Reversal: L'esdeveniment up inverteix qualsevol resultat de l'esdeveniment down anterior;</li><li>Essencial: Completar la funció a l'esdeveniment down és essencial.</li></ul>", 
        "es" : "Para la funcionalidad que se puede operar usando un solo puntero, al menos uno de los siguientes es verdadero:<ul><li>Sin evento descendente: el evento descendente del puntero no se utiliza para ejecutar ninguna parte de la función;</li><li>Cancelar o deshacer: la finalización de la función está en el evento ascendente y hay un mecanismo disponible para cancelar la función antes de completarla o para deshacer la función después de completarla;</li><li>Up Reversal: El evento up invierte cualquier resultado del evento down anterior;</li><li>Esencial: Completar la función en el evento down es esencial.</li></ul>", 
        "en" : "For functionality that can be operated using a single pointer, at least one of the following is true:<ul><li>No Down-Event : The down-event of the pointer is not used to execute any part of the function;</li><li>Abort or Undo : Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion;</li><li>Up Reversal : The up-event reverses any outcome of the preceding down-event;</li><li>Essential : Completing the function on the down-event is essential.</li></ul>",
      },
      "intent" : 
      {
        "ca" : "La intenció d'aquest criteri d'èxit és facilitar als usuaris la prevenció de l'entrada accidental o errònia del punter. Les persones amb diverses discapacitats poden iniciar sense voler esdeveniments tàctils o del ratolí amb resultats no desitjats. Cadascuna de les subseccions següents s'alinea aproximadament amb les vinyetes d'aquest Criteri d'èxit i descriu un mitjà per permetre als usuaris cancel·lar les operacions del punter.", 
        "es" : "La intención de este criterio de éxito es facilitar a los usuarios la prevención de entradas de puntero accidentales o erróneas. Las personas con diversas discapacidades pueden iniciar sin darse cuenta eventos táctiles o del mouse con resultados no deseados. Cada una de las siguientes subsecciones se alinea aproximadamente con las viñetas de este Criterio de Conformidad y describe un medio para permitir a los usuarios cancelar las operaciones del puntero.", 
        "en" : "The intent of this Success Criterion is to ensure that content can be controlled with a range of pointing devices, abilities, and assistive technologies. Some people cannot perform gestures in a precise manner, or they may use a specialized or adapted input device such as a head pointer, eye-gaze system, or speech-controlled mouse emulator. Some pointing methods lack the capability or accuracy to perform multipoint or path-based gestures.#A path-based gesture involves an interaction where not just the endpoints matter. If going through an intermediate point (usually near the start of the gesture) also affects its meaning then it is a path-based gesture. The user engages a pointer (starting point), carries out a movement that goes through at least one intermediate-point before disengaging the pointer (end point). The intermediate point defines the gesture as requiring a specific path, even if the complete path is not defined.",
      },
      "benefits" :
      {
        "ca" : "<ul><li>Fa que sigui més fàcil per a tots els usuaris recuperar-se de colpejar l'objectiu equivocat.</li><li>Ajuda a les persones amb discapacitat visual, limitacions cognitives i deficiències motrius reduint la possibilitat que un control s'activi accidentalment o que una acció es produeixi de manera inesperada, i també garanteix que, quan s'activen controls complexos, hi hagi un mitjà per desfer o avortar l'acció.</li><li>Les persones que no poden detectar canvis de context tenen menys probabilitats de desorientar-se mentre naveguen per un lloc.</li></ul>", 
        "es" : "<ul><li>Hace que sea más fácil para todos los usuarios recuperarse de golpear el objetivo equivocado.</li><li>Ayuda a las personas con discapacidades visuales, limitaciones cognitivas y deficiencias motoras al reducir la posibilidad de que un control se active accidentalmente o que una acción ocurra de forma inesperada, y también asegura que cuando se activan controles complejos, hay un medio disponible para deshacer o cancelar la acción.</li><li>Las personas que no pueden detectar cambios de contexto tienen menos probabilidades de desorientarse mientras navegan por un sitio.</li></ul>", 
        "en" : "<ul><li>Makes it easier for all users to recover from hitting the wrong target.</li><li>Helps people with visual disabilities, cognitive limitations, and motor impairments by reducing the chance that a control will be accidentally activated or an action will occur unexpectedly, and also ensures that where complex controls are activated, a means of Undoing or Aborting the action is available.</li><li>Individuals who are unable to detect changes of context are less likely to become disoriented while navigating a site.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html#techniques",
      "verification" :
      {
        "ca" : "<p>Objectiu: prevenir interaccions accidentals per part dels usuaris en polsar sobre algun component de manera involuntària</p><p>Tota funcionalitat que es pugui operar mitjançant un punter senzill (single pointer) ha de complir almenys una de les següents condicions:</p><ul><li>L'esdeveniment down del punter no s'empra per executar cap part de la funcionalitat.</li><li>La funció es completa amb l'esdeveniment up del punter i hi ha un mecanisme per cancel·lar la funció abans que es completi o per desfer-la un cop completada.</li><li>L'esdeveniment up del punter desfà qualsevol conseqüència de l'esdeveniment down previ.</li><li>Completar la funció amb l'esdeveniment down és essencial (p. ex. es considera essencial un emulador de teclat)</li></ul>", 
        "es" : "<p>Objetivo: prevenir interacciones accidentales por parte de los usuarios al pulsar sobre algún componente de manera involuntaria</p><p>Toda funcionalidad que se pueda operar mediante un puntero sencillo (single pointer) debe cumplir al menos una de las siguientes condiciones:</p><ul><li>El evento down del puntero no se emplea para ejecutar ninguna parte de la funcionalidad.</li><li>La función se completa con el evento up del puntero y existe un mecanismo para cancelar la función antes de que se complete o para deshacerla una vez completada.</li><li>El evento up del puntero deshace cualquier consecuencia del evento down previo.</li><li>Completar la función con el evento down es esencial (p. ej. se considera esencial un emulador de teclado)</li></ul>", 
        "en" : "<p>Goal: to prevent accidental interactions by users when inadvertently clicking on a component</p><p>Any functionality that can be operated by means of a single pointer must comply with at least one of the following conditions:</p><ul><li>The down event of the pointer is not used to execute any part of the functionality.</li><li>The function is completed by the up event of the pointer and there is a mechanism to cancel the function before it completes or to undo it after completion.</li><li>The pointer's up event undoes any consequences of the previous down event.</li><li>Completing the function with the down event is essential (eg a keyboard emulator is considered essential)</li></ul>",
      }, 
      "tools" :
      {
        "ca" : "<p>Nom de l'eina: Comprovació manual</p><p>Procediment de comprovació:</p><ol><li>Localitzar tots els elements d'interacció i accedir-hi utilitzant tots els mitjans disponibles (p.ex. . un ratolí, una pantalla tàctil...).</li><li>Comprovar que en prémer l'element d'interacció (només polsar, però no deixar anar) no s'activa cap funcionalitat.</li><li>Lliscar i aixecar el punter fora de l'àrea d'interacció i comprovar que no s'ha activat cap funcionalitat.</li></ol>", 
        "es" : "<p>Nombre de la herramienta: Comprobación manual</p><p>Procedimiento de comprobación:</p><ol><li>Localizar todos los elementos de interacción y acceder a ellos utilizando todos los medios disponibles (p.ej. un ratón, una pantalla táctil...).</li><li>Comprobar que al pulsar en el elemento de interacción (sólo pulsar, pero no soltar) no se activa ninguna funcionalidad.</li><li>Deslizar y levantar el puntero fuera del área de interacción y comprobar que no se ha activado ninguna funcionalidad.</li></ol>", 
        "en" : "<p>Tool name: Manual check</p><p>Check procedure:</p><ol><li>Locate all interaction elements and access them using all available means (e.g. .a mouse, a touch screen...).</li><li>Check that clicking on the interaction element (just pressing, but not releasing) does not activate any functionality.</li><li>Swipe and lift the pointer out of the interaction area and check that no functionality has been activated.</li></ol>",
      },
      "category" : ["custom-controls"]
    },
    
    { // 2.5.3.
      "criteria" : 
      {
        "ca" : "2.5.3 Etiqueta en Nom", 
        "es" : "2.5.3 Etiqueta en Nombre", 
        "en" : "2.5.3 Label in Name",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#label-in-name", 
      "level" : "A",
      "version" : "2.1", 
      "goal" : 
      {
        "ca" : "Per als components de la interfície dusuari amb etiquetes que inclouen text o imatges de text, el nom conté el text que es presenta visualment.", 
        "es" : "Para los componentes de la interfaz de usuario con etiquetas que incluyen texto o imágenes de texto, el nombre contiene el texto que se presenta visualmente.", 
        "en" : "For user interface components with labels that include text or images of text, the name contains the text that is presented visually.",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest criteri d'èxit és garantir que les paraules que etiqueten visualment un component són també les paraules associades amb el component de manera programàtica. Això ajuda a garantir que les persones amb discapacitat puguin confiar en les etiquetes visibles com a mitjà per interactuar amb els components.</p><p>La majoria dels controls van acompanyats d'una etiqueta de text visible . Aquests mateixos controls tenen un nom programàtic , també conegut com el nom accessible . Els usuaris solen tenir una experiència molt millor si les paraules i caràcters de l'etiqueta visible d'un control coincideixen o estan continguts dins del nom accessible. Quan coincideixen, els usuaris d'entrada de veu (és a dir, els usuaris d'aplicacions de reconeixement de veu) poden navegar pronunciant les etiquetes de text visibles dels components, com ara menús, enllaços i botons, que apareixen a la pantalla. Els usuaris vidents que utilitzen la conversió de text a veu (per exemple, lectors de pantalla) també tindran una millor experiència si el text que escolten coincideix amb el que veuen a la pantalla.</p><p>Tingueu en compte que quan no existeix una etiqueta de text visible per a un component, aquest criteri d'èxit no s'aplica a aquest component.</p><p>Quan les etiquetes de text existeixen i estan enllaçades correctament amb els components de la interfície d'usuari mitjançant pràctiques d'autor establertes, l'etiqueta i el nom normalment coincidiran. Quan no coincideixen, els usuaris d'entrada de veu que intentin utilitzar l'etiqueta de text visible com a mitjà de navegació o selecció (p. ex., 'passar a la contrasenya') no tindran èxit. La navegació basada en la veu falla perquè l'etiqueta visible pronunciada pels usuaris no coincideix (o no forma part) del nom accessible que està habilitat com a ordre d'entrada de veu. A més, quan el nom accessible és diferent de l'etiqueta visible, pot funcionar com una ordre oculta que els usuaris d'entrada de veu poden activar accidentalment.</p><p>Els desajustos entre les etiquetes visibles i els noms programàtics dels controls són encara més un problema per als usuaris d'entrada de veu i de text a veu que també tenen problemes cognitius. Els desajustos creen una càrrega cognitiva addicional per als usuaris d'entrada de veu, que han de recordar dir una ordre de veu diferent de l'etiqueta visible que veuen en un control. També crea una càrrega cognitiva addicional perquè un usuari de text a veu absorbeixi i entengui la sortida de la parla que no coincideix amb l'etiqueta visible.</p><p>Per tal que el text de l'etiqueta i el nom accessible coincideixin, primer cal determinar quin text de la pantalla s'ha de considerar una etiqueta per a qualsevol control determinat. Sovint hi ha diverses cadenes de text en una interfície d'usuari que poden ser rellevants per a un control. No obstant això, hi ha raons per les quals és millor interpretar de manera conservadora l'etiqueta com només el text a prop.</p><p>Convencionalment, l'etiqueta dels components de la interfície d'usuari és la cadena de text adjacent. El posicionament típic dels idiomes d'esquerra a dreta és:</p><ul><li>immediatament a l'esquerra de quadres combinats, llistes desplegables, entrades de text i altres ginys (o en absència d'etiquetes del costat esquerre, immediatament a sobre i alineats amb la vora esquerra de cada entrada)</li><li>immediatament a la dreta de les caselles de selecció i els botons d'opció</li><li>dins dels botons i pestanyes o immediatament a sota de les icones que serveixen com a botons</li></ul><p>[...]</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es garantizar que las palabras que etiquetan visualmente un componente también sean las palabras asociadas con el componente mediante programación. Esto ayuda a garantizar que las personas con discapacidad puedan confiar en las etiquetas visibles como un medio para interactuar con los componentes.</p><p>La mayoría de los controles van acompañados de una etiqueta de texto visible . Esos mismos controles tienen un nombre programático , también conocido como Nombre Accesible . Los usuarios suelen tener una experiencia mucho mejor si las palabras y los caracteres de la etiqueta visible de un control coinciden o están incluidos en el nombre accesible. Cuando estos coinciden, los usuarios de entrada de voz (es decir, usuarios de aplicaciones de reconocimiento de voz) pueden navegar pronunciando las etiquetas de texto visibles de los componentes, como menús, enlaces y botones, que aparecen en la pantalla. Los usuarios videntes que usan texto a voz (por ejemplo, lectores de pantalla) también tendrán una mejor experiencia si el texto que escuchan coincide con el texto que ven en la pantalla.</p><p>Tenga en cuenta que cuando no existe una etiqueta de texto visible para un componente, este Criterio de Conformidad no se aplica a ese componente.</p><p>Cuando existan etiquetas de texto y estén correctamente vinculadas a los componentes de la interfaz de usuario a través de prácticas de creación establecidas, la etiqueta y el nombre normalmente coincidirán. Cuando no coinciden, los usuarios de entrada de voz que intenten usar la etiqueta de texto visible como un medio de navegación o selección (por ejemplo, 'mover a Contraseña') no tendrán éxito. La navegación basada en voz falla porque la etiqueta visible pronunciada por los usuarios no coincide (o no forma parte) del nombre accesible que está habilitado como comando de entrada de voz. Además, cuando el nombre accesible es diferente de la etiqueta visible, puede funcionar como un comando oculto que los usuarios de entrada de voz pueden activar accidentalmente.</p><p>Las discrepancias entre las etiquetas visibles y los nombres programáticos de los controles son un problema aún mayor para los usuarios de entrada de voz y de texto a voz que también tienen problemas cognitivos. Los desajustes crean una carga cognitiva adicional para los usuarios de entrada de voz, quienes deben recordar decir un comando de voz que sea diferente de la etiqueta visible que ven en un control. También crea una carga cognitiva adicional para que un usuario de texto a voz absorba y comprenda la salida de voz que no coincide con la etiqueta visible.</p><p>Para que el texto de la etiqueta y el nombre accesible coincidan, primero es necesario determinar qué texto de la pantalla debe considerarse una etiqueta para un control determinado. A menudo hay varias cadenas de texto en una interfaz de usuario que pueden ser relevantes para un control. Sin embargo, hay razones por las que es mejor interpretar de manera conservadora la etiqueta como si fuera solo el texto que se encuentra muy cerca.</p><p>Convencionalmente, la etiqueta de los componentes de la interfaz de usuario es la cadena de texto adyacente. El posicionamiento típico para los idiomas de izquierda a derecha es:</p><ul><li>inmediatamente a la izquierda de cuadros combinados, listas desplegables, entradas de texto y otros widgets (o en ausencia de etiquetas del lado izquierdo, inmediatamente arriba y alineado con el borde izquierdo de cada entrada)</li><li>inmediatamente a la derecha de las casillas de verificación y los botones de radio</li><li>dentro de botones y pestañas o inmediatamente debajo de los iconos que sirven como botones</li></ul><p>[...]</p>", 
        "en" : "<p>The intent of this Success Criterion is to ensure that the words which visually label a component are also the words associated with the component programmatically. This helps ensure that people with disabilities can rely on visible labels as a means to interact with the components.</p><p>Most controls are accompanied by a visible text label. Those same controls have a programmatic name, also known as the Accessible Name. Users typically have a much better experience if the words and characters in the visible label of a control match or are contained within the accessible name. When these match, speech-input users (i.e., users of speech recognition applications) can navigate by speaking the visible text labels of components, such as menus, links, and buttons, that appear on the screen. Sighted users who use text-to-speech (e.g., screen readers) will also have a better experience if the text they hear matches the text they see on the screen.</p><p>Note that where a visible text label does not exist for a component, this Success Criterion does not apply to that component.</p><p>Where text labels exist and are properly linked to the user interface components through established authoring practices, the label and name will normally match. When they don't match, speech-input users who attempt to use the visible text label as a means of navigation or selection (e.g., 'move to Password') will be unsuccessful. The speech-based navigation fails because the visible label spoken by the users does not match (or is not part of) the accessible name that is enabled as a speech-input command. In addition, when the accessible name is different from the visible label, it may function as a hidden command that can be accidentally activated by speech-input users.</p><p>Mismatches between visible labels and programmatic names for controls are even more of an issue for speech-input and text-to-speech users who also have cognitive challenges. Mismatches create an extra cognitive load for speech-input users, who must remember to say a speech command that is different from the visible label they see on a control. It also creates extra cognitive load for a text-to-speech user to absorb and understand speech output that does not match the visible label.</p><p>In order for the label text and accessible name to be matched, it is first necessary to determine which text on the screen should be considered a label for any given control. There are often multiple text strings in a user interface that may be relevant to a control. However, there are reasons why it is best to conservatively interpret the label as being only the text in close proximity.</p><p>Conventionally the label for user interface components is the adjacent text string. The typical positioning for left to right languages is:</p><ul><li>immediately to the left of comboboxes, dropdown lists, text inputs, and other widgets (or in the absence of left-side labels, immediately above and aligned with the left edge of each input)</li><li>immediately to the right of checkboxes and radio buttons</li><li>inside buttons and tabs or immediately below icons serving as buttons</li></ul><p>[...]</p>",
      },
      "benefits" :
      {
        "ca" : "<ul><li>Els usuaris d'entrada de veu poden activar directament els controls d'una pàgina amb menys canvis d'enfocament sorprenents.</li><li>Els usuaris de text a veu tindran una millor experiència perquè les etiquetes que escolten coincideixen amb les etiquetes de text visibles que veuen a la pantalla.</li></ul>", 
        "es" : "<ul><li></li><li></li></ul>", 
        "en" : "<ul><li>Speech-input users can directly activate controls on a page with fewer surprising changes of focus.</li><li>Text-to-speech users will have a better experience because the labels that they hear match the visible text labels that they see on the screen.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html#techniques",
      "verification" :
      {
        "ca" : "<p>Objectiu: afavorir que les persones que depenguin de les etiquetes visuals dels components de l'interfície d'usuari també puguin fer servir els noms accessibles</p><p>En els components de l'interfície d'usuari (com els camps de formulari o botons ) cal que el text visible que actua com a etiqueta i que serveix per reconèixer-los visualment també formi part del seu nom accessible</p>", 
        "es" : "<p>Objetivo: favorecer que las personas que dependan de las etiquetas visuales de los componentes del interfaz de usuario también puedan emplear los nombres accesibles</p><p>En los componentes del interfaz de usuario (como los campos de formulario o botones) es necesario que el texto visible que actúa como su etiqueta y que sirve para reconocerlos visualmente también forme parte de su nombre accesible</p>", 
        "en" : "<p>Goal: to encourage people who depend on visual labels on user interface components to also use accessible names</p><p>In user interface components (such as form fields or buttons ) it is necessary that the visible text that acts as their label and that serves to recognize them visually is also part of their accessible name</p>",
      }, 
      "tools" :
      {
        "ca" : "<p>Nom de l'eina: Web Developer Toolbar</p><p>Procediment de comprovació:</p><ol><li>Seleccionar “Forms - Display form details”.</li><li>Localitzar els camps de formulari que tenen un text visible que actua com a etiqueta.</li><li>Assegureu-vos que el nom accessible de l'element conté les mateixes lletres i en el mateix ordre que l'etiqueta visible.</li><li>Localitzar altres elements d'interacció disponibles a la pàgina (p.ex. botons, enllaços...) que tenen un text visible que actua com a etiqueta.</li><li>Fent servir l'eina d'inspecció de codi del navegador, comprovar si utilitza les propietats de WAI-ARIA (com aria-label, aria-labelledby o aria-describedby) per generar un nom accessible.</li><li>Assegurar que el nom accessible de l'element conté les mateixes lletres i en el mateix ordre que l'etiqueta visible.</li></ol>", 
        "es" : "<p>Nombre de la herramienta: Web Developer Toolbar</p><p>Procedimiento de comprobación:</p><ol><li>Seleccionar “Forms - Display form details”.</li><li>Localizar los campos de formulario que tienen un texto visible que actúa como etiqueta.</li><li>Asegurar que el nombre accesible del elemento contiene las mismas letras y en el mismo orden que la etiqueta visible.</li><li>Localizar otros elementos de interacción disponibles en la página (p.ej botones, enlaces...) que tienen un texto visible que actúa como etiqueta.</li><li>Usando la herramienta de inspección de código del navegador, comprobar si utiliza las propiedades de WAI-ARIA (como aria-label, aria-labelledby o aria-describedby) para generar un nombre accesible.</li><li>Asegurar que el nombre accesible del elemento contiene las mismas letras y en el mismo orden que la etiqueta visible.</li></ol>", 
        "en" : "<p>Tool name: Web Developer Toolbar</p><p>Check procedure:</p><ol><li>Select “Forms - Display form details”.</li><li>Locate the form fields that have visible text that acts as a label.</li><li>Ensure that the element's accessible name contains the same letters and in the same order as the visible label.</li><li>Locate others interaction elements available on the page (eg buttons, links...) that have visible text that acts as a label.</li><li>Using the browser's code inspection tool, check if it uses the properties from WAI-ARIA (such as aria-label, aria-labelledby, or aria-describedby) to generate an accessible name.</li><li>Ensure that the element's accessible name contains the same letters and in the same order as the label visible.</li></ol>",
      },
      "category" : ["custom-controls", "forms-and-UI"]
    },
    
    { // 2.5.4.
      "criteria" : 
      {
        "ca" : "2.5.4 Actuació de moviment", 
        "es" : "2.5.4 Actuación de movimiento", 
        "en" : "2.5.4 Motion Actuation",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#motion-actuation", 
      "level" : "A",
      "version" : "2.1", 
      "goal" : 
      {
        "ca" : "La funcionalitat que pot ser operada pel moviment del dispositiu o el moviment de l'usuari també pot ser operada pels components de la interfície d'usuari i la resposta al moviment es pot desactivar per evitar l'activació accidental, excepte quan:<ul><li>Interfície compatible: el moviment s'utilitza per operar la funcionalitat mitjançant una interfície compatible amb l'accessibilitat;</li><li>Essencial: el moviment és essencial per a la funció i fer-ho invalidaria l'activitat.</li></ul>", 
        "es" : "La funcionalidad que puede ser operada por el movimiento del dispositivo o el movimiento del usuario también puede ser operada por los componentes de la interfaz de usuario y la respuesta al movimiento puede desactivarse para evitar la activación accidental, excepto cuando:<ul><li>Interfaz compatible: el movimiento se utiliza para operar la funcionalidad a través de una interfaz compatible con la accesibilidad;</li><li>Esencial: el movimiento es esencial para la función y hacerlo invalidaría la actividad.</li></ul>", 
        "en" : "Functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when:<ul><li>Supported Interface : The motion is used to operate functionality through an accessibility supported interface;</li><li>Essential : The motion is essential for the function and doing so would invalidate the activity.</li></ul>",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest criteri d'èxit és garantir que les funcions que s'activen movent un dispositiu (per exemple, sacsejant o inclinant) o fent un gest cap al dispositiu (de manera que sensors com una càmera puguin captar i interpretar el gest) també es puguin utilitzar. mitjançant components d'interfície d'usuari més convencionals.</p><p>Els dispositius solen tenir sensors que poden actuar com a entrades, com ara sensors d'acceleròmetre i giroscopi en un telèfon o tauleta. Aquests sensors poden permetre a l'usuari controlar alguna cosa simplement canviant l'orientació o movent el dispositiu de maneres particulars. En altres situacions, el contingut web pot interpretar els gestos de l'usuari mitjançant la càmera o altres sensors per activar funcions. Per exemple, sacsejar el dispositiu pot emetre una ordre 'Desfés' o es pot fer servir un gest suau amb la mà per avançar o retrocedir en una seqüència de pàgines. Alguns usuaris amb discapacitat no són capaços d'utilitzar aquests sensors del dispositiu (no en absolut, o no amb prou precisió) perquè el dispositiu està en un suport fix (potser una cadira de rodes) o per problemes motors.</p><p>A més, alguns usuaris poden activar sensors accidentalment a causa de tremolors o altres alteracions motrius. L'usuari ha de tenir la capacitat de desactivar l'activació del moviment per evitar l'activació accidental de les funcions. Les aplicacions poden complir aquest requisit si admeten la configuració del sistema operatiu que permet a l'usuari desactivar la detecció de moviment a nivell de sistema.</p><p>Hi ha una excepció en què el moviment és essencial per a la funció o no utilitzar moviments o gestos invalidaria l'activitat. Algunes aplicacions es creen específicament per utilitzar les dades del sensor del dispositiu. Alguns exemples de contingut que estan exempts d'aquest requisit inclouen un podòmetre que es basa en el moviment del dispositiu per comptar els passos.</p>", 
        "es" : "<p>La intención de este criterio de éxito es garantizar que las funciones activadas al mover un dispositivo (por ejemplo, sacudirlo o inclinarlo) o al hacer gestos hacia el dispositivo (para que los sensores, como una cámara, puedan detectar e interpretar los gestos), también puedan operarse. por componentes de interfaz de usuario más convencionales.</p><p>Los dispositivos a menudo tienen sensores que pueden actuar como entradas, como sensores de acelerómetro y giroscopio en un teléfono o tableta. Estos sensores pueden permitir que el usuario controle algo simplemente cambiando la orientación o moviendo el dispositivo de formas particulares. En otras situaciones, el contenido web puede interpretar los gestos del usuario a través de la cámara u otros sensores para activar funciones. Por ejemplo, agitar el dispositivo puede generar un comando 'Deshacer', o puede usarse un suave movimiento de la mano para avanzar o retroceder en una secuencia de páginas. Algunos usuarios con discapacidades no pueden operar los sensores de estos dispositivos (no en absoluto o no con la suficiente precisión) porque el dispositivo está en un soporte fijo (tal vez una silla de ruedas) o debido a deficiencias motoras.</p><p>Además, algunos usuarios pueden activar accidentalmente los sensores debido a temblores u otras deficiencias motoras. El usuario debe tener la capacidad de desactivar la activación de movimiento para evitar la activación accidental de funciones. Las aplicaciones pueden cumplir con este requisito al admitir la configuración del sistema operativo que permite al usuario deshabilitar la detección de movimiento a nivel del sistema.</p><p>Hay una excepción donde el movimiento es esencial para la función o no usar movimientos o gestos invalidaría la actividad. Algunas aplicaciones se crean específicamente para usar datos de sensores de dispositivos. Los ejemplos de contenido que están exentos de este requisito incluyen un podómetro que se basa en el movimiento del dispositivo para contar los pasos.</p>", 
        "en" : "<p>The intent of this success criterion is to ensure that functions triggered by moving a device (for example, shaking or tilting) or by gesturing towards the device (so that sensors like a camera can pick up and interpret the gesturing), can also be operated by more conventional user interface components.</p><p>Devices often have sensors that can act as inputs, such as accelerometer and gyroscope sensors on a phone or tablet device. These sensors can allow the user to control something by simply changing the orientation or moving the device in particular ways. In other situations, web content can interpret user gestures via the camera or other sensors to actuate functions. For example, shaking the device might issue an 'Undo' command, or a gentle hand wave might be used to move forward or backward in a sequence of pages. Some users with disabilities are not able to operate these device sensors (either not at all, or not precisely enough) because the device is on a fixed mount (perhaps a wheelchair) or due to motor impairments. Therefore, functionality offered through motion must also be available by another mechanism.</p><p>In addition, some users may accidentally activate sensors due to tremors or other motor impairments. The user must have the ability to turn off motion actuation to prevent such accidental triggering of functions. Applications may be able to meet this requirement by supporting operating system settings which allow the user to disable motion detection at the system level.</p><p>There is an exception where motion is essential for the function or not using motions or gestures would invalidate the activity. Some applications are specifically created to use device sensor data. Examples of content that are exempt from this requirement include a pedometer that relies on device motion to count steps.</p>",
      },
      "benefits" :
      {
        "ca" : "<ul><li>Aquest criteri d'èxit ajuda les persones que poden ser incapaços de realitzar moviments concrets (com ara inclinar, sacsejar o fer gestos) perquè el dispositiu està muntat o els usuaris poden ser físicament incapaços de realitzar el moviment necessari. Aquest criteri d'èxit garanteix que els usuaris encara puguin utilitzar totes les funcionalitats per altres mitjans, com ara el tacte o mitjançant tecnologies d'assistència.</li><li>Altres usuaris es beneficiaran en situacions en què no puguin moure els seus dispositius.</li></ul>", 
        "es" : "<ul><li>Este Criterio de Conformidad ayuda a las personas que no pueden realizar movimientos particulares (como inclinarse, sacudirse o gesticular) porque el dispositivo puede estar montado o los usuarios pueden ser físicamente incapaces de realizar el movimiento necesario. Este criterio de éxito garantiza que los usuarios aún puedan operar todas las funciones por otros medios, como el tacto o mediante tecnologías de asistencia.</li><li>Otros usuarios se beneficiarán en situaciones en las que no puedan mover sus dispositivos.</li></ul>", 
        "en" : "<ul><li>This Success Criterion helps people who may be unable to perform particular motions (such as tilting, shaking, or gesturing) because the device may be mounted or users may be physically unable to perform the necessary movement. This success criterion ensures that users can still operate all functionality by other means such as touch or via assistive technologies.</li><li>Other users will benefit in situations where they are unable to move their devices.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html#techniques",
      "verification" :
      {
        "ca" : "<p>Objectiu: assegurar que hi ha mitjans alternatius per activar totes les funcionalitats de la pàgina que depenguin del moviment del dispositiu.</p><p>A. Qualsevol funcionalitat que es pugui operar mitjançant el moviment del dispositiu també s'ha de poder fer a través de la interfície d'usuari i també s'ha de poder desactivar aquesta operació mitjançant el moviment per evitar accions no desitjades</p><p>B. Les etiquetes dels controls i elements d'interacció han d'identificar quin és el vostre propòsit</p>", 
        "es" : "<p>Objetivo: asegurar que existen medios alternativos para activar todas las funcionalidades de la página que dependan del movimiento del dispositivo.</p><p>A. Cualquier funcionalidad que se pueda operar mediante el movimiento del dispositivo también se debe poder realizar a través del interfaz de usuario y también se debe poder desactivar dicha operación mediante el movimiento para evitar acciones no deseadas</p><p>B. Las etiquetas de los controles y elementos de interacción deben identificar cuál es su propósito</p>", 
        "en" : "<p>Goal: to ensure that there are alternative means to activate all the functionalities of the page that depend on the movement of the device.</p><p>A. Any functionality that can be operated by moving the device should also be able to be done through the user interface and should also be able to be disabled by moving to avoid unwanted actions</p><p>B. The labels of the controls and interaction elements must identify what their purpose is</p>",
      }, 
      "tools" :
      {
        "ca" : "<p>A. Nom de l'eina: Comprovació manual</p><p>Procediment de comprovació:</p><ol><li>Localitzar si hi ha funcionalitats que puguin ser activades mitjançant el moviment del dispositiu (p.ex. avançar entre pàgines en inclinar el dispositiu).</li><li>Garantir que hi ha un mètode alternatiu que no depengui del moviment (p.ex. un botó).</li></ol> <p>B. Nom de l'eina: Comprovació manual</p><p>Procediment de comprovació:</p><ol><li>Localitzar els elements d'interacció existents.</li> <li>Verificar que l'etiqueta corresponent identifica clarament el propòsit d'aquest element d'interacció.</li></ol>", 
        "es" : "<p>A. Nombre de la herramienta: Comprobación manual</p><p>Procedimiento de comprobación:</p><ol><li>Localizar si existen funcionalidades que puedan ser activadas mediante el movimiento del dispositivo (p.ej. avanzar entre páginas al inclinar el dispositivo).</li><li>Garantizar que existe un método alternativo que no dependa del movimiento (p.ej un botón).</li></ol><p>B. Nombre de la herramienta: Comprobación manual</p><p>Procedimiento de comprobación:</p><ol><li>Localizar los elementos de interacción existentes.</li><li>Verificar que su etiqueta correspondiente identifica de manera clara el propósito de dicho elemento de interacción.</li></ol>", 
        "en" : "<p>A. Tool name: Manual check</p><p>Check procedure:</p><ol><li>Locate if there are functionalities that can be activated by movement of the device (e.g. move between pages by tilting the device).</li><li>Ensure that there is an alternative method that does not depend on movement (e.g. a button).</li></ol> <p>B. Tool name: Manual check</p><p>Check procedure:</p><ol><li>Locate existing interaction elements.</li> <li>Verify that its corresponding tag clearly identifies the purpose of said interaction element.</li></ol>",
      },
      "category" : ["structure"]
    },
    
    { // 2.5.5.
      "criteria" : 
      {
        "ca" : "2.5.5 Mida objectiu", 
        "es" : "2.5.5 Tamaño objetivo", 
        "en" : "2.5.5 Target Size",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#target-size", 
      "level" : "AAA",
      "version" : "2.1", 
      "goal" : 
      {
        "ca" : "La mida de l'objectiu per a les entrades del punter és d'almenys 44 per 44 píxels CSS, excepte quan:<ul><li>Equivalent: l'objectiu està disponible mitjançant un enllaç o control equivalent a la mateixa pàgina que té almenys 44 per 44 píxels CSS;<li></li>En línia: l'objectiu és una oració o bloc de text;</li><li>Control de l'agent d'usuari: la mida de l'objectiu és determinada per l'agent d'usuari i l'autor no el modifica;</li><li>Essencial: una presentació particular de l'objectiu és essencial per a la informació que es transmet.</li></ul>", 
        "es" : "El tamaño del objetivo para las entradas del puntero es de al menos 44 por 44 píxeles CSS, excepto cuando:<ul><li>Equivalente: el objetivo está disponible a través de un enlace o control equivalente en la misma página que tiene al menos 44 por 44 píxeles CSS;</li><li>En línea: el objetivo está en una oración o bloque de texto;</li><li>Control del agente de usuario: el tamaño del objetivo lo determina el agente de usuario y el autor no lo modifica;</li><li>Esencial: una presentación particular del objetivo es esencial para la información que se transmite.</li></ul>", 
        "en" : "The size of the target for pointer inputs is at least 44 by 44 CSS pixels except when:<ul><li>Equivalent : The target is available through an equivalent link or control on the same page that is at least 44 by 44 CSS pixels;</li><li>Inline : The target is in a sentence or block of text;</li><li>User Agent Control : The size of the target is determined by the user agent and is not modified by the author;</li><li>Essential : A particular presentation of the target is essential to the information being conveyed.</li></ul>",
      },
      "intent" : 
      {
        "ca" : "", 
        "es" : "", 
        "en" : "The intent of this success criteria is to ensure that target sizes are large enough for users to easily activate them, even if the user is accessing content on a small handheld touch screen device, has limited dexterity, or has trouble activating small targets for other reasons. For instance, mice and similar pointing devices can be hard to use for these users, and a larger target will help them activate the target.",
      },
      "benefits" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "Users who use a mobile device where touch screen is the primary mode of interaction;#Users with mobility impairments such as hand tremors;#Users who use a mobile device in environments where they are exposed to shaking such as public transportation;#Users who have difficulty with fine motor movements;#Users who access a device using one hand;#Users with large fingers, or who are operating the device with only a part of their finger or knuckle;#Users who have low vision may better see the target.",
      },
      "examples" : "",
      "techniques" : "",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },

    { // 2.5.6.
      "criteria" : 
      {
        "ca" : "2.5.6 Mecanismes d'entrada concurrents", 
        "es" : "2.5.6 Mecanismos de entrada concurrentes", 
        "en" : "2.5.6 Concurrent Input Mechanisms",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#concurrent-input-mechanisms", 
      "level" : "AAA",
      "version" : "2.1", 
      "goal" : 
      {
        "ca" : "El contingut web no restringeix l'ús de les modalitats d'entrada disponibles a una plataforma, excepte quan la restricció sigui essencial, necessària per garantir la seguretat del contingut o necessària per respectar la configuració de l'usuari.", 
        "es" : "El contenido web no restringe el uso de las modalidades de entrada disponibles en una plataforma, excepto cuando la restricción sea esencial, necesaria para garantizar la seguridad del contenido o necesaria para respetar la configuración del usuario.", 
        "en" : "Web content does not restrict use of input modalities available on a platform except where the restriction is essential, required to ensure the security of the content, or required to respect user settings.",
      },
      "intent" : 
      {
        "ca" : "", 
        "es" : "", 
        "en" : "The intent of this Success Criterion is to ensure that people can use and switch between different modes of input when interacting with web content. Users may employ a variety of input mechanisms when interacting with web content. These may be a combination of mechanisms such as a keyboard or keyboard-like interfaces and pointer devices like a mouse, stylus or touchscreen.",
      },
      "benefits" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "Users can interact with web content with whichever input mechanism is preferred and available to them.#Users may switch between input mechanisms when they desire or the circumstances require it.#Users are allowed to add and remove input mechanisms at any point, where supported by the operating system.",
      },
      "examples" : "",
      "techniques" : "",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },
    
    { // 2.5.7.
      "criteria" : 
      {
        "ca" : "2.5.7 Moviments d'arrossegament", 
        "es" : "2.5.7 Movimientos de arrastre", 
        "en" : "2.5.7 Dragging Movements",
      }, 
      "link" : "https://www.w3.org/TR/WCAG22/#dragging-movements", 
      "level" : "AA",
      "version" : "2.2", 
      "goal" : 
      {
        "ca" : "Tota la funcionalitat que utilitza un moviment d'arrossegament per a l'operació es pot aconseguir amb un sol punter sense arrossegar, tret que arrossegar sigui essencial.", 
        "es" : "Toda la funcionalidad que utiliza un movimiento de arrastre para la operación se puede lograr con un solo puntero sin arrastrar, a menos que arrastrar sea esencial.", 
        "en" : "All functionality that uses a dragging movement for operation can be achieved by a single pointer without dragging, unless dragging is essential.",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest criteri d'èxit és garantir que la funcionalitat que utilitza un moviment d'arrossegament (p. ex., controls lliscants, interfícies d'arrossegar i deixar anar) tingui un altre mode de funcionament d'un punter únic sense necessitat de la destresa necessària per arrossegar elements.</p><p>Algunes persones no poden realitzar moviments d'arrossegament d'una manera precisa. Altres utilitzen un dispositiu d'entrada especialitzat o adaptat, com ara un punter de cap, un sistema de mira o un emulador de ratolí controlat per veu, que fa que l'arrossegament sigui complicat, propens a errors o totalment impossible.</p><p>Quan s'implementa una interfície. La funcionalitat que utilitza els moviments d'arrossegament, els usuaris realitzen quatre accions discretes:</p><ol><li>Toqueu o feu clic per establir un punt de partida i, a continuació,</li><li>Manteniu premut aquest contacte mentre...</li><li>Realitzar una reposició del punter, abans de...</li><li>Alliberar el punter al punt final.</li></ol><p>No tots els usuaris poden mantenir premut amb precisió. aquest contacte alhora que reposiciona el punter. S'ha de proporcionar un mètode alternatiu perquè els usuaris amb problemes de mobilitat que utilitzen un punter (ratolí, bolígraf o contacte tàctil) puguin utilitzar la funcionalitat.</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es garantizar que la funcionalidad que utiliza un movimiento de arrastre (por ejemplo, controles deslizantes, interfaces de arrastrar y soltar) tenga otro modo de operación de puntero único sin la necesidad de la destreza necesaria para arrastrar elementos.</p><p>Algunas personas no pueden realizar movimientos de arrastre de manera precisa. Otros usan un dispositivo de entrada especializado o adaptado, como un puntero de cabeza, un sistema de mirada o un emulador de mouse controlado por voz, lo que hace que arrastrar sea engorroso, propenso a errores o completamente imposible.</p><p>Cuando una interfaz implementa funcionalidad que usa movimientos de arrastre, los usuarios realizan cuatro acciones discretas:</p><ol><li>Toque o haga clic para establecer un punto de inicio, luego</li><li>Presione y mantenga presionado ese contacto mientras...</li><li>Realizando un reposicionamiento del puntero, antes de...</li><li>Soltar el puntero en el punto final.</li></ol><p>No todos los usuarios pueden mantener presionado con precisión ese contacto mientras también reposiciona el puntero. Se debe proporcionar un método alternativo para que los usuarios con problemas de movilidad que usan un puntero (mouse, bolígrafo o contacto táctil) puedan usar la funcionalidad.</p>", 
        "en" : "<p>The intent of this Success Criterion is to ensure functionality that uses a dragging movement (e.g., sliders, drag-and-drop interfaces) has another single pointer mode of operation without the need for the dexterity required to drag elements.</p><p>Some people cannot perform dragging motions in a precise manner. Others use a specialized or adapted input device such as a head pointer, eye-gaze system, or speech-controlled mouse emulator, which makes dragging cumbersome, error-prone, or outright impossible.</p><p>When an interface implements functionality that uses dragging motions, users perform four discrete actions:</p><ol><li>Tap or click to establish a starting point, then</li><li>Press and hold that contact while...</li><li>Performing a respositioning of the pointer, before...</li><li>Releasing the pointer at the end point.</li></ol><p>Not all users can accurately press and hold that contact while also repositioning the pointer. An alternative method must be provided so that users with mobility impairments who use a pointer (mouse, pen, or touch contact) can use the functionality.</p>",
      },
      "benefits" :
      {
        "ca" : "Els usuaris que lluiten amb la realització de moviments d'arrossegament encara poden utilitzar una interfície amb una interfície de punter.", 
        "es" : "Los usuarios que tienen dificultades para realizar movimientos de arrastre aún pueden operar una interfaz con una interfaz de puntero.", 
        "en" : "Users who struggle with performing dragging motions can still operate an interface with a pointer interface.",
      },
      "examples" : "https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },

    { // 2.5.8.
      "criteria" : 
      {
        "ca" : "2.5.8 Grandària de l'objectiu (mínim)", 
        "es" : "2.5.8 Tamaño del objetivo (mínimo)", 
        "en" : "2.5.8 Target Size (Minimum)",
      }, 
      "link" : "https://www.w3.org/TR/WCAG22/#target-size-minimum", 
      "level" : "AA",
      "version" : "2.2", 
      "goal" : 
      {
        "ca" : "Els objectius tenen una àrea d'almenys 24 per 24 píxels CSS, excepte on:<ul><li>Espaiat: el desplaçament de l'objectiu és d'almenys 24 píxels CSS per a cada objectiu adjacent;</li><li>En línia: l'objectiu és una oració o bloc de text;</li><li>Essencial: una presentació particular de l'objectiu és essencial per a la informació que es transmet.</li></ul>", 
        "es" : "Los objetivos tienen un área de al menos 24 por 24 píxeles CSS, excepto donde:<ul><li>Espaciado: el desplazamiento del objetivo es de al menos 24 píxeles CSS para cada objetivo adyacente;</li><li>En línea: el objetivo está en una oración o bloque de texto;</li><li>Esencial: una presentación particular del objetivo es esencial para la información que se transmite.</li></ul>", 
        "en" : "Targets have an area of at least 24 by 24 CSS pixels, except where:<ul><li>Spacing : The target offset is at least 24 CSS pixels to every adjacent target;</li><li>Inline : The target is in a sentence or block of text;</li><li>Essential : A particular presentation of the target is essential to the information being conveyed.</li></ul>",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest criteri d'èxit és ajudar a garantir que els objectius es puguin activar fàcilment sense activar accidentalment un objectiu adjacent. Quan els objectius són petits, és difícil que els usuaris amb tremolors a les mans i aquells que tenen dificultats amb el moviment motor fi els activin amb precisió. Proporcionar una mida suficient, o un espai suficient entre els objectius, reduirà la probabilitat d'activar accidentalment un control incorrecte.</p><p>Aquest Criteri d'èxit defineix una mida mínima; fer servir mides més grans ajudarà a moltes persones a utilitzar objectius més fàcilment. Es recomana complir la mida de l'objectiu 2.5.5 (millorada) sempre que sigui possible.</p><p>El requisit és que els objectius tinguin una mida mínima de 24 per 24 píxels CSS. Hi ha tres excepcions:</p><ol><li>Si un objectiu és més petit que 24 per 24 píxels CSS però té un espai suficient, passa. L'espaiat és suficient si el desplaçament entre objectius és d'almenys 24 píxels CSS. La compensació de l'objectiu mesura la distància entre objectius, mesurada des del punt més llunyà d'un objectiu fins al punt més proper de l'objectiu adjacent, i s'avalua per a cadascun dels objectius adjacents. Quina vora de l'objectiu és més llunyana depèn de la posició relativa de l'objectiu veí. Per exemple, si es té en compte la distància per sobre de l'objectiu, la vora més llunyana seria la part inferior de l'objectiu i el desplaçament es mesuraria des d'aquesta vora inferior fins a la vora inferior de l'objectiu veí superior. Tingueu en compte que quan els objectius difereixen en mida o forma, el desplaçament entre els objectius també pot ser diferent. La distància de desplaçament ha de ser com a mínim de 24 píxels CSS en tots els casos per caure en aquesta excepció.</li><li>El criteri d'èxit no s'aplica als objectius en línia en blocs de text, per exemple, enllaços de text dins d'una frase o paràgraf. . Aquesta excepció està permesa perquè el reflux de text basat en la mida de la finestra gràfica fa impossible que els autors anticipin on es poden situar els enllaços entre si. Quan s'incrusten diversos enllaços en blocs de text amb mides de text més petites, mantenir un desplaçament de 24 píxels CSS entre enllaços de línies de text adjacents requeriria una alçada de línia gran que pot ser indesitjable en molts contextos de disseny. A més, les notes a peu de pàgina numèriques en línia habituals en textos científics poden tenir de vegades una amplada molt per sota dels 24 píxels CSS. Nota: les llistes apilades d'enllaços, com a les estructures de navegació, no compten com a enllaços en línia. Els autors poden anticipar la posició relativa d'aquests enllaços i adaptar-se a un espai suficient entre els objectius.</li><li>Si l'espai entre els objectius és essencial per a la informació que es transmet, s'aplica l'excepció 'Essencial'. Per exemple, en els mapes digitals, la posició de les agulles és anàloga a la posició dels llocs que es mostren al mapa. Si hi ha molts pins junts, el desplaçament entre els pins i els pins veïns sovint serà inferior a 24 píxels CSS. És essencial mostrar les agulles a la ubicació correcta del mapa, per tant s'aplica l'excepció essencial.</li><li>Algunes jurisdiccions exigeixen legalment que els formularis en línia reprodueixin formularis en paper, la qual cosa pot imposar restriccions a la mida dels objectius. En aquests casos, s'aplica l'excepció 'Legal'.</li></ol><p>[...]</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es ayudar a garantizar que los objetivos se puedan activar fácilmente sin activar accidentalmente un objetivo adyacente. Cuando los objetivos son pequeños, es difícil para los usuarios con temblores en las manos y aquellos que tienen dificultades con el movimiento motor fino para activarlos con precisión. Proporcionar un tamaño suficiente o un espacio suficiente entre los objetivos reducirá la probabilidad de activar accidentalmente el control incorrecto.</p><p>Este Criterio de Conformidad define un tamaño mínimo; el uso de tamaños más grandes ayudará a muchas personas a usar objetivos más fácilmente. Se recomienda cumplir con 2.5.5 Tamaño objetivo (mejorado) siempre que sea posible.</p><p>El requisito es que los objetivos tengan un tamaño mínimo de 24 x 24 píxeles CSS. Hay tres excepciones:</p><ol><li>Si un objetivo es más pequeño que 24 por 24 píxeles CSS pero tiene suficiente espacio, pasa. El espaciado es suficiente si el desplazamiento entre objetivos es de al menos 24 píxeles CSS. El desplazamiento del objetivo mide la distancia entre los objetivos, medida desde el punto más lejano de un objetivo hasta el punto más cercano del objetivo adyacente, y se evalúa para cada uno de los objetivos adyacentes. Qué borde del objetivo está más alejado depende de la posición relativa del objetivo vecino. Por ejemplo, si considera la distancia por encima del objetivo, el borde más alejado sería la parte inferior del objetivo, y el desplazamiento se mediría desde este borde inferior hasta el borde inferior del objetivo vecino que se encuentra arriba. Tenga en cuenta que cuando los objetivos difieren en tamaño o forma, el desplazamiento entre objetivos también puede diferir. La distancia de compensación debe ser de al menos 24 píxeles CSS en todos los casos para estar dentro de esta excepción.</li><li>El Criterio de Conformidad no se aplica a objetivos en línea en bloques de texto, por ejemplo, enlaces de texto dentro de una oración o párrafo . Esta excepción está permitida porque el reflujo de texto basado en el tamaño de la ventana gráfica hace imposible que los autores anticipen dónde se pueden colocar los enlaces entre sí. Cuando se incrustan múltiples enlaces en bloques de texto en tamaños de texto más pequeños, mantener un desplazamiento de 24 píxeles CSS entre enlaces en líneas de texto adyacentes requeriría una gran altura de línea que puede ser indeseable en muchos contextos de diseño. Además, las notas a pie de página numéricas en línea comunes en los textos científicos a veces pueden tener un ancho muy por debajo de los 24 píxeles CSS. Nota: Las listas apiladas de enlaces, como en las estructuras de navegación, no cuentan como enlaces en línea. Los autores pueden anticipar la posición relativa de estos enlaces y acomodar suficiente espacio entre los objetivos.</li><li>Si el espacio entre los objetivos es esencial para la información que se transmite, se aplica la excepción 'Esencial'. Por ejemplo, en los mapas digitales, la posición de los pines es análoga a la posición de los lugares que se muestran en el mapa. Si hay muchos pines juntos, el desplazamiento entre los pines y los pines vecinos a menudo será inferior a 24 píxeles CSS. Es esencial mostrar los pines en la ubicación correcta del mapa, por lo tanto, se aplica la excepción Esencial.</li><li>Algunas jurisdicciones exigen legalmente formularios en línea para replicar formularios en papel, lo que puede imponer restricciones en el tamaño de los objetivos. En estos casos, se aplica la excepción 'Legal'.</li></ol><p>[...]</p>", 
        "en" : "<p>The intent of this Success Criterion is to help ensure targets can be easily activated without accidentally activating an adjacent target. When targets are small, it is difficult for users with hand tremors and those who have difficulty with fine motor movement to activate them accurately. Providing sufficient size, or sufficient spacing between targets, will reduce the likelihood of accidentally activating the wrong control.</p><p>This Success Criterion defines a minimum size; using larger sizes will help many people use targets more easily. Meeting 2.5.5 Target Size (Enhanced) is recommended whenever possible.</p><p>The requirement is for targets to be at least 24 by 24 CSS pixels in size. There are three exceptions:</p><ol><li>If a target is smaller than 24 by 24 CSS pixels but has sufficient spacing, it passes. The spacing is sufficient if the offset between targets is at least 24 CSS pixels. Target offset measures the distance between targets, measured from the farthest point of one target to the nearest point of the adjacent target, and is assessed for each of the adjacent targets. What edge of the target is farthest depends on the relative position of the neighboring target. For example, if considering distance above the target, the farthest edge would be the bottom of the target, and the offset would be measured from this bottom edge to the bottom edge of the neighboring target above. Note that where the targets differ in size or shape, the offset between targets may also differ. The offset distance must be at least 24 CSS pixels in all cases to fall under this exception.</li><li>The Success Criterion does not apply to inline targets in blocks of text - for example, text links inside a sentence or paragraph. This exception is allowed because text reflow based on viewport size makes it impossible for authors to anticipate where links may be positioned relative to one another. When multiple links are embedded in blocks of texts in smaller text sizes, maintaining a 24 CSS pixels offset between links in adjacent lines of text would require a large line height which can be undesirable in many design contexts. Also, inline numeric footnotes common in scientific texts may sometimes have a width well below 24 CSS pixels. Note: Stacked lists of links, as in navigation structures, do not count as inline links. Authors can anticipate the relative position of these links and accommodate sufficient target spacing.</li><li>If the spacing of the targets is essential to the information being conveyed, the 'Essential' exception applies. For example, in digital maps, the position of pins is analogous to the position of places shown on the map. If there are many pins close together, the offset between pins and neighboring pins will often be below 24 CSS pixels. It is essential to show the pins at the correct map location, therefore the Essential exception applies.</li><li>Some jurisdictions legally require online forms to replicate paper forms, which can impose constraints on the size of targets. In these cases, the 'Legal' exception applies.</li></ol><p>[...]</p>",
      },
      "benefits" :
      {
        "ca" : "<p>Tenir objectius amb una mida suficient (o, en cas contrari, un espai d'objectius suficient) pot ajudar tots els usuaris que tinguin dificultats per orientar-se amb seguretat o fer servir petits controls. Els usuaris que es beneficien inclouen, entre d'altres:</p><ul><li>Les persones que utilitzen un dispositiu mòbil on la pantalla tàctil és el mode d'interacció principal;</li><li>Les persones que utilitzen el ratolí, el llapis llapis o d'entrada tàctil que tinguin problemes de mobilitat, com ara tremolors a les mans;</li><li>Persones que utilitzen un dispositiu en entorns on estan exposats a sacsejades, com ara el transport públic;</li><li>Usuaris de ratolí que tenen dificultats amb la multa moviments motors;</li><li>Persones que accedeixen a un dispositiu amb una sola mà;</li><li>Persones amb dits grans o que operen el dispositiu només amb una part del dit o de l'artilleria.</li ></ul>", 
        "es" : "<p>Tener objetivos con el tamaño suficiente, o en su defecto, suficiente espacio entre objetivos, puede ayudar a todos los usuarios que pueden tener dificultades para apuntar u operar controles pequeños con confianza. Los usuarios que se benefician incluyen, pero no se limitan a:</p><ul><li>Personas que usan un dispositivo móvil donde la pantalla táctil es el modo principal de interacción;</li><li>Personas que usan mouse, lápiz óptico o entrada táctil que tienen problemas de movilidad, como temblores en las manos;</li><li>Personas que usan un dispositivo en entornos donde están expuestos a temblores, como el transporte público;</li><li>Usuarios de mouse que tienen dificultades con movimientos motores;</li><li>Personas que acceden a un dispositivo con una mano;</li><li>Personas con dedos grandes o que operan el dispositivo con solo una parte del dedo o nudillo.</li ></ul>", 
        "en" : "<p>Having targets with sufficient size - or failing that, sufficient target spacing - can help all users who may have difficulty in confidently targeting or operating small controls. Users who benefit include, but are not limited to:</p><ul><li>People who use a mobile device where the touch screen is the primary mode of interaction;</li><li>People using mouse, stylus or touch input who have mobility impairments such as hand tremors;</li><li>People using a device in environments where they are exposed to shaking such as public transportation;</li><li>Mouse users who have difficulty with fine motor movements;</li><li>People who access a device using one hand;</li><li>People with large fingers, or who are operating the device with only a part of their finger or knuckle.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },

    { // 3.1.1.
      "criteria" : 
      {
        "ca" : "3.1.1 Idioma de la pàgina", 
        "es" : "3.1.1 Idioma de la página", 
        "en" : "3.1.1 Language of Page",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#language-of-page", 
      "level" : "A",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "L'idioma humà per defecte de cada pàgina web es pot determinar mitjançant la programació.", 
        "es" : "El idioma humano predeterminado de cada página web se puede determinar mediante programación.", 
        "en" : "The default human language of each Web page can be programmatically determined.",
      },
      "intent" : 
      {
        "ca" : "", 
        "es" : "", 
        "en" : "The intent of this Success Criterion is to ensure that content developers provide information in the Web page that user agents need to present text and other linguistic content correctly. Both assistive technologies and conventional user agents can render text more accurately when the language of the Web page is identified. Screen readers can load the correct pronunciation rules. Visual browsers can display characters and scripts correctly. Media players can show captions correctly. As a result, users with disabilities will be better able to understand the content.",
      },
      "benefits" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "people who use screen readers or other technologies that convert text into synthetic speech;#people who find it difficult to read written material with fluency and accuracy, such as recognizing characters and alphabets or decoding words;#people with certain cognitive, language and learning disabilities who use text-to-speech software#people who rely on captions for synchronized media.",
      },
      "examples" : "",
      "techniques" : "",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["structure"]
    },
    
    { // 3.1.2.
      "criteria" : 
      {
        "ca" : "3.1.2 Idioma de les parts", 
        "es" : "3.1.2 Idioma de las partes", 
        "en" : "3.1.2 Language of Parts",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#language-of-parts", 
      "level" : "AA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "El llenguatge humà de cada passatge o frase en el contingut es pot determinar programàticament a excepció dels noms propis, termes tècnics, paraules de llenguatge indeterminat i paraules o frases que han esdevingut part de la llengua vernacla del text circumdant immediat.", 
        "es" : "El lenguaje humano de cada pasaje o frase en el contenido se puede determinar programáticamente a excepción de los nombres propios, términos técnicos, palabras de lenguaje indeterminado y palabras o frases que se han convertido en parte de la lengua vernácula del texto circundante inmediato.", 
        "en" : "The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text.",
      },
      "intent" : 
      {
        "ca" : "", 
        "es" : "", 
        "en" : "The intent of this Success Criterion is to ensure that user agents can correctly present content written in multiple languages. This makes it possible for user agents and assistive technologies to present content according to the presentation and pronunciation rules for that language. This applies to graphical browsers as well as screen readers, braille displays, and other voice browsers.",
      },
      "benefits" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "People who use screen readers or other technologies that convert text into synthetic speech;#people who find it difficult to read written material with fluency and accuracy, such as recognizing characters and alphabets, decoding words, and understanding words and phrases;#people with certain cognitive, language and learning disabilities who use text-to-speech software;#people who rely on captions to recognize language changes in the soundtrack of synchronized media content.",
      },
      "examples" : "",
      "techniques" : "",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["structure"]
    },
    
    { // 3.1.3.
      "criteria" : 
      {
        "ca" : "3.1.3 Paraules inusuals", 
        "es" : "3.1.3 Palabras inusuales", 
        "en" : "3.1.3 Unusual Words",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#unusual-words", 
      "level" : "AAA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Hi ha un mecanisme disponible per identificar definicions específiques de paraules o frases utilitzades de manera inusual o restringida, inclosos modismes i argot.", 
        "es" : "Hay un mecanismo disponible para identificar definiciones específicas de palabras o frases utilizadas de manera inusual o restringida, incluidos modismos y jerga.", 
        "en" : "A mechanism is available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon.",
      },
      "intent" : 
      {
        "ca" : "", 
        "es" : "", 
        "en" : "Certain disabilities make it difficult to understand nonliteral word usage and specialized words or usage. Certain disabilities make it difficult to understand figurative language or specialized usage. Providing such mechanisms is vital for these audiences. Specialized information intended for non-specialist readers is encouraged to satisfy this Success Criterion, even when claiming only Single-A or Double-A conformance.",
      },
      "benefits" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "This Success Criterion may help people with cognitive, language and learning disabilities who:#have difficulty decoding words#have difficulty understanding words and phrases#have difficulty using context to aid understanding#It would also help people with visual disabilities who:#lose context when zoomed-in with a screen magnifier.",
      },
      "examples" : "",
      "techniques" : "",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },
    
    { // 3.1.4.
      "criteria" : 
      {
        "ca" : "3.1.4 Abreviatures", 
        "es" : "3.1.4 Abreviaturas", 
        "en" : "3.1.4 Abbreviations",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#abbreviations", 
      "level" : "AAA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Hi ha disponible un mecanisme per identificar la forma expandida o el significat de les abreviatures.", 
        "es" : "Se encuentra disponible un mecanismo para identificar la forma expandida o el significado de las abreviaturas.", 
        "en" : "A mechanism for identifying the expanded form or meaning of abbreviations is available.",
      },
      "intent" : 
      {
        "ca" : "", 
        "es" : "", 
        "en" : "The intent of this Success Criterion is to ensure that users can access the expanded form of abbreviations.",
      },
      "benefits" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "Have difficulty decoding words;#rely on screen magnifiers (magnification may reduce contextual cues);#have limited memory;#have difficulty using context to aid understanding.",
      },
      "examples" : "",
      "techniques" : "",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },
    
    { // 3.1.5.
      "criteria" : 
      {
        "ca" : "3.1.5 Nivell de lectura", 
        "es" : "3.1.5 Nivel de lectura", 
        "en" : "3.1.5 Reading Level",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#reading-level", 
      "level" : "AAA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Quan el text requereix una capacitat de lectura més avançada que el nivell d'educació secundària inferior després d'eliminar els noms i els títols propis, hi ha disponible contingut complementari o una versió que no requereix una capacitat de lectura més avançada que el nivell d'educació secundària inferior.", 
        "es" : "Cuando el texto requiere una capacidad de lectura más avanzada que el nivel de educación secundaria inferior después de eliminar los nombres y títulos propios, hay disponible contenido complementario o una versión que no requiere una capacidad de lectura más avanzada que el nivel de educación secundaria inferior.", 
        "en" : "When text requires reading ability more advanced than the lower secondary education level after removal of proper names and titles, supplemental content, or a version that does not require reading ability more advanced than the lower secondary education level, is available.",
      },
      "intent" : 
      {
        "ca" : "", 
        "es" : "", 
        "en" : "Content should be written as clearly and simply as possible. The intent of this Success Criterion is:#to ensure that additional content is available to aid the understanding of difficult or complex text;#to establish a testable measure indicating when such additional content is required.",
      },
      "benefits" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "Have difficulty comprehending and interpreting written language (e.g., articles, instructions, or newspapers in text or braille), for the purpose of obtaining general knowledge or specific information",
      },
      "examples" : "",
      "techniques" : "",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },
    
    { // 3.1.6.
      "criteria" : 
      {
        "ca" : "3.1.6 Pronunciació", 
        "es" : "3.1.6 Pronunciación", 
        "en" : "3.1.6 Pronunciation",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#pronunciation", 
      "level" : "AAA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Està disponible un mecanisme per identificar la pronunciació específica de paraules on el significat de les paraules, en context, és ambigu sense conèixer-ne la pronunciació.", 
        "es" : "Está disponible un mecanismo para identificar la pronunciación específica de palabras donde el significado de las palabras, en contexto, es ambiguo sin conocer la pronunciación.", 
        "en" : "A mechanism is available for identifying specific pronunciation of words where meaning of the words, in context, is ambiguous without knowing the pronunciation.",
      },
      "intent" : 
      {
        "ca" : "", 
        "es" : "", 
        "en" : "The intent of this Success Criterion is to help people who are blind, people who have low vision, and people with reading disabilities to understand content in cases where meaning depends on pronunciation. Often words or characters have different meanings, each with its own pronunciation. The meaning of such words or characters can usually be determined from the context of the sentence. However, for more complex or ambiguous sentences, or for some languages, the meaning of the word cannot be easily determined or determined at all without knowing the pronunciation. When the sentence is read aloud and the screen reader reads the word using the wrong pronunciation, it can be even more difficult to understand than when read visually. When words are ambiguous or indeterminate unless the pronunciation is known, then providing some means of determining the pronunciation is needed.",
      },
      "benefits" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "Have difficulty decoding words#have difficulty using context to aid understanding#use technologies that read the words aloud.",
      },
      "examples" : "",
      "techniques" : "",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },
    
    { // 3.2.1.
      "criteria" : 
      {
        "ca" : "3.2.1 En Focus", 
        "es" : "3.2.1 En Focus", 
        "en" : "3.2.1 On Focus",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#on-focus", 
      "level" : "A",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Quan qualsevol component de la interfície dusuari rep el focus, no inicia un canvi de context.", 
        "es" : "Cuando cualquier componente de la interfaz de usuario recibe el foco, no inicia un cambio de contexto.", 
        "en" : "When any user interface component receives focus, it does not initiate a change of context.",
      },
      "intent" : 
      {
        "ca" : "", 
        "es" : "", 
        "en" : "The intent of this Success Criterion is to ensure that functionality is predictable as visitors navigate their way through a document. Any component that is able to trigger an event when it receives focus must not change the context. Examples of changing context when a component receives focus include, but are not limited to:#forms submitted automatically when a component receives focus;#  new windows launched when a component receives focus;#focus is changed to another component when that component receives focus.",
      },
      "benefits" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "This Success Criterion helps people with visual disabilities, cognitive limitations, and motor impairments by reducing the chance that a change of context will occur unexpectedly.",
      },
      "examples" : "",
      "techniques" : "",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["forms-and-UI"]
    },
    
    { // 3.2.2.
      "criteria" : 
      {
        "ca" : "3.2.2 A l'entrada", 
        "es" : "3.2.2 En la entrada", 
        "en" : "3.2.2 On Input",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#on-input", 
      "level" : "A",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Canviar la configuració de qualsevol component de la interfície d'usuari no provoca automàticament un canvi de context si no s'ha informat l'usuari sobre el comportament abans d'utilitzar el component.", 
        "es" : "Cambiar la configuración de cualquier componente de la interfaz de usuario no provoca automáticamente un cambio de contexto a menos que se haya informado al usuario sobre el comportamiento antes de usar el componente.", 
        "en" : "Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.",
      },
      "intent" : 
      {
        "ca" : "", 
        "es" : "", 
        "en" : "This Success Criterion helps people with visual disabilities, cognitive limitations, and motor impairments by reducing the chance that a change of context will occur unexpectedly.",
      },
      "benefits" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "This Success Criterion helps users with disabilities by making interactive content more predictable. Unexpected changes of context can be so disorienting for users with visual disabilities or cognitive limitations that they are unable to use the content.# Individuals who are unable to detect changes of context are less likely to become disoriented while navigating a site. For example:#  Individuals who are blind or have low vision may have difficulty knowing when a visual context change has occurred, such as a new window popping up. In this case, warning users of context changes in advance minimizes confusion when the user discovers that the back button no longer behaves as expected.#Some individuals with low vision, with reading and intellectual disabilities, and others who have difficulty interpreting visual cues may benefit from additional cues in order to detect changes of context.",
      },
      "examples" : "",
      "techniques" : "",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["forms-and-UI"]
    },
    
    { // 3.2.3.
      "criteria" : 
      {
        "ca" : "3.2.3 Navegació consistent", 
        "es" : "3.2.3 Navegación consistente", 
        "en" : "3.2.3 Consistent Navigation",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#consistent-navigation", 
      "level" : "AA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Els mecanismes de navegació que es repeteixen a diverses pàgines web dins d'un conjunt de pàgines web ocorren en el mateix ordre relatiu cada vegada que es repeteixen, tret que l'usuari iniciï un canvi.", 
        "es" : "Los mecanismos de navegación que se repiten en varias páginas web dentro de un conjunto de páginas web ocurren en el mismo orden relativo cada vez que se repiten, a menos que el usuario inicie un cambio.", 
        "en" : "Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.",
      },
      "intent" : 
      {
        "ca" : "", 
        "es" : "", 
        "en" : "The intent of this Success Criterion is to encourage the use of consistent presentation and layout for users who interact with repeated content within a set of Web pages and need to locate specific information or functionality more than once. Individuals with low vision who use screen magnification to display a small portion of the screen at a time often use visual cues and page boundaries to quickly locate repeated content. Presenting repeated content in the same order is also important for visual users who use spatial memory or visual cues within the design to locate repeated content.",
      },
      "benefits" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "Ensuring that repeated components occur in the same order on each page of a site helps users become comfortable that they will able to predict where they can find things on each page. This helps users with cognitive limitations, users with low vision, users with intellectual disabilities, and also those who are blind.",
      },
      "examples" : "",
      "techniques" : "",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["structure"]
    },
    
    { // 3.2.4.
      "criteria" : 
      {
        "ca" : "3.2.4 Identificació consistent", 
        "es" : "3.2.4 Identificación consistente", 
        "en" : "3.2.4 Consistent Identification",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#consistent-identification", 
      "level" : "AA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Els components que tenen la mateixa funcionalitat dins un conjunt de pàgines web sidentifiquen de forma coherent.", 
        "es" : "Los componentes que tienen la misma funcionalidad dentro de un conjunto de páginas web se identifican de forma coherente.", 
        "en" : "Components that have the same functionality within a set of Web pages are identified consistently.",
      },
      "intent" : 
      {
        "ca" : "", 
        "es" : "", 
        "en" : "The intent of this Success Criterion is to ensure consistent identification of functional components that appear repeatedly within a set of Web pages. A strategy that people who use screen readers use when operating a Web site is to rely heavily on their familiarity with functions that may appear on different Web pages. If identical functions have different labels (or, more generally, a different accessible name) on different Web pages, the site will be considerably more difficult to use. It may also be confusing and increase the cognitive load for people with cognitive limitations. Therefore, consistent labeling will help.",
        "en" : "",
      },
      "benefits" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "People who learn functionality on one page on a site can find the desired functions on other pages if they are present.#When non-text content is used in a consistent way to identify components with the same functionality, people with difficulty reading text or detecting text alternatives can interact with the Web without depending on text alternatives.#People who depend on text alternatives can have a more predictable experience. They can also search for the component if it has a consistent label on different pages.",
      },
      "examples" : "",
      "techniques" : "",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["structure"]
    },
    
    { // 3.2.5.
      "criteria" : 
      {
        "ca" : "3.2.5 Canvi a comanda", 
        "es" : "3.2.5 Cambio a pedido", 
        "en" : "3.2.5 Change on Request",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#change-on-request", 
      "level" : "AAA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Els canvis de context s'inicien només per sol·licitud de l'usuari o hi ha un mecanisme disponible per desactivar aquests canvis.", 
        "es" : "Los cambios de contexto se inician solo por solicitud del usuario o hay un mecanismo disponible para desactivar dichos cambios.", 
        "en" : "Changes of context are initiated only by user request or a mechanism is available to turn off such changes.",
      },
      "intent" : 
      {
        "ca" : "", 
        "es" : "", 
        "en" : "The intent of this Success Criterion is to encourage design of Web content that gives users full control of changes of context. This Success Criterion aims to eliminate potential confusion that may be caused by unexpected changes of context such as automatic launching of new windows, automatic submission of forms after selecting an item from a list, etcetera. Such unexpected changes of context may cause difficulties for people with motor impairments, people with low vision, people who are blind, and people with certain cognitive limitations.",
      },
      "benefits" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "Individuals who are unable to detect changes of context or may not realize that the context has changed are less likely to become disoriented while navigating a site. For example:#individuals who are blind or have low vision may have difficulty knowing when a visual context change has occurred, such as a new window popping up. In this case, warning users of context changes in advance minimizes confusion when the user discovers that the back button no longer behaves as expected.#Some individuals with low vision, with reading and intellectual disabilities, and who have difficulty interpreting visual cues may benefit from additional cues in order to detect changes of context.#People with certain cognitive limitations do not get confused if automatic redirects are performed by the Web server instead of the browser.",
      },
      "examples" : "",
      "techniques" : "",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },
    
    { // 3.2.6.
      "criteria" : 
      {
        "ca" : "3.2.6. Ajuda consistent", 
        "es" : "3.2.6 Ayuda consistente", 
        "en" : "3.2.6 Consisten Help",
      }, 
      "link" : "https://www.w3.org/TR/WCAG22/#consistent-help", 
      "level" : "A",
      "version" : "2.2", 
      "goal" : 
      {
        "ca" : "Per a cada pàgina web dins d'un conjunt de pàgines web que proporciona una o més de les maneres següents de trobar ajuda, l'accés a almenys una forma d'ajuda s'inclou en el mateix ordre relatiu a cada pàgina:<ul><li>Detalls de contacte humà;</li><li>Mecanisme de contacte humà;</li><li>Opció d'autoajuda;</li><li>Un mecanisme de contacte totalment automatitzat.</li></ul>", 
        "es" : "	Para cada página web dentro de un conjunto de páginas web que proporciona una o más de las siguientes formas de encontrar ayuda, el acceso a al menos una forma de ayuda se incluye en el mismo orden relativo en cada página:<ul><li>Detalles de contacto humano;</li><li>Mecanismo de contacto humano;</li><li>Opción de autoayuda;</li><li>Un mecanismo de contacto totalmente automatizado.</li></ul>", 
        "en" : "For each web page within a set of web pages that provides one or more of the following ways of finding help, access to at least one form of help is included in the same relative order on each page:<ul><li>Human contact details;</li><li>Human contact mechanism;</li><li>Self-help option;</li><li>A fully automated contact mechanism.</li></ul>",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest criteri d'èxit és garantir que els usuaris puguin trobar ajuda per completar tasques en un lloc web, quan estigui disponible. Això és diferent de l'ajuda a nivell d'interfície, com ara l'ajuda contextual, funcions com els correctors ortogràfics i el text instructiu en un formulari.</p><p>Ubicar el mecanisme d'ajuda en una ubicació coherent entre les pàgines facilita la cerca dels usuaris. això. Per exemple, quan un mecanisme o enllaç es troba a la capçalera d'una pàgina web, serà més fàcil trobar si es troba a la capçalera d'altres pàgines. El mecanisme d'ajuda, com ara un número de telèfon de contacte, es pot proporcionar directament a la pàgina, però també pot ser un enllaç directe a una pàgina de contacte diferent. Independentment de quin enfocament s'utilitzi, el mecanisme s'ha de localitzar en el mateix ordre relatiu a cada pàgina dins del conjunt de pàgines.</p><p>Quan es prova aquest SC, és l'element d'ajuda el que és relatiu a la resta de pàgines. el contingut. Quan es prova una pàgina, un altre contingut que estigui present al conjunt de pàgines web i que estigui abans de l'element d'ajuda hauria d'estar abans de l'element d'ajuda d'aquesta pàgina. Els elements que estan després de l'element d'ajuda d'altres pàgines haurien d'anar després de l'element d'ajuda d'aquesta pàgina.</p><p>La ubicació en una finestra gràfica més petita pot ser diferent que en una finestra gràfica més gran, però el millor és que el mecanisme o l'enllaç és coherent en un conjunt de pàgines web. Una ubicació coherent, tant visual com programàticament, és la més utilitzable.</p><p>Quan tens problemes per completar una tasca en un lloc web (o part d'un lloc web, el que anomenem un conjunt de pàgines web), les persones amb alguns tipus de discapacitat és possible que no pugui resoldre el problema sense més ajuda. Els problemes poden incloure dificultats: omplir un formulari o trobar un document o una pàgina que proporcioni la informació necessària per completar una tasca.</p><p>Sense ajuda, alguns usuaris poden abandonar la tasca. També poden no completar correctament una tasca o poden necessitar ajuda de persones que no necessàriament mantenen la informació privada segura.</p><p>[...]</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es garantizar que los usuarios puedan encontrar ayuda para completar tareas en un sitio web, cuando esté disponible. Esto es distinto de la ayuda a nivel de interfaz, como la ayuda contextual, funciones como correctores ortográficos y texto instructivo en un formulario.</p><p>Ubicar el mecanismo de ayuda en una ubicación uniforme en todas las páginas hace que sea más fácil para los usuarios encontrar eso. Por ejemplo, cuando un mecanismo o enlace está ubicado en el encabezado de una página Web, será más fácil encontrarlo si está en el encabezado de otras páginas. El mecanismo de ayuda, como un número de teléfono de contacto, se puede proporcionar directamente en la página, pero también puede ser un enlace directo a una página de contacto diferente. Independientemente del enfoque que se utilice, el mecanismo debe ubicarse en el mismo orden relativo en cada página dentro del conjunto de páginas.</p><p>Al probar este SC, es el elemento de ayuda el que es relativo al resto de el contenido. Al probar una página, otro contenido que esté presente en el conjunto de páginas web y que esté antes del elemento de ayuda debe estar antes del elemento de ayuda en esta página. Los elementos que están después del elemento de ayuda en otras páginas deben estar después del elemento de ayuda en esta página.</p><p>La ubicación en una ventana gráfica más pequeña puede ser diferente a la de una ventana gráfica más grande, pero es mejor si el mecanismo o enlace es consistente en un conjunto de páginas web. Una ubicación consistente, tanto visual como programáticamente, es la más utilizable.</p><p>Cuando tienen problemas para completar una tarea en un sitio web (o parte de un sitio web, lo que llamamos un conjunto de páginas web), las personas con algunos tipos de discapacidades puede que no sea capaz de solucionar el problema sin más ayuda. Los problemas pueden incluir dificultades: completar un formulario o encontrar un documento o una página que proporcione la información necesaria para completar una tarea.</p><p>Sin ayuda, algunos usuarios pueden abandonar la tarea. También es posible que no completen correctamente una tarea o que necesiten la ayuda de personas que no necesariamente mantienen segura la información privada.</p><p>[...]</p>", 
        "en" : "<p>The intent of this Success Criterion is to ensure users can find help for completing tasks on a Web site, when it is available. This is distinct from interface-level help, such as contextual help, features like spell checkers, and instructional text in a form.</p><p>Locating the help mechanism in a consistent location across pages makes it easier for users to find it. For example, when a mechanism or link is located in the header of one Web page, it will be easier to find if it is in the header of other pages. The help mechanism, such as a contact phone number, may be provided directly on the page but it may also be a direct link to a different contact page. Regardless of which approach is used, the mechanism must be located in the same relative order on each page within the set of pages.</p><p>When testing this SC, it is the help item which is relative to the rest of the content. When testing a page, other content that is present across the set of web pages and is before the help item should be before the help item on this page. Items which are after the help item on other pages should be after the help item on this page.</p><p>The location in a smaller viewport may be different than in a larger viewport but it is best if the mechanism or link is consistent across a set of web pages. A consistent location, both visually and programmatically, is the most usable.</p><p>When having problems completing a task on a Web site (or part of a Web site, what we call a set of Web pages), people with some types of disabilities may not be able to work through the issue without further help. Issues could include difficulty: completing a form, or finding a document or page which provides information required to complete a task.</p><p>Without help, some users may abandon the task. They may also fail to correctly complete a task, or they may require assistance from people who do not necessarily keep private information secure.</p><p>[...]</p>",
      },
      "benefits" :
      {
        "ca" : "<ul><li>Aquest criteri d'èxit ajuda les persones que poden tenir dificultats per localitzar ajuda que no forma part de la pàgina que estan utilitzant. Assegurar-se que es poden connectar amb ajuda els permet completar la tasca.</li><li>Quan un usuari pot trobar ajuda fàcilment per a les seves preguntes específiques, té més èxit en completar les tasques.</li><li>Usuaris amb experiència cognitiva la fatiga o l'aturada cognitiva podran reservar la seva energia per a la tasca, en lloc d'utilitzar-la per trobar suport.</li><li>Permetre als usuaris (especialment aquells amb discapacitats cognitives) trobar solucions mentre expressen la seva pregunta amb la seva pròpia pregunta. Les paraules augmenta les seves possibilitats d'èxit per completar una tasca.</li></ul><p>Els mecanismes d'ajuda típics inclouen:</p><ul><li>Les dades de contacte humans com ara un número de telèfon, adreça de correu electrònic, horari. de funcionament.</li><li>Mecanisme de contacte humà, com ara un sistema de missatgeria, un client de xat, un formulari de contacte, un canal de xarxes socials.</li><li>Opció d'autoajuda, com ara una pregunta freqüent actualitzada. Preguntes, pàgina Com puc, pàgina d'assistència.</li><li>Un mecanisme de contacte totalment automatitzat, com ara un chatbot.</li></ul><p>[...]</p>", 
        "es" : "<ul><li>Este Criterio de Conformidad ayuda a las personas que pueden tener dificultades para encontrar ayuda que no forma parte de la página que están utilizando. Asegurarse de que puedan conectarse con ayuda les permite completar la tarea.</li><li>Cuando un usuario puede encontrar fácilmente ayuda para sus preguntas específicas, tiene más éxito al completar tareas.</li><li>Usuarios que experimentan la fatiga o el bloqueo cognitivo podrán reservar su energía para la tarea, en lugar de usarla para encontrar apoyo.</li><li>Permitir a los usuarios (especialmente aquellos con discapacidades cognitivas) encontrar soluciones mientras expresan su pregunta usando sus propios palabras aumenta sus posibilidades de éxito para completar una tarea.</li></ul><p>Los mecanismos de ayuda típicos incluyen:</p><ul><li>Datos de contacto humano como número de teléfono, dirección de correo electrónico, horario de funcionamiento.</li><li>Mecanismo de contacto humano, como un sistema de mensajería, un cliente de chat, un formulario de contacto, un canal de redes sociales.</li><li>Opción de autoayuda, como una sección actualizada de Preguntas frecuentes Preguntas, página Cómo hago, página de soporte.</li><li>Un mecanismo de contacto totalmente automatizado, como un chatbot.</li></ul><p>[...]</p>", 
        "en" : "<ul><li>This Success Criterion helps people who may have difficulty locating help that is not part of the page they are using. Ensuring they can connect with help allows them to complete the task.</li><li>When a user can easily find help for their specific questions, they are more successful completing tasks.</li><li>Users that experience cognitive fatigue or cognitive shut down will be able to reserve their energy for the task, instead of using it to find support.</li><li>Enabling users (especially those with cognitive disabilities) to find solutions while expressing their question using their own words increases their chances of success for completing a task.</li></ul><p>Typical help mechanisms include:</p><ul><li>Human contact details such as a phone number, email address, hours of operation.</li><li>Human contact mechanism such as a messaging system, chat client, contact form, social media channel.</li><li>Self-help option such as an up-to-date Frequently Asked Questions, How Do I page, Support page.</li><li>A fully automated contact mechanism such as a chatbot.</li></ul><p>[...]</p>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },

    { // 3.2.7.
      "criteria" : 
      {
        "ca" : "3.2.7 Controls visibles", 
        "es" : "3.2.7 Controles visibles", 
        "en" : "3.2.7 Visible Controls",
      }, 
      "link" : "https://www.w3.org/TR/WCAG22/#visible-controls", 
      "level" : "AA",
      "version" : "2.2", 
      "goal" : 
      {
        "ca" : "Quan rebreu el cursor del punter o l'enfocament del teclat fa que els components de la interfície d'usuari siguin visibles, la informació necessària per identificar que els components de la interfície d'usuari estan disponibles és visible, excepte quan:<ul><li>La informació necessària per identificar els components de la interfície d'usuari està disponible a través dun component equivalent que està visible a la mateixa pàgina o en un pas diferent en un procés de diversos passos sense necessitat de passar el punter o enfocar el teclat;</li><li>El component es proporciona específicament per millorar l'experiència de navegació amb el teclat;</li><li>Es disposa d'un mecanisme per fer visible la informació de manera persistent;</li><li>És essencial amagar la informació necessària per identificar el component.</li></ul>", 
        "es" : "Cuando recibir el cursor del puntero o el enfoque del teclado hace que los componentes de la interfaz de usuario sean visibles, la información necesaria para identificar que los componentes de la interfaz de usuario están disponibles es visible, excepto cuando:<ul><li>La información necesaria para identificar los componentes de la interfaz de usuario está disponible a través de un componente equivalente que está visible en la misma página o en un paso diferente en un proceso de varios pasos sin necesidad de pasar el puntero o enfocar el teclado;</li><li>El componente se proporciona específicamente para mejorar la experiencia de navegación con el teclado;</li><li>Se dispone de un mecanismo para hacer visible la información de forma persistente;</li><li>Es esencial ocultar la información necesaria para identificar el componente.</li></ul>", 
        "en" : "Where receiving pointer hover or keyboard focus triggers user interface components to be visible, information needed to identify that user interface components are available is visible, except when:<ul><li>The information needed to identify the user interface components is available through an equivalent component that is visible on the same page or on a different step in a multi-step process without requiring pointer hover or keyboard focus;</li><li>The component is provided specifically to enhance the experience for keyboard navigation;</li><li>A mechanism is available to make the information persistently visible;</li><li>Hiding the information needed to identify the component is essential.</li></ul>",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest criteri d'èxit és garantir que els components de la interfície d'usuari (controls) els puguin trobar fàcilment les persones amb discapacitats cognitives, pèrdua de visió i deficiències de mobilitat i motor.</p><p>Alguns enfocaments de disseny amaguen els controls. i requereixen determinades interaccions de l'usuari (com ara passar el ratolí) per mostrar-les. Quan els controls ocults són necessaris per completar les tasques, la dificultat per descobrir-los pot deixar alguns usuaris amb discapacitat sense cap manera de progressar.</p><p>Persones amb baixa funció executiva, problemes de memòria i altres discapacitats cognitives i d'aprenentatge. és possible que no pugui trobar controls ocults. Si es necessita un control ocult per avançar, això pot impedir que alguns usuaris completin una tasca. És possible que els usuaris que descobreixen controls que es mostren al passar el cursor no recordin com mostrar i operar els controls la propera vegada que interaccionin amb el lloc. Així, fins i tot quan un usuari pot continuar, el temps en la tasca es pot veure afectat tant per a usos puntuals com repetits.</p><p>Un dels principals reptes per a les persones amb pèrdua de visió és simplement localitzar els controls relacionats a la pantalla. , movent el ratolí de control a control i fent que el focus del teclat coincideixi amb el lloc on estan mirant. Aquest criteri d'èxit pot ajudar a reduir aquesta càrrega acumulada.</p><p>És possible que les persones amb pèrdua de visió no vegin els controls que es mostren només al passar el cursor o al focus, sobretot si es mostren fora de la finestra gràfica. Per als usuaris que necessiten contingut ampliat o ampliat, la part del contingut de la finestra gràfica es pot reduir significativament. Els usuaris amb baixa visió poden tenir una resolució de 800 x 600 com a predeterminada. Poden mirar de prop el monitor des d'uns quants centímetres de distància a causa de l'agudesa limitada (incapacitat per veure els detalls) o escotomes (punts cecs). Poden tenir una quantitat significativa de moviment de cap i coll mentre utilitzen contingut. Quan els usuaris no veuen res a la pantalla, poden suposar que l'estan perdent (per exemple, que està en el seu punt cec o amagat en un menú) i van cercant fins que el troben o deixen de cercar.</p ><p>Les persones que utilitzen mètodes d'entrada alternatius poden tenir dificultats per localitzar i operar els controls que només es mostren al passar el cursor o al focus. Per exemple, els usuaris de reconeixement de veu activen els controls pronunciant el nom del control. Les funcions que només s'exposen mitjançant la interacció amb el ratolí o el focus del teclat poden suposar obstacles importants als mètodes d'entrada alternatius.</p><p>[...]</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es garantizar que los componentes de la interfaz de usuario (controles) puedan ser encontrados fácilmente por personas con discapacidades cognitivas, pérdida de visión y discapacidades motoras y de movilidad.</p><p>Algunos enfoques de diseño ocultan los controles y requieren ciertas interacciones del usuario (como pasar el mouse por encima) para mostrarlos. Donde los controles ocultos son necesarios para completar tareas, la dificultad para descubrir los controles puede dejar a algunos usuarios con discapacidades sin una forma de progresar.</p><p>Personas con función ejecutiva baja, problemas de memoria y otras discapacidades cognitivas y de aprendizaje Es posible que no pueda encontrar los controles ocultos. Si se necesita un control oculto para progresar, esto puede evitar que algunos usuarios completen una tarea. Es posible que los usuarios que descubren controles que se muestran al pasar el mouse no recuerden cómo mostrar y operar los controles la próxima vez que interactúen con el sitio. Entonces, incluso cuando un usuario puede continuar, el tiempo dedicado a la tarea puede verse afectado tanto por usos únicos como repetidos.</p><p>Uno de los principales desafíos para las personas con pérdida de visión es simplemente ubicar los controles relacionados en la pantalla. , moviendo el mouse de un control a otro y logrando que el enfoque del teclado coincida con el lugar donde están mirando. Este Criterio de Conformidad puede ayudar a reducir esa carga acumulativa.</p><p>Es posible que las personas con pérdida de visión no vean los controles que se muestran solo al pasar el mouse por encima o enfocar, especialmente si se muestran fuera de la ventana gráfica. Para los usuarios que requieren contenido ampliado o magnificado, la parte del contenido en la ventana gráfica puede reducirse significativamente. Los usuarios con problemas de visión pueden tener una resolución de 800 x 600 por defecto. Pueden mirar de cerca el monitor desde unas pocas pulgadas de distancia debido a la agudeza visual limitada (incapacidad para ver los detalles) o Escotomas (puntos ciegos). Pueden tener una cantidad significativa de movimiento de cabeza y cuello mientras usan contenido. Cuando los usuarios no ven algo en la pantalla, pueden asumir que se lo pierden, por ejemplo, que está en su punto ciego o escondido en un menú, y buscan hasta que lo encuentran o dejan de buscar.</p <p>Las personas que usan métodos de entrada alternativos pueden tener dificultades para ubicar y operar los controles que se muestran solo al pasar el mouse por encima o al enfocar. Por ejemplo, los usuarios de reconocimiento de voz activan los controles pronunciando el nombre del control. Las funciones que solo están expuestas a través de la interacción con el cursor o el enfoque del teclado pueden representar barreras significativas para los métodos de entrada alternativos.</p><p>[...]</p>", 
        "en" : "<p>The intent of this Success Criterion is to ensure that user interface components (controls) can be found easily by people with cognitive disabilities, vision loss, and mobility and motor impairments.</p><p>Some design approaches hide controls and require certain user interactions (such as mouseover) to display them. Where the hidden controls are needed to complete tasks, the difficulty in discovering the controls can leave some users with disabilities without a way to progress.</p><p>People with low executive function, impaired memory, and other cognitive and learning disabilities may not be able to find hidden controls. If a hidden control is needed in order to progress, this can prevent some users from completing a task. Users who discover controls that display on hover may not remember how to show and operate the controls the next time they interact with the site. So even when a user is able to proceed, time on task can be affected for both one-time and repeated uses.</p><p>One of the main challenges for people with vision loss is simply locating related controls on the screen, moving the mouse from control to control, and getting the keyboard focus to coincide with where they are looking. This Success Criterion can help reduce that cumulative load.</p><p>People with vision loss may not see controls that display only on hover or focus, particularly if they display outside of the viewport. For users who require enlarged or magnified content, the portion of the content in the viewport may be significantly reduced. Low vision users may have 800 x 600 resolution as the default. They may look closely at the monitor from a few inches away due to limited acuity (inability to see detail) or Scotomas (blind spots). They may have a significant amount of head and neck movement while using content. When users don't see something on the screen, they may assume they are missing it — for example, that it’s in their blind spot or hidden in a menu — and go searching until they either find it or give up searching.</p><p>People who use alternative input methods may have difficulty locating and operating controls that display only on hover or focus. For example, speech recognition users activate controls by speaking the name of the control. Functions that are only exposed through hover interaction or keyboard focus can pose significant barriers to alternative input methods.</p><p>[...]</p>",
      },
      "benefits" :
      {
        "ca" : "<ul><li>Les persones amb discapacitats cognitives i d'aprenentatge poden localitzar més fàcilment els controls que els permetin progressar amb èxit a través d'un procés.</li><li>Les persones amb problemes de memòria no necessiten recordar on es troben els controls.</li><li>Les persones amb baixa visió no necessiten coordinar la cerca visual dels controls amb l'acció de moure el punter o el focus del teclat.</li><li>Les persones amb discapacitat motriu i de mobilitat que utilitzen la parla o altres mètodes d'entrada. no cal fer servir el cursor o el focus per localitzar i operar els controls.</li></ul>", 
        "es" : "<ul><li>Las personas con discapacidades cognitivas y de aprendizaje pueden ubicar más fácilmente los controles que les permitan progresar con éxito a través de un proceso.</li><li>Las personas con problemas de memoria no necesitan recordar dónde se encuentran los controles.</li><li>Las personas con baja visión no necesitan coordinar visualmente la búsqueda de controles con el acto de mover el puntero o el enfoque del teclado.</li><li>Personas con problemas de movilidad y motrices que utilizan el habla u otros métodos de entrada no es necesario utilizar el desplazamiento o el enfoque para ubicar y operar los controles.</li></ul>", 
        "en" : "<ul><li>People with cognitive and learning disabilities can more easily locate controls that allow them to successfully progress through a process.</li><li>People with memory impairments do not need to remember where controls are located.</li><li>People with low vision do not need to coordinate visually searching for controls with the act of moving the pointer hover or keyboard focus.</li><li>People with mobility and motor impairments who use speech or other input methods do not need to use hover or focus to locate and operate controls.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG22/Understanding/visible-controls.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG22/Understanding/visible-controls.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },

    { // 3.3.1.
      "criteria" : 
      {
        "ca" : "3.3.1 Identificació d'errades", 
        "es" : "3.3.1 Identificación de errores", 
        "en" : "3.3.1 Error Identification",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#error-identification", 
      "level" : "A",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Si detecta un error d'entrada automàticament, s'identifica l'element que té l'error i es descriu l'error a l'usuari en text.", 
        "es" : "Si se detecta automáticamente un error de entrada, se identifica el elemento que tiene el error y se describe el error al usuario en texto.", 
        "en" : "If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.",
      },
      "intent" : 
      {
        "ca" : "", 
        "es" : "", 
        "en" : "The intent of this Success Criterion is to ensure that users are aware that an error has occurred and can determine what is wrong. The error message should be as specific as possible. In the case of an unsuccessful form submission, re-displaying the form and indicating the fields in error is insufficient for some users to perceive that an error has occurred. Screen reader users, for example, will not know there was an error until they encounter one of the indicators. They may abandon the form altogether before encountering the error indicator, thinking that the page simply is not functional.",
      },
      "benefits" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "Providing information about input errors in text allows users who are blind or colorblind to perceive the fact that an error occurred.#This Success Criterion may help people with cognitive, language, and learning disabilities who have difficulty understanding the meaning represented by icons and other visual cues.",
      },
      "examples" : "",
      "techniques" : "",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["forms-and-UI"]
    },
    
    { // 3.3.2.
      "criteria" : 
      {
        "ca" : "3.3.2 Etiquetes o instruccions", 
        "es" : "3.3.2 Etiquetas o instrucciones", 
        "en" : "3.3.2 Labels or Instructions",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#labels-or-instructions", 
      "level" : "A",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Es proporcionen etiquetes o instruccions quan el contingut requereix la intervenció de lusuari.", 
        "es" : "Se proporcionan etiquetas o instrucciones cuando el contenido requiere la intervención del usuario.", 
        "en" : "Labels or instructions are provided when content requires user input.",
      },
      "intent" : 
      {
        "ca" : "", 
        "es" : "", 
        "en" : "The intent of this Success Criterion is to have content authors present instructions or labels that identify the controls in a form so that users know what input data is expected. Instructions or labels may also specify data formats for fields especially if they are out of the customary formats or if there are specific rules for correct input. Content authors may also choose to make such instructions available to users only when the individual control has focus especially when instructions are long and verbose.#The intent of this Success Criterion is not to clutter the page with unnecessary information but to provide important cues and instructions that will benefit people with disabilities. Too much information or instruction can be just as harmful as too little. The goal is to make certain that enough information is provided for the user to accomplish the task without undue confusion or navigation.",
      },
      "benefits" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "Providing clear and unambiguous labels and instructions (including examples of expected data formats) helps all users - but particularly those with cognitive, language, and learning disabilities - to enter information correctly.#Providing clear and unambiguous labels and instructions (including clear identification of required fields) can prevent users from making incomplete or incorrect form submissions, which prevents users from having to navigate once more through a page/form in order to fix submission errors.",
      },
      "examples" : "",
      "techniques" : "",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["forms-and-UI"]
    },
    
    { // 3.3.3.
      "criteria" : 
      {
        "ca" : "3.3.3 Consell d'error", 
        "es" : "3.3.3 Sugerencia de error", 
        "en" : "3.3.3 Error Suggestion",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#error-suggestion", 
      "level" : "AA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Si es detecta automàticament un error d'entrada i es coneixen suggeriments per corregir-los, aquests suggeriments es proporcionen a l'usuari, llevat que posin en perill la seguretat o el propòsit del contingut.", 
        "es" : "Si se detecta automáticamente un error de entrada y se conocen sugerencias para su corrección, estas sugerencias se proporcionan al usuario, a menos que pongan en peligro la seguridad o el propósito del contenido.", 
        "en" : "If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.",
      },
      "intent" : 
      {
        "ca" : "", 
        "es" : "", 
        "en" : "The intent of this Success Criterion is to ensure that users receive appropriate suggestions for correction of an input error if it is possible. The WCAG 2.0 definition of 'input error' says that it is 'information provided by the user that is not accepted' by the system. Some examples of information that is not accepted include information that is required but omitted by the user and information that is provided by the user but that falls outside the required data format or allowed values.",
      },
      "benefits" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "Providing information about how to correct input errors allows users who have learning disabilities to fill in a form successfully. Users who are blind or have impaired vision understand more easily the nature of the input error and how to correct it. People with motion impairment can reduce the number of times they need to change an input value.",
      },
      "examples" : "",
      "techniques" : "",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["forms-and-UI"]
    },
    
    { // 3.3.4.
      "criteria" : 
      {
        "ca" : "3.3.4 Prevenció d'errades (dades financeres legals)", 
        "es" : "3.3.4 Prevención de errores (datos financieros legales)", 
        "en" : "3.3.4 Error Prevention (Legal Financial Data)",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data", 
      "level" : "AA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Per a les pàgines web que generen compromisos legals o transaccions financeres per a lusuari, que modifiquen o eliminen dades controlables per lusuari en els sistemes demmagatzematge de dades, o que envien respostes de prova de lusuari, almenys un dels següents és veritable:<ul><li>Reversible: Les presentacions són reversibles.</li><li>Verificat: les dades ingressades per l'usuari es verifiquen buscant errors d'entrada i l'usuari té l'oportunitat de corregir-los.</li><li>Confirmat: hi ha un mecanisme disponible per revisar, confirmar i corregir la informació abans de finalitzar l'enviament.</li></ul>", 
        "es" : "Para las páginas web que generan compromisos legales o transacciones financieras para el usuario, que modifican o eliminan datos controlables por el usuario en los sistemas de almacenamiento de datos, o que envían respuestas de prueba del usuario, al menos uno de los siguientes es verdadero:<ul><li>Reversible: Las presentaciones son reversibles.</li><li>Verificado: los datos ingresados por el usuario se verifican en busca de errores de entrada y el usuario tiene la oportunidad de corregirlos.</li><li>Confirmado: hay un mecanismo disponible para revisar, confirmar y corregir la información antes de finalizar el envío.</li></ul>", 
        "en" : "For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true:<ul><li>Reversible : Submissions are reversible.</li><li>Checked : Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.</li><li>Confirmed : A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.</li></ul>",
      },
      "intent" : 
      {
        "ca" : "", 
        "es" : "", 
        "en" : "The intent of this Success Criterion is to help users with disabilities avoid serious consequences as the result of a mistake when performing an action that cannot be reversed. For example, purchasing non-refundable airline tickets or submitting an order to purchase stock in a brokerage account are financial transactions with serious consequences. If a user has made a mistake on the date of air travel, he or she could end up with a ticket for the wrong day that cannot be exchanged. If the user made a mistake on the number of stock shares to be purchased, he or she could end up purchasing more stock than intended. Both of these types of mistakes involve transactions that take place immediately and cannot be altered afterwards, and can be very costly. Likewise, it may be an unrecoverable error if users unintentionally modify or delete data stored in a database that they later need to access, such as their entire travel profile in a travel services web site. When referring to modification or deletion of 'user controllable' data, the intent is to prevent mass loss of data such as deleting a file or record. It is not the intent to require a confirmation for each save command or the simple creation or editing of documents, records or other data.",
      },
      "benefits" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "Providing safeguards to avoid serious consequences resulting from mistakes helps users with all disabilities who may be more likely to make mistakes.",
      },
      "examples" : "",
      "techniques" : "",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : ["content"]
    },
    
    { // 3.3.5.
      "criteria" : 
      {
        "ca" : "3.3.5 Ajuda", 
        "es" : "3.3.5 Ayuda", 
        "en" : "3.3.5 Help",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#help", 
      "level" : "AAA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "L'ajuda sensible al context està disponible.", 
        "es" : "La ayuda sensible al contexto está disponible.", 
        "en" : "Context-sensitive help is available.",
      },
      "intent" : 
      {
        "ca" : "", 
        "es" : "", 
        "en" : "The intent of this Success Criterion is to help users avoid making mistakes. Some users with disabilities may be more likely to make mistakes than users without disabilities. Using context-sensitive help, users find out how to perform an operation without losing track of what they are doing.#Context-sensitive help only needs to be provided when the label is not sufficient to describe all functionality. The existence of context-sensitive help should be obvious to the user and they should be able to obtain it whenever they require it.#The content author may provide the help text, or the user agent may provide the help text based on technology-specific, programmatically determined information.",
      },
      "benefits" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "Assistance for text input helps individuals with writing disabilities and people with reading and intellectual disabilities who often have difficulty writing text in forms or other places that need text input.#Additionally, these kinds of assistance help people who are aging and have the same difficulty in text input and/or mouse operation.",
      },
      "examples" : "",
      "techniques" : "",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },
    
    { // 3.3.6.
      "criteria" : 
      {
        "ca" : "3.3.6 Prevenció d'errades (Tots)", 
        "es" : "3.3.6 Prevención de errores (Todos)", 
        "en" : "3.3.6 Error Prevention (All)",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#error-prevention-all", 
      "level" : "AAA",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Per a les pàgines web que requereixen que l'usuari enviï informació, almenys un dels següents és veritable:<ul><li>Reversible: Les presentacions són reversibles.</li><li>Verificat: les dades ingressades per l'usuari es verifiquen buscant errors d'entrada i l'usuari té l'oportunitat de corregir-los.</li><li>Confirmat: hi ha un mecanisme disponible per revisar, confirmar i corregir la informació abans de finalitzar l'enviament.</li></ul>", 
        "es" : "Para las páginas web que requieren que el usuario envíe información, al menos uno de los siguientes es verdadero:<ul><li>Reversible: Las presentaciones son reversibles.</li><li>Verificado: los datos ingresados por el usuario se verifican en busca de errores de entrada y el usuario tiene la oportunidad de corregirlos.</li><li>Confirmado: hay un mecanismo disponible para revisar, confirmar y corregir la información antes de finalizar el envío.</li></ul>", 
        "en" : "For Web pages that require the user to submit information, at least one of the following is true:<ul><li>Reversible : Submissions are reversible.</li><li>Checked : Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.</li><li>Confirmed : A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.</li></ul>",
      },
      "intent" : 
      {
        "ca" : "", 
        "es" : "", 
        "en" : "The intent of this Success Criterion is to help users with disabilities avoid consequences that may result from making a mistake when submitting form data. This criterion builds on Success Criterion 3.3.4 in that it applies to all forms that require users to submit information.",
      },
      "benefits" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "Providing safeguards to avoid consequences resulting from mistakes helps users with all disabilities who may be more likely to make mistakes.",
      },
      "examples" : "",
      "techniques" : "",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },
    
    { // 3.3.7.
      "criteria" : 
      {
        "ca" : "3.3.7 Autenticació accessible", 
        "es" : "3.3.7 Autenticación accesible", 
        "en" : "3.3.7 Accessible Authentication",
      }, 
      "link" : "https://www.w3.org/TR/WCAG22/#accessible-authentication", 
      "level" : "A",
      "version" : "2.2", 
      "goal" : 
      {
        "ca" : "Per a cada pas en un procés d'autenticació que es basa en una prova de funció cognitiva, hi ha almenys un altre mètode d'autenticació disponible que no es basa en una prova de funció cognitiva, o hi ha un mecanisme disponible per ajudar l'usuari a completar la prova de funció cognitiva.", 
        "es" : "Para cada paso en un proceso de autenticación que se basa en una prueba de función cognitiva, hay al menos otro método de autenticación disponible que no se basa en una prueba de función cognitiva, o hay un mecanismo disponible para ayudar al usuario a completar la prueba de función cognitiva.", 
        "en" : "For each step in an authentication process that relies on a cognitive function test, at least one other authentication method is available that does not rely on a cognitive function test, or a mechanism is available to assist the user in completing the cognitive function test.",
      },
      "intent" : 
      {
        "ca" : "<p>L'objectiu d'aquest Criteri d'èxit és garantir que hi ha un mètode accessible, fàcil d'utilitzar i segur per iniciar sessió, accedir al contingut i dur a terme tasques. La majoria de llocs web es basen en noms d'usuari i contrasenyes per iniciar sessió. Memoritzar un nom d'usuari i una contrasenya (o transcrivir-los manualment) suposa una càrrega molt alta o impossible per a les persones amb determinades discapacitats cognitives.</p><p>Recordar una contrasenya específica d'un lloc. és una prova de funció cognitiva. Se sap que aquestes proves són problemàtiques per a moltes persones amb discapacitats cognitives. Tant si es tracta de recordar cadenes de caràcters aleatòries, un gest de patró per realitzar en una pantalla tàctil o identificar quines imatges inclouen un objecte concret, les proves de funció cognitiva exclouran algunes persones. Quan s'utilitza una prova de funció cognitiva, ha d'estar disponible almenys un altre mètode d'autenticació que no sigui una prova de funció cognitiva.</p><p>Si hi ha més d'un pas en el procés d'autenticació, com ara amb múltiples factors. autenticació, tots els passos haurien de complir aquest criteri d'èxit. Hi hauria d'haver un camí a través de l'autenticació que no es basa en proves de funció cognitiva.</p><p>Poder recuperar o canviar el correu electrònic i la contrasenya és una part important de l'autenticació. Si l'usuari s'autentica amb informació alternativa per recuperar el seu compte, cal que hi hagi un mètode que no sigui una prova de funció cognitiva.</p>", 
        "es" : "<p>El propósito de este Criterio de Conformidad es garantizar que haya un método accesible, fácil de usar y seguro para iniciar sesión, acceder al contenido y realizar tareas. La mayoría de los sitios web dependen de nombres de usuario y contraseñas para iniciar sesión. Memorizar un nombre de usuario y una contraseña (o transcribirlos manualmente) impone una carga muy alta o imposible a las personas con ciertas discapacidades cognitivas.</p><p>Recordar una contraseña específica del sitio es una prueba de función cognitiva. Se sabe que tales pruebas son problemáticas para muchas personas con discapacidades cognitivas. Ya sea para recordar cadenas aleatorias de caracteres, un gesto de patrón para realizar en una pantalla táctil o identificar qué imágenes incluyen un objeto en particular, las pruebas de función cognitiva excluirán a algunas personas. Cuando se utiliza una prueba de función cognitiva, debe estar disponible al menos otro método de autenticación que no sea una prueba de función cognitiva.</p><p>Si hay más de un paso en el proceso de autenticación, como con multifactor autenticación, todos los pasos deben cumplir con este Criterio de Conformidad. Debe haber un camino a través de la autenticación que no dependa de las pruebas de función cognitiva.</p><p>Poder recuperar o cambiar el correo electrónico y la contraseña es una parte importante de la autenticación. Si el usuario se está autenticando con información alternativa para recuperar su cuenta, debe haber un método que no sea una prueba de función cognitiva.</p>", 
        "en" : "<p>The purpose of this Success Criterion is to ensure there is an accessible, easy-to-use, and secure method to log in, access content, and undertake tasks. Most web sites rely on usernames and passwords for logging in. Memorizing a username and password (or transcribing it manually) places a very high or impossible burden upon people with certain cognitive disabilities.</p><p>Remembering a site-specific password is a cognitive function test. Such tests are known to be problematic for many people with cognitive disabilities. Whether it is remembering random strings of characters, a pattern gesture to perform on a touch screen, or identifying which images include a particular object, cognitive function tests will exclude some people. When a cognitive function test is used, at least one other authentication method must be available which is not a cognitive function test.</p><p>If there is more than one step in the authentication process, such as with multi-factor authentication, all steps should comply with this Success Criterion. There should be a path through authentication that does not rely on cognitive function tests.</p><p>Being able to recover or change the email and password is an important part of authentication. If the user is authenticating with alternative information in order to recover their account, there needs to be a method that is not a cognitive function test.</p>",
      },
      "benefits" :
      {
        "ca" : "Les persones amb problemes cognitius relacionats amb la memòria, la lectura (per exemple, la dislèxia), els números (per exemple, la discalcúlia) o les limitacions en el processament de la percepció podran autenticar-se independentment del nivell de les seves capacitats cognitives.", 
        "es" : "Las personas con problemas cognitivos relacionados con la memoria, la lectura (por ejemplo, dislexia), los números (por ejemplo, discalculia) o limitaciones en el procesamiento de la percepción podrán autenticarse independientemente del nivel de sus capacidades cognitivas.", 
        "en" : "People with cognitive issues relating to memory, reading (for example, dyslexia), numbers (for example, dyscalculia), or perception-processing limitations will be able to authenticate irrespective of the level of their cognitive abilities.",
      },
      "examples" : "https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },

    { // 3.3.8.
      "criteria" : 
      {
        "ca" : "3.3.8 Entrada redundant", 
        "es" : "3.3.8 Entrada redundante", 
        "en" : "3.3.8 Redundant entry",
      }, 
      "link" : "https://www.w3.org/TR/WCAG22/#redundant-entry", 
      "level" : "A",
      "version" : "2.2", 
      "goal" : 
      {
        "ca" : "La informació prèviament ingressada per o proporcionada a l'usuari que cal que s'ingressi novament en el mateix procés i en la mateixa sessió d'usuari és:<ul><li>Emplenat automàticament, o</li><li>Disponibles perquè l'usuari seleccioni.</li></ul>Excepte quan:<ul><li>Tornar a ingressar la informació és essencial,</li><li>La informació és necessària per garantir la seguretat del contingut, o</li><li>La informació que heu introduït anteriorment ja no és vàlida.</li></ul>", 
        "es" : "La información previamente ingresada por o proporcionada al usuario que se requiere que se ingrese nuevamente en el mismo proceso y en la misma sesión de usuario es:<ul><li>Rellenado automáticamente, o</li><li>Disponibles para que el usuario seleccione.</li></ul>Excepto cuando:<ul><li>Volver a ingresar la información es esencial,</li><li>La información es necesaria para garantizar la seguridad del contenido, o</li><li>La información ingresada anteriormente ya no es válida.</li></ul>", 
        "en" : "Information previously entered by or provided to the user that is required to be entered again in the same process and in the same user-session is either:<ul><li>auto-populated, or</li><li>available for the user to select.</li></ul>Except when:<ul><li>re-entering the information is essential,</li><li>the information is required to ensure the security of the content, or</li><li>previously entered information is no longer valid.</li></ul>",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest criteri d'èxit és garantir que els usuaris puguin navegar amb èxit per processos de diversos passos. Redueix l'esforç cognitiu quan es demana informació més d'una vegada durant els passos d'un procés. També redueix la necessitat de recordar la informació proporcionada en un pas anterior.</p><p>La informació que cal recordar per introduir-la pot suposar una barrera important per als usuaris amb dificultats cognitives o de memòria. Tots els usuaris experimenten una fatiga mental gradual natural mentre avancen a través dels passos d'un procés. Aquesta fatiga s'accelera per l'estrès de recordar informació de la memòria de treball a curt termini. Els usuaris amb discapacitats cognitives i d'aprenentatge són molt susceptibles a patir fatiga mental.</p><p>Exigir que les persones recordin la informació ja introduïda als passos anteriors pot fer que abandonin o introdueixin informació incorrecta. La funció d'emplenament automàtic dels navegadors no es considera suficient perquè és el contingut (el lloc web) el que necessita proporcionar la informació emmagatzemada per a una entrada redundant, o evitar demanar la mateixa informació de nou.</p><p>Aquest criteri d'èxit. no afegeix un requisit per recordar informació entre sessions. Un procés es defineix en funció d'una activitat i no és aplicable quan un usuari torna després de tancar una sessió o de navegar. Tanmateix, un procés pot executar-se en diferents dominis, de manera que si un procés de pagament inclou un proveïdor de pagaments de tercers, això estaria a l'abast.</p><p>[...]</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es garantizar que los usuarios puedan navegar con éxito procesos de varios pasos. Reduce el esfuerzo cognitivo cuando se solicita información más de una vez durante los pasos de un proceso. También reduce la necesidad de recordar la información proporcionada en un paso anterior.</p><p>La información que se requiere recordar para la entrada puede representar una barrera significativa para los usuarios con dificultades cognitivas o de memoria. Todos los usuarios experimentan una fatiga mental gradual natural a medida que avanzan en los pasos de un proceso. Esta fatiga se ve acelerada por el estrés de recordar información de la memoria de trabajo a corto plazo. Los usuarios con discapacidades cognitivas y de aprendizaje son muy susceptibles a la fatiga mental.</p><p>Exigir a las personas que recuerden información ya ingresada en los pasos anteriores puede hacer que se rindan o que ingresen información incorrecta. La función de autocompletar de los navegadores no se considera suficiente porque es el contenido (el sitio web) el que debe proporcionar la información almacenada para una entrada redundante, o evitar solicitar la misma información nuevamente.</p><p>Este Criterio de Conformidad no agrega un requisito para recordar información entre sesiones. Un proceso se define sobre la base de una actividad y no es aplicable cuando un usuario regresa después de cerrar una sesión o salir de la navegación. Sin embargo, un proceso puede ejecutarse en diferentes dominios, por lo que si un proceso de pago incluye un proveedor de pago de terceros, eso estaría dentro del alcance.</p><p>[...]</p>", 
        "en" : "<p>The intent of this Success Criterion is to ensure that users can successfully navigate multi-step processes. It reduces cognitive effort where information is asked for more than once during steps in a process. It also reduces the need to recall information provided in a previous step.</p><p>Information that is required to be remembered for input can pose a significant barrier to users with cognitive or memory difficulties. All users experience a natural gradual mental fatigue as they proceed through steps in a process. This fatigue is accelerated by the stress of recalling information from short-term working memory. Users with learning, and cognitive disabilities are highly susceptible to mental fatigue.</p><p>Requiring people to recall information already entered in the previous steps can cause them to give up or enter incorrect information. The autocomplete feature of browsers is not considered sufficient because it is the content (the web site) that needs to provide the stored information for a redundant entry, or avoid asking for the same information again.</p><p>This Success Criterion does not add a requirement to remember information between sessions. A process is defined on the basis of an activity and is not applicable when a user returns after closing a session or navigating away. However, a process can run across different domains, so if a check-out process includes a 3rd party payment provider, that would be in scope.</p><p>[...]</p>",
      },
      "benefits" :
      {
        "ca" : "<ul><li>Els usuaris amb discapacitat cognitiva experimenten dificultats de memòria de treball a curt termini. No haver de recordar repetidament informació determinada redueix l'estrès i la probabilitat d'errors.</li><li>Els usuaris que tenen dificultats per formar nous records, recordar informació i altres funcions relacionades amb la cognició poden completar processos sense haver de confiar innecessàriament en la seva memòria. .</li><li>Els usuaris amb discapacitat de mobilitat, com ara l'ús d'un interruptor o una entrada de veu, es beneficien d'una necessitat reduïda d'introduir text.</li></ul>", 
        "es" : "<ul><li>Los usuarios con discapacidades cognitivas experimentan dificultades de memoria de trabajo a corto plazo. No tener que recordar información particular repetidamente reduce el estrés y la probabilidad de cometer errores.</li><li>Los usuarios que experimentan dificultades para formar nuevos recuerdos, recordar información y otras funciones relacionadas con la cognición pueden completar procesos sin tener que depender innecesariamente de su memoria .</li><li>Los usuarios con problemas de movilidad, por ejemplo, que utilizan el control por botón o la entrada de voz, se benefician de una menor necesidad de ingresar texto.</li></ul>", 
        "en" : "<ul><li>Users with cognitive disabilities experience short-term, working memory difficulty. Not having to repeatedly remember particular information reduces stress and the likelihood of mistakes.</li><li>Users who experience difficulty forming new memories, recalling information, and other functions related to cognition can complete processes without having to unnecessarily rely on their memory.</li><li>Users with mobility impairments, for example using switch control or voice input, benefit from a reduced need for text entry.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html#techniques",
      "verification" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      }, 
      "tools" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "-",
      },
      "category" : [""]
    },

    { // 4.1.1.
      "criteria" : 
      {
        "ca" : "4.1.1 Anàlisi", 
        "es" : "4.1.1 Análisis", 
        "en" : "4.1.1 Parsing",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#parsing", 
      "level" : "A",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "En el contingut implementat mitjançant llenguatges de marcatge, els elements tenen etiquetes d'inici i finalització completes, els elements s'anomenen d'acord amb les especificacions, els elements no contenen atributs duplicats i qualsevol ID és únic, excepte on les especificacions permetin aquestes característiques.", 
        "es" : "En el contenido implementado mediante lenguajes de marcado, los elementos tienen etiquetas de inicio y finalización completas, los elementos se anidan de acuerdo con sus especificaciones, los elementos no contienen atributos duplicados y cualquier ID es único, excepto donde las especificaciones permitan estas características.", 
        "en" : "In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.",
      },
      "intent" : 
      {
        "ca" : "", 
        "es" : "", 
        "en" : "The intent of this Success Criterion is to ensure that user agents, including assistive technologies, can accurately interpret and parse content. If the content cannot be parsed into a data structure, then different user agents may present it differently or be completely unable to parse it. Some user agents use 'repair techniques' to render poorly coded content.",
      },
      "benefits" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "Ensuring that Web pages have complete start and end tags and are nested according to specification helps ensure that assistive technologies can parse the content accurately and without crashing.",
      },
      "examples" : "",
      "techniques" : "",
      "verification" :
      {
        "ca" : "<p>Objectiu: assegurar que els agents d'usuari i productes de suport puguin interpretar correctament i processar (parsejar) el contingut.</p><p>El codi no ha de tenir errors de sintaxi i ha d'estar ben format de manera que pugui ser processat de forma automàtica sense ambigüitats</p>", 
        "es" : "<p>Objetivo: asegurar que los agentes de usuario y productos de apoyo puedan interpretar correctamente y procesar (parsear) el contenido.</p><p>El código no debe tener errores de sintaxis y debe estar bien formado de forma que pueda ser procesado de forma automática sin ambigüedades</p>", 
        "en" : "<p>Goal: to ensure that user agents and supporting products can correctly interpret and process (parse) the content.</p><p>The code must not have syntax errors and must be well-formed so that it can be processed automatically without ambiguities</p>",
      }, 
      "tools" :
      {
        "ca" : "<p>Nom de l'eina: Eina de validació automàtica de codi del W3C</p><p>Procediment de comprovació:</p><ol><li>Inserir l'URL de la pàgina i prémer “Check”.</li><li>Premeu el botó “Message Filtering” per visualitzar els errors agrupats pel tipus d'error.</li><li>Comprovar que no hi ha errors dels tipus següents:<ul><li>Obertura i tancament d'etiquetes</li><li>Identificadors únics</li><li>Relacions un per un (etiquetes i controls de formulari, accesskey únics).</li><li>Atributs repetits al mateix element</li ><li>Valors d'atributs sense entrecometes</li></ul>/li></ol>", 
        "es" : "<p>Nombre de la herramienta: Herramienta de validación automática de código del W3C</p><p>Procedimiento de comprobación:</p><ol><li>Insertar la URL de la página y pulsar “Check”.</li><li>Pulsar en el botón “Message Filtering” para visualizar los errores agrupados por el tipo de error.</li><li>Comprobar que no existen errores de los siguientes tipos:<ul><li>Apertura y cierre de etiquetas</li><li>Identificadores únicos</li><li>Relaciones uno a uno (etiquetas y controles de formulario, accesskey únicos).</li><li>Atributos repetidos en el mismo elemento</li><li>Valores de atributos sin entrecomillar</li></ul>/li></ol>", 
        "en" : "<p>Tool name: W3C Automatic Code Validation Tool</p><p>Check procedure:</p><ol><li>Insert the URL of the page and press “Check”.</li><li>Click on the “Message Filtering” button to view the errors grouped by the type of error.</li><li>Check that there are no errors of the following types:<ul><li>Opening and tag closure</li><li>Unique identifiers</li><li>One-to-one relationships (tags and form controls, unique accesskey).</li><li>Repeated attributes in the same element</li ><li>Unquoted attribute values</li></ul>/li></ol>",
      },
      "category" : ["structure"]
    },
    
    { // 4.1.2.
      "criteria" : 
      {
        "ca" : "4.1.2 Nom Rol Valor", 
        "es" : "4.1.2 Nombre Rol Valor", 
        "en" : "4.1.2 Name Role Value",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#name-role-value", 
      "level" : "A",
      "version" : "2.0", 
      "goal" : 
      {
        "ca" : "Per a tots els components de la interfície d'usuari (inclosos, entre d'altres: elements de formulari, enllaços i components generats per scripts), el nom i la funció es poden determinar mitjançant la programació; els estats, les propietats i els valors que l'usuari pot establir es poden establir mitjançant programació; i la notificació de canvis en aquests elements està disponible per als agents dusuari, incloses les tecnologies dassistència.", 
        "es" : "Para todos los componentes de la interfaz de usuario (incluidos, entre otros: elementos de formulario, enlaces y componentes generados por scripts), el nombre y la función se pueden determinar mediante programación; los estados, las propiedades y los valores que puede establecer el usuario se pueden establecer mediante programación; y la notificación de cambios en estos elementos está disponible para los agentes de usuario, incluidas las tecnologías de asistencia.", 
        "en" : "For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.",
      },
      "intent" : 
      {
        "ca" : "", 
        "es" : "", 
        "en" : "The intent of this Success Criterion is to ensure that Assistive Technologies (AT) can gather information about, activate(or set) and keep up to date on the status of user interface controls in the content.",
      },
      "benefits" :
      {
        "ca" : "-", 
        "es" : "-", 
        "en" : "Providing role, state, and value information on all user interface components enables compatibility with assistive technology, such as screen readers, screen magnifiers, and speech recognition software, used by people with disabilities.",
      },
      "examples" : "",
      "techniques" : "",
      "verification" :
      {
        "ca" : "<p>Objectiu: assegurar que els productes de suport puguin obtenir informació, interactuar i estar al corrent de l'estat dels controls d'interfície d'usuari.</p><p>Els elements de la interfície d'usuari (formularis, enllaços, components personalitzats amb scripts, etc.) han de ser accessibles. És a dir, els productes de suport han de poder reconèixer quin és el nom, la funció i el valor o l'estat i poden interactuar-hi</p>", 
        "es" : "<p>Objetivo: asegurar que los productos de apoyo puedan obtener información, interactuar y estar al corriente del estado de los controles de interfaz de usuario.</p><p>Loselementosdelainterfazdeusuario(formularios,enlaces,componentespersonalizados con scripts, etc.) deben ser accesibles. Es decir, los productos de apoyo deben poder reconocer cuál es su nombre, su función y su valor o estado y pueden interactuar con ellos</p>", 
        "en" : "<p>Goal: to ensure that supporting products can obtain information, interact with, and be aware of the state of user interface controls.</p><p>UI elements (forms, links, custom scripted components, etc.) they must be accessible. That is, assistive products must be able to recognize their name, their role, and their value or status and be able to interact with them</p>",
      }, 
      "tools" :
      {
        "ca" : "<p>Nom de l'eina: Web Developer Toolbar</p><p>Procediment de comprovació:</p><ol><li>Localitzar els components d'interacció.</li><li>Comprovar que s'han creat tenint en compte l'accessibilitat. Per exemple, usant enllaços i controls de formulari en HTML seguint els requisits d'accessibilitat aplicables (text significatiu, etiquetes descriptives, etc.).</li><li>Localitzar els marcs o marcs en línia existents.</li><li >Verificar que es proporciona un títol a l'atribut title que descrigui de forma breu quina és la finalitat o contingut de cada marc. Per això amb l'eina “Web Developer Toolbar” seleccioneu “Information – Display title attributes” i “Outline - Outline Frames”.</li></ol>", 
        "es" : "<p>Nombre de la herramienta: Web Developer Toolbar</p><p>Procedimiento de comprobación:</p><ol><li>Localizar los componentes de interacción.</li><li>Comprobar que se han creado teniendo en cuenta la accesibilidad. Por ejemplo, usando enlaces y controles de formulario en HTML siguiendo los requisitos de accesibilidad aplicables (texto significativo, etiquetas descriptivas, etc.).</li><li>Localizar los marcos o marcos en línea existentes.</li><li>Verificar que se proporciona un título en el atributo title que describa de forma breve cuál es la finalidad o contenido de cada marco. Para ello con la herramienta “Web Developer Toolbar” seleccionar “Information – Display title attributes” y “Outline - Outline Frames”.</li></ol>", 
        "en" : "<p>Tool name: Web Developer Toolbar</p><p>Check procedure:</p><ol><li>Locate the interaction components.</li><li>Check that they have been created considering accessibility. For example, using links and form controls in HTML following applicable accessibility requirements (meaningful text, descriptive tags, etc.).</li><li>Locate existing frames or inline frames.</li><li >Verify that a title is provided in the title attribute that briefly describes the purpose or content of each frame. To do this, with the “Web Developer Toolbar” tool, select “Information - Display title attributes” and “Outline - Outline Frames”.</li></ol>",
      },
      "category" : ["custom-controls", "forms-and-UI"]
    },
    
    { // 4.1.3.
      "criteria" : 
      {
        "ca" : "4.1.3 Missatges d'estat", 
        "es" : "4.1.3 Mensajes de estado", 
        "en" : "4.1.3 Status Messages",
      }, 
      "link" : "https://www.w3.org/TR/WCAG21/#status-messages", 
      "level" : "AA",
      "version" : "2.1", 
      "goal" : 
      {
        "ca" : "Al contingut implementat mitjançant llenguatges de marcatge, els missatges d'estat es poden determinar mitjançant programació a través del rol o les propietats, de manera que es puguin presentar a l'usuari mitjançant tecnologies d'assistència sense rebre atenció.", 
        "es" : "En el contenido implementado mediante lenguajes de marcado, los mensajes de estado se pueden determinar mediante programación a través del rol o las propiedades, de modo que se puedan presentar al usuario mediante tecnologías de asistencia sin recibir atención.", 
        "en" : "In content implemented using markup languages, status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus.",
      },
      "intent" : 
      {
        "ca" : "<p>La intenció d'aquest Criteri d'èxit és que els usuaris siguin conscients dels canvis importants en el contingut que no es centren, i fer-ho de manera que no interrompi el seu treball innecessàriament.</p><p>Els beneficiaris previstos són usuaris cecs i amb baixa visió de tecnologies d'assistència amb capacitats de lector de pantalla. Un avantatge addicional és que les tecnologies d'assistència per a usuaris amb discapacitats cognitives poden aconseguir un mitjà alternatiu per indicar (o fins i tot retardar o suprimir) els missatges d'estat, tal com ho prefereix l'usuari.</p><p>L'abast d'aquest Criteri d'èxit és específic per als canvis de contingut que impliquen missatges d'estat. Un missatge d'estat és un terme definit a WCAG. Hi ha dos criteris principals que determinen si alguna cosa compleix la definició d'un missatge d'estat:</p><ul><li>el missatge proporciona 'informació a l'usuari sobre l'èxit o els resultats d'una acció, sobre l'estat d'espera d'una aplicació, sobre el progrés d'un procés o sobre l'existència d'errors;'</li><li>el missatge no es lliura mitjançant un canvi de context.</li></ul><p>Es pot afegir informació a pàgines que no compleixen la definició d'un missatge d'estat. Per exemple, la llista de resultats obtinguts d'una cerca no es considera una actualització d'estat i, per tant, no està coberta per aquest Criteri d'èxit. Tanmateix, els missatges de text breus que es mostren sobre la finalització o l'estat de la cerca, com ara 'Cercant...', 'S'han retornat 18 resultats' o 'No s'han retornat resultats' serien actualitzacions d'estat si no es concentren. A la secció titulada Exemples de missatges d'estat a continuació es donen exemples de missatges d' estat .</p><p>Aquest criteri d'èxit aborda específicament els escenaris en què s'afegeix contingut nou a la pàgina sense canviar el context de l'usuari. Els canvis de context , per la seva naturalesa, interrompen l'usuari posant el focus. Les tecnologies d'assistència ja els afloren i, per tant, ja s'han assolit l'objectiu d'alertar l'usuari de nous continguts. Per tant, els missatges que impliquin canvis de context no s'han de tenir en compte i no estan dins l'abast d'aquest Criteri d'èxit. A la secció anomenada Exemples de canvis que no són missatges d'estat es donen exemples d'escenaris que afegeixen contingut nou canviant el context.</p>", 
        "es" : "<p>La intención de este Criterio de Conformidad es hacer que los usuarios sean conscientes de los cambios importantes en el contenido a los que no se les presta atención, y hacerlo de una manera que no interrumpa innecesariamente su trabajo.</p><p>Los beneficiarios previstos son usuarios ciegos y con baja visión de tecnologías de asistencia con capacidades de lectura de pantalla. Un beneficio adicional es que las tecnologías de asistencia para usuarios con discapacidades cognitivas pueden lograr un medio alternativo para indicar (o incluso retrasar o suprimir) mensajes de estado, según prefiera el usuario.</p><p>El alcance de este Criterio de Conformidad es específico para los cambios en el contenido que implican mensajes de estado. Un mensaje de estado es un término definido en las WCAG. Hay dos criterios principales que determinan si algo cumple con la definición de un mensaje de estado:</p><ul><li>el mensaje proporciona 'información al usuario sobre el éxito o resultados de una acción, sobre el estado de espera de una aplicación, sobre el progreso de un proceso, o sobre la existencia de errores;'</li><li>el mensaje no se entrega a través de un cambio en el contexto.</li></ul><p>Se puede agregar información a las páginas que no cumple con la definición de un mensaje de estado. Por ejemplo, la lista de resultados obtenidos de una búsqueda no se considera una actualización de estado y, por lo tanto, no está cubierta por este Criterio de Conformidad. Sin embargo, los breves mensajes de texto que se muestran sobre la finalización o el estado de la búsqueda, como 'Buscando...', 'Se devolvieron 18 resultados' o 'No se devolvieron resultados', serían actualizaciones de estado si no tienen el foco. Se proporcionan ejemplos de mensajes de estado en la sección titulada Ejemplos de mensajes de estado a continuación.</p><p>Este Criterio de Conformidad aborda específicamente escenarios en los que se agrega contenido nuevo a la página sin cambiar el contexto del usuario. Los cambios de contexto , por su naturaleza, interrumpen al usuario al tomar el foco. Ya están emergidos por tecnologías de asistencia, por lo que ya han cumplido el objetivo de alertar al usuario sobre contenido nuevo. Como tal, los mensajes que implican cambios de contexto no necesitan ser considerados y no están dentro del alcance de este Criterio de Conformidad. En la sección titulada Ejemplos de cambios que no son mensajes de estado a continuación se proporcionan ejemplos de escenarios que agregan contenido nuevo al cambiar el contexto .</p>", 
        "en" : "<p>The intent of this Success Criterion is to make users aware of important changes in content that are not given focus, and to do so in a way that doesn't unnecessarily interrupt their work.</p><p>The intended beneficiaries are blind and low vision users of assistive technologies with screen reader capabilities. An additional benefit is that assistive technologies for users with cognitive disabilities may achieve an alternative means of indicating (or even delaying or supressing) status messages, as preferred by the user.</p><p>The scope of this Success Criterion is specific to changes in content that involve status messages. A status message is a defined term in WCAG. There are two main criteria that determine whether something meets the definition of a status message:</p><ul><li>the message provides 'information to the user on the success or results of an action, on the waiting state of an application, on the progress of a process, or on the existence of errors;'</li><li>the message is not delivered via a change in context.</li></ul><p>Information can be added to pages which does not meet the definition of a status message. For example, the list of results obtained from a search are not considered a status update and thus are not covered by this Success Criterion. However, brief text messages displayed about the completion or status of the search, such as 'Searching...', '18 results returned' or 'No results returned' would be status updates if they do not take focus. Examples of status messages are given in the section titled Status Message Examples below.</p><p>This Success Criterion specifically addresses scenarios where new content is added to the page without changing the user's context. Changes of context, by their nature, interrupt the user by taking focus. They are already surfaced by assistive technologies, and so have already met the goal to alert the user to new content. As such, messages that involve changes of context do not need to be considered and are not within the scope of this Success Criterion. Examples of scenarios that add new content by changing the context are given in the section titled Examples of Changes That Are Not Status Messages below.</p>",
      },
      "benefits" :
      {
        "ca" : "<ul><li>Quan s'assignen funcions o propietats adequades als missatges d'estat, els lectors de pantalla parlen del nou contingut de manera que ajudin els usuaris cecs i amb poca visió. La majoria dels usuaris vidents poden observar el text afegit perifèricament a la finestra gràfica. Aquest contingut proporciona informació addicional sense afectar el punt de vista actual de l'usuari. La capacitat d'una tecnologia d'assistència per anunciar un contingut de text tan important permet que més usuaris es beneficiïn d'un coneixement de la informació d'una manera equivalent.</li><li>L'assignació de funcions o propietats adequades als missatges d'estat ofereix possibles usos futurs i oportunitats de personalització, com ara el potencial de ser explotat per tecnologies d'assistència creades per a usuaris amb algunes discapacitats cognitives. On els autors de la pàgina decideixen dissenyar addicions a la pantalla que no ho fancanviar el context de l'usuari (és a dir, centrar-se), la informació és possiblement de menys importància que alguna cosa presentada mitjançant un diàleg modal, que ha de ser reconegut per l'usuari. Com a tal, depenent de les preferències de l'usuari, una tecnologia d'assistència pot optar per retardar, suprimir o transformar aquests missatges perquè l'usuari no sigui interromput innecessàriament; o per contra, la tecnologia d'assistència pot destacar aquests missatges quan l'usuari ho trobi òptim per fer-ho.</li></ul>", 
        "es" : "<ul><li>Cuando se asignan funciones o propiedades apropiadas a los mensajes de estado, los lectores de pantalla pronuncian el nuevo contenido para ayudar a los usuarios ciegos o con baja visión. La mayoría de los usuarios videntes pueden observar el texto agregado periféricamente a la ventana gráfica. Dicho contenido proporciona información adicional sin afectar el punto de vista actual del usuario. La capacidad de una tecnología de asistencia para anunciar este nuevo contenido de texto importante permite que más usuarios se beneficien del conocimiento de la información de manera equivalente.</li><li>La asignación de funciones o propiedades adecuadas a los mensajes de estado brinda posibles usos futuros y oportunidades de personalización, como el potencial para ser explotado por tecnologías de asistencia creadas para usuarios con algunas discapacidades cognitivas. Cuando los autores de la página eligen diseñar adiciones a la pantalla que nocambiar el contexto del usuario (es decir, tomar el foco), la información es sin duda de menos importancia que algo presentado mediante un diálogo modal, que debe ser reconocido por el usuario. Como tal, según las preferencias del usuario, una tecnología de asistencia puede optar por retrasar, suprimir o transformar dichos mensajes para que el usuario no sea interrumpido innecesariamente; o, por el contrario, la tecnología de asistencia puede resaltar dichos mensajes cuando el usuario lo considere óptimo para hacerlo.</li></ul>", 
        "en" : "<ul><li>When appropriate roles or properties are assigned to status messages, the new content is spoken by screen readers in such a way as to assist blind and low vision users. Most sighted users can observe text peripherally added to the viewport. Such content provides additional information without affecting the user's current point of regard. The ability of an assistive technology to announce such new important text content allows more users to benefit from an awareness of the information in an equivalent manner.</li><li>Assigning proper roles or properties to status messages provides possible future uses and personalization opportunities, such as the potential to be exploited by assistive technologies created for users with some cognitive disabilities. Where page authors elect to design additions to the screen which do not change the user's context (i.e., take focus), the information is arguably of less importance than something presented using a modal dialog, which must be acknowledged by the user. As such, depending on the user's preferences, an assistive technology may choose to delay, suppress, or transform such messages so a user is not unnecessarily interrupted; or conversely the assistive technology may highlight such messages where the user finds it optimal to do so.</li></ul>",
      },
      "examples" : "https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html#examples",
      "techniques" : "https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html#techniques",
      "verification" :
      {
        "ca" : "<p>Objectiu: informar els usuaris sobre canvis importants en el contingut (que no tinguin el focus), de manera que no interrompi innecessàriament la seva feina. usuaris sense necessitat de rebre el focus</p>", 
        "es" : "<p>Objetivo: informar a los usuarios acerca de cambios importantes en el contenido (que no tengan el foco), de manera que no interrumpa innecesariamente su trabajo.</p><p>Losmensajesdeestadodebenpoderseridentificadosporsoftwareatravésdesusroleso propiedades de forma que se puedan transmitir a los usuarios sin necesidad de recibir el foco</p>", 
        "en" : "<p>Goal: to inform users about important changes in content (that do not have the focus), so that it does not unnecessarily interrupt their work.</p><p>Status messages should be software-identifiable through their role or properties so that they can be passed on to users. users without needing to receive focus</p>",
      }, 
      "tools" :
      {
        "ca" : "<p>Nom de l'eina: Web Developer Toolbar</p><p>Procediment de comprovació:</p><ol><li>Localitzar els continguts que s'afegeixen de manera dinàmica a la pàgina i que proporcionen informació dels següents tipus:<ul><li>L'èxit o el resultat d'una acció</li><li>L'estat d'espera d'una acció.</li><li>El progrés d'un procés</li><li> L'existència d'errors</li></ul></li><li>Comprovar que quan s'actualitza aquesta informació, el component no rep el focus. (En el cas que sí que rebeu el focus, aquest criteri no aplica i no s'ha de continuar comprovant).</li><li>Comprovar si té un rol de WAI-ARIA definit. Per fer-ho, seleccioneu “Information – Display ARIA roles”.</li><li>Verificar que el rol és correcte d'acord amb la seva funció.</li></ol>", 
        "es" : "<p>Nombre de la herramienta: Web Developer Toolbar</p><p>Procedimiento de comprobación:</p><ol><li>Localizar los contenidos que se añaden de manera dinámica a la página y que proporcionan información de los siguientes tipos:<ul><li>El éxito o resultado de una acción</li><li>El estado de espera de una acción.</li><li>El progreso de un proceso</li><li>La existencia de errores</li></ul></li><li>Comprobar que cuando se actualiza esta información el componente no recibe el foco. (En el caso de que sí reciba el foco, este criterio no aplica y no se debe seguir comprobando).</li><li>Comprobar si tiene un rol de WAI-ARIA definido. Para ello, seleccionar “Information – Display ARIA roles”.</li><li>Verificar que el rol es correcto de acuerdo a su función.</li></ol>", 
        "en" : "<p>Name of the tool: Web Developer Toolbar</p><p>Check procedure:</p><ol><li>Locate the content that is dynamically added to the page and that provides information on the following types:<ul><li>The success or result of an action</li><li>The waiting state of an action.</li><li>The progress of a process</li><li> The existence of errors</li></ul></li><li>Check that when this information is updated the component does not receive the focus. (In the event that it does receive focus, this criteria does not apply and should not be checked further.)</li><li>Check if it has a WAI-ARIA role defined. To do this, select “Information – Display ARIA roles”.</li><li>Verify that the role is correct according to its function.</li></ol>",
      },
      "category" : ["custom-controls"]
    }
  ]
};