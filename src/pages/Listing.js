import { useParams, useNavigate } from "react-router"
import { useState } from "react"

// edit listing form on this pg
// delete button on this page 
const Listing = (props) => {
    const params = useParams()
    const id = params.id
    const listings = props.listings
    const listing = listings.find((l) => String(l.id) === id)
    const navigate = useNavigate()

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
            
            button for edit
            button for delete <button id='delete' onClick={removeListing} >Delete Listing</button>
        </div>
        )
}

export default Listing