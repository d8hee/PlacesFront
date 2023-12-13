import { Link } from "react-router-dom"
import Search from "../components/Search"

const Projects = (props) => {

    return (
        <div className="projectsDiv" >
            {/* search component */}
            <Search />

            <ul class="flex flex-col gap-5">
                {props.projects.map((project) => {
                    return (
                        // tailwind class for project cards. 
                        <li class="max-w-screen-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                            <div key={project.id} >
                                <Link to={`/places/project/${project.id}/`}>
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