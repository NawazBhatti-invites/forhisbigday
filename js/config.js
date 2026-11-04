/* Public settings only. Never put secrets here. */
window.WEDDING_CONFIG = {
  /* Paste your Google Apps Script web app URL here (see backend/README.md), e.g.
     https://script.google.com/macros/s/XXXXXXXX/exec */
  rsvpEndpoint: "https://script.google.com/macros/s/AKfycbw36p-AC-tVYnRxDgg8LB68nJSaYjP_ZwlVYDeckhnB-c-65k4RbUX2m5GaCysY9zSNjQ/exec",

  music: {
    volume: 60,          /* 0 to 100 */
    startSeconds: 0      /* assets/audio/wedding-music.mp3 already begins at the 19th second of the song; if you replace the file with a full-length one, set 19 here */
  }
};
