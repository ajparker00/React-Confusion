/* In this exercise, we swapped out the reactstrap Media elements for a list of Cards to display the information in the Menu component,
 as well as the details of a selected dish. We also demonstrated lifting state from the Menu component up to its parent component,
  App, by removing the dishes data from the Menu component's state and having it receive the data as props from App instead.
*/

import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderMenuItem ({dish, onClick}) {
        return (
            <Card>
                <Link to={`/menu/${dish.id}`} >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        );
    }
    
    const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
           return (
                <div className="col-12 col-md-5 m-1" key={dish.id}>                
                    <RenderMenuItem dish={dish} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
    
export default Menu;