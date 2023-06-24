import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const API_KEY = "e9f094c211aa34882831539b548ef481";

export const useAPI = (city: string) => {
	const [cityName, setCityName] = useState("");
	const { isLoading, data, refetch } = useQuery(
		["weather-api"],
		() => {
			return axios
				.get(
					`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
				)
				.then((res) => {
					setCityName(res.data[0].name);
					return axios.get(
						`http://api.openweathermap.org/data/2.5/weather?lat=${res.data[0].lat}&lon=${res.data[0].lon}&appid=${API_KEY}`
					);
				});
		},
		{ enabled: false }
	);

	return { isLoading, data, refetch, cityName };
};
