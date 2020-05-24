import React from 'react';
import styled from 'styled-components';

class SelectedWeaponList extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const Button = styled.div`
      background: none;
      border: 2px solid white;
      cursor: pointer;
      padding: 10px;
    `

    return(
      <div>
        <Button onClick={this.handleClick}>Dope Button</Button>
        <ul>
        </ul>
      </div>
    );

  }

  handleClick() {
    console.log('click');
  }
}

export default SelectedWeaponList;
