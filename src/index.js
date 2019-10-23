'use strict';

const getPaper = require('./getPaper');

function testSVG() {
  // registerWindow(window, window.document);

  const paper = getPaper();

  // use svg.js as normal
  paper
    .rect(100, 100)
    .fill('yellow')
    .move(50, 50);

  console.log(paper.svg());
}

testSVG();

module.exports = testSVG;
