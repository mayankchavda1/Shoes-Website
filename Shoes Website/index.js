const navbarToggler = document.getElementById('navbar-toggler');
        const navbarCollapse = document.getElementById('navbar-collapse');

        navbarToggler.addEventListener('click', () => {
            navbarCollapse.classList.toggle('show');
        });
        // Add event listener to search button
        document.querySelector('.search-bar button').addEventListener('click', () => {
            // Get search input value
            const searchInput = document.querySelector('.search-bar input[type="search"]');
            const searchValue = searchInput.value.trim();

            // Perform search action (e.g. redirect to search results page)
            console.log(`Searching for ${searchValue}...`);
        });
        // Add event listener to add to cart buttons
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', () => {
                // Get the shoe card element
                const shoeCard = button.parentNode;

                // Get the shoe details
                const shoeName = shoeCard.querySelector('h3').textContent;
                const shoePrice = shoeCard.querySelector('p').textContent;

                // Add the shoe to the cart (e.g. update the cart count and total)
                console.log(`Added ${shoeName} to cart for ${shoePrice}`);
            });
        });

        // Add event listener to load more button
        document.querySelector('.load-more').addEventListener('click', () => {
            // Load more shoes (e.g. make an AJAX request to fetch more data)
            console.log('Loading more shoes...');
        });
        // Add event listener to newsletter form
        document.addEventListener("DOMContentLoaded", function () {
            const newsletterForm = document.querySelector(".footer form");
            newsletterForm.addEventListener("submit", function (event) {
                event.preventDefault();
                // Add code to handle newsletter subscription here
                console.log("Newsletter subscription submitted!");
            });
        });