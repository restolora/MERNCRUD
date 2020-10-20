const Users = require('../models/Users');

module.exports = async (fname, lname, contact) => {
    try{
        await Users.insertMany({
            fname,
            lname,
            contact 
        })
        return true
    }catch (err){
        console.log(err)
        return false
    }
}