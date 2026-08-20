  <script defer>
    let buildings = [];
    fetch('/api/toanha.html').then(r => r.json()).then(data => buildings = data);
    const input = document.getElementById('search');
    const suggestion = document.getElementById('suggest');
    input.addEventListener('input', function () {
      const keyword = this.value.toLowerCase();
      const results = buildings.filter(b => b.toanha.toLowerCase().includes(keyword));
      if (keyword === '') {
        suggestion.innerHTML = '';
        return;
      }
      const invalidChars = /[<>\/\\'"?:*|;,#%&+=^$!@()\[\]{}]/;
      if (invalidChars.test(keyword)) {
        suggestion.innerHTML = '<li>Ký tự không hợp lệ</li>';
        return;
      }
      function removeDiacritics(str) {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      }
      const resultsNoDiacritics = buildings.filter(b => removeDiacritics(b.toanha.toLowerCase()).includes(removeDiacritics(keyword)));
      suggestion.innerHTML = resultsNoDiacritics.slice(0, 1000).map(item => `<li class="cus_flex_end" title="Click xem tòa nhà"> <a class="" href="` + item.uri + `.html` + `" target="_blank">` + item.toanha + `</a> <p> &nbsp;(` + item.quan + `)</p> </li>`).join('');
      if (results.length === 0) {
        suggestion.innerHTML = '<li>Hiện chưa có thông tin</li>';
        return;
      }
      suggestion.querySelectorAll('li').forEach(li => {
        li.addEventListener('click', function () {
          input.value = '';
          suggestion.innerHTML = '';
        });
      }
      );
    });
  </script></script>