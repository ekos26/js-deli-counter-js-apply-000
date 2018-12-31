function takeANumber(line, newPerson) {
  line.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (!line.length) {
    return 'There is nobody waiting to be served!';
  } else {
    return 'Currently serving ' + line.shift() + ".";
  }
}

function currentLine(line) {
  const arr = [];
  
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    for (let i = 0; i < line.length; i++) {
      arr.push(`${i+1}. ${line[i]}`);
    }
    // line.forEach(function(element, i) {
    //   arr.push(`${i + 1}. ${element}`)
    // })
    return `The line is currently: ${arr.join(', ')}`;
  }
}




var ticketNumber = 1;

function takeANumber(line){
  line.push(ticketNumber);
  return 'Welcome! You\'re ticket number #' + ticketNumber++;
  
}

takeANumber(line) // "Welcome! You're ticket number #1" //[1]
takeANumber(line) // "Welcome! You're ticket number #2" [1,2]

nowServing(line) // "Currently serving #1" [2]
nowServing(line) // "Currently serivng #2" []

takeANumber(line) // "Welcome! You're ticket number #3" [3]




