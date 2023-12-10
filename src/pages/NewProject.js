// new PROJECT FORM page
import { useState } from "react"


const NewProject = (props) => {
    // state holding form data
    const [newProjectForm, setNewProjectForm] = useState({
        name: "",
        city: "",
        launch: "",
        builderId: ""
    })

    // handleChange function for form
    const handleChange = (event) => {
        setNewProjectForm({ ...newProjectForm, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createProject(newProjectForm)
        setNewProjectForm({
            name: "",
            city: "",
            launch: "", 
            builderId: ""
        })
    }

    return (
        <div>
            Create a New Project page
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newProjectForm.name}
                    name="name"
                    placeholder="Project Name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newProjectForm.city}
                    name="city"
                    placeholder="City"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newProjectForm.launch}
                    name="launch"
                    placeholder="Sales Launch Date YYYY-MM-DD"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newProjectForm.builderId}
                    name="builderId"
                    placeholder="Builder ID"
                    onChange={handleChange}
                />
                <input type="submit" value="Create New Project"/>
            </form>
        </div>
    )
}

export default NewProject