const PriavateHeader = () => {
    return <header>
        <label htmlFor="check">
            <i className="fas fa-bars" id="sidebar_btn"></i>
        </label>
        <div className="left_area">
            <h3>Go<span>Snippets</span></h3>
        </div>
        <div className="right_area">
            {/* <a href="#" className="logout_btn">Logout</a> */}
        </div>
    </header>
}

export default PriavateHeader