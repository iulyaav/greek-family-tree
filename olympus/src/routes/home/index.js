import { h } from 'preact';
import style from './style.css';

import Profile from '../../components/profile';


const Home = () => {
	var json_file = require('../../data.json'); 
	var data = json_file["data"];
	return (
		<div class={style.home}>
			 {data.map(profile => <Profile {...profile} />)}
		</div>
	)

	};

export default Home;
