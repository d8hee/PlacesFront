import { useState } from "react"
import Project from "./Project"
import Search from "../components/Search"

const Projects = (props) => {

    return (
        <>
            <Search/>

            {props.projects.map((project) => {
                return (
                    <Project key={project.id} name={project.name} city={project.city} launch={project.launch} />
                )
            })}
        </>
    )
}

export default Projects