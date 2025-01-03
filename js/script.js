'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    this.createElement = () => {
        let element;

        if (this.selector[0] === '.') {
            element = document.createElement('div');
        } else if (this.selector[0] === '#') {
            element = document.createElement('p');
        }

        element.classList.add(this.selector.slice(1));
        element.textContent = this.selector;
        element.style.cssText = `
        height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        font-size: ${this.fontSize}px;
        `;

        document.body.append(element);
    };
};

const div = new DomElement('.main', 100, 100, 'red', 14);

div.createElement();
