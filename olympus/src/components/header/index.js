import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<nav>
			<span style="color: #505050; margin-right:0.5em;">
				<i class="material-icons" style="font-size: 40px;">expand_more</i>
			</span>
		</nav>
	</header>
);

export default Header;
