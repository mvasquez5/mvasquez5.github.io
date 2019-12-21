const requestURL = '../final-project/temple.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObj) {
        console.table(jsonObj);
        const prophets = jsonObj['temples'];
        for (let i = 0; i < temples.length; i++) {

            let temple = document.createElement('section');
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let picture = document.createElement('picture');
            let image = document.createElement('img');
            let br = document.createElement('br');
            let info = document.createElement('p');
            let location = document.createElement('p');
            let dedicated = document.createElement('p');
            let address1 = document.createElement('p');
            let address2 = document.createElement('p');
            let address3 = document.createElement('p');
            let phone = document.createElement('p');
            let email = document.createElement('p');
            let services1 = document.createElement('p');
            let services2 = document.createElement('p');
            let services3 = document.createElement('p');
            let services4 = document.createElement('p');

            div.setAttribute('class', "info");
            h2.textContent = temples[i].name;
            image.setAttribute('src', temples[i].image);
            image.setAttribute('alt', temples[i].name);
            image.setAttribute('title', temples[i].name);
            location.textContent = temples[i].location;
            dedicated.textContent = temples[i].dedicated;
            address1.textContent = temples[i].address1;
            address2.textContent = temples[i].address2;
            address3.textContent = temples[i].address3;
            phone.textContent = 'Telephone: ' + temples[i].phone;
            email.textContent = temples[i].email;
            services1.textContent = temples[i].services1;
            services2.textContent = temples[i].services2;
            services3.textContent = temples[i].services3;
            services4.textContent = temples[i].services4;

            temple.appendChild(div);
            temple.appendChild(h2);
            temple.appendChild(picture);
            temple.appendChild(image);
            temple.appendChild(location);
            temple.appendChild(dedicated);
            temple.appendChild(address1);
            temple.appendChild(address2);
            temple.appendChild(address3);
            temple.appendChild(phone);
            temple.appendChild(email);
            temple.appendChild(services1);
            temple.appendChild(services2);
            temple.appendChild(services3);
            temple.appendChild(services4);

            document.querySelector('div.temples').appendChild(temple);
        }
    });