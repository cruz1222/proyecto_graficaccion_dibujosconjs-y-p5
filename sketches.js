// Proyectos originales de Khan Academy adaptados a p5.js (modo instancia).
// Cada dibujo es estático: se dibuja una vez con noLoop().

// ---------- 1. RANA ----------
new p5((s) => {
  s.setup = () => { s.createCanvas(400, 400); s.noLoop(); };
  s.draw = () => {
    s.background(255);
    const x = 200;
    const y = 250;

    s.noStroke();
    s.fill(30, 204, 91); // a nice froggy green!

    s.ellipse(x, y, 200, 100);           // face
    s.ellipse(x - 50, y - 50, 40, 40);   // left eye socket
    s.ellipse(x + 50, y - 50, 40, 40);   // right eye socket

    s.fill(255, 255, 255); // for the whites of the eyes!
    s.ellipse(x - 50, y - 50, 30, 30);   // left eyeball
    s.ellipse(x + 50, y - 50, 30, 30);   // right eyeball

    // boca
    s.fill(0, 0, 0);
    s.ellipse(x, y, 151, 78);

    // ojos
    s.rect(x - 50, y - 50, 10, 10);
    s.rect(x + 50, y - 50, 10, 10);
  };
}, "c-rana");

// ---------- 2. DIENTES DE CONEJO ----------
new p5((s) => {
  s.setup = () => { s.createCanvas(400, 400); s.noLoop(); };
  s.draw = () => {
    s.background(255);
    const ojo = 100;

    s.ellipse(150, 70, 60, 120);   // left ear
    s.ellipse(240, 70, 60, 120);   // right ear

    s.ellipse(200, 170, 150, 150); // face

    s.fill(0, 0, 0);
    s.ellipse(170, 150, ojo, ojo); // left eye
    s.ellipse(230, 150, ojo, ojo); // right eye

    s.line(150, 200, 250, 200);    // mouth

    s.noFill();
    s.rect(185, 200, 15, 10);      // left tooth
    s.rect(200, 200, 15, 10);      // right tooth
  };
}, "c-conejo");

// ---------- 3. ¿QUÉ HAY DE CENA? ----------
new p5((s) => {
  s.setup = () => { s.createCanvas(400, 400); s.noLoop(); };
  s.draw = () => {
    s.background(186, 145, 20);    // wooden table
    s.ellipse(200, 200, 350, 350); // plate
    s.ellipse(200, 200, 300, 300);

    // carne
    s.fill(120, 60, 20);
    s.ellipse(160, 200, 110, 90);

    // papas fritas
    s.fill(255, 205, 30);
    s.rect(229, 160, 15, 60);
    s.rect(244, 150, 15, 70);
    s.rect(260, 170, 15, 55);

    // chícharos
    s.fill(9, 237, 70);
    s.ellipse(249, 250, 20, 20);
    s.ellipse(285, 255, 20, 20);
    s.ellipse(290, 270, 20, 20);
  };
}, "c-cena");

// ---------- 4. DÍA NEVADO SOLEADO ----------
new p5((s) => {
  s.setup = () => { s.createCanvas(400, 400); s.noLoop(); };
  s.draw = () => {
    s.background(0, 188, 217);

    // The ground
    s.fill(8, 242, 86);
    s.rect(0, 300, 400, 100);

    // The sun
    s.fill(252, 248, 3);
    s.ellipse(80, 64, 100, 100);

    // The snowman
    s.fill(247, 239, 247);
    s.ellipse(200, 300, 150, 150);
    s.ellipse(200, 200, 100, 100);
    s.ellipse(200, 120, 75, 75);
  };
}, "c-dia");

// ---------- 5. MUÑECO DE NIEVE ----------
new p5((s) => {
  s.setup = () => { s.createCanvas(400, 400); s.noLoop(); };
  s.draw = () => {
    s.background(255);
    s.rect(0, 370, 400, 39);
    s.ellipse(200, 300, 150, 150);
    s.ellipse(200, 200, 100, 100);
    s.ellipse(200, 120, 75, 75);
    s.line(160, 200, 100, 150);
    s.line(240, 200, 300, 150);

    // cara (agregada)
    s.fill(0);
    s.ellipse(186, 108, 9, 9);                    // ojo izquierdo
    s.ellipse(214, 108, 9, 9);                    // ojo derecho
    s.fill(255, 140, 0);
    s.triangle(200, 118, 200, 128, 238, 124);     // nariz de zanahoria
    s.fill(0);
    for (let i = 0; i < 5; i++) {                 // sonrisa de carbones
      s.ellipse(180 + i * 10, 138 + s.sin((i / 4) * s.PI) * 5, 4, 4);
    }
  };
}, "c-muneco");
