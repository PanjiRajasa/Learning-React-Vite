import axios from "axios";
import { Fragment, useState } from "react";
import { useEffect } from "react";

function BasicAxios() {
    const baseURL = "https://jsonplaceholder.typicode.com/posts";
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);

    // Axios instance
    const client = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/posts"
    });

    useEffect(() => {
        client.get(`/1`).then((response) => setPost(response.data));
    }, []);

    function createPost() {
        client.post("https://jsonplaceholder.typicode.com/posts", {
            title: "Hello World!",
            body: "This is a new post."
        }).then(
            (response) => {
                setPost(response.data)
            }
        );
    }

    function updatePost() {
        axios.put(`${baseURL}/1`, {
            title: "Hello Jellyfish!",
            body: "This is an updated post."
        })
        .then((response) => {
            setPost(response.data);
        });
    }

    function deletePost() {
        axios.delete(`${baseURL}/4`)
        .then(() => {
            alert("Post deleted!");
            setPost(null);
        });
    }

    function errorHandling() {
        axios.get(`${baseURL}/asdf`).then((response) => {
            setPost(response.data);
        })
        .catch((error) => {setError(error)});
    }

    return (
        <Fragment>
            <br/>
            <br/>

            {error && ( <Fragment><p style={{color: "darkred", fontWeight: "bold"}}>{error.message}</p></Fragment>)}

            {post ? (<Fragment>
                <h2>{post.userId}</h2>
                <h1>{post.title}</h1>
                <p><b>{post.body}</b></p>
            </Fragment>) :
            (<Fragment>
                <h2>"No post!"</h2>
            </Fragment>)}
            
            <button onClick={createPost}>Create Post</button>
            <button onClick={updatePost}>Update Post</button>
            <button onClick={deletePost}>Delete post</button>
            <button onClick={errorHandling}>Test Error Request</button>
        </Fragment>
    );
}

export default BasicAxios;