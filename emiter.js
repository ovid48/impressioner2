// Загружаем библиотеку событий (это node.js)
// а для браузеров добавляем библиотеку https://github.com/Olical/EventEmitter
var events = require('events');

// Создаем очередь событий
var test = new events.EventEmitter();

// Вешаем облаботчик на событие по имени
test.on('событие', function(data) {
  console.log('событие нагрянуло внезапно');
  console.dir(data);
});

// отправляем событие
// этот код конечно в другом конце программы обычно
test.emit('событие', { data: 'sample' });
