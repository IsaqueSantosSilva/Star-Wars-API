const api = "https://swapi.dev/api/";

const getInfo = async (object, id) => {response = await fetch(`${api}${object}/${id}`);return response.json();}
// ===== People Info ===== //
// Luke Skywalker
getInfo('people', 1).then(data => { 
    document.querySelector('#luke1').innerHTML = data.name;
    document.querySelector('#luke2').innerHTML = `height: <span>${data.height}cm`;
    document.querySelector('#luke3').innerHTML = `skin color: <span>${data.skin_color}`;
    document.querySelector('#luke4').innerHTML = `birth year: <span>${data.birth_year}`;
    document.querySelector('#luke5').innerHTML = `hair color: <span>${data.hair_color}`;
});

// Darth Vader
getInfo('people', 4).then(data => { 
    document.querySelector('#vader1').innerHTML = data.name;
    document.querySelector('#vader2').innerHTML = `height: <span>${data.height}cm`;
    document.querySelector('#vader3').innerHTML = `skin color: <span>${data.skin_color}`;
    document.querySelector('#vader4').innerHTML = `birth year: <span>${data.birth_year}`;
    document.querySelector('#vader5').innerHTML = `hair color: <span>${data.hair_color}`;
});

// Leia Organa
getInfo('people', 5).then(data => { 
    document.querySelector('#leia1').innerHTML = data.name;
    document.querySelector('#leia2').innerHTML = `height: <span>${data.height}cm`;
    document.querySelector('#leia3').innerHTML = `skin color: <span>${data.skin_color}`;
    document.querySelector('#leia4').innerHTML = `birth year: <span>${data.birth_year}`;
    document.querySelector('#leia5').innerHTML = `hair color: <span>${data.hair_color}`;
});

// Owen Lar
getInfo('people', 6).then(data => { 
    document.querySelector('#Owen1').innerHTML = data.name;
    document.querySelector('#Owen2').innerHTML = `height: <span>${data.height}cm`;
    document.querySelector('#Owen3').innerHTML = `skin color: <span>${data.skin_color}`;
    document.querySelector('#Owen4').innerHTML = `birth year: <span>${data.birth_year}`;
    document.querySelector('#Owen5').innerHTML = `hair color: <span>${data.hair_color}`;
});

// Beru Whitesun
getInfo('people', 7).then(data => { 
    document.querySelector('#Beru1').innerHTML = data.name;
    document.querySelector('#Beru2').innerHTML = `height: <span>${data.height}cm`;
    document.querySelector('#Beru3').innerHTML = `skin color: <span>${data.skin_color}`;
    document.querySelector('#Beru4').innerHTML = `birth year: <span>${data.birth_year}`;
    document.querySelector('#Beru5').innerHTML = `hair color: <span>${data.hair_color}`;
});

// Obi-Wan Kenobi
getInfo('people', 10).then(data => { 
    document.querySelector('#Obi1').innerHTML = `${data.name}`;
    document.querySelector('#Obi2').innerHTML = `height: <span>${data.height}cm`;
    document.querySelector('#Obi3').innerHTML = `skin color: <span>${data.skin_color}`;
    document.querySelector('#Obi4').innerHTML = `birth year: <span>${data.birth_year}`;
    document.querySelector('#Obi5').innerHTML = `hair color: <span>${data.hair_color}`;
});

// ===== Movies ===== //
// A New Hope
getInfo('films', 1).then(data => { 
    document.querySelector('#movie1').innerHTML = data.title;
    document.querySelector('#movie2').innerHTML = `release date: <span>${data.release_date}`;
    document.querySelector('#movie3').innerHTML = `rroducer: <span>${data.producer}`;
    document.querySelector('#movie4').innerHTML = `director: <span>${data.director}`;
    document.querySelector('#movie5').innerHTML = `opening crawl: <span>${data.opening_crawl}`;
});

