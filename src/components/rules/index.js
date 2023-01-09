 let ruleToggle = false;

 const toggleSwitch = () => {
   const modalScreen = document.querySelector(".rps__rules-screen");
   const backdrop = document.querySelector("#my-backdrop");

   if (ruleToggle) {
     modalScreen.style.display = "none";
     backdrop.style.display = "none";
     console.log("Rule Toggle is on");
     ruleToggle = false;
   } else {
     modalScreen.style.display = "flex";
     backdrop.style.display = "block";
     console.log("Rule Toggle is off");
     ruleToggle = true;
   }
 };

 const ruleBtn = document.getElementById("rule-index");

 ruleBtn.addEventListener("click", function() {
   toggleSwitch();
 });

 const closeBtn = document.getElementById("close-btn");

 closeBtn.addEventListener("click", function() {
   toggleSwitch();
 });
