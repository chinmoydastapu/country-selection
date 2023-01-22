fetch("https://restcountries.com/v3.1/name/bangladesh")
    .then(res => res.json())
    .then(data => showBangladeshDetails(data[0]));

function showBangladeshDetails(country) {
    // console.log(country);

    const banContainer = document.getElementById("ban-container");
    banContainer.innerHTML = `
    <figure><img class="h-full" src="${country.flags.png}" alt="Bangladesh" /></figure>
    <div class="card-body">
        <h2 class="text-3xl font-semibold">${country.name.common}</h2>
        <h2 class="text-xl font-semibold">Official Name: ${country.name.official}</h2>
        <p><span class="font-semibold">Capital:</span> ${country.capital}</p>
        <p><span class="font-semibold">Region:</span> ${country.region}</p>
        <p><span class="font-semibold">Population:</span> ${country.population}</p>
        <p><span class="font-semibold">Language:</span> ${country.languages.ben}</p>
        <p><span class="font-semibold">Currency:</span> ${country.currencies.BDT.name}</p>
    </div>
    `;
}