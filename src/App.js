import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <WatchList />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
