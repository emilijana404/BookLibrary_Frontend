import React from 'react';
import {Link} from 'react-router-dom';

const header = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="/books">Library Application</a>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to={"/countries"}>Countries</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to={"/authors"}>Authors</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className={"nav-link"} to={"/books"}>Books</Link>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <Link className="btn btn-outline-info" to={"/login"}>Login</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default header;