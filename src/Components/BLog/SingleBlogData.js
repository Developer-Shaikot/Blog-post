import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Comments from './Comments';
import Commet from './Commet';

const SingleBlogData = (props) => {

   

    const { title, content, date } = props.blog
    
    return (
        <div>
            <div className="d-flex justify-content-center m-5" >
                <div class=" w-75">
                    <div class="-body">
                        <h2 class="-title">{title}</h2>
                        <p >{content}</p>
                        <div className="d-flex justify-content-end text-primary">
                            <p>Posted on - {date}
                            </p></div>

                    </div>
                    <Commet/>
                    <br/>
                    <Comments/>
                </div>

            </div>
        </div>
    );
};

export default SingleBlogData;