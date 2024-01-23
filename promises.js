// YOU DO NOT NEED TO EDIT THIS FILE
// YOU DO NOT NEED TO EDIT THIS FILE
// YOU DO NOT NEED TO EDIT THIS FILE
// YOU DO NOT NEED TO EDIT THIS FILE
// YOU DO NOT NEED TO EDIT THIS FILE
// YOU DO NOT NEED TO EDIT THIS FILE
// YOU DO NOT NEED TO EDIT THIS FILE
// YOU DO NOT NEED TO EDIT THIS FILE
// YOU DO NOT NEED TO EDIT THIS FILE
// YOU DO NOT NEED TO EDIT THIS FILE
let users = ['Dave', 'Gary', 'Steve']
const addUser = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            users.push(username)
            const error = false
            if (!error){
                resolve()
            } else {
                reject('oops there has been an error')
            }
        }, 2000)
    })
}

let myPosts = [
    { title: 'Post One', body: 'This is post one body' },
    { title: 'Post Two', body: 'This is post two body' }
]

let getPosts = () => {
    setTimeout(() => {
        myPosts.forEach((post) => {
            console.log(post.title)
        })
        console.log(myPosts)
    }, 1000)
}

let createPost = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            myPosts.push(post)
            const error = false
            if(!error) {
                resolve()
            } else {
                reject('something went wrong')
            }
        }, 5000)
    })
}

const getTrex = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false
            const trex = {
                name: 'Trevor',
                weight: '9 tons',
                height: '13 ft',
            }
            if(!error){
                resolve({
                    message: 'here is a trex',
                    data: trex
                })
            } else {
                reject("I'm sorry you can't have the t rex")
            }
        }, 2000)
    })
}

const even = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(num <= 0){
                reject('must be positive integer')
            } else if(num % 2 == 0){
                resolve(`${num} is an even number`)
            } else {
                reject(`${num} is not even`)
            }
        }, 2000)
    })
}

const unstable = () => {
    return new Promise((resolve, reject) => {
        let decision = Math.round(Math.random()) == 0 ? true : false
        setTimeout(() => {
            if(decision) {
                resolve('success')
            } else {
                reject('unsuccessful ')
            }
        }, 2000)
        })
}

module.exports = {
    users,
    addUser,
    createPost,
    getPosts,
    getTrex,
    even,
    unstable
}