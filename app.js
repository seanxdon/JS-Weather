 const weatherApp = (function () {
    const api = {
        key: "42049ce9318e18cf15c1e4ee0ce4c3dc",
        base: "https://api.openweathermap.org/data/2.5/"
      }

      const searchbtn = document.querySelector('#search-btn')
      const searchbox = document.querySelector('.search-box');
      searchbox.addEventListener('keypress', setQuery);
      searchbtn.addEventListener('click', setQueryClick)

      function setQuery(evt) {
        if (evt.keyCode == 13) {
          getResults(searchbox.value);
        }
      }
      
      // ADD BUTTON CLICK EVENT
      function setQueryClick(){
        getResults(searchbox.value);
      }

      function getResults (query) {
        fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        //api.openweathermap.org/data/2.5/weather?q={city name},{state},{country code}&appid={your api key}


          .then(weather => {
            return weather.json();
          }).then(displayResults);
      }
      
      function displayResults (weather) {
        let city = document.querySelector('.location .city');
        city.innerText = `${weather.name}`;
      
        let now = new Date();
        let date = document.querySelector('.location .date');
        date.innerText = dateBuilder(now);
      
        let temp = document.querySelector('.current .temp');
        temp.innerHTML = `${Math.round(weather.main.temp)}<span>°F</span>`;
      
        let weather_el = document.querySelector('.current .weather');
        weather_el.innerText = weather.weather[0].main;
      
        let hilow = document.querySelector('.hi-low');
        hilow.innerText = `${Math.round(weather.main.temp_min)}°F / ${Math.round(weather.main.temp_max)}°F`;
      }
      
      function dateBuilder (d) {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
      
        return `${day} ${date} ${month} ${year}`;
      }
})();

 
//PRE LOAD Huntington Beach, CA 
//Change bg on type of weather
//Add Icon on type of weather 
//Change font s