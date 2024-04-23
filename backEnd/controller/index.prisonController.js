const prisoners = [
    {
        "id": 1,
        'name': 'Nico Faith Enriquez',
        'age': 24,
        'crime': 'Possesion of Illegal Drugs',
        'sentence': '15 years',
    },
    {
        "id": 2,
        'name': 'Jan Dominic Dequina',
        'age': 21,
        'crime': 'Murder',
        'sentence': '40 years',
    },
    {
        "id": 3,
        'name': 'Rovic',
        'age': 22,
        'crime': 'Robbery',
        'sentence': '10 years',
    },
    {
        "id": 4,
        'name': 'Given', // Corrected the typo here
        'age': 28,
        'crime': 'Fraud',
        'sentence': '5 years',
    }
];


module.exports.prisoners = (req, res) =>{
  res.json({'PRISONERS' : prisoners});
};

// Search a prisoner by id using /prisoner/{id}
// Method name must be prisoner
module.exports.prisoner = (req, res) =>{
  const {id} = req.params

  console.log(id)

  const matchingPrisoner = prisoners.filter(
      (prisoner) =>  prisoner.id === parseInt(id)
  );
  if (matchingPrisoner.length === 0){
      res.status(404).json({'Error': `Prisoner with id ${id} not found`});
  } else {
      res.status(200).json({'prisoner': matchingPrisoner[0]});
  }
};


module.exports.searchPrisoner = (req, res) => {
    const { id, name } = req.query;

    console.log(id, name);

    const matchingPrisoner = prisoners.filter(
        p => p.id === parseInt(id) && p.name === name
    );

    if (matchingPrisoner.length === 0) {
        res.status(404).json({ 'Error': `Prisoner with id ${id} and name ${name} not found` });
    } else {
        res.status(200).json({ 'Prisoner': matchingPrisoner[0] });
    }
};

module.exports.greet = (req, res) => {
    const { name } = req.query;
    console.log(name);
    res.status(200).json({ message: `Hello, ${name}!` });
};
