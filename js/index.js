

function userLoad2(){
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(data => displayUser2(data));
}


function displayUser2(users){
    const ul = document.getElementById('user-list');

    for(const user of users){
        const li = document.createElement('li');
        li.innerText = user.email;

        ul.appendChild(li);
    }


}