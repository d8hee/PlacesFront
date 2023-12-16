import { Link } from "react-router-dom"
import { useState } from "react"

const Projects = (props) => {
    const [search, setSearch] = useState(props.projects)

    // update so function can check partial string
    const handleChange = (e) => {
        const filteredProjects = props.projects.filter((project) => project.city.toLowerCase() === e.target.value.toLowerCase())
        setSearch(filteredProjects)
    }

    return (
        <div>
            {/* search component */}
            <input
                type="text"
                placeholder="Search by City"
                //value property refers to the value of the corresponding key in our state
                // value={search}
                onChange={handleChange}
                class="bg-transparent rounded-lg border-2 border-dotted border-bloo text-center px-8 m-8 "
            />

            <ul class="flex flex-col gap-8 items-center">
                {search.map((project) => {

                    var d = new Date(project.launch)
                    
                    return (
                        // Project cards
                        <li key={project.id} class="max-w-screen-sm text-left ">
                            <div>
                                <Link to={`/project/${project.id}/`}>
                                    <img src={project.image} alt="pre-construction property" class="bg-cover border rounded-2xl"></img>
                                    <h1 class="font-Inter">{project.name}</h1>
                                    <h3>Sales Start: {d.toDateString()}</h3>
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