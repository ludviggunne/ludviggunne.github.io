
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
createEntry('linden-tree', 'L-system implementation in Rust');
createEntry('exprparse', 'single header C++ library for parsing math expressions');
createEntry('ludviggunne.github.io', 'this website');


window.addEventListener('scroll', function() {
    let scrollPos = window.scrollY;
    let body = this.document.querySelector('body');
    let s = scrollPos / (document.documentElement.scrollHeight - window.innerHeight);

    let r0 = 35;
    let g0 = 49;
    let b0 = 49;
    let r1 = 49;
    let g1 = 33;
    let b1 = 45;

    let r = r0 + s * (r1 - r0);
    let g = g0 + s * (g1 - g0);
    let b = b0 + s * (b1 - b0);

    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});