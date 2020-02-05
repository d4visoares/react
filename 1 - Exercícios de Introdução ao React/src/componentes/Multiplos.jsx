// Sempre que tivermos código em JSX, deveremos importar o React
import React from 'react';

// Nós podemos exportar componentes de forma estruturada da maneira abaixo
export const BoaTarde = (props) => <h1>Boa Tarde {props.nome}!</h1>

export const BoaNoite = (props) => <h1>Boa Noite {props.nome}!</h1>

// Também podemos escrever a foma estruturada assim
// export {BoaNoite, BoaTarde};

// Podemos exportar nossos componentes de maneira desestruturada,
// passando como default, assim na hora do import daremos um nome a ele
// e ultilizaremos os seus componentes passando o nome do import
// seguido de ponto e o nome do componente. Exemplo (Multi.BoaTarde)
export default {BoaTarde, BoaNoite};