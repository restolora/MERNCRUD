import React, { Component } from "react"
// import { BrowserRouter as Router, Route } from "react-router-dom"


class App extends Component{
    constructor(props){
        super(props);
        this.state = { users : [] };
        this.getUsers = this.getUsers.bind(this);
    }
    
    componentDidMount(){
        this.getUsers();
    }
    getUsers(){
        fetch('http://localhost:3001/users')
        .then(response => response.json() )
        .then(users =>  this.setState({users}) )
        .then(err => { console.log(err) });
    }
    
    clicked = () => {
        console.log("I was clicked");
    }
    render(){       
        // console.log(this.state.users);
        return(
            <main>
                <div className="main-content">
                    <div className="container">
                        <div className="head">
                            <h1>Simple CRUD Application</h1>
                        </div>
                        <div className="body">
                            <input 
                                type="text"
                                name="fname"
                                placeholder="First Name"                                
                            />
                            <br/>
                            <input 
                                type="text"
                                name="lname"
                                placeholder="Last Name"
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
                                onClick={this.clicked}
                            />
                        </div> 
                    </div>
                </div>
                <div className="user-list">
                    <table>
                        <thead>
                            <tr>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Contact</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users.map(users =>
                                <tr key={users.id}>
                                    <td>{users.fname}</td>
                                    <td>{users.lname}</td>
                                    <td>{users.contact}</td>
                                    <td>
                                        <button className="btn actions btnEdit">Edit</button>
                                        <button className="btn actions btnDel">Delete</button>
                                    </td>

                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </main>
            
        )
    }

}
 

export default App