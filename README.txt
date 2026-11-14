KOBÖ WEBSITE (for https://kobogame.github.io)

Upload everything in this folder to the ROOT of your kobogame.github.io repository on GitHub:
  index.html      landing page
  contact.html    contact + help (use as the Support URL in App Store Connect)
  privacy.html    privacy policy (use as the Privacy Policy URL in App Store Connect)
  site.css, site.js, assets/

IMPORTANT: your old privacy policy was the site's index.html. It is now privacy.html,
so the Privacy Policy URL changes to https://kobogame.github.io/privacy.html

To add your links later, edit the two lines at the top of site.js:
  APP_STORE_URL = "https://apps.apple.com/app/idXXXXXXXXXX"   -> the button turns red and links to the store
  DONATE_URL    = "https://ko-fi.com/yourname"                -> the "Support the game" section appears

Keep app-ads.txt in the root of the repository too (see the release sheet, part 8).
