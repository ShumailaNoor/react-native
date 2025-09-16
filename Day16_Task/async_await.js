async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        
        for (let i = 1; i < users.length; i++) {
            console.log(`User ${i}: ${users[i].name}`);
        }
    } catch (error) {
        console.error(error);
    }
}
fetchUsers();