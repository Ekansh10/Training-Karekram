import { Link } from "react-router-dom";
function Header(){
    return(
        <nav class="navbar bg-body-tertiary" width="50px"> {/* This would polute the App component */}
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">Courses</Link> |
        <Link class="navbar-brand" to="/posts">Posts</Link> |
        <Link class="navbar-brand" to="/counter">Counter</Link>
      </div>
    </nav>
    )
}

export default Header;