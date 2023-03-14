import React, {useState} from 'react';
import './App.css';
import { Link } from 'react-router-dom';

import Profile from './Profile'; 

function App() {
  
  // const navigate = useNavigate();
  //form variables and error variables
  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[favouriteSeason, setFavouriteSeason] = useState("");
  const[submitted, setSubmitted] = useState(false);

  //add the handleLogin function
  function handleLogin(event) {
    //validate form function when the form is submitted
    validateForm();

    event.preventDefault();
  }

  //validareForm() function
  const validateForm = () => {

    //validation for First Name
    const firstNameRegex = /^[A-Za-z]+$/;
    if(!firstName.match(firstNameRegex)){
      document.getElementById('firstNameError').innerHTML = "Invalid entry for First Name. It must contain only alphabets.";
      setSubmitted(false);
    }

    //validation for Last Name
    const lastNameRegex = /^[A-Za-z]+$/;
    if(!lastName.match(lastNameRegex)){
      document.getElementById('lastNameError').innerHTML = "Invalid entry for Last Name. It must contain only alphabets.";
      setSubmitted(false);
    }

    //validation for Email
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    if(!email.match(emailRegex)){
      document.getElementById('emailError').innerHTML = "Invalid format for Email.";
      setSubmitted(false);
    }

    //validation for Password
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    if(!password.match(passwordRegex)){
      document.getElementById('passwordError').innerHTML = "Invalid entry for Password. Must contain at least 1 Alphabet, 1 Number, 1 Special Character and 1 Upper case letter.";
      setSubmitted(false);
    }

    //validation for Favourite Season
    if(!favouriteSeason){
      document.getElementById('favouriteSeasonError').innerHTML = "Please select your favourite season.";
      setSubmitted(false);
    }

    if(firstName.match(firstNameRegex) && lastName.match(lastNameRegex) && email.match(emailRegex) && password.match(passwordRegex) && favouriteSeason) {
      setSubmitted(true);
    }
  };


  return (
    <div className="App">
      {submitted ? (
        <div>
          <Profile
          firstName={firstName}
          lastName={lastName}
          email={email}
          favouriteSeason={favouriteSeason}
        />
        <Link to="/Dashboard">Go to Dashboard</Link>
        </div>
      ) : (
      <form onSubmit={handleLogin}>
        <h1>Login page</h1>

        <label htmlFor="firstName"> First Name </label><br/>
        <input type="text" placeholder="Enter your first name" onChange={(event) => setFirstName(event.target.value)}></input><br/><br/>
        <div id="firstNameError"></div><br/>

        <label htmlFor="lastName"> Last Name </label><br/>
        <input type="text" placeholder="Enter your last name" onChange={(event) => setLastName(event.target.value)}></input><br/><br/>
        <div id="lastNameError"></div><br/>

        <label htmlFor="email"> Email </label><br/>
        <input type="text" placeholder="Enter your email" onChange={(event) => setEmail(event.target.value)}></input><br/><br/>
        <div id="emailError"></div><br/>

        <label htmlFor="password"> Password </label><br/>
        <input type="password" placeholder="Enter your password" onChange={(event) => setPassword(event.target.value)}></input><br/><br/>
        <div id="passwordError"></div><br/>

        <label htmlFor="favouriteSeason"> Favourite Season </label><br/>
        <select name="season" onChange={(event) => setFavouriteSeason(event.target.value)}>
          <option value=" " disabled selected hidden>Select your favourite season</option>
          <option value="Spring">Spring</option>
          <option value="Fall">Fall</option>
          <option value="Winter">Winter</option>
        </select><br/><br/>
        <div id="favouriteSeasonError"></div><br/>

        <button type="submit">Submit</button>
      </form>
      )}</div>
      
  );

  
}

export default App;
