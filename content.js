(function () {
  if (document.getElementById("xivanalysis-tab")) return;

  const tabContainer = document.getElementById("top-level-view-tabs");
  if (!tabContainer) return;

  // Create tab link
  const tab = document.createElement("a");
  tab.id = "xivanalysis-tab";
  tab.className = "big-tab view-type-tab";
  tab.href = "#"; // dummy
  tab.title = "Open in XIVAnalysis";

  // Using XIV analysis image
  const img = document.createElement("img");
  img.src = "https://xivanalysis.com/logo.png";
  img.alt = "XIVAnalysis";

  tab.appendChild(img);

  tab.addEventListener("click", function (e) {
    e.preventDefault();

    // Extract report ID
    const reportMatch = window.location.pathname.match(/\/reports\/([a-zA-Z0-9]+)/);
    if (!reportMatch) return;

    const reportId = reportMatch[1];

    // Extract fight ID
    const params = new URLSearchParams(window.location.search);
    const fightId = params.get("fight");
    const sourceId = params.get("source");

    let xivUrl = `https://xivanalysis.com/fflogs/${reportId}`;

    if (fightId) xivUrl += `/${fightId}`;
    if (fightId && sourceId) xivUrl += `/${sourceId}`;

    window.open(xivUrl, "_blank");
  });

  // Insert Button into tab
  tabContainer.insertBefore(tab, tabContainer.firstChild);
})();
