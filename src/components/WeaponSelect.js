import React from 'react';
import styled from 'styled-components';
import WeaponTypeList from '../components/WeaponTypeList'
import DamageTypeList from '../components/DamageTypeList'

class WeaponSelect extends React.Component {
  constructor(props) {
    super(props);
    this.buildUrl = this.buildUrl.bind(this);
    this.setWeaponType = this.setWeaponType.bind(this);
    this.setDamageType = this.setWeaponType.bind(this);
    this.state = {
      weaponType: 'great-sword',
      damageType: 'poison'
    }
  }
  render() {
    console.log(this.state);
    const Row = styled.div`
      display: flex;
    `
    return(
      <Row >
        <WeaponTypeList handleWeaponClick={this.setWeaponType}/>
        <DamageTypeList handleDamageClick={this.setDamageType} />
      </Row>
    );
  }

  setWeaponType(weaponType) {
    this.setState({weaponType: weaponType});
  }

  setDamageType(damageType) {
    this.setState({damageType: damageType});
  }

  buildUrl() {

  }
}
export default WeaponSelect;
