What I Learned On the 2nd Of March 2023

# LOOPS

<p><b>In programming languages to carry out repetitive task we use different kinds of loops. The following examples are the commonly used loops in JavaScript and other programming languages.</b></p>
<ul>

 <li><i><b>for Loop:</b></i></li>

     // For loop structure
     for(initialization, condition, increment/decrement){
      // code goes here
     }

<li><i><b>while loop:</b></i></li>

     let i = 0
     while (i <= 5) {
     console.log(i)
     i++
     }

     // 0 1 2 3 4 5

<li><i><b>do while loop:</b></i></li>

     let i = 0
     do {
     console.log(i)
     i++
     } while (i <= 5)

     // 0 1 2 3 4 5
<li><i><b>for of loop:</b></i></li>
<p>We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array.</p>

<li><i><b>break:</b></i></li>
<p>Break is used to interrupt a loop.<br>
The below code stops if 3 found in the iteration process.</p>

     for(let i = 0; i <= 5; i++){
      if(i == 3){
        break
     }
     console.log(i)
     }

     // 0 1 2

<li><i><b>continue:</b></i></li>
<p>We use the keyword continue to skip a certain iterations.</p>