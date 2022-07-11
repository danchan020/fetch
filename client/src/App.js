import React, { useState, useEffect } from "react";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import LandingPage from "./Component/LandingPage";
import { Routes, Route, Links, useParams, useNavigate } from "react-router-dom";
import SignInForm from "./Component/SignInForm";
import JobPage from './Component/JobPage';

function App() {
   const [user, setUser] = useState(null);
   const [jobs, setJobs] = useState([])
   
   useEffect(() => {
      fetch("http://localhost:4000/findjobs")
      .then( r => r.json() )
      .then( data => setJobs(data))
  }, [])

   // useEffect(() => {
   //    fetch("/me").then((r) => {
   //       if (r.ok) {
   //          r.json().then((user) => setUser(user));
   //       }
   //    });
   // }, []);

	const handleSignOut = () => {
		fetch("/logout", {method: "DELETE"}).then((r) => {
			if (r.ok) {
				setUser(null)
			}
		}).then(navigate("/"));
	}


   // if (!user) return <SignInForm setUser={setUser} />;

   let { jobListingId } = useParams();
   let navigate = useNavigate();

   return (
      <>
         <NavBar user={user} handleSignOut={handleSignOut}  />
         <Routes>
            <Route
               path="/"
               element={user ? null : <LandingPage setUser={setUser} />}
            />
            <Route
               path="signin"
               element={user ? null : <SignInForm setUser={setUser} navigate={navigate} />}
            />
            <Route path="profile" />
            <Route path="findjobs" element= {<JobPage jobs={jobs}/>}/>
				<Route path="myjobs" />
				<Route path="myreviews" />
            <Route path="companyreviews" />
         </Routes>
         <Footer />
      </>
   );
}

export default App;
