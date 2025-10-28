(function() {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')
  const loadingPopup = document.getElementById('loading-popup')

  example.addEventListener("click", function() {
    loadingPopup.classList.add('show');
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        setTimeout(() => {
          loadingPopup.classList.remove('show');
        }, 1500);
        console.log(array)
        let tableHTML = '<table><thead><tr><th>ID</th><th>Tytuł</th><th>Treść</th></tr></thead><tbody>';
        array.forEach(post => {
          tableHTML += `<tr class="post-row" data-post='${JSON.stringify(post)}'>
            <td>${post.id}</td>
            <td class="title">${post.title}</td>
            <td class="body">${post.body}</td>
          </tr>`;
        });
        tableHTML += '</tbody></table>';
        answer.innerHTML = tableHTML;


        const rows = document.querySelectorAll('.post-row');
        rows.forEach(row => {
          row.addEventListener('click', function() {
            const postData = JSON.parse(this.getAttribute('data-post'));
            console.log('Wybrany post:', postData);
          });
        });
      })
  })

  cw1.addEventListener("click", function() {
    //TODO
  })

  cw2.addEventListener("click", function() {
    //TODO
  })

  cw3.addEventListener("click", function() {
    //TODO
  })

})();
