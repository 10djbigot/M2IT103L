function fetchCatFact() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            document.getElementById('cat-fact').innerText = data.fact;
        })
        .catch(error => {
            document.getElementById('cat-fact').innerText = 'Failed to load cat fact. Please try again!';
            console.error('Error fetching cat fact:', error);
        });
}
