import{Navbar,error}from '../spec/module-variable.component';
import{ElementNavbar}from './views';
const createNavbarHTML=()=>{
    const HTMLNavbar=`
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">JS Todo List</a>
        ${ElementNavbar.btnNavbar}
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            ${ElementNavbar.navNavbar}
            <form class="form-inline my-2 my-lg-0" id="filters">
                <label class="font-weight-bold text-info mr-3">Filters</label>
                <input type="radio" name="type" value="all" class="mx-1">
                <label for="male" class="mb-0">All</label>
                <input type="radio" name="type" value="completed" class="mx-1">
                <label for="female" class="mb-0">Completed</label>
                <input type="radio" name="type" value="uncompleted" class="mx-1">
                <label for="other" class="mr-2 mb-0">Uncompleted</label> 
                <input
                    class="form-control mr-sm-2"
                    type="search"
                    name="words"
                    placeholder="Words"
                    aria-label="Search"
                >
                <button class="btn btn-outline-info my-2 my-sm-0" type="submit" id="search">
                    Search
                </button>
            </form>
        </div>
    </nav>
    </div>
    `;
    const divNavBar:HTMLDivElement=document.createElement('div');
    divNavBar.innerHTML=HTMLNavbar;
    Navbar?.appendChild(divNavBar.firstElementChild||error('Elemento no Enviado'));

}
export const init=()=>{
    createNavbarHTML();
}


