import React from 'react'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Donalili🎯</a>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="/"> Home
                                <span className="visually-hidden">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cadastro-produtos">Cadastrar</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Anotações</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Finanças</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;