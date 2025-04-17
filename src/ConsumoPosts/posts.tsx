import React, {useState, useEffect} from 'react';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const Post = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((data: Post[]) => setPosts(data))
        .catch(error => console.log("Erro ao trazer os dados", error))
    },[])

    return(
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post =>(
                     <li key={post.id}>
                     <h2>{post.title}</h2>
                     <p>{post.body}</p>
                     <p>{post.userId}</p>
                 </li>
                ))}
            </ul>
        </div>
    )
}
export default Post;