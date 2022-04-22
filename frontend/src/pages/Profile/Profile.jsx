import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UpdateProfile } from "../../Store/TodoSlice";
import { ChangeProfile } from "../../Store/TodoSlice";
import CardAccount from "./CardAccount";

export default function Profile() {

  const data = useSelector((state) => state.UserState);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    async function GetProfil() {
      
      /** 
       * Quand on rafraichit la page on perd les infos du data donc on revient a la page /Login comme ça
       * Empeche aussi d'aller sur la page /profile sans passer par le signin form
       */
      if (data.loggedIn === false) {
        navigate("/login");
      }
      
      const config = {
        headers: { Authorization: `Bearer ${data.token}` },
      };

      const bodyParameters = {};

      axios
        .post(
          "http://localhost:3001/api/v1/user/profile",
          bodyParameters,
          config
        )
        .then(function (response) {
          dispatch(UpdateProfile({...data, firstName: response.data.body.firstName, lastName: response.data.body.lastName}));
        }) 
        .catch(console.log);
    }
    GetProfil();
  }, []);

  const first = data.firstName;
  const last = data.lastName;

  /**
   * Fonctions de changement avec le bouton Edit profile
   */
  const [isClicked, setIsClicked] = useState(false);
  const showContent = () => {
    setIsClicked((isClicked) => !isClicked);
  };

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const handleChangeFirst = (e) => {
    setFirstName(e.target.value)
  }
  
  const updateData = () => {

    const config = {
      headers: { Authorization: `Bearer ${data.token}` },
    };

    const bodyParameters = {
      firstName: firstName,
      lastName: lastName
    };
    axios.put(
          "http://localhost:3001/api/v1/user/profile",
          bodyParameters,
          config
        )
        .then(function (response) {
          dispatch(
            ChangeProfile({
              ...data,
              firstName: firstName,
              lastName: lastName,
            })
          );
        }) 
        .catch(console.log);

    console.log(firstName, first);
}

  return (
    <main className="main bg-dark">

      <div className="header">

        <h1>
          Welcome back
          <br />
          {`${first} ${last}`}!
        </h1>

        <button onClick={showContent} className="edit-button">
          Edit Name
        </button>

        {isClicked && (
          <div className="edit-section">

            <div className="container-input">

            <input onChange={handleChangeFirst} type="text" value={firstName} placeholder={first} />
              
            <input onChange={(e) => setLastName(e.target.value)} type="text" value={lastName} placeholder={last} />
            </div>

            <div className="container-buttons">
              <button onClick={updateData}>Save</button>
              <button onClick={showContent}>Cancel</button>
            </div>
          </div>
        )}
      </div>
      <CardAccount />
    </main>
  );
}
