import React, {Component} from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
  } from 'reactstrap';

class DishDetail extends Component {
    render() {
        if (this.props.selectedDish != null)
            return (
                <div className="col-12 col-md-5 m-1">
                <Card key={this.props.selectedDish.id}>
                <CardImg width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                <CardImgOverlay>
                    <CardTitle>{this.props.selectedDish.name}</CardTitle>
                </CardImgOverlay>
                </Card>
            </div>
            );
        else
            return (
                <div></div>
        );
    }
    
}

export default DishDetail;
