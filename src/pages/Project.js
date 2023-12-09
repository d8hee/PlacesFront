// rename this as project card page? 
import { useParams } from "react-router"
import { Link } from "react-router-dom";

const Project = (props) => {
    const params = useParams()
    const id = params.id;
    const projects = props.projects;
    const project = projects.find((p) => String(p.id) === id)

    return (
        <div className="projectDiv">
            <h1>{project.name}</h1>
            <h3>{project.city}</h3>
            <h3>{project.launch}</h3>
            Project show Page, showing just 1 project

            <h2>{project.name}'s listings</h2>
            {props.listings.map((listing) => {
                return (
                    <div className="listingsDiv">
                        <Link to={`/places/listings/${listing.id}`}>
                            <h4>{listing.modelName}</h4>
                            <h4>Beds: {listing.bedrooms}</h4>
                            <h4>Baths: {listing.washrooms}</h4>
                        </Link>
                    </div>
                )
            })}

        </div>
    )
}

export default Project