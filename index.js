var katzDeli = []

function takeANumber(katzDeli,name){
  katzDeli.push(`${name}`)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}
takeANumber(katzDeli,Ada)

function nowServing(katzDeli){
  let i = 0
  while (i < katzDeli.length){
    i++
  }
  if (katzDeli.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
    return (`Currently serving ${katzDeli.shift()}.`)
  }
}

function currentLine(line){
  var line = []
  let i = 0
  for (i < line.length){
    line.push(`${i + 1}. ${line[i]}`)
    i++
  }
  if (line.length === 0){
    return "The line is currently empty."
  }
  else {
    return "The line is currently: " + line
  }
}
