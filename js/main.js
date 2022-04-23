// Definición de la clase que almacenará la fecha 
// de nacimiento del usuario y los métodos para el calculo del numero de nacimiento

class fechaNacimiento {
    constructor(dia, mes, año) {
        this.dia = dia;
        this.mes = mes;
        this.año = año;

    }

    // Método para obtener el nombre del mes a partir del número entre 1-12

    calculaNombreMes() {

        switch (this.mes) {
            case 1:
                return "Enero";
                break;
            case 2:
                return "Febrero";
                break;

            case 3:
                return "Marzo";
                break;
            case 4:
                return "Abril";
                break;
            case 5:
                return "Mayo";
                break;
            case 6:
                return "Junio";
                break;
            case 7:
                return "Julio";
                break;
            case 8:
                return "Agosto";
                break;
            case 9:
                return "Septiembre";
                break;
            case 10:
                return "Octubre";
                break;
            case 11:
                return "Noviembre";
                break;
            case 12:
                return "Diciembre";
                break;
            default:
                return false;
        }


    }

    // Metodo para ingresar una fecha de nacimiento válida

    ingresaFechaValida() {
        let diaValido = false;
        let mesValido = false;
        let añoValido = false;

        // Ingresa numero del día de nacimiento y valida 
        // que esté entre 1 y 31

        do {

            this.dia = parseInt(prompt("Ingresa el dia que naciste:"));
            if (1 <= this.dia && this.dia <= 31) {
                diaValido = true;
            } else {
                alert("El dia de nacimiento ingresado no es válido, ingresalo nuevamente");
            }

        } while (diaValido == false)


        // Ingresa numero del mes  de nacimiento y valida 
        // que esté entre 1 y 12

        do {

            this.mes = parseInt(prompt("Ingresa el mes en que naciste:"));
            if (1 <= this.mes && this.mes <= 12) {
                mesValido = true;
            } else {
                alert("El número de mes ingresado no es válido, ingresa un número entre 1 y 12");
            }

        } while (mesValido == false)

        // Ingresa numero del año de nacimiento y valida 
        // que esté entre 1900 y 2022

        do {

            this.año = parseInt(prompt("Ingresa el año en que naciste:"));
            if (1900 <= this.año && this.año <= 2022) {
                añoValido = true;
            } else {
                alert("El número de año ingresado no es válido, ingresa tu año de nacimiento nuevamente");
            }

        } while (añoValido == false)


    }


    // Metodo para obtener el número de nacimiento se trata de sumar los digitos del dia, mes y año de nacimiento hasta
    // reducirlos a un único dígito
    // Para ello se puede utilizar el enfoque del Problema del Número Raiz documentado en los siguientes sitios (en lugar de loops)
    // https://www.geeksforgeeks.org/finding-sum-of-digits-of-a-number-until-sum-becomes-single-digit/
    // https://en.wikipedia.org/wiki/Digital_root


