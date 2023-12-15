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
        <div >
            <h1 class="font-Inter text-4xl p-8">Create a New Project</h1>
            <form onSubmit={handleSubmit}
                class="flex flex-col justify-center items-center"
            >
                <p class="mb-5 text-sm leading-6 text-gray-600">This information will be displayed publicly.</p>

                <label class="block text-sm font-medium leading-6 text-gray-900">
                    Project Name
                    <input
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        type="text"
                        value={newProjectForm.name}
                        name="name"
                        placeholder="Project Name"
                        onChange={handleChange}
                    />
                </label>

                <label class="block text-sm font-medium leading-6 text-gray-900">
                    City
                    <input
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        type="text"
                        value={newProjectForm.city}
                        name="city"
                        placeholder="City"
                        onChange={handleChange}
                    />
                </label>

                <label class="block text-sm font-medium leading-6 text-gray-900">
                    Sales Launch Start Date
                    <input
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        type="text"
                        value={newProjectForm.launch}
                        name="launch"
                        placeholder="Sales Launch Date YYYY-MM-DD"
                        onChange={handleChange}
                    />
                </label>

                <label class="block text-sm font-medium leading-6 text-gray-900">
                    Your Builder ID
                <input
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="text"
                    value={newProjectForm.builderId}
                    name="builderId"
                    placeholder="Builder ID"
                    onChange={handleChange}
                />
                </label>
                
                <input
                    class="m-5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    type="submit" value="Create New Project" />
            </form>
        </div>
    )
}

export default NewProject