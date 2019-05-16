class DOMNodeCollection {
    constructor(HTMLelements) {
        this.elements = HTMLelements;
    }

    html(string){
        if (string === undefined) {
            return this.elements[0].innerHTML;
        } else {
            this.elements.forEach( ele => {
                ele.innerHTML = string;
            });
        }
    }

    empty() {
        this.html('');
    }

    append(arg) {
        const that = this;
        if (arg instanceof DOMNodeCollection) {
            arg.forEach( el => {
                that.html(that.html() + el.outerHTML);
            });
        } else if (arg instanceof HTMLElement) {
            that.html(that.html() + arg.outerHTML);
        } else {
            that.html(that.html() + arg);
        }
    }

    attr(attribute, value) {
        if(value){
            this.elements.forEach( ele => {
                ele.setAttribute(attribute, value);
            });
        } else {
            return this.elements[0].getAttribute(attribute);
        }
        
    }

    addClass(newClass) {
        // const that = this;
        this.elements.forEach( el => {
            el.setAttribute("class", newClass);
        });
    }

    removeClass(className) {
        this.elements.forEach( el => {
            if(el.getAttribute("class") === className ){
               el.removeAttribute("class");
            }
        });
    }

    children() {
        let arr = [];
        this.elements.forEach(ele => {
           arr = arr.concat(Array.from(ele.children));
        });
        return new DOMNodeCollection(arr);
    }

    parent() {
        let arr = [];
        this.elements.forEach(ele => {
            if (!arr.includes(ele.parentNode)) arr.push(ele.parentNode);
        });
        return new DOMNodeCollection(arr);
    }

    find(selector) {
        let found = this.elements[0].querySelectorAll(selector);

        return new DOMNodeCollection(found);
    }

    remove() {
        this.elements.forEach( el => {
            el.parentNode.removeChild(el);
        });
    }

    on(eventType, listener) {
        this.elements.forEach( el =>  {
            el.addEventListener(eventType, listener);
        });
    }

    off(eventType, listener) {
        this.elements.forEach( el => {
            el.removeEventListener(eventType, listener);
        });
    }
}


module.exports =  DOMNodeCollection;



