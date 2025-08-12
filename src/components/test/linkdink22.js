import { Link } from 'react-router-dom';
import './linkdink1.css';

function Linkdink22( props ) {
  return (
    <div className='person-item'>
      <div className='person-avatar'>
        <img src={props.image} alt={props.name} />
      </div>
      <div className='person-info'>
        <div style={{ fontWeight: 600 }}>{props.name}</div>
        <div style={{ fontWeight: 600 }}>{props.title}</div>
        <div className='connect-button'>Connect</div>
      </div>
    </div>
  );
}

export default Linkdink22;
