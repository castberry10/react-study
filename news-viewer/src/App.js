import { useState } from 'react';
import axios from 'axios';
import newsjson from './news'
import NewsList from './components/NewsList';

const App = () => {
	return <NewsList/>;
};

export default App;

// const App = () => {
// 	const [data, setData] = useState(null);
// 	const onClick = async () => {
// 		try{
// 			// const response = await axios.get(
// 			// 	'https://newsapi.org/v2/top-headlines?country=kr&apiKey=8378a7d0ee24456ba337d378adde3f51',
// 			// );
// 			// setData(response.data);
// 			setData(newsjson)
// 		}catch(e){
// 			console.log(e);
// 		}
// 	};
	
// 	return(
// 		<div>
// 			<div>
// 				<button onClick={onClick}>불러오기</button>
// 			</div>
// 			{data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
			
// 		</div>
// 	);
// };