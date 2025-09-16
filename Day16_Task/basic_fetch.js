function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function(response) {
            return response.json();
        })
        .then(function(users) {
            for (let i = 1; i < users.length; i++) {
                console.log(`User ${i}: ${users[i].name}`);
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}
fetchUsers();