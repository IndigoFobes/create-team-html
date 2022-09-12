// Template literal for html will go in here!
// 1. Create a template for overall html page
// 2. Create templates for each employee type

// function to export
// There will be parameters to input
const generateHTML = ({name, id, email, officeNumber}) => {
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
    <container id = "home-cont">
        <container>
            <h2>Manager</h2>
            <ul>
                <li> Name: ${name} </li>
                <li> ID: ${id} </li>
                <li> Email: ${email} </li>
                <li> Office Number: ${officeNumber} </li>
            </ul>
        </container>
    </container>
</body>
</html>
`
};
 
const generateIntern = () => {

};

//generateHTML();
module.exports = generateHTML;
