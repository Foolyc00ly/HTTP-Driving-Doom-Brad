import{getValues}from '../../config';
import{sendValues}from './event-SendValues.component'
let btnAddForm:HTMLButtonElement|null;
let title:HTMLInputElement|null;
let description:HTMLInputElement|null;
export const events=()=>{
    btnAddForm=document.querySelector('#add');
    title=document.querySelector('#title');
    description=document.querySelector('#description');
    btnAddForm?.addEventListener('click',async()=>{
        sendValues(await getValues(title,description))

    });
}

