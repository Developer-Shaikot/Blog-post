import React from 'react';
import { Button } from 'react-bootstrap';

const BlogsDetail = (props) => {

    const { title, date, content,_id } = props.post;

    return (
        <div>
            <div class="container">

                <div >

                    <div class="col p-2">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{title}</h5>
                                <small class="card-title text-secondary">{date}</small>
                                <p class="card-text">To view Content click to bellow view button.</p>
                                <Button variant="primary" onClick={() => {window.location.href=`/singleblog/${_id}`}} >
                                View-Content</Button>
                               
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogsDetail;