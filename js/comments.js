function userComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayUsers(data))
}
userComments()

function displayUsers(data) {
    const comentsdiv = document.getElementById('users');
    data.forEach(user => {
        const div = document.createElement('div');
        div.classList.add('comments')
        div.innerHTML = `
        <h3>Name: ${user.name}</h3>
        <h5>Email: ${user.email}</h5>
        <p>${user.body.slice(0, 100)}</p>
        <button onclick="loadCommentDetails('${user.id}')">See Details</button>
        `;
        comentsdiv.appendChild(div)
    });
}

const loadCommentDetails = (id) => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => setCommentDetails(data))
}

const setCommentDetails = (comment) => {
    const commentDetails = document.getElementById("comment-details")
    for (const comments of comment) {
        commentDetails.innerHTML = ""
        const commentBox = document.createElement("div")
        commentBox.innerHTML = `
        <h1>Comments ID Number: ${comments.id}</h1>`
        commentDetails.appendChild(commentBox)
    }
}


