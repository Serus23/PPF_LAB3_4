const dogs = [
  {
    id: "dog-1",
    name: "Poodle",
    temperament: [
      "Intelligent",
      "Active",
      "Alert",
      "Faithful",
      "Trainable",
      "Instinctual",
    ],
  },
  {
    id: "dog-2",
    name: "Barnese Mountain Dog",
    temperament: ["Affectionate", "Intelligent", "Loyal", "Faithful"],
  },
  {
      id: 'dog-3',
      name: 'Labrador Retriver',
      temperament: [
          'Intelligent',
          'Even Tempered',
          'Kind',
          'Agile',
          'Outgoing',
          'Trusting',
          'Gentle',
      ],
  },
  {
      id: 'dog-4',
      name: 'Puszek',
      temperament: [
          'Aggresive',
          'Vigorous',
          'Intelligent',
          'Instinctual',
          'Untrainable'
      ]
  },
  {
      id: 'dog-5',
      name: 'Kulka',
      temperament: [
          'Kind',
          'Lazy',
          'Sluggish',
          'Sweet',
          'Loyal',
      ]
  }
]

console.log(dogs.find(dog => dog.name ==='Bernese Mountain Dog'));
console.log(dogs.some(dog => dog.temperament.includes('Aggressive')));
console.log(dogs.some(dog => dog.temperament.includes('Trusting')));
console.log(dogs.every(dog => dog.temperament.includes('Intelligent')));
console.log(dogs.map(dog => dog.name));
console.log(dogs.filter(dog => dog.temperament.includes('Faithful')));
console.log(dogs.reduce((allTemperaments, dog) => {
    return [...allTemperaments, ...dog.temperament]
}, []));
console.log(dogs.find(dog => dog.name === 'Puszek'));
console.log(dogs.some(dog => dog.temperament.includes('Lazy')));
console.log(dogs.every(dog => dog.temperament.includes('Vigorous')));
