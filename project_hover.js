const projects = document.querySelectorAll('.project');
var tooltip = document.querySelector('#projects-tooltip');

projects.forEach(project => {
    console.log(project.id)
    project.addEventListener('mouseenter', (cur) => {
        console.log("mouseenter ", cur.target.id, cur.clientX, cur.clientY);
        tooltip.style.visibility = 'visible';
    });
    project.addEventListener('mouseleave', (cur) => {
        console.log("mouseleave ", cur.target.id, cur.clientX, cur.clientY);
        tooltip.style.visibility = 'hidden';
    });
    project.addEventListener('mousemove', (cur) => {
        tooltip.style.left = `${cur.clientX-700}px`;
        tooltip.style.top = `${cur.clientY-120}px`;
    });
});