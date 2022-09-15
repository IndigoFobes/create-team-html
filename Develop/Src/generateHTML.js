// Template literal for html will go in here!
// 1. Create a template for overall html page
// 2. Create templates for each employee type

// function to export
// There will be parameters to input

const generateHTML = (contentArray) => {


//console.log('content array from gHTML', contentArray);    

//console.log(contentArray.length);

// Our const for the rest of the string to push to
var team = `
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
    <container id = "home-cont">`;

for (i = 0; i < contentArray.length; i++) {

    const role = contentArray[i].getRole();
    //console.log(contentArray[i].name);
    const whichEl = (role) => {
        switch (role) {
            case 'Manager':
                return `Office number: ${contentArray[i].officeNumber}`;
                break;
            case 'Intern':
                return `School: ${contentArray[i].school}`;
                break;
            case 'Engineer':
                return `GitHub: https://github.com/${contentArray[i].github}`;
                break;
        }
    };

    console.log(team);
    // For each employee input
    var template = `
        <container>
            <h2>${contentArray[i].name}</h2>
            <ul>
                <li> ${role} </li>
                <li> ID: ${contentArray[i].id} </li>
                <li> Email: ${contentArray[i].email} </li>
                <li> ${whichEl(role)} </li>
            </ul>
        </container>`;

        console.log(template);

        team.concat(template);


};

console.log("*TEAM", team);

    // const printhtml = (team) => {
    // return `
    
    //         ${team}
    //     </container>
    // </body>
    // </html>`
    // }

    // console.log(printhtml(team));
}

//generateHTML();
module.exports = generateHTML;

