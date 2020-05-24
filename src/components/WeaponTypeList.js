import React from 'react';
import styled from 'styled-components';

const WeaponTypeList = (props) => {
  const weaponTypes = [
    'great-sword',
    'long-sword',
    'sword-and-shield',
    'dual-blades',
    'hammer',
    'hunting-horn',
    'lance',
    'gunlance',
    'switch-axe',
    'charge-blade',
    'insect-glaive',
    'light-bowgun',
    'heavy-bowgun',
    'bow'
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
  const currentWeaponType = props.selectedWeaponType;

  const handleClick = (e) => {
    const weaponType = e.target.attributes.weapontype.value;
    props.handleWeaponClick(weaponType);
  }

  const weaponTypeList = weaponTypes.map((weaponType,i) => {
    return (
    <li className={(currentWeaponType == weaponType ? 'selected' : '' )} onClick={handleClick} key={i} weapontype={weaponType}>{weaponType}</li>
    );
  
  });

  return (
    <Ul className="weapon-types">
      {weaponTypeList}
    </Ul>
  );
}

export default WeaponTypeList;
