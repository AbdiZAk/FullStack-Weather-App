// errors
const errors = document.querySelectorAll('.errors')

let recentsArray = []

let footer = document.getElementById('footer')
let placeholder = document.querySelector('placeholder')
let boxRecent = document.querySelector('.box-recent')
let recentRect = document.querySelector('.recent-rect')
let recentItems = recentRect.firstElementChild

allRecs = document.querySelectorAll('.recent-rect')
let dublicateCount = 0

// function to get call the backend api relay to get weather data
function getWeather(lat, lon, location){
    // if the lat and lon are not null
    if(lat && lon) {
        document.getElementById('location').scrollIntoView();
        // Defining async function
        let url = `/weather-api/${lat}&${lon}`
        // get weather data from API
        fetch(url).then(response => {
            return response.json()
        }).then( weatherData => {
            useData(weatherData)
        }).catch(err => {
            console.log(err)
        })

        // Get the weather dat
        function useData(responceData) {
            // overcast info
            let currentWeather = responceData.weather;
            let forecast = currentWeather[0].main   // clouds overcast
            let description = currentWeather[0].description
            let weatherIcon = currentWeather[0].icon
            let visibility = Math.round(responceData.visibility / 1000)

            // main temp info
            let millibarsPerHg = 33.6388
            let mainTemp = responceData.main;
            let currTemp = Math.round(mainTemp.temp)
            let feelsLike = Math.round(mainTemp.feels_like)
            let minTemp = Math.round(mainTemp.temp_min)
            let maxTemp = Math.round(mainTemp.temp_max)
            let pressure = Math.round(mainTemp.pressure / millibarsPerHg)
            let humidity = Math.round(mainTemp.humidity)
            // console.log(currTemp, minTemp)


            // wind info
            let winds = responceData.wind;
            let windSpeed = winds.speed

            // get all elements (Name + ElementId)
            let locationDiv = document.querySelector('.location')
            let locationEml = locationDiv.firstElementChild
            let tempElm = document.getElementById('temp')
            let feelsLikeElm = document.getElementById('feels-like')
            let minTempElm = document.getElementById('min-temp')
            let maxTempElm =document.getElementById('max-temp')
            let humidityElm =document.getElementById('humidity')
            let windSpeedElm =document.getElementById('wind-speed')
            let descriptionElm =document.getElementById('description')
            let weatherIconElm = document.getElementById('weather-icon')
            let visibilityElm = document.getElementById('visibility')
            let pressureElm = document.getElementById('pressure')
            let sunRizeElm = document.getElementById('sun-rise')
            let sunSetElm = document.getElementById('sun-set')
            let iconurl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
            let duplicate = document.getElementById('duplicate')
            let cross = document.querySelectorAll('.bi-x-lg')


            //Format Unix time
            function formatUnixTime(unixTime){
                let date = new Date(unixTime * 1000)
                let hours = date.getHours();
                let minutes = date.getMinutes()
                if(hours > 12){
                    hours -= 12
                    return `${hours}:${minutes}`
                }
                else{
                    return `${hours}:${minutes}`
                }
            }

            // get time info (sun rise)
            let timeInfo = responceData.sys
            let sunRise = formatUnixTime(timeInfo.sunrise)
            let sunSet = formatUnixTime(timeInfo.sunset)

            // console.log(sunRise, sunSet)
            // Apply changes to elements
            let split = location.split(',')
            locationEml.innerText = `Weather in ${split[0]+ split[1]}`
            tempElm.innerText = `${currTemp}°`
            feelsLikeElm.innerText = `${feelsLike}°`
            minTempElm.innerText = `${minTemp}°`
            maxTempElm.innerText = `${maxTemp}°`
            humidityElm.innerText = `${humidity}%`
            windSpeedElm.innerText = `${windSpeed} mph`
            descriptionElm.innerText = `${description}`
            weatherIconElm.src = iconurl
            visibilityElm.innerText = `${visibility} mi`
            pressureElm.innerText = `${pressure} Hg`
            sunRizeElm.innerText = `sun rise: ${sunRise}am`
            sunSetElm.innerText = `${sunSet}pm`
            let weatherResults = document.getElementById('weather-results')
            footer.style.position = 'relative'

            weatherResults.style.display = 'inline-block'
            placeholder.style.display = 'none'
            locationDiv.style.display = 'block'
            recentsArray.push(location)




        } // end of useData function
    } // end if else


}

