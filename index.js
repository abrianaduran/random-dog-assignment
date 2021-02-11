//https://dog.ceo/api/breeds/image/random/3

function getDogImages(maxResults) {
    const endpoint = 'https://dog.ceo/api/breeds/image/random/'
    const endpointResults = endpoint.concat(maxResults);

console.log(endpointResults);

    fetch (endpointResults)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}


function formSubmit() {
    $('form').submit(event => {
        event.preventDefault();

        const maxResults = $('#results-number').val();

        getDogImages(maxResults);
    });
}

$(formSubmit);