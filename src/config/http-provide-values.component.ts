import{IActivity}from '../interfaces/IActivity';
import { error } from '../spec/module-variable.component';
const getValues=async(
    title:HTMLInputElement|null,
    description:HTMLInputElement|null
):Promise<IActivity|undefined>=>{

    const activity:IActivity={
        title:(title?.value as string),
        description:(description?.value as string)
    }

    if(title?.value && description?.value){
        return activity;
    }else{
        error(`No existe elemento`);
    }
}

export{getValues}