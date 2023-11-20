const users =[]


const addUser=({ id, username, room})=>{
    // Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //validate data
    if(!username || !room){
        return {
            error: "Username and room are required"
        }
    }
    //Check for exiting user
    const existingUser = users.find((user)=>{
        return user.room == room && user.username == username
    })

    //validate the data
    if(existingUser){
        return {
            error: "Username is in use!"
        }
    }

    //Store user
    const user= { id, username, room}
    users.push(user)
    return {user}
}

const removeUser = (id)=>{
    const index = users.findIndex((user)=>{
        return user.id === id
    })

    if (index !== -1){
        return users.splice(index, 1)
    }
}

const getUser = (id)=>{
    return users.find((user)=>{
        return user.id === id
    })
}

const getUsersInRoom = (room)=>{
    return users.filter((user)=>{
        return user.room === room
    })
}

module.exports ={
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}

