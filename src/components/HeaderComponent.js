import React, { Component } from 'react'
import './HeaderComponent.css'


class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <>
            <div>
                <header>
                   {/* <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                    <div><a href="/" className="navbar-brand">🎓Recruiter Management🎓 </a></div>
        </nav>*/}
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand " 
        href="/">🎓Recruiter Management🎓</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
       &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active bg-primary" >
              <a class="nav-link" href="/ListRecruiterComponent"  >Recruiter👨‍🎓 <span class="sr-only">(current)</span></a>
            </li>
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
            <li class="nav-item active bg-secondary  "id="stu">
            <a class="nav-link color-white" href="/#">Student👨‍🎓 <span class="sr-only">(current)</span></a>
          </li>

          <a href="/notification" class="notification" >
  <span>notification🔔</span>
  <span class="badge">3</span>
</a>
           
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search"/>
           
          </form>
        </div>
      </nav>



                </header>

            </div>
            
            </>
        )
    }
}

export default HeaderComponent
