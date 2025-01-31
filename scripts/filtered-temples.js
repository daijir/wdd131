document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        hamburger.textContent = navMenu.classList.contains('show') ? '✖' : '☰';
    });

    const temples = [
        {
          templeName: "Aba Nigeria",
          location: "Aba, Nigeria",
          dedicated: "2005, August, 7",
          area: 11500,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
          templeName: "Manti Utah",
          location: "Manti, Utah, United States",
          dedicated: "1888, May, 21",
          area: 74792,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
          templeName: "Payson Utah",
          location: "Payson, Utah, United States",
          dedicated: "2015, June, 7",
          area: 96630,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
          templeName: "Yigo Guam",
          location: "Yigo, Guam",
          dedicated: "2020, May, 2",
          area: 6861,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
          templeName: "Washington D.C.",
          location: "Kensington, Maryland, United States",
          dedicated: "1974, November, 19",
          area: 156558,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
          templeName: "Lima Perú",
          location: "Lima, Perú",
          dedicated: "1986, January, 10",
          area: 9600,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
          templeName: "Mexico City Mexico",
          location: "Mexico City, Mexico",
          dedicated: "1983, December, 2",
          area: 116642,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        // Add more temple objects here...
        {
            templeName: "Sapporo Japan",
            location: "Sapporo-shi, Hokkaido",
            dedicated: "2016, August, 21",
            area: 48480,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/400x250/sapporo-japan-exterior-night-1945721.jpg"
        },
        {
            templeName: "Phoenix Arizona",
            location: "Phoenix, Arizona",
            dedicated: "2014, November, 16",
            area: 64870,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/phoenix-arizona/800x500/phoenix-arizona-temple-1284079-wallpaper.jpg"
        },
        {
            templeName: "Fukuoka Japan",
            location: "Fukuoka-shi, Fukuoka",
            dedicated: "2000, June, 11",
            area: 10700,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fukuoka-japan/400x250/fukuoka-japan-temple-lds-306863-wallpaper.jpg"
        },
      ];

    const templesContainer = document.createElement('div');
    templesContainer.classList.add('temples-container');
    document.querySelector('main').appendChild(templesContainer);

    function displayTemples(filteredTemples) {
        templesContainer.innerHTML = '';
        filteredTemples.forEach(temple => {
            const templeCard = document.createElement('div');
            templeCard.classList.add('temple-card');

            const templeImage = document.createElement('img');
            templeImage.src = temple.imageUrl;
            templeImage.alt = temple.templeName;
            templeImage.loading = 'lazy';

            const templeName = document.createElement('h3');
            templeName.textContent = temple.templeName;

            const templeLocation = document.createElement('p');
            templeLocation.textContent = `Location: ${temple.location}`;

            const templeDedicated = document.createElement('p');
            templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;

            const templeArea = document.createElement('p');
            templeArea.textContent = `Area: ${temple.area} sq ft`;

            templeCard.appendChild(templeImage);
            templeCard.appendChild(templeName);
            templeCard.appendChild(templeLocation);
            templeCard.appendChild(templeDedicated);
            templeCard.appendChild(templeArea);

            templesContainer.appendChild(templeCard);
        });
    }

    displayTemples(temples);

    document.querySelector('nav ul').addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const filter = event.target.textContent.toLowerCase();
            let filteredTemples = temples;

            if (filter === 'old') {
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
            } else if (filter === 'new') {
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
            } else if (filter === 'large') {
                filteredTemples = temples.filter(temple => temple.area > 90000);
            } else if (filter === 'small') {
                filteredTemples = temples.filter(temple => temple.area < 10000);
            }

            displayTemples(filteredTemples);
        }
    });
});