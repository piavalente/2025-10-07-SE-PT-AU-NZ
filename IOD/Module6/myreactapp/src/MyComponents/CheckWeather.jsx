// Child component - receives parent state handler via props
function CheckWeather(props) {
  const weatherTypes = ["sunny", "windy", "raining", "cloudy"];

  // generates new random weather data and updates state via prop
  const randomWeather = () => {
    const newTemp = Math.floor(Math.random() * 40);
    const newWeatherIndex = Math.floor(
      Math.random() * weatherTypes.length
    );

    // ++ try to destructure this function from the props object
    props.onWeatherChange(weatherTypes[newWeatherIndex], newTemp);
  };

  return <button onClick={randomWeather}>Check Weather</button>;
}

// ++ Add some more weather types of your own

export default CheckWeather;
