// rename this as project card page? 
import { useParams } from "react-router"
import { Link } from "react-router-dom";

const Project = (props) => {
    const params = useParams()
    const id = String(params.id)
    const projects = props.projects;
    const project = projects.find((p) => String(p.id) === id)
    var d = new Date(project.launch)

    return (
        <div>
            <div>
                <img src={project.image} alt="pre-construction property" class="bg-cover border"></img>
            </div>
            <div class="flex flex-col items-center">

                <h1 class="font-Inter text-5xl p-10">{project.name}</h1>
                <h3 class="font-Inter text-2xl">{project.city}</h3>
                <h3 class="font-Inter text-red-600 p-5 ">Sales Start On: {d.toDateString()}</h3>
                <h4 class="text-justify w-4/5">{project.description}</h4>

                <button
                    class="m-5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    <Link to={`/project/${id}/edit/`}>Edit Project</Link>
                </button>

                <button
                    class="m-5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    <Link to="/newlisting">Create a New Listing</Link>
                </button>

                <hr class="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700"></hr>

                <h1 class="font-Inter text-3xl p-10">Listings available at {project.name}</h1>
            </div>


            <div class="flex flex-col gap-8 items-center">
                {props.listings.map((listing) => {

                    const status = () => {
                        let soldStatus = listing.sold
                        if (soldStatus) {
                            return (<h4 class="text-red font-semibold">SOLD</h4>)
                        } else {
                            return (<h4 class="text-emerald-600 font-semibold">Available</h4>)
                        }
                    }

                    // if the project id matches the listing's projectId, show listing:
                    if (project.id === listing.projectId && listing.public === true) {

                        return (
                            <div key={listing.id}
                                class="max-w-screen-md text-left"
                            >
                                <Link to={`/listing/${listing.id}`}>
                                    <img src={listing.image} alt="Listing" class="w-96 border rounded-2xl"></img>
                                    {status()}
                                    <h4 class="font-Inter">{listing.modelName}</h4>
                                    <h4>Beds: {listing.bedrooms}</h4>
                                    <h4>Baths: {listing.washrooms}</h4>
                                    <h4></h4>
                                </Link>
                            </div>
                        )
                    }
                })}
            </div>

            <Link to="/">Back Home</Link>

        </div>
    )
}

export default Project