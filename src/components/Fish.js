import React from 'react';

class Fish extends React.Component {
  render () {
    const details = this.props.details;
    return (
      <li className="menu-fish">
        <img src={details.image} alt={details.name}/> 
        {details.name}
      </li>
    )
  }
}

export default Fish;