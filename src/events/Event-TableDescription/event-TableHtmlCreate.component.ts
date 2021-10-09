import{IActivity}from '../../classes/interfaces/IActivity';
let TableActivityList:HTMLTableElement|null;
export const TableHtmlCreate=(activity:IActivity):HTMLTableElement=>{
    TableActivityList=document.querySelector('#TableActivityList');
    const row: HTMLTableRowElement | undefined=TableActivityList?.insertRow();
    row?.classList.add('table-card');
    row?.setAttribute('data-id',`${activity.id}`);
    (<HTMLTableRowElement>row).innerHTML=`
        <td class="text-gray-400" id="titulo">${activity.title}</td>
        <td class="text-gray-400">${activity.description}</td>
        <td class="text-center">
            <input type="checkbox" id="checkElement">
        </td>
        <td class="text-right">
            <button class="btn btn-primary mb-1" id="changeElement">
                <i class="fa fa-pencil"></i>
            </button>
            <button class="btn btn-danger mb-1 boton-card" id="removeElement">
                <i class="fa fa-trash"></i>
            </button>
        </td>
    `;
    return TableActivityList as HTMLTableElement
}