import React from 'react';
import Button from '@mui/material/Button';


export const Navbar = () => {
    return <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <div className="container-fluid" >
                <img src='https://cdn-icons-png.flaticon.com/512/25/25694.png' style={{ height: 20, width: 20 }} />
                <a className="navbar-brand" href="" style={{ paddingLeft: 10 }}>Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    </ul>
                    <Button>
                        <a className='' href='/login' style={{ color: 'red', fontSize: 15 }}>

                            LOGIN
                        </a>
                    </Button>
                </div>
            </div>
        </nav>
    </div>;
};
