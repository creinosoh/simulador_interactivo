// Definición de clase persona

class persona {
    constructor(nombre, apellido, fechaNacimiento) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.nacimiento = fechaNacimiento;



        }
        // Metodo que permite ingresar los datos de una nueva persona haciendo uso de la clase fechaNacimiento para el ingreso de esos datos


    ingresaNueva() {

        let formulario_nueva_persona = document.createElement("div");
        document.body.appendChild(formulario_nueva_persona);

        formulario_nueva_persona.classList.add("container");



        formulario_nueva_persona.innerHTML = `
        <div class="input-group mb-3">
        <input id= "nombre${i}" type="text" placeholder = "Tu nombre" class="form-control"> 
        </div>
        <div class="input-group mb-3">
        <input id= "apellido${i}" type="text" placeholder = "Tu apellido" class="form-control"> 
        </div>
        <label class="form-label">Ingresa tu fecha de nacimiento</label>
        <div class="input-group mb-3">
        <input id= "diaNacimiento${i}" type="date" class="form-control"> 
        </div>
        <button id= "calculaNumeroNacimiento${i}" type="button" class="btn btn-dark">Calcula mi número de nacimiento</button>
        <input id= "reset" type="reset" value="Reset" class="btn btn-dark" >
        <br><br>`


        //console.log(document.body.innerHTML);

        // Definición de las variables que capturarán los eventos. 

        let botonCalculaNumeroNacimiento = document.getElementById(`calculaNumeroNacimiento${i}`);
        let botonReset = document.getElementById("reset");


        // Captura los ID de los elementos del DOM

        let idElementoNombre = `nombre${i}`;
        let idElementoApellido = `apellido${i}`;
        let idElementoDiaNacimiento = `diaNacimiento${i}`;


        console.log(`imprime la variable concatenada "nombre${i}" que es ${idElementoNombre}`);

        // Al hacer click en el boton Calcula Numero de nacimiento, captura las variables



        // Metodo para obtener el número de nacimiento se trata de sumar los digitos del dia, mes y año de nacimiento hasta
        // reducirlos a un único dígito
        // Para ello se puede utilizar el enfoque del Problema del Número Raiz documentado en los siguientes sitios (en lugar de loops)
        // https://www.geeksforgeeks.org/finding-sum-of-digits-of-a-number-until-sum-becomes-single-digit/
        // https://en.wikipedia.org/wiki/Digital_root


        botonCalculaNumeroNacimiento.onclick = () => {


            this.nombre = document.getElementById(idElementoNombre).value;
            this.apellido = document.getElementById(idElementoApellido).value;
            this.nacimiento = document.getElementById(idElementoDiaNacimiento).valueAsDate;


            if (this.nombre == null || this.apellido == null || this.nacimiento == null) {
                alert("Complete todos los valores");

            } else {


                let dia = this.nacimiento.getDate() + 1;
                let mes = this.nacimiento.getMonth();
                let año = this.nacimiento.getFullYear();
                const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

                console.log(`this.nombre ${this.nombre}`);


                console.log(`solo value ${document.getElementById(idElementoNombre).value} mas ${document.getElementById(idElementoApellido).value} mas ${document.getElementById(idElementoDiaNacimiento).value}`);
                console.log(`las variables quedaron ${this.nombre} ${this.apellido} ${this.nacimiento}`);
                console.log(`manipulando fecha ${this.nacimiento.getFullYear()} ${this.nacimiento.getDate()+1} ${this.nacimiento.getMonth()+1}`);


                let numeroNacimiento = this.nacimiento.getFullYear() + this.nacimiento.getDate() + 1 + this.nacimiento.getMonth() + 1;

                console.log("Entrando al metodo calculaNumeroNacimiento con valor de inicio :" + numeroNacimiento);

                numeroNacimiento = (numeroNacimiento % 9 == 0) ? 9 : (numeroNacimiento % 9);

                console.log("Entrando al metodo calculaNumeroNacimiento con valor calculado :" + numeroNacimiento);

                // Declaramos variable para incorporar nuevos elementos con DOM

                let nuevo_parrafo = document.createElement("p");
                nuevo_parrafo.classList.add("p-3");

                // Entrega numero de nacimiento y significado

                let titulo = document.createElement("p");
                titulo.classList.add("text-info");
                titulo.classList.add("bg-dark");
                titulo.classList.add("animate__animated");
                titulo.classList.add("animate__jackInTheBox");
                titulo.classList.add("text-center");



                titulo.innerText = `Numero de nacimiento para ${this.nombre} ${this.apellido}`;
                document.body.appendChild(titulo);


                switch (numeroNacimiento) {
                    case 1:
                        document.body.appendChild(nuevo_parrafo);
                        nuevo_parrafo.innerText = "Para los nacidos el día " + dia + " del mes de " + meses[mes] + " del año " + año + ". El numero de nacimiento es " + numeroNacimiento + " \nSigno de la creatividad, independencia, originalidad, sentido del yo y autosuficiencia. Naturaleza individualista y agresiva. Iniciadores de acciones, espíritu pionero, coraje, extraordinaria voluntad y determinación. Es símbolo del liderazgo, aquellos con capacidades y habilidades para el mando. Ambiciosos y dispuestos a asumir riesgos para llegar a la cima. Llamados a destacar en el trabajo y los negocios.";
                        break;
                    case 2:
                        document.body.appendChild(nuevo_parrafo);
                        nuevo_parrafo.innerText = "Para los nacidos el día " + dia + " del mes de " + meses[mes] + " del año " + año + ". El numero de nacimiento es " + numeroNacimiento + " \nSigno de la empatía, cooperación, adaptabilidad, consideración hacia los demás, supersensibilidad hacia las necesidades de los demás. Símbolo del equilibrio, la unión y la receptividad. Es buen socio, compañero o pareja; también hace un magnífico papel como arbitro o mediador: Es modesto, sincero, influenciable espiritualmente y buen diplomático.";
                        break;

                    case 3:
                        document.body.appendChild(nuevo_parrafo);
                        nuevo_parrafo.innerText = "Para los nacidos el día " + dia + " del mes de " + meses[mes] + " del año " + año + ". El numero de nacimiento es " + numeroNacimiento + " \nAuto-expresivo en muchas vertientes y con capacidad comunicativa; Es el signo de la expresión artística, sociabilidad, simpatía, superficialidad y espíritu derrochador. Símbolo de la comunicación, la interacción y la neutralidad. Incansable optimismo, felicidad y del disfrute de la vida. Pueden ser amantes divertidos.";
                        break;
                    case 4:
                        document.body.appendChild(nuevo_parrafo);
                        nuevo_parrafo.innerText = "Para los nacidos el día " + dia + " del mes de " + meses[mes] + " del año " + año + ". El numero de nacimiento es " + numeroNacimiento + " \nFuerte sentido del orden y los valores. Es el signo de lo práctico, la lealtad, la rigidez y la represión. También es símbolo de la creación, de la lucha contra los límites, de la mentalidad científica, la atención al detalle, capaz de alcanzar logros importantes y con ingenio para la organización. Finas habilidades administrativas.";
                        break;
                    case 5:
                        document.body.appendChild(nuevo_parrafo);
                        nuevo_parrafo.innerText = "Para los nacidos el día " + dia + " del mes de " + meses[mes] + " del año " + año + ". El numero de nacimiento es " + numeroNacimiento + " \nSigno de la acción y la inquietud. Es el símbolo de la libertad, la adaptabilidad, el espíritu viajero y aventurero, pero también de la inconsistencia y del abuso de los sentidos. Expansivo y sociable, de nuevas y visionarias ideas; de pensamientos rápidos, polifacético, curioso y explorador; ingenioso a la hora de utilizar la libertad de forma constructiva.";
                        break;
                    case 6:
                        document.body.appendChild(nuevo_parrafo);
                        nuevo_parrafo.innerText = "Para los nacidos el día " + dia + " del mes de " + meses[mes] + " del año " + año + ". El numero de nacimiento es " + numeroNacimiento + " \nSigno del amor, la responsabilidad, la comprensión, pero también de personas entrometidas y celosas. Es un número asociado a la honestidad y fidelidad. En lo positivo su fuerte sentido de la responsabilidad, artístico, equilibrados, comprensivos con los demás, humanitarios, generosos, amantes del hogar y de los asuntos domésticos, prestan ayuda a otros.";
                        break;
                    case 7:
                        document.body.appendChild(nuevo_parrafo);
                        nuevo_parrafo.innerText = "Para los nacidos el día " + dia + " del mes de " + meses[mes] + " del año " + año + ". El numero de nacimiento es " + numeroNacimiento + " \nSigno del pensamiento, la espiritualidad, la conciencia, el análisis psíquico, la sabiduría. El número del intelecto, el idealismo y la represión. Son personas amantes de la lectura, el estudio y las ansias por aprender. Tendentes a proyectar su vida en una esfera de idealismo y actividad intelectual. Habilidades para el análisis y la investigación y la inteligente búsqueda del conocimiento; mentalidad científica y con capacidad de inventiva; estudiosa, meditadora; de personalidad encantadora; amantes de la soledad y de la paz; perfeccionistas.";
                        break;
                    case 8:
                        document.body.appendChild(nuevo_parrafo);
                        nuevo_parrafo.innerText = "Para los nacidos el día " + dia + " del mes de " + meses[mes] + " del año " + año + ". El numero de nacimiento es " + numeroNacimiento + " \nSigno del poder, la habilidad ejecutiva, la gestión, poder material y una tendencia al sacrificio pero también a no tener escrúpulos. Habilidades políticas, experto en manejar el poder y la autoridad, trabajan por causas y por alcanzar el reconocimiento, capacidad de decisión y mando.";

                    case 9:
                        document.body.appendChild(nuevo_parrafo);
                        nuevo_parrafo.innerText = "Para los nacidos el día " + dia + " del mes de " + meses[mes] + " del año " + año + ". El numero de nacimiento es " + numeroNacimiento + " \nSigno del genio artístico, sentido humanitario, tendencia al romance y a lo emotivamente sentimental. Animadamente amistosos y simpáticos, desinteresados, interesados en hacer de buena gana y bien su trabajo. Talento artístico y para la escritura. El número de la persistencia, generosidad y capacidad de empuje.";
                        break;

                    default:
                        alert("Lo lamentamos, hubo un error en el cálculo, intentalo nuevamente");
                };

            }

            // Limpia las variables para nuevo ingreso

            document.getElementById(idElementoNombre).value = null;
            document.getElementById(idElementoApellido).value = null;
            document.getElementById(idElementoDiaNacimiento).value = null;




        };

        // Resetea las variables

        botonReset.onclick = () => {

            document.getElementById(idElementoNombre).value = null;
            document.getElementById(idElementoApellido).value = null;
            document.getElementById(idElementoDiaNacimiento).value = null;


        }



    }

}


