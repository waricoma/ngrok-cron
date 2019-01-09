# ngrok-cron

this system fire ngrok, next disconnect.  
and this system do delay disconnect by microseconds option.

1. copy https://docs.google.com/spreadsheets/d/16T2V5LPx6gefZIyotft4DO-ZZaoGRkKptcd1RhoBYdg/edit?usp=sharing to your google drive.
2. tool > script editor > release > Introduced as web application ...
3. copy ***Current web application URL*** to clipboard.
4. `npm i pm2 -g`
5. `pm2 start index.js -- --proto http --addr 3000 --delay 28800000 --endpoint ${Current web application URL}` (sample _8 * 60 * 60 * 1000 = 28800000_)
