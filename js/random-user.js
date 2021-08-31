const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=12')
        .then(res => res.json())
        .then(data => displayBuddies(data));
}
loadBuddies();

const displayBuddies = data => {
    console.log(data);
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for (const buddy of buddies) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col m-3 p-3 border border-2 border-success rounded">
            <img src="${buddy.picture.large}" alt="image">
            <h4>Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}</h4>
            <h4>Gender: ${buddy.gender}</h4>
            <h4>Email: ${buddy.email}</h4>
            <h5>Phone: ${buddy.phone}</h5>
            <h5>Location:            
                <p>city: ${buddy.location.city}, country: ${buddy.location.country}</p>
            </h5>
        </div>
         `;
        buddiesDiv.appendChild(div);
    }
}



/* const loadUserRandom = () => {
    fetch("https://randomuser.me/api/?results=5")
        .then(res => res.json())
        .then(data => displayUsersRandom(data))
}
loadUserRandom()

const displayUsersRandom = () => {
    const randomUser = document.getElementById('random-user');
    console.log(randomUser);
} */

//https://randomuser.me/api/?results=5