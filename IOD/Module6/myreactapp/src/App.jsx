import { useState } from 'react';
import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import './App.css';
import FirstComponent from './MyComponents/FirstComponent.jsx';
import { SecondComponent, SubSecondComponent } from './MyComponents/SecondComponent.jsx';
import Student from './MyComponents/Student.jsx';
import Welcome from './MyComponents/Welcome.jsx';
import City from './MyComponents/City.jsx';
import Pet from './MyComponents/Pet.jsx';
import Books from './MyComponents/Books.jsx';
import FullName from './MyComponents/FullName.jsx';
import ComplexComment from './MyComponents/ComplexComment.jsx';
import Callout from './MyComponents/Callout.jsx';
import MovieList from './MyComponents/MovieList.jsx';
import Counter from './MyComponents/Counter.jsx';
import MoodChanger from './MyComponents/MoodChanger.jsx';
import BirthdayTranslator from './MyComponents/BirthdayTranslator.jsx';
import Weather from './MyComponents/Weather.jsx';
import LoginForm from './MyComponents/LoginFOrm.jsx';
import SampleUncontrolledForm from './MyComponents/SampleUncontrolledForm.jsx';
//import ExplodingBomb from './MyComponents/ExplodingBomb.jsx';


//MODULE 7
import Clock from './MyComponents/Clock.jsx';
import ClockDisplay from './MyComponents/ClockDisplay.jsx';
import ActivityFinder from './MyComponents/ActivityFinder.jsx';
import VideoPlayer from './MyComponents/VideoPlayer.jsx';
import ReduceCounter from './MyComponents/ReducerCounter.jsx';
//import PostListReducer from './MyComponents/PostListReducer.jsx';





function App() {

  // MY OWN JSX
  /*
  const myownJSX = (npm
    <>
      <div>
        <p>First Paragraph</p>
        <p>Second Paragraph</p>
        <img src={reactLogo} />
      </div>
      <div>
        <p>Second div</p>
      </div>
    </>
  );

  // SPIDERMAN
  const spiderman = { 
    name: 'Spiderman', 
    alterEgo: 'Peter Parker', 
    catchPhrase: 'With great power comes great responsibility' 
  };

  const spideyJSX = (
    <div>
      <h3>{spiderman.name}</h3>
      <blockquote>{spiderman.catchPhrase}</blockquote>
      <cite>{spiderman.alterEgo}</cite>
    </div>
  );

  // AMAZON IMAGE
  const imageURL =
    "https://m.media-amazon.com/images/I/31VmyxppnIL._AC_SR480,440_.jpg";
  */


  const locations = ["Sydney", "Wellington"];  

  // OR

  
  const studentLocation = (
    <div>
          <p>Student location: Sydney</p> 
    </div>
  );
  
  // object storing comment data - passed as props
   const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: { 
      // author is also an object
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };  


    
  return (
    <>
      {/*<ExplodingBomb></ExplodingBomb>*/}
      <ReduceCounter></ReduceCounter>
      <VideoPlayer></VideoPlayer>
      <ActivityFinder></ActivityFinder>
      <ClockDisplay></ClockDisplay>
      <Clock></Clock>


      <SampleUncontrolledForm></SampleUncontrolledForm>
      <LoginForm></LoginForm>
      <Weather></Weather>
      <BirthdayTranslator></BirthdayTranslator>
      <MoodChanger></MoodChanger>
      <Counter></Counter>
      <MovieList></MovieList>
    
      <Callout 
        title="Nested React Component"
        message="Simple message with a fancy box applied via composition"><FullName first="Elon" last="Musk" />
      </Callout>

      <ComplexComment text={comment.text} author={comment.author} date={comment.date}></ComplexComment>

      <FullName firstName = "John" lastName = "Kennedy"></FullName>
      <FullName firstName = "Bill" lastName = "Gates"></FullName>

      <Books></Books>
      <Pet type="cat" color="black" name="blacky"></Pet>
      <City name = "Sydney"></City>
      <Welcome></Welcome>
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <SubSecondComponent></SubSecondComponent>
      <Student firstName="John" lastName="Cooper"> {/*if you want to use parameter from student on app.jsx, add the parameter (props)*/}
        {studentLocation} {/*THIS IS A CHILD. IF YOU WANT TO EDIT, YOU CAN DO IN Student.jsx*/}
      </Student>
      <Student firstName="Pia" lastName="Valente"></Student>
        <div>
          location: {locations[1]}
        </div>




      {/*
        Example JSX commented correctly

        {myownJSX}
        <img src={imageURL} />
        {spideyJSX}
      */}
    </>
  );
}

export default App;
