import React from 'react';
import styled from 'styled-components';

class WeaponTypeList extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const weaponType = e.target.attributes.weapontype.value;
    this.props.handleWeaponClick(weaponType);
  }

  render() {
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

    const currentWeaponType = this.props.selectedWeaponType;
    console.log(this.props.selectedWeaponType);


    const weaponTypeList = weaponTypes.map((weaponType,i) => 
      <li className={(currentWeaponType == weaponType ? 'selected' : '' )} onClick={this.handleClick} key={i} weapontype={weaponType}>{weaponType}</li>
    );

    return (
      <Ul className="weapon-types">
        {weaponTypeList}
      </Ul>
    );
  }
}

export default WeaponTypeList;
