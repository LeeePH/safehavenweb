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

  // 🎇 Closing Page
  closingMessage: "Hi ulit my love! Since eto na yung closing message ko for this website HAHAHAH unang una happy december to us! mag papasko't new year na HAHAHHA! and gusto ko lang mag sorry ulit love sa last na tampuhan natin, yung natulugan kita sa time na need na need mo'ko. I'm sincerly apologize po since gawa din po talaga ng pagod love, 'di ko gusto na matulugan ka nun that time, balak ko lang talaga mag nap nun eh. :(( anyways I know love na medyo magaan na loob mo sa'kin and it's matter of time nalang na patawarin mo na'ko fully, so 'di na'ko maglalagay ng yes or no button as usual kung pinapatawad mo na'ko. I'll prove it all by my actions nalang. that's all my lovey! iloveyousomuch!!)) ", // Closing message displayed

  /* 
  ████████████████████████████████████████
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
