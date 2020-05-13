import React from 'react';
import styled from 'styled-components';

class WeaponTypeListItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const icon = './icons/' + this.props.weaponType + '.png';
    const Item = styled.li`
      align-items: center;
      color: white;
      display: flex;
      margin: 1em 0;
      list-style: none;
    `

    return (
      <Item onClick={this.handleClick}><img style={{width: '40px', height: '40px'}} src={icon}/>{this.props.weaponType}</Item>
    );
  }

  handleClick(e) {
    console.log(this.props.weaponType);
  }
}

export default WeaponTypeListItem;
