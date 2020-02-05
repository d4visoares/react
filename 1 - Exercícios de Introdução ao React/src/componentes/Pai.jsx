import React, { Children } from 'react';
import Filho from './Filho';
import {childrenWithProps} from '../utils/utils';



export default (props) => 
  <div>
    <h1>{props.nome} {props.sobrenome}</h1> 
    <h2>Filhos</h2>
    <ul>
      {childrenWithProps(props)}
    </ul>
  </div>
