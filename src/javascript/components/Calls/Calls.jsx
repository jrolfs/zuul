import React from 'react';
import component from 'omniscient';
import observer from 'omnipotent/decorator/observer';

import structure from '../../structure';


const Calls = component('Calls', () =>
  <ul>
    <li>call 1</li>
    <li>call 2</li>
  </ul>
);


export default observer(structure, { calls: ['calls'] }, Calls);
