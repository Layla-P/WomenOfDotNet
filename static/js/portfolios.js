//get payload - becomes in memory collection
const parentDiv = document.getElementById('Portfolios')
var tags = [];
function getData(tag) {
    jQuery(function ($) {
        $.ajax({
            url: "/data/profiles.json",
            type: "GET",
            success: function (data) {
                document.getElementById('Portfolios').innerHTML = "";
                let pfs = data.portfolios
                console.log(pfs.length)
               
               if(tag !== ""){ 

               let fpfs = filterByTag(pfs, tag)

                buildPortfolios(fpfs)
               }else{
               
                buildPortfolios(pfs)
               }
            },
            complete: function () {
                addButtonListener();
                
            }

        });

    });


}



function buildPortfolios(portfolios){
    while (portfolios.length) {
        const random = Math.floor(Math.random() * portfolios.length);
        const p = portfolios.splice(random, 1)[0];
        let child = buildHtmlSnippet(p);
        parentDiv.innerHTML += child
    }
}

function filterByTag(pfs, tagfilter){
    let filteredPfs = pfs.filter(pf => {  
        return pf.tags.includes(tagfilter);
    });
return filteredPfs;
}



function addButtonListener(){
    let tagCollection = document.getElementsByClassName("filter");
    [...tagCollection].forEach((elem) => {
        elem.addEventListener("click", function() {
            console.log(this.text)
            getData(this.text)
        });
      });
}



function buildHtmlSnippet(p) {
    let tags = ""
    $.each(p.tags, function (t, v) {
        tags += `<a class="badge badge-purple js-click">${v}</a>`
    });
    let img = ""
    if (p.img === "") {
        img = `<div class="box">
        <a href="/portfolio/${p.url}" class="box-masonry-image with-hover-overlay with-hover-icon" >                      
            <div class="overlay">   
            <div class="text"><span class="fa-solid fa-angle-right"></span></div>      
            </div>
        </a>
        </div>`
    } else {
        img = `
        <div class="box">
        <a href="/portfolio/${p.url}" class="box-masonry-image with-hover-overlay with-hover-icon" >
            <img src="/images/profile-pictures/${p.img}" alt="" class="img-responsive" />            
            <div class="overlay">   
            <div class="text"><span class="fa-solid fa-angle-right"></span></div>      
            </div>
        </a>
        </div>
    `
    }
    return `
              <div class="grid">
             ${img}
              <div class="grid__body">
                <div class="relative">
                  <h1 class="grid__title">${p.name}</h1>
                  <p class="grid__author">${p.location}</p>
                </div>  
                
            <div class="mt-auto tags" >
            ${tags}
        </div>              
              </div>
            </div>
            

`

}


function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick

        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(getData(""));

//sort data randomly

// iterate over data and render out html to dom
