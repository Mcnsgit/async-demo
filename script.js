// Code demonstrated in slideshow

const { users, createPost, getPosts, addUser } = require('./promises')
const getUsers = () => {
    setTimeout(() => {
        console.log(users)
    }, 1000)
}

const initAddUser = async () => {
    await addUser('Bob')
    getUsers()
}

const initPost = async () => {
    try{
        await createPost({ title: 'Post Three', body: 'This is post three body' })
        getPosts()
    } catch (error) {
        console.log(error)
    }
}





