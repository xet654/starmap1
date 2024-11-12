const images = [
    {
        src: "Zlatibor.png",
        title: "Na zlatiboru",
        description: "To veče nebo je bilo prelijepo zaista, rekao bi da je šteta što ga nismo gledali ali je moj pogled bio izgubljen na još ljepšem mjestu."
    },
    {
        src: "Banjaluka.png",
        title: "Na spomeniku",
        description: "Momenat kad sam shvatio da sam našao osobu koju želim za cjeli život, da sa tobom imam sve."
    },
    {
        src: "Beograd.png",
        title: "Na Avali",
        description: "Veče kada sam shvatio da bez tebe nemam ni svoj mir, svoju sreću ni svoj spokoj"
    }
];

let currentIndex = 0;

function updateCard() {
    const cardImage = document.getElementById('card-image');
    const cardTitle = document.getElementById('card-title');
    const cardDescription = document.getElementById('card-description');

    cardImage.src = images[currentIndex].src;
    cardTitle.textContent = images[currentIndex].title;
    cardDescription.textContent = images[currentIndex].description;

    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(updateCard, 30000); // Change image every 3 seconds
updateCard(); // Initial call to set the first image
