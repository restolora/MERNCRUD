import React, { Component } from 'react'
import Axios from 'axios'

class UpdateUser extends Component{

    constructor(props){
        super(props)
        this.state = {
            id: '',
            fname: '',
            lname: '',
            contact: ''
        }
        this.getUser = this.getUser.bind(this)
        this.onChangeFn = this.onChangeFn.bind(this);
        this.onChangeLn = this.onChangeLn.bind(this);
        this.onChangeCn = this.onChangeCn.bind(this);
        this.submitUpdate = this.submitUpdate.bind(this);   
    }
    componentDidMount(){
        this.getUser();
    }
    getUser(){
        let id = this.props.match.params.id
        Axios.get(`http://localhost:3001/user/${id}`)
        .then((user) => {
            this.setState({
                id: user.data[0].id,
                fname: user.data[0].fname,
                lname: user.data[0].lname,
                contact: user.data[0].contact
            })
        });
    }
    onChangeFn(e){
        this.setState({ fname: e.target.value })
    }
    onChangeLn(e){
        this.setState({ lname: e.target.value })
    }
    onChangeCn(e){
        this.setState({ contact: e.target.value })       
    }


    // submit event

    submitUpdate(e){
        e.preventDefault();
        // console.log(this.state.fname);
        Axios.put('http://localhost:3001/user/update',
        { fname: this.state.fname , lname: this.state.lname, contact: this.state.contact, id: this.state.id })
        .then(() => {
            alert('User is updated succressfully.');            
            
        }).catch(err => console.log(err));
    }


    render(){
        const contact = this.state.contact === null  ? '' : this.state.contact 
        const fname = this.state.fname === null  ? '' : this.state.fname 
        const lname = this.state.lname === null  ? '' : this.state.lname 
        return(
            <React.Fragment>
                <div className="main-content">
                    <div className="head-content">
                        <div className="head">
                            <h1>Simple CRUD Application</h1>
                                <p></p> 
                        </div>
                        <br/>
                        <div className="body">
                            <form onSubmit={this.submitUpdate}>
                                <div className="d-flex">
                                    <div className="form-h">   
                                        <h3> <a href={"/"}> Back</a> Edit user: </h3>
                                    </div>  
                                </div>
                                <div className="d-flex">
                                    <input 
                                        type="text"
                                        name="fname"
                                        placeholder="First Name" 
                                        required={true}
                                        value={fname}
                                        onChange={this.onChangeFn}
                                        
                                    />    
                                </div>
                                <div className="d-flex">
                                    <input 
                                        type="text"
                                        name="lname"
                                        placeholder="Last Name"
                                        required={true}
                                        value={lname}
                                        onChange={this.onChangeLn}
                                    />
                                </div>
                                <div className="d-flex">
                                    <input 
                                        type="text"
                                        name="contact"
                                        placeholder="Contact"
                                        value={contact}
                                        onChange={this.onChangeCn}
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
            </React.Fragment>
        )
    }
}
export default UpdateUser
