// run 'npm init' and accept all the defaults
// run 'npm install node-fetch'
// run 'npm pkg set type=module'

import fetch from 'node-fetch'
globalThis.fetch = fetch

//a) Write a new version of this function using async/await
async function fetchURLData(url) {  //add async before the function
    try {
        let response = await fetch(url)
        
        if (response.status === 200) {
            let data = await response.json();
            return data;
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    } catch (error) {
        throw error
    }
    //return fetchPromise; 
}

//b) Test both functions with valid and invalid URLs
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log("Valid URL:", data))
    .catch(error => console.error(error.message));

fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log("Invalid URL:", data))
    .catch(error => console.error(error.message));