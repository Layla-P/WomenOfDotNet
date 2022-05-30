//get payload - becomes in memory collection
const parentDiv = document.getElementById('Portfolios')
var masonryActive = false;
function getData(tag) {
    jQuery(function ($) {
        $.ajax({
            url: "/data/profiles.json",
            type: "GET",
            success: function (data) {
                document.getElementById('Portfolios').innerHTML = "";
                let pfs = data.portfolios
                console.log(pfs.length)
               
            //    if(tag !== ""){               
            //     pfs.filter(pf => {  
            //         return pf.tags.includes(tag);
            //     });
            //     masonryActive = true;
            //    }
               
                buildPortfolios(pfs)

            },
            complete: function () {
                //addButtonListener();
                masonry()     
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
    let tagCollection = document.getElementsByClassName("js-click");
    [...tagCollection].forEach((elem) => {
        elem.addEventListener("click", function() {
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
        img = ``
    } else {
        img = `<a href="/portfolio/${p.url}" title="" class="box-masonry-image with-hover-overlay with-hover-icon">
    
        <img src="/images/profile-pictures/${p.img}" alt="" class="img-responsive">
    </a>`
    }
    return `
   
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 masonry-item">
             
                  <div class="box-masonry">`
        + img +

        `<div class="box-masonry-text">
     
                          <h4><a href="/portfolio/${p.url}">${p.name}</a></h4>
                          <div class="box-masonry-description">
                            <p class="box">${p.location}
                            </p>
                            ${tags}
                          </div>
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