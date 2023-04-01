const initThoughts = async () => {
    const thoughts_data = await fetchData();
    const thoughts_content = document.querySelector("div#thoughts_content");

    thoughts_data.forEach(thought => {
        thoughts_content.appendChild(
            genChild(thought.id, thought.desc, thought.img)
        );
    });
}

const genChild = (id, desc, img) => {
    let mainElement = document.createElement("div");
    mainElement.classList.add("thought");
    mainElement.id = `thought_${id}`;
    if (!(typeof img === 'undefined' || img === null)) {
        let image = document.createElement("img");
        image.src = `images/thoughts/${img}`;
        image.style.height = "25vh";
        mainElement.appendChild(image);
    }
    // let descElement = document.createElement("p");
    // descElement.innerHTML = desc;
    console.log(typeof desc, desc);
    let temp_tou = document.querySelector("#temp_tou");
    temp_tou.innerHTML = desc;
    mainElement.appendChild(temp_tou.firstChild);
    return mainElement
}

const fetchData = async () => {
    return fetch("thoughts.json").then((response) => response.json());
}

initThoughts();