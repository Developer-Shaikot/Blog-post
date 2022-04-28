import React from 'react';
import { Card } from 'react-bootstrap';
import "./CommentData.css"

const CommentData = (props) => {

    const { name, content } = props.Show
  
    return (
        <div className='comments mb-3'>
           

            <Card >
                <Card.Header>{name}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {content}
                            {' '}
                        </p>
                        <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
            <br/>
            
        </div>
    );
};

export default CommentData;