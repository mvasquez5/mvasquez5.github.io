const requestURL = '../final-project/temple.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObj) {
        console.table(jsonObj);
        const temples = jsonObj['temples'];
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
            let closed = document.createElement('p');
            let currentCondition = document.createElement('p');
            let currentTemperature = document.createElement('p');
            let highTemperature = document.createElement('p');
            let currentHumidity = document.createElement('p');
            let currentWindSpeed = document.createElement('p');
            let weather = document.createElement('p');
            

            const currentWeather = "https://api.openweathermap.org/data/2.5/weather?id="+ temples[i].id + "&appid=2a52f2b81612f3e76e5e91101511d227&units=imperial";

            fetch(currentWeather)
            .then((response) => response.json())
            .then((jsObject) => {
                currentCondition.textContent = 'Condition: ' + jsObject.weather[0].main;
                currentTemperature.textContent = 'Current temp: ' + jsObject.main.temp.toFixed(0) + ' ºF';
                highTemperature.textContent = 'High: ' + jsObject.main.temp_max.toFixed(0) + ' ºF';
                currentHumidity.textContent = 'Humidity: ' + jsObject.main.humidity.toFixed(0) + '%';
                currentWindSpeed.textContent = 'Wind Speed: ' + jsObject.wind.speed.toFixed(0) + ' MPH';
            });  

            div.setAttribute('class', "info");
            h2.textContent = temples[i].name;
            image.setAttribute('src', temples[i].image);
            image.setAttribute('alt', temples[i].name);
            image.setAttribute('title', temples[i].name);
            image.setAttribute('class', "temple");
            location.textContent = temples[i].location;
            dedicated.textContent = 'Dedicated: ' + temples[i].dedicated;
            address1.textContent = 'Address: ' + temples[i].address1;
            address2.textContent = temples[i].address2;
            address3.textContent = temples[i].address3;
            phone.textContent = 'Telephone: ' + temples[i].phone;
            email.textContent = 'Email: ' +temples[i].email;
            services1.textContent = 'Services: ' +temples[i].services1;
            services2.textContent = temples[i].services2;
            services3.textContent = temples[i].services3;
            services4.textContent = temples[i].services4;
            closed.textContent =  'Closed on: ' + temples[i].closed;
            weather.textContent =  'Weather:';

            temple.appendChild(div);
            temple.appendChild(h2);
            temple.appendChild(picture);
            picture.appendChild(image);
            temple.appendChild(location);
            temple.appendChild(dedicated);
            temple.appendChild(address1);
            temple.appendChild(address2);
            temple.appendChild(address3);
            temple.appendChild(phone);
            temple.appendChild(email);
            temple.appendChild(br);
            temple.appendChild(services1);
            temple.appendChild(services2);
            temple.appendChild(services3);
            temple.appendChild(services4);
            temple.appendChild(closed);
            temple.appendChild(br);
            temple.appendChild(weather);
            temple.appendChild(currentCondition);
            temple.appendChild(currentTemperature);
            temple.appendChild(highTemperature);
            temple.appendChild(currentHumidity);
            temple.appendChild(currentWindSpeed);

            document.querySelector('div.temples').appendChild(temple);
        }
    });