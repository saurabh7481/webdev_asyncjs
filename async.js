// console.log("person 1: shows ticket");
// console.log("person 2: shows ticket");

const pleaseLetMeWatchMovie = async () => {
    const wifeBringTickets = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("ticket");
        }, 3000)
    })

    const getPopcorn = new Promise((resolve, reject) => resolve("popcorn"))

    const getButter = new Promise((resolve, reject) => resolve("butter"))

    const getColdDrink = new Promise((resolve, reject) => resolve("cold drink"))

    let ticket = await wifeBringTickets;

    console.log(`wife: got the ${ticket}`);
    console.log("husband: got it, lets go in");
    console.log("wife: need popcorn");

    let popcorn = await getPopcorn;

    console.log(`husband: here is ${popcorn} , lets go`);
    console.log("wife: need butter");

    let butter = await getButter;

    console.log(`husband: oh lord, take this ${butter}`);
    console.log("wife: need cold drink too");
    console.log("husband: god save me from this woman");

    let coldDrink =  await getColdDrink;

    console.log(`husband: are you done? take ${coldDrink}`);
    console.log("wife: yes lets go");
    console.log("husband: thank god");

    return ticket;

}


// pleaseLetMeWatchMovie().then((v) => console.log("person 3: shows ticket"));

// console.log("person 4: shows ticket");
// console.log("person 5: shows ticket");

// Posts with async await
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

const createPost = async (post) => {
    const create = new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const err = false;
            if(!err){
                resolve(posts);
            } else {
                reject("Error");
            }
        }, 1000)
    })

    let res;
    try{
        res = await create;
    } catch(err){
        res = err;
    }

    return res;
}

const postThree = {title: "Post Three", content: "This is third post"};

createPost(postThree)
    .then((res) => console.log(res))
    .catch(err => console.log(err))


const deletePost = async () => {
    const del = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!posts.length){
                reject("Array is empty now");
            } else {
                posts.pop();
                resolve(posts);
            }
        }, 1000)
    })

    let res;
    try{
        res = await del;
    } catch(err){
        res = err;
    }

    return res;
}

deletePost().then((res) => console.log(res))
    .catch(err => console.log(err));

