
document.addEventListener("DOMContentLoaded", function () {
  const container = document.createElement("div");
  quizData.forEach((q, index) => {
    const card = document.createElement("div");
    card.innerHTML = `<h3>${index + 1}. ${q.question}</h3>`;
    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.innerText = opt;
      btn.onclick = () => {
        if (i === q.answer) {
          btn.style.background = "#c8f7c5";
        } else {
          btn.style.background = "#f7c5c5";
        }
        showExplanation(q, card);
      };
      card.appendChild(btn);
      card.appendChild(document.createElement("br"));
    });
    container.appendChild(card);
    container.appendChild(document.createElement("hr"));
  });
  document.body.appendChild(container);
});

function showExplanation(q, parent) {
  if (!q.explanation) return;
  const explain = document.createElement("div");
  explain.style.background = "#eef";
  explain.style.padding = "10px";
  explain.innerHTML = `<strong>📘 Keywords:</strong><br>- ${q.explanation.keywords.join("<br>- ")}<br><br>
                       <strong>🧠 Reasoning:</strong><br>${q.explanation.reasoning}`;
  parent.appendChild(explain);
}
