const divInformations = document.querySelector('.informations')
const divError = document.querySelector('.error')
const imageUser = document.querySelector(".user-image");
const titleUser = document.querySelector(".user-name");
const usernameUser = document.querySelector(".user-username");
const descriptionUser = document.querySelector(".user-description");
const followersUser =  document.querySelector(".user-followers");
const repositoriesUser =  document.querySelector(".user-repositories");
const input = document.querySelector("#input");  
  

const eventInput = async (event) => {
    
    let search = input.value;

    const response = await fetch(`https://api.github.com/users/${search}`)
    const result = await response.json()

    if (response.status == 200){

        divInformations.style.display = "block"
        imageUser.setAttribute('src', result.avatar_url)
        titleUser.textContent = result.name
        usernameUser.textContent = result.login
        descriptionUser.textContent = result.bio
        followersUser.textContent = result.followers
        repositoriesUser.textContent = result.public_repos
    }
    else{
        divInformations.style.display = "none"
        divError.style.display = "flex"
    } 
}

addEventListener("change", eventInput)    