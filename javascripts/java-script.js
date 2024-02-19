document.addEventListener("DOMContentLoaded", function() {
// Получаем холст и контекст рисования
const canvas = document.getElementById("bezierCanvas");
const ctx = canvas.getContext("2d");

// Инициализируем точки кривой Безье
let points = [
{ x: 50, y: 250 },
{ x: 150, y: 50 },
{ x: 350, y: 50 },
{ x: 450, y: 250 }
];

// Получаем ползунки для управления точками
const sliders = [
document.getElementById("point1X"),
document.getElementById("point1Y"),
document.getElementById("point2X"),
document.getElementById("point2Y"),
document.getElementById("point3X"),
document.getElementById("point3Y"),
document.getElementById("point4X"),
document.getElementById("point4Y")
];

// Добавляем слушатели событий для ползунков
sliders.forEach((slider, index) => {
slider.addEventListener("input", function() {
    // Индекс точки в массиве точек
    const i = Math.floor(index / 2);
    // Проверяем, изменяется ли координата X или Y
    const isX = index % 2 === 0;
    // Обновляем соответствующую координату точки
    points[i][isX ? 'x' : 'y'] = parseFloat(sliders[index].value);
    // Перерисовываем кривую
    draw();
});
});

// Функция для рисования кривой Безье и точек
function draw() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Рисуем кривую Безье
ctx.beginPath();
ctx.moveTo(points[0].x, points[0].y);
ctx.bezierCurveTo(
    points[1].x, points[1].y,
    points[2].x, points[2].y,
    points[3].x, points[3].y
);
ctx.strokeStyle = "hotpink";
ctx.lineWidth = 4; // толщина линии главной
ctx.stroke();

// Рисуем точки
for (let i = 0; i < points.length; i++) {
    ctx.beginPath();
    ctx.arc(points[i].x, points[i].y, 20, 0, Math.PI * 2); // чисто 20 отвечает за размер кружков
    ctx.fillStyle = "pink";
    ctx.strokeStyle = "white";
    ctx.fill();
    ctx.stroke(); // вызов ctx.stroke() нужен после рисования контура (ctx.arc()) для того чтобы сам контур был нарисован
}
}

// Инициализируем рисунок
draw();

});
