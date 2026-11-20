import { style_Header, parametre_AI, getIdProject } from "./utils.js";
import { validate_form } from "./validation.js";
import {showProject, showAllProjects} from "./ui.js";

style_Header();
parametre_AI();

if(window.location.pathname === '/index.html' || window.location.pathname === '/' ){
    // alert('hi')
    showAllProjects();

}
if(window.location.pathname === '/project.html'){
    const id = getIdProject();
    showProject(id);
}

if(window.location.pathname === '/new-project.html'){
    validate_form();
}

