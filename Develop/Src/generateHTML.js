// Template literal for html will go in here!
// 1. Create a template for overall html page
// 2. Create templates for each employee type

// function to export
// There will be parameters to input
const generateHTML = () => {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>My Team Homepage</h1>
    <!-- For dynamically created boxes -->
    <container id = "home-cont"></container>
</body>
</html>
`
};
 
const generateEmployee = () => {

};

generateHTML();
module.exports = generateHTML;
