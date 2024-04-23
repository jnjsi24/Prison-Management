const guards = [
    {
        "id": 1,
        'name': 'Irish Lince',
        'age': 24,
        'rank': 'Senior Guard',
        'yearsOfService': 5,
        'active': true
    },
    {
        "id": 2,
        'name': 'Ate Sam the Lady Guard',
        'age': 21,
        'rank': 'Junior Guard',
        'yearsOfService': 2,
        'active': false
    },
    {
        "id": 3,
        'name': 'Bossing Guard',
        'age': 22,
        'rank': 'Senior Guard',
        'yearsOfService': 7,
        'active': true
    },
    {
        "id": 4,
        'name': 'Kuya Guard',
        'age': 28,
        'rank': 'Junior Guard',
        'yearsOfService': 3,
        'active': true
    }
];


module.exports.guards = (req, res) => {
    res.json({ 'GUARDS': guards });
};

module.exports.guard = (req, res) => {
    const { id } = req.params;

    const matchingGuard = guards.find(guard => guard.id === parseInt(id));

    if (!matchingGuard) {
        res.status(404).json({ 'Error': `Guard with id ${id} not found` });
    } else {
        res.status(200).json({ 'guard': matchingGuard });
    }
};

module.exports.searchGuard = (req, res) => {
    const { id, rank, yearsOfService } = req.query;

    const matchingGuards = guards.filter(
        guard => guard.id === parseInt(id) &&
                 guard.rank === rank &&
                 guard.yearsOfService === parseInt(yearsOfService)
    );

    if (matchingGuards.length === 0) {
        res.status(404).json({ 'Error': `Guard with ID ${id}, rank ${rank}, and years of service ${yearsOfService} not found` });
    } else {
        res.status(200).json({ 'Guards': matchingGuards });
    }
};

module.exports.removeGuard = (req, res) => {
  const { id } = req.params;
  console.log(id);

  const index = guards.findIndex(guard => guard.id === parseInt(id));

  if (index === -1) {
    res.status(404).json({ 'error': `Guard with ${id} not found` });
  } else {
    const deletedGuard = guards[index];
    guards.splice(index, 1);
    res.status(200).json({ 'deleted guard': deletedGuard });
  }
};


module.exports.greet = (req, res) => {
    const { name } = req.query;
    res.status(200).json({ message: `Hello, ${name || 'stranger'}!` });
};
