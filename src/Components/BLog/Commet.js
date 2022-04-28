import React from 'react';

import { useForm } from 'react-hook-form';



const Commet = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();




    const onSubmit = data => {
        const CommentData = {
            name: data.name,
            content: data.content,

        }
        const url = `https://floating-headland-38925.herokuapp.com/addComments`

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(CommentData)
        })
            .then(res => console.log('server side responded', res))
            .then(
                function (response) {
                    //console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                    alert('comment added successfully!');
                    window.location.reload();

                },
                function (error) {
                    //console.log("FAILED", error);
                    alert('FAILED!' + error);
                }
            );
    };


    


    return (
        <div className="back">
 <div>
                <form className='card p-5' onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='d-flex justify-content-center mb-2'>Add a comment</h2>

                    <input className="form-control mt-1" placeholder="Name"{...register("name")} />

                    {errors.message && <span className="error">Name is required</span>}
                    <br />



                    <textarea placeholder="comment" {...register("content", { required: true })} className="form-control" name='content' rows="5" id="content" />

                    {errors.message && <span className="error">Description is required</span>}
                    <br />



                    <input  className="btn-dark m-3" type="submit" />

                    <p style={{ color: 'red' }}>{watch.error}</p>
                    {watch.success && <p style={{ color: 'green' }}>User successfully</p>}

                </form>
            </div>
          
        
        </div>
    );
};

export default Commet;