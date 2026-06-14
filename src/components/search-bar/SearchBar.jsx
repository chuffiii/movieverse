import "./searchBar.css"

export default function SearchBar() {
    return (
        <div className="search-bar">
            <input 
                type="text"
                className="border rounded-full p-2 w-full"
                placeholder="search for movie, tv show, person..." 
            />
        </div>
    )
}