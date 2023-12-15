import { useState } from "react";
import { useNavigate, useParams } from "react-router";

const EditProject = (props) => {
    const params = useParams()
    const id = params.id
    const projects = props.projects
    const project = projects.find((p) => String(p.id) === id)
    const navigate = useNavigate()

     // state for edit PROJECT form
     const [editProjectForm, setEditProjectForm] = useState(project)

     // handleChange function for form
     const handleEditChange = (event) => {
         // form fields name:key, and value:value
         setEditProjectForm({ ...editProjectForm, [event.target.name]: event.target.value });
 
     }
 
     // handlesubmit for form
     const handleEditSubmit = (event) => {
         event.preventDefault();
         props.updateProject(editProjectForm);
         console.log(editProjectForm)
         // redirect people back to index
         navigate(`/places/projects/${project.id}`);
     }
     
    return (
        <div>
             <h1> Edit This Project </h1>
            <div >
                <form onSubmit={handleEditSubmit}>
                    <label>
                        Project Name:
                        <input
                            type="text"
                            value={editProjectForm.name}
                            name="name"
                            placeholder={editProjectForm.name}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label>
                        City:
                        <input
                            type="text"
                            value={editProjectForm.city}
                            name="city"
                            placeholder={editProjectForm.city}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label>
                        Sales Start Date:
                        <input
                            type="text"
                            value={editProjectForm.launch}
                            name="launch"
                            placeholder={editProjectForm.launch}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label>
                        Image URL:
                        <input
                            type="text"
                            value={editProjectForm.image}
                            name="image"
                            placeholder={editProjectForm.image}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label>
                        Project Description:
                        <input
                            type="text"
                            value={editProjectForm.description}
                            name="description"
                            placeholder={editProjectForm.description}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label>
                        Builder ID:
                        <input
                            type="text"
                            value={editProjectForm.builderId}
                            name="builderId"
                            placeholder={editProjectForm.builderId}
                            onChange={handleEditChange}
                        />
                    </label>
                
                    <input type="submit" value="Update Listing"
                    class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"/>
                </form>
            </div>
        </div>
    )
}

export default EditProject