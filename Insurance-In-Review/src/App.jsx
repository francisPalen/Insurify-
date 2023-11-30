import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// Pages here
import Home from "./pages/Home";
import Policy from "./pages/Policy";
import ViewReport from "./pages/ViewReport";
import Claims from "./pages/Claims";
import AboutUs from "./pages/AboutUs";
import Help from "./pages/Help";

// Components here
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
const router = createBrowserRouter([
  // Dashboard for All Pages
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  // Routes
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/your-policy",
    element: <Policy />,
  },
  {
    path: "/view-report",
    element: <ViewReport />,
  },
  {
    path: "/claims",
    element: <Claims />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/help",
    element: <Help />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
