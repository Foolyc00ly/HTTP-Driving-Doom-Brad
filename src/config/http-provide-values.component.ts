import{IActivity}from '../classes/interfaces/IActivity';
import { error,BannerAlert } from '../spec/module-variable.component';
import { Activity } from '../classes/Activity.class';

const getValues=async(
    title:HTMLInputElement|null,
    description:HTMLInputElement|null
):Promise<IActivity|undefined>=>{
    try{
        const newActivity=new Activity((title?.value as string),(description?.value as string))

        if(!(title?.value==='') && !(description?.value==='')){
            BannerAlert?.classList.add('d-none');
            return newActivity;
        }else{
            BannerAlert?.classList.remove('d-none');
            (BannerAlert as HTMLInputElement).innerText='Elemento No Enviado';
            error(`No existe elemento`);
        }
    }catch(err){
        throw err
    }

}

export{getValues}