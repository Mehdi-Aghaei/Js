const posts = [
    { title: 'post one', body: 'this is test one' },

    { title: 'post Two', body: 'this is test two' }
];

function getposts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.body}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createpost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve()
            } else {
                reject("error:somthing not true");
            }
        }, 3000);
    });
};
// createpost({ title: 'post Three', body: 'this is test three' }).then(getposts).catch(err => console.log(err));
// Async / Await Api
// async function init() {
//     await createpost({ title: 'post Three', body: 'this is test three' });
//     getposts();
// }
// init();


// Async / Await / Fetch
async function fetchUser() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}
fetchUser();


//promise.all
// const promise1 = Promise.resolve('hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'goodbye')
// });
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());


// Promise.all(
//     [promise1, promise2, promise3, promise4]).then((values) => {
//     console.log(values)
// })