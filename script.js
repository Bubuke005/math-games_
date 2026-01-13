const games = {
  ops: {
    title: "➕➖✖➗ Амалдар",
    list: [
      {q:"5 + 7 = ?", a:"12"},
      {q:"20 − 8 = ?", a:"12"},
      {q:"6 × 4 = ?", a:"24"},
      {q:"18 ÷ 3 = ?", a:"6"},
      {q:"9 + 11 = ?", a:"20"},
      {q:"30 − 15 = ?", a:"15"},
      {q:"7 × 5 = ?", a:"35"},
      {q:"16 ÷ 4 = ?", a:"4"},
      {q:"8 + 12 = ?", a:"20"},
      {q:"25 − 10 = ?", a:"15"},
      {q:"9 × 6 = ?", a:"54"},
      {q:"21 ÷ 7 = ?", a:"3"},
      {q:"14 + 6 = ?", a:"20"},
      {q:"40 − 20 = ?", a:"20"},
      {q:"5 × 8 = ?", a:"40"}
    ]
  },

  formula: {
    title: "📐 Формулалар",
    list: [
      {q:"Квадраттын аянты?", a:"a2"},
      {q:"Квадраттын периметри?", a:"4a"},
      {q:"Тик төрт бурчтук аянты?", a:"ab"},
      {q:"Үч бурчтук аянты?", a:"ah/2"},
      {q:"Айлананын узундугу?", a:"2πr"},
      {q:"Айлананын аянты?", a:"πr2"},
      {q:"Орточо арифметикалык?", a:"(a+b)/2"},
      {q:"Процент формуласы?", a:"a/100*b"},
      {q:"Ылдамдык?", a:"s/t"},
      {q:"Аралык?", a:"vt"},
      {q:"Убакыт?", a:"s/v"},
      {q:"Куб көлөмү?", a:"a3"},
      {q:"Параллелограмм аянты?", a:"ah"},
      {q:"Трапеция аянты?", a:"(a+b)/2*h"},
      {q:"Периметр деген эмне?", a:"p"}
    ]
  },

  test: {
    title:"❓ Тест (A/B/C)",
    list:[
      {q:"2+2=?", a:"4"},
      {q:"5×3=?", a:"15"},
      {q:"12÷4=?", a:"3"},
      {q:"9−6=?", a:"3"},
      {q:"7+8=?", a:"15"},
      {q:"6×6=?", a:"36"},
      {q:"18÷3=?", a:"6"},
      {q:"14−5=?", a:"9"},
      {q:"10+5=?", a:"15"},
      {q:"8×7=?", a:"56"},
      {q:"20÷5=?", a:"4"},
      {q:"9−2=?", a:"7"},
      {q:"11+4=?", a:"15"},
      {q:"3×5=?", a:"15"},
      {q:"16÷2=?", a:"8"}
    ]
  },

  tf: {
    title:"✔❌ Туура/Ката",
    list:[
      {q:"5+5=10", a:"Туура"},
      {q:"6×6=35", a:"Ката"},
      {q:"12÷4=3", a:"Туура"},
      {q:"7−2=6", a:"Ката"},
      {q:"9+1=10", a:"Туура"},
      {q:"8×3=25", a:"Ката"},
      {q:"15÷5=3", a:"Туура"},
      {q:"10−4=7", a:"Ката"},
      {q:"2+2=5", a:"Ката"},
      {q:"3×3=9", a:"Туура"},
      {q:"16÷4=4", a:"Туура"},
      {q:"14−7=8", a:"Ката"},
      {q:"5+6=11", a:"Туура"},
      {q:"12×2=25", a:"Ката"},
      {q:"18÷6=3", a:"Туура"}
    ]
  }

  // Калган болумдорду ошондой эле кошсо болот (cross, logic, guess, timer, click, surprise)
};

let currentGame, index, score;

function startGame(type){
  currentGame = games[type];
  index = 0;
  score = 0;

  document.getElementById("menu").style.display="none";
  document.getElementById("game").style.display="block";

  document.getElementById("title").innerText = currentGame.title;
  loadQuestion();
}

function loadQuestion(){
  document.getElementById("progress").innerText = `${index+1} / ${currentGame.list.length}`;
  document.getElementById("question").innerText = currentGame.list[index].q;
  document.getElementById("answer").value="";
  document.getElementById("result").innerText="";
  document.getElementById("nextBtn").style.display="none";
}

function check(){
  let user = document.getElementById("answer").value;
  if(user == currentGame.list[index].a){
    score++;
    document.getElementById("result").innerText="✅ Туура!";
  } else {
    document.getElementById("result").innerText="❌ Туура жооп: "+currentGame.list[index].a;
  }
  document.getElementById("nextBtn").style.display="inline";
}

function next(){
  index++;
  if(index < currentGame.list.length){
    loadQuestion();
  } else {
    document.getElementById("game").innerHTML = `<h2>🏁 Бүттү!</h2>
      <p>Жыйынтык: ${score} / ${currentGame.list.length}</p>
      <button onclick="location.reload()">Бөлүм танда</button>`;
  }
}
function backToMenu(){
  // Оюнду токтотуп менюга кайтуу
  document.getElementById("game").style.display="none";
  document.getElementById("menu").style.display="block";
}