import React from 'react';
import './App.css';
import { auth } from './firebase/init'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';




function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user){
        setUser(user)
      }
    })
  })

  function login() {
    signInWithEmailAndPassword(auth, 'email@email.com', 'test123')
    .then((user) => {
      setUser(user)
      console.log(user)
    })
    .catch((error) => {
      // setErrorMEssage('User not found')
      console.log(error)
    })
  }


  function register() {
    createUserWithEmailAndPassword(auth, 'email@email.com', 'test123');
    console.log('register')
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  function logout() {
    signOut(auth);
    setUser({});
  }

// OPEN & CLOSE MENU

  function openMenu() {
    document.body.classList += " menu--open" 
  }
  
  function closeMenu() {
     document.body.classList.remove('menu--open')
  }


  return (
    <div className="App">
      
      <nav className="dashboard__nav">
        <div className="dashboard__nav--content">
          <div className="flex align-center">
            <figure className="logo">
              <a href='/' className='nuxt-link-active'>
                <img
                src='https://frontendsimplified.com/_nuxt/img/Frontend%20Simplified%20Logo.853fbda.png'
                className='logo__img'
                >
                </img>
              </a>
            </figure>
          </div>
          <button className="links__button" onClick={openMenu}>
                Login
          </button> 
          <div className="menu">
            <ul>
              <li>
                <a href="/" onClick={login}>LOGIN</a>
                <div>
                  {user? user.email : 'User Not Found'}
                </div>
              </li>
              <li>
                <a href="/" onClick={register}>REGISTER</a>
                <div>
                  {user? 'User already exists' : 'Registration page is laoding...'}
                </div>
              </li>
              <li>
                <a href="/" onClick={logout}>LOGOUT</a>
                <div>
                  {user? 'Loging out' : 'You are already logged out'}
                </div>
              </li>
              <li>
                <a href="/" onClick={closeMenu()}>X</a>
              </li>
             
            </ul>
            </div>  
        </div>
      </nav>
    </div>
  );
}

export default App;
