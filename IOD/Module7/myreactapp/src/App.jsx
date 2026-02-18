import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//MODULE 7
//import Clock from '../../../Module7/myreactapp/src/MyComponents/Clock.jsx';
//import ClockDisplay from '../../../Module7/myreactapp/src/MyComponents/ClockDisplay.jsx';
import ActivityFinder from '../../../Module7/myreactapp/src/MyComponents/ActivityFinder.jsx';
//import Counter from './MyComponents/Counter.jsx';
//import VideoPlayer from '../../../Module7/myreactapp/src/MyComponents/VideoPlayer.jsx';
//import ReduceCounter from '../../../Module7/myreactapp/src/MyComponents/ReducerCounter.jsx';
//import PostListReducer from './MyComponents/PostListReducer.jsx';
import SubscribeForm from './MyComponents/SubscribeForm.jsx';
import LoginForm from '../../../Module6/myreactapp/src/MyComponents/LoginFOrm.jsx';
import { UserProvider } from './MyComponents/UserProvider.jsx';
import MyThemeProvider from './MyComponents/MyThemeProvider.jsx';



function App() {
  return (
    <>
      <UserProvider> 
        <MyThemeProvider>
          {" "}
        {/*Providing the context*/}
        {/*All below components are the children of UserProvider to receive the context - props.children*/}
        <SubscribeForm></SubscribeForm>
        <ActivityFinder></ActivityFinder>
        <LoginForm></LoginForm>
        </MyThemeProvider>
      </UserProvider>
    </>
  )
}

export default App;


/*
      <PostListReducer></PostListReducer>
      <ReduceCounter></ReduceCounter>
      <VideoPlayer></VideoPlayer>
      <Counter></Counter>
      <ClockDisplay></ClockDisplay>
      <Clock></Clock> 
*/


