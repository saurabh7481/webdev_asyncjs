const posts = [
    {title: "Post One", content: "This is first post", createdAt: new Date().getTime()},
    {title: "Post Two", content: "This is second post", createdAt: new Date().getTime()}
]

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

// function createPost(post, callback){
//     setTimeout(() => {
//         posts.push({...post, createdAt: new Date().getTime()})
//         callback();
//     }, 2000)
// }

// function create4thPost(callback){
//     setTimeout(() => {
//         posts.push({...arguments[3], createdAt: new Date().getTime()});
//         callback(arguments[1], arguments[2]);
//     }, 4000)
// }

postThree = {title: "Post Three", content: "This is third post"};
// postFour = {title: "Post Four", content: "This is fourth post"};


// create4thPost(createPost, postThree, getPost, postFour)

// Promises

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