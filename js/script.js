const styleElement = document.createElement('style');
styleElement.id = 'dynamicStyles';
document.head.appendChild(styleElement);

function dynamicSummary(data) {
    const summaryList = document.getElementById('summary-list');
    
    data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = item.category.toLowerCase();

        const heading = document.createElement('h4');
        heading.textContent = item.category;

        const score = document.createElement('span');
        score.textContent = item.score;

        const scoreContainer = document.createElement('p');
        scoreContainer.appendChild(score);
        scoreContainer.appendChild(document.createTextNode(' / 100'));

        listItem.appendChild(heading);
        listItem.appendChild(scoreContainer);

        summaryList.appendChild(listItem);

        const iconCSS = `
            .${item.category.toLowerCase()} h4::before {
                content: url(${item.icon});
            }`;

        const styleElement = document.getElementById('dynamicStyles');
        styleElement.appendChild(document.createTextNode(iconCSS));
    });
  }

fetch('data.json')
.then(response => response.json())
.then(data => {
    dynamicSummary(data);
})
.catch(error => {
    console.error('Error fetching JSON:', error); // Test
});