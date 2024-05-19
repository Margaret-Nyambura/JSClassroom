function greet(userName, callback){
    console.log(`Hello there ${userName}`);
    callback();
};

function intro(){
    console.log('This is me');
    
};
greet("Helen", intro);


// setTimeout(intro, 5000);


setInterval(function(){
    console.log('This is an interval');
},1000);