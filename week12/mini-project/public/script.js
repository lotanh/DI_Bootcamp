const getRss = async () => {
    try {
        const getData = await fetch('http://localhost:5000/rss')
        .then(res => {
            const main = document.getElementById('main');
            main.style.display = 'none';
            return res.json();
        })
        .then(data => {
            console.log(data)
            data.forEach(item => {
                createDiv(item) 
            });
        })
    } catch (err) {
       console.log(err); 
    }
}

const createDiv = (rss) => {
    const rssFeed = document.getElementById('rssFeed')
    let rssDiv = document.createElement('div');
    let rssPic = document.createElement('div');
    let title = document.createElement('h2');
    let author = document.createElement('p');
    let date = document.createElement('p');
    let category = document.createElement('p');

    rssDiv.classList.add('rss')
    rssPic.classList.add('rssImg')
    
    rssPic.innerHTML = rss.content;
    title.innerText = rss.title;
    author.innerText = rss.creator;
    date.innerText = rss.pubDate;
    category.innerText = `${rss.categories[0]}|${rss.categories[1]}`;

    rssDiv.appendChild(rssPic);
    rssDiv.appendChild(title);
    rssDiv.appendChild(author);
    rssDiv.appendChild(date);
    rssDiv.appendChild(category);

    rssFeed.appendChild(rssDiv)
}