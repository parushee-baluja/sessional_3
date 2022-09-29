import React from 'react'
import { NavLink } from 'react-router-dom';



function Navbar() {
    return (
        <div>


            <nav className="navbar bg-light fixed-top shadow">
                <div className="container-fluid container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <i className="fa fa-bars"></i>
                    </button>
                    <NavLink to="/">
                        <img src="/logo_2.png" alt="logo" style={{ height: "60px" ,width:"60px"}} />
                    </NavLink>
                    <div>
                        
                    <button className="navbar-toggler btn-default ml-7" type="button">
                        <i className="fa fa-shopping-cart"></i>
                    </button>

                    <button className="navbar-toggler btn-default ml-2" type="button" style={{margin:"6px"}}>
                        <i class="fa-solid fa-heart"></i>
                    </button>
                    
                    
                    <button className="navbar-toggler btn-default ml-2" type="button">
                    <i className="fa-solid fa-user"></i>
                    </button>
                    </div>
                    

                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <NavLink to="/">
                                <img src="/logo_2.png" alt="logo" style={{ height: "60px" , width: "60px" }} />
                            </NavLink>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                        </div>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar;