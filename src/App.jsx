import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SearchBar from "./components/search-bar/SearchBar";
import TrendingVideos from "./components/trending-videos/TrendingVideos";
import MovieDetails from "./pages/MovieDetails";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-950 text-white">
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 py-6">
          <Routes>
            <Route
              path="/movieverse"
              element={
                <>
                  <SearchBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                  />

                  <TrendingVideos
                    searchQuery={searchQuery}
                  />
                </>
              }
            />

            <Route
              path="/movieverse/:id"
              element={<MovieDetails />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;