import React from 'react';
//card img overay not working
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';


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
function RenderComments({ comments}) {
    return (
        <li key={comments.id}>
            <p>{comments.comment}</p>
            <p>--{comments.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comments.date)))}
            </p>
        </li>

    );
    

    return (<div className="col-12 col-md-5 m-1">
        <h4>
            "Comments"
        </h4>
        <ul className="list-unstyled">
            {comments}
        </ul>
    </div>);
}
const DishDetail = (props) => {
    if (props.dish != null)
        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.dish.comment} />
                </div>
            </div>
        );

    else
        return (
            <div></div>
        );
}



export default DishDetail;