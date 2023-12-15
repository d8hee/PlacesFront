import { Link } from "react-router-dom"
import { useState } from "react"

const Projects = (props) => {
    const [search, setSearch] = useState(props.projects)
    
    // update so function can check partial string
    const handleChange = (e) => {
        const filteredProjects = props.projects.filter((project) => project.city.toLowerCase() === e.target.value.toLowerCase())
        setSearch(filteredProjects)
    }
    
    // return props.projects ? loaded() : loading

    return (
        <div>
            {/* search component */}
            <input
                type="text"
                placeholder="Search by City"
                //value property refers to the value of the corresponding key in our state
                // value={search}
                onChange={handleChange}
            />

            <ul class="flex flex-col gap-5">
                {/* {props.projects.map((project) => { */}
                {search.map((project) => {
                    return (
                        // Project cards
                        <li key={project.id}
                            class="max-w-screen-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div  >
                                <Link to={`/places/project/${project.id}/`}>
                                <img src={project.image} class="w-96"></img>
                                    <h1>{project.name}</h1>
                                    <h3>Sales Start: {project.launch}</h3>
                                    <h3>{project.city}</h3>
                                </Link>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Projects