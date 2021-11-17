api = "https://swapi.dev/api/";

// ===== People Info ===== //
// Luke Skywalker
async function lukeInfo() {
    let response = await fetch(`${api}people/1`)
    return response.json();
}
lukeInfo().then(data => {
    document.querySelector('#luke1').innerHTML = data.name;
    document.querySelector('#luke2').innerHTML = `height: <span>${data.height}cm`;
    document.querySelector('#luke3').innerHTML = `skin color: <span>${data.skin_color}`;
    document.querySelector('#luke4').innerHTML = `birth year: <span>${data.birth_year}`;
    document.querySelector('#luke5').innerHTML = `hair color: <span>${data.hair_color}`;
});

// Darth Vader
async function darthInfo() {
    let response = await fetch(`${api}people/4`)
    return response.json();
}
darthInfo().then(data => {
    document.querySelector('#vader1').innerHTML = data.name;
    document.querySelector('#vader2').innerHTML = `height: <span>${data.height}cm`;
    document.querySelector('#vader3').innerHTML = `skin color: <span>${data.skin_color}`;
    document.querySelector('#vader4').innerHTML = `birth year: <span>${data.birth_year}`;
    document.querySelector('#vader5').innerHTML = `hair color: <span>${data.hair_color}`;
});

// Leia Organa
async function leiaInfo() {
    let response = await fetch(`${api}people/5`)
    return response.json();
}
leiaInfo().then(data => {
    document.querySelector('#leia1').innerHTML = data.name;
    document.querySelector('#leia2').innerHTML = `height: <span>${data.height}cm`;
    document.querySelector('#leia3').innerHTML = `skin color: <span>${data.skin_color}`;
    document.querySelector('#leia4').innerHTML = `birth year: <span>${data.birth_year}`;
    document.querySelector('#leia5').innerHTML = `hair color: <span>${data.hair_color}`;
});

// Owen Lar
async function owenInfo() {
    let response = await fetch(`${api}people/6`)
    return response.json();
}
owenInfo().then(data => {
    document.querySelector('#Owen1').innerHTML = data.name;
    document.querySelector('#Owen2').innerHTML = `height: <span>${data.height}cm`;
    document.querySelector('#Owen3').innerHTML = `skin color: <span>${data.skin_color}`;
    document.querySelector('#Owen4').innerHTML = `birth year: <span>${data.birth_year}`;
    document.querySelector('#Owen5').innerHTML = `hair color: <span>${data.hair_color}`;
});

// Beru Whitesun
async function beruInfo() {
    let response = await fetch(`${api}people/7`)
    return response.json();
}
beruInfo().then(data => {
    document.querySelector('#Beru1').innerHTML = data.name;
    document.querySelector('#Beru2').innerHTML = `height: <span>${data.height}cm`;
    document.querySelector('#Beru3').innerHTML = `skin color: <span>${data.skin_color}`;
    document.querySelector('#Beru4').innerHTML = `birth year: <span>${data.birth_year}`;
    document.querySelector('#Beru5').innerHTML = `hair color: <span>${data.hair_color}`;
});

// Obi-Wan Kenobi
async function obiInfo() {
    let response = await fetch(`${api}people/10`)
    return response.json();
}
obiInfo().then(data => {
    document.querySelector('#Obi1').innerHTML = `${data.name}`;
    document.querySelector('#Obi2').innerHTML = `height: <span>${data.height}cm`;
    document.querySelector('#Obi3').innerHTML = `skin color: <span>${data.skin_color}`;
    document.querySelector('#Obi4').innerHTML = `birth year: <span>${data.birth_year}`;
    document.querySelector('#Obi5').innerHTML = `hair color: <span>${data.hair_color}`;
});

// ===== Movies ===== //
// A New Hope
async function film1Info() {
    let response = await fetch(`${api}films/1`)
    return response.json();
}
film1Info().then(data => {
    document.querySelector('#movie1').innerHTML = data.title;
    document.querySelector('#movie2').innerHTML = `release date: <span>${data.release_date}`;
    document.querySelector('#movie3').innerHTML = `rroducer: <span>${data.producer}`;
    document.querySelector('#movie4').innerHTML = `director: <span>${data.director}`;
    document.querySelector('#movie5').innerHTML = `opening crawl: <span>${data.opening_crawl}`;
});

// The Empire Strikes Back
async function film2Info() {
    let response = await fetch(`${api}films/2`)
    return response.json();
}
film2Info().then(data => {
    document.querySelector('#movie01').innerHTML = data.title;
    document.querySelector('#movie02').innerHTML = `release date: <span>${data.release_date}`;
    document.querySelector('#movie03').innerHTML = `rroducer: <span>${data.producer}`;
    document.querySelector('#movie04').innerHTML = `director: <span>${data.director}`;
    document.querySelector('#movie05').innerHTML = `opening crawl: <span>${data.opening_crawl}`;
});

