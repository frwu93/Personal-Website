import React, {Component} from 'react'

export default class SideMenu extends Component{
    render(){
        return(
            <div>
                <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
                <aside>
                    <div className="text-center">
                        <div className="author-img" style={{backgroundImage: 'url(images/me.jpg)'}} />
                        <h1><a href="index.html">Franklin Wu</a></h1>
                        <span className="position">Duke University '23<br></br></span>
                        <span className="email"><i className="icon-mail"></i> <a style={{ color: "inherit"}} href="mailto:franklin.wu@duke.edu">franklin.wu@duke.edu</a></span>
                        <br/>
                    </div>

                   <nav id="colorlib-main-menu" role="navigation" className="navbar">
                        <div id="navbar" className="collapse">
                            <ul> 
                            <li className="active"><a href="#introduction" data-nav-section="introduction">Introduction</a></li>
                            <li className="active"><a href="#about" data-nav-section="about">About</a></li>
                            </ul>
                        </div>
                    </nav>

                </aside>
            </div>
        )
    }
}