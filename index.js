function scuberGreetingForFeet(someValue){
  if (someValue <= 400){
    return "This one is on me!";
  }
  else if (2000 < someValue && someValue < 2500){
    return "I will gladly take your thirty bucks.";
  }
  else if (someValue > 2500){
    return "No can do."
  }
}

function ternaryCheckCity(cityName){
  return (cityName === 'NYC' ? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip(tipAmount){
  switch(tipAmount){
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
  }
}