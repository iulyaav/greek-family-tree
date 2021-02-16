import { h } from 'preact';
import style from './style.css';

import Panel from '../../components/panel';


const Home = () => {
	var json_file = require('../../data.json'); 
	var data = json_file["data"];
	var currentId = 1;
	let profile = data.find(el => el["id"] === currentId);
	return (
		<div class={style.home}>
			<Panel {...profile}/>			 
		</div>
	)

	};

export default Home;
