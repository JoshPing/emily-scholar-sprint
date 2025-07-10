function renderQuiz(questions) {
    const container = document.getElementById("quiz-container");
    container.innerHTML = "";
  
    questions.forEach((q, index) => {
      const block = document.createElement("div");
      block.className = "question-block";
  
      const questionEl = document.createElement("p");
      questionEl.className = "question";
      questionEl.innerHTML = `${index + 1}. ${q.question}`;
      block.appendChild(questionEl);
  
      const optionsList = document.createElement("ul");
      optionsList.className = "options";
  
      const feedback = document.createElement("p");
      feedback.className = "feedback";
  
      const explanation = document.createElement("div");
      explanation.className = "explanation";
      explanation.style.display = "none";
      explanation.innerHTML = `
        <div class="keywords"><strong>📘 Keywords:</strong> ${q.explanation.keywords.join(", ")}</div>
        <div class="reasoning"><strong>🧠 Reasoning:</strong> ${q.explanation.reasoning}</div>
      `;
  
      q.options.forEach((opt, i) => {
        const li = document.createElement("li");
        li.textContent = opt;
  
        li.onclick = () => {
          // 防止重复点击
          if (optionsList.querySelector(".correct") || optionsList.querySelector(".incorrect")) return;
  
          if (i === q.answer) {
            li.classList.add("correct");
            feedback.textContent = "✅ Correct!";
            feedback.style.color = "green";
            explanation.style.display = "none"; // 不显示解释
          } else {
            li.classList.add("incorrect");
            feedback.textContent = "❌ Try again.";
            feedback.style.color = "red";
            // 高亮正确答案
            optionsList.children[q.answer].classList.add("correct");
            explanation.style.display = "block";
          }
        };
  
        optionsList.appendChild(li);
      });
  
      block.appendChild(optionsList);
      block.appendChild(feedback);
      block.appendChild(explanation);
      container.appendChild(block);
    });
  }

  
