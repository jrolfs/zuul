import immstruct from 'immstruct';


const structure = immstruct({
  session: { authenticated: false },
  calls: [{
    time: new Date(),
    method: 'forward',
    recipient: { id: 1, name: 'Jocelyn' }
  }, {
    time: new Date(),
    method: 'code',
    owner: { id: 1, name: 'Mike' }
  }]
});


export default structure;
