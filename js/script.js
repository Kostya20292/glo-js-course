'use strict';

let pointX = 0;
let pointY = 0;

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
        position: absolute;
        top: 0px;
        left: 0px;
        `;

        document.body.append(element);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowUp') {
                pointX += 10;
                element.style.top = `${pointX}px`;
            } else if (e.key === 'ArrowDown') {
                pointX -= 10;
                element.style.top = `${pointX}px`;
            } else if (e.key === 'ArrowLeft') {
                pointY += 10;
                element.style.left = `${pointY}px`;
            } else if (e.key === 'ArrowRight') {
                pointY -= 10;
                element.style.left = `${pointY}px`;
            }
        });
    };
};

const div = new DomElement('.main', 100, 100, 'red', 14);

div.createElement();
