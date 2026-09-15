const visitedCommunes = new Set(
  (window.VISITED_ISTAT || [])
    .map(String)
    .map(code => code.padStart(6, "0"))
);

function isVisited(code) {
  if (!code) return false;

  return visitedCommunes.has(
    String(code).padStart(6, "0")
  );
}

function getComuneData(code) {
  if (!code) return null;

  const normalized =
    String(code).padStart(6, "0");

  return (
    window.COMUNI_DATA?.[normalized] ||
    null
  );
}

function formatNumber(number) {
  return Number(number).toLocaleString("it-IT");
}