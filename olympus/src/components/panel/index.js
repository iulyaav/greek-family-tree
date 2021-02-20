import Profile from '../profile';
import style from './style.css';
import { useState } from 'preact/hooks';

const Panel = ({ children, ...props }) => {

    const total = props.data.length;

    const [currentId, setCurrentId] = useState(1);
    const [profile, setProfile] = useState(props.data.find(el => el["id"] === currentId));

    const increment = () => {
        setCurrentId(Math.min(total, currentId + 1)); 
        setProfile(props.data.find(el => el["id"] === currentId));
    };
    const decrement = () => {
        setCurrentId(Math.max(1, currentId - 1));
        setProfile(props.data.find(el => el["id"] === currentId));
    };

    return (
	<div class={style.panel}>
        <div class={style.arrows} onClick={decrement}><i class="material-icons">arrow_back_ios_new</i></div>
            <Profile {...profile} />
        <div class={style.arrows} onClick={increment}><i class="material-icons">arrow_forward_ios</i></div>
    </div>
)};

export default Panel;