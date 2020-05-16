import React from 'react';
import styled from 'styled-components';

class DamageTypeList extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {

    const damageType = e.target.attributes.damageType.value;
    const el = e.target;
    const listItems = document.querySelectorAll('.damage-types--item');

    this.props.handleDamageClick(damageType);
    console.log(damageType);

  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
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

    const Ul = styled.ul`
      list-style-type: none;
      text-align: left;
    `

    const damageTypeList = damageTypes.map((damageType,i) => 
      <li className="damage-types--item" onClick={this.handleClick} key={i} damagetype={damageType}>{damageType}</li>
    );

    return (
      <Ul className="damage-types">
        {damageTypeList}
      </Ul>
    );
  }
}

export default DamageTypeList;