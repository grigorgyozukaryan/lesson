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

 
 


