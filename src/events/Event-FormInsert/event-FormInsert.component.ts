let btnAddForm:HTMLButtonElement|null;
let title:HTMLInputElement|null;
let description:HTMLInputElement|null;
export const events=()=>{
    btnAddForm=document.querySelector('#add');
    title=document.querySelector('#title');
    description=document.querySelector('#description');
    btnAddForm?.addEventListener('click',()=>{
        console.log(`Title=>${title?.value}`);
        console.log(`Description=>${description?.value}`);
    });
}

