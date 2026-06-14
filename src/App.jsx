import './App.css'
import Navbar from './components/Navbar'
import SearchBar from './components/search-bar/SearchBar'
import TrendingVideos from './components/trending-videos/TrendingVideos'

function App() {

  return ( 
    <>
        <Navbar />
        <SearchBar />
        <TrendingVideos />
    </>
  )
}

export default App
