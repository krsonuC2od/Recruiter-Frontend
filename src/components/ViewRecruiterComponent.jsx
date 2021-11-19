import React, { Component } from 'react'
import RecruiterService from '../services/RecruiterService'

class ViewRecruiterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            recruiter: {}
        }
    }

    componentDidMount(){
        RecruiterService.getRecruitersById(this.state.id).then( res => {
            this.setState({recruiter: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Recruiter Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>  Name: </label>
                            <div> { this.state.recruiter.name}</div>
                        </div>
                        <div className = "row">
                            <label> Email: </label>
                            <div> { this.state.recruiter.email }</div>
                        </div>
                        <div className = "row">
                            <label> Company: </label>
                            <div> { this.state.recruiter.company }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewRecruiterComponent
