import axios from "axios";
import { Fragment, useState } from "react";
import { useEffect } from "react";


const baseURL = "https://jsonplaceholder.typicode.com/posts";
// Axios instance
const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
});

function BasicAxios() {
    
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);

    //GET using useEffect
    useEffect(() => {
        client.get(`/1`).then((response) => setPost(response.data));
    }, []);

    //POST using then callback
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

    //PUT using then callback
    function updatePost() {
        axios.put(`${baseURL}/1`, {
            title: "Hello Jellyfish!",
            body: "This is an updated post."
        })
        .then((response) => {
            setPost(response.data);
        });
    }

    //DELETE using then callback
    function deletePost() {
        axios.delete(`${baseURL}/4`)
        .then(() => {
            alert("Post deleted!");
            setPost(null);
        });
    }

    //Error handling in Axios using then callback
    function errorHandling() {
        axios.get(`${baseURL}/asdf`).then((response) => {
            setPost(response.data);
        })
        .catch((error) => {setError(error)});
    }

    // Using async and await on Axios

    //GET request
    async function asyncGetData() {
        try {
            const response = await client.get("/3");
            setPost(response.data)
        }
        catch(error) {
            console.log(error);
        }
    }

    //PATCH request
    async function patchData() {
        const response = await client.patch("/2", {
            title: "Hello little Jelly!",
            body: "I like Jelly!"
        });
        
        setPost(response.data);
    }

    return (
        <Fragment>
            <br/>
            <br/>

            {error && ( <Fragment><p style={{color: "darkred", fontWeight: "bold"}}>{error.message}</p></Fragment>)}

            {post ? (<Fragment>
                <h2>{post.id}</h2>
                <h1>{post.title}</h1>
                <p><b>{post.body}</b></p>
            </Fragment>) :
            (<Fragment>
                <h2>"No post!"</h2>
            </Fragment>)}
            
            <button onClick={createPost}>Create Post</button>
            <button onClick={updatePost}>Update Post</button>
            <button onClick={patchData}>Update Post use Patch</button>
            <button onClick={deletePost}>Delete post</button>
            <button onClick={errorHandling}>Test Error Request</button>
            <button onClick={asyncGetData}>GET using async and await</button>
        </Fragment>
    );
}

export default BasicAxios;