import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Axios from 'axios'
// components
import UpdateUser from './components/UpdateUser'

class App extends Component{
    constructor(props){
        super(props);
        this.state = { users : [] };
        this.getUsers = this.getUsers.bind(this);
        this.onChangeFn = this.onChangeFn.bind(this);
        this.onChangeLn = this.onChangeLn.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
    }
    componentDidMount(){
        this.getUsers();
    }
    getUsers(){
        fetch('http://localhost:3001/users')
        .then(response => response.json() )
        .then(users =>  this.setState({users}));
    }

    onChangeFn(e){
        this.setState({ fname: e.target.value })
    }
    onChangeLn(e){
        this.setState({ lname: e.target.value })
    }
    onChangeContact(e){
        this.setState({ contact: e.target.value })
    }
    onDelete(id){
        Axios.delete(`http://localhost:3001/user/delete/${id}`)
        .then(() => {
            alert('The user with ID: ' + id +' is removed.');
            this.getUsers();
        });
    }
    submit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3001/user/create', 
        { fname: this.state.fname , lname: this.state.lname, contact: this.state.contact })
        .then(() => {
            alert('New user is created succressfully.');
            this.getUsers();
        }, e.target.reset()).catch(err => console.log(err));
    }

    render(){       
        return(
        <Router>
            <main>
                <Route 
                    exact
                    path="/" 
                    render={props => (
                        <React.Fragment>
                            <div className="main-content">
                                <div className="container">
                                    <div className="head">
                                        <h1>Simple CRUD Application</h1>
                                    </div>
                                    <div className="body">
                                        <form onSubmit={this.submit}>
                                            <div className="form-h">
                                                <div className="d-flex">
                                                    <h3> Registration of new user </h3>
                                                </div>
                                            </div> 
                                            <div className="d-flex">
                                                <input 
                                                    type="text"
                                                    name="fname"
                                                    placeholder="First Name" 
                                                    required={true}
                                                    onChange={this.onChangeFn}
                                                />
                                            </div>
                                            <div className="d-flex">
                                                <input 
                                                    type="text"
                                                    name="lname"
                                                    placeholder="Last Name"
                                                    required={true}
                                                    onChange={this.onChangeLn}
                                                />
                                            </div>
                                            <div className="d-flex">
                                                <input 
                                                    type="text"
                                                    name="contact"
                                                    placeholder="Contact"
                                                    onChange={this.onChangeContact}
                                                />
                                            </div>
                                            <div className="d-flex">
                                                <input 
                                                    type="submit"
                                                    className="btn"
                                                    name="btnSubmit"
                                                    value="Submit"
                                                />
                                            </div>
                                        </form>
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
                                                    <button className="btn actions btnEdit">
                                                        <Link to={`/update-user/${users.id}`}>Edit</Link>
                                                    </button>
                                                    <button 
                                                        className="btn actions btnDel" 
                                                        onClick={this.onDelete.bind(this, users.id)}
                                                    >Delete</button>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </React.Fragment>
                    )}
                />
                <Route path="/update-user/:id" component={UpdateUser} />
                    {/* <UpdateUser getUsers={this.getUsers} /> */}
            </main>
        </Router>
        )
    }

}
 

export default App