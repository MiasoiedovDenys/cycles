let count = 0;

while (true) {
  count++;
  let answer = prompt();
  if (answer === "continue") {
    continue;
  } else if (answer === "break") {
    break;
  }
  alert(count);
}