import React from 'react'
import Card from '../Card/Card'

function Home() {
    return (
        <>
           <div className="row">
           <div className="col">
           <h1 className="heading_style">Contact Us☎</h1>
           <Card
imgsrc="https://iisy.fi/wp-content/uploads/2018/08/user-profile-male-logo.jpg"
sname=" Somanath Pradhan"
title="(Training Officer)"
link="#"
/>,
           <Card
           imgsrc="https://iisy.fi/wp-content/uploads/2018/08/user-profile-male-logo.jpg"
           sname=" Lokesh Ray"
           
           title="(Manager Placement)"
           link="#"
           />
        
          
           </div>
        
           <div className="col">
           <h1 className="heading_style"> 🎓List of Recruiter🎓</h1>
           <Card
imgsrc="https://www.carlogos.org/logo/Tata-Group-logo-3840x2160.png"
sname=" Tata Motor"
title="( Life at TATA Motors)"
link="https://www.tata.com/"
 />,
 <Card
 imgsrc="https://mocdn.gs1.org/sites/default/files/motherson_logo.jpg"
 sname=" MotherSon"
 title="(The Motherson story)"
 link="https://www.motherson.com/"
 />
           
         
           
          </div>
           
           </div> 
           </> 
    )
}

export default Home
