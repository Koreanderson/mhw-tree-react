import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import DamageTypeList from '../components/DamageTypeList';
import Inventory from '../components/Inventory';
import WeaponList from '../components/WeaponList';
import WeaponTypeList from '../components/WeaponTypeList';
import Wishlist from '../components/Wishlist';
import InventoryContext from '../components/InventoryContext';


const WeaponSelect = (props) => {

  const [weaponType, setWeaponType] = useState('great-sword');
  const [damageType, setDamageType] = useState('poison');
  const [filteredWeaponList, setFilteredWeaponList] = useState([]);

  const [inventoryList, setInventoryList] = React.useState(() => {
    const localStorageInventory = window.localStorage.getItem('inventory');
    if(localStorageInventory !== null) {
      return localStorageInventory.split(',');
    } else {
      return []
    }
  });

  const inventoryContext = useContext(InventoryContext);

  const value = {inventoryList, setInventoryList};
  console.log(value);

  const Row = styled.div`
    display: flex;
  `

  const Button = styled.button`

    background: rgba(20, 20, 20, 0.5);
    border: 1px solid #ffffff;
    color: white;
    cursor: pointer;
    display: block;
    font-family: 'Noto Sans', sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
    margin: 0 auto;
    text-transform: uppercase;
    padding: 10px 20px;
    &:hover {
      color: #CFEE1D;
      border-color: #CFEE1D;
    }
  `

  const localStorageInventory = localStorage.getItem('inventory') ? localStorage.getItem('inventory').split(',') : [];

  const removeItemFromInventory = (item) => {
    console.log('removing: ' + item);
  }

  const storeInventory = () => {

    const localStorageInventory = localStorage.getItem('inventory') ? localStorage.getItem('inventory').split(',') : [];

    if(inventoryList != localStorageInventory)  {
      localStorage.setItem('inventory', inventoryList);
    }
    setInventoryList(localStorageInventory);
  }

  const getWeaponResults = async () => {
    const url = 'https://mhw-db.com/weapons?q={"type":"' + weaponType + '","elements.type":"' + damageType + '"}';
    const response = await fetch(url);
    const json = await response.json();
    setFilteredWeaponList(json);
  }

  const addItemToInventory = (item) => {
    let inventory = inventoryList;
    inventoryList.push(item);
    setInventoryList(inventory);
    console.log('adding: ' + item + ' to inventory');
    console.log(inventoryList);
    storeInventory();
  }

  const handleDamageClick = (damageType) => {
    setDamageType(damageType);
  }

  const render = () => {

    return (
      <div>
        <InventoryContext.Provider value={value}>
          <Row>
            <Button onClick={getWeaponResults}>Show Results</Button>
          </Row>
          <Row>
            <Wishlist />
          </Row>
          <Row >
            <WeaponTypeList 
              handleWeaponClick={setWeaponType} 
              selectedWeaponType={weaponType}
            />
            <DamageTypeList 
              handleDamageClick={handleDamageClick} 
              selectedDamageType={damageType}
            />
            <WeaponList 
              currentInventory={inventoryList}
              selectedWeaponList={filteredWeaponList} 
              inventoryAddAction={addItemToInventory}
            />
          </Row>
        </InventoryContext.Provider>
      </div>
    );
  }
  return render();
}

export default WeaponSelect;
