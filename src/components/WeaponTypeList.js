import React from 'react';

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

    const weaponTypeList = weaponTypes.map((weaponType,i) => 
      <li onClick={this.handleClick} key={i} weapontype={weaponType}>{weaponType}</li>
    );

    return (
      <ul className="weapon-types">
        {weaponTypeList}
      </ul>
    );
  }
}

export default WeaponTypeList;
