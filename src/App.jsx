import React from "react";
import "./App.css";
import { auth } from "./firebase/init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setTimeout(() => {
        setLoading(false);
        if (user) {
          setUser(user);
        }
      }, 5000)
    });
  },[]);

  function login() {
    signInWithEmailAndPassword(auth, "email@email.com", "test123")
      .then(({ user }) => {
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        // setErrorMEssagegt('User not found')
        console.log(error);
      });
  }

  function register() {
    console.log("register");
    createUserWithEmailAndPassword(auth, "email@email.com", "test123")
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function logout() {
    signOut(auth);
    setUser({});
  }

  // OPEN & CLOSE MENU

  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <div className="App">
      <nav className="dashboard__nav">
        <div className="dashboard__nav--content">
          <div className="flex align-center">
            <div>
              <FontAwesomeIcon icon="bars" />
            </div>
            <figure className="logo">
              <a href="/" className="nuxt-link-active">
                <img
                  src="https://frontendsimplified.com/_nuxt/img/Frontend%20Simplified%20Logo.853fbda.png"
                  className="logo__img"
                ></img>
              </a>
            </figure>
          </div>
          <button className="links__button" onClick={openMenu}>
            {!user.email ? 'LOGIN' : user.email[0].toUpperCase() }
          </button>
          <div className="menu">
            <ul>
              <li>
                <button href="/" className="link__button" onClick={login}>
                {!user.email ? 'LOGIN' : 'USER' }
                </button>
              </li>
             
              <li>
                <button href="/" className="link__button" onClick={register}>
                {!user.email ? 'REGISTER' : user.email }
                </button>
                <div>
                  {/* {user? 'User already exists' : 'Registration page is laoding...'} */}
                </div>
              </li>
              <li>
                <button href="/" className="link__button" onClick={logout}>
                  LOGOUT
                </button>
                <div>
                  {/* {user? 'Loging out' : 'You are already logged out'} */}
                </div>
              </li>
              <li>
                <a href="/" className="link__button" onClick={closeMenu()}>
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section id="body">
        <div className="user">
          Current User:<br />
         
          {!user.email ? 'No current user' : ''}
          {loading ? 'loading...' : user.email}
  
        </div>
      </section>
    </div>
  );
}

export default App;