// function to create autocomplete
// This function calls the backend api relay to get address suggestions
function addressAutocomplete(containerElement, callback, options) {

    const MIN_ADDRESS_LENGTH = 3;
    const DEBOUNCE_DELAY = 300;

    // create container for input element
    const inputContainerElement = document.createElement("div");
    inputContainerElement.setAttribute("class", "input-container");
    containerElement.appendChild(inputContainerElement);

    // create input element
    const inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("placeholder", options.placeholder);
    inputContainerElement.appendChild(inputElement);

    // add input field clear button
    const clearButton = document.createElement("div");
    clearButton.classList.add("clear-button");
    addIcon(clearButton);
    clearButton.addEventListener("click", (e) => {
        e.stopPropagation();
        inputElement.value = '';
        callback(null);
        clearButton.classList.remove("visible");
        closeDropDownList();
    });
    inputContainerElement.appendChild(clearButton);

    // We will call the API with a timeout to prevent unnecessary API activity.
    let currentTimeout;

    // Save the current request promise reject function. To be able to cancel the promise when a new request comes
    let currentPromiseReject;

    // Focused item in the autocomplete list. This letiable is used to navigate with buttons
    let focusedItemIndex;

    // Process a user input:
    inputElement.addEventListener("input", function(e) {
        const currentValue = this.value;

        // Close any already open dropdown list
        closeDropDownList();


        // Cancel previous timeout
        if (currentTimeout) {
            clearTimeout(currentTimeout);
        }

        // Cancel previous request promise
        if (currentPromiseReject) {
            currentPromiseReject({
                canceled: true
            });
        }

        if (!currentValue) {
            clearButton.classList.remove("visible");
        }

        // Show clearButton when there is a text
        clearButton.classList.add("visible");

        // Skip empty or short address strings
        if (!currentValue || currentValue.length < MIN_ADDRESS_LENGTH) {
            return false;
        }

        // Call the Address Autocomplete API with a delay
        currentTimeout = setTimeout(() => {
            currentTimeout = null;

            // Create a new promise and send geocoding request
            const promise = new Promise((resolve, reject) => {
                currentPromiseReject = reject;

                let url = `/autocomplete-api/?text=${encodeURIComponent(currentValue)}`
                fetch(url)
                    .then(response => {
                        currentPromiseReject = null;

                        // check if the call was successful
                        if (response.ok) {
                            response.json().then(data => resolve(data));
                        } else {
                            response.json().then(data => reject(data));
                        }
                    });
            });

            promise.then((data) => {
                // here we get address suggestions
                let currentItems = data.results;

                //create a DIV element that will contain the items (values):
                const autocompleteItemsElement = document.createElement("div");
                autocompleteItemsElement.setAttribute("class", "autocomplete-items");
                inputContainerElement.appendChild(autocompleteItemsElement);

                // For each item in the results
                data.results.forEach((result, index) => {
                    // Create a DIV element for each element:
                    const itemElement = document.createElement("div");
                    // Set formatted address as item value
                    itemElement.innerHTML = result.formatted;
                    autocompleteItemsElement.appendChild(itemElement);

                    // Set the value for the autocomplete text field and notify:
                    itemElement.addEventListener("click", function(e) {
                        inputElement.value = currentItems[index].formatted;
                        callback(currentItems[index]);
                        // Close the list of autocompleted values:
                        closeDropDownList();
                    });
                });

            }, (err) => {
                if (!err.canceled) {
                    console.log(err);
                }
            });
        }, DEBOUNCE_DELAY);
    });

    // Add support for keyboard navigation
    inputElement.addEventListener("keydown", function(e) {
        let autocompleteItemsElement = containerElement.querySelector(".autocomplete-items");
        if (autocompleteItemsElement) {
            let itemElements = autocompleteItemsElement.getElementsByTagName("div");
            if (e.keyCode === 40) {
                e.preventDefault();
                //If the arrow DOWN key is pressed, increase the focusedItemIndex letiable:
                focusedItemIndex = focusedItemIndex !== itemElements.length - 1 ? focusedItemIndex + 1 : 0;
                //and and make the current item more visible:
                setActive(itemElements, focusedItemIndex);
            } else if (e.keyCode === 38) {
                e.preventDefault();

                //If the arrow UP key is pressed, decrease the focusedItemIndex letiable:
                focusedItemIndex = focusedItemIndex !== 0 ? focusedItemIndex - 1 : focusedItemIndex = (itemElements.length - 1);
                //and and make the current item more visible:
                setActive(itemElements, focusedItemIndex);
            } else if (e.keyCode === 13) {
                // If the ENTER key is pressed and value as selected, close the list
                e.preventDefault();
                if (focusedItemIndex > -1) {
                    closeDropDownList();
                }
            }
        } else {
            if (e.keyCode === 40) {
                // Open dropdown list again
                let event = document.createEvent('Event');
                event.initEvent('input', true, true);
                inputElement.dispatchEvent(event);
            }
        }
    });

    function setActive(items, index) {
        if (!items || !items.length) return false;

        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove("autocomplete-active");
        }

        // Add class "autocomplete-active" to the active element
        items[index].classList.add("autocomplete-active");

        // Change input value and notify
        inputElement.value = currentItems[index].formatted;
        callback(currentItems[index]);
    }

    function closeDropDownList() {
        const autocompleteItemsElement = inputContainerElement.querySelector(".autocomplete-items");
        if (autocompleteItemsElement) {
            inputContainerElement.removeChild(autocompleteItemsElement);
        }

        focusedItemIndex = -1;
    }

    function addIcon(buttonElement) {
        const svgElement = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
        svgElement.setAttribute('viewBox', "0 0 24 24");
        svgElement.setAttribute('height', "24");

        const iconElement = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        iconElement.setAttribute("d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z");
        iconElement.setAttribute('fill', 'red');
        svgElement.appendChild(iconElement);
        buttonElement.appendChild(svgElement);
    }

    // Close the autocomplete dropdown when the document is clicked
    //Skip, when a user clicks on the input field
    document.addEventListener("click", function(e) {
        if (e.target !== inputElement) {
            closeDropDownList();
        } else if (!containerElement.querySelector(".autocomplete-items")) {
            // open dropdown list again
            let event = document.createEvent('Event');
            event.initEvent('input', true, true);
            inputElement.dispatchEvent(event);
        }
    });
}

addressAutocomplete(document.getElementById("autocomplete-container"), (data) => {

    if(data) {
        let location = `${data.address_line1}, ${data.address_line2}`
        getWeather(data.lat, data.lon, location)


    }

}, {
    placeholder: "Enter an address here"
});
// end of autocomplete function
