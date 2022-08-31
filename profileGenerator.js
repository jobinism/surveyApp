const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Who is your favourite rapper?', (answer) => {
  console.log(`${answer}`);


  rl.question('Why do you hate music?', (answer) => {
    console.log(`${answer}`);
  
    rl.question('Then why did you give such a terrible answer?', (answer) => {
      console.log(`${answer}`);
    
      rl.question('What colour are your socks?', (answer) => {
        console.log(`${answer}`);
      
        rl.question('Damn, who taught you fashion?', (answer) => {
          console.log(`${answer}`);
        
          rl.question('Why are you getting into coding?', (answer) => {
            console.log(`${answer}`);
          
            rl.question('Are you gonna be great?', (answer) => {
              console.log(`${answer}`);
            
              rl.close();
            });
          });
        });
      });
    });
  });
});



