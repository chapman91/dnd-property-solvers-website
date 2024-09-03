

function loadingGoogleAPI() {


const apiKey = import.meta.env.VITE_GOOGLE_MAP_KEY


// API key in Google Maps script
const script = document.createElement('script');
// Template Literals
script.src =  `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
script.async = true;
script.defer = true;
document.head.appendChild(script);

}

function initMap() {
    var searchInput = 'search_input';

    // Executes only after the DOM is fully loaded
    $(document).ready(function () {
        // Ensure that the element exists before proceeding
        var searchInputElement = document.querySelector('#' + searchInput);

        // Log the selcted element to the console
        console.log("Selected ELement using querySelector:". searchInputElement);

        if (searchInputElement) {
            // Initialize autocomplete only if the element exists
            var autocomplete = new google.maps.places.Autocomplete(searchInputElement, {
                types: ['geocode'] // Filters to include only geocoded locations
            });

            // Place Changed Event Listener
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var near_place = autocomplete.getPlace();
                console.log(near_place);
            });
        } else {
            console.error("Element with ID '" + searchInput + "' not found.");
        }
    });
}

// Assign a function `loadingGoogleMapsAPI`, to the `onload` event of the `window` object in JavaScript
// `window` object represents the browser window 
// `onload` a browser event that triggers when the entire page and all its resoruces have fully loaded
//  `=` is used to assign the `loadGoogleMapsAPI` function as the event handler for the `onload` event is triggered

window.onload = loadGoogleMapsAPI;