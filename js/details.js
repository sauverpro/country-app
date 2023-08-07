const countryDetail = document.getElementById("countryDetail");

// Function to fetch detailed data for a specific country
const fetchCountryDetail = async countryCode => {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
                                    //   https://restcountries.com/v3.1/name/{name}
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching country detail:", error);
    }
};

// Function to render country detail information
const renderCountryDetail = async countryCode => {
    const countryData = await fetchCountryDetail(countryCode);

    // Create detail card and populate with data
    const detailCard = document.createElement("div");
    detailCard.classList.add("country-detail-card");
    detailCard.innerHTML = `
        <h2>${countryData.name.common}</h2>
        <p>Population: ${countryData.population}</p>
        <p>Region: ${countryData.region}</p>
        <p>Subregion: ${countryData.subregion}</p>
        <!-- Add more details as needed -->
    `;

    // Append detail card to the detail page
    countryDetail.appendChild(detailCard);
};

// Get the country code from the URL parameters (you might need to parse the URL)
const urlParams = new URLSearchParams(window.location.search);
const countryCode = urlParams.get("code");

// Call the render function with the fetched country code
renderCountryDetail(countryCode);
