

function userLoad(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(user => displayUser(user));
}

function displayUser(user){
console.log(user);
}