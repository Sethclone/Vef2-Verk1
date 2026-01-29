export function generateQuestionHTML(q) {
  const html = /*HTML*/ `
  <section class="question" data-answered="false">
    <h3>${q.question}</h3>
    <p>${q.answer}</p>
    <button type="button" class="button button-correct">rétt</button>
    <button type="button" class="button button-incorrect">rangt</button>

  </section>
  `;
  return html;
}

export function generateQuestionCategoryHTML(title, questionsHTML) {
  const html = /*HTML*/ `
      <html>
        <head>
          <script src="scripts.js" type="module"></script>
        </head>
        <body>
          <h1>Spurningaleikur!</h1>
          <div class="counter">
            <div class="correct">0</div>
            <div class="incorrect">0</div> 
          </div>
          <div class="questions"><h2>${title}</h2>${questionsHTML}</div>
        </body>
      </html>
    



    `;

  return html;
}
