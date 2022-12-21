/**
 * Web Atelier 2022  Exercise 7 - Single-Page Web Applications with Fetch and Client-side Views
 *
 * Student: __STUDENT NAME__
 *
 * Main Server Application
 *
 * version 1289 Wed Nov 02 2022 17:01:56 GMT+0100 (Central European Standard Time)
 *
 */






//require framework and middleware dependencies
const express = require('express');
const path = require('path');
const logger = require('morgan');
const methodOverride = require('method-override');
const multer  = require('multer');

const fs = require('fs-extra');

const ejsc = require('ejsc-views');
ejsc.compile();



//init framework
const app = express();



app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));    // parse application/x-www-form-urlencoded
app.use(express.json({limit: '4MB'}));    // parse application/json
app.use(multer().none());   //parse multipart/form-data

app.use(express.static(path.join(__dirname, 'public'), {index: "index.html"}));

app.use(methodOverride('_method'));

app.set('view engine', 'ejs');


//controllers
const routers = require('./routes');

app.use(routers.home);

//default fallback handlers
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers

  // development error handler
  // will print stacktrace
  //if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.json({
        message: err.message,
        error: err
      });
    });
  //}

  // production error handler
  // no stacktraces leaked to user
  // app.use(function(err, req, res, next) {
  //   res.status(err.status || 500);
  //   res.json({
  //     message: err.message,
  //     error: {}
  //   });
  // });



//start server
app.set('port', process.env.PORT || 8888);

const EMPTY = "_";
var winner;

function getMatch(sID) {
  return matches.filter(m => {
    return m.x == sID || m.o == sID;
  })[0];
}

function replaceChar(s, i, c) {
  let a = Array.from(s);
  a[i] = c;
  return a.join("");
}

function win(s) {
  s = Array.from(s);

  let m =[[s[0],s[1],s[2]],[s[3],s[4],s[5]],[s[6],s[7],s[8]],[s[0],s[3],s[6]],[s[1],s[4],s[7]],[s[2],s[5],s[8]],[s[0],s[4],s[8]],[s[2],s[4],s[6]]];
  for (let i = 0; i < m.length; i++) {
      if (m[i][0] !== EMPTY &&
          m[i][1] !== EMPTY &&
          m[i][2] !== EMPTY &&
          m[i][0] == m[i][1] && 
          m[i][2] == m[i][1]) { //all elements in the array are the same
              winner = m[i][0];
              return true;
          }
      }
  return false;

  }

/**
* Determine if the board has no more empty slots
* @param {String} s encoding the board slots
* @returns true, if the game is over. false, there are empty slots and more moves can be made.
*/
function over(s) {
  s = Array.from(s);
  for (let i = 0; i < s.length; i++) {
      if (s[i] === EMPTY) {
          return false;
      }
  }
  return true;
}


var server = require('http').createServer(app);

const io = require("socket.io")(server);
let playerQueue = [];
let matches = [];
const EMPTY_BOARD = '_________';

io.on('connection', (socket) => {
  console.log('client connected: ', socket.id);

  socket.on('disconnect', () => {
    console.log('client disconnected');
  });

  socket.on('queue', () => {
    playerQueue.push(socket.id);
    if (playerQueue.length == 2) {
      let m = {
        x: playerQueue[0],
        o: playerQueue[1],
        board: EMPTY_BOARD,
        current: 'X',
        scoreX: 0,
        scoreO: 0,
        ties: 0
      }
      playerQueue = [];
      matches.push(m);
      io.to(m.x).emit('matched', m.board, true);
      io.to(m.o).emit('matched', m.board, false);
    }

    socket.on('move', i => {
      let m = getMatch(socket.id);

      if (!m) {
        socket.emit('failed');
        return;
      }
  
      m.board = replaceChar(m.board, i, m.current);
      m.current = m.current == 'X' ? 'O' : 'X';
  
      if (win(m.board)) {
        if (m.current == 'X') {
          m.scoreO++;
        } else {
          m.scoreX++;
        }

        m.board = EMPTY_BOARD;
  
        io.to(m.current == 'X' ? m.o : m.x).emit('move', m.board, m.current == 'X', m.scoreX, m.scoreO, m.ties, 'You have won!');
        io.to(m.current == 'X' ? m.x : m.o).emit('move', m.board, m.current == 'O', m.scoreX, m.scoreO, m.ties, 'You have lost!');
        
      } else if (over(m.board)) {

        m.ties++;
        m.board = EMPTY_BOARD;
  
        io.to(m.x).emit('msg', 'Tie');
        io.to(m.o).emit('msg', 'Tie');
      } else {
        io.to(m.x).emit('move', m.board, m.current == 'X', m.scoreX, m.scoreO, m.ties, null);
        io.to(m.o).emit('move', m.board, m.current == 'O', m.scoreX, m.scoreO, m.ties, null);
      }
    });
  });
});

function updatechall() {
  io.sockets.emit('update_challenges_signal');
}

server.on('listening', function() {
  console.log('Express server listening on port ' + server.address().port);
});

server.listen(app.get('port'));

exports.updatechall = updatechall;


