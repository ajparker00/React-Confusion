/* In this exercise, we swapped out the reactstrap Media elements for a list of Cards to display the information in the Menu component,
 as well as the details of a selected dish. We also demonstrated lifting state from the Menu component up to its parent component,
  App, by removing the dishes data from the Menu component's state and having it receive the data as props from App instead.
*/

import React, { Component } from 'react';
import {
  Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle
} from 'reactstrap';


class Menu extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.props.onClick(dish.id)}>
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
      </div>

    );
  }
}

export default Menu;