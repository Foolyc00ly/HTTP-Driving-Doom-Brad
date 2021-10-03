import{error,TableDescription}from '../spec/module-variable.component';
const createTableDescription=()=>{
    const HTMLTableDescription=`
        <div class="mt-5">
            <table class="table table-striped" id="table">
                <thead>
                    <tr>
                        <th scope="col">Todo</th>
                        <th scope="col">Description</th>
                        <th scope="col">
                            <div class="d-flex justify-content-center">
                                Completed
                            </div>
                        </th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Content generated with JS -->
                </tbody>
            </table>
        </div>
    `;
    const divTableDescription:HTMLDivElement|null=document.createElement('div');
    divTableDescription.innerHTML=HTMLTableDescription;
    TableDescription?.append(divTableDescription||error(`Elemento no enviado`));
}

export const init=()=>{
    createTableDescription();
}