import { Outlet, NavLink, Link, ScrollRestoration } from 'react-router-dom'
import logo from '../images/mlrn_logo.png'
import { useSelector } from 'react-redux'

export default function RootLayout() {
  const menus = useSelector((state) => state.menu.list)

  return (
    <div className="root-layouta fw-light">
      <ScrollRestoration />
      <header>
        <div className="container mt-3 mb-2 d-flex justify-content-between">
          <div className="d-flex align-items-end">
            <div className="fs-4 fw-lighter bs-text-mlrngreen">
              <Link className="navbar-brand" to="/">
                Mid-Latitude Region Network
              </Link>
            </div>
          </div>
          <Link className="navbar-brand" to="/">
            <img src={logo} height="70" alt="logo" />
          </Link>
        </div>
        <nav
          className="navbar navbar-expand-lg bs-bg-mlrngreen"
          data-bs-theme="dark"
        >
          <div className="container">
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0">
                {menus.map((m) => (
                  <li className="nav-item px-3" key={m.id}>
                    <NavLink
                      className="nav-link text-uppercase"
                      to={
                        m.menus?.length
                          ? `${m.name}/${m.menus[0].name}`
                          : `${m.name}`
                      }
                    >
                      {m.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className="container py-3">
        <Outlet />
      </main>
      <footer>
        <div className="">
          <div className="container border-top pt-3">
            <div className="bs-text-mlrngreen fs-4 fw-lighter">
              Mid-Latitude Region Network
            </div>

            <div className="text-muted fs-8 small">
              <div>E-mail : mlrn_ojeri@korea.ac.kr</div>
              <div>
                (02841) #317, East Bldg., College of Life Science, Korea
                University,
              </div>
              <div>Anam-ro 145, Seongbuk-gu, Seoul , KOREA</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
