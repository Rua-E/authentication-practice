import './App.css';
import { auth } from './firebase/init'
import { createUserWithEmailAndPassword } from 'firebase/auth';




function App() {

  function openMenu() {
    document.body.classList += " menu--open" 
  }
  
  function closeMenu() {
     document.body.classList.remove('menu--open')
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

  return (
    <div className="App">
      <button onClick={register}>Register</button>
      <nav className="dashboard__nav">
        <div className="dashboard__nav--content">
          <div className="flex align-center">
            {/* <button className="btn btn__undercover burger">
              <svg>
            <i class="fa-solid fa-grip-lines"></i>
              </svg>
            </button> */}
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
                <a href="/" onClick={closeMenu()}>LOGIN</a>
              </li>
              <li>
                <a href="/" onClick={closeMenu()}> REGISTER</a>
              </li>
              <li>
                <a href="/" onClick={closeMenu()}>LOGOUT</a>
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
