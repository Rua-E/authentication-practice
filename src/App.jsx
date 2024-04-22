import './App.css';

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
              <svg></svg>
            </button>
            <figure className="logo">
              <a href='/' className='nuxt-link-active' style="display:flex;" ></a>
            </figure>
          </div>
          <div className="nav__links">
            <span>
              <div id="el-popper-4529" className="el-popover el-popper">
                <div style="min-height: 76px;" ></div>
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
