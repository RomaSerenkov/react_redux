import React, {Component} from 'react';
import {connect} from 'react-redux';

class DetailsCar extends Component {
    render() {
      if(!this.props.car){
        return(<p>Select a car</p>);
      }
      return (
        <div>
        <h2> {this.props.car.name} </h2>
        <h4> {this.props.car.speed} </h4>
        </div>
      );
    }
}


function mapStateToProps(state) {
  return {
    car: state.activeCar
  };
}

export default connect(mapStateToProps) (DetailsCar);
