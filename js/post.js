

function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => displayPosts(data))

}

/* 
1.get the element  where you want to add the new elements
2.create child element 
3. set innerText or InnerHtml
4.apeenchild
*/

function displayPosts(posts){


    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        const div = document.createElement('div');
        div.innerHTML = `
        <h4>user- ${post.id}</4>
        <h5>Post: title ${post.title} </5>
        <p>Post Description : ${post.body} </p>

        `
        postContainer.appendChild(div)

    }
}

loadPost();