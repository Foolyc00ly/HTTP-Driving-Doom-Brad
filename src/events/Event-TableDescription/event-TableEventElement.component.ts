import{error,activivityList}from '../../spec/module-variable.component'

export const MainTable=(()=>{
    const CartEvent={
        botonCardElimited:(botonCardElimited:Element|null,event:Event,isNumber:number,cardTR:Element)=>{
            if(botonCardElimited){
                activivityList.removeActivity(isNumber);
                (event.target as HTMLElement).closest('.table-container')?.removeChild(cardTR)
            }
        },
        botonCardChange:(botonCardChange:Element|null,event:Event,isNumber:number,cardTR:Element
        )=>{
            if(botonCardChange){
            }
        },
        inputCardCheck:(inputCardCheck:Element|null,event:Event,isNumber:number,cardTR:Element
        )=>{
            if(inputCardCheck){
                activivityList.checkCompleted(isNumber);
                console.log(activivityList);
            }
        }
    }
    const on=(event:Event)=>{
        const cardTR=(event.target as HTMLElement).closest('.table-card');
        const botonCardElimited=(event.target as HTMLElement).closest('#removeElement');
        const botonCardChange=(event.target as HTMLElement).closest('#changeElement');
        const inputCardCheck=(event.target as HTMLElement).closest('#checkElement');
        const ActivityId=(cardTR as HTMLInputElement).dataset.id;
        const isNumber:number=!isNaN(Number(ActivityId))
            ?Number(ActivityId):error('No hay Id');

        if(cardTR){
            botonCardElimited:CartEvent['botonCardElimited'](botonCardElimited,event,isNumber,cardTR);
            botonCardChange:CartEvent['botonCardChange'](botonCardChange,event,isNumber,cardTR);
            inputCardCheck:CartEvent['inputCardCheck'](inputCardCheck,event,isNumber,cardTR);

        }
    }
    return{
        addEventListeners:()=>{
            const container=document.querySelector('.table-container');
            container?.addEventListener('click',on)
        }
    }
})();





    //estudiar
    //e.target.dataset.id
    //js-tbody
    //e.target.closest('.js-tbody')
    //.js-tr
    //events delegations
    //burbujeante
    //bubbling
    //responsabilidad unica
    //