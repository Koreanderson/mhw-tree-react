import React from 'react';
import styled from 'styled-components';

class DamageTypeListItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const icon = './icons/' + this.props.damageType + '.png';
    const Item = styled.li`
      align-items: center;
      color: white;
      display: flex;
      margin: 1em 0;
      list-style: none;
    `

    return (
      <Item onClick={this.handleClick}><img style={{width: '40px', height: '40px'}} src={icon}/>{this.props.damageType}</Item>
    );
  }

  handleClick(e) {
    console.log(this.props.damageType);
  }
}

export default DamageTypeListItem;