// The Empire Strikes Back
getInfo('films', 2).then(data => { 
    document.querySelector('#movie01').innerHTML = data.title;
    document.querySelector('#movie02').innerHTML = `release date: <span>${data.release_date}`;
    document.querySelector('#movie03').innerHTML = `rroducer: <span>${data.producer}`;
    document.querySelector('#movie04').innerHTML = `director: <span>${data.director}`;
    document.querySelector('#movie05').innerHTML = `opening crawl: <span>${data.opening_crawl}`;
});

// Return of the Jedi
getInfo('films', 3).then(data => { 
    document.querySelector('#movie001').innerHTML = data.title;
    document.querySelector('#movie002').innerHTML = `release date: <span>${data.release_date}`;
    document.querySelector('#movie003').innerHTML = `rroducer: <span>${data.producer}`;
    document.querySelector('#movie004').innerHTML = `director: <span>${data.director}`;
    document.querySelector('#movie005').innerHTML = `opening crawl: <span>${data.opening_crawl}`;
});

// ===== Species ===== //
// Human
getInfo('species', 1).then(data => { 
    document.querySelector('#species1').innerHTML = data.name;
    document.querySelector('#species2').innerHTML = `classification: <span>${data.classification}`;
    document.querySelector('#species3').innerHTML = `average lifespan: <span>${data.average_lifespan}`;
    document.querySelector('#species4').innerHTML = `language: <span>${data.language}`;

    getInfo('planets', 9).then(data => { 
        document.querySelector('#species5').innerHTML = `homeworld: <span>${data.name}`;
    });
});

// Wookie
getInfo('species', 3).then(data => { 
    document.querySelector('#species01').innerHTML = data.name;
    document.querySelector('#species02').innerHTML = `classification: <span>${data.classification}`;
    document.querySelector('#species03').innerHTML = `average lifespan: <span>${data.average_lifespan}`;
    document.querySelector('#species04').innerHTML = `language: <span>${data.language}`;

    getInfo('planets', 14).then(data => { 
        document.querySelector('#species05').innerHTML = `homeworld: <span>${data.name}`;
    });
});

// Rodian
getInfo('species', 4).then(data => { 
    document.querySelector('#species001').innerHTML = data.name;
    document.querySelector('#species002').innerHTML = `classification: <span>${data.classification}`;
    document.querySelector('#species003').innerHTML = `average lifespan: <span>${data.average_lifespan}`;
    document.querySelector('#species004').innerHTML = `language: <span>${data.language}`;

    getInfo('planets', 23).then(data => { 
        document.querySelector('#species005').innerHTML = `homeworld: <span>${data.name}`;
    });
});

// ===== Starships ===== //
// CR90 corvette
getInfo('starships', 2).then(data => { 
    document.querySelector('#starships1').innerHTML = data.name;
    document.querySelector('#starships2').innerHTML = `manufacturer: <span>${data.manufacturer}`;
    document.querySelector('#starships3').innerHTML = `cost: <span>${data.cost_in_credits}`;
    document.querySelector('#starships4').innerHTML = `crew: <span>${data.crew}`;
    document.querySelector('#starships5').innerHTML = `passengers: <span>${data.passengers}`;
});

// Star Destroyer
getInfo('starships', 3).then(data => { 
    document.querySelector('#starships01').innerHTML = data.name;
    document.querySelector('#starships02').innerHTML = `manufacturer: <span>${data.manufacturer}`;
    document.querySelector('#starships03').innerHTML = `cost: <span>${data.cost_in_credits}`;
    document.querySelector('#starships04').innerHTML = `crew: <span>${data.crew}`;
    document.querySelector('#starships05').innerHTML = `passengers: <span>${data.passengers}`;
});

// Death Star
getInfo('starships', 9).then(data => { 
    document.querySelector('#starships001').innerHTML = data.name;
    document.querySelector('#starships002').innerHTML = `manufacturer: <span>${data.manufacturer}`;
    document.querySelector('#starships003').innerHTML = `cost: <span>${data.cost_in_credits}`;
    document.querySelector('#starships004').innerHTML = `crew: <span>${data.crew}`;
    document.querySelector('#starships005').innerHTML = `passengers: <span>${data.passengers}`;
});
