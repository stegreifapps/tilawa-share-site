const params = new URLSearchParams(window.location.search);
const path = window.location.pathname;
const forcedType = document.body.dataset.shareType;

const shareType = forcedType || (path.includes("/plan")
  ? "plan"
  : path.includes("/audio")
    ? "audio"
    : "reading");

const surah = params.get("surah") || "-";
const from = params.get("from") || "-";
const to = params.get("to") || from;
const daily = params.get("daily");
const repeats = params.get("repeats");
const mode = params.get("mode") || defaultModeForType(shareType);

function defaultModeForType(type) {
  if (type === "audio") return "listen";
  if (type === "plan") return "repeat";
  return "read";
}

function modeLabel(value) {
  switch (value) {
    case "repeat": return "Nachsprechen";
    case "read": return "Lesen";
    case "listen": return "Zuhören";
    default: return value || "-";
  }
}

function shareLabel(type) {
  switch (type) {
    case "audio": return "Geteilter Audio-Inhalt";
    case "plan": return "Geteilter Lernplan";
    default: return "Geteilter Lesebereich";
  }
}

function shareSubtitle(type) {
  switch (type) {
    case "audio":
      return "Dieser Bereich führt direkt in den Audio-Modus von Tilawa.";
    case "plan":
      return "Dieser Lernplan kann direkt in Tilawa übernommen und gestartet werden.";
    default:
      return "Dieser Bereich kann direkt in Tilawa gelesen oder weiter bearbeitet werden.";
  }
}

document.getElementById("share-type").textContent = shareLabel(shareType);
document.getElementById("title").textContent = `Sura ${surah}`;
document.getElementById("subtitle").textContent = shareSubtitle(shareType);
document.getElementById("surah").textContent = `Sura ${surah}`;
document.getElementById("range").textContent = from === to ? `Ayah ${from}` : `Ayah ${from} bis ${to}`;
document.getElementById("mode").textContent = modeLabel(mode);
document.getElementById("plan").textContent = daily && repeats
  ? `${daily} Ayat/Tag · ${repeats} Wiederholungen`
  : "Kein Lernplan";

const badges = [];
if (shareType === "plan") badges.push("Lernplan");
if (daily) badges.push(`${daily} Ayat/Tag`);
if (repeats) badges.push(`${repeats} Wiederholungen`);
badges.push(modeLabel(mode));

const badgeRow = document.getElementById("badge-row");
badges.forEach((text) => {
  const span = document.createElement("span");
  span.className = "badge";
  span.textContent = text;
  badgeRow.appendChild(span);
});

document.getElementById("open-app-link").href = window.location.href;
