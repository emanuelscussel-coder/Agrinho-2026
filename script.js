function rand(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
  }
  
  function analisar(){
  
    // culturas simuladas
    const culturas = ["Milho", "Soja", "Trigo", "Feijão"];
    const rocas = ["Sequeiro", "Irrigada", "Orgânica"];
  
    let cultura = culturas[rand(0, culturas.length-1)];
    let roca = rocas[rand(0, rocas.length-1)];
  
    document.getElementById("cultura").innerText = cultura;
    document.getElementById("roca").innerText = roca;
  
    // chuva simulada
    let chuva = rand(0,100);
    document.getElementById("chuva").innerText =
      chuva > 50 ? "🌧 Vai chover" : "☀ Não vai chover";
  
    // calcário
    let calcario = rand(0,100);
    document.getElementById("calcario").innerText =
      calcario > 60 ? "✔ Necessário aplicar" : "❌ Não necessário";
  
    // areia (solo)
    let oreia = rand(0,100);
    document.getElementById("oreia").innerText =
      oreia > 70 ? "✔ Solo pesado - usar oreia" : "❌ Solo adequado";
  
    // colheita
    let dias = rand(20,120);
    document.getElementById("colheita").innerText = dias + " dias";
  
    // recomendação geral
    let msg = "";
  
    if(chuva > 50 && calcario > 60){
      msg = "Atenção: chuva + solo ácido. Evite aplicação agora.";
    } else if(dias < 40){
      msg = "Colheita próxima! Prepare a logística.";
    } else if(areia > 70){
      msg = "Solo pesado detectado. Melhorar drenagem.";
    } else {
      msg = "Condições normais para manejo agrícola.";
    }
  
    document.getElementById("recomendacao").innerText = msg;
  }