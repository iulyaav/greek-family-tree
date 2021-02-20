import Profile from '../profile';
import style from './style.css';

const Panel = ({ children, ...props }) => (
	<div class={style.panel}>
        <div class={style.arrows}><i class="fa fa-chevron-left fa-2x"/></div>
        <Profile {...props} />
        <div class={style.arrows}><i class="fa fa-chevron-right fa-2x"/></div>
    </div>
);

export default Panel;