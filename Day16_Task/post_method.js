async function createNewPost() {
    try {
        let newPost = {
            title: 'My New Post',
            body: 'This is my new Post...',
        };
        
        let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(newPost) 
        });

        let result = await response.json();
        console.log(result);
        
    } catch (error) {
        console.log(error.message);
    }
}
createNewPost();