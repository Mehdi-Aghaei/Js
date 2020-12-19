const posts = [
    { title: 'post one', body: 'this is test one' },

    { title: 'post Two', body: 'this is test two' }
];

function getposts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createpost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 3000);
};

createpost({ title: 'post Three', body: 'this is test three' }, getposts);