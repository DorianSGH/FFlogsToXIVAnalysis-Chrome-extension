(function () {
  // Prevent duplicate injection
  if (document.getElementById("xivanalysis-tab")) return;

  // Extract report ID
  const reportMatch = window.location.pathname.match(/\/reports\/([a-zA-Z0-9]+)/);
  if (!reportMatch) return;

  const reportId = reportMatch[1];

  // Extract fight ID
  const params = new URLSearchParams(window.location.search);
  const fightId = params.get("fight");
  const sourceId = params.get("source");

  let xivUrl = `https://xivanalysis.com/fflogs/${reportId}`;

  if (fightId) {
    xivUrl += `/${fightId}`;
  }

  if (fightId && sourceId) {
    xivUrl += `/${sourceId}`;
  }

  // Find the FFLogs tab container
  const tabContainer = document.getElementById("top-level-view-tabs");
  if (!tabContainer) return;

  // Create tab link
  const tab = document.createElement("a");
  tab.id = "xivanalysis-tab";
  tab.className = "big-tab view-type-tab";
  tab.href = xivUrl;
  tab.target = "_blank";
  tab.title = "Open in XIVAnalysis";

  // Logo image
  const img = document.createElement("img");
  img.src = "https://xivanalysis.com/logo.png";
  img.alt = "XIVAnalysis";

  tab.appendChild(img);

  tabContainer.insertBefore(tab,tabContainer.firstChild);
})();
