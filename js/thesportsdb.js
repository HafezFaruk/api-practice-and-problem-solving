document.getElementById('error-message').style.display = 'none';
const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';
    document.getElementById('error-message').style.display = 'none';
    if (searchText == '') {
        // please write something to display
    }
    else {
        // load data
        const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.teams))
            .catch(error => displayError(error));
    }
}

const displayError = error => {
    document.getElementById('error-message').style.display = 'block';
}

const displaySearchResult = sports => {
    console.log(sports);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (sports.length == 0) {
        // show no result found;
    }
    sports.forEach(sport => {
        // console.log(sport);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadsportDetail(${sport.idTeam})" class="card h-100">
            <img src="${sport.strsportThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${sport.strsport}</h5>
                <p class="card-text">${sport.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}

const loadsportDetail = sportId => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${sportId}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaysportDetail(data.teams[0]));
}

const displaysportDetail = sport => {
    console.log(sport);
    const sportDetails = document.getElementById('sport-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${sport.strStadiumThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${sport.strsport}</h5>
        <p class="card-text">${sport.strInstructions.slice(0, 150)}</p>
        <a href="${sport.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    sportDetails.appendChild(div);
}