import React, { useContext } from 'react';
import styled from 'styled-components';
import InventoryContext from '../components/InventoryContext';

const WeaponList = (props) => {
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

  const inventoryContext = useContext(InventoryContext); 
  console.log('in weapon list');
  console.log(inventoryContext);

  const selectedWeaponList = props.selectedWeaponList;
  const currentInventory = props.currentInventory;

  const addWeaponToInventory = (weapon) => {
    props.inventoryAddAction(weapon);
    console.log(inventoryContext);
  }

  const selectedWeaponListEl = selectedWeaponList.map((weapon, i) => {
    const inInventory = currentInventory.indexOf(weapon.name) > -1;
    return( 
      <li key={i}>
        {weapon.name}
        {!inInventory && 
          <Button weapon={weapon.name} onClick={()=>addWeaponToInventory(weapon.name)}>Add to Inventory</Button>
        }
        <Button>Add to Wishlist</Button>
      </li>
    )
  });

  return(
    <InventoryContext.Consumer>
      {inventory => (
      <Ul className='weapon-list'>
        {selectedWeaponListEl}
      </Ul>
      )}
    </InventoryContext.Consumer>
  );

  console.log('current inventory:' + currentInventory);

}

export default WeaponList;
