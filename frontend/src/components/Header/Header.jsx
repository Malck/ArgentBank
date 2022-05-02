import "../Header/header.css";
import HeaderBank from "../../assets/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LogOut } from "../../Store/TodoSlice";

export default function Header() {

  const data = useSelector((state) => state.UserState);
  const isUserLoggedIn = useSelector((state) => state.UserState.loggedIn);
  const first = useSelector((state) => state.UserState.firstName);
  const dispatch = useDispatch();

  return (

    <nav className="main-nav">

      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={HeaderBank}
          alt="Argent Bank Logo"/>
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      {isUserLoggedIn ? (

        <div className="loggedIn">

          <div className="user-loggedIn">
            <i className="fa fa-user-circle fa-1x"></i>
            <Link to="/profile">{first}</Link>
          </div>

          <Link
            onClick={() => dispatch(LogOut({ ...data, loggedIn: false }))}
            to="/"
            className="main-nav-item">

            <i className="fa fa-sign-out fa-1x"></i>
            <p>Sign Out</p>
          </Link>

        </div>

      ) : (

        <div className="loggedOut">
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>

      )}

    </nav>
  );
}
