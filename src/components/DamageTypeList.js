import React from 'react';
//import DamageTypeListItem from '../components/DamageTypeListItem';

class DamageTypeList extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const damageType = e.target.attributes.damageType.value;
    this.props.handleDamageClick(damageType);
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
      <li onClick={this.handleClick} key={i} damagetype={damageType}>{damageType}</li>
    );

    return (
      <ul className="damage-types">
        {damageTypeList}
      </ul>
    );
  }
}

export default DamageTypeList;
