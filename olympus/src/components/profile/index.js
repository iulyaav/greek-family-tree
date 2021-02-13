import style from './style.css';

const Profile = ({ children, ...props })  => (
	<header class={style.header}>
		<h1>{props.name}</h1>
	</header>
);

export default Profile;
