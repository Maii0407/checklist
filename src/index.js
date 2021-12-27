import './style.css';
import { DOMstuff } from "./DOMstuff";
import { Project } from './project';

const Checklist = (function(){
    DOMstuff.makeSkeleton();

    Project.logThis();
})();