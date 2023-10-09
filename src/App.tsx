
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import "./styles/style.scss";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Meteor from "./meteor/Meteor";
import Bacteria from "./bacteria/Bacteria";
import Species from "./species/Species";
import About from "./about/About";
import Map from "./map/map";



const queryClient = new QueryClient();

function App() {
  const Root = () => {
    return (
      <div className="main">
        <Header />
        <div className="container">
          <div className="sidebarContainer">
            <Sidebar />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <About />,
        },
        {
          path: "/meteor",
          element: <Meteor />,
        },
        {
          path: "/bacteria",
          element: <Bacteria/>,
        },
        {
          path: "/species",
          element: <Species/>,
        },
        {
          path: "/map",
          element: <Map/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
