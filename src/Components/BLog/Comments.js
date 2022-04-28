import React, { useEffect, useState } from 'react';
import CommentData from './CommentData/CommentData';


const Comments = () => {

    const [comments, setComments] = useState([])



    useEffect(() => {
        fetch('https://floating-headland-38925.herokuapp.com/addComments')
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])

    return (
        <div>
            <div className="row">

                <div className='cmnt mb-5'>
                    {
                        comments.length === 0 && <div className="container text-white">...Loading</div>
                    }

                    {
                    comments.map(Show => <CommentData className="cmnt" Show={Show}>

                    </CommentData>)
                
            }

                </div>

            </div>
            <footer class="pra text-center mt-5 pt-3 mb-3 ml-5 justify-content-end text-black mb-1">@Shaikot {(new Date()).getFullYear()} Copyright All Rights Reserved</footer>
             <br />
        </div>
    );
};

export default Comments;