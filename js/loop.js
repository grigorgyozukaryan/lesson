// while

let i = 100
      while(i>1){
        --i;
        console.log(i)
        
      };
 
let x = 1
     while(x <= 5000){
        if(x === 20){
           break
        }
        ++x;
        console.log("hello world")
     };

     let z = 50
     while( 50 > 5 ){
          --z;
          console.log(z)
          if(z === 18){
            break
           }
     }

     let count = 60
     while(count !== 50){
      count--
       
        
       console.log(count)
     };

     let s =  ["mercedes","bmw","haval", "nissan"]

     while(s.length === 4){
      console.log(true);
      if(s[0]){
          console.log("mercedes")
      }
      break
      }

      //for
    const testarr = [ 1,6,5,4,7,8,9,25,654,262,"jack","Garnik" ,89, 54, "Hakob"]
      for(j = 0; j < testarr.length; j++ ){
          if(testarr[j] === "jack"){
             console.log(testarr[j])
             break
          }
      };


      const obj ={
        name:"garnik",
        lastName: "manukyan",
        age: 17,
        city: "Erevan"
      };
    const arrVal = Object.values(obj);
    console.log(arrVal)

for(i=0; i < arrVal.length; i++ ) {
  if(typeof(arrVal[i] === "number")){
    if(arrVal[i] < 18){
      console.log("tinager")
        break
      }
  }

};

    let testArrIndex = 0

for(i = 0; i< testarr.length; i++){
  console.log(testarr[i] + `-${testArrIndex ++}`)
 
};

for(i = 0; i< testarr.length; i++){
  

 
};

let someText = "";

for (let i = 0; i < 10; i++) {

  if (i === 3) { continue; }
  someText = "The number is " + i;
  console.log(someText);

};

const carTradeMarks = ["Mercedes","bmw","great wall","ferrari","lamborghini","FORD"];
const carModels = ["e36","Slr","maranello","raptor","huracan","hover"];



for(i = 0; i < carTradeMarks.length ; i++){

  if(carTradeMarks[i] === "Mercedes"){
     let mark = carTradeMarks[i]
     for(x = 0; x < carModels.length ; x++)
     if(carModels[x] === "Slr"){
     let model = carModels[x]
     console.log(`${mark}- ${model}` )
    };   
}else if(carTradeMarks[i] === "FORD"){
  let mark = carTradeMarks[i]
  for(x = 0; x < carModels.length ; x++)
  if(carModels[x] === "raptor"){
   let model = carModels[x]
  console.log(`${mark}- ${model}` )
  };  
}else if(carTradeMarks[i] === "lamborghini"){
  let mark = carTradeMarks[i]
  for(x = 0; x < carModels.length ; x++)
  if(carModels[x] === "huracan"){
   let model = carModels[x]
  console.log(`${mark}- ${model}` )
  };  
};

};
 
let l = 20;
let num = 1;
do{ 

  console.log("loop" + num++ )
  l++
}while( l > 20 && l < 30)

