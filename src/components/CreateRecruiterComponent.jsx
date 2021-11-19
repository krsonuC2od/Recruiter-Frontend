import React, { Component } from 'react'
import RecruiterService from '../services/RecruiterService';

class CreateRecruiterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            email: '',
            company: ''
        }
        this.changenameHandler = this.changenameHandler.bind(this);
        this.changeemailHandler = this.changeemailHandler.bind(this);
        this.changecompanyHandler = this.changecompanyHandler.bind(this);
        this.saveOrUpdateRecruiter = this.saveOrUpdateRecruiter.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            RecruiterService.getRecruitersById(this.state.id).then( (res) =>{
                let recruiter = res.data;
                this.setState({name: recruiter.name,
                    email: recruiter.email,
                    company : recruiter.company
                });
            });
        }        
    }
    saveOrUpdateRecruiter = (e) => {
        e.preventDefault();
        let recruiter = {name: this.state.name, email: this.state.email, company: this.state.company};
        console.log('recruiter => ' + JSON.stringify(recruiter));

        // step 5
        if(this.state.id === '_add'){
            RecruiterService.createRecruiters(recruiter).then(res =>{
                this.props.history.push('/recruiters');
            });
        }else{
            RecruiterService.updateRecruiters(recruiter, this.state.id).then( res => {
                this.props.history.push('/recruiters');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Recruiter</h3>
        }else{
            return <h3 className="text-center">Update Recruiter</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body" bg-primary>
                                    <form>
                                        <div className = "form-group">
                                            <label> Enter Name: </label>
                                            <input type="text"placeholder="name" name="Name" className="form-control" required
                                                value={this.state.name} onChange={this.changenameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Enter Email: </label>
                                            <input type="email" placeholder="Email" name="email" className="form-control" required
                                                value={this.state.email} onChange={this.changeemailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Enter Company Name: </label>
                                            <input type="text" placeholder="Company" name="company" className="form-control" required
                                                value={this.state.company} onChange={this.changecompanyHandler}/>
                                        </div>

                                        <button className="btn btn-primary
                                        " onClick={this.saveOrUpdateRecruiter}>Save</button>
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

export default CreateRecruiterComponent
