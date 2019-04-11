import React from 'react';
//card img overay not working
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDish({ dish }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );

}
//I had to change comment to comments.  Description and comments are not showing up. Looks like I missing map.  My code is different than the teachers
function RenderComments({ comments }) {
	const arrayOfComments = comments;
    const commentList = arrayOfComments.map((eachComment) => {
        return (
            <li key={eachComment.id}>
                <p>{eachComment.comment}</p>
                <p>--{eachComment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(eachComment.date)))}
                </p>
            </li>

        );
    });

    return (<div className="col-12 col-md-5 m-1">
        <h4>
            "Comments"
        </h4>
        <ul className="list-unstyled">
            {commentList}
        </ul>
    </div>);
}
// Updating DishDetail Component and Added breadcrumbs to SPA part 2
const DishDetail = (props) => {
    if (props.dish != null)
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );

    else
        return (
            <div></div>
        );
}



export default DishDetail;