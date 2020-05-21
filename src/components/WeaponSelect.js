import React from 'react';
import styled from 'styled-components';
import DamageTypeList from '../components/DamageTypeList';
import Inventory from '../components/Inventory';
import SelectedWeaponList from '../components/SelectedWeaponList';
import WeaponList from '../components/WeaponList';
import WeaponTypeList from '../components/WeaponTypeList';
import Wishlist from '../components/Wishlist';

class WeaponSelect extends React.Component {

  constructor(props) {
    super(props);
    this.setWeaponType = this.setWeaponType.bind(this);
    this.setDamageType = this.setDamageType.bind(this);
    this.getWeaponResults = this.getWeaponResults.bind(this);
    this.addItemToInventory = this.addItemToInventory.bind(this);
    this.setInventoryToLocalStorage = this.setInventoryToLocalStorage.bind(this);
    this.state = {
      weaponType: 'great-sword',
      damageType: 'poison',
      filteredWeaponList: [],
      inventoryList: ['Dear Hecatel', 'Buster Blade 3']
    }
  }

  render() {

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


    return(
      <div>
        <Row>
          <Button onClick={this.getWeaponResults}>Show Results</Button>
        </Row>
        <Row>
          <Inventory handleInventoryItemClick={this.removeItemFromInventory} inventoryList={this.state.inventoryList} />
          <Wishlist />
        </Row>
        <Row >
          <WeaponTypeList 
            handleWeaponClick={this.setWeaponType} 
            selectedWeaponType={this.state.weaponType}
          />
          <DamageTypeList 
            handleDamageClick={this.setDamageType} 
            selectedDamageType={this.state.damageType}
          />
          <WeaponList 
            selectedWeaponList={this.state.filteredWeaponList} 
            inventoryAddAction={this.addItemToInventory}
          />
        </Row>
      </div>
    );

  }

  componentDidUpdate(prevProps, prevState) {
    this.displayWeaponResults();
  }

  setWeaponType(weaponType) {
    this.setState({weaponType: weaponType});
  }

  getInventoryFromLocalStorage() {

    const localStorageInventory = localStorage.getItem('inventory').split(',');
    const inventory = this.state.inventoryList;

    if(!localStorage.getItem('inventory')) {
      // No Inventory Set
      localStorage.setItem('inventory', this.state.inventoryList);
    } else if(inventory != localStorageInventory)  {
      // If state and local storage differ, update state
      this.setState({'inventoryList':localStorageInventory});
    }
  }

  displayWeaponResults() {
    //console.log('display weapon results');
    const weaponList = this.state.filteredWeaponList;
    weaponList.map((weapon) => {
      //console.log(weapon);
    });
    //console.log('display weapon list state' + weaponList);
  }

  addItemToInventory(item) {
    console.log(this.state.inventoryList);
    let inventory = this.state.inventoryList;
    inventory.push(item);
    console.log(inventory);
    this.setState({inventoryList: inventory});

    console.log('adding: ' + item + ' to inventory');
    this.setInventoryToLocalStorage();

  }

  removeItemFromInventory(item) {
    console.log('removing: ' + item);
  }

  setDamageType(damageType) {
    this.setState({damageType: damageType});
  }

  async getWeaponResults() {

    const damageType = this.state.damageType;
    const weaponType = this.state.weaponType;
    const url = 'https://mhw-db.com/weapons?q={"type":"' + weaponType + '","elements.type":"' + damageType + '"}';
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    this.setState({filteredWeaponList: json});
  }


}

export default WeaponSelect;
