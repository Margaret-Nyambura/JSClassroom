const personAge = (age) => {
    if(age >= 18){
        console.log("You are an adult");
    }else if (age > 13 && age < 18){
        console.log("You are a teenager");
    }else {
        console.log("You are a child");
    }
};
personAge(15);

// Switch

const greeting = (dayOfTheWeek) => {
    switch (dayOfTheWeek) {
        case "Monday":
            console.log("Hello Monday");
            break;
           
        case "Tuesday":
        console.log("Hello Tuesday");
        break;

        case "Wednesday":
        console.log("Hello Wednesday");
        break;

        case "Thursday":
        console.log("Hello Thursday");
        break;

        case "Friday":
        console.log("Hello Friday");
        break;

        case "Saturday":
        console.log("Hello Saturday");
        break;

        case "Sunday":
        console.log("Hello Saturday");
        break;

        default:
            console.log("Invalid day of the week!");
    }

}
greeting('Saturday')