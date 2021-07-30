const url = "https://distinct-vaulted-freesia.glitch.me/image"
const fgTitle = document.getElementById('fg-title');
const fgImage = document.getElementById('fg-image');
const fgLikes = document.getElementById('fg-likes');
const fgComments = document.getElementById('fg-comments');
const likeButton = document.getElementById('like-button');
const commentForm = document.getElementById('comment-form');

let likes = 0;

likeButton.addEventListener('click', () => {
    likes += 1;
    renderLikes();
})

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addComment(e.target.comment.value);
    e.target.comment.value = '';
})


fetch(url)
.then(resp => resp.json())
.then((data) => renderImage(data))

function renderImage(data) {
    console.log(data);
    fgTitle.textContent = data.title;
    fgImage.src = data.image;
    likes = data.likes;
    renderLikes();
    setComments(data.comments);
}

function renderLikes() {
    fgLikes.textContent = `${likes} likes`
}

function setComments(comments) {
    fgComments.innerHTML = '';
    comments.forEach((comment) => addComment(comment.content));
}

function addComment(comment) {
    const li = document.createElement('li');
    li.textContent = comment;
    fgComments.append(li);
}




