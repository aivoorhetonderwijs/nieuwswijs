document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'YOUR_API_KEY';  // Vervang dit door je eigen NewsAPI sleutel
    const url = `https://newsapi.org/v2/top-headlines?country=nl&apiKey=${apiKey}`;

    fetch(url)
        .then(response => {
            console.log('Response status:', response.status); // Log de statuscode
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const articles = data.articles;
            let output = '';
            articles.forEach(article => {
                output += `
                    <li>
                        <a href="${article.url}" target="_blank">
                            <h2>${article.title}</h2>
                            <p>${article.description}</p>
                        </a>
                    </li>
                `;
            });
            document.getElementById('news-articles').innerHTML = output;
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
});
