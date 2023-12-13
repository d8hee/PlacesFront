import { useParams, useNavigate } from "react-router"
import { useState } from "react"

const Listing = (props) => {
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
        navigate(`/places/listings/${listing.id}`);
    }

    // function for deleting a listing
    const removeListing = () => {
        props.deleteListing(listing.id)
        navigate("/places")
    }

    return (
        <div className="listingDiv">
            <h1>{listing.modelName}</h1>
            <h4>Beds: {listing.bedrooms}</h4>
            <h4>Baths: {listing.washrooms}</h4>
            <h4>Parking spaces: {listing.parking}</h4>


            {/* edit listing form */}

            {/* <button>
                <Link>Edit Listing</Link>
            </button> */}

            <h1> Edit This Listing </h1>
            {/* <EditListing id={id} listing={listing} handleEditChange={handleEditChange} handleEditSubmit={handleEditSubmit} editListingForm={editListingForm} /> */}

            <div >
                <form onSubmit={handleEditSubmit}>
                    <label>
                        Model Name:
                        <input
                            type="text"
                            value={editListingForm.modelName}
                            name="modelName"
                            placeholder={editListingForm.modelName}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label>
                        Unit Number:
                        <input
                            type="text"
                            value={editListingForm.unit}
                            name="unit"
                            placeholder={editListingForm.unit}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label>
                        Price:
                        <input
                            type="text"
                            value={editListingForm.price}
                            name="price"
                            placeholder={editListingForm.price}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label>
                        Square Footage:
                        <input
                            type="text"
                            value={editListingForm.sqft}
                            name="sqft"
                            placeholder={editListingForm.sqft}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label>
                        Direction:
                        <input
                            type="text"
                            value={editListingForm.direction}
                            name="direction"
                            placeholder={editListingForm.direction}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label>
                        Bedrooms:
                        <input
                            type="text"
                            value={editListingForm.bedrooms}
                            name="bedrooms"
                            placeholder={editListingForm.bedrooms}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label>
                        Washrooms:
                        <input
                            type="text"
                            value={editListingForm.washrooms}
                            name="washrooms"
                            placeholder={editListingForm.washrooms}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label>
                        Parking Spaces:
                        <input
                            type="text"
                            value={editListingForm.parking}
                            name="parking"
                            placeholder={editListingForm.parking}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label>
                        Lockers:
                        <input
                            type="text"
                            value={editListingForm.locker}
                            name="locker"
                            placeholder={editListingForm.locker}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label>
                        Available for Sale:
                        <input
                            type="checkbox"
                            value={editListingForm.sold}
                            name="sold"
                            defaultChecked={false}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label>
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
                    class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"/>
                </form>
            </div>

            {/* Delete listing button */}
            <button id='delete' onClick={removeListing}
            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Delete Listing
            </button>
        </div>
    )
}

export default Listing