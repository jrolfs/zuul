import React from 'react';
import component from 'omniscient';
import observer from 'omnipotent/decorator/observer';

import structure from '../../structure';


const Login = component('Login', () => {
  return (
    <form className="login">
      <label>
        <input
          ref="email"
          placeholder="email"
          defaultValue="email address" />
      </label>
      <label>
        <input
          ref="pass"
          placeholder="password" />
      </label>
      <button type="submit">login</button>
    </form>
  );
});


export default observer(structure, { session: ['session'] }, Login);
