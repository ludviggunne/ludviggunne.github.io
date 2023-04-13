
const template = document.getElementById("grid-view-entry-template");

function createEntry(name, description) {

    const newEntry    = template.content.cloneNode(true);
    const entryImage  = newEntry.querySelector('.grid-view-entry-image');
    const entryLink   = newEntry.querySelector('.grid-view-entry-link');
    const entryText   = newEntry.querySelector('.grid-view-entry-text');
    
    entryImage.src          = `images/${name}.png`;
    entryImage.alt          = `Screenshot of ${name}`;
    entryLink.textContent   = name;
    entryLink.href          = `https://github.com/ludviggunne/${name}`
    entryText.textContent   = description;

    document.getElementById('grid-view').appendChild(newEntry);
}

createEntry('mgrep', 'grep-like tool with nice colors');
createEntry('pyld', 'minimal build system for C projects written in Python');
createEntry('qualia', 'visualizing quaternion julia sets using compute shaders');
createEntry('raytracer', 'simple raytracer written in C');
createEntry('iksolver', 'stb-style single header library for inverse kinematics using FABRIK model');
createEntry('ludviggunne.github.io', 'this website');