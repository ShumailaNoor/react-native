async function getPostsAndComments() {
    try {
        let postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await postsResponse.json();
               
        let firstPost = posts[0];
        console.log('First post title:', firstPost.title);
        
        let commentsResponse = await fetch('https://jsonplaceholder.typicode.com/posts/' + firstPost.id + '/comments');
        let comments = await commentsResponse.json();
        
        if (comments.length > 0) {
            console.log('First comment:', comments[0].body);
        }
        
    } catch (error) {
        console.log(error.message);
    }
}
getPostsAndComments();