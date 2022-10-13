// una clase siempre inicia en mayuscula
// colocando export volvemos a la clase exportable a otros archivos


export class Task {
    constructor(name,date,status){
        this._name = name
        this._date = date
        this._status = status
    }
    // creamos una funcion
    render(){
        return `<div class="item_task">
    <input type="checkbox">
    <h6>${this._name}</h6>
    <button><img width="15px" src="./images/edit.png" alt=""></button>
    <button><img width="15px" src="./images/delete.png" alt=""></button>
    </div>`
    }
}