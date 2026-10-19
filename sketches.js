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

// ---------- 6. EL SOL QUE EXPLOTA (animado) ----------
new p5((s) => {
  let sunSize = 30; // tamaño inicial del sol
  s.setup = () => { s.createCanvas(400, 400); s.noStroke(); };
  s.draw = () => {
    sunSize = sunSize + 1;
    if (sunSize > 900) sunSize = 30; // reinicia para repetir la explosión

    s.background(82, 222, 240);    // el cielo azul

    s.fill(255, 204, 0);           // el sol, un círculo en el horizonte
    s.ellipse(200, 298, sunSize, sunSize);

    s.fill(76, 168, 67);           // la tierra, tapa la mitad del sol
    s.rect(0, 300, 400, 100);
  };
}, "c-sol");

// ---------- 7. NUBES QUE SE SEPARAN (animado) ----------
new p5((s) => {
  let leftX = 167;
  let rightX = 203;
  let sunRadius = 44;
  s.setup = () => { s.createCanvas(400, 400); s.noStroke(); };
  s.draw = () => {
    s.background(184, 236, 255);

    s.fill(255, 170, 0);
    s.ellipse(200, 100, sunRadius, sunRadius);

    s.fill(255, 255, 255);
    // nube izquierda
    s.ellipse(leftX, 150, 126, 97);
    s.ellipse(leftX + 62, 150, 70, 60);
    s.ellipse(leftX - 62, 150, 70, 60);

    // nube derecha
    s.ellipse(rightX, 100, 126, 97);
    s.ellipse(rightX + 62, 100, 70, 60);
    s.ellipse(rightX - 62, 100, 70, 60);

    leftX -= 1;
    rightX += 1;
    sunRadius += 2;

    // cuando las nubes salen de la pantalla, vuelve a empezar
    if (leftX < -140) { leftX = 167; rightX = 203; sunRadius = 44; }
  };
}, "c-nubes");

// ---------- 8. ESTRELLA FUGAZ (animado) ----------
new p5((s) => {
  let x1 = -40, y1 = 70;
  let x2 = 440, y2 = 150;
  let brillo = 0;
  let direccion = 1;

  // estrella de 5 puntas
  const dibujarEstrella = (x, y, r) => {
    s.beginShape();
    for (let i = 0; i < 10; i++) {
      const angulo = -90 + i * 36;
      const radio = (i % 2 === 0) ? r : r * 0.45;
      s.vertex(x + s.cos(angulo) * radio, y + s.sin(angulo) * radio);
    }
    s.endShape(s.CLOSE);
  };

  s.setup = () => { s.createCanvas(400, 400); s.angleMode(s.DEGREES); };
  s.draw = () => {
    s.background(8, 12, 48);
    s.noStroke();

    // luna
    s.fill(255, 245, 190);
    s.ellipse(320, 65, 55, 55);
    s.fill(8, 12, 48);
    s.ellipse(335, 52, 48, 48);

    // estrellas que parpadean
    brillo = brillo + direccion;
    if (brillo > 100 || brillo < 0) direccion = direccion * -1;
    s.fill(255, 255, 255);
    s.ellipse(40, 40, 3, 3);
    s.ellipse(90, 100, 4, 4);
    s.ellipse(150, 35, 3, 3);
    s.ellipse(210, 85, 3, 3);
    s.ellipse(370, 120, 4, 4);
    s.ellipse(370, 110, 3, 3);
    s.ellipse(60, 160, 3, 3);
    s.ellipse(180, 145, 4, 4);

    s.fill(255, 230, 120, 100 + brillo);
    s.ellipse(120, 65, 8, 8);
    s.ellipse(245, 45, 7, 7);
    s.ellipse(355, 155, 8, 8);

    // primera estrella fugaz: azul
    s.stroke(80, 190, 255, 180);
    s.strokeWeight(2);
    s.line(x1 - 65, y1 + 30, x1, y1);

    s.stroke(220, 245, 255);
    s.strokeWeight(2);
    s.line(x1 - 40, y1 + 18, x1, y1);

    s.noStroke();
    s.fill(100, 200, 255, 100);
    s.ellipse(x1, y1, 25, 25);
    s.fill(255, 255, 255);
    dibujarEstrella(x1, y1, 13);

    // segunda estrella fugaz: naranja
    s.stroke(255, 130, 50, 180);
    s.strokeWeight(2);
    s.line(x2 + 55, y2 - 35, x2, y2);

    s.stroke(255, 235, 180);
    s.strokeWeight(2);
    s.line(x2 + 35, y2 - 16, x2, y2);

    s.noStroke();
    s.fill(255, 160, 70, 100);
    s.ellipse(x2, y2, 23, 23);
    s.fill(255, 255, 220);
    dibujarEstrella(x2, y2, 11);

    // movimiento
    x1 = x1 + 3;
    y1 = y1 + 1.2;
    x2 = x2 - 2.5;
    y2 = y2 + 0.7;

    // reinicio
    if (x1 > 440 || y1 > 250) { x1 = -40; y1 = 60; }
    if (x2 < -40 || y2 > 250) { x2 = 440; y2 = 100; }

    // montañas
    s.fill(24, 43, 68);
    s.triangle(0, 320, 90, 220, 180, 320);
    s.triangle(110, 320, 240, 225, 360, 320);
    s.triangle(280, 320, 350, 245, 400, 322);

    // suelo
    s.fill(13, 56, 30);
    s.rect(0, 320, 400, 80);

    // edificios
    s.fill(12, 20, 38);
    s.rect(31, 274, 45, 75);
    s.rect(75, 250, 55, 100);
    s.rect(153, 285, 40, 65);
    s.rect(195, 265, 60, 85);
    s.rect(255, 280, 45, 70);
    s.rect(310, 245, 60, 105);

    // ventanitas
    s.fill(255, 220, 100);
    s.rect(85, 265, 9, 12);
    s.rect(105, 265, 9, 12);
    s.rect(85, 290, 9, 12);
    s.rect(105, 290, 9, 12);
    s.rect(205, 280, 9, 12);
    s.rect(225, 280, 9, 12);
    s.rect(320, 260, 10, 12);
    s.rect(345, 260, 10, 12);
    s.rect(320, 285, 10, 12);
    s.rect(345, 285, 10, 12);
  };
}, "c-estrella");
