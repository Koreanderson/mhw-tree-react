import React from 'react';
import styled from 'styled-components';
import WeaponTypeList from '../components/WeaponTypeList'
import DamageTypeList from '../components/DamageTypeList'

class WeaponSelect extends React.Component {

  constructor(props) {
    super(props);
    this.setWeaponType = this.setWeaponType.bind(this);
    this.setDamageType = this.setWeaponType.bind(this);
    this.getWeaponResults = this.getWeaponResults.bind(this);
    this.state = {
      weaponType: 'great-sword',
      damageType: 'poison'
    }
  }

  render() {

    const Row = styled.div`
      display: flex;
    `


    return(
      <Row >
        <WeaponTypeList handleWeaponClick={this.setWeaponType}/>
        <DamageTypeList handleDamageClick={this.setDamageType}/>
      </Row>
    );

  }

  componentDidUpdate() {
    this.getWeaponResults();
  }

  setWeaponType(weaponType) {
    this.setState({weaponType: weaponType});
  }

  setDamageType(damageType) {
    this.setState({damageType: damageType});
  }

  getWeaponResults() {
    const damageType = this.state.damageType;
    const weaponType = this.state.weaponType;
    const url = 'https://mhw-db.com/weapon?q={"type":"' + weaponType + '","elements.type":"' + damageType + '"}';
    console.log(url);
  }
}
export default WeaponSelect;
