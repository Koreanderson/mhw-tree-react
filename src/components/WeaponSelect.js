import React, { useState } from 'react';
import styled from 'styled-components';
import DamageTypeList from '../components/DamageTypeList';
import Inventory from '../components/Inventory';
import WeaponList from '../components/WeaponList';
import WeaponTypeList from '../components/WeaponTypeList';
import Wishlist from '../components/Wishlist';

const WeaponSelect = (props) => {
  const [weaponType, setWeaponType] = useState('great-sword');
  const [damageType, setDamageType] = useState('poison');
  const [filteredWeaponList, setFilteredWeaponList] = useState([]);
  const [inventoryList, setInventoryList] = useState([]);

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
  const setInventoryFromLocalStorage = () => {
    console.log('Setting inventory from local storage...');

    const localStorageInventory = localStorage.getItem('inventory').split(',');
    //const inventory = this.state.inventoryList;
    const inventory = inventoryList;

    if(!localStorage.getItem('inventory')) {
      // No Inventory Set
      localStorage.setItem('inventory', inventoryList);
    } else if(inventory != localStorageInventory)  {
      // If state and local storage differ, update state
      //this.setState({'inventoryList':localStorageInventory});
      setInventoryList(localStorageInventory);
    }
    console.log('Done.');
    
  }

  const removeItemFromInventory = (item) => {
    console.log('removing: ' + item);
  }

  const storeInventory = () => {
    const localStorageInventory = localStorage.getItem('inventory').split(',');
    //const inventory = this.state.inventoryList;
    const inventory = inventoryList;

    if(inventory != localStorageInventory)  {
      localStorage.setItem('inventory', inventory);
    }
  }
  const getWeaponResults = async () => {
    //const damageType = this.state.damageType;
    //const weaponType = this.state.weaponType;
    const url = 'https://mhw-db.com/weapons?q={"type":"' + weaponType + '","elements.type":"' + damageType + '"}';
    const response = await fetch(url);
    const json = await response.json();
    //this.setState({filteredWeaponList: json});
    setFilteredWeaponList(json);
  }

  const addItemToInventory = (item) => {
    let inventory = inventoryList;
    inventory.push(item);
    console.log(inventory);
    setInventoryList(inventory);
    //this.setState({inventoryList: inventory});

    console.log('adding: ' + item + ' to inventory');
    this.setInventoryFromLocalStorage();
    this.storeInventory();

  }

  const handleDamageClick = (damageType) => {
    setDamageType(damageType);
  }

  componentDidMount() {
    this.setInventoryFromLocalStorage();
  }

  componentDidUpdate(prevProps, prevState) {
    this.displayWeaponResults();
  }

  setWeaponType(weaponType) {
    this.setState({weaponType: weaponType});
  }

  return(
    <div>
      <Row>
        <Button onClick={getWeaponResults}>Show Results</Button>
      </Row>
      <Row>
        <Inventory handleInventoryItemClick={removeItemFromInventory} inventoryList={state.inventoryList} />
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

export default WeaponSelect;
