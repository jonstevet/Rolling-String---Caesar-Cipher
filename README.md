# Rolling-String---Caesar-Cipher
The Caesar Cipher technique is one of the earliest and simplest methods of encryption technique. It’s simply a type of substitution cipher, i.e., each letter of a given text is replaced by a letter with a fixed number of positions down the alphabet. For example with a shift of 1, A would be replaced by B, B would become C, and so on.  


- - -
  
`rollinString('abc', ['0 0 L','0 0 R'])`  

input de tipo string `'abc'`  
input de tipo string array `['0 0 L','0 0 R']`  

Al usar la funcion rollingString debes pasarle dos parametros, el primero de tipo string ejemplo: 'abc', y el segundo parametro de tipo array of string ejemplo: ['0 0 L', '1 1 R'], nota que los caracteres de este array estan separados por espacio, el primer y segundo caracter (char[0] y char[2]) especifica el indice del caracter en el primer parametro que rotará segun la direccion especificada en el tercer caracter (char[4]) L = left y R = right.

---

Tecnologias usadas:  
>**Javascript**  
>**Node.js**  
>**Jest**  
>**Babel** 


Pruebas unitarias:  
`npm run test` 

---
Esto se realiza como desarrollo de un test laboral.