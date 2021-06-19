// const isLeapYear = (year) => {

//     if (year % 4 === 0) {

//       if (year % 100 === 0) {
//         if (year % 400 === 0) {
//           return `${year} is a Leap Year`;
//         } else {
//           return `${year} is not a Leap Year`;
//         }
//       } else {
//         return `${year} is a Leap Year`;
//       }
//     } else {
//       return `${year} is not a Leap Year`;
//     }
//   };
  



  let result = document.getElementById("result")
  let btn = document.getElementById("btn")

  // console.log(btn);
  
  // Validating function
  const isNotZeroOrNotANum = (year) =>
    year <= 0 || isNaN(year) ? true : false;
  
    // Leap Year Calculation function
  const isLeapYear = () => {
    // collecting user input
    let yearValue = document.getElementById("year").value
    console.log(parseInt(yearValue));
  
  
    // Invalid message display
    let message;
  

    if (isNotZeroOrNotANum(parseInt(yearValue))) {
      message = `Year should be a number greater than 0.`;
      return (result.innerHTML = message);

    } else {

      if (yearValue % 4 === 0) {
  
        if (yearValue % 100 === 0) {
          if (yearValue % 400 === 0) {
            message = `${yearValue} is a Leap Year`;
          } else {
            message = `${yearValue} is not a Leap Year`;
          }
        } else {
          message = `${yearValue} is a Leap Year`;
        }
      } else {
        message = `${yearValue} is not a Leap Year`;
      }
    
  // returning results
    return (result.innerHTML = message);
  }
};

  
  // button event listener
  btn.addEventListener(`click`, isLeapYear);
  
