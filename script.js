const api = "https://swapi.dev/api/";

//PEOPLE
fetch(`${api}people/1`)
    .then(function(response){
        
        return response.json();
    })
    .then(function(data){
        const nameLuke = document.getElementById('luke1');
        const heightLuke = document.getElementById('luke2');
        const skinLuke = document.getElementById('luke3');
        const birthLuke = document.getElementById('luke4');
        const hairLuke = document.getElementById('luke5');
        
        nameLuke.innerHTML = `${data.name}`;
        heightLuke.innerHTML = `height: <span style ="color:#5f5f5f;">${data.height}cm`;
        skinLuke.innerHTML = `skin color: <span style ="color:#5f5f5f;">${data.skin_color}`;
        birthLuke.innerHTML = `birth year: <span style ="color:#5f5f5f;">${data.birth_year}`
        hairLuke.innerHTML = `hair color: <span style ="color:#5f5f5f;">${data.hair_color}`
    
    });

    fetch(`${api}people/4`)
    .then(function(response){
        
        return response.json();
    })
    .then(function(data){
        const nameVader = document.getElementById('vader1');
        const heightVader = document.getElementById('vader2');
        const skinVader = document.getElementById('vader3');
        const birthVader = document.getElementById('vader4');
        const hairVader = document.getElementById('vader5');
        
        nameVader.innerHTML = `${data.name}`;
        heightVader.innerHTML = `height: <span style ="color:#5f5f5f;">${data.height}cm`;
        skinVader.innerHTML = `skin color: <span style ="color:#5f5f5f;">${data.skin_color}`;
        birthVader.innerHTML = `birth year: <span style ="color:#5f5f5f;">${data.birth_year}`
        hairVader.innerHTML = `hair color: <span style ="color:#5f5f5f;">${data.hair_color}`
    
    });

    fetch(`${api}people/5`)
    .then(function(response){
        
        return response.json();
    })
    .then(function(data){
        const nameLeia = document.getElementById('leia1');
        const heightLeia = document.getElementById('leia2');
        const skinLeia = document.getElementById('leia3');
        const birthLeia = document.getElementById('leia4');
        const hairLeia = document.getElementById('leia5');
        
        nameLeia.innerHTML = `${data.name}`;
        heightLeia.innerHTML = `height: <span style ="color:#5f5f5f;">${data.height}cm`;
        skinLeia.innerHTML = `skin color: <span style ="color:#5f5f5f;">${data.skin_color}`;
        birthLeia.innerHTML = `birth year: <span style ="color:#5f5f5f;">${data.birth_year}`
        hairLeia.innerHTML = `hair color: <span style ="color:#5f5f5f;">${data.hair_color}`
    
    });

    fetch(`${api}people/6`)
    .then(function(response){
        
        return response.json();
    })
    .then(function(data){
        const nameOwen = document.getElementById('Owen1');
        const heightOwen = document.getElementById('Owen2');
        const skinOwen = document.getElementById('Owen3');
        const birthOwen = document.getElementById('Owen4');
        const hairOwen = document.getElementById('Owen5');
        
        nameOwen.innerHTML = `${data.name}`;
        heightOwen.innerHTML = `height: <span style ="color:#5f5f5f;">${data.height}cm`;
        skinOwen.innerHTML = `skin color: <span style ="color:#5f5f5f;">${data.skin_color}`;
        birthOwen.innerHTML = `birth year: <span style ="color:#5f5f5f;">${data.birth_year}`
        hairOwen.innerHTML = `hair color: <span style ="color:#5f5f5f;">${data.hair_color}`
    
    });

    fetch(`${api}people/7`)
    .then(function(response){
        
        return response.json();
    })
    .then(function(data){
        const nameBeru = document.getElementById('Beru1');
        const heightBeru = document.getElementById('Beru2');
        const skinBeru = document.getElementById('Beru3');
        const birthBeru = document.getElementById('Beru4');
        const hairBeru = document.getElementById('Beru5');
        
        nameBeru.innerHTML = `${data.name}`;
        heightBeru.innerHTML = `height: <span style ="color:#5f5f5f;">${data.height}cm`;
        skinBeru.innerHTML = `skin color: <span style ="color:#5f5f5f;">${data.skin_color}`;
        birthBeru.innerHTML = `birth year: <span style ="color:#5f5f5f;">${data.birth_year}`
        hairBeru.innerHTML = `hair color: <span style ="color:#5f5f5f;">${data.hair_color}`
    
    });

    fetch(`${api}people/10`)
    .then(function(response){
        
        return response.json();
    })
    .then(function(data){
        const nameObi = document.getElementById('Obi1');
        const heightObi = document.getElementById('Obi2');
        const skinObi = document.getElementById('Obi3');
        const birthObi = document.getElementById('Obi4');
        const hairObi = document.getElementById('Obi5');
        
        nameObi.innerHTML = `${data.name}`;
        heightObi.innerHTML = `height: <span style ="color:#5f5f5f;">${data.height}cm`;
        skinObi.innerHTML = `skin color: <span style ="color:#5f5f5f;">${data.skin_color}`;
        birthObi.innerHTML = `birth year: <span style ="color:#5f5f5f;">${data.birth_year}`
        hairObi.innerHTML = `hair color: <span style ="color:#5f5f5f;">${data.hair_color}`
    
    });

    //FILMS
    fetch(`${api}films/1`)
    .then(function(response){
        
        return response.json();
    })
    .then(function(data){
        const movieTitle = document.getElementById('movie1');
        const movieRelease = document.getElementById('movie2');
        const movieProducer = document.getElementById('movie3');
        const movieDirector = document.getElementById('movie4');
        const movieopening_crawl = document.getElementById('movie5');

        movieTitle.innerHTML = `${data.title}`;
        movieRelease.innerHTML = `release date: <span style ="color:#5f5f5f;">${data.release_date}`;
        movieProducer.innerHTML = `rroducer: <span style ="color:#5f5f5f;">${data.producer}`;
        movieDirector.innerHTML = `director: <span style ="color:#5f5f5f;">${data.director}`;
        movieopening_crawl.innerHTML = `opening crawl: <span style ="color:#5f5f5f;">${data.opening_crawl}`;
    
    });
    
    fetch(`${api}films/2`)
    .then(function(response){
        
        return response.json();
    })
    .then(function(data){
        const movieTitle = document.getElementById('movie01');
        const movieRelease = document.getElementById('movie02');
        const movieProducer = document.getElementById('movie03');
        const movieDirector = document.getElementById('movie04');
        const movieopening_crawl = document.getElementById('movie05');

        movieTitle.innerHTML = `${data.title}`;
        movieRelease.innerHTML = `release date: <span style ="color:#5f5f5f;">${data.release_date}`;
        movieProducer.innerHTML = `rroducer: <span style ="color:#5f5f5f;">${data.producer}`;
        movieDirector.innerHTML = `director: <span style ="color:#5f5f5f;">${data.director}`;
        movieopening_crawl.innerHTML = `opening crawl: <span style ="color:#5f5f5f;">${data.opening_crawl}`;
    
    });

        
    fetch(`${api}films/3`)
    .then(function(response){
        
        return response.json();
    })
    .then(function(data){
        const movieTitle = document.getElementById('movie001');
        const movieRelease = document.getElementById('movie002');
        const movieProducer = document.getElementById('movie003');
        const movieDirector = document.getElementById('movie004');
        const movieopening_crawl = document.getElementById('movie005');

        movieTitle.innerHTML = `${data.title}`;
        movieRelease.innerHTML = `release date: <span style ="color:#5f5f5f;">${data.release_date}`;
        movieProducer.innerHTML = `producer: <span style ="color:#5f5f5f;">${data.producer}`;
        movieDirector.innerHTML = `director: <span style ="color:#5f5f5f;">${data.director}`;
        movieopening_crawl.innerHTML = `opening crawl: <span style ="color:#5f5f5f;">${data.opening_crawl}`;
    
    });
    //SPECIES
    fetch(`${api}species/1`)
    .then(function(response){
        
        return response.json();
    })
    .then(function(data){
        const speciesName = document.getElementById('species1');
        const speciesClass = document.getElementById('species2');
        const speciesLifespan = document.getElementById('species3');
        const speciesLanguage = document.getElementById('species4');
        const speciesHomeworld = document.getElementById('species5');

        speciesName.innerHTML = `${data.name}`;
        speciesClass.innerHTML = `classification: <span style ="color:#5f5f5f;">${data.classification}`;
        speciesLifespan.innerHTML = `average lifespan: <span style ="color:#5f5f5f;">${data.average_lifespan}`;
        speciesLanguage.innerHTML = `language: <span style ="color:#5f5f5f;">${data.language}`;

        fetch(`${api}planets/9`)
        .then(function(response) {

            return response.json();
            
        })
        .then(function (data) {
            speciesHomeworld.innerHTML = `homeworld: <span style ="color:#5f5f5f;">${data.name}`;
        })
        
    });

    fetch(`${api}species/3`)
    .then(function(response){
        
        return response.json();
    })
    .then(function(data){
        const speciesName = document.getElementById('species01');
        const speciesClass = document.getElementById('species02');
        const speciesLifespan = document.getElementById('species03');
        const speciesLanguage = document.getElementById('species04');
        const speciesHomeworld = document.getElementById('species05');

        speciesName.innerHTML = `${data.name}`;
        speciesClass.innerHTML = `classification: <span style ="color:#5f5f5f;">${data.classification}`;
        speciesLifespan.innerHTML = `average lifespan: <span style ="color:#5f5f5f;">${data.average_lifespan}`;
        speciesLanguage.innerHTML = `language: <span style ="color:#5f5f5f;">${data.language}`;

        fetch(`${api}planets/14`)
        .then(function(response) {

            return response.json();
            
        })
        .then(function (data) {
            speciesHomeworld.innerHTML = `homeworld: <span style ="color:#5f5f5f;">${data.name}`;
        })
        
    });

    fetch(`${api}species/4`)
    .then(function(response){
        
        return response.json();
    })
    .then(function(data){
        const speciesName = document.getElementById('species001');
        const speciesClass = document.getElementById('species002');
        const speciesLifespan = document.getElementById('species003');
        const speciesLanguage = document.getElementById('species004');
        const speciesHomeworld = document.getElementById('species005');

        speciesName.innerHTML = `${data.name}`;
        speciesClass.innerHTML = `classification: <span style ="color:#5f5f5f;">${data.classification}`;
        speciesLifespan.innerHTML = `average lifespan: <span style ="color:#5f5f5f;">${data.average_lifespan}`;
        speciesLanguage.innerHTML = `language: <span style ="color:#5f5f5f;">${data.language}`;

        fetch(`${api}planets/23`)
        .then(function(response) {

            return response.json();
            
        })
        .then(function (data) {
            speciesHomeworld.innerHTML = `homeworld: <span style ="color:#5f5f5f;">${data.name}`;
        })
        
    });

    // STARSHIPS INFO
    fetch(`${api}starships/2`)
    .then(function(response){
        
        return response.json();
    })
    .then(function(data){
        const starshipsName = document.getElementById('starships1');
        const starshipsManufacturer = document.getElementById('starships2');
        const starshipsCost = document.getElementById('starships3');
        const starshipsCrew = document.getElementById('starships4');
        const starshipsPassengers = document.getElementById('starships5');

        starshipsName.innerHTML = `${data.name}`;
        starshipsManufacturer.innerHTML = `manufacturer: <span style ="color:#5f5f5f;">${data.manufacturer}`;
        starshipsCost.innerHTML = `cost: <span style ="color:#5f5f5f;">${data.cost_in_credits}`;
        starshipsCrew.innerHTML = `crew: <span style ="color:#5f5f5f;">${data.crew}`;
        starshipsPassengers.innerHTML = `passengers: <span style ="color:#5f5f5f;">${data.passengers}`;
        
        
    });
    fetch(`${api}starships/3`)
    .then(function(response){
        
        return response.json();
    })
    .then(function(data){
        const starshipsName = document.getElementById('starships01');
        const starshipsManufacturer = document.getElementById('starships02');
        const starshipsCost = document.getElementById('starships03');
        const starshipsCrew = document.getElementById('starships04');
        const starshipsPassengers = document.getElementById('starships05');

        starshipsName.innerHTML = `${data.name}`;
        starshipsManufacturer.innerHTML = `manufacturer: <span style ="color:#5f5f5f;">${data.manufacturer}`;
        starshipsCost.innerHTML = `cost: <span style ="color:#5f5f5f;">${data.cost_in_credits}`;
        starshipsCrew.innerHTML = `crew: <span style ="color:#5f5f5f;">${data.crew}`;
        starshipsPassengers.innerHTML = `passengers: <span style ="color:#5f5f5f;">${data.passengers}`;
        
        
    });
    fetch(`${api}starships/9`)
    .then(function(response){
        
        return response.json();
    })
    .then(function(data){
        const starshipsName = document.getElementById('starships001');
        const starshipsManufacturer = document.getElementById('starships002');
        const starshipsCost = document.getElementById('starships003');
        const starshipsCrew = document.getElementById('starships004');
        const starshipsPassengers = document.getElementById('starships005');

        starshipsName.innerHTML = `${data.name}`;
        starshipsManufacturer.innerHTML = `manufacturer: <span style ="color:#5f5f5f;">${data.manufacturer}`;
        starshipsCost.innerHTML = `cost: <span style ="color:#5f5f5f;">${data.cost_in_credits}`;
        starshipsCrew.innerHTML = `crew: <span style ="color:#5f5f5f;">${data.crew}`;
        starshipsPassengers.innerHTML = `passengers: <span style ="color:#5f5f5f;">${data.passengers}`;
        
        
    });