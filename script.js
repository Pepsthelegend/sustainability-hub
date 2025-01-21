document.addEventListener("DOMContentLoaded", function () {
    const newsList = document.getElementById("news-list");

    const rssFeedUrl = "https://example.com/sustainability-news-rss"; // Replace with actual RSS feed or API

    fetch(rssFeedUrl)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            const items = data.querySelectorAll("item");

            items.forEach(item => {
                const title = item.querySelector("title").textContent;
                const link = item.querySelector("link").textContent;
                const description = item.querySelector("description").textContent;

                const newsItem = document.createElement("div");
                newsItem.classList.add("news-item");

                newsItem.innerHTML = `
                    <h3><a href="${link}" target="_blank">${title}</a></h3>
                    <p>${description}</p>
                `;

                newsList.appendChild(newsItem);
            });
        })
        .catch(error => console.log("Error fetching news: ", error));
});
