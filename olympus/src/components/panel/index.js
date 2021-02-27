import Profile from '../profile';
import style from './style.css';
import { useState, useEffect } from 'preact/hooks';


const useStateCallbackWrapper = (initilValue, callBack) => {
    const [state, setState] = useState(initilValue);
    useEffect(() => callBack(state), [state]);
    return [state, setState];
  };

const Panel = ({ children, ...props }) => {

    const total = props.data.length;

    const [currentId, setCurrentId] = useStateCallbackWrapper(1, s => setProfile(props.data.find(el => el["id"] === s)));
    const [profile, setProfile] = useState(props.data.find(el => el["id"] === currentId));

    const increment = () => {
        setCurrentId(prev => Math.min(total, prev + 1)); 
    };
    const decrement = () => {
        setCurrentId(Math.max(1, currentId - 1));
    };  
    return (
	<div class={style.panel}>
        <div class={style.arrows} onClick={decrement}><a><i class="material-icons">arrow_back_ios_new</i></a></div>
            <Profile {...profile} />
        <div class={style.arrows} onClick={increment}><a><i class="material-icons">arrow_forward_ios</i></a></div>
    </div>
)};

export default Panel;