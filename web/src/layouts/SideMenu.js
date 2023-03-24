import { useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'

export default function SideMenu() {
  const menus = useSelector((state) => state.menu.list)
  const path = useLocation().pathname.split('/')[1]
  const selectedMenu = menus.find((m) => m.name === path)

  return (
    <nav>
      <ul className="nav flex-column">
        {selectedMenu.menus.map((m) => (
          <li key={m.id} className="nav-item">
            <NavLink to={m.name} className="nav-link">
              {m.name}
            </NavLink>
          </li>
        ))}
        {/* <li className="nav-item">
          <NavLink to="contact" className="nav-link">
            Contact Us
          </NavLink>
        </li> */}
      </ul>
    </nav>
  )
}
