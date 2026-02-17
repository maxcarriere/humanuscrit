---
title: Suivre l'évolution
layout: page
permalink: /evolution/
---

<h2>Suivre l'évolution</h2>

<p>Visualisation de l’évolution des visites du projet. Données issues de <code>assets/data/visits.json</code>, mises à jour manuellement ou par automatisation.</p>

<p><strong>À noter :</strong> le <strong>graphique</strong> ci‑dessous lit un fichier de données (historique). Le <strong>Nombre de visiteurs</strong> sur la page d’accueil vient, lui, du compteur en direct (countapi.xyz). Ce sont deux sources différentes — il est donc normal que les chiffres ne correspondent pas tant que <code>visits.json</code> n’est pas synchronisé avec ce compteur.</p>

<div id="filters" class="evolution-filters">
  <button type="button" onclick="updateRange(7)">1 semaine</button>
  <button type="button" onclick="updateRange(30)">1 mois</button>
  <button type="button" onclick="updateRange(90)">3 mois</button>
  <button type="button" onclick="updateRange(9999)">Début</button>
</div>

<canvas id="trafficChart" class="evolution-chart"></canvas>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
(function() {
  var fullData = [];
  var chart;

  // Chargement des données historiques (fichier mis à jour manuellement ou par agent)
  fetch('{{ "/assets/data/visits.json" | relative_url }}')
    .then(function(res) { return res.json(); })
    .then(function(data) {
      fullData = data;
      initChart(data);
    });

  function initChart(data) {
    var ctx = document.getElementById('trafficChart');
    if (!ctx) return;
    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map(function(d) { return d.date; }),
        datasets: [{
          label: 'Évolution des visites',
          data: data.map(function(d) { return d.visits; }),
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true }
        }
      }
    });
  }

  window.updateRange = function(days) {
    if (!chart || !fullData.length) return;
    var lastDate = new Date(fullData[fullData.length - 1].date);
    var filtered = fullData.filter(function(d) {
      var diff = (lastDate - new Date(d.date)) / (1000 * 60 * 60 * 24);
      return diff <= days;
    });
    chart.data.labels = filtered.map(function(d) { return d.date; });
    chart.data.datasets[0].data = filtered.map(function(d) { return d.visits; });
    chart.update();
  };
})();
</script>
