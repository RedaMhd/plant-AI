import { style_Header, parametre_AI, getIdProject } from "./utils.js";
import { validate_form } from "./validation.js";
import {showProject} from "./ui.js";


style_Header();
parametre_AI();
validate_form();
if(window.location.pathname === '/project.html'){
    const id = getIdProject();
    showProject(id);
}
