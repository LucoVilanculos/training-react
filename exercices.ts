//1.1
let nome: string = "Luco Vilanculos"
let numeros: number = 5;
let verdade: boolean = true;
let nulo: null;
let idenfinido: undefined ;

//1.2
function sum(n1:number, n2:number) {
     let soma = n1 + n2

    return Number(soma)
}

//1.3

function hello(): void {
    console.log("Eu sou o Luco Vilanculos")
}

//1.4
let nenhum:any = "Olá Mundo"
nenhum = 10;
nenhum = true;

console.log(nenhum) // De todos os valores recebidos ele só imprime o último número

//1.5
let desconhecido: unknown;

function tipo() {
    typeof (desconhecido = 'Olá')
    let alguem = 'Mundo'

    return desconhecido + alguem

}

//console.log(tipo())

//console.log(typeof(tipo()))

//1.6 
function tiposDeDados(valores: unknown) {
    if(typeof valores === "string"){
        return('É uma string')}
    else if(typeof valores === "number"){
        return('É um number')}
    else if(typeof valores === "boolean"){
        return('É um boolean')} else {
            return 'Inválido'
        }

}

//console.log(tiposDeDados('luco'))

//2.7

let notas: number[] = [10, 5, 20,17];

function calcularMedia(numeros: number[]): number {
   let total = numeros.reduce((numeros1, numeros) => numeros1 + numeros, 0) 
    
    return total / numeros.length
}

//console.log(calcularMedia(notas))

//2.8
type Alunos = {
    name: string,
    age: number,
    active: boolean,
};

let luno: Alunos = {
    name: "Luco Vilanculos",
    age: 24,
    active: true,

};

//2.9

interface Produtos {
    nome: string;
    price: number;
    category: string;
};

let armazem = {
    nome: 'Feijão',
    price: 80,
    category: 'Vegetais',
};

function mercearia(balcao: Produtos): string {
    return `Produto: ${balcao.nome} | Preço: ${balcao.price} | Categoria: ${balcao.category}`
};

//console.log(mercearia(armazem))

//2.10

const estoque: Produtos[] = [
    {nome: 'Feijão', price: 80, category: 'Vegetais'},
    {nome: 'Couve', price: 100, category: 'Vegetais'},
    {nome: 'Pedaços', price: 200, category: 'Carne'},
    {nome: 'Repolho', price: 80, category: 'Vegetais'},
    {nome: 'Galinha', price: 350, category: 'carne'}
];

function produtosCaros(produtos: Produtos[]): Produtos[] {
    
    return produtos.filter((produtos => produtos.price > 100))
};

//console.log(produtosCaros(estoque))

//2.11

type Pessoas = {
    nome: string,
    email: string,
    telephne: number,
};

const dados: Pessoas[] = [
    {nome: 'Luco Vilanculos', email: 'luisisaura@gmai.com', telephne: 867372562},
    {nome: 'Velasco Thomas', email: 'donodelas@gmai.com', telephne: 847372562},
    {nome: 'Telcio Ernesto', email: 'Otal@gmai.com', telephne: 867372562},
    {nome: 'Edson Uamusse', email: 'andoutanto@gmai.com', telephne: 877372562},
    {nome: 'Clemente Alexandre', email: 'carlao@gmai.com', telephne: 827372562}
];

//console.log(dados)

//2.12

interface Pessoa {
    nome: string;
    email: string;
    telephne: number;
};

//2.13

interface Endereco {
    morada: "Infulene",
    provincia: "Maputo"
};

type DadosPessoais = Pessoa & Endereco;

//3.14

enum DiasLaboraris {
    Domingo, Segunda, Terca, Quarta, Quinta, Sexta, Sabado 
}
function diasDaSemana(dias: DiasLaboraris) {
    if (dias !== DiasLaboraris.Domingo && dias !== DiasLaboraris.Sabado){
        return 'Dia Útil'
    } else{
        return "Final de Semana"
    }

};

//console.log(diasDaSemana(DiasLaboraris.Domingo))

//3.15
enum Permissao {
    Adimin, User, Guest 
}
function usuarios(usuario: Permissao) {
    if (usuario === Permissao.Adimin){
        return 'Bem pindo podes remover, adicionar qualquer um'
    } else if (usuario === Permissao.User){
        return "Bem vindo podes usofluir da nossa plataforma"
    } else {
        return "Por favor increva-se para poder usofluir da plataforma"
    }

};

//console.log(usuarios(Permissao.Guest))

//3.16
 function retorno(dado: unknown) {
    if (typeof dado === "string") {
        return dado.length
    } else if (typeof dado === "number") {
        return dado * dado
    } else {
        return "Insira letras ou Números"
    }
};

//console.log(retorno("Luco"))

//3.17
function soma(n1?:number, n2?:number) {
    if (n1 === undefined || n2 === undefined) {
        return 0;
    } else {
        return n1 + n2
    }
};

//console.log(soma())

//3.18
function daFuncao(
  numeros: number[],
  callback: (valor: number) => number
): number[] {
  return numeros.map(callback);
};

//3.19 
interface DadosBancarios {
    numero: number;
    saldo: number;
    deposito:(valor: number) => void
};

//3.20
interface FormularioContato {
    nome: string;
    email: string;
};

function enviarFormulario(form:FormularioContato): void {
    if(form.nome || form.email) {
        console.log(`O seu nome é ${form.nome} e o seu email é ${form.email}`)
    }else {
        console.log('Por favor insira o seu nome e email')
    }
};
//console.log(enviarFormulario(nome=))