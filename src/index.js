import './defaultStuff.css';
import './createStuff.css';
import { defaultStuff } from './defaultStuff/defaultStuff';
import { createStuff } from './createStuff/createStuff';
import { removeStuff } from './removeStuff/removeStuff';
import { eventStuff } from './eventStuff/eventStuff';

const todoLIST = (function(){
    defaultStuff.makeDefault();
    createStuff.generateProject();
    eventStuff.defaultEvents();
})();