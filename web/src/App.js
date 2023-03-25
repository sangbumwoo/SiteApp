import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

// layouts
import ArticleLayout from './layouts/ArticleLayout'
import RootLayout from './layouts/RootLayout'

// pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'
// import { Signin } from "./pages/Signin";
import Article from './pages/Article'
import Signin from './pages/Signin'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="sign-in" element={<Signin />} />
      <Route path=":menu" element={<ArticleLayout />}>
        <Route path=":submenu" element={<Article />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
