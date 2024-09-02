

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


