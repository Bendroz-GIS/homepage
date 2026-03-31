export const gridData = {
    content : [{
        title: "Liens utiles",
        content: [{
            alias: "Organisation GitHub",
            link: "https://github.com/Bendroz-GIS",
            image: "./images/github.svg"
        }, {
            alias: "kSuite",
            link: "https://ksuite.infomaniak.com/1072026",
            image: "./images/ksuite.svg"
        }, {
            alias: "Manager Infomaniak",
            link: "https://manager.infomaniak.com/v3/1072026/ng/home",
            image: "./images/infomaniak.png"
        }]
    },{
        title: "Fichiers courants",
        content: [{
            alias: "Suivis des tâches",
            link: "https://kdrive.infomaniak.com/app/office/2705228/3679",
            image: "./images/grids.png"
        }, {
            alias: "Workflow Git/GitHub",
            link: "https://github.com/Bendroz-GIS/docs/blob/main/git-workflow.md",
            image: "./images/github.svg"
        }]
    },{
        title: "URL déployés",
        content: [{
            alias: "Vitrine d'entreprise",
            link: "https://bendroz.ch/",
            image: "./images/cigle-white.svg"
        }, {
            alias: "Where2Play",
            link: "https://w2p.bendroz.ch/",
            image: "./images/w2p.png"
        }]
    }]
}

export function createGridData(gridData) {
    let itemHTML = "" 
    gridData.content.forEach(element => {
        let linkHTML = ""
        element.content.forEach(element => {
        linkHTML += `
        <li>
            <a class="link" href="${element.link}" target="_blank">
                <img class="icon" src="${element.image}" alt="Icône">
                <span>${element.alias}</span>
            </a>
        </li>`            
        })

        itemHTML += `
        <div class="grid-item">
            <h2 class="title">${element.title}</h2>
            <ul class="link-container">
                ${linkHTML}
            </ul>
        </div>
        `
    });

  
    const gridHTML =`
    <div class="grid-container">
        ${itemHTML}
    </div>
    `


    document.getElementById("main").innerHTML = gridHTML
}