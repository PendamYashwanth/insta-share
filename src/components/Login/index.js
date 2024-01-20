import {Component} from 'react'

import './index.css'

class Login extends Component {
  render() {
    return (
      <main className="login-bg-container">
        <article className="container login-card">
          <section className="landing-image-container">
            <img
              src="https://res.cloudinary.com/dhaj9wlmu/image/upload/v1698741720/Illustration_mml1dq.svg"
              alt="website login"
            />
          </section>
          <section className="login-form-container">
            <form className="login-form">
              <section className="website-logo-container">
                <img
                  src="https://res.cloudinary.com/dhaj9wlmu/image/upload/v1698744357/Standard_Collection_8_xfka3j.svg"
                  alt="website logo"
                />
                <h1>Insta Share</h1>
              </section>
              <section className="input-field-container">
                <label htmlFor="username">USERNAME</label>
                <input id="username" type="text" placeholder="rahul" required />
              </section>
              <section className="input-field-container">
                <label htmlFor="password">PASSWORD</label>
                <input
                  id="password"
                  type="password"
                  placeholder="rahul@2021"
                  required
                />
              </section>
              <button type="button" className="button">
                Login
              </button>
            </form>
          </section>
        </article>
      </main>
    )
  }
}

export default Login
