import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { WeatherInfo } from "./components/WeatherInfo";
import { useAPI } from "./hooks/useAPI";

function App() {
	const [city, setCity] = useState("");
	const { isLoading, data, refetch, cityName } = useAPI(city);

	data && console.log(data.data);

	if (isLoading) return <p>Loading...</p>;

	return (
		<div id="App">
			<Header />
			<div className="flex-container">
				<Form city={city} setCity={setCity} refetch={refetch} />
				<WeatherInfo
					name={cityName}
					description={data?.data.weather[0].description}
					current_temp={data?.data.main.temp}
					wind_speed={data?.data.wind.speed}
					feels_like={data?.data.main.feels_like}
				/>
			</div>
		</div>
	);
}

export default App;
