

document.addEventListener('DOMContentLoaded', () => {


const apiKey = import.meta.env.VITE_GOOGLE_MAP_KEY


// API key in Google Maps script
const script = document.createElement('script');
// Template Literals
script.src =  `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
script.async = true;
script.defer = true;
document.head.appendChild(script);

})





// id of HTML input element where users will type their search queries
var searchInput = 'property-address';

// Executes only after the DOM is  fully loaded
// Document Ready Function
$(document).ready(function () {
    var autocomplete;
    autocomplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
        // Filters the suggestions to only include places categorized as establishments (e.g., restaurant, hotels)
        types: ['establishment']
    });

    // Place Changed Event Listener
    // `google.maps` is a global object provided by the Google Maps JavaScript API
    // google.maps.event.addListener(autocomplete, 'place_changed', function () {
    //     var near_place = autocomplete.getPlace();
    // });

});