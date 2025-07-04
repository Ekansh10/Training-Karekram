import { Link } from "react-router-dom";
function Header(){
    return(
        <nav className="navbar bg-body-tertiary" width="50px"> {/* This would polute the App component */}
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Courses</Link> |
        <Link className="navbar-brand" to="/posts">Posts</Link> |
        <Link className="navbar-brand" to="/counter">Counter</Link>
      </div>
    </nav>
    )
}

export default Header;