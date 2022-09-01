Algoritmo organizadorEdades
	Dimension edades[10]
	Definir adultoJoven,adultoMenor,menorDeEdad Como Entero
	Para i<-1 Hasta 10 Hacer
		Escribir 'Ingrese la ',i,' edad'
		Leer edad
		Si edad>120 O edad<=0 Entonces
			Escribir 'El dato ',edad,' no es valido'
			i <- i-1
		SiNo
			Si edad>=60 Entonces
				adultoJoven <- adultoJoven+1
				edades[i] <- edad
			FinSi
			Si edad>=18 Y edad<=60 Entonces
				adultoMenor <- adultoMenor+1
				edades[i] <- edad
			FinSi
			Si edad>0 Y edad<=17 Entonces
				menorDeEdad <- menorDeEdad+1
				edades[i] <- edad
			FinSi
		FinSi
	FinPara
	edadMayor <- edades[1]
	edadMenor <- edades[1]
	Para i<-1 Hasta 10 Hacer
		Si edades[i]>edadMayor Entonces
			edadMayor <- edades[i]
		FinSi
		Si edades[i]<edadMenor Entonces
			edadMenor <- edades[i]
		FinSi
	FinPara
	promedio <- (edades[1]+edades[2]+edades[3]+edades[4]+edades[5]+edades[6]+edades[7]+edades[8]+edades[9]+edades[10])/10
	Escribir 'Las edades del arreglo son: ',edades[1],', ',edades[2],', ',edades[3],', ',edades[4],', ',edades[5],', ',edades[6],', ',edades[7],', ',edades[8],', ',edades[9],', ',edades[10],'.'
	Escribir 'La edad más alta del arreglo es de ',edadMayor,' años'
	Escribir 'La edad más baja del arreglo es de ',edadMenor,' años'
	Escribir 'El promedio de edades es de ',promedio,' años'
	Escribir 'el total de adultos mayores es de ',adultoJoven
	Escribir 'el total de mayores de edad es de ',adultoMenor
	Escribir 'el total de menores de edad es de ',menorDeEdad
FinAlgoritmo
