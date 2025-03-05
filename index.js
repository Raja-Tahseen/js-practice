const headerElement = document.getElementById("title");
headerElement.innerHTML = "This is now a updated title";
headerElement.style.color = "red";

var name = "Raja Tehseen";
console.log("Testing name", name);
console.info("This is a production build. Please do not steal this data");
console.error("Something went wrong");

// Interview question - interviewers often ask about variables
// let, const

// hoisting
isMarried = true;
console.log("isMarried", isMarried);
