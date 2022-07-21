import "./App.css";
import BeautyProducts from "./BeautyProducts";
// import Makeup from "./Makeup";
import Pokemon from "./Pokemon";
import Weather from "./Weather";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <header className="bg-red-600 body-font">
          <div className="container mx-auto flex flex-wrap px-5 py-4 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span class="ml-3 text-xl text-white font-bold">API Projects</span>
            </a>

            <a className="flex title-font font-medium items-center mb-4 md:mb-0"></a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-white border-4 border-red-700 rounded-xl py-2 px-3 text-red-600 mx-5 hover:text-red-700 text-[23px] "
                    : "text-white mx-5 hover:text-red-300 py-2 px-3 text-[23px] "
                }
                to="/pokemon"
              >
                PokeTab
              </NavLink>
              {/* <Link className="mr-5 hover:text-white text-[23px] " to="/pokemon">
                PokeTab
              </Link> */}
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-white border-4 border-red-700 rounded-xl py-2 px-3 text-red-600 mx-5 hover:text-red-700 text-[23px] "
                    : "text-white mx-5 hover:text-red-300 py-2 px-3 text-[23px] "
                }
                to="/beauty"
              >
                Beauty Products
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-white border-4 border-red-700 rounded-xl py-2 px-3 text-red-600 mx-5 hover:text-red-700 text-[23px] "
                    : "text-white mx-5 hover:text-red-300 py-2 px-3 text-[23px] "
                }
                to="/weather"
              >
                Weather
              </NavLink>
            </nav>
          </div>
        </header>

        {/* <div className="App">
      <Pokemon/>
    </div> */}

        {/* <div className="App">
      <Weather/>
    </div> */}

        {/* <div className="App">
      <Makeup/>
    </div> */}

        {/* <div className="App">
          <BeautyProducts />
        </div> */}

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route exact path="/pokemon" element={<Pokemon />} />
          <Route exact path="/beauty" element={<BeautyProducts />} />
          <Route exact path="/weather" element={<Weather />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
