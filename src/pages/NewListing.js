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
        <div>
            Create a New Listing page
            <form onSubmit={handleSubmit}>
                <label>
                    Project ID:
                    <input
                        type="text"
                        value={newListingForm.projectId}
                        name="projectId"
                        placeholder="Project ID"
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Model Name:
                    <input
                        type="text"
                        value={newListingForm.modelName}
                        name="modelName"
                        placeholder="Listing Model Name"
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Unit Number:
                    <input
                        type="text"
                        value={newListingForm.unit}
                        name="unit"
                        placeholder="Unit number"
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Price:
                    <input
                        type="text"
                        value={newListingForm.price}
                        name="price"
                        placeholder="price"
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Square Footage:
                    <input
                        type="text"
                        value={newListingForm.sqft}
                        name="sqft"
                        placeholder="Square Footage"
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Direction:
                    <input
                        type="text"
                        value={newListingForm.direction}
                        name="direction"
                        placeholder="Direction"
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Bedrooms:
                    <input
                        type="text"
                        value={newListingForm.bedrooms}
                        name="bedrooms"
                        placeholder="Number of Bedrooms"
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Washrooms:
                    <input
                        type="text"
                        value={newListingForm.washrooms}
                        name="washrooms"
                        placeholder="Number of Washrooms"
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Parking Spaces:
                    <input
                        type="text"
                        value={newListingForm.parking}
                        name="parking"
                        placeholder="Number of Parking Spaces"
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Lockers:
                    <input
                        type="text"
                        value={newListingForm.locker}
                        name="locker"
                        placeholder="Lockers"
                        onChange={handleChange}
                    />
                </label>

                <label>Available for Sale:
                    <input
                        type="checkbox"
                        value={newListingForm.sold}
                        name="sold"
                        placeholder="Available for Sale"
                        defaultChecked={false}
                        onChange={handleChange}
                    />
                </label>

                <label>Publish to Everyone:
                    <input
                        type="checkbox"
                        value={newListingForm.public}
                        name="public"
                        placeholder="Publish to Everyone"
                        defaultChecked={true}
                        onChange={handleChange}
                    />
                </label>

                <input type="submit" value="Create A New Listing" />
            </form>
        </div>
    )
}

export default NewListing