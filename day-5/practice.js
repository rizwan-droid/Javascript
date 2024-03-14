for (let i = 1; i <= 10; i++) {
  
    if (i % 2 === 0) {
      console.log("Even number:", i);
      continue; 
    }
  
   
    if (i > 5) {
      console.log("Breaking the loop at", i);
      break; 
    }
  
    
    console.log("Odd number less than or equal to 5:", i);
  }