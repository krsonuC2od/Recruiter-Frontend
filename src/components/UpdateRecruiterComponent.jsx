import React, { Component } from 'react'
import RecruiterService from '../services/RecruiterService';

class UpdateRecruiterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            email: '',
            company: ''
        }
        this.changenameHandler = this.changenameHandler.bind(this);
        this.changeemailHandler = this.changeemailHandler.bind(this);
        this.changecompanyHandler = this.changecompanyHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        RecruiterService.getRecruiterById(this.state.id).then( (res) =>{
            let recruiter = res.data;
            this.setState({name: recruiter.name,
                email: recruiter.email,
                company : recruiter.company
            });
        });
    }

    updateRecruiter = (e) => {
        e.preventDefault();
        let recruiter = {name: this.state.name, email: this.state.email, company: this.state.company};
        console.log('recruiter => ' + JSON.stringify(recruiter));
        console.log('id => ' + JSON.stringify(this.state.id));
        RecruiterService.updateRecruiter(recruiter, this.state.id).then( res => {
            this.props.history.push('/recruiters');
        });
    }
    
    changenameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeemailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changecompanyHandler= (event) => {
        this.setState({company: event.target.value});
    }

    cancel(){
        this.props.history.push('/recruiters');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Recruiter</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label>  Name: </label>
                                            <input placeholder=" Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changenameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeemailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Company: </label>
                                            <input placeholder="company" name="company" className="form-control" 
                                                value={this.state.company} onChange={this.changecompanyHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateRecruiter}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateRecruiterComponent;
