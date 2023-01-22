const countryContainer = document.getElementById("country-container");
const countriesContainer = document.getElementById("countries-container");

function searchCountry() {
    countryContainer.innerHTML = '';
    countriesContainer.innerHTML = '';

    const countryName = document.getElementById("country-field").value;

    // Starting the loader
    document.getElementById("loader").classList.remove('hidden');

    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(res => res.json())
        .then(data => showDetails(data));
}

function showDetails(countries) {
    if (countries.length <= 1) {
        countryContainer.innerHTML = `
        <figure><img class="h-full" src="${countries[0].flags.png}" alt="Error Fetching Picture" /></figure>
        <div class="card-body">
            <h2 class="text-3xl font-semibold">${countries[0].name.common}</h2>
            <h2 class="text-xl font-semibold">Official Name: ${countries[0].name.official}</h2>
            <p><span class="font-semibold">Capital:</span> ${countries[0].capital}</p>
            <p><span class="font-semibold">Region:</span> ${countries[0].region}</p>
            <p><span class="font-semibold">Population:</span> ${countries[0].population}</p>
            <p><span class="font-semibold">Area:</span> ${countries[0].area}</p>
            <p><span class="font-semibold">Country Code:</span> ${countries[0].cca3}</p>
        </div>
        `;
        countryContainer.classList.add('border');

        // Stopping the loader
        document.getElementById("loader").classList.add('hidden');
    } else {
        for (const country of countries) {
            const div = document.createElement("div");
            div.innerHTML = `
            <figure><img class="h-full" src="${country.flags.png}" alt="Error Fetching Picture" /></figure>
            <div class="card-body">
                <h2 class="text-3xl font-semibold">${country.name.common}</h2>
                <h2 class="text-xl font-semibold">Official Name: ${country.name.official}</h2>
                <p><span class="font-semibold">Capital:</span> ${country.capital}</p>
                <p><span class="font-semibold">Region:</span> ${country.region}</p>
                <p><span class="font-semibold">Population:</span> ${country.population}</p>
                <p><span class="font-semibold">Area:</span> ${country.area}</p>
                <p><span class="font-semibold">Country Code:</span> ${country.cca3}</p>
            </div>
            `;
            div.classList.add('w-3/4', 'mx-auto', 'my-10', 'card', 'lg:card-side', 'bg-base-100', 'shadow-xl', 'border');
            countriesContainer.appendChild(div);
        }
        
        // Stopping the loader
        document.getElementById("loader").classList.add('hidden');
    }
}