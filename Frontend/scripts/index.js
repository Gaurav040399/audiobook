let courses = document.getElementById("courses");
let article = document.getElementById("article");

let url = "https://audiobook-19h7.onrender.com/";

async function getCourseData(url) {
    let res = await fetch(`${url}course/data`);
    let data = await res.json();
    Displaydata(data.data); 
}

function Displaydata(data) {
    let res = data.map(el => {
        return createDiv(el.coverImage, el.title, el.length, el.totalContent, el._id);
    }).join("");
    // console.log(res);
    courses.innerHTML = res;
    article.innerHTML = res;
    
}

function createDiv(coverImage, title, length, totalContent,id) {
    return `
        <div class="card" id="${id}">
            <div>
                <img src="${coverImage}" alt="">
            </div>
            <div>
                <h3 class="title">${title}</h3>
                <p>Duration: ${length}</p>
                <p>Chapter: ${totalContent}</p>
            </div>
        </div>
    `;
}



getCourseData(url);
