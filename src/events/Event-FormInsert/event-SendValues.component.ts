import{IActivity}from '../../classes/interfaces/IActivity';
import{activivityList}from '../../spec/module-variable.component';
import{getValues}from '../../config';
import { TableHtmlCreate } from '../Event-TableDescription/event-TableHtmlCreate.component';

const sendValues=(
    activity:IActivity|undefined
)=>{
    console.log('test',activity)
    activivityList.newActivity((activity as IActivity));
    TableHtmlCreate((activity as IActivity));
}

export const MainForm=(()=>{
    const cartEvent={
        add:async(button:Element|null)=>{

            if(button){
                const title=<HTMLInputElement|null>document.querySelector('#title');
                const description=<HTMLInputElement|null>document.querySelector('#description');
                sendValues(await getValues(title,description));
                ((title as HTMLInputElement).value)='';
                ((description as HTMLInputElement).value)='';
            }
        }
    };
    const on=(event:Event)=>{
        const cartForm=(event.target as HTMLElement).closest('.form-cart');
        const button=(event.target as HTMLElement).closest('#add')
        if(cartForm){
            button:cartEvent['add'](button);
        }
    }
    return{
        addEventListeners:()=>{
            const container=document.querySelector('.form-container');
            container?.addEventListener('click',on)
        }
    }
})();