import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "userslice",
    initialState: 
        {
            firstName : "",
            lastName: "",
            email: "",
            password: "",
            token: "",
            loggedIn: false,
        },

    reducers:{
        
        Recup:(state,action) => { //Dans la page login 
            //console.log(action);
            state.email = action.payload.email
            state.token = action.payload.token
            state.loggedIn = true

        },
        UpdateProfile:(state,action) => {  //dans profile.jsx met a jour le prenom et nom 
            //console.log(action)
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName   
        },
        LogOut:(state,action) => {  //test
            console.log(action)
            /*state.firstName = action.payload.firstName,
            state.lastName = action.payload.lastName,
            state.email = action.payload.email,
            state.password = action.payload.password,
            state.token = action.payload.token,*/
            state.loggedIn = false
            
        }
    
    }
})

export const { Recup } = userSlice.actions
export const {UpdateProfile} = userSlice.actions
export const { LogOut } = userSlice.actions

export default userSlice.reducer
