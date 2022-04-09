window.profile = [
    {
        name: "Sangwoo Shin",
        position: "Web Developer, Soft Engineer",
        imageUrl: "./profile.jpg"
    }
]

const profile = window;

function createProfileCard(profiles) {
    const profile = document.getElementById("profile");
    profile.innerHTML="";

    const card = doucment.createElement("div");
    card.classList.add("card");

    const P_image = document.createElement("div");
    P_image.classList.add("profile-img");

    const picture = document.createElement("img");
    picture.src = profile.imageUrl;
    P_image.appendChild(picture);

    const P_content = document.createElement("div");
    P_content.classList.add("profile-content");

    const name = document.createElement("h1");
    name.innerText = profile.name;

    const position = document.createElement("h2");
    position.innerText = profile.position;

    P_content.append(name,position);
    card.append(P_image,P_content);
    profile.appendChild(card);

    return profile;
}

function init() {
    createProfileCard(window.profile);
}

window.onload = () => init();