import style from './style.css';

const Profile = ({ children, ...props })  => (
	<div class={style.profilebox}>
        <div>
            <img class={style.icon} src={props.icon}/>
        </div>
        <h1>{props.name}</h1>
    </div>
    
);

export default Profile;
