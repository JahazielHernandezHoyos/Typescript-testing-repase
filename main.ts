// Definir una variable en typescript
let texto:string = "Desarrollo typescript";
let numero:number = 123;
let booleano:boolean = true;
let arreglo:any = "loquequieras";

booleano = false;

console.log(texto, numero, booleano, arreglo)

let personas:string[] = ["Juan", "Pedro", "Maria", "Luis"];

personas.map((persona)=> {
    console.log(persona);
})
