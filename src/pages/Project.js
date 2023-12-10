// rename this as project card page? 
import { useParams } from "react-router"
import { Link } from "react-router-dom";

const Project = (props) => {
    const params = useParams()
    const id = String(params.id)
    const projects = props.projects;
    const project = projects.find((p) => String(p.id) === id)

    // edit project form to show on this page 

    return (
        <div className="projectDiv">
            <h1>{project.name}</h1>
            <h3>{project.city}</h3>
            <h3>{project.launch}</h3>
            Project show Page, showing just 1 project

            <h2>Models available at {project.name}</h2>

            {props.listings.map((listing) => {
                // if the project id matches the listing's projectId, show listing:
                if (project.id === listing.projectId && listing.public === true ) {
                    return (
                        <div key={listing.id} className="listingsDiv">
                            <Link to={`/places/listings/${listing.id}`}>
                                <h4>{listing.modelName}</h4>
                                <h4>Beds: {listing.bedrooms}</h4>
                                <h4>Baths: {listing.washrooms}</h4>
                            </Link>
                        </div>
                    )
                }
            })}
            <Link to="/">Back</Link>

        </div>
    )
}

export default Project