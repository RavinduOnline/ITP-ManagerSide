import React, { Component } from 'react';
import companyLogo from '../Images/logo_[Black Edition]_ICO.png';
import whitecompanyLogo from '../Images/logo_[White_Edition].png';
import chart from "../Images/chart.png";


export default class DashBoard extends Component {




    render() {
        return (
            <div>




                <nav className="!#">
                    <div className="container-fluid">

                        <a className="navbar-brand" href="/FoodItems" style={{color:"green"}}><img src={companyLogo} alt="logo"/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                    </div>
                </nav>




                <div className="dash">

                    <div className='dash-box'>
                        <div className='dash-data-box'>
                            <h3>Total Orders</h3>
                            <p className='dash-orders' >489</p>
                        </div>
                        <div className='dash-data-box'>
                            <h3>Total Earnings</h3>
                            <p className='dash-earnings' >LKR 325,000</p>
                        </div>
                        <div className='dash-data-box'>
                            <h3>Total Expenses</h3>
                            <p className='dash-expenses' >LKR 101,500</p>
                        </div>
                    </div>

                    <img src={chart} className="dash-img"/>




                </div>
                
            </div>
        )
    }
}