    calculaNumeroNacimiento() {
        let numeroNacimiento = parseInt(this.dia + this.mes + this.año);

        console.log("Entrando al metodo calculaNumeroNacimiento con valor de inicio :" + numeroNacimiento);

        numeroNacimiento = (numeroNacimiento % 9 == 0) ? 9 : (numeroNacimiento % 9);

        console.log("Entrando al metodo calculaNumeroNacimiento con valor calculado :" + numeroNacimiento);


        // Entrega numero de nacimiento y significado



        switch (numeroNacimiento) {
            case 1:
                alert("Para los nacidos el día " + this.dia + " del mes de " + this.calculaNombreMes() + " del año " + this.año + ". El numero de nacimiento es " + numeroNacimiento + " \nSigno de la creatividad, independencia, originalidad, sentido del yo y autosuficiencia. Naturaleza individualista y agresiva. Iniciadores de acciones, espíritu pionero, coraje, extraordinaria voluntad y determinación. Es símbolo del liderazgo, aquellos con capacidades y habilidades para el mando. Ambiciosos y dispuestos a asumir riesgos para llegar a la cima. Llamados a destacar en el trabajo y los negocios.");
                break;
            case 2:
                alert("Para los nacidos el día " + this.dia + " del mes de " + this.calculaNombreMes() + " del año " + this.año + ". El numero de nacimiento es " + numeroNacimiento + " \nSigno de la empatía, cooperación, adaptabilidad, consideración hacia los demás, supersensibilidad hacia las necesidades de los demás. Símbolo del equilibrio, la unión y la receptividad. Es buen socio, compañero o pareja; también hace un magnífico papel como arbitro o mediador: Es modesto, sincero, influenciable espiritualmente y buen diplomático.");
                break;

            case 3:
                alert("Para los nacidos el día " + this.dia + " del mes de " + this.calculaNombreMes() + " del año " + this.año + ". El numero de nacimiento es " + numeroNacimiento + " \nAuto-expresivo en muchas vertientes y con capacidad comunicativa; Es el signo de la expresión artística, sociabilidad, simpatía, superficialidad y espíritu derrochador. Símbolo de la comunicación, la interacción y la neutralidad. Incansable optimismo, felicidad y del disfrute de la vida. Pueden ser amantes divertidos.");
                break;
            case 4:
                alert("Para los nacidos el día " + this.dia + " del mes de " + this.calculaNombreMes() + " del año " + this.año + ". El numero de nacimiento es " + numeroNacimiento + " \nFuerte sentido del orden y los valores. Es el signo de lo práctico, la lealtad, la rigidez y la represión. También es símbolo de la creación, de la lucha contra los límites, de la mentalidad científica, la atención al detalle, capaz de alcanzar logros importantes y con ingenio para la organización. Finas habilidades administrativas.");
                break;
            case 5:
                alert("Para los nacidos el día " + this.dia + " del mes de " + this.calculaNombreMes() + " del año " + this.año + ". El numero de nacimiento es " + numeroNacimiento + " \nSigno de la acción y la inquietud. Es el símbolo de la libertad, la adaptabilidad, el espíritu viajero y aventurero, pero también de la inconsistencia y del abuso de los sentidos. Expansivo y sociable, de nuevas y visionarias ideas; de pensamientos rápidos, polifacético, curioso y explorador; ingenioso a la hora de utilizar la libertad de forma constructiva.");
                break;
            case 6:
                alert("Para los nacidos el día " + this.dia + " del mes de " + this.calculaNombreMes() + " del año " + this.año + ". El numero de nacimiento es " + numeroNacimiento + " \nSigno del amor, la responsabilidad, la comprensión, pero también de personas entrometidas y celosas. Es un número asociado a la honestidad y fidelidad. En lo positivo su fuerte sentido de la responsabilidad, artístico, equilibrados, comprensivos con los demás, humanitarios, generosos, amantes del hogar y de los asuntos domésticos, prestan ayuda a otros.");
                break;
            case 7:
                alert("Para los nacidos el día " + this.dia + " del mes de " + this.calculaNombreMes() + " del año " + this.año + ". El numero de nacimiento es " + numeroNacimiento + " \nSigno del pensamiento, la espiritualidad, la conciencia, el análisis psíquico, la sabiduría. El número del intelecto, el idealismo y la represión. Son personas amantes de la lectura, el estudio y las ansias por aprender. Tendentes a proyectar su vida en una esfera de idealismo y actividad intelectual. Habilidades para el análisis y la investigación y la inteligente búsqueda del conocimiento; mentalidad científica y con capacidad de inventiva; estudiosa, meditadora; de personalidad encantadora; amantes de la soledad y de la paz; perfeccionistas.");
                break;
            case 8:
                alert("Para los nacidos el día " + this.dia + " del mes de " + this.calculaNombreMes() + " del año " + this.año + ". El numero de nacimiento es " + numeroNacimiento + " \nSigno del poder, la habilidad ejecutiva, la gestión, poder material y una tendencia al sacrificio pero también a no tener escrúpulos. Habilidades políticas, experto en manejar el poder y la autoridad, trabajan por causas y por alcanzar el reconocimiento, capacidad de decisión y mando.");
                break;
            case 9:
                alert("Para los nacidos el día " + this.dia + " del mes de " + this.calculaNombreMes() + " del año " + this.año + ". El numero de nacimiento es " + numeroNacimiento + " \nSigno del genio artístico, sentido humanitario, tendencia al romance y a lo emotivamente sentimental. Animadamente amistosos y simpáticos, desinteresados, interesados en hacer de buena gana y bien su trabajo. Talento artístico y para la escritura. El número de la persistencia, generosidad y capacidad de empuje.");
                break;

            default:
                alert("Lo lamentamos, hubo un error en el cálculo, intentalo nuevamente");
        }


    }


}


// Inicio ejecución del Script

let dia = 0;
let mes = 0;
let año = 0;

let nuevaFecha = new fechaNacimiento(dia, mes, año);

console.log("Invocamos el metodo ingresaFecha Valida");

nuevaFecha.ingresaFechaValida();

console.log("Mostramos fecha luego del metodo");

console.log(nuevaFecha);

console.log("Probando metodo de clase fecha Nacimiento. Naciste en el mes de " + nuevaFecha.calculaNombreMes());

nuevaFecha.calculaNumeroNacimiento();