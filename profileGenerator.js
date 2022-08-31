const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Whats wrong?', (answer) => {
  console.log(`${answer}`);


  rl.question('Why does this bother you?', (answer) => {
    console.log(`${answer}`);
  
    rl.question('Is there something you can do about it?', (answer) => {
      console.log(`${answer}`);
    
      rl.question('Did someone say this about/to you?', (answer) => {
        console.log(`${answer}`);
      
        rl.question('What would help right now?', (answer) => {
          console.log(`${answer}`);
        
          rl.question('Lastly, Why are you getting into coding?', (answer) => {
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



