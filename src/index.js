const DOMNodeCollection = require("./dom_node_collection");

function $l(arg) {
    let queue = [];

    if(typeof arg === 'function'){
        debugger
        queue.push(func);
    }

    if (typeof arg === "string") {
        let nodeList = document.querySelectorAll(arg);
        let array = Array.from(nodeList);
        return new DOMNodeCollection(array);
    }
    debugger;
    window.addEventListener('DOMContentLoaded', (event) => {
        queue.forEach(fnc => {
            fnc();
        });
    });
}

$ajax({

});


window.$l = $l;

