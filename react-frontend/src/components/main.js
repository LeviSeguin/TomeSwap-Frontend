document.getElementById('fetchDetails').addEventListener('click', function() {
    // Replace 'OL123456M' with the actual Open Library ID of the book you want to retrieve details for
    const bookId = 'OL123456M';

    // Fetch book details by book ID
    fetch(`/book_details/${bookId}/`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Handle book details data
            const bookDetailsElement = document.getElementById('bookDetails');
            bookDetailsElement.innerHTML = `
                <h2>${data.title}</h2>
                <p>Author: ${data.authors ? data.authors.map(author => author.name).join(', ') : 'Unknown'}</p>
                <p>Description: ${data.description || 'No description available.'}</p>
                <p>Published: ${data.publish_date || 'Not available'}</p>
            `;
        })
        .catch(error => console.error('Error:', error));
});
