import Profile from '../profile';
import style from './style.css';

const Panel = ({ children, ...props }) => (
	<div>
        <Profile {...props} />
    </div>
);

export default Panel;