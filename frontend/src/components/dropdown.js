import React, {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useName } from '../context/name';

const Menu = (props) => {
    const {name, setName} = useName();
    const names = props.names.slice(0,20);
    const [defaultName,setDdefaultName] = useState(names[0]);
    const dropDownStyles = {
        backgroundColor: '#2E3241',
        color: 'white',
        borderColor: '#2E3241',
        fontFamily: 'Oswald'
    }
    const changeDefaultName = (e) => {
        setDdefaultName(e);
        setName(e);
    }
  return (
    <Dropdown style={{'padding':'10px'}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic" style={dropDownStyles}>
        {defaultName || names[0]}
      </Dropdown.Toggle>
      <Dropdown.Menu>
      {Array.isArray(names) && names.map((name) => (
        <Dropdown.Item key={name} onClick={(e)=>{changeDefaultName(name)}} >{name}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Menu