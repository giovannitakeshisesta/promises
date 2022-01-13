const yes = "yes"

function wakeUp(xxx){
  return new Promise((resolve,reject) => {
    xxx === "yes" ? resolve("I woke up") : reject("I am dead")
  } ) 
}

function breakfast(xxx){
  return new Promise((resolve,reject) => {
    xxx === "yes" ? resolve("I ate") : reject("I am hungry")
  } ) 
}

function work(xxx){
  return new Promise((resolve,reject) => {
    xxx === "yes" ? resolve("I worked") : reject("I've been fired")
  } ) 
}

function beer(xxx){
  return new Promise((resolve,reject) => {
    xxx === "yes" ? resolve("I drunk") : reject("I am DRY")
  } ) 
}

// async 
const day = async () => {
  try {
    const step0 = await wakeUp(yes)
    const step1 = await breakfast(yes)
    const step2 = await work(yes)
    const step3 = await beer(yes)
    console.log("ASYNC /what a nice day, lets go to sleep")
  }
  catch (message) {console.log("ASYNC/",message,"my day ends here")}
  finally {console.log("ASYNC/tomorrow is another day")}
}
day()


// Promise all
Promise.all([
  wakeUp(yes),
  breakfast(),
  work(yes),
  beer(yes)
]) 
.then (
  (allvalues) => console.log("ALL/ what a nice day, lets go to sleep!"),
  (error) => console.log("ALL/",error, "/ my day ends here")
  )
.finally(()=> console.log("ALL/tomorrow is another day"))



