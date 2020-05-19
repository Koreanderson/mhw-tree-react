import React from 'react';
import styled from 'styled-components';

class WeaponList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const selectedWeaponList = this.props.selectedWeaponList;
    const Ul = styled.ul`
      list-style-type: none;
      text-align: left;
      button {
        margin: 5px;
      }
    `
    const Button = styled.button`
      background: rgba(20, 20, 20, 0.5);
      border: 1px solid #ffffff;
      color: white;
      cursor: pointer;
      font-family: 'Noto Sans', sans-serif;
      letter-spacing: 1px;
      margin: 0 auto;
      text-transform: uppercase;
      padding: 5px 10px;
      &:hover {
        color: #CFEE1D;
        border-color: #CFEE1D;
      }
    `

    const selectedWeaponListEl = selectedWeaponList.map((weapon, i) => 
      <li>
        {weapon.name}
        <Button>Add to Inventory</Button>
        <Button>Add to Wishlist</Button>
      </li>
      //this is firing twice on render. WHY?
    );

    return(
      <Ul>
        {selectedWeaponListEl}
      </Ul>
    );
  }
}

export default WeaponList;
