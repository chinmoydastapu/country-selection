fetch("https://restcountries.com/v3.1/name/canada")
    .then(res => res.json())
    .then(data => showCanadaDetails(data[0]));

function showCanadaDetails(country) {
    // console.log(country);

    const canadaContainer = document.getElementById("canada-container");
    canadaContainer.innerHTML = `
    <figure><img class="h-full" src="${country.flags.png}" alt="Canada" /></figure>
    <div class="card-body">
        <h2 class="text-3xl font-semibold">${country.name.common}</h2>
        <h2 class="text-xl font-semibold">Official Name: ${country.name.official}</h2>
        <p><span class="font-semibold">Capital:</span> ${country.capital}</p>
        <p><span class="font-semibold">Region:</span> ${country.region}</p>
        <p><span class="font-semibold">Population:</span> ${country.population}</p>
        <p><span class="font-semibold">Language:</span> ${country.languages.eng}</p>
        <p><span class="font-semibold">Currency:</span> ${country.currencies.CAD.name}</p>
    </div>
    `;
}