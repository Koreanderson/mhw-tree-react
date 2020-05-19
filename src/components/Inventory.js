import React from 'react';
import styled from 'styled-components';

class Inventory extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(weapon) {
    this.props.handleInventoryItemClick(weapon);
  }

  render() {
    const Ul = styled.ul`
      list-style-type: none;
      text-align: left;

      li {
        align-items: center;
        display: flex;
      }

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

    const inventory = this.props.inventoryList;
    const inventoryList = inventory.map((weapon, i ) =>
      <li key={i}>
        <span>{weapon} </span>
        <Button onClick={()=>this.handleClick(weapon)}> Remove</Button>
      </li>
    );

    return (
      <div>
        Inventory
        <Ul>
          { inventoryList }
        </Ul>
      </div>
    );
  }
}

export default Inventory;
