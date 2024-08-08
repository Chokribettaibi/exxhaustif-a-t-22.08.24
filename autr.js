let Stoke = [
    {
        cart1: ['1002', '1003'],
        cart2: ['1005', '1006'],
        palet1: {car1: ['cod', 5, 'cod']},
    }
];

console.log(Stoke[0].palet1.car1[0]);
console.log(Stoke[0].palet1.car1.indexOf(5));
console.log(Stoke[0].palet1.car1[Stoke[0].palet1.car1.indexOf(5) + 1]);
