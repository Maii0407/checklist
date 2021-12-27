import './style.css';
import {DOMstuff} from './DOMstuff.js';
import { Logic } from './logic';

const maiiCheckList = (function(){
    DOMstuff.makeDefault();

    document.querySelector('.newProject-btn').addEventListener('click', function(){
        DOMstuff.makeProject();
    });
})();