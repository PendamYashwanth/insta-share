import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoIosCloseCircle} from 'react-icons/io'
import {FaSearch} from 'react-icons/fa'
import './index.css'

const Header = () => {
  const renderMenuIcon = () => (
    <button type="button" label="menu" className="icon menu-icon">
      <GiHamburgerMenu />
    </button>
  )

  const renderNavForSmDev = () => {
    const path = window.location.pathname
    return (
      <article className="nav-container-sm">
        <nav>
          <ul className="nav-items-container">
            <li>
              <Link to="/" className={path === '/' ? 'active-nav-item' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/search-results"
                className={path === '/search-results' ? 'active-nav-item' : ''}
              >
                Search
              </Link>
            </li>
            <li>
              <Link
                to="/my-profile"
                className={path === '/my-profile' ? 'active-nav-item' : ''}
              >
                Profile
              </Link>
            </li>
            <li>
              <button type="button" label="logout" className="button">
                Logout
              </button>
            </li>
          </ul>
        </nav>

        <button type="button" label="close" className="icon">
          <IoIosCloseCircle />
        </button>
      </article>
    )
  }

  const renderNavForLgDev = () => {
    const path = window.location.pathname
    return (
      <section className="nav-container-lg">
        <section className="search-input-field-container">
          <input type="search" placeholder="Search Caption" />
          <button type="button" label="search" className="icon search-icon">
            <FaSearch />
          </button>
        </section>
        <section className="navbar-container">
          <nav>
            <ul className="nav-items-container">
              <li>
                <Link to="/" className={path === '/' ? 'active-nav-item' : ''}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/my-profile"
                  className={path === '/my-profile' ? 'active-nav-item' : ''}
                >
                  Profile
                </Link>
              </li>
            </ul>
          </nav>
        </section>
        <button type="button" label="logout" className="button">
          Logout
        </button>
      </section>
    )
  }

  return (
    <header className="page-header">
      <section className="container header-responsive-container">
        <section className="header-logo-container">
          <img
            src="https://res.cloudinary.com/dhaj9wlmu/image/upload/v1698744357/Standard_Collection_8_xfka3j.svg"
            alt="website logo"
          />
          <h1>Insta Share</h1>
        </section>
        <section>
          {renderMenuIcon()}
          {renderNavForLgDev()}
        </section>
      </section>
      {renderNavForSmDev()}
    </header>
  )
}

export default Header
