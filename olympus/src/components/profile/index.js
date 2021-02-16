import style from './style.css';

const Profile = ({ children, ...props })  => (
	<div class={style.profilebox}>
        <h1>{props.name}</h1>
        <div>
            <img class={style.icon} src={props.icon}/>
        </div>
    </div>
    
);

export default Profile;
