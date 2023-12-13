// new LISTING FORM page
import { useState } from "react"


const NewListing = (props) => {
    // state holding form data
    const [newListingForm, setNewListingForm] = useState({
        modelName: "",
        unit: 0,
        price: 0,
        sqft: 0,
        direction: "",
        bedrooms: 0,
        washrooms: 0,
        parking: 0,
        locker: 0,
        sold: false,
        public: true,
        projectId: ""
    })

    // handleChange function for form
    const handleChange = (event) => {
        setNewListingForm({ ...newListingForm, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createListing(newListingForm)
        setNewListingForm({
            modelName: "",
            unit: "",
            price: "",
            sqft: "",
            direction: "",
            bedrooms: "",
            washrooms: "",
            parking: "",
            locker: "",
            sold: false,
            public: true,
            projectId: ""
        })
    }

    return (
        <div >
            <h1>Create a New Listing</h1>
            <form onSubmit={handleSubmit}
            class="flex flex-col justify-center items-center"
            >
                <label class="mt-5 block text-sm font-medium leading-6 text-gray-900">
                    Project ID:
                    <input
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        type="text"
                        value={newListingForm.projectId}
                        name="projectId"
                        placeholder="Project ID"
                        onChange={handleChange}
                    />
                </label>

                <label class="mt-5 block text-sm font-medium leading-6 text-gray-900">
                    Model Name:
                    <input
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        type="text"
                        value={newListingForm.modelName}
                        name="modelName"
                        placeholder="Listing Model Name"
                        onChange={handleChange}
                    />
                </label>

                <label class="mt-5 block text-sm font-medium leading-6 text-gray-900">
                    Unit Number:
                    <input
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        type="text"
                        value={newListingForm.unit}
                        name="unit"
                        placeholder="Unit number"
                        onChange={handleChange}
                    />
                </label>

                <label class="mt-5 block text-sm font-medium leading-6 text-gray-900">
                    Price: 
                    <input
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        type="text"
                        value={newListingForm.price}
                        name="price"
                        placeholder="price"
                        onChange={handleChange}
                    />
                </label>

                <label class="mt-5 block text-sm font-medium leading-6 text-gray-900">
                    Square Footage:
                    <input
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        type="text"
                        value={newListingForm.sqft}
                        name="sqft"
                        placeholder="Square Footage"
                        onChange={handleChange}
                    />
                </label>

                <label class="mt-5 block text-sm font-medium leading-6 text-gray-900">
                    Direction:
                    <input
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        type="text"
                        value={newListingForm.direction}
                        name="direction"
                        placeholder="Direction"
                        onChange={handleChange}
                    />
                </label>

                <label class="mt-5 block text-sm font-medium leading-6 text-gray-900">
                    Bedrooms:
                    <input
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        type="text"
                        value={newListingForm.bedrooms}
                        name="bedrooms"
                        placeholder="Number of Bedrooms"
                        onChange={handleChange}
                    />
                </label>

                <label class="mt-5 block text-sm font-medium leading-6 text-gray-900">
                    Washrooms:
                    <input
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        type="text"
                        value={newListingForm.washrooms}
                        name="washrooms"
                        placeholder="Number of Washrooms"
                        onChange={handleChange}
                    />
                </label>

                <label class="mt-5 block text-sm font-medium leading-6 text-gray-900">
                    Parking Spaces:
                    <input
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        type="text"
                        value={newListingForm.parking}
                        name="parking"
                        placeholder="Number of Parking Spaces"
                        onChange={handleChange}
                    />
                </label>

                <label class="mt-5 block text-sm font-medium leading-6 text-gray-900">
                    Lockers:
                    <input
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        type="text"
                        value={newListingForm.locker}
                        name="locker"
                        placeholder="Lockers"
                        onChange={handleChange}
                    />
                </label>

                <label class="mt-5 block text-sm font-medium leading-6 text-gray-900">
                    Available for Sale:
                    <input
                        type="checkbox"
                        value={newListingForm.sold}
                        name="sold"
                        placeholder="Available for Sale"
                        defaultChecked={false}
                        onChange={handleChange}
                    />
                </label>

                <label class="mt-5 block text-sm font-medium leading-6 text-gray-900">
                    Publish to Everyone:
                    <input
                        type="checkbox"
                        value={newListingForm.public}
                        name="public"
                        placeholder="Publish to Everyone"
                        defaultChecked={true}
                        onChange={handleChange}
                    />
                </label>

                <input
                    class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    type="submit" value="Create A New Listing" />
            </form>
        </div>
    )
}

export default NewListing