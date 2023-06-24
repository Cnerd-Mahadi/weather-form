interface WeatherInfoProps {
	name: string;
	description: string;
	current_temp: number;
	wind_speed: number;
	feels_like: number;
}

export const WeatherInfo: React.FC<WeatherInfoProps> = ({
	name,
	description,
	current_temp,
	wind_speed,
	feels_like,
}) => {
	return (
		<section id="weather-info">
			<div className="weather-info__top-text">
				<h3>{name}</h3>
				<div className="weather-info__circle"></div>
			</div>
			<div className="weather-info__bottom-text">
				<p>Description: {description}</p>
				<p>Current Temp: {current_temp} °F</p>
				<p>Feels Like: {wind_speed} mph</p>
				<p>Wind Speed: {feels_like} °F</p>
			</div>
		</section>
	);
};
