import { UseQueryResult } from "react-query/types/react";

interface FormProps {
	city: string;
	setCity: React.Dispatch<React.SetStateAction<string>>;
	refetch: (options: {
		throwOnError: boolean;
		cancelRefetch: boolean;
	}) => Promise<UseQueryResult>;
}

export const Form: React.FC<FormProps> = ({ city, setCity, refetch }) => {
	return (
		<section id="form">
			<h5>City</h5>
			<input
				type="text"
				value={city}
				onChange={(e) => setCity(e.target.value)}
				placeholder="Enter your city"
			/>
			<button
				className="btn-form"
				onClick={() => {
					refetch({ throwOnError: true, cancelRefetch: true });
				}}>
				Search
			</button>
		</section>
	);
};
