var events = require('events');

// Фабрика эмиттеров
function anyEmitter() {
  var ee = new events.EventEmitter();
  // Сохраняем ссылку на оригинальный метод emit в локальном контексте
  var emit = ee.emit;
  // Переопределяем emit
  ee.emit = function() {
    var args = [];
    Array.prototype.push.apply(args, arguments);
    args.unshift('*');
    // Запускаем событие с оригинальным именем
    emit.apply(ee, args);
    // Запускаем событие с именем '*'
    emit.apply(ee, arguments);
  };
  // Возвращаем переопределенный эмиттер
  return ee;
};
