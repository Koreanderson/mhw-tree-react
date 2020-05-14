import React from 'react';
import styled from 'styled-components';
import WeaponTypeList from '../components/WeaponTypeList'
import DamageTypeList from '../components/DamageTypeList'

class WeaponSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weaponType: '',
      damageType: ''
    }
  }
  render() {
    const Row = styled.div`
      display: flex;
    `
    return(
      <Row>
        <WeaponTypeList />
        <DamageTypeList />
      </Row>
    );
  }
}
export default WeaponSelect;
