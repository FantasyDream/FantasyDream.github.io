var spawn = require('child_process').exec;

// Hexo 3 复制这段
hexo.on('new', function(data){
  spawn('start "" "C:\\Program Files\\Typora\\Typora.exe " ' + data.path);
});