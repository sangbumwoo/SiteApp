import { Outlet } from 'react-router-dom'
import SideMenu from './SideMenu'

export default function ArticleLayout() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <SideMenu />
        </div>
        <div className="col-9">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
