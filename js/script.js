function initPage() {
    tab();
}

initPage();

function tab() {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const tabs = $$("#js-tab .tab-navigation .tab-navigation__item");
    const panes = $$("#js-tab .tab-content .tab-content__item");
    const line = $("#js-tab .tab-navigation .line-navigation");

    const itemactive = $("#js-tab .tab-navigation .tab-navigation__item.tab-navigation__item--active");

    console.log([itemactive]);

    handleLine(line, itemactive);


    tabs.forEach((element, index) => {
        element.onclick = function() {
            tabs.forEach(function(ele) {
                ele.classList.remove("tab-navigation__item--active");
            });
            element.classList.add("tab-navigation__item--active");


            panes.forEach(function(ele) {
                ele.classList.remove("tab-content__item--active");
            });
            panes[index].classList.add("tab-content__item--active");

            handleLine(line, element);
        }
    });
}

function handleLine(line, itemactive) {

    let clientWidth = itemactive.offsetWidth;
    let clientLeft = itemactive.offsetLeft;

    line.style.left = clientLeft + "px";
    line.style.width = clientWidth + "px";
}