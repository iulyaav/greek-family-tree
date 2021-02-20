import { h } from 'preact';
import style from './style.css';

import Panel from '../../components/panel';


const Home = () => {
	var data = require('../../data.json'); 
	return (
		<div class={style.home}>
			<Panel {...data}/>			 
		</div>
	)

	};

export default Home;
