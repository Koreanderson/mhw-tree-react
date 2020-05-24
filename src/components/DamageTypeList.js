import React from 'react';
import styled from 'styled-components';

const DamageTypeList = (props) => {
  const damageTypes = [
    'poison',
    'fire',
    'water',
    'thunder',
    'ice',
    'dragon',
    'sleep',
    'blast',
    'paralysis'
  ];
  const Ul = styled.ul`
    list-style-type: none;
    text-align: left;
    li {
      cursor: pointer;
      margin: .5em;
      padding: .25em .5em;
    }
    .selected { 
      border: 1px solid white;
    }
  `
  const currentDamageType = props.selectedDamageType;
  const handleClick = (e) => {
    const damageType = e.target.attributes.damageType.value;
    const el = e.target;
    const listItems = document.querySelectorAll('.damage-types--item');
    props.handleDamageClick(damageType);
    console.log(damageType);
  }

  const damageTypeList = damageTypes.map((damageType,i) => 
    <li className={"damage-types--item " + (currentDamageType == damageType ? 'selected' : '')} onClick={handleClick} key={i} damagetype={damageType}>{damageType}</li>
  );

  return (
    <Ul className="damage-types">
      {damageTypeList}
    </Ul>
  );

}

export default DamageTypeList;
