async function multipleFetch() {
    try {
        let usersPromise = fetch('https://jsonplaceholder.typicode.com/users');
        let postsPromise = fetch('https://jsonplaceholder.typicode.com/posts');

        let responses = await Promise.all([usersPromise, postsPromise]);
        
        let usersResponse = responses[0];
        let postsResponse = responses[1];
        
        let users = await usersResponse.json();
        let posts = await postsResponse.json();
        
          console.log('Number of Users: ', users.length);
        console.log('Number of Posts: ', posts.length);
        console.log('First user\'s name:', users[0].name);
        console.log('First post\'s title:', posts[0].title);
        
    } catch (error) {
        console.log(error.message);
    }
}

multipleFetch();
