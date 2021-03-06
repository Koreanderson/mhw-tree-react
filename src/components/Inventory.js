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

  const inventoryContext = useContext(InventoryContext);

  //const inventory = props.inventoryList;
  const inventory = useContext(InventoryContext);
  const inventoryList = inventory.map((weapon, i ) =>
    <li key={i}>
      <span>{weapon} </span>
      <Button onClick={()=>handleClick(weapon)}> Remove</Button>
    </li>
  );

  return(
    <div>
      Inventory
      <Ul>
        {inventoryList}
      </Ul>
    </div>
  );
}

export default Inventory;
