function FakeFunction() {
    this.testThing1 = ''
  }
  
  // my notes on functions
  let myAdd1 = function (x,y):number {
    return x+y;
  }
  let myAdd2: (x:number, y:number) => number = function (
    x: number,
    y: number
  ):number {
    return x+y;
  };
  let myAdd3 = (function(a:number, b:number){
    console.log(a+b)
    return a+b;
  })(1,2);
  // recursion
  function sumOfSquares(num: number):number {
    let sum: number = Math.pow(num,2);
    if(num==1) {
      return 1
    }else{
      return sum + sumOfSquares(num-1) // calls itself
    }
  }
  // nesting functions
  function convertToChicken(name: string) {
    function getChickenName(name: string) {
      return `Chicken ${name}`
    }
    return getChickenName(name);
    // 1. call convertToChicken(name)
    // 2. name goes into getChickenName(name) which is defined inside the function
    // 3. goes into `Chicken ${name}` gets returned.
    // can this function be used outside the function it is defined in?
  } convertToChicken('Alfred');
  // let and const are block-scoped
  function convertToChickenAgain(name:string){
    let originalName = name;
    function getChickenName(newName:string){
      console.log(`originalName will still work in this scope. let and const can go in here. \n Original Name: ${originalName}`);
      return `Chicken ${newName}`;
    }
    return getChickenName(name);
  } convertToChickenAgain("Peanut");
  // function in object
  const bird = {
    chirp: function() {
      // bird object will go in ${this}???
      console.log('chirp', this);
    }
  }
  const dog = {
    bark(){
      // dog object will go in ${this}???
      console.log('bark', this);
    }
  }
  const cat = {
    meow: () => {
      // will give an error bc ${this} is a globalThis value
      console.log('meow', this);
    }
  }
  function AClass() {
    this.aFunction = function() {
      return "I did the thing";
    }
  }