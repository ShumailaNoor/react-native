//--> Display the titles of the first 5 posts in the console.

async function getFivePost() {
    try{
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok){
        throw new Error(response.status);
    }
    let posts = await response.json();
    for (i=0; i<5; i++){
        console.log(`Post ${i+1}: ${posts[i].title}`)
    }
    } catch (error){
       console.error(error.message);
    }
    
}
getFivePost();

//--> Use fetch() to send a new post.
async function addNewPost(newPost){
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts',
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost)
            }
        );
        if (!response.ok){
            throw new Error(response.status);
        }
        let uploadedPost = await response.json();
        console.log("New Post: ", uploadedPost);

    } catch(error){
        console.error(error.message);
    }
}

let newPost = { title: "My Post", body: "Content", userId: 1 };
addNewPost(newPost);

//--> Modify your GET code to handle fetch errors (e.g., log an error if response is not OK).
async function fetchWithErrorHandling() {
    try {
        
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Not Found (404)');
            } else if (response.status === 500) {
                throw new Error('Server error (500)');
            } else {
                throw new Error(`HTTP error status: ${response.status}`);
            }
        }
        
        let posts = await response.json();
        
        console.log(`Successfully fetched ${posts.length} posts`);
         
    } catch (error) {
        console.error(error.message);
    }
}
fetchWithErrorHandling();

