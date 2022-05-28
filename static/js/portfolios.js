//get payload - becomes in memory collection
const parentDiv = document.getElementById('Portfolios')
function getData() {
    jQuery(function ($) {
        $.ajax({
            url: "/data/profiles.json",
            type: "GET",
            success: function (data) {
                var pfs = data.portfolios

                while (pfs.length) {
                    const random = Math.floor(Math.random() * pfs.length);
                    const p = pfs.splice(random, 1)[0];
                    let child = buildHtmlSnippet(p);
                    parentDiv.innerHTML += child
                }

            },
            complete: function () {
                masonry()
            }

        });

    });


}

function buildHtmlSnippet(p) {
    let tags = ""
    $.each(p.tags, function (t, v) {
        tags += `<span class="badge badge-purple">${v}</span>`
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
     
                          <h4><a href="/portfolios/${p.name}">${p.name}</a></h4>
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

docReady(getData());
//sort data randomly

// iterate over data and render out html to dom