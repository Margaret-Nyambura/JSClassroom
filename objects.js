const cup = {
color : "Red",
shape : "Circular",
weight: '50 grams',
size:'medium',
// nested objects
description:{
    drinktype:'tea',
    temperature:'hot'
},
drink: function(){
    console.log('Use me to drink');
    console.log(`The main purpose of this cup is to drink ${this.description.temperature} ${this.description.drinktype}`);
}
};




// property 
console.log({color: cup.color});
console.log('size', cup.size);
console.log('temperature', cup.description.temperature);

// adding properties
cup.material = 'ceramic';
console.log({cup});

// editing property
cup.color = 'green';
console.log({cup});

// deleting property
delete cup.material;
console.log({cup});



// OBJECT METHODS
cup.drink()

// const  keys = Object.keys(cup);
// console.log({keys});

const values = Object.values(cup);
console.log({values});

Object.keys(cup).forEach(item =>{
    console.log({key:item, values:cup[item]});
})
