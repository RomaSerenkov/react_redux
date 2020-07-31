import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';

class CarList extends Component{
  showCars(){
    return this.props.cars.map((car) => {
      return (
        <li onClick={() => this.props.select(car)} key={car.id}>{car.name}</li>
      );
    });
  };
  render(){
    return(
      <ol>
        {this.showCars ()}
      </ol>
    );
  };
}

function mapDispatchToProps (dispatch){
  return bindActionCreators({select: select}, dispatch);
}

function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (CarList);
