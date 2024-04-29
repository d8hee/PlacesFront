import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';

// import Builders from './Builders';
// import EditListing from './EditListing';
import Listing from './Listing';
import Listings from "./Listings"
import NewProject from "./NewProject"
import NewListing from './NewListing'
import Project from './Project';
import Projects from './Projects';

import EditListing from './EditListing';
import EditProject from './EditProject';

import buildersData from '../sample data/buildersData'
import listingsData from '../sample data/listingsData';
import projectsData from '../sample data/projectsData'

// api URL outside component so that it does not redeclared w each re-render
const URL = "https://placesappbackend-12a451d9f048.herokuapp.com/places/"

const Main = () => {
const [localDev, setLocalDev] = useState(true)

  // State for data 
  const [builders, setBuilders] = useState()
  const [projects, setProjects] = useState()
  const [listings, setListings] = useState()

  // Functions 
  const getBuilders = async () => {
    if(localDev){
      setBuilders(buildersData)
    } else{
      const response = await fetch(URL + "builders")
      const data = await response.json()
      setBuilders(data)
    }
  }
  const getProjects = async () => {
    if(localDev){
      setProjects(projectsData)
    } else{
      const response = await fetch(URL + "projects")
      const data = await response.json()
      setProjects(data)
    }
  }

  const getListings = async () => {
    if(localDev){
      setListings(listingsData)
    } else{
      const response = await fetch(URL + "listings")
      const data = await response.json()
      setListings(data)
    }
  }

  // function to create new project
  const createProject = async (project) => {
    await fetch(URL + "projects", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });
    // updates project list
    getProjects();
  };

  // function to create new listing
  const createListing = async (listing) => {
    await fetch(URL + "listings", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listing),
    });
    // updates project list
    getListings();
  };

  // function to update/edit a LISTING
  const updateListing = async (listing) => {
    await fetch(URL + "listings/" + listing.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listing),
    })
    getListings()
  }

  // function to update/edit a PROJECT
  const updateProject = async (project) => {
    await fetch(URL + "projects/" + project.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
    getProjects()
  }

  //function to delete a listing
  const deleteListing = async (id) => {
    await fetch(URL + "listings/" + id, {
      method: "delete",
    })
    getListings()
  }

  // useEffect
  useEffect(() => {
    getBuilders()
    getProjects()
    getListings()
  }, [])


  const Loading = () => {
    return <h1>Still loading...</h1>
  }

  const Loaded = () => {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Projects projects={projects} key={projects.id} />} />
          <Route path="/project/:id" element={<Project projects={projects} listings={listings} />} />
          <Route path="/listings" element={<Listings listings={listings} />} />

          {/* Edit LISTING */}
          <Route path="/listing/:id/edit" element={<EditListing listings={listings} projects={projects} builders={builders} updateListing={updateListing} />} />
          {/* Edit PROJECT */}
          <Route path="/project/:id/edit" element={<EditProject listings={listings} projects={projects} builders={builders} updateProject={updateProject} />} />

          <Route path="/listing/:id" element={<Listing listings={listings} builders={builders} updateListing={updateListing} deleteListing={deleteListing} />} />
          <Route path="/newproject" element={<NewProject projects={projects} builders={builders} createProject={createProject} />} />
          <Route path="/newlisting" element={<NewListing listings={listings} createListing={createListing} />} />
          {/* <Route path="/builders" element={<Builders builders={builders}/>} /> */}
        </Routes>
      </div>
    )
  }

  return projects && listings && builders ? Loaded() : Loading()
}

export default Main