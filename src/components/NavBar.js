import React, { Component } from 'react'
import companyLogo from '../Images/logo_[Black Edition]_ICO.png';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                
                {/*--------------------------------- Nav Bar Start-----------------------------*/}


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">

                  <a className="navbar-brand" href="/" style={{color:"green"}}><img src={companyLogo} alt="logo"/></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>


                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <form className="d-flex">
                          <input id="searchNav" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSearchArea}/>
                      </form>
                  </div>

              </div>
          </nav>


          <br/><br/>
                    {/*--------------------------------- Nav Bar End-----------------------------*/}

            </div>
        )
    }
}
