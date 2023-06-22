const countryTableBody = document.querySelector("#countries-table-body");

$("#preloader").show();
$.ajax({
    method: "GET",
    url: "https://restcountries.com/v2/all",
    success: (response) => {
        response.forEach(country => {
            const row = document.createElement("tr");
            const alphaCodeCountry = document.createElement('td');
            alphaCodeCountry.textContent = country.alpha3Code;
            row.appendChild(alphaCodeCountry);
                

            const flagCountry = document.createElement("tr");
            const flagImage = document.createElement("img");
            flagImage.src = country.flag;
            flagImage.classList.add('flag-image');
            flagCountry.appendChild(flagImage);
            row.appendChild(flagCountry);
                

            const nameCountry = document.createElement('td');
            nameCountry.textContent = country.name;
            row.appendChild(nameCountry);
                

            const capitalCountry = document.createElement('td');
            capitalCountry.textContent = country.capital;
            row.appendChild(capitalCountry);


            const populationCountry = document.createElement('td');
            populationCountry.textContent = country.population.toLocaleString("en-US");
            row.appendChild(populationCountry);


            const regionCountry = document.createElement('td');
            regionCountry.textContent = country.region;
            row.appendChild(regionCountry);


            const areaCountry = document.createElement('td');
            areaCountry.textContent = country.area;
            row.appendChild(areaCountry);

            const languagesCountry = document.createElement('td');
            const langList = country.languages.map(language => language.name);
            langList.toLocaleString('ru-RU')
            languagesCountry.textContent = langList;
            row.appendChild(languagesCountry);



            countryTableBody.appendChild(row);

            $("#preloader").hide();
        });
    },
        error: (error) => {
            console.log(error);
            $("#preloader").hide();
        }
    });