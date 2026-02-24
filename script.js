fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('esgScore').innerText = data.esgScore;
    document.getElementById('carbon').innerText = data.carbon;
    document.getElementById('waste').innerText = data.waste;
    document.getElementById('plastic').innerText = data.plastic;
    document.getElementById('ranking').innerText = data.ranking;
    document.getElementById('budget').innerText = data.budget;
  });
