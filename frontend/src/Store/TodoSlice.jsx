import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "userslice",
    initialState: 
        {
            firstName : "",
            lastName: "",
            email: "",
            token: "",
            loggedIn: false,
        },

    reducers:{
        
        Recup:(state,action) => { //Dans la page login 
            state.email = action.payload.email
            state.token = action.payload.token
            state.loggedIn = true

        },
        UpdateProfile:(state,action) => {  //dans profile.jsx met a jour le prenom et nom 
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName   
        },
        LogOut:(state,action) => {  //se deconnecte du profil 
            state.loggedIn = false
            
        },
        ChangeProfile:(state,action) => { //utilisé pour modifié les infos dans la base de données
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName 
        }
    
    }
})

export const { Recup } = userSlice.actions
export const {UpdateProfile} = userSlice.actions
export const { LogOut } = userSlice.actions
export const { ChangeProfile } = userSlice.actions

export default userSlice.reducer
