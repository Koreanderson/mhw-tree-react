import React from 'react';
import WeaponTypeListItem from '../components/WeaponTypeListItem';

class WeaponTypeList extends React.Component {

  constructor(props) {
    super(props);
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
      <WeaponTypeListItem weaponType={weaponType} key={i} />
    );

    return (
      <ul className="weapon-types">
        {weaponTypeList}
      </ul>
    );
  }
}

export default WeaponTypeList;
