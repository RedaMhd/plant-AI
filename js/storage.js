export function storApiKey(value){
    sessionStorage.setItem('apiAI', value);
    // console.log(sessionStorage.getItem('apiAI'))

}

export function addNewProjectToData(newProject, description){
    let data = JSON.parse(localStorage.getItem('data')) || [];

    data.push({ id: data.length, project: newProject, name: newProject.projectName, description: description});
    localStorage.setItem('data', JSON.stringify(data));
}