import { Link } from "react-router-dom";
import "./sidebar.scss";

const sidebar = [
  {
    id: 1,
    paginas: [
      {
        id: 1,
        title: "About",
        url: "/",
        icon: "info-circle-svgrepo-com.svg",
      },
      {
        id: 2,
        title: "Historic Data",
        url: "/meteor",
        icon: "chart-line-svgrepo-com.svg",
      },
      {
        id: 3,
        title: "Cianobacteria",
        url: "bacteria",
        icon: "images-outline-svgrepo-com.svg",
      },
      {
        id: 4,
        title: "Species",
        url: "species",
        icon: "fish-line-svgrepo-com.svg",
      },
      {
        id: 5,
        title: "Interactive Map",
        url: "map",
        icon: "map-pin-svgrepo-com.svg",
      },
    ],
  },
  
];


const Sidebar = () => {
  return (
    <div className="sidebar">
      {sidebar.map((item) => (
        <div className="item" key={item.id}>
          {item.paginas.map((page) => (
            <Link to={page.url} className="page" key={page.id}>
              <img src={page.icon} alt=""/>
              <span>{page.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
