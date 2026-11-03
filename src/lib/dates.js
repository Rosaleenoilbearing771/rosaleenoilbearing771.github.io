export function formatPostDate(value, lang = "en") {
  if (!value) return lang === "es" ? "Sin fecha" : "Undated";
  const date = new Date(`${value}`.slice(0, 10) + "T12:00:00Z");
  if (Number.isNaN(date.getTime())) return value;
  return date
    .toLocaleDateString(lang === "es" ? "es-ES" : "en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    })
    .toUpperCase();
}