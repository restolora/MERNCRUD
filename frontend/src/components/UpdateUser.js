import React, { Component }from 'react'

class UpdateUser extends Component{
    constructor(props){
        super(props);
        this.state = { users : [] };
        this.getUserID = this.getUserID.bind(this);
        this.onChangeFn = this.onChangeFn.bind(this);
        this.onChangeLn = this.onChangeLn.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
    }
    componentDidMount(){
        this.getUserID();
    }
    getUserID(){
        fetch('http://localhost:3001/users')
        .then(response => response.json() )
        .then(users =>  this.setState({users}));
    }
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