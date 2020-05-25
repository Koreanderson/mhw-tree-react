import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DamageTypeList from '../components/DamageTypeList';
import Inventory from '../components/Inventory';
import WeaponList from '../components/WeaponList';
import WeaponTypeList from '../components/WeaponTypeList';
import Wishlist from '../components/Wishlist';

const WeaponSelect = (props) => {


  const localStorageInventory = [];
  const [weaponType, setWeaponType] = useState('great-sword');
  const [damageType, setDamageType] = useState('poison');
  const [filteredWeaponList, setFilteredWeaponList] = useState([]);
  //const [inventoryList, setInventoryList] = useState(localStorageInventory);

  const [inventoryList, setInventoryList] = React.useState(() => {
    const localStorageInventory = window.localStorage.getItem('inventory');
    if(localStorageInventory !== null) {
      return localStorageInventory.split(',');
    } else {
      return []
    }
  });

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

  const removeItemFromInventory = (item) => {
    console.log('removing: ' + item);
  }

  const setInventoryFromLocalStorage = () => {
    console.log('setting inventory');
    console.log(inventoryList);
    console.log(localStorageInventory);
    if(inventoryList != localStorageInventory)  {
      console.log('not equal');
      //setInventoryList(localStorageInventory);
    }
  }

  const storeInventory = () => {
    const localStorageInventory = localStorage.getItem('inventory').split(',');
    const inventory = inventoryList;

    if(inventory != localStorageInventory)  {
      localStorage.setItem('inventory', inventory);
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
    inventory.push(item);
    //setInventoryList(inventory);
    //this.setState({inventoryList: inventory});

    console.log('adding: ' + item + ' to inventory');
    //setInventoryFromLocalStorage();
    storeInventory();

  }

  const handleDamageClick = (damageType) => {
    setDamageType(damageType);
  }

  useEffect(() => {    

  });

  const render = () => {


    //setInventoryFromLocalStorage();
    //setWeaponType(weaponType);
    return (
      <div>
        <Row>
          <Button onClick={getWeaponResults}>Show Results</Button>
        </Row>
        <Row>
          <Inventory handleInventoryItemClick={removeItemFromInventory} inventoryList={inventoryList} />
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
      </div>
    );
  }
  return render();
}

export default WeaponSelect;
