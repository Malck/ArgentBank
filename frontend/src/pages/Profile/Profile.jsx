import {  useEffect } from "react";
import { useSelector } from 'react-redux'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { UpdateProfile } from "../../Store/TodoSlice";

export default function Profile() {

  const data = useSelector(state => state.UserState)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {

    async function GetProfil(){

      //console.log(data.token)

      if(data.loggedIn === false) { // quand on rafraichit la page on perd les infos du data donc on revient a la page signin comme ça
                                    //empeche aussi d'aller sur la page /profile sans passer par le signin
        navigate("/login")
      }
      
      /*var raw = JSON.stringify({
        firstName: firstName,
        lastName: lastName
        });*/
      const config = {
          headers: { Authorization: `Bearer ${data.token}` },
          /*body: raw*/
       };
      const bodyParameters = {
      };
    
      axios.post('http://localhost:3001/api/v1/user/profile', bodyParameters, config)
       .then(function(response) {
         //console.log(response.data) 
         dispatch(UpdateProfile({...data, 
          firstName: response.data.body.firstName, 
          lastName: response.data.body.lastName}));
        }) // ici on a acces a toutes les infos du user 

       .catch(console.log);

    }
    GetProfil();
    
  },[])

  console.log(data)

  const first = data.firstName
  const last = data.lastName
  
  return (
    <main className="main bg-dark">

      <div className="header">
        <h1>Welcome back
          <br />
          {`${first} ${last}`}!
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>

      <h2 className="sr-only">Accounts</h2>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>

    </main>
  );
}
//const response = await Axios.get(http://localhost:3001/api/v1/user/profile) 