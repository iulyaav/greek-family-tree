import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<nav>
			<span style="font-size: 3em; color: Tomato; margin-right:0.5em;">
				<i class="fas fa-caret-down"></i>
			</span>
		</nav>
	</header>
);

export default Header;
