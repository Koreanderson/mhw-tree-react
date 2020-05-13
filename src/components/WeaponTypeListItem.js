import React from 'react';

class WeaponTypeListItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const icon = './icons/' + this.props.weaponType + '.png';

    return (
      <li className="icon--weapon" onClick={this.handleClick}><img style={{width: '40px', height: '40px'}} src={icon}/>{this.props.weaponType}</li>
    );
  }

  handleClick(e) {
    console.log(this.props.weaponType);
  }
}

export default WeaponTypeListItem;
