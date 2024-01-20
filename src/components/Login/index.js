import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const loginAPI = 'https://apis.ccbp.in/login'

class Login extends Component {
  state = {username: '', password: '', errorMsg: ''}

  /* ------------------------ AUTHENTICATION ------------------------ */
  onAuthenticationSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onAuthenticationFailure = errorMsg => {
    this.setState({errorMsg})
  }

  performAuthenticationCheck = async () => {
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginAPI, options)
    if (response.ok === true) {
      const data = await response.json()
      const jwtToken = data.jwt_token
      this.onAuthenticationSuccess(jwtToken)
    } else {
      const data = await response.json()
      const errorMessage = data.error_msg
      this.onAuthenticationFailure(errorMessage)
    }
  }
  /* ------------------------ EVENT HANDLERS ------------------------ */

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.performAuthenticationCheck()
  }

  /* ====================================================================== */

  render() {
    const {username, password, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
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
            <form className="login-form" onSubmit={this.onSubmitForm}>
              <section className="website-logo-container">
                <img
                  src="https://res.cloudinary.com/dhaj9wlmu/image/upload/v1698744357/Standard_Collection_8_xfka3j.svg"
                  alt="website logo"
                />
                <h1>Insta Share</h1>
              </section>
              <section className="input-field-container">
                <label htmlFor="username">USERNAME</label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={this.onChangeUsername}
                  placeholder="rahul"
                  required
                />
              </section>
              <section className="input-field-container">
                <label htmlFor="password">PASSWORD</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={this.onChangePassword}
                  placeholder="rahul@2021"
                  required
                />
                {errorMsg && <p className="error-msg">{errorMsg}</p>}
              </section>
              <button type="submit" className="button">
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
