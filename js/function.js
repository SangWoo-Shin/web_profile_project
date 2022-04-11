const {profile} = window;

function createProfileCard(profile) {
    const information = document.getElementById("profile");
    information.innerHTML="";

    profile.forEach((elem) => {
    
        const card = doucment.createElement("div");
        card.classList.add("card");

        const P_image = document.createElement("div");
        P_image.classList.add("profile-img");

        const picture = document.createElement("img");
        picture.src = elem.imageUrl;
        P_image.appendChild(picture);

        const P_content = document.createElement("div");
        P_content.classList.add("profile-content");

        const Name = document.createElement("h1");
        Name.innerText = elem.name;

        const Position = document.createElement("h2");
        Position.innerText = elem.position;

        P_content.append(Name,Position);
        card.append(P_image,P_content);
        information.appendChild(card);
    });
    
    return information;
}

function select()
{
    if(document.getElementById('hiring').checked)
    {
        document.getElementById('hr').style.display = "block";
    }
    else
    {
        document.getElementById('hr').style.display = "none";
    }
    return;
}

function init() {
    createProfileCard(profile);
}

window.onload = () => init();