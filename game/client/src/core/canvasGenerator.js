const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
const out = {
    canvas:canvas,
    ctx:canvas.getContext('2d'),
};
export default out;