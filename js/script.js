const prediccion = document.querySelector('.presonaje');
const enviar = document.querySelector('.enviar');
const no = document.querySelector('.no');
const buscadorOn = document.querySelector('.buscadorOf')
const pregunta = document.querySelector('.pregunta')


class jugador{
    constructor(nombre,nacion,edad,equipo,posicion,idioma){
        this.nombre = nombre;
        this.nacion = nacion;
        this.equipo = equipo;
        this.edad = edad;
        this.posicion = posicion;
        this.idioma= idioma;

        this.info = `soy ${this.esp}, tengo ${this.ege}, y soy de color ${this.color}`;
    
    }
    verInfo(){
        document.write(this.info + '<br>')
    }
}

class jugadorUltimaPrediccion extends jugador
{
    constructor(nombre,origen,edad,equipo,posicion,idioma,probabilidad){
        super(nombre,origen,edad,equipo,posicion,idioma)
        this.probabilidad = probabilidad;
    }
    ladrar(){
        alert("WOw");
    }
}

//nacion,posicion,edad,equipo
//0     1           2   3
const lionMesssi = new jugador('Lion Messi','Argentina','Paris','35','RW','español');
const kylianMbappe = new jugador('Kylian Mbappe','Francia','Paris','24','ST','frances');
const neymarJr = new jugador('Neymar JR','Bracil','Paris','30','LW','portuges');
const sergioRamos = new jugador('Sergio Ramos','España','Paris','36','CB','español');
const keylorNavas = new jugador('Keylor Navas','nose','Paris','36','GK','nose');

let contador=0;

no.addEventListener('click',(i)=>{
    i.preventDefault();
    console.log('hola a clase no')

    switch(contador){
        case 0:
            pregunta.innerHTML= 'De que paiz es?';
            break;
        case 1:
            pregunta.innerHTML= 'En que posicion Juega?';
            break;
        case 2:
            pregunta.innerHTML= 'Que edad tiene?';
            break;
        case 3:
            pregunta.innerHTML= 'De que equipo?';
            break;
    }
    buscadorOn.classList.add('buscadorOn');
    if(contador==4){
        pregunta.innerHTML= 'no se quin es';
    }else{
        contador=contador+1;
    }
    
});

enviar.addEventListener('click',(e)=>{
    //enventos
    let pistas = document.querySelector('.pistasInput');
    let vector = []
    let valor = pistas.value.split(",")
        vector.push(valor);
        console.log('eto es lo recolectado '+ valor)

    let busqueda = valor.toString();

    switch(busqueda){

        case 'paris':
            prediccion.innerHTML='paris'
            break;
            
        case 'marmota':
            prediccion.innerHTML='marmota'
            break;
            
        case 'guate':
            prediccion.innerHTML='guate'
            break;
            
        case 'mexico':
            prediccion.innerHTML='mexico'
            break;
    }

});



prediccion.innerHTML='todos'


