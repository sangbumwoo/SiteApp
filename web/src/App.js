// import logo from "./logo.svg";
// import "./App.css";
// import { BrowserRouter } from "react-router-dom";

// // pages
// import Navbar from "./navbar/Navbar";
// // function Navbar() {
// //   return <button>button</button>;
// // }

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="container mt-3">HEADER</div>
//       <Navbar />
//     </BrowserRouter>
//   );
// }

// export default App;

import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/slice/todo";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerDetails, {
  careerDetailsLoader,
} from "./pages/careers/CareerDetails";
import CareersError from "./pages/careers/CareersError";

// layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>
      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route
          index
          element={<Careers />}
          loader={careersLoader}
          // errorElement={<CareersError />}
        />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("State", state);

  if (state.todo.isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <>
      <button onClick={(e) => dispatch(fetchTodos())}>Fetch Todos</button>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
