const posts = [
    {title: "Post One", content: "This is first post", createdAt: new Date().getTime()},
    {title: "Post Two", content: "This is second post", createdAt: new Date().getTime()}
]

function getPost(){
    setTimeout(() => {
        let output = "";
        posts.forEach((post) => {
            output += `<li>${post.title} last updated at ${(new Date().getTime() - post.createdAt)/1000} seconds ago</li>`
        })
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post, callback){
    setTimeout(() => {
        posts.push({...post, createdAt: new Date().getTime()})
        callback();
    }, 2000)
}

function create4thPost(callback){
    setTimeout(() => {
        posts.push({...arguments[3], createdAt: new Date().getTime()});
        callback(arguments[1], arguments[2]);
    }, 4000)
}

postThree = {title: "Post Three", content: "This is third post"};
postFour = {title: "Post Four", content: "This is fourth post"};


create4thPost(createPost, postThree, getPost, postFour)