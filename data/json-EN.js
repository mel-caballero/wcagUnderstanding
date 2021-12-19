const wcagObj = {
  "latestWCAGversion" : "2.1",
  intents : [
  
  {
    "understandingCriteria" : 
    {
      "cat" : "1.1.1 Contingut no textual", 
      "es" : "1.1.1 Contenido no textual", 
      "en" : "1.1.1 Non-text Content"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html", 
    "wcagLevel" : "A",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to make information conveyed by non-text content accessible through the use of a text alternative. Text alternatives are a primary way for making information accessible because they can be rendered through any sensory modality (for example, visual, auditory or tactile) to match the needs of the user. Providing text alternatives allows the information to be rendered in a variety of ways by a variety of user agents. For example, a person who cannot see a picture can have the text alternative read aloud using synthesized speech. A person who cannot hear an audio file can have the text alternative displayed so that he or she can read it. In the future, text alternatives will also allow information to be more easily translated into sign language or into a simpler form of the same language.",
    "benefit" : "This Success Criterion helps people who have difficulty perceiving visual content. Assistive technology can read text aloud, present it visually, or convert it to braille.#Text alternatives may help some people who have difficulty understanding the meaning of photographs, drawings, and other images (e.g., line drawings, graphic designs, paintings, three-dimensional representations), graphs, charts, animations, etc.#People who are deaf, are hard of hearing, or who are having trouble understanding audio information for any reason can read the text presentation. Research is ongoing regarding automatic translation of text into sign language.#People who are deaf-blind can read the text in braille.#Additionally, text alternatives support the ability to search for non-text content and to repurpose content in a variety of ways.",
    "category" : ["content"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "1.2.1 Audio-only and Video-only (Prerecorded)"
    },
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded.html",  
    "wcagLevel" : "A", 
    "wcagVersion" : "2.0", 
    "intent" : "The intent of this Success Criterion is to make information conveyed by prerecorded audio-only and prerecorded video-only content available to all users. Alternatives for time-based media that are text based make information accessible because text can be rendered through any sensory modality (for example, visual, auditory or tactile) to match the needs of the user. In the future, text could also be translated into symbols, sign language or simpler forms of the language (future).", 
    "benefit" : "This Success Criterion helps people who have difficulty perceiving visual content. Assistive technology can read text alternatives aloud, present them visually, or convert them to braille.#Alternatives for timed-based media that are text based may help some people who have difficulty understanding the meaning of prerecorded video content.#People who are deaf, are hard of hearing, or who are having trouble understanding audio information for any reason can read the text presentation. Research is ongoing regarding automatic translation of text into sign language.#People who are deaf-blind can read the text in braille.#Additionally, text supports the ability to search for non-text content and to repurpose content in a variety of ways.",
    "category" : ["audio-video"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "1.2.2 Captions (Prerecorded)"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html",
    "wcagLevel" : "A", 
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to enable people who are deaf or hard of hearing to watch synchronized media presentations. Captions provide the part of the content available via the audio track. Captions not only include dialogue, but identify who is speaking and include non-speech information conveyed through sound, including meaningful sound effects.",
    "benefit" : "People who are deaf or have a hearing loss can access the auditory information in the synchronized media content through captions.",
    "category" : ["audio-video"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "1.2.3 Audio Description or Media Alternative (Prerecorded)"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded.html",  
    "wcagLevel" : "A",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to provide people who are blind or visually impaired access to the visual information in a synchronized media presentation. This Success Criterion describes two approaches, either of which can be used.#One approach is to provide audio description of the video content. The audio description augments the audio portion of the presentation with the information needed when the video portion is not available. During existing pauses in dialogue, audio description provides information about actions, characters, scene changes, and on-screen text that are important and are not described or spoken in the main sound track.#The second approach involves providing all of the information in the synchronized media (both visual and auditory) in text form. An alternative for time-based media provides a running description of all that is going on in the synchronized media content. The alternative for time-based media reads something like a screenplay or book. Unlike audio description, the description of the video portion is not constrained to just the pauses in the existing dialogue. Full descriptions are provided of all visual information, including visual context, actions and expressions of actors, and any other visual material. In addition, non-speech sounds (laughter, off-screen voices, etc.) are described, and transcripts of all dialogue are included. The sequence of description and dialogue transcripts are the same as the sequence in the synchronized media itself. As a result, the alternative for time-based media can provide a much more complete representation of the synchronized media content than audio description alone.",
    "benefit" : "This Success Criterion may help some people who have difficulty watching video or other synchronized media content, including people who have difficulty perceiving or understanding moving images.", 
    "category" : ["audio-video"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "1.2.4 Captions (Live)"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/captions-live.html",  
    "wcagLevel" : "AA",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to enable people who are deaf or hard of hearing to watch real-time presentations. Captions provide the part of the content available via the audio track. Captions not only include dialogue, but also identify who is speaking and notate sound effects and other significant audio.#This success criterion was intended to apply to broadcast of synchronized media and is not intended to require that two-way multimedia calls between two or more individuals through web apps must be captioned regardless of the needs of users. Responsibility for providing captions would fall to the content providers (the callers) or the “host” caller, and not the application.",
    "benefit" : "People who are deaf or have a hearing loss can access the auditory information in the synchronized media content through captions.",
    "category" : ["audio-video"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "1.2.5 Audio Description (Prerecorded)"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded.html", 
    "wcagLevel" : "AA",
    "wcagVersion" : "2.0",
    "intent" : "vThe intent of this Success Criterion is to provide people who are blind or visually impaired access to the visual information in a synchronized media presentation. The audio description augments the audio portion of the presentation with the information needed when the video portion is not available. During existing pauses in dialogue, audio description provides information about actions, characters, scene changes, and on-screen text that are important and are not described or spoken in the main sound track.",
    "benefit" : "People who are blind or have low vision as well as those with cognitive limitations who have difficulty interpreting visually what is happening benefit from audio description of visual information.",
    "category" : ["audio-video"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "1.2.6 Sign Language (Prerecorded)"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/sign-language-prerecorded.html",  
    "wcagLevel" : "AAA",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to enable people who are deaf or hard of hearing and who are fluent in a sign language to understand the content of the audio track of synchronized media presentations. Written text, such as that found in captions, is often a second language. Because sign language provides the ability to provide intonation, emotion and other audio information that is reflected in sign language interpretation, but not in captions, sign language interpretation provides richer and more equivalent access to synchronized media. People who communicate extensively in sign language are also faster in sign language and synchronized media is a time-based presentation.",
    "benefit" : "People whose human language is a sign language sometimes have limited reading ability. These individuals may not be able to read and comprehend the captions and thus require a sign language interpretation to gain access to the synchronized media content.",
    "category" : [""]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "1.2.7 Extended Audio Description (Prerecorded)"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/extended-audio-description-prerecorded.html",  
    "wcagLevel" : "AAA",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to provide people who are blind or visually impaired access to a synchronized media presentation beyond that which can be provided by standard audio description. This is done by periodically freezing the synchronized media presentation and playing additional audio description. The synchronized media presentation is then resumed.#Because it disrupts viewing for those who do not need the additional description, techniques that allow you to turn the feature on and off are often provided. Alternately, versions with and without the additional description can be provided.",
    "benefit" : "People who are blind, people with low vision who cannot see the screen, as well as those with cognitive limitations who have difficulty interpreting visually what is happening, often use audio description of the visual information. However, if there is too much dialogue the audio description is insufficient. Extended audio description can provide the additional information needed to understand the video.",
    "category" : [""]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "1.2.8 Media Alternative (Prerecorded)"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/media-alternative-prerecorded.html",  
    "wcagLevel" : "AAA",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to make audio visual material available to individuals whose vision is too poor to reliably read captions and whose hearing is too poor to reliably hear dialogue and audio description. This is done by providing an alternative for time-based media.#This approach involves providing all of the information in the synchronized media (both visual and auditory) in text form. An alternative for time-based media provides a running description of all that is going on in the synchronized media content. The alternative for time-based media reads something like a book. Unlike audio description, the description of the video portion is not constrained to just the pauses in the existing dialogue. Full descriptions are provided of all visual information, including visual context, actions and expressions of actors, and any other visual material. In addition, non-speech sounds (laughter, off-screen voices, etc.) are described, and transcripts of all dialogue are included. The sequence of descriptions and dialogue transcripts is the same as the sequence in the synchronized media itself. As a result, the alternative for time-based media can provide a much more complete representation of the synchronized media content than audio description alone.#If there is any interaction as part of the synchronized media presentation (e.g., 'press now to answer the question') then the alternative for time-based media would provide hyperlinks or whatever is needed to provide parallel functionality.#Individuals whose vision is too poor to reliably read captions and whose hearing is too poor to reliably hear dialogue can access the alternative for time-based media by using a refreshable braille display.",
    "benefit" : "People who cannot see well or at all and who also cannot hear well or at all can get access to information in audio-visual presentations.",
    "category" : [""]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "1.2.9 Audio-only (Live)"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/audio-only-live.html",  
    "wcagLevel" : "AAA",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to make information conveyed by live audio, such as video conferencing, live speeches and radio Webcasts, accessible through the use of a text alternative. A live text caption service will enable live audio to be accessible to people who are deaf or hard of hearing, or who cannot otherwise hear the audio. Such services use a trained human operator who listens in to what is being said and uses a special keyboard to enter the text with only a small delay. They are able to capture a live event with a high degree of fidelity, and also to insert notes on any non spoken audio which is essential to understanding the event. A transcript is sometimes a possibility if the live audio is following a set script; but a live caption service is preferred because it plays out at the same pace as the audio itself, and can adapt to any deviations from the script that might occur.#Using untrained operators, or providing a transcript which differs markedly from what actually happens would not be considered meeting this Success Criterion.#This success criterion was intended to apply to broadcast of audio and is not intended to require that two-way audio calls between two or more individuals through web apps must be captioned regardless of the needs of users. Responsibility for providing captions would fall to the content providers (the callers) or the “host” caller, and not the application.",
    "benefit" : "",
    "category" : [""]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "1.3.1 Info and Relationships"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html", 
    "wcagLevel" : "A",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to ensure that information and relationships that are implied by visual or auditory formatting are preserved when the presentation format changes. For example, the presentation format changes when the content is read by a screen reader or when a user style sheet is substituted for the style sheet provided by the author.",
    "benefit" : "This Success Criterion helps people with different disabilities by allowing user agents to adapt content according to the needs of individual users.#Users who are blind (using a screen reader) benefit when information conveyed through color is also available in text (including text alternatives for images that use color to convey information).#Users who are deaf-blind using braille (text) refreshable displays may be unable to access color-dependent information.",
    "category" : ["content"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "1.3.2 Meaningful Sequence"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html",  
    "wcagLevel" : "A",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to enable a user agent to provide an alternative presentation of content while preserving the reading order needed to understand the meaning. It is important that it be possible to programmatically determine at least one sequence of the content that makes sense. Content that does not meet this Success Criterion may confuse or disorient users when assistive technology reads the content in the wrong order, or when alternate style sheets or other formatting changes are applied.",
    "benefit" : "This Success Criterion may help people who rely on assistive technologies that read content aloud. The meaning evident in the sequencing of the information in the default presentation will be the same when the content is presented in spoken form.",
    "category" : ["structure"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "1.3.3 Sensory Characteristics"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics.html", 
    "wcagLevel" : "A",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to ensure that all users can access instructions for using the content, even when they cannot perceive shape or size or use information about spatial location or orientation. Some content relies on knowledge of the shape or position of objects that are not available from the structure of the content (for example, 'round button' or 'button to the right'). Some users with disabilities are not able to perceive shape or position due to the nature of the assistive technologies they use. This Success Criterion requires that additional information be provided to clarify anything that is dependent on this kind of information.",
    "benefit" : "People who are blind and people who have low vision may not be able to understand information if it is conveyed by shape and/or location. Providing additional information other than shape and/or location will allow them to understand the information conveyed by shape and/or alone.",
    "category" : ["content"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "1.3.4 Orientation"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/orientation.html", 
    "wcagLevel" : "AA",
    "wcagVersion" : "2.1",
    "intent" : "The intent of this Success Criterion is to ensure that content displays in the orientation (portrait or landscape) preferred by the user. Some websites and applications automatically set and restrict the screen to a particular display orientation and expect that users will respond by rotating their device to match, but this can create problems. Some users have their devices mounted in a fixed orientation (e.g. on the arm of a power wheelchair). Therefore, websites and applications need to support both orientations by not restricting the orientation. Changes in content or functionality due to the size of display are not covered by this criterion which is focused on restrictions of orientation.",
    "benefit" : "Users with dexterity impairments, who have a mounted device will be able to use the content in their fixed orientation.#Users with low-vision will be able to view content in the orientation that works best for them, for example to increase the text size by viewing content in landscape.",
    "category" : ["structure"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "1.3.5 Identify Input Purpose"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html", 
    "wcagLevel" : "AA",
    "wcagVersion" : "2.1",
    "intent" : "The intent of this Success Criterion is to ensure that the purpose of a form input collecting information about the user can be programmatically determined, so that user agents can extract and present this purpose to users using different modalities. The ability to programmatically declare the specific kind of data expected in a particular field makes filling out forms easier, especially for people with cognitive disabilities.",
    "benefit" : "People with language and memory related disabilities or disabilities that affects executive function and decision-making benefit from the browser auto-filling personal information (such as name or address) when the autocomplete attribute is used to meet this Success Criterion, which means information does not need to be remembered by the user.#People with cerebral palsy, stroke, head injury, motor neuron disease or learning disability sometimes prefer images for communication. They can employ assistive technology which adds icons to input fields to communicate the purpose of the fields visually.#People with motor impairments also benefit from reducing the need for manual input when filling out forms.",
    "category" : ["forms-and-UI"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "1.3.6 Identify Purpose"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose.html", 
    "wcagLevel" : "AAA",
    "wcagVersion" : "2.1",
    "intent" : "The intent of this Success Criterion is to ensure that the purpose of many elements on a page can be programmatically determined, so that user agents can extract and present that purpose to users using different modalities.#Many users with limited vocabularies rely on familiar terms or symbols in order to use the web. However, what is familiar to one user may not be familiar to another. When authors indicate the purpose, users can take advantage of personalization and user preferences to load a set of symbols or vocabulary familiar to them.#This Success Criterion requires the author to programmatically associate the purpose of icons, regions and components (such as buttons, links, and fields) so that user agents can determine the purpose of each and adapt indicators or terminology to make them understandable for the user. It is achieved by adding semantics or metadata that provide this context.#Identifying regions of the page allows people to remove or highlight regions with their user agent.#Products for people who are non-vocal often use symbols to help users communicate. These symbols are in fact people's language. Unfortunately, many of these symbols are both subject to copyright and not interoperable. That means end users can only use one device, and cannot use content, apps, or assistive technologies that have not been made by a single company.#This Success Criterion enables symbols to be interoperable so that symbol users can understand different content that was not just made by one company. When users' symbols are mapped to the same nodes, then user agents can load the user-understandable symbol. People can then buy the symbols and use them across different devices or applications. (Note that the symbols would still be proprietary, but they could then be interoperable.)",
    "benefit" : "People who benefit have many different cognitive disabilities including:#Memory#Focus and attention#Language-related#Executive function and decision making.#Meeting this Success Criterion helps users who need extra support or a familiar interface, including the need for:#Symbols and graphics with which users are familiar#Fewer features and less cognitive overload#Keyboard shortcuts",
    "category" : [""]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "1.4.2 Audio Control"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html", 
    "wcagLevel" : "A",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to ensure that all users can access information that is conveyed by color differences, that is, by the use of color where each color has a meaning assigned to it. If the information is conveyed through color differences in an image (or other non-text format), the color may not be seen by users with color deficiencies. In this case, providing the information conveyed with color through another visual means ensures users who cannot see color can still perceive the information.",
    "benefit" : "Users with partial sight often experience limited color vision.#Some older users may not be able to see color well.#Users who have color-blindness benefit when information conveyed by color is available in other visual ways.#People using text-only, limited color, or monochrome displays may be unable to access color-dependent information.#Users who have problems distinguishing between colors can look or listen for text cues.#People using Braille displays or other tactile interfaces can detect text cues by touch.",
    "category" : ["colour"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "1.4.2 Audio Control"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html", 
    "wcagLevel" : "A",
    "wcagVersion" : "2.0",
    "intent" : "Individuals who use screen reading software can find it hard to hear the speech output if there is other audio playing at the same time. This difficulty is exacerbated when the screen reader's speech output is software based (as most are today) and is controlled via the same volume control as the sound. Therefore, it is important that the user be able to turn off the background sound. Note: Having control of the volume includes being able to reduce its volume to zero.",
    "benefit" : "Individuals who use screen reading technologies can hear the screen reader without other sounds playing. This is especially important for those who are hard of hearing and for those whose screen readers use the system volume (so they cannot turn sound down and screen reader up).#This Success Criterion also benefits people who have difficulty focusing on visual content (including text) when audio is playing.",
    "category" : ["audio-video"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "1.4.3 Contrast (Minimum)"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html", 
    "wcagLevel" : "AA",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to provide enough contrast between text and its background so that it can be read by people with moderately low vision (who do not use contrast-enhancing assistive technology). For people without color deficiencies, hue and saturation have minimal or no effect on legibility as assessed by reading performance (Knoblauch et al., 1991). Color deficiencies can affect luminance contrast somewhat. Therefore, in the recommendation, the contrast is calculated in such a way that color is not a key factor so that people who have a color vision deficit will also have adequate contrast between the text and the background.#Text that is decorative and conveys no information is excluded. For example, if random words are used to create a background and the words could be rearranged or substituted without changing meaning, then it would be decorative and would not need to meet this criterion.",
    "benefit" : "People with low vision often have difficulty reading text that does not contrast with its background. This can be exacerbated if the person has a color vision deficiency that lowers the contrast even further. Providing a minimum luminance contrast ratio between the text and its background can make the text more readable even if the person does not see the full range of colors. It also works for the rare individuals who see no color.",
    "category" : ["font-size", "structure"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "1.4.4 Resize text"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html", 
    "wcagLevel" : "AA",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to ensure that visually rendered text, including text-based controls (text characters that have been displayed so that they can be seen [vs. text characters that are still in data form such as ASCII]) can be scaled successfully so that it can be read directly by people with mild visual disabilities, without requiring the use of assistive technology such as a screen magnifier. Users may benefit from scaling all content on the Web page, but text is most critical.",
    "benefit" : "This Success Criterion helps people with low vision by letting them increase text size in content so that they can read it.",
    "category" : ["font-size", "structure"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "1.4.5 Images of Text"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html", 
    "wcagLevel" : "AA",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to encourage authors, who are using technologies which are capable of achieving their desired default visual presentation, to enable people who require a particular visual presentation of text to be able to adjust the text presentation as needed. This includes people who require the text in a particular font size, foreground and background color, font family, line spacing or alignment.",
    "benefit" : "People with low vision (who may have trouble reading the text with the authored font family, size and/or color).#People with visual tracking problems (who may have trouble reading the text with the authored line spacing and/or alignment).#People with cognitive disabilities that affect reading.","category" : ["content"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "1.4.6 Contrast (Enhanced)"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html", 
    "wcagLevel" : "AAA",
    "wcagVersion" : "2.1",
    "intent" : "The intent of this Success Criterion is to provide enough contrast between text and its background so that it can be read by people with moderately low vision (who do not use contrast-enhancing assistive technology). For people without color deficiencies, hue and saturation have minimal or no effect on legibility as assessed by reading performance (Knoblauch et al., 1991). Color deficiencies can affect luminance contrast somewhat. Therefore, in the recommendation, the contrast is calculated in such a way that color is not a key factor so that people who have a color vision deficit will also have adequate contrast between the text and the background.",
    "benefit" : "People with low vision often have difficulty reading text that does not contrast with its background. This can be exacerbated if the person has a color vision deficiency that lowers the contrast even further. Providing a minimum luminance contrast ratio between the text and its background can make the text more readable even if the person does not see the full range of colors. It also works for the rare individuals who see no color.",
    "category" : [""]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "1.4.7 Low or No Background Audio"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/low-or-no-background-audio.html", 
    "wcagLevel" : "AAA",
    "wcagVersion" : "2.1",
    "intent" : "The intent of this Success Criterion is to ensure that any non-speech sounds are low enough that a user who is hard of hearing can separate the speech from background sounds or other noise foreground speech content.",
    "benefit" : "People who are hard of hearing often have great difficulty separating speech from background sound.",
    "category" : [""]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "1.4.8 Visual Presentation"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation.html", 
    "wcagLevel" : "AAA","wcagVersion" : "2.1",
    "intent" : "The intent of this Success Criterion is to ensure that visually rendered text is presented in such a manner that it can be perceived without its layout interfering with its readability. People with some cognitive, language and learning disabilities and some low vision users cannot perceive the text and/or lose their reading place if the text is presented in a manner that is difficult for them to read.",
    "benefit" : "This Success Criterion helps low vision users by letting them see text without distracting presentational features. It lets them configure text in ways that will be easier for them to see by letting them control the color and size of blocks of text.#This Success Criterion helps people with cognitive, language and learning disabilities perceive text and track their location within blocks of text.#People with some cognitive disabilities can read text better when they select their own foreground and background color combinations.#People with some cognitive disabilities can track their locations more easily when blocks of text are narrow and when they can configure the amount of space between lines and paragraphs.#People with some cognitive disabilities can read text more easily when the spacing between words is regular.",
    "category" : [""]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "1.4.9 Images of Text (No Exception)"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/images-of-text-no-exception.html", 
    "wcagLevel" : "AAA",
    "wcagVersion" : "2.1",
    "intent" : "The intent of this Success Criterion is to enable people who require a particular visual presentation of text to be able to adjust the text presentation as required. This includes people who require the text in a particular font size, foreground and background color, font family, line spacing or alignment.",
    "benefit" : "A quote.#Navigation items.#A logo containing text.#Representation of a font family.#A representation of a letter.#Symbolic text characters",
    "category" : [""]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "1.4.10 Reflow"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/reflow.html", 
    "wcagLevel" : "AA",
    "wcagVersion" : "2.1",
    "intent" : "The intent of this Success Criterion is to support people with low vision who need to enlarge text and read it in a single column. When the browser zoom is used to scale content to 400%, it reflows - i.e., it is presented in one column so that scrolling in more than one direction is not necessary.",
    "benefit" : "One column view in responsive design. A site uses responsive design. When a person zooms in to over 300%, the layout is reflowed to one column. The user can read the content easily and does not have to scroll sideways to read.#PDF offering reflow. In a PDF created to conform to PDF/Universal Accessibility (ISO 14289), the content can be reflowed and zoomed in to make reading possible for someone with low-vision.","category" : ["structure"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "1.4.11 Non-text Contrast"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html", 
    "wcagLevel" : "AA",
    "wcagVersion" : "2.1",
    "intent" : "The intent of this Success Criterion is to ensure that active user interface components (i.e., controls) and meaningful graphics are distinguishable by people with moderately low vision. The requirements and rationale are similar to those for large text in 1.4.3 Contrast (Minimum).#Low contrast controls are more difficult to perceive, and may be completely missed by people with a visual impairment. Similarly, if a graphic is needed to understand the content or functionality of the webpage then it should be perceivable by people with low vision or other impairments without the need for contrast-enhancing assistive technology.",
    "benefit" : "People with low vision often have difficulty perceiving graphics that have insufficient contrast. This can be exacerbated if the person has a color vision deficiency that lowers the contrast even further. Providing a relative luminance (lightness difference) of 3:1 or greater can make these items more distinguishable when the person does not see a full range of colors.",
    "category" : ["colour", "forms-and-UI"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "1.4.12 Text Spacing"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html",  
    "wcagLevel" : "AA",
    "wcagVersion" : "2.1",
    "intent" : "The intent of this Success Criterion (SC) is to ensure that people can override author specified text spacing to improve their reading experience. Each of the requirements stipulated in the SC's four bullets helps ensure text styling can be adapted by the user to suit their needs.#The specified metrics set a minimum baseline. The values in between the author's metrics and the metrics specified in this SC should not have loss of content or functionality.#This SC focuses on the ability to increase spacing between lines, words, letters, and paragraphs. Any combination of these may assist a user with effectively reading text. As well, ensuring users can override author settings for spacing also significantly increases the likelihood other style preferences can be set by the user. For example, a user may need to change to a wider font family than the author has set in order to effectively read text.",
    "benefit" : "People with low vision who require increased space between lines, words, and letters are able to read text.#People with dyslexia may increase space between lines, words, and letters to increase reading speed.#Although not required by this SC, white space between blocks of text can help people with cognitive disabilities discern sections and call out boxes.",
    "category" : ["structure"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "1.4.13 Content on Hover or Focus"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html",  
    "wcagLevel" : "AA",
    "wcagVersion" : "2.1",
    "intent" : "Additional content that appears and disappears in coordination with keyboard focus or pointer hover often leads to accessibility issues. Reasons for such issues include:#The user may not have intended to trigger the interaction.#The user may not know new content has appeared.#The new content may intefere with a user's ability to do a task",
    "benefit" : "Users with low vision who view content under magnification will be better able to view content on hover or focus without reducing their desired magnification.#Users who increase the size of mouse cursors via platform settings or assistive technology will be able to employ a technique to view obscured content on hover.#Users with low vision or cognitive disabilities will have adequate time to perceive additional content appearing on hover or focus and to view the trigger content with less distraction.#Users with low pointer accuracy will be able to more easily dismiss unintentionally-triggered additional content",
    "category" : ["dynamic-content", "keyboard"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.1.1 Keyboard"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html", 
    "wcagLevel" : "A",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to ensure that, wherever possible, content can be operated through a keyboard or keyboard interface (so an alternate keyboard can be used). When content can be operated through a keyboard or alternate keyboard, it is operable by people with no vision (who cannot use devices such as mice that require eye-hand coordination) as well as by people who must use alternate keyboards or input devices that act as keyboard emulators. Keyboard emulators include speech input software, sip-and-puff software, on-screen keyboards, scanning software and a variety of assistive technologies and alternate keyboards. Individuals with low vision also may have trouble tracking a pointer and find the use of software much easier (or only possible) if they can control it from the keyboard.",
    "benefit" : "People who are blind (who cannot use devices such as mice that require eye-hand coordination).#People with low vision (who may have trouble finding or tracking a pointer indicator on screen).#Some people with hand tremors find using a mouse very difficult and therefore usually use a keyboard",
    "category" : ["custom-controls", "forms-and-UI", "keyboard"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.1.2 No Keyboard Trap"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html", 
    "wcagLevel" : "A",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to ensure that that content does not 'trap' keyboard focus within subsections of content on a Web page. This is a common problem when multiple formats are combined within a page and rendered using plug-ins or embedded applications.#There may be times when the functionality of the Web page restricts the focus to a subsection of the content, as long as the user knows how to leave that state and 'untrap' the focus",
    "benefit" : "People who rely on a keyboard or keyboard interface to use the Web including people who are blind and people with physical disabilities.",
    "category" : ["keyboard"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.1.3 Keyboard (No Exception)"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/keyboard-no-exception.html", 
    "wcagLevel" : "AAA",
    "wcagVersion" : "2.1",
    "intent" : "The intent of this Success Criterion is to ensure that all content is operable from the keyboard. This is the same as Success Criterion 2.1.1, except that no exceptions are allowed. This does not mean that content where the underlying function requires input that depends on the path of the user's movement and not just the endpoints (excluded from the requirements of 2.1.1) must be made keyboard accessible. Rather, it means that content that uses path-dependent input cannot conform to this Success Criterion and therefore cannot meet Guideline 2.1 at Level AAA.",
    "benefit" : "",
    "category" : [""]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.1.4 Character Key Shortcuts"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html", 
    "wcagLevel" : "A",
    "wcagVersion" : "2.1",
    "intent" : "The intent of this Success Crition is to reduce accidental activation of keyboard shortcuts. Character key shortcuts work well for many keyboard users, but are inappropriate and frustrating for speech input users — whose means of input is strings of letters — and for keyboard users who are prone to accidentally hit keys. To rectify this issue, authors need to allow users to turn off or reconfigure shortcuts that are made up of only character keys.",
    "benefit" : "Speech users will be able to turn off single-key shortcuts so they can avoid accidentally firing batches of them at once. This will allow speech users to make full use of programs that offer single-key shortcuts to keyboard users.#Keyboard-only users who have dexterity challenges can also be prone to accidentally hitting keys. Those users would be able to avoid problematic single character shortcuts by turning them off or modifying them to include at least one non-character key.#Allowing all shortcut keys to be remapped can help users with some cognitive disabilities, since the same shortcuts can be assigned to perform the same actions across different applications.",
    "category" : ["keyboard"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.2.1 Timing Adjustable"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html", 
    "wcagLevel" : "A",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to ensure that users with disabilities are given adequate time to interact with Web content whenever possible. People with disabilities such as blindness, low vision, dexterity impairments, and cognitive limitations may require more time to read content or to perform functions such as filling out on-line forms. If Web functions are time-dependent, it will be difficult for some users to perform the required action before a time limit occurs. This may render the service inaccessible to them. Designing functions that are not time-dependent will help people with disabilities succeed at completing these functions. Providing options to disable time limits, customize the length of time limits, or request more time before a time limit occurs helps those users who require more time than expected to successfully complete tasks. These options are listed in the order that will be most helpful for the user. Disabling time limits is better than customizing the length of time limits, which is better than requesting more time before a time limit occurs.",
    "benefit" : "People with physical disabilities often need more time to react, to type and to complete activities. People with low vision need more time to locate things on screen and to read. People who are blind and using screen readers may need more time to understand screen layouts, to find information and to operate controls. People who have cognitive or language limitations need more time to read and to understand. People who are deaf and communicate in sign language may need more time to read information printed in text (which may be a second language for some).#In circumstances where a sign-language interpreter may be relating audio content to a user who is deaf, control over time limits is also important.#People with reading disabilities, cognitive limitations, and learning disabilities who may need more time to read or comprehend information can have additional time to read the information by pausing the content.",
    "category" : ["dynamic-content"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.2.2 Pause Stop Hide"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html", 
    "wcagLevel" : "A",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to avoid distracting users during their interaction with a Web page.",
    "benefit" : "Providing content that stops blinking after five seconds or providing a mechanism for users to stop blinking content allows people with certain disabilities to interact with the Web page.#One use of content that blinks is to draw the visitor's attention to that content. Although this is an effective technique for all users with vision, it can be a problem for some users if it persists. For certain groups, including people with low literacy, reading and intellectual disabilities, and people with attention deficit disorders, content that blinks may make it difficult or even impossible to interact with the rest of the Web page.",
    "category" : ["dynamic-content"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.2.3 No Timing"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/no-timing.html", 
    "wcagLevel" : "AAA",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to minimize the occurrence of content that requires timed interaction. This enables people with blindness, low vision, cognitive limitations, or motor impairments to interact with content. This differs from the Level A Success Criterion in that the only exception is for real-time events.",
    "benefit" : "People with physical disabilities often need more time to react, to type and to complete activities. People with low vision need more time to locate things on screen and to read. People who are blind and using screen readers may need more time to understand screen layouts, to find information and to operate controls. People who have cognitive or language limitations need more time to read and to understand. People who are deaf and communicate in sign language may need more time to read information printed in text (which may be a second language for some).#In circumstances where a sign-language interpreter may be relating audio content to a user who is deaf, control over time limits is also important.",
    "category" : [""]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.2.4 Interruptions"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/interruptions.html", 
    "wcagLevel" : "AAA",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to allow users to turn off updates from the author/server except in emergencies. Emergencies would include civil emergency alert messages or any other messages that warn of danger to health, safety, or property, including data loss, loss of connection, etcetera.#This allows access by people with cognitive limitations or attention disorders by enabling them to focus on the content. It also allows users who are blind or have low vision to keep their 'viewing' focus on the content they are currently reading.",
    "benefit" : "Individuals with attention deficit disorders can focus on content without distraction.#Individuals with low vision or who use screen readers will not have content updated while they are viewing it (which can lead to discontinuity and misunderstanding if they start reading in one topic and finish in another).",
    "category" : [""]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.2.5 Re-authenticating"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/re-authenticating.html", 
    "wcagLevel" : "AAA",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to allow all users to complete authenticated transactions that have inactivity time limits or other circumstances that would cause a user to be logged out while in the midst of completing the transaction.",
    "benefit" : "This Success Criterion benefits people who may require additional time to complete an activity. People with cognitive limitations may read slowly and require additional time to read and respond to a questionnaire. Users interacting via a screen reader may need extra time to navigate and complete a complicated form. A person with motor impairments or who navigates with an alternative input device may require additional time to navigate through or complete input within a form.#In circumstances where a sign-language interpreter may be relating audio content to a user who is deaf, control over time limits is also important.",
    "category" : [""]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.2.6 Timeouts"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/timeouts.html", 
    "wcagLevel" : "AAA",
    "wcagVersion" : "2.1",
    "intent" : "The intent of this Success Criterion is to ensure that when a timeout is used, users know what duration of inactivity will cause the page to time out and result in lost data. The use of timed events can present significant barriers for users with cognitive disabilities, as these users may require more time to read content or to perform functions, such as completing an online form.#During the completion of an online process, such as to reserve a hotel room or purchase a plane ticket, a user with a cognitive impairment may become overwhelmed with lengthy instructions and data input required to complete the process. The user may not be able to complete the process in one sitting and may need to take a break. Users should be able to leave a process without losing their current place within the process, and without losing information that has already been entered. If users cannot take a break and check their work, many will often be unable to complete a task correctly.#This Success Criterion works in tandem with Success Criterion 2.2.1 Timing Adjustable, but is specifically focused on notification of timeouts related to user inactivity.",
    "benefit" : "This Success Criterion helps users by ensuring they are notified about timeouts related to inactivity.#When a user knows how much time they are allowed for a task, they will know whether they can take a needed break and resume their work without needing to start again. This enables many users to complete tasks online that they otherwise could not do. If a situation exists where a timeout is necessary, the user is warned at the start of the task about the length of inactivity that would generate a timeout. The user can then decide if they can manage this task or not in the given time, or if they need to prepare materials in advance of starting a process. This will reduce the frustration of losing work due to a timeout.#This Success Criterion helps people with many different cognitive disabilities, including people with:#language-related disabilities;#  memory-related disabilities;#focus-and-attention-related disabilities; and#disabilities that affect executive function and decision making.",
    "category" : [""]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.3.1 Three Flashes or Below Threshold"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html", 
    "wcagLevel" : "A",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to allow users to access the full content of a site without inducing seizures due to photosensitivity.#Individuals who have photosensitive seizure disorders can have a seizure triggered by content that flashes at certain frequencies for more than a few flashes. People are even more sensitive to red flashing than to other colors, so a special test is provided for saturated red flashing. These guidelines are based on guidelines for the broadcasting industry as adapted for computer screens, where content is viewed from a closer distance (using a larger angle of vision).",
    "benefit" : "Individuals who have seizures when viewing flashing material will be able to view all of the material on a site without having a seizure and without having to miss the full experience of the content by being limited to text alternatives. This includes people with photosensitive epilepsy as well as other photosensitive seizure disorders.",
    "category" : ["dynamic-content"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.3.2 Three Flashes"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/three-flashes.html", 
    "wcagLevel" : "AAA",
    "wcagVersion" : "2.0",
    "intent" : "The purpose of this Success Criterion is to further reduce the chance of seizures. Seizures cannot be completely eliminated since some people are so sensitive. However, by eliminating all 3-per-second flashing over any area of the screen, the chances of a person having a seizure are further reduced than when just meeting the measures ordinarily used today in standards internationally, as we do at Level A.",
    "benefit" : "Individuals who have seizures when viewing flashing material will be able to view all of the material on a site without having a seizure and without having to miss the full experience of the content by being limited to text alternatives. This includes people with photosensitive epilepsy as well as other photosensitive seizure disorders.",
    "category" : [""]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.3.3 Animation from Interactions"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html", 
    "wcagLevel" : "AAA",
    "wcagVersion" : "2.1",
    "intent" : "The intent of this Success Criterion is to allow users to prevent animation from being displayed on Web pages. Some users experience distraction or nausea from animated content. For example, if scrolling a page causes elements to move (other than the essential movement associated with scrolling) it can trigger vestibular disorders. Vestibular (inner ear) disorder reactions include dizziness, nausea and headaches. Another animation that is often non-essential is parallax scrolling. Parallax scrolling occurs when backgrounds move at a different rate to foregrounds. Animation that is essential to the functionality or information of a web page is allowed by this Success Criterion.",
    "benefit" : "Vestibular Disorder#People with vestibular disorders need control over movement triggered by interactions. Non-essential movement can trigger vestibular disorder reactions. Vestibular (inner ear) disorder reactions include distraction, dizziness, headaches and nausea.#Persona Quote: 'Stop that extra movement! You are making me so dizzy I cannot concentrate. Now I have to turn off my computer and go lie down.'",
    "category" : [""]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.4.1 Bypass Blocks"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html", 
    "wcagLevel" : "A",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to allow people who navigate sequentially through content more direct access to the primary content of the Web page. Web pages and applications often have content that appears on other pages or screens. Examples of repeated blocks of content include but are not limited to navigation links, heading graphics, and advertising frames. Small repeated sections such as individual words, phrases or single links are not considered blocks for the purposes of this provision.",
    "benefit" : "When this Success Criterion is not satisfied, it may be difficult for people with some disabilities to reach the main content of a Web page quickly and easily:#Screen reader users who visit several pages on the same site can avoid having to hear all heading graphics and dozens of navigation links on every page before the main content is spoken.#People who use only the keyboard or a keyboard interface can reach content with fewer keystrokes. Otherwise, they might have to make dozens of keystrokes before reaching a link in the main content area. This can take a long time and may cause severe physical pain for some users.#People who use screen magnifiers do not have to search through the same headings or other blocks of information to find where the content begins each time they enter a new page.#People with cognitive limitations as well as people who use screen readers may benefit when links are grouped into lists",
    "category" : ["structure"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.4.2 Page Titled"
    },
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html", 
    "wcagLevel" : "A",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to help users find content and orient themselves within it by ensuring that each Web page has a descriptive title. Titles identify the current location without requiring users to read or interpret page content. When titles appear in site maps or lists of search results, users can more quickly identify the content they need. User agents make the title of the page easily available to the user for identifying the page. For instance, a user agent may display the page title in the window title bar or as the name of the tab containing the page.",
    "benefit" : "This criterion benefits all users in allowing users to quickly and easily identify whether the information contained in the Web page is relevant to their needs.#People with visual disabilities will benefit from being able to differentiate content when multiple Web pages are open.#People with cognitive disabilities, limited short-term memory and reading disabilities also benefit from the ability to identify content by its title.#This criterion also benefits people with severe mobility impairments whose mode of operation relies on audio when navigating between Web pages.",
    "category" : ["structure"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.4.3 Focus Order"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html", 
    "wcagLevel" : "A",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to ensure that when users navigate sequentially through content, they encounter information in an order that is consistent with the meaning of the content and can be operated from the keyboard. This reduces confusion by letting users form a consistent mental model of the content. There may be different orders that reflect logical relationships in the content. For example, moving through components in a table one row at a time or one column at a time both reflect the logical relationships in the content. Either order may satisfy this Success Criterion.",
    "benefit" : "People with mobility impairments who must rely on keyboard access for operating a page benefit from a logical, usable focus order.#People with disabilities that make reading difficult can become disoriented when tabbing takes focus someplace unexpected. They benefit from a logical focus order.#People with visual impairments can become disoriented when tabbing takes focus someplace unexpected or when they cannot easily find the content surrounding an interactive element.#Only a small portion of the page may be visible to an individual using a screen magnifier at a high level of magnification. Such a user may interpret a field in the wrong context if the focus order is not logical.",
    "category" : ["structure"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.4.4 Link Purpose (In Context)"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html", 
    "wcagLevel" : "A",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to help users understand the purpose of each link so they can decide whether they want to follow the link. Whenever possible, provide link text that identifies the purpose of the link without needing additional context. Assistive technology has the ability to provide users with a list of links that are on the Web page. Link text that is as meaningful as possible will aid users who want to choose from this list of links. Meaningful link text also helps those who wish to tab from link to link. Meaningful links help users choose which links to follow without requiring complicated strategies to understand the page.",
    "benefit" : "A link contains text that gives a description of the information at that URI.#A link is preceded by a text description of the information at that URI.#Both an icon and text are included in the same link.#A list of book titles.#News article summaries.",
    "category" : ["content", "link"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.4.5 Multiple Ways"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/multiple-ways.html", 
    "wcagLevel" : "AA",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to make it possible for users to locate content in a manner that best meets their needs. Users may find one technique easier or more comprehensible to use than another.#Even small sites should provide users some means of orientation. For a three or four page site, with all pages linked from the home page, it may be sufficient simply to provide links from and to the home page where the links on the home page can also serve as a site map.",
    "benefit" : "Providing an opportunity to navigate sites in more than one manner can help people find information faster. Users with visual impairments may find it easier to navigate to the correct part of the site by using a search, rather than scrolling through a large navigation bar using a screen magnifier or screen reader. A person with cognitive disabilities may prefer a table of contents or site map that provides an overview of the site rather than reading and traversing through several Web pages. Some users may prefer to explore the site in a sequential manner, moving from Web page to Web page in order to best understand the concepts and layout.#Individuals with cognitive limitations may find it easier to use search features than to use a hierarchical navigation scheme that is difficult to understand.",
    "category" : ["content"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.4.6 Headings and Labels"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html", 
    "wcagLevel" : "AA",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to help users understand what information is contained in Web pages and how that information is organized. When headings are clear and descriptive, users can find the information they seek more easily, and they can understand the relationships between different parts of the content more easily. Descriptive labels help users identify specific components within the content.#Labels and headings do not need to be lengthy. A word, or even a single character, may suffice if it provides an appropriate cue to finding and navigating content.",
    "benefit" : "Descriptive headings are especially helpful for users who have disabilities that make reading slow and for people with limited short-term memory. These people benefit when section titles make it possible to predict what each section contains.#Form input controls with labels that clearly describe the content that is expected to be entered helps users know how to successfully complete the form.#When headings and labels are also correctly marked up and identified in accordance with 1.3.1: Info and Relationships, this Success Criterion helps people who use screen readers by ensuring that labels and headings are meaningful when read out of context, for example, in an automatically generated list of headings/table of contents, or when jumping from heading to heading within a page.",
    "category" : ["custom-controls", "forms-and-UI"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.4.7 Focus Visible"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html", 
    "wcagLevel" : "AA",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to help users understand what information is contained in Web pages and how that information is organized. When headings are clear and descriptive, users can find the information they seek more easily, and they can understand the relationships between different parts of the content more easily. Descriptive labels help users identify specific components within the content.#Labels and headings do not need to be lengthy. A word, or even a single character, may suffice if it provides an appropriate cue to finding and navigating content.",
    "benefit" : "Descriptive headings are especially helpful for users who have disabilities that make reading slow and for people with limited short-term memory. These people benefit when section titles make it possible to predict what each section contains.#Form input controls with labels that clearly describe the content that is expected to be entered helps users know how to successfully complete the form.#When headings and labels are also correctly marked up and identified in accordance with 1.3.1: Info and Relationships, this Success Criterion helps people who use screen readers by ensuring that labels and headings are meaningful when read out of context, for example, in an automatically generated list of headings/table of contents, or when jumping from heading to heading within a page.",
    "category" : ["custom-controls", "forms-and-UI"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.4.8 Location"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/location.html", 
    "wcagLevel" : "AAA",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to provide a way for the user to orient herself within a set of Web pages, a Web site, or a Web application and find related information.",
    "benefit" : "This Success Criterion is helpful for people with a short attention span who may become confused when following a long series of navigation steps to a Web page. It is also helpful when a user follows a link directly to a page deep within a set of Web pages and needs to navigate that Web site to understand the content of that page or to find more related information.",
    "category" : [""]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.4.9 Link Purpose (Link Only)"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only.html", 
    "wcagLevel" : "AAA",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to help users understand the purpose of each link in the content, so they can decide whether they want to follow it. Best practice is that links with the same destination would have the same descriptions, but links with different purposes and destinations would have different descriptions (see also Success Criterion 3.2.4 which calls for consistency in identifying components that have the same functionality). Because the purpose of a link can be identified from its link text, links can be understood when they are out of context, such as when the user agent provides a list of all the links on a page.",
    "benefit" : "This Success Criterion helps people with motion impairment by letting them skip Web pages that they are not interested in, avoiding the keystrokes needed to visit the referenced content and then return to the current content.#People with cognitive limitations will not become disoriented by extra navigation to and from content they are not interested in.#People with visual disabilities will benefit from not losing their place in the content when they return to the original page. The screen reader's list of links is more useful for finding information because the target of the links are described.",
    "category" : [""]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.4.10 Section Headings"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/section-headings.html", 
    "wcagLevel" : "AAA",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to provide headings for sections of a Web page, when the page is organized into sections. For instance, long documents are often divided into a variety of chapters, chapters have subtopics and subtopics are divided into various sections, sections into paragraphs, etc. When such sections exist, they need to have headings that introduce them. This clearly indicates the organization of the content, facilitates navigation within the content, and provides mental 'handles' that aid in comprehension of the content. Other page elements may complement headings to improve presentation (e.g., horizontal rules and boxes), but visual presentation is not sufficient to identify document sections.",
    "benefit" : "People who are blind will know when they have moved from one section of a Web page to another and will know the purpose of each section.#People with some learning disabilities will be able to use the headings to understand the overall organization of the page content more easily.#People who navigate content by keyboard will be able to jump the focus from heading to heading, enabling them to find quickly content of interest.#In pages where content in part of the page updates, headings can be used to quickly access updated content.",
    "category" : [""]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.5.1 Pointer Gestures"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html", 
    "wcagLevel" : "A",
    "wcagVersion" : "2.1",
    "intent" : "path-based multi-point functionality can be operated with single-point actions",
    "benefit" : "",
    "category" : ["custom-controls"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.5.2 Pointer Cancellation"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html", 
    "wcagLevel" : "A",
    "wcagVersion" : "2.1",
    "intent" : "The intent of this Success Criterion is to ensure that content can be controlled with a range of pointing devices, abilities, and assistive technologies. Some people cannot perform gestures in a precise manner, or they may use a specialized or adapted input device such as a head pointer, eye-gaze system, or speech-controlled mouse emulator. Some pointing methods lack the capability or accuracy to perform multipoint or path-based gestures.#A path-based gesture involves an interaction where not just the endpoints matter. If going through an intermediate point (usually near the start of the gesture) also affects its meaning then it is a path-based gesture. The user engages a pointer (starting point), carries out a movement that goes through at least one intermediate-point before disengaging the pointer (end point). The intermediate point defines the gesture as requiring a specific path, even if the complete path is not defined.",
    "benefit" : "A web site includes a map view that supports the pinch gesture to zoom into the map content. User interface controls offer the operation using plus and minus buttons to zoom in and out.#A news site has a horizontal content slider with hidden news teasers that can moved into the viewport via horizontal swiping. It also offers forward and backward arrow buttons for single-point activation to navigate to adjacent slider content.#A kanban widget with several vertical areas representing states in a defined process allows the user to right- or left-swipe elements to move them to an adjacent silo. The user can also accomplish this by selecting the element with a single tap or click, and then activating an arrow button to move the selected element.#A custom slider requires movement in a strict left/right direction when operated by dragging the thumb control. Buttons on both sides of the slider increment and decrement the selected value and update the thumb position.",
    "category" : ["custom-controls"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.5.3 Label in Name"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html", 
    "wcagLevel" : "A",
    "wcagVersion" : "2.1",
    "intent" : "The intent of this Success Criterion is to ensure that the words which visually label a component are also the words associated with the component programmatically. This helps ensure that people with disabilities can rely on visible labels as a means to interact with the components.",
    "benefit" : "Speech-input users can directly activate controls on a page with fewer surprising changes of focus.#Text-to-speech users will have a better experience because the labels that they hear match the visible text labels that they see on the screen.",
    "category" : ["custom-controls", "forms-and-UI"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.5.4 Motion Actuation"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html", 
    "wcagLevel" : "A",
    "wcagVersion" : "2.1",
    "intent" : "The intent of this success criterion is to ensure that functions triggered by moving a device (for example, shaking or tilting) or by gesturing towards the device (so that sensors like a camera can pick up and interpret the gesturing), can also be operated by more conventional user interface components.",
    "benefit" : "This Success Criterion helps people who may be unable to perform particular motions (such as tilting, shaking, or gesturing) because the device may be mounted or users may be physically unable to perform the necessary movement. This success criterion ensures that users can still operate all functionality by other means such as touch or via assistive technologies.#Other users will benefit in situations where they are unable to move their devices.",
    "category" : ["structure"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.5.5 Target Size"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/target-size.html", 
    "wcagLevel" : "AAA",
    "wcagVersion" : "2.1",
    "intent" : "The intent of this success criteria is to ensure that target sizes are large enough for users to easily activate them, even if the user is accessing content on a small handheld touch screen device, has limited dexterity, or has trouble activating small targets for other reasons. For instance, mice and similar pointing devices can be hard to use for these users, and a larger target will help them activate the target.",
    "benefit" : "Users who use a mobile device where touch screen is the primary mode of interaction;#Users with mobility impairments such as hand tremors;#Users who use a mobile device in environments where they are exposed to shaking such as public transportation;#Users who have difficulty with fine motor movements;#Users who access a device using one hand;#Users with large fingers, or who are operating the device with only a part of their finger or knuckle;#Users who have low vision may better see the target.",
    "category" : [""]
  },
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "2.5.6 Concurrent Input Mechanisms"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/concurrent-input-mechanisms.html", 
    "wcagLevel" : "AAA",
    "wcagVersion" : "2.1",
    "intent" : "The intent of this Success Criterion is to ensure that people can use and switch between different modes of input when interacting with web content. Users may employ a variety of input mechanisms when interacting with web content. These may be a combination of mechanisms such as a keyboard or keyboard-like interfaces and pointer devices like a mouse, stylus or touchscreen.",
    "benefit" : "Users can interact with web content with whichever input mechanism is preferred and available to them.#Users may switch between input mechanisms when they desire or the circumstances require it.#Users are allowed to add and remove input mechanisms at any point, where supported by the operating system.",
    "category" : [""]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "3.1.1 Language of Page"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html", 
    "wcagLevel" : "A",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to ensure that content developers provide information in the Web page that user agents need to present text and other linguistic content correctly. Both assistive technologies and conventional user agents can render text more accurately when the language of the Web page is identified. Screen readers can load the correct pronunciation rules. Visual browsers can display characters and scripts correctly. Media players can show captions correctly. As a result, users with disabilities will be better able to understand the content.",
    "benefit" : "people who use screen readers or other technologies that convert text into synthetic speech;#people who find it difficult to read written material with fluency and accuracy, such as recognizing characters and alphabets or decoding words;#people with certain cognitive, language and learning disabilities who use text-to-speech software#people who rely on captions for synchronized media.",
    "category" : ["structure"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "3.1.2 Language of Parts"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts.html", 
    "wcagLevel" : "AA",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to ensure that user agents can correctly present content written in multiple languages. This makes it possible for user agents and assistive technologies to present content according to the presentation and pronunciation rules for that language. This applies to graphical browsers as well as screen readers, braille displays, and other voice browsers.",
    "benefit" : "people who use screen readers or other technologies that convert text into synthetic speech;#people who find it difficult to read written material with fluency and accuracy, such as recognizing characters and alphabets, decoding words, and understanding words and phrases;#people with certain cognitive, language and learning disabilities who use text-to-speech software;#people who rely on captions to recognize language changes in the soundtrack of synchronized media content.",
    "category" : ["structure"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "3.1.3 Unusual Words"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/unusual-words.html", 
    "wcagLevel" : "AAA",
    "wcagVersion" : "2.0",
    "intent" : "Certain disabilities make it difficult to understand nonliteral word usage and specialized words or usage. Certain disabilities make it difficult to understand figurative language or specialized usage. Providing such mechanisms is vital for these audiences. Specialized information intended for non-specialist readers is encouraged to satisfy this Success Criterion, even when claiming only Single-A or Double-A conformance.",
    "benefit" : "This Success Criterion may help people with cognitive, language and learning disabilities who:#have difficulty decoding words#have difficulty understanding words and phrases#have difficulty using context to aid understanding#It would also help people with visual disabilities who:#lose context when zoomed-in with a screen magnifier",
    "category" : [""]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "3.1.4 Abbreviations"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/abbreviations.html", 
    "wcagLevel" : "AAA",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to ensure that users can access the expanded form of abbreviations.",
    "benefit" : "have difficulty decoding words;#rely on screen magnifiers (magnification may reduce contextual cues);#have limited memory;#have difficulty using context to aid understanding.",
    "category" : [""]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "3.1.5 Reading Level"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/reading-level.html", 
    "wcagLevel" : "AAA",
    "wcagVersion" : "2.0",
    "intent" : "Content should be written as clearly and simply as possible. The intent of this Success Criterion is:#to ensure that additional content is available to aid the understanding of difficult or complex text;#to establish a testable measure indicating when such additional content is required.",
    "benefit" : "Have difficulty comprehending and interpreting written language (e.g., articles, instructions, or newspapers in text or braille), for the purpose of obtaining general knowledge or specific information",
    "category" : [""]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "3.1.6 Pronunciation"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/pronunciation.html", 
    "wcagLevel" : "AAA",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to help people who are blind, people who have low vision, and people with reading disabilities to understand content in cases where meaning depends on pronunciation. Often words or characters have different meanings, each with its own pronunciation. The meaning of such words or characters can usually be determined from the context of the sentence. However, for more complex or ambiguous sentences, or for some languages, the meaning of the word cannot be easily determined or determined at all without knowing the pronunciation. When the sentence is read aloud and the screen reader reads the word using the wrong pronunciation, it can be even more difficult to understand than when read visually. When words are ambiguous or indeterminate unless the pronunciation is known, then providing some means of determining the pronunciation is needed.",
    "benefit" : "have difficulty decoding words#have difficulty using context to aid understanding#use technologies that read the words aloud",
    "category" : [""]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "3.2.1 On Focus"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html", 
    "wcagLevel" : "A",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to ensure that functionality is predictable as visitors navigate their way through a document. Any component that is able to trigger an event when it receives focus must not change the context. Examples of changing context when a component receives focus include, but are not limited to:#forms submitted automatically when a component receives focus;#  new windows launched when a component receives focus;#focus is changed to another component when that component receives focus;",
    "benefit" : "This Success Criterion helps people with visual disabilities, cognitive limitations, and motor impairments by reducing the chance that a change of context will occur unexpectedly.",
    "category" : ["forms-and-UI"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "3.2.2 On Input"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/on-input.html", 
    "wcagLevel" : "A",
    "wcagVersion" : "2.0",
    "intent" : "This Success Criterion helps people with visual disabilities, cognitive limitations, and motor impairments by reducing the chance that a change of context will occur unexpectedly.",
    "benefit" : "This Success Criterion helps users with disabilities by making interactive content more predictable. Unexpected changes of context can be so disorienting for users with visual disabilities or cognitive limitations that they are unable to use the content.# Individuals who are unable to detect changes of context are less likely to become disoriented while navigating a site. For example:#  Individuals who are blind or have low vision may have difficulty knowing when a visual context change has occurred, such as a new window popping up. In this case, warning users of context changes in advance minimizes confusion when the user discovers that the back button no longer behaves as expected.#Some individuals with low vision, with reading and intellectual disabilities, and others who have difficulty interpreting visual cues may benefit from additional cues in order to detect changes of context.",
    "category" : ["forms-and-UI"]
    },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "3.2.3 Consistent Navigation"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation.html", 
    "wcagLevel" : "AA",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to encourage the use of consistent presentation and layout for users who interact with repeated content within a set of Web pages and need to locate specific information or functionality more than once. Individuals with low vision who use screen magnification to display a small portion of the screen at a time often use visual cues and page boundaries to quickly locate repeated content. Presenting repeated content in the same order is also important for visual users who use spatial memory or visual cues within the design to locate repeated content.",
    "benefit" : "Ensuring that repeated components occur in the same order on each page of a site helps users become comfortable that they will able to predict where they can find things on each page. This helps users with cognitive limitations, users with low vision, users with intellectual disabilities, and also those who are blind.",
    "category" : ["structure"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "3.2.4 Consistent Identification"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification.html", 
    "wcagLevel" : "AA",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to ensure consistent identification of functional components that appear repeatedly within a set of Web pages. A strategy that people who use screen readers use when operating a Web site is to rely heavily on their familiarity with functions that may appear on different Web pages. If identical functions have different labels (or, more generally, a different accessible name) on different Web pages, the site will be considerably more difficult to use. It may also be confusing and increase the cognitive load for people with cognitive limitations. Therefore, consistent labeling will help.",
    "benefit" : "People who learn functionality on one page on a site can find the desired functions on other pages if they are present.#When non-text content is used in a consistent way to identify components with the same functionality, people with difficulty reading text or detecting text alternatives can interact with the Web without depending on text alternatives.#People who depend on text alternatives can have a more predictable experience. They can also search for the component if it has a consistent label on different pages.",
    "category" : ["structure"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "3.2.5 Change on Request"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/change-on-request.html", 
    "wcagLevel" : "AAA",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to encourage design of Web content that gives users full control of changes of context. This Success Criterion aims to eliminate potential confusion that may be caused by unexpected changes of context such as automatic launching of new windows, automatic submission of forms after selecting an item from a list, etcetera. Such unexpected changes of context may cause difficulties for people with motor impairments, people with low vision, people who are blind, and people with certain cognitive limitations.",
    "benefit" : "Individuals who are unable to detect changes of context or may not realize that the context has changed are less likely to become disoriented while navigating a site. For example:#individuals who are blind or have low vision may have difficulty knowing when a visual context change has occurred, such as a new window popping up. In this case, warning users of context changes in advance minimizes confusion when the user discovers that the back button no longer behaves as expected.#Some individuals with low vision, with reading and intellectual disabilities, and who have difficulty interpreting visual cues may benefit from additional cues in order to detect changes of context.#People with certain cognitive limitations do not get confused if automatic redirects are performed by the Web server instead of the browser.",
    "category" : [""]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "3.3.1 Error Identification"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html", 
    "wcagLevel" : "A",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to ensure that users are aware that an error has occurred and can determine what is wrong. The error message should be as specific as possible. In the case of an unsuccessful form submission, re-displaying the form and indicating the fields in error is insufficient for some users to perceive that an error has occurred. Screen reader users, for example, will not know there was an error until they encounter one of the indicators. They may abandon the form altogether before encountering the error indicator, thinking that the page simply is not functional.",
    "benefit" : "Providing information about input errors in text allows users who are blind or colorblind to perceive the fact that an error occurred.#This Success Criterion may help people with cognitive, language, and learning disabilities who have difficulty understanding the meaning represented by icons and other visual cues.",
    "category" : ["forms-and-UI"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "3.3.2 Labels or Instructions"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html", 
    "wcagLevel" : "A",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to have content authors present instructions or labels that identify the controls in a form so that users know what input data is expected. Instructions or labels may also specify data formats for fields especially if they are out of the customary formats or if there are specific rules for correct input. Content authors may also choose to make such instructions available to users only when the individual control has focus especially when instructions are long and verbose.#The intent of this Success Criterion is not to clutter the page with unnecessary information but to provide important cues and instructions that will benefit people with disabilities. Too much information or instruction can be just as harmful as too little. The goal is to make certain that enough information is provided for the user to accomplish the task without undue confusion or navigation.",
    "benefit" : "Providing clear and unambiguous labels and instructions (including examples of expected data formats) helps all users - but particularly those with cognitive, language, and learning disabilities - to enter information correctly.#Providing clear and unambiguous labels and instructions (including clear identification of required fields) can prevent users from making incomplete or incorrect form submissions, which prevents users from having to navigate once more through a page/form in order to fix submission errors.",
    "category" : ["forms-and-UI"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "3.3.3 Error Suggestion"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html", 
    "wcagLevel" : "AA",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to ensure that users receive appropriate suggestions for correction of an input error if it is possible. The WCAG 2.0 definition of 'input error' says that it is 'information provided by the user that is not accepted' by the system. Some examples of information that is not accepted include information that is required but omitted by the user and information that is provided by the user but that falls outside the required data format or allowed values.",
    "benefit" : "Providing information about how to correct input errors allows users who have learning disabilities to fill in a form successfully. Users who are blind or have impaired vision understand more easily the nature of the input error and how to correct it. People with motion impairment can reduce the number of times they need to change an input value.",
    "category" : ["forms-and-UI"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "3.3.4 Error Prevention (Legal Financial Data)"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data.html", 
    "wcagLevel" : "AA",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to help users with disabilities avoid serious consequences as the result of a mistake when performing an action that cannot be reversed. For example, purchasing non-refundable airline tickets or submitting an order to purchase stock in a brokerage account are financial transactions with serious consequences. If a user has made a mistake on the date of air travel, he or she could end up with a ticket for the wrong day that cannot be exchanged. If the user made a mistake on the number of stock shares to be purchased, he or she could end up purchasing more stock than intended. Both of these types of mistakes involve transactions that take place immediately and cannot be altered afterwards, and can be very costly. Likewise, it may be an unrecoverable error if users unintentionally modify or delete data stored in a database that they later need to access, such as their entire travel profile in a travel services web site. When referring to modification or deletion of 'user controllable' data, the intent is to prevent mass loss of data such as deleting a file or record. It is not the intent to require a confirmation for each save command or the simple creation or editing of documents, records or other data.",
    "benefit" : "Providing safeguards to avoid serious consequences resulting from mistakes helps users with all disabilities who may be more likely to make mistakes.",
    "category" : ["content"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "3.3.5 Help"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/help.html", 
    "wcagLevel" : "AAA",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to help users avoid making mistakes. Some users with disabilities may be more likely to make mistakes than users without disabilities. Using context-sensitive help, users find out how to perform an operation without losing track of what they are doing.#Context-sensitive help only needs to be provided when the label is not sufficient to describe all functionality. The existence of context-sensitive help should be obvious to the user and they should be able to obtain it whenever they require it.#The content author may provide the help text, or the user agent may provide the help text based on technology-specific, programmatically determined information.",
    "benefit" : "Assistance for text input helps individuals with writing disabilities and people with reading and intellectual disabilities who often have difficulty writing text in forms or other places that need text input.#Additionally, these kinds of assistance help people who are aging and have the same difficulty in text input and/or mouse operation.",
    "category" : [""]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "3.3.6 Error Prevention (All)"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-all.html", 
    "wcagLevel" : "AAA",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to help users with disabilities avoid consequences that may result from making a mistake when submitting form data. This criterion builds on Success Criterion 3.3.4 in that it applies to all forms that require users to submit information.",
    "benefit" : "Providing safeguards to avoid consequences resulting from mistakes helps users with all disabilities who may be more likely to make mistakes.",
    "category" : [""]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "4.1.1 Parsing"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/parsing.html", 
    "wcagLevel" : "A",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to ensure that user agents, including assistive technologies, can accurately interpret and parse content. If the content cannot be parsed into a data structure, then different user agents may present it differently or be completely unable to parse it. Some user agents use 'repair techniques' to render poorly coded content.",
    "benefit" : "Ensuring that Web pages have complete start and end tags and are nested according to specification helps ensure that assistive technologies can parse the content accurately and without crashing.",
    "category" : ["structure"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "4.1.2 Name Role Value"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html", 
    "wcagLevel" : "A",
    "wcagVersion" : "2.0",
    "intent" : "The intent of this Success Criterion is to ensure that Assistive Technologies (AT) can gather information about, activate(or set) and keep up to date on the status of user interface controls in the content.",
    "benefit" : "Providing role, state, and value information on all user interface components enables compatibility with assistive technology, such as screen readers, screen magnifiers, and speech recognition software, used by people with disabilities.",
    "category" : ["custom-controls", "forms-and-UI"]
  },
  
  {
    "understandingCriteria" : 
    {
      "cat" : "", 
      "es" : "", 
      "en" : "4.1.3 Status Messages"
    }, 
    "link" : "https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html", 
    "wcagLevel" : "AA",
    "wcagVersion" : "2.1",
    "intent" : "The intent of this Success Criterion is to make users aware of important changes in content that are not given focus, and to do so in a way that doesn't unnecessarily interrupt their work.#The intended beneficiaries are blind and low vision users of assistive technologies with screen reader capabilities. An additional benefit is that assistive technologies for users with cognitive disabilities may achieve an alternative means of indicating (or even delaying or supressing) status messages, as preferred by the user.",
    "benefit" : "When appropriate roles or properties are assigned to status messages, the new content is spoken by screen readers in such a way as to assist blind and low vision users. Most sighted users can observe text peripherally added to the viewport. Such content provides additional information without affecting the user's current point of regard. The ability of an assistive technology to announce such new important text content allows more users to benefit from an awareness of the information in an equivalent manner.#Assigning proper roles or properties to status messages provides possible future uses and personalization opportunities, such as the potential to be exploited by assistive technologies created for users with some cognitive disabilities. Where page authors elect to design additions to the screen which do not change the user's context (i.e., take focus), the information is arguably of less importance than something presented using a modal dialog, which must be acknowledged by the user. As such, depending on the user's preferences, an assistive technology may choose to delay, suppress, or transform such messages so a user is not unnecessarily interrupted; or conversely the assistive technology may highlight such messages where the user finds it optimal to do so.",
    "category" : ["custom-controls"]
  }
  
  ]
  };