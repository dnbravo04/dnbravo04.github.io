//Función que, al hacer click en el botón Empezar algoritmo, llama a la función algoritmo numeros
document.getElementById("submit").addEventListener("click", function(element){
    algoritmoNumeros();
    element.preventDefault();
    
});
/**
 * Función que me permite agregar los numeros a un arreglo y clasificarlos de acuerdo a los requerimientos.
 */
function algoritmoNumeros(){
    let arregloNumeros = []
    let adultoMayor = 0;
    let mayorDeEdad = 0;
    let menorDeEdad = 0;
    
    let numeros = document.getElementsByClassName("numero");
    
    for (let i=0; i<numeros.length; i++){
        let numero = parseInt(numeros[i].value);
        if (numero >= 60){
            adultoMayor += 1;
            arregloNumeros.push(numero);
        }
        else if (numero >= 18 && numero < 60){
            mayorDeEdad += 1;
            arregloNumeros.push(numero);
        }
        else if (numero > 0 && numero <=17){
            menorDeEdad += 1
            arregloNumeros.push(numero)
        }
    }
    let mayor = Math.max(...arregloNumeros);
    let menor = Math.min(...arregloNumeros);
    let promedio = arregloNumeros.reduce((a,b) => a + b,0)/arregloNumeros.length;
    document.getElementById('algoritmo').innerHTML = `
    <p>Las edades del arreglo son las siguientes: ${arregloNumeros.sort()}</p> 
    <p>la edad más alta en el arreglo es de ${mayor} años </p>
    <p>la edad más baja en el arreglo es de ${menor} años</p>
    <p>el promedio de edad es de ${promedio} años</p>
    <p>el total de adultos mayores es de ${adultoMayor}</p>
    <p>el total de mayores de edad es de ${mayorDeEdad}</p>
    <p>el total de menores de edad es de ${menorDeEdad}</p>
    <button onclick="regresar()">volver a la forma</button>
    `;
}

/**
 * Función que elimina los resultados y vuelve a colocar el formulario
 */
function regresar(){
    document.getElementById("algoritmo").innerHTML=`
    <form id="formularioNumeros">
                    <label for="numero1">Primer numero:</label>
                    <input type="number" name="n1" id="n1" min="1" max="120" class="numero"
                        placeholder="Ingresa el numero aquí..." required /><br>
                    <label for="numero2">Segundo numero:</label>
                    <input type="number" name="n2" id="n2" min="1" max="120" class="numero"
                        placeholder="Ingresa el numero aquí..." required /><br>
                    <label for="numero3">Tercer numero:</label>
                    <input type="number" name="n3" id="n3" min="1" max="120" class="numero"
                        placeholder="Ingresa el numero aquí..." required /><br>
                    <label for="numero4">Cuarto numero:</label>
                    <input type="number" name="n4" id="n4" min="1" max="120" class="numero"
                        placeholder="Ingresa el numero aquí..." required /><br>
                    <label for="numero5">Quinto numero:</label>
                    <input type="number" name="n5" id="n5" min="1" max="120" class="numero"
                        placeholder="Ingresa el numero aquí..." required /><br>
                    <label for="numero6">Sexto numero:</label>
                    <input type="number" name="n6" id="n6" min="1" max="120" class="numero"
                        placeholder="Ingresa el numero aquí..." required /><br>
                    <label for="numero7">Septimo numero:</label>
                    <input type="number" name="n7" id="n7" min="1" max="120" class="numero"
                        placeholder="Ingresa el numero aquí..." required /><br>
                    <label for="numero8">Octavo numero:</label>
                    <input type="number" name="n8" id="n8" min="1" max="120" class="numero"
                        placeholder="Ingresa el numero aquí..." required /><br>
                    <label for="numero9">Noveno numero:</label>
                    <input type="number" name="n9" id="n9" min="1" max="120" class="numero"
                        placeholder="Ingresa el numero aquí..." required /><br>
                    <label for="numero10">Decimo numero:</label>
                    <input type="number" name="n10" id="n10" min="1" max="120" class="numero"
                        placeholder="Ingresa el numero aquí..." required /><br>
                    <button id="submit" form="formularioNumeros" [disabled]="!formularioNumeros.valid">
                        Empezar algoritmo
                    </button>
                </form>
    `;
}