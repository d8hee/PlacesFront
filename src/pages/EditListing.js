import { useState } from "react";
import { useNavigate, useParams } from "react-router";

const EditListing = (props) => {
    const params = useParams()
    const id = params.id
    const listings = props.listings
    const listing = listings.find((l) => String(l.id) === id)
    const navigate = useNavigate()

    // state for edit listing form
    const [editListingForm, setEditListingForm] = useState(listing)

    // handleChange function for form
    const handleEditChange = (event) => {
        // form fields name:key, and value:value
        setEditListingForm({ ...editListingForm, [event.target.name]: event.target.value });

    }

    // handlesubmit for form
    const handleEditSubmit = (event) => {
        event.preventDefault();
        props.updateListing(editListingForm);
        console.log(editListingForm)
        // redirect people back to index
        navigate(`/listing/${listing.id}`);
    }


    return (
        <div>
            <h1 class="font-Inter text-4xl p-8"> Edit This Listing </h1>
            {/* <EditListing id={id} listing={listing} handleEditChange={handleEditChange} handleEditSubmit={handleEditSubmit} editListingForm={editListingForm} /> */}

            <div >
                <form onSubmit={handleEditSubmit} class="flex flex-col justify-center items-center">
                    <label class="block text-sm font-medium leading-6 text-gray-900">
                        Model Name:
                        <input
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            type="text"
                            value={editListingForm.modelName}
                            name="modelName"
                            placeholder={editListingForm.modelName}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label class="block text-sm font-medium leading-6 text-gray-900">
                        Unit Number:
                        <input
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            type="text"
                            value={editListingForm.unit}
                            name="unit"
                            placeholder={editListingForm.unit}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label class="block text-sm font-medium leading-6 text-gray-900">
                        Price:
                        <input
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            type="text"
                            value={editListingForm.price}
                            name="price"
                            placeholder={editListingForm.price}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label class="block text-sm font-medium leading-6 text-gray-900">
                        Square Footage:
                        <input
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            type="text"
                            value={editListingForm.sqft}
                            name="sqft"
                            placeholder={editListingForm.sqft}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label class="block text-sm font-medium leading-6 text-gray-900">
                        Direction:
                        <input
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            type="text"
                            value={editListingForm.direction}
                            name="direction"
                            placeholder={editListingForm.direction}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label class="block text-sm font-medium leading-6 text-gray-900">
                        Bedrooms:
                        <input
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            type="text"
                            value={editListingForm.bedrooms}
                            name="bedrooms"
                            placeholder={editListingForm.bedrooms}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label class="block text-sm font-medium leading-6 text-gray-900">
                        Washrooms:
                        <input
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            type="text"
                            value={editListingForm.washrooms}
                            name="washrooms"
                            placeholder={editListingForm.washrooms}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label class="block text-sm font-medium leading-6 text-gray-900">
                        Parking Spaces:
                        <input
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            type="text"
                            value={editListingForm.parking}
                            name="parking"
                            placeholder={editListingForm.parking}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label class="block text-sm font-medium leading-6 text-gray-900">
                        Lockers:
                        <input
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            type="text"
                            value={editListingForm.locker}
                            name="locker"
                            placeholder={editListingForm.locker}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label class="block text-sm font-medium leading-6 text-gray-900">
                        Image URL:
                        <input
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            type="text"
                            value={editListingForm.image}
                            name="image"
                            placeholder={editListingForm.image}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label class="block text-sm font-medium leading-6 text-gray-900">
                        Available for Sale:
                        <input
                            type="checkbox"
                            value={editListingForm.sold}
                            name="sold"
                            defaultChecked={false}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label class="block text-sm font-medium leading-6 text-gray-900">
                        Publish to Everyone:
                        <input
                            type="checkbox"
                            value={editListingForm.public}
                            name="public"
                            defaultChecked={true}
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

export default EditListing