import React from 'react';
//import WeaponTypeListItem from '../components/WeaponTypeListItem';
import DamageTypeListItem from '../components/DamageTypeListItem';

class DamageTypeList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
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

    const damageTypeList = damageTypes.map((damageType,i) => 
      <DamageTypeListItem damageType={damageType} key={i} />
    );

    return (
      <ul className="damage-types">
        {damageTypeList}
      </ul>
    );
  }
}

export default DamageTypeList;
