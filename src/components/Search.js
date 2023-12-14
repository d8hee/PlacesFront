
const Search = ({ projects }) => {

    return (
        <div className="searchBar">
            {/* <input
                type="text"
                placeholder="Search by City"
                //value property refers to the value of the corresponding key in our state
                value={search}
                onChange={handleChange}
            /> */}
            <button

                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Search
            </button>


            {/* should have link to saerch results page. Pass in results to that page and display. */}

        </div>
    )
}

export default Search 