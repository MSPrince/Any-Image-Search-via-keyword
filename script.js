
     const searchForm = document.getElementById('search-form');
     const searchBox = document.getElementById('search-box');
     const searchResult = document.querySelector('.search-result');
     const showMoreBtn = document.getElementById('show-more-btn'); // Use getElementById

     let keyword = "";
     let page = 1;
     let api_key = 'vGfTS3CHrbeAlhnuTe2C3be6MxKAQ-od42twovTduzw';

     async function searchImage() {
          keyword = searchBox.value;

          const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${api_key}&per_page=12`;

          const response = await fetch(url);
          const data = await response.json();

if(page === 1){
     searchResult.innerHTML = '';
}

          const results = data.results;
          results.map((result) => {
               const img = document.createElement('img');
               img.src = result.urls.regular;
               const imgLink = document.createElement('a');
               imgLink.href = result.links.html;
               imgLink.target = '_blank';

               imgLink.appendChild(img);
               searchResult.appendChild(imgLink);
          });
          showMoreBtn.style.display = "block";
     }

     searchForm.addEventListener('submit', (e) => {
          e.preventDefault();
          page = 1;
          searchResult.innerHTML = "";
          searchImage();
     });

     showMoreBtn.addEventListener('click', () => {
          page++;
          searchImage();
     });