// Definición de la clase que almacenará la fecha 
// de nacimiento del usuario y los métodos para el calculo del numero de nacimiento

class fechaNacimiento {
    constructor(fecha) {
        this.dia = fecha.getDay() + 1; //Corrección de fecha
        this.mes = fecha.getMonth() + 1; // Corrección de fecha
        this.año = fecha.getFullYear();

    }

}

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
//
//
//  Inicio ejecución del Script, declaración de variables  ///
//
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////


let dia = 0;
let mes = 0;
let año = 0;
let nombre;
let apellido;
let i = 0;
let fecha = new Date();

// Incorporar DOM DOcument Object para el header agregando via JS un titulo con letras blancas y fondo negro
// También le puse un poco de clases de animación

let header = document.getElementById("header");
header.innerHTML = `<h1 class="animate__animated animate__bounce text-white bg-dark p-3"> TU NÚMERO DE NACIMIENTO </h1>  <h3 class= "p-3"> Calcula tu número de nacimiento astrológico introduciendo tus datos. Para calcular un nuevo número solo ingresa nuevos valores. Todos los números que calcules quedarán disponibles en la página </h3><br> `;


//Se crea un array con elementos de la clase persona. La idea es recorrer el array calculando el numero de nacimiento
//para los objetos del array

const listaPersonas = [];


//Ciclo while para ingresar personas al array las veces que se desee, llamando a los metodos de las clases que nos permiten
//ingresar los datos


listaPersonas.push(new persona(nombre, apellido, new fechaNacimiento(fecha)));
listaPersonas[i].ingresaNueva();


//continua = prompt("¿Desea ingresar una nueva persona? si/no");
//console.log(continua);

console.log("muestra array en punto i " + i + listaPersonas[i].nombre);