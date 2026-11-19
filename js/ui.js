
export function showProject(idp) {
    if (!idp) return;
    const localData = JSON.parse(localStorage.getItem('data'));
    const project = localData.find((p) => p.id === Number(idp));

    console.log(project);
    const head = document.querySelector('.head');
    head.innerHTML = '';
    // Array.filter()
    let todoTsks = project.project.tasks.filter(t =>
        t.status === 'To Do');
    let inProgTsks = project.project.tasks.filter(t =>
        t.status === 'In Progress');
    let doneTsks = project.project.tasks.filter(t =>
        t.status === 'Done');
    // console.log(done)

    head.innerHTML = `<h1 class="title font-black">${(project.name)}</h1>
                <h2 class="time">${project.project.totalEstimatedHours}h</h2>
                <div class="bg-blue-950 w-[95%] mx-auto p-1 rounded-xl flex flex-wrap gap-2 text-gray-200">
                    <h2 class="w-full">total Tasks : ${project.project.tasks.length}</h2>
                    <div class="w-full flex justify-evenly">
                        <h3>done : ${doneTsks.length}</h3>
                        <h3>not yet : ${project.project.tasks.length - doneTsks.length}</h3>
                    </div>
                    <div class="bg-blue-50 w-[95%] mx-auto rounded-xl text-gray-500">
                        <div class="w-[${(doneTsks.length * (100 / project.project.tasks.length))}%] text-center bg-sky-500 rounded-xl">${parseInt(doneTsks.length * (100 / project.project.tasks.length))}%</div>
                    </div>
                </div>`;

    const todoElement = document.querySelector('.toDo > .taches');
    todoElement.innerHTML = '';
    
    todoTsks.forEach(t => {
        const card = document.createElement('div');
        card.innerHTML = `<div class="card  bg-blue-950 w-[95%] m-auto rounded-2xl p-2 text-gray-300 flex flex-col">
                                    <h1 class="text-[80%] text-amber-500 bg-gray-500 w-[50%] text-center rounded-2xl">${t.id}</h1>
                                    <h1 class="mb-3 font-black ">${t.title}</h1>
                                    <div class="dependance flex flex-col"><!-- hidden dependencies-->
                                        <h2>Dependances :</h2>
                                        <ul class="m-auto flex text-[75%] gap-1 flex-wrap">
                                            
                                        </ul>
                                    </div>

                                    <div class="m-auto flex justify-evenly rounded bg-blue-900 my-2 w-full">
                                        <span class="">${t.priority}</span>
                                        <span class="">${t.size}</span>
                                        <span class="">${t.estimatedTime}h</span><!--(estimatedTime)-->
                                    </div>

                                    <h2 class="text-end "> >${t.deadline}</h2>
                                </div>`;
        const ul = card.querySelector('ul');
        ul.textContent =((t.dependencies.length === 0)? 'No Task' : '');
        t.dependencies.forEach((d)=>{
            const li = document.createElement('li');
            li.innerHTML = `<li class="bg-gray-700 rounded-xl p-1">${d}</li>`;
            ul.append(li);
        })

        todoElement.append(card);
    });

    const inProgElement = document.querySelector('.inProg > .taches');
    inProgElement.innerHTML = '';

    inProgTsks.forEach(t => {
        const card = document.createElement('div');
        card.innerHTML = `<div class="card  bg-blue-950 w-[95%] m-auto rounded-2xl p-2 text-gray-300 flex flex-col">
                                    <h1 class="text-[80%] text-amber-500 bg-gray-500 w-[50%] text-center rounded-2xl">${t.id}</h1>
                                    <h1 class="mb-3 font-black ">${t.title}</h1>
                                    <div class="dependance flex flex-col"><!-- hidden dependencies-->
                                        <h2>Dependances :</h2>
                                        <ul class="m-auto flex text-[75%] gap-1 flex-wrap">
                                            
                                        </ul>
                                    </div>

                                    <div class="m-auto flex justify-evenly rounded bg-blue-900 my-2 w-full">
                                        <span class="">${t.priority}</span>
                                        <span class="">${t.size}</span>
                                        <span class="">${t.estimatedTime}h</span><!--(estimatedTime)-->
                                    </div>

                                    <h2 class="text-end "> >${t.deadline}</h2>
                                </div>`;
        const ul = card.querySelector('ul');
        ul.textContent =((t.dependencies.length === 0)? 'No Task' : '');
        t.dependencies.forEach((d)=>{
            const li = document.createElement('li');
            li.innerHTML = `<li class="bg-gray-700 rounded-xl p-1">${d}</li>`;
            ul.append(li);
        })

        inProgElement.append(card);
    });

    const doneElement = document.querySelector('.done > .taches');
    doneElement.innerHTML = '';

    doneTsks.forEach(t => {
        const card = document.createElement('div');
        card.innerHTML = `<div class="card  bg-blue-950 w-[95%] m-auto rounded-2xl p-2 text-gray-300 flex flex-col">
                                    <h1 class="text-[80%] text-amber-500 bg-gray-500 w-[50%] text-center rounded-2xl">${t.id}</h1>
                                    <h1 class="mb-3 font-black ">${t.title}</h1>
                                    <div class="dependance flex flex-col"><!-- hidden dependencies-->
                                        <h2>Dependances :</h2>
                                        <ul class="m-auto flex text-[75%] gap-1 flex-wrap">
                                            
                                        </ul>
                                    </div>

                                    <div class="m-auto flex justify-evenly rounded bg-blue-900 my-2 w-full">
                                        <span class="">${t.priority}</span>
                                        <span class="">${t.size}</span>
                                        <span class="">${t.estimatedTime}h</span><!--(estimatedTime)-->
                                    </div>

                                    <h2 class="text-end "> >${t.deadline}</h2>
                                </div>`;
        const ul = card.querySelector('ul');
        ul.textContent =((t.dependencies.length === 0)? 'No Task' : '');
        t.dependencies.forEach((d)=>{
            const li = document.createElement('li');
            li.innerHTML = `<li class="bg-gray-700 rounded-xl p-1">${d}</li>`;
            ul.append(li);
        })

        doneElement.append(card);
    });
}