// Return of the Jedi
async function film3Info() {
    let response = await fetch(`${api}films/3`)
    return response.json();
}
film3Info().then(data => {
    document.querySelector('#movie001').innerHTML = data.title;
    document.querySelector('#movie002').innerHTML = `release date: <span>${data.release_date}`;
    document.querySelector('#movie003').innerHTML = `rroducer: <span>${data.producer}`;
    document.querySelector('#movie004').innerHTML = `director: <span>${data.director}`;
    document.querySelector('#movie005').innerHTML = `opening crawl: <span>${data.opening_crawl}`;
});

// ===== Species ===== //
// Human
async function humanInfo() {
    let response = await fetch(`${api}species/1`)
    return response.json();
}
async function humanPlanet() {
    let response = await fetch(`${api}planets/9`)
    return response.json();
}
humanInfo().then(data => {
    document.querySelector('#species1').innerHTML = data.name;
    document.querySelector('#species2').innerHTML = `classification: <span>${data.classification}`;
    document.querySelector('#species3').innerHTML = `average lifespan: <span>${data.average_lifespan}`;
    document.querySelector('#species4').innerHTML = `language: <span>${data.language}`;

    humanPlanet().then(data => {
        document.querySelector('#species5').innerHTML = `homeworld: <span>${data.name}`;
    });
});

// Wookie
async function wookieInfo() {
    let response = await fetch(`${api}species/3`)
    return response.json();
}
async function wookiePlanet() {
    let response = await fetch(`${api}planets/9`)
    return response.json();
}
wookieInfo().then(data => {
    document.querySelector('#species01').innerHTML = data.name;
    document.querySelector('#species02').innerHTML = `classification: <span>${data.classification}`;
    document.querySelector('#species03').innerHTML = `average lifespan: <span>${data.average_lifespan}`;
    document.querySelector('#species04').innerHTML = `language: <span>${data.language}`;

    wookiePlanet().then(data => {
        document.querySelector('#species05').innerHTML = `homeworld: <span>${data.name}`;
    });
});

// Rodian
async function rodianInfo() {
    let response = await fetch(`${api}species/4`)
    return response.json();
}
async function rodianPlanet() {
    let response = await fetch(`${api}planets/14`)
    return response.json();
}
rodianInfo().then(data => {
    document.querySelector('#species001').innerHTML = data.name;
    document.querySelector('#species002').innerHTML = `classification: <span>${data.classification}`;
    document.querySelector('#species003').innerHTML = `average lifespan: <span>${data.average_lifespan}`;
    document.querySelector('#species004').innerHTML = `language: <span>${data.language}`;

    rodianPlanet().then(data => {
        document.querySelector('#species005').innerHTML = `homeworld: <span>${data.name}`;
    });
});

// ===== Starships ===== //
// CR90 corvette
async function ship1Info() {
    let response = await fetch(`${api}starships/2`)
    return response.json();
}
ship1Info().then(data => {
    document.querySelector('#starships1').innerHTML = data.name;
    document.querySelector('#starships2').innerHTML = `manufacturer: <span>${data.manufacturer}`;
    document.querySelector('#starships3').innerHTML = `cost: <span>${data.cost_in_credits}`;
    document.querySelector('#starships4').innerHTML = `crew: <span>${data.crew}`;
    document.querySelector('#starships5').innerHTML = `passengers: <span>${data.passengers}`;
});

// Star Destroyer
async function ship2Info() {
    let response = await fetch(`${api}starships/3`)
    return response.json();
}
ship2Info().then(data => {
    document.querySelector('#starships01').innerHTML = data.name;
    document.querySelector('#starships02').innerHTML = `manufacturer: <span>${data.manufacturer}`;
    document.querySelector('#starships03').innerHTML = `cost: <span>${data.cost_in_credits}`;
    document.querySelector('#starships04').innerHTML = `crew: <span>${data.crew}`;
    document.querySelector('#starships05').innerHTML = `passengers: <span>${data.passengers}`;
});

// Death Star
async function ship3Info() {
    let response = await fetch(`${api}starships/9`)
    return response.json();
}
ship3Info().then(data => {
    document.querySelector('#starships001').innerHTML = data.name;
    document.querySelector('#starships002').innerHTML = `manufacturer: <span>${data.manufacturer}`;
    document.querySelector('#starships003').innerHTML = `cost: <span>${data.cost_in_credits}`;
    document.querySelector('#starships004').innerHTML = `crew: <span>${data.crew}`;
    document.querySelector('#starships005').innerHTML = `passengers: <span>${data.passengers}`;
});
