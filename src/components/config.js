const config = {
  // 🔐 Passcode Page
  correctPasscode: "0902", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter Passcode", // Title displayed on the passcode entry page
  successMessage: "Yayy!! :)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode. Hint: Month and Day we started talking!", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "What makes Lee fall for Arianne?", // Example trending search query
    "Who's the most beautiful girl in the world?", // Another example query
    `How did it all begin?`, // A personalized trending search
  ],
  proTip: 'Pro tip: try searching "How long have we been together?" last <3', // Helpful tip for users
  leeFallsForArianneAnswer: "Lee fell in love with Arianne because of her beautiful smile, her kind heart, and the way she makes every day brighter. Her laughter is like music to his ears, and her presence brings warmth and joy to his life. Arianne's genuine care, her intelligence, and the way she sees the world with wonder and positivity captured Lee's heart completely. Every moment with her feels special, and he's grateful for every day they get to spend together. 💖", // Answer shown when searching "What makes Lee fall for Arianne?"
  mostBeautifulGirlAnswer: "Without a doubt, Arianne Lonzaga is indeed the most beautiful girl in the world. Her beauty isn't just in her appearance, but in everything that makes her who she is. Her smile lights up my world, her kind heart touches everyone she meets, and her inner beauty shines through in everything she does. To Lee, Arianne is not just beautiful, she's perfect in every way. Her grace, her charm, her intelligence, and her loving nature make her the most beautiful person in the entire world. 💖", // Answer shown when searching "Who's the most beautiful girl in the world?"
  mostBeautifulGirlImages: [
    "../assets/beautiful1.jpg", // First image for the beautiful girl blog post
    "../assets/beautiful2.jpg", // Second image for the beautiful girl blog post
    "../assets/beautiful3.jpg", // Third image for the beautiful girl blog post
  ], // Images to display in the beautiful girl blog post

  // ⏳ Timer Page
  anniversaryDate: "2025-09-02", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "We've been together for:", // Title displayed on the timer page
  timerMessage: "... and still counting <3", // Message shown alongside the timer
  timeUnits: {
    months: "Months", // Label for months in the timer
    days: "Days", // Label for days in the timer
    hours: "Hours", // Label for hours in the timer
    minutes: "Minutes", // Label for minutes in the timer
    seconds: "Seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Some collections and memories I collected and we shared <3", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact
  pictureSectionVideo: "recap-video", // Video filename (without extension) for the Picture section in recap - place file as recap-video.mp4, recap-video.webm, or recap-video.mov in assets folder

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    {
      title: "Libu-libong Buwan", // Title of the song
      artist: "Kyle Raphael", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
      spotifyUrl: "https://open.spotify.com/track/3cZUIZ8i74C1Kvnix4xZez", // Spotify embed URL (optional)
      mp3Url: "", // MP3 file path (e.g., "../assets/music/song1.mp3") - if provided, will use MP3 instead of Spotify
    },
    {
      title: "Buwan",
      artist: "Juan Karlos",
      left: "40%",
      top: "15%",
      spotifyUrl: "https://open.spotify.com/track/5f9808hpiCpuNyqqdXmpF2", // Spotify embed URL
      mp3Url: "", // MP3 file path
    },
    {
      title: "Ang Pagibig",
      artist: "Rob Lee",
      left: "15%",
      top: "40%",
      spotifyUrl: "https://open.spotify.com/track/639Wg7NFfgbwjSwDphqgvz", // Spotify embed URL
      mp3Url: "", // MP3 file path
    },
    {
      title: "Alipin",
      artist: "Shamrock",
      left: "30%",
      top: "75%",
      spotifyUrl: "https://open.spotify.com/embed/track/3KhjY6JxrGo6ii77SbILG7?utm_source=generator", // Spotify embed URL
      mp3Url: "", // MP3 file path
    },
    {
      title: "Ako'y Sayo at Ika'y Akin Lamang",
      artist: "IAXE",
      left: "5%",
      top: "65%",
      spotifyUrl: "https://open.spotify.com/track/0ldS4FD0ANgWa4TXa0OzSc", // Spotify embed URL
      mp3Url: "", // MP3 file path
    },
    {
      title: "Ikaw Lang",
      artist: "Nobita",
      left: "25%",
      top: "90%",
      spotifyUrl: "https://open.spotify.com/track/4legZBvlei0pwnrzzxMzol", // Spotify embed URL
      mp3Url: "", // MP3 file path
    },
    {
      title: "Paraluman",
      artist: "Adie",
      left: "35%",
      top: "50%",
      spotifyUrl: "https://open.spotify.com/track/2jbf9EytR7fzpSrPWAYCf9", // Spotify embed URL
      mp3Url: "", // MP3 file path
    },
    {
      title: "Bawat Piyesa",
      artist: "Munimuni",
      left: "10%",
      top: "25%",
      spotifyUrl: "https://open.spotify.com/track/1tC2PLqLeJXt0VlgOYpc6m", // Spotify embed URL
      mp3Url: "", // MP3 file path
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "Our Messages", // Title for the messages recap page
    messageGallery: [
      { title: "October 10, 2025", description: "Our shift to Messenger <3 Eto yung una nating chat sa messenger love! As always consistent ako, kung ano yung una kong chat sa PopUp ganun din dito eh 'no? HAHAHA." }, // Message entry
      { title: "October 20, 2025", description: "Unang tampuhan din natin dito HAHAHAHAHA. I just wanted to tell you lvoe na never ka magiging option po, okie? I know alam mo na 'yan pero gusto ko lang ulitin na always kitang priority <3" },
      { title: "October 21, 2025", description: "And siyempre yung unang Iloveyou natin sa isa't isa 'Di ko makakalimutan 'yan. Medyo napansin ko lang din ngayon love kesa diba after ng tampuhan natin kahapon nun that time, kinabukasan nag iloveyouhan na tayo? HAHAHA" },
    ],
  
    // 📸 Videos Recap Page
    videosTitle: "Our Videos", // Title for the videos recap page
    pictureTitle: "Our Pictures", // Title for the pictures recap page (kept for backward compatibility)
    voiceRecordingsTitle: "Your Voice Recordings", // Title for voice recordings section
    pictureGallery: [
      { title: "January 1, 2024", description: "New Year's Celebration 🎉" }, // Picture entry
      { title: "February 14, 2024", description: "Valentine's Day 💕" },
      { title: "March 10, 2024", description: "Beach trip memories 🏖️" },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "Hi my lovey! Before ka mag next page, gusto ko lang sabihin sa'yo na always akong nagpapasalamat na nakilala kita <3 Mahal na mahal po kita ng sobra sobra. Love you so much my lovey <3",
  // 💍 Proposal Page (Triggered by searching "143")
  // Ring Verification Section
  ringVerificationTitle: "Before we proceed", // Title for ring verification section
  ringVerificationQuestion: "Did you receive the promise ring I've gifted?", // Question about the ring
  ringVerificationInstruction: "Please take a picture of your finger wearing the ring and upload it as proof.", // Instruction for image upload
  ringVerificationScanning: "Scanning image...", // Message while scanning
  ringVerificationReceived: "Ring verified! Thank you lovey! <3", // Message after verification
  proposalWelcome: "Welcome, lovey!", // Welcome title
  proposalWelcomeMessage: "You've found something special...", // Welcome message
  proposalWelcomeMusic: "/music1.mp3", // Music file to auto-play on welcome (leave empty to disable)
  
  // Story 1 - LDR Journey (Left: Text, Right: Images)
  proposalStory1Title: "To my most beautiful love of my life <3", // First story part title
  proposalStory1Content: "Hi my lovey! 2026 is almost here na and I'm so happy na dumating ka sa buhay ko, ikaw ang nagpasaya ng 2025 ko and I'm so grateful na nakilala kita sa PopUp love. Sayang lang kung na-access ko pa yung app na 'yun edi sana naglagay ako ng mga memories natin HAHAHAHA pero it's okay padin kasi who would have thought na yung dating strangers is aabot sa gan'to? Tapos nung nag shift tayo sa messenger, yung akala mo na baka maging awkward or magbago yung connection natin, iba pala yung nangari. Mas naging panatag at lumakas yung connection natin love hanggang sa nag iloveyouhan tayo sa isa't isa yieee HAHAHAH hinding hidni ko makakalimutan 'yun. Hanggang sa na celebrate ko yung christmas with you, and soon pati yung new year love! Ang daming nangyari love in just 3 months na magkakilala tayo and mas madami pa tayong memories na gagawin next year! Literal na hindi hadlang sa'tin yung distansya, kapag mahal mo yung isang tao, hindi mag-mamatter kung gaano tayo kalayo sa isa't isa. ", // First story part content
  proposalStory1Images: [
    "/assets/beautiful1.jfif",
    "/assets/beautiful2.jfif",
    "/assets/beautiful3.jfif"
  ], // Images for LDR Journey (max 3)
  
  // Story 2 - Growing Together (Two sections: Kilig Moments & Tampuhan)
  proposalStory2Title: "Growing Together", // Second story part title
  proposalStory2KiligTitle: "Kilig Moments", // Title for kilig moments section
  proposalStory2KiligContent: "Through every challenge and every joy, we've grown stronger. Your presence in my life has been the greatest gift love, and I'm grateful for every day we get to share. Pipiliin kita araw araw love, mahal na mahal po kita!", // Content for kilig moments
  proposalStory2TampuhanTitle: "Tampuhan", // Title for tampuhan section
  proposalStory2TampuhanContent: "Even in our disagreements, we learn and grow. Kahit minsan masyadong matigas ulo ko, mas pinipili mong mag-stay. Every misunderstanding becomes a chance to understand each other better, to love deeper, and to strengthen our bond.", // Content for tampuhan
  
  // Story 3 - I Love You (Image top, Text bottom)
  proposalStory3Title: "The First 'I Love You'", // Third story part title
  proposalStory3Content: "Kagaya ng sinabi ko kanina, love kung alam mo lang hinding hindi ko 'to papalagpasin! HAHAHHA feel ko deserve 'to ng long sweet message pero I think hindi na 'no? Alam mo naman na kahit paulit ulit yung iloveyou natin sa isa't isa, sobra at sobrang nakakakilig padin. Lovey napaka unexpected na that time, October 21, is nag iloveyouhan tayo HAAHHAHAHAH nakakakilig", // Third story part content
  proposalStory3Image: "/assets/MessageImage3.png", // Image for I Love You story
  nextButtonText: "Next", // Text for the Next button in story parts
  
  // 📅 2025 Recap Section
  proposalRecap2025Title: "Our 2025 Journey", // Title for the 2025 recap section
  proposalRecap2025Items: [
    { title: "September 2025", description: "We started talking and getting to know each other better. Eto din yung month na sobra akong nahook sa'yo nun, as in gustong gusto kita makilala." },
    { title: "October 2025", description: "Our bond grew stronger. Lalo na nung nag messenger tayo, andaming nangyari and eto din yung month na sobrang nakakakilig." },
    { title: "November 2025", description: "Eto yung month na ups and downs, may mga kilig and tampuhan, pero siyempre mas nangingibabaw padin yung kilig!" },
    { title: "December 2025", description: "Feel ko eto yung month na makakatalo sa October? HAHAHAH!" },
    // Add more items as needed
  ],
  
  // 💌 Promises Section
  proposalPromisesTitle: "My Promises to You", // Title for the promises section
  proposalPromises: [
    { title: "Promise 1", message: "I promise to always be there for you, no matter the distance, tampuhan, circumstances. I will forver choose you." },
    { title: "Promise 2", message: "I promise to support your dreams and be your biggest fanboy." },
    { title: "Promise 3", message: "I promise to love you unconditionally, through good times and bad." },
    { title: "Promise 4", message: "I promise to travel with you, to fulfill our dream destination." },
    { title: "Promise 5", message: "I promise to you that I will be cancer-free, so that I could marry you." },


    // Add more promises as needed
  ],
  
  // 📋 Plans Section (2026)
  proposalPlans2026Title: "Our Plans for 2026", // Title for the plans section
  proposalPlans2026: [
    { title: "Plan 1", message: "I plan to visit you and spend quality time together in person. Liligawan pa kita." },
    { title: "Plan 2", message: "I plan to make you the most happiest girl in the world." },
    { title: "Plan 3", message: "I plan to create more beautiful memories and celebrate special occasions together." },
    { title: "Plan 4", message: "I plan to grow our relationship and build our future together." },
    { title: "Plan 5", message: "I plan to teach you all the things I'm good at, even if it's out of your interest." },

    // Add more plans as needed
  ],
  
  // ❓ Proposal Question
  proposalQuestion: "So love... I think this is the right time na, and I've been really thinking about this for so long. Will you be my girlfriend?", // The proposal question
  proposalYesButton: "Yes", // Text for the Yes button
  proposalNoButton: "No", // Initial text for the No button
  proposalNoButtonTexts: ["No", "Are you sure?", "Really?", "Please?", "Last chance!"], // Array of texts for No button when clicked
  
  // 🎉 Official State
  proposalOfficialTitle: "OFFICIALLY OURS! 💕", // Title for the official state
  proposalOfficialMessage: "Thank you Love! Finally you're officially mine na, love.", // Message for the official state
  proposalPromiseTitle: "My Promise to You", // Title for the promise section
  proposalPromise: "I promise to love you through every distance, support you in every dream, and cherish every moment we share. You are my forever, and I am yours. Next year, I'll keep pursuing you but this time, it's personal na. Liligawan kita love, hintayin mo lang ako.", // The heartfelt promise
  
  // 📜 Certificate Configuration
  certificateTitle: "OFFICIAL CERTIFICATE", // Certificate main title
  certificateSubtitle: "of Labeled Relationship", // Certificate subtitle
  certificatePartner1Name: "Lee Bernard A. Nillar", // First partner's name
  certificatePartner2Name: "Arianne S. Lonzaga", // Second partner's name
  certificateDate: "", // Leave empty for auto date, or specify custom date string

  // 🎇 Closing Page
  closingMessage: "Hi ulit my love! Since eto na yung closing message ko for this website HAHAHAH unang una happy december to us! mag papasko't new year na HAHAHHA! and gusto ko lang mag sorry ulit love sa last na tampuhan natin, yung natulugan kita sa time na need na need mo'ko. I'm sincerly apologize po since gawa din po talaga ng pagod love, 'di ko gusto na matulugan ka nun that time, balak ko lang talaga mag nap nun eh. :(( anyways I know love na medyo magaan na loob mo sa'kin and it's matter of time nalang na patawarin mo na'ko fully, so 'di na'ko maglalagay ng yes or no button as usual kung pinapatawad mo na'ko. I'll prove it all by my actions nalang. that's all my lovey! iloveyousomuch!!)) ", // Closing message displayed

  /* 
  ████████████████████████████████████████SSSS
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "How long have we been together?", // Example of a correct search query
    "how long have we been together", // Another example of a correct search query
  ],
};

export default config;
