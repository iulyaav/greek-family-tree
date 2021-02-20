import style from './style.css';

const Profile = ({ children, ...props })  => (
	<div class={style.profilebox}>
        <div>
            <img class={style.icon} src={props.icon}/>
        </div>
        <div class={style.data}>
            <h1>{props.name}</h1>
            <span>Elements: {props.element.join(", ")}</span>
        </div>
        
    </div>
    
);

export default Profile;
