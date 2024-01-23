// Code demonstrated in slideshow

const { users, createPost, getPosts, addUser } = require('./promises')


// ADD USERS
const getUsers = () => {
    setTimeout(() => {
        console.log(users)
    }, 1000)
}

// addUser('Bob')
//     .then(getUsers)
//     .catch((error) => {
//         console.log(error)
//     })

const initAddUser = async () => {
    await addUser('Bob')
    getUsers()
}

// >>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>

// Try Catch

const initPost = async () => {
    try{
        await createPost({ title: 'Post Three', body: 'This is post three body' })
        getPosts()
    } catch (error) {
        console.log(error)
    }
}
