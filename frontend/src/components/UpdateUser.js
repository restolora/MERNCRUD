import React, { Component }from 'react'

class UpdateUser extends Component{

    render(){
        return(
            <React.Fragment>
                <div className="main-content">
                    <div className="container">
                        <div className="head">
                            <h1>Simple CRUD Application</h1>
                            
                            <p></p> 
                        </div>
                        <br/>
                        <div className="body">
                            <form>
                                <div className="form-h">
                                    <h3>Edit user:</h3>    
                                </div>  
                                <input 
                                    type="text"
                                    name="fname"
                                    placeholder="First Name" 
                                    required={true}
                                    
                                />
                                <br/>
                                <input 
                                    type="text"
                                    name="lname"
                                    placeholder="Last Name"
                                    required={true}
                                    
                                />
                                <br/>
                                <input 
                                    type="text"
                                    name="contact"
                                    placeholder="Contact"

                                />
                                <br/>
                                <input 
                                    type="submit"
                                    className="btn"
                                    name="btnSubmit"
                                    value="Submit"
                                />
                            </form>
                        </div> 
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default UpdateUser
