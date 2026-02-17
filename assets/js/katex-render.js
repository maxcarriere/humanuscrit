/**
 * Rendu des formules LaTeX avec KaTeX.
 * Déclenché après DOMContentLoaded (et un délai court) pour laisser le contenu
 * Jekyll totalement prêt. Évite que certaines formules soient ignorées.
 */
function runKatex() {
  if (typeof renderMathInElement !== "function") return;
  var el = document.querySelector(".parchment-content");
  if (!el) return;
  renderMathInElement(el, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false }
    ],
    throwOnError: false,
    preProcess: function (math) {
      return math.replace(/\s+/g, " ").trim();
    }
  });
}
function initKatex() {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(runKatex, 50);
    });
  } else {
    setTimeout(runKatex, 50);
  }
}
initKatex();
