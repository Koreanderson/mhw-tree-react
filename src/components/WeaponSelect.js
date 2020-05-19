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
    this.state = {
      weaponType: 'great-sword',
      damageType: 'poison',
      filteredWeaponList: []
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
          <Inventory />
          <Wishlist />
        </Row>
        <Row >
          <WeaponTypeList handleWeaponClick={this.setWeaponType} selectedWeaponType={this.state.weaponType}/>
          <DamageTypeList handleDamageClick={this.setDamageType} selectedDamageType={this.state.damageType}/>
          <WeaponList selectedWeaponList={this.state.filteredWeaponList} />
        </Row>
      </div>
    );

  }

  componentDidUpdate(prevProps, prevState) {
    console.log('state: ' + this.state.filteredWeaponList[0]);
    this.displayWeaponResults();
  }

  setWeaponType(weaponType) {
    this.setState({weaponType: weaponType});
  }

  displayWeaponResults() {
    //console.log('display weapon results');
    const weaponList = this.state.filteredWeaponList;
    weaponList.map((weapon) => {
      //console.log(weapon);
    });
    //console.log('display weapon list state' + weaponList);
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

    // shit is firing during state update  
    // So don't change state here...

  }


}

export default WeaponSelect;
