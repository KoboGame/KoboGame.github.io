// ---------------------------------------------------------------------------
// Kobö website settings: the only two lines you need to edit.
//   APP_STORE_URL : paste your App Store link here once the game is live,
//                   e.g. "https://apps.apple.com/app/id1234567890"
//                   (empty = the button says COMING SOON)
//   DONATE_URL    : paste your Ko-fi / Buy Me a Coffee / PayPal link here
//                   (empty = the "Support the game" section stays hidden)
// ---------------------------------------------------------------------------
var APP_STORE_URL = "";
var DONATE_URL = "";

document.querySelectorAll("[data-appstore]").forEach(function (a) {
  if (APP_STORE_URL) { a.href = APP_STORE_URL; a.textContent = "GET IT ON THE APP STORE"; a.classList.remove("soon"); a.classList.add("red"); }
  else { a.removeAttribute("href"); a.textContent = "COMING SOON TO THE APP STORE"; a.classList.add("soon"); }
});
document.querySelectorAll("[data-donate-section]").forEach(function (s) { s.hidden = !DONATE_URL; });
document.querySelectorAll("[data-donate]").forEach(function (a) { if (DONATE_URL) a.href = DONATE_URL; });
