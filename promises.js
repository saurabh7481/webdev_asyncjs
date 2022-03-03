// Promises
const posts = [
    {title: "Post One", content: "This is first post", createdAt: new Date().getTime()},
    {title: "Post Two", content: "This is second post", createdAt: new Date().getTime()}
]

const postThree = {title: "Post Three", content: "This is third post"};


// Callback
function getPost(){
    setTimeout(() => {
        let output = "";
        posts.forEach((post) => {
            output += `<li>${post.title} last updated at ${(new Date().getTime() - post.createdAt)/1000} seconds ago</li>`
        })
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const err = false;
            if(!err){
                resolve(posts);
                // resolve(deletePost()); - create & delete at same time
            } else {
                reject("Error");
            }
        }, 1000)
    })
}

// createPost(postThree)
//     .then(getPost)
//     .catch(err => {console.log(err)})


function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!posts.length){
                reject("Array is empty now");
            } else {
                posts.pop();
                resolve(posts);
            }
        }, 1000)
    })
}

// deletePost().then().catch(err => console.log(err));
// deletePost().then().catch(err => console.log(err));
// deletePost().then().catch(err => console.log(err));

// Promise.all
// const p1 = Promise.resolve("Hello");
// const p2 = 20;
// const p3 = new Promise((resolve, reject) => {
//     return setTimeout(resolve, 2000, "Bye")
// })

// Promise.all([p1, p2, p3]).then(console.log("All resolved"));

let lastUserActive = 0;
function updateLastUserActivityTime(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastUserActive = new Date().getTime();
            resolve(lastUserActive);
        }, 1000)
    })
}

// Promise.all([createPost(postThree), updateLastUserActivityTime()])
//     .then(values => {
//         console.log(values);
//     })
//     .catch(err => {
//         console.log(err);
//     })

// Promise.all([createPost(postThree), updateLastUserActivityTime(), deletePost()])
//     .then(values => {
//         console.log(values[2]);
//     })
//     .catch(err => console.log(err))

// Movie Queue Using Promises
console.log("person 1: shows ticket");
console.log("person 2: shows ticket");

const wifeBringTickets = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("wife: got the ticket");
        resolve("ticket");
    }, 3000)
})

const getPopcorn = wifeBringTickets.then((t) => {
    console.log("husband: got it, lets go in");
    console.log("wife: need popcorn");
    return new Promise((resolve, reject) => resolve(`${t} popcorn`))
})

const getButter = getPopcorn.then((p) => {
    console.log("husband: here, lets go");
    console.log("wife: need butter");
    return new Promise((resolve, reject) => resolve(`${p} butter`));
})

const getColdDrink = getButter.then((b) => {
    console.log("husband: oh lord, take this");
    console.log("wife: need cold drink too");
    console.log("husband: god save me from this woman");
    return new Promise((resolve, reject) => resolve(`${b} cold drinks`))
})

getColdDrink.then((v) => console.log(v));

console.log("person 4: shows ticket");
console.log("person 5: shows ticket");