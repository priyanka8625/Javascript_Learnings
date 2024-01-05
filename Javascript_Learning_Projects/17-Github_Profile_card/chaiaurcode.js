const profilePic = document.getElementById("profilePic");
const name = document.getElementById("name");
const about = document.getElementById("about");

//get response from github api using XHR i.e. XMLHttpRequest object

const requestUrl = 'https://api.github.com/users/priyanka8625'
//create object
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText)
        console.log(typeof data);
        let profilePic_data = data.avatar_url;
        let name_data = data.name;
        let about_data = data.bio;
        profilePic.src = profilePic_data;
        name.textContent = name_data;
        about.innerHTML = `<p>${about_data}</p><p>Followers : ${data.followers}</p><p>Following : ${data.following}</p>`;
    }
}
xhr.send();//send request