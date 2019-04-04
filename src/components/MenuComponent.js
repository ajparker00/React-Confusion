/* In this exercise, we swapped out the reactstrap Media elements for a list of Cards to display the information in the Menu component,
 as well as the details of a selected dish. We also demonstrated lifting state from the Menu component up to its parent component,
  App, by removing the dishes data from the Menu component's state and having it receive the data as props from App instead.
*/

import React, { Component } from 'react';
import {
  Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import DishDetail from "./DishdetailComponent";




class Menu extends Component {
  constructor(props) {
    super(props);
    
    /*this.state = {
      selectedDish: null
    };*/
  }

 /* onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }*/
  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else
      return (
        <div></div>
      );
  }


  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
         <Card key={dish.id}
            onClick={() => this.props.onClick(dish.id)}>
          {/* <Card key={dish.id} */}
            {/* onClick={() => this.onDishSelect(dish)}> */}
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <div className="row">
          {/* <DishDetail selectedDish={this.state.selectedDish} /> */}
        </div>
      </div>

    );
  }
}

export default Menu;