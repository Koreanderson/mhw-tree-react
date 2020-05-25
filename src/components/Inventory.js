import React, {useContext} from 'react';
import styled from 'styled-components';
import InventoryContext from '../components/InventoryContext';

const Inventory = (props) => {
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

  const handleClick = (weapon) => {
    props.handleInventoryItemClick(weapon);
  }

  const inventory = useContext(InventoryContext);
  console.log(inventory);
  //console.log('inventory list');
  //console.log(inventory.inventoryList);
  if (inventory.inventoryList.size > 0) {
    const inventoryList = inventory.inventoryList.map((weapon, i ) =>
      <li key={i}>
        <span>{weapon} </span>
        <Button onClick={()=>handleClick(weapon)}> Remove</Button>
      </li>
    );
  } else {
    const inventoryList = 'empty';
  }

  return(
    <div>
      Inventory
      <Ul>
      </Ul>
    </div>
  );
}

export default Inventory;
