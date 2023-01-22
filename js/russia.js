fetch("https://restcountries.com/v3.1/name/russia")
    .then(res => res.json())
    .then(data => showRussiaDetails(data[0]));

function showRussiaDetails(country) {
    // console.log(country);

    const russiaContainer = document.getElementById("russia-container");
    russiaContainer.innerHTML = `
    <figure><img class="h-full" src="${country.flags.png}" alt="Russia" /></figure>
    <div class="card-body">
        <h2 class="text-3xl font-semibold">${country.name.common}</h2>
        <h2 class="text-xl font-semibold">Official Name: ${country.name.official}</h2>
        <p><span class="font-semibold">Capital:</span> ${country.capital}</p>
        <p><span class="font-semibold">Region:</span> ${country.region}</p>
        <p><span class="font-semibold">Population:</span> ${country.population}</p>
        <p><span class="font-semibold">Language:</span> ${country.languages.rus}</p>
        <p><span class="font-semibold">Currency:</span> ${country.currencies.RUB.name}</p>
    </div>
    `;
}