import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';

import Builders from './Builders';
import Listing from './Listing';
import Listings from "./Listings"
import NewProject from "./NewProject"
import NewListing from './NewListing'
import Project from './Project';
import Projects from './Projects';

// api URL outside component so that it does not redeclared w each re-render
const URL = "https://placesappbackend-12a451d9f048.herokuapp.com/"

const Main = () => {
    // State for data 
  const [builders, setBuilders] = useState([])
  const [projects, setProjects] = useState([])
  const [listings, setListings] = useState([])

  // Functions 
  const getBuilders = async ()=> {
    const response = await fetch(URL + "places/builders")
    const data = await response.json()
    setBuilders(data)
  }
  const getProjects = async ()=> {
    const response = await fetch(URL + "places/projects")
    const data = await response.json()
    setProjects(data)
  }
  const getListings = async ()=> {
    const response = await fetch(URL + "places/listings")
    const data = await response.json()
    setListings(data)
  }
// useEffect
  useEffect(()=>{
    getBuilders()
    getProjects()
    getListings()
  },[]) 
   
    return(
        <div>
            <h1>Home Page</h1>

      <Routes>
        <Route path="/" element={<Projects projects={projects}/>} />
        <Route path="/places/projects/:id" element={<Project projects={projects} />} />
        <Route path="/places/listings" element={<Listings listings={listings}/>} />
        <Route path="/places/listings/:id" element={<Listing listings={listings}/>} />
        <Route path="/places/builders" element={<Builders builders={builders}/>} />

        <Route path="/places/newproject" element={<NewProject />} />
        <Route path="/places/newlisting" element={<NewListing />} />
      </Routes>
        </div>
    )
}

export default Main