// Template literal for html will go in here!
// 1. Create a template for overall html page
// 2. Create templates for each employee type

// function to export
// There will be parameters to input
const generateHTML = (contentArray) => {

console.log(contentArray);    

contentArray.forEach(employee => {
    return `
    <container>
            <h2>${employee.name}</h2>
            <ul>
                <li> Manager </li>
                <li> ID: ${employee.id} </li>
                <li> Email: ${employee.email} </li>
                <li> Office Number: ${employee.officeNumber} </li>
            </ul>
        </container>`;
});

console.log(contentArray.length);

for (i = 0; i < contentArray.length; i++) {

    console.log();
    //console.log(contentArray[i].name);
    const managerhtml = `
        <container>
            <h2>${contentArray[i].name}</h2>
            <ul>
                <li> Manager </li>
                <li> ID: ${contentArray[i].id} </li>
                <li> Email: ${contentArray[i].email} </li>
                <li> Office Number: ${contentArray[i].officeNumber} </li>
            </ul>
        </container>`
        //console.log(managerhtml);
}



// return `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1>My Team Homepage</h1>
//     <!-- For dynamically created boxes -->
//     <container id = "home-cont">
//         <container>
//             <h2>${Manager.name}</h2>
//             <ul>
//                 <li> Manager </li>
//                 <li> ID: ${Manager.id} </li>
//                 <li> Email: ${Manager.email} </li>
//                 <li> Office Number: ${Manager.officeNumber} </li>
//             </ul>
//         </container>
//         ${generateIntern}
//     </container>
// </body>
// </html>
// `
};


//generateHTML();
module.exports = generateHTML;
//module.exports = generateIntern;
