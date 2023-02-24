const secretNumber = Number(prompt('Введите число:'));
if (secretNumber===7) {
    console.log('Good');

} else {
    console.log('Bad');
}

const role = prompt("Write your role:")
switch (role) {
    case "admin":
        console.log("Admin");
        break; 
    case "manager":
        console.log("Manager");
        break;
    case "ceo":
        console.log("CEO");
        break;
    default:
        console.log("We don't know you!")
}