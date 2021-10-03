//Referencias HTML
const body:HTMLElement=document.body;
const Navbar:HTMLDivElement|null=document.querySelector('#Navbar');
const FormInsert:HTMLDivElement|null=document.querySelector('#Form-Insert');
const TableDescription:HTMLDivElement|null=document.querySelector('#Table-Description');
//Funcion Never
const error=(message:string):never=>{throw new Error(message)};
//Exportacion
export{error,body,Navbar,FormInsert,TableDescription}