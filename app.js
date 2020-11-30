// button1 click function to fetch test.txt
document.getElementById('button1').addEventListener('click', getText);

// button2 click function to fetch json
document.getElementById('button2').addEventListener('click', getJson);

// button3 click function to fetch api data
document.getElementById('button3').addEventListener('click', getApi);


// button 2 fetch json 

// Get local text file data
function getText() {
  fetch('test.txt')
  .then(function(res) { 
    return res.text();
  })
  .then(function(data) {
    // to display the output on front end
    document.getElementById('output').innerHTML = data;
  })
  .catch(function(err) {  
    console.log(err);
  });
}

// Get local json data
function getJson() {
  fetch('posts.json')
  .then(function(res) { 
    return res.json();
  })
  .then(function(data) {
    // JSON data is an array, you have to loop through it 
    let output = '';
    data.forEach((post) => {
      output += `<li>${post.title}</li>`
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err) {  
    console.log(err);
  });
}

// Get external API data 
function getApi() {
  fetch('https://api.github.com/users')
  .then(function(res) { 
    return res.json();
  })
  .then(function(data) {
    // JSON data is an array, you have to loop through it 
    let output = '';
    data.forEach((user) => {
      output += `<li>${user.login}</li>`
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err) {  
    console.log(err);
  });
}