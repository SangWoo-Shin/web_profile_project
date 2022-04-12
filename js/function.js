
profile = {
    name: "Sangwoo Shin",
    position: "Web Developer",
    imageUrl: "./profile.jpg"
}

    const information = document.getElementById("profile");
    information.innerHTML="";
    information.classList.add("profile");
    const card = document.createElement("div");
    card.classList.add("card");
    const p_image = document.createElement("img");
    p_image.classList.add("image");
    p_image.src = profile.imageUrl
    const p_name = document.createElement("h1");
    p_name.innerText = profile.name;
    const p_position = document.createElement("h2");
    p_position.classList.add("animate-charcter");
    p_position.innerText = profile.position;
    card.append(p_image, p_name, p_position);
    information.appendChild(card);


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
