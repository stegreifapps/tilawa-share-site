# Tilawa Share Site

Statische Share-Landing-Page fuer `www.gettilawa.com`.

## Enthalten

- `/.well-known/apple-app-site-association` fuer iOS Universal Links
- `index.html` als Startseite
- `share/index.html` als universelle Share-Seite fuer Lesen, Audio und Lernplaene
- `.nojekyll`, damit `.well-known` auf GitHub Pages sauber ausliefert
- `CNAME` fuer `www.gettilawa.com`

## Beispiel-URLs

- `https://www.gettilawa.com/share/reading?surah=2&from=255&to=257`
- `https://www.gettilawa.com/share/audio?surah=67&from=1&to=10&mode=listen`
- `https://www.gettilawa.com/share/plan?surah=67&from=1&to=10&daily=2&repeats=3&mode=repeat`

## GitHub Pages

1. Neues Repository anlegen, z. B. `tilawa-share-site`
2. Inhalt dieses Ordners in das Repo kopieren
3. GitHub Pages fuer den Default-Branch aktivieren
4. Custom Domain auf `www.gettilawa.com` setzen
5. HTTPS aktivieren

## DNS

- `www` als `CNAME` auf `<github-user>.github.io`
- Root-Domain `gettilawa.com` optional per Redirect auf `https://www.gettilawa.com`

## iOS

In Xcode bei der App:

- Capability `Associated Domains`
- Eintrag `applinks:www.gettilawa.com`

Danach kann iOS Links unter `/share/*` direkt in die App oeffnen.
