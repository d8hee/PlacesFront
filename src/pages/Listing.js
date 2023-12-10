import { useParams } from "react-router"
// edit listing form on this pg
const Listing = (props) => {
    const params = useParams()
    const id = params.id
    const listings = props.listings
    const listing = listings.find((l) => String(l.id) === id)
    return (
        <div className="listingDiv">
            <h1>{listing.modelName}</h1>
            <h4>Beds: {listing.bedrooms}</h4>
            <h4>Baths: {listing.washrooms}</h4>
            <h4>Parking spaces: {listing.parking}</h4>
        </div>
        )
}

export default Listing