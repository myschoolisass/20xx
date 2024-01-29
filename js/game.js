document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.loadIframe');
    var favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    buttons.forEach(function (button) {
        var gameButton = document.createElement('button');
        var isFavorite = favorites.includes(button.getAttribute('data-url'));
        
        if (isFavorite) {
            gameButton.classList.add('favorite-game');
        } else {
            gameButton.classList.add('normal-game');
        }

        var gameName = button.getAttribute('data-name') || button.textContent.trim();
        gameButton.textContent = gameName;
        gameButton.setAttribute('data-url', button.getAttribute('data-url'));
        gameButton.setAttribute('data-name', gameName);

        var favoriteButton = document.createElement('button');
        favoriteButton.classList.add('favorite-button');
        favoriteButton.textContent = 'Favorite';
        gameButton.appendChild(favoriteButton);

        button.parentNode.replaceChild(gameButton, button);

        gameButton.addEventListener('click', function (event) {
            if (!event.target.classList.contains('favorite-button')) {
                var gameUrl = gameButton.getAttribute('data-url');
                window.location.href=gameUrl
            }
        });

        favoriteButton.addEventListener('click', function (event) {
            var gameUrl = gameButton.getAttribute('data-url');
            var gameName = gameButton.getAttribute('data-name');
            if (!favorites.includes(gameUrl)) {
                favorites.push(gameUrl);
                localStorage.setItem('favorites', JSON.stringify(favorites));
                displayFavorites();
            }
        });
    });
    document.getElementById('searchBox').addEventListener('input', function (e) {
    var searchText = e.target.value.toLowerCase();
    var gameButtons = document.querySelectorAll('.normal-game, .favorite-game');

    gameButtons.forEach(function (gameButton) {
        if (gameButton.textContent.toLowerCase().includes(searchText)) {
            gameButton.style.display = 'block';
        } else {
            gameButton.style.display = 'none';
        }
    });
});


    function displayFavorites() {
        var favoritesContainer = document.getElementById('favorites');
        favoritesContainer.innerHTML = '';

        favorites.forEach(function (favorite, index) {
            var gameButton = document.createElement('button');
            gameButton.classList.add('favorite-game');
            gameButton.setAttribute('data-url', favorite);

            var gameName = document.querySelector(`[data-url="${favorite}"]`).getAttribute('data-name');
            gameButton.textContent = gameName;
            gameButton.setAttribute('data-name', gameName);

            favoritesContainer.appendChild(gameButton);

            var removeButton = document.createElement('button');
            removeButton.classList.add('remove-button');
            removeButton.textContent = 'Remove';
            gameButton.appendChild(removeButton);

            removeButton.addEventListener('click', function (event) {
                event.stopPropagation();
                favorites.splice(index, 1);
                localStorage.setItem('favorites', JSON.stringify(favorites));
                displayFavorites();
            });

            gameButton.addEventListener('click', function (event) {
                if (!event.target.classList.contains('favorite-button') && !event.target.classList.contains('remove-button')) {
                    var gameUrl = gameButton.getAttribute('data-url');
                window.location.href=gameurl;
                            }
            });
        });
    }

    displayFavorites();
});
function toggleCategory(categoryId) {
        var category = document.getElementById(categoryId);
        category.classList.toggle('collapsed');
    }