lessc:
	restartr -c ./node_modules/.bin/lessc -a less/bootstrap.less -a public/app.css less/*

server:
	restartr -c node -a server.js templates/* public/app.css controllers/* live_renders/*