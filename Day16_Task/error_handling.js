async function fetchUser() {
    try {
        const response = await fetch('https://api.com'); // broken url
        
        if (!response.ok) {
            throw new Error(response.status);
        }
        
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
}
fetchUser();