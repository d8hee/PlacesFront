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
        navigate(`/project/${project.id}`);
    }

    return (
        <div>
            <h1 class="font-Inter text-4xl p-8"> Edit This Project </h1>
            <div >
                <form onSubmit={handleEditSubmit}
                    class="flex flex-col justify-center items-center">
                    <label class="block text-sm font-medium leading-6 text-gray-900">
                        Project Name:
                        <input
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            type="text"
                            value={editProjectForm.name}
                            name="name"
                            placeholder={editProjectForm.name}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label class="block text-sm font-medium leading-6 text-gray-900">
                        City:
                        <input
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            type="text"
                            value={editProjectForm.city}
                            name="city"
                            placeholder={editProjectForm.city}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label class="block text-sm font-medium leading-6 text-gray-900">
                        Sales Start Date:
                        <input
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            type="text"
                            value={editProjectForm.launch}
                            name="launch"
                            placeholder={editProjectForm.launch}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label class="block text-sm font-medium leading-6 text-gray-900">
                        Image URL:
                        <input
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            type="text"
                            value={editProjectForm.image}
                            name="image"
                            placeholder={editProjectForm.image}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label class="block text-sm font-medium leading-6 text-gray-900">
                        Project Description:
                        <input
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            type="text"
                            value={editProjectForm.description}
                            name="description"
                            placeholder={editProjectForm.description}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label class="block text-sm font-medium leading-6 text-gray-900">
                        Builder ID:
                        <input
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            type="text"
                            value={editProjectForm.builderId}
                            name="builderId"
                            placeholder={editProjectForm.builderId}
                            onChange={handleEditChange}
                        />
                    </label>

                    <input type="submit" value="Update Listing"
                        class="m-5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />
                </form>
            </div>
        </div>
    )
}

export default EditProject