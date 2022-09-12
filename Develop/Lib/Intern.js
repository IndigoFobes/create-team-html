const generateIntern = ({name, id, email, school}) => {
    return `
    <container>
        <h2>Intern</h2>
        <ul>
            <li> Name: ${name} </li>
            <li> ID: ${id} </li>
            <li> Email: ${email} </li>
            <li> School: ${school} </li>
        </ul>
    </container>`
};

module.exports = generateIntern;