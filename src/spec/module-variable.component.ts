import{ActivityList}from '../classes/Activity-List.class';
import{eventsTableDescription}from '../events';
//Referencias HTML
const body:HTMLElement=document.body;
const Navbar:HTMLDivElement|null=document.querySelector('#Navbar');
const FormInsert:HTMLDivElement|null=document.querySelector('#Form-Insert');
const TableDescription:HTMLDivElement|null=document.querySelector('#Table-Description');
const BannerAlert:HTMLDivElement|null=document.querySelector('#alert');
//Funcion Never
const error=(message:string):never=>{throw new Error(message)};
//Instancia de classes
const activivityList=new ActivityList();
//DOMRender
interface Main{
    addEventListeners:() => void;
}
export const DOM=(()=>{
    return{
        render:(element:Main)=>{
            element.addEventListeners();
        }
    }
})();
//Exportacion
export{error,body,Navbar,FormInsert,TableDescription,BannerAlert,activivityList}