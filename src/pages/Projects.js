import { useState } from "react"
import { Link } from "react-router-dom"
import Search from "../components/Search"

const Projects = (props) => {

    return (
        <>
            {/* search component */}
            <Search />

            {props.projects.map((project) => {
                return (
                    <div className="projectsDiv">
                        <Link to={`/places/project/${project.id}/`}>
                            <h1>{project.name}</h1>
                        </Link>
                    </div>
                )
            })}
        </>
    )
}

export default Projects