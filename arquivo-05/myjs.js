var canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.hight = window.innerHeight;

var gl = canvas.getContext('webgl');
if(!g){
    console.error('Unable to initializer WebGL.');
}

var time = 0.0;

var vertexSource =` 
attribute vec2 position;
void main(){
    gl_Position = vec4(position,0.0, 1.0);
}
`;

var fragmentSource = `
precision highp float;

`