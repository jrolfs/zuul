import React from 'react';
import component from 'omniscient';
import observer from 'omnipotent/decorator/observer';

import structure from '../../structure';


const Login = component('Login', () =>
  <form className="login">
    <label htmlFor="email">
      <input
        id="email"
        placeholder="email"
        defaultValue="email address"
      />
    </label>
    <label htmlFor="password">
      <input
        id="password"
        placeholder="password"
      />
    </label>
    <button type="submit">login</button>
  </form>
);


export default observer(structure, { session: ['session'] }, Login);
