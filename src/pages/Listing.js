import { useParams, useNavigate } from "react-router"
import { useState } from "react"
import { Link } from "react-router-dom"

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
        navigate(`/listing/${listing.id}`);
    }

    // function for deleting a listing
    const removeListing = () => {
        props.deleteListing(listing.id)
        navigate("/")
    }

    return (
        <div >
            <div class="flex flex-col gap-8 items-center">
                <h1 class="font-Inter text-5xl pt-10">{listing.modelName}</h1>
                <img src={listing.image} class="w-96"></img>

                <h4>Beds: {listing.bedrooms}</h4>
                <h4>Baths: {listing.washrooms}</h4>
                <h4>Parking spaces: {listing.parking}</h4>
            </div>

            <button 
            class="m-5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <Link to={`/listing/${id}/edit/`}>Edit Listing</Link>
            </button>

            {/* Delete listing button */}
            <button id='delete' onClick={removeListing}
                class="m-5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Delete Listing
            </button>
        </div>
    )
}

export default Listing