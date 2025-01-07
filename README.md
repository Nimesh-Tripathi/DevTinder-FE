// frontend class 1

focus on creating Routing on FE 

- create a vite+react app
- install tailwind
- daisyui for tailwind css component
- adding navbar component from daisyui
- install react-router-dom for making different pages for different urls
- Create BrowserRouter > Routes > Route=/ Body > RouteChildren
- Create an Outlet in your Body Component
- Create a footer

// class 2

- create a login component 
- Install axios
- CORS - install cors in backend => add middleware to with configurations: origin, credentials: true
- Whenever you're making API call so pass axios => { withCredentials: true }
- install react-redux + @reduxjs/toolkit - https://redux-toolkit.js.org/tutorials/quick-start
- configureStore => Provider => createSlice => add reducer to store
- Add redux devtools in chrome
- Login and see if your data is coming properly in the store
- NavBar should update as soon as user logs in and navigates to feed page
- Refactor our code to add constants file + create a components folder

// class 3

- You should not be access other routes without login
- If token is not present, redirect user to login page
- Logout Feature
- Get the feed and add the feed in the store
- build the user card on feed
- Edit Profile Feature
- Show Toast Message on save of profile

// class 4

- 

