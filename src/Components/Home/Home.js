import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Post from '../BLog/Post';


const Home = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const onSubmit = data => {
        const blogData = {
            title: data.title,
            date: data.date,
            content: data.content,

        }
        const url = `https://floating-headland-38925.herokuapp.com/addPosts`

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blogData)
        })
        // .then(res => console.log('server side responded', res))
        .then(
            function (response) {
                //console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                alert('Post uploaded successfully!');
                window.location.reload();
            },
            function (error) {
                //console.log("FAILED", error);
                alert('FAILED!' + error);
            }
        );
    };



    return (
        <div>
            <div className="mt-5 d-flex justify-content-end m-5">
                <Button variant="danger" onClick={handleShow}>
                    Create Post
                </Button>
                <div>
                    <>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Post your content here....</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label htmlFor="">Title</label>
                                    <input className="form-control mt-1" placeholder="Title of your content"{...register("title")} />

                                    {errors.message && <span className="error">Name is required</span>}
                                    <br />

                                    <label htmlFor="">Date</label>
                                    <input className="form-control mt-1" placeholder="dd/mm/yy" {...register("date")} />

                                    {errors.message && <span className="error">Date is required</span>}
                                    <br />


                                    <label className="pra">Content</label>
                                    <textarea placeholder="Write your content...." {...register("content", { required: true })} className="form-control" name='content' rows="5" id="content" />

                                    {errors.message && <span className="error">Description is required</span>}
                                    <br />



                                    <input className="btn-dark m-3" type="submit" />

                                    <p style={{ color: 'red' }}>{watch.error}</p>
                                    {watch.success && <p style={{ color: 'green' }}>User successfully</p>}

                                </form>


                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={() => window.location.reload()}>
                                    CLOSE
                                </Button>

                            </Modal.Footer>
                        </Modal>
                    </>

                </div >
            </div>
            <Post />
            <br />
            <footer class="pra text-center mt-5 pt-3 mb-3 ml-5 justify-content-end text-black mb-1">@Shaikot {(new Date()).getFullYear()} Copyright All Rights Reserved</footer>
            <br />
        </div>
    );
};

export default Home;