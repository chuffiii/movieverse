export default function SearchBar({
  searchQuery,
  setSearchQuery,
}) {
  return (
    <div className="mb-8">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search movies..."
        className="
          w-full
          bg-zinc-900
          border
          border-zinc-700
          rounded-xl
          p-3
          text-white
        "
      />
    </div>
  );
}