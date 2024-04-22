import './App.css';
import { auth } from './firebase/init'
import { createUserWithEmailAndPassword } from 'firebase/auth';


function App() {
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
            <button className="btn btn__undercover burger">
            <i class="fa-solid fa-grip-lines"></i>
              <svg></svg>
            </button>
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
          <div className="nav__links">
            <span>
              <div id="el-popper-4529" className="el-popover el-popper">
                <div ></div>
              </div>
              <span className='el-popover__reference-wrapper' ></span>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
