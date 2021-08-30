import React from 'react'


const Navbar = ({setSearch ,search,searchTerm}) => {

    return (
    <nav className="navbar navbar-light bg-light">
        <div className="container-fluid py-2">
            <a className="navbar-brand text-primary" style={{fontSize:30}}>Stock Ticker</a>
            <form className="d-flex m-auto my-0" style={{width:900}} onSubmit={searchTerm}>
            <input className="form-control me-2" placeholder="Search for news,symbols or companies " onChange={(e) => setSearch(e.target.value)} value={search} />
            <button className="btn btn-outline-primary">Search</button>
            </form>
        </div>
    </nav>
    )
}

export default Navbar
