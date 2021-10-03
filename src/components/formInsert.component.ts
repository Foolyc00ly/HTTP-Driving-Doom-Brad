import{error,FormInsert}from '../spec/module-variable.component';
import{ElementFormInsert}from './views';
import{eventsFormInsert}from '../events';
const createFormInsertHTML=()=>{
    const HTMLFormInsert=`
        <form>
            <div class="row">
                <div class="col-sm-3 d-sm-flex align-items-center">
                    <label class="m-sm-0">Title</label>
                    <input
                        type="text"
                        id="title"
                        class="form-control ml-sm-2"
                        placeholder="Learn JS"
                    >
                </div>
                <div class="px-sm-2 col-sm-7 d-sm-flex align-items-center mt-2 mt-sm-0">
                    <label class="m-sm-0">Description</label>
                    <input
                        type="text"
                        id="description"
                        class="form-control ml-sm-2"
                        placeholder="Watch JS Tutorials"
                    >
                </div>
                ${ElementFormInsert.DivBTNFormInsert}
            </div>
        </form>
    `;
    const divFormInsert:HTMLDivElement|null=document.createElement('div');
    divFormInsert.innerHTML=HTMLFormInsert;
    FormInsert?.append(divFormInsert||error(`Elemento No Enviado`));
}
export const init=()=>{
    createFormInsertHTML();
    eventsFormInsert();
};