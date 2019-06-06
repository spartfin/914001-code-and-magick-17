'use strict';

var names = ['Вы', 'Иван', 'Юлия', 'Пётр'];
var times = ['2725', '4025', '1244', '1339'];
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var INDENT_X = 150;
var INDENT_Y = 20;
var GAP = 10;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var calkHeightFirst = (BAR_HEIGHT / 100) * (times[0] / (times[1] / 100));
var calkHeightSecond = (BAR_HEIGHT / 100) * (times[2] / (times[1] / 100));
var calkHeightThird = (BAR_HEIGHT / 100) * (times[3] / (times[1] / 100));

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', INDENT_X, INDENT_Y);
  ctx.fillText('Список результатов:', INDENT_X, INDENT_Y + (GAP * 2));

  ctx.fillText(names[0], 150, 250);
  ctx.fillText(times[0], 150, 70 + (BAR_HEIGHT - calkHeightFirst));
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(150, 90 + (BAR_HEIGHT - calkHeightFirst), BAR_WIDTH, calkHeightFirst);

  ctx.fillStyle = '#000';
  ctx.fillText(names[1], 200, 250);
  ctx.fillText(times[1], 200, 70);
  ctx.fillStyle = 'rgba(38, 6, 214, 0.8';
  ctx.fillRect(200, 90, BAR_WIDTH, BAR_HEIGHT);

  ctx.fillStyle = '#000';
  ctx.fillText(names[2], 250, 250);
  ctx.fillText(times[2], 250, 70 + (BAR_HEIGHT - calkHeightSecond));
  ctx.fillStyle = 'rgba(38, 6, 214, 1)';
  ctx.fillRect(250, 90 + (BAR_HEIGHT - calkHeightSecond), BAR_WIDTH, calkHeightSecond);

  ctx.fillStyle = '#000';
  ctx.fillText(names[3], 300, 250);
  ctx.fillText(times[3], 300, 70 + (BAR_HEIGHT - calkHeightThird));
  ctx.fillStyle = 'rgba(38, 6, 214, 0.4)';
  ctx.fillRect(300, 90 + (BAR_HEIGHT - calkHeightThird), BAR_WIDTH, calkHeightThird);
};

