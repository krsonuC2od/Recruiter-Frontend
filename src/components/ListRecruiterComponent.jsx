import React, { Component } from 'react'
import RecruiterService from '../services/RecruiterService'

class ListRecruiterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                recruiters: []
        }
        this.addRecruiter = this.addRecruiter.bind(this);
        this.editRecruiter = this.editRecruiter.bind(this);
        this.deleteRecruiter = this.deleteRecruiter.bind(this);
    }

    deleteRecruiter(id){
        RecruiterService.deleteRecruiters(id).then( res => {
            this.setState({recruiters: this.state.recruiters.filter(recruiter => recruiter.id !== id)});
        });
    }
    viewRecruiter(id){
        this.props.history.push(`/view-recruiter/${id}`);
    }
    editRecruiter(id){
        this.props.history.push(`/add-recruiter/${id}`);
    }

    componentDidMount(){
        RecruiterService.getRecruiters().then((res) => {
            this.setState({ recruiters: res.data});
        });
    }

    addRecruiter(){
        this.props.history.push('/add-recruiter/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Recruiter List</h2>
                 <div className = "row">
                    <button className="btn btn-danger" onClick={this.addRecruiter}> Add Recruiter</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>  Name</th>
                                   
                                   <th>  Email Id</th>
                                   <th> Company</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.recruiters.map(
                                        recruiter => 
                                        <tr key = {recruiter.id}>
                                             <td> { recruiter.name} </td>   
                                             <td> {recruiter.email}</td>
                                             <td> {recruiter.company}</td>
                                             <td>
                                                 <button onClick={ () => this.editRecruiter(recruiter.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteRecruiter(recruiter.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewRecruiter(recruiter.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListRecruiterComponent
