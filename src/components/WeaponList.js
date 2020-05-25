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
  const { inventory, setInventory } = useContext(InventoryContext);
  const inventoryContext = useContext(InventoryContext);
  const inventoryList = inventoryContext.inventoryList;

  const selectedWeaponList = props.selectedWeaponList;

  const addWeaponToInventory = (weapon, inventoryContext) => {
    props.inventoryAddAction(weapon);
    let newInventory = inventoryContext.inventoryList; 
    newInventory.push(weapon);
    inventoryContext.setInventoryList(newInventory);
  }


  const selectedWeaponListEl = selectedWeaponList.map((weapon, i) => {
    const inInventory = inventoryList.indexOf(weapon.name) > -1;

    return( 
    <InventoryContext.Consumer>
      {(inventoryContext) => (
      <li key={i}>
        {weapon.name}
        {!inInventory && 
          <Button 
            weapon={weapon.name} 
            onClick={()=>addWeaponToInventory(weapon.name, inventoryContext )}
          >
            Add to Inventory
          </Button>
        }
        <Button>Add to Wishlist</Button>
      </li>
      )}
    </InventoryContext.Consumer>
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


}

export default WeaponList;
