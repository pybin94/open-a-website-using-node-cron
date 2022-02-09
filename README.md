
node-cron 설치
$ npm install --save node-cron

request 설치 
$ npm install --save request

node cron 시간 설정

* * * * * *
│ │ │ │ │ │
│ │ │ │ │ day of week   0-7 (or names, 0 or 7 are sunday)
│ │ │ │ month           1-12 (or names)
│ │ │ day of month      1-31
│ │ hour                0-23
│ minute 	              0-59
second (optional)       0-59

nohup - node 백그라운드 실행
$ nohup npm getApi.js &

nohup 종료
$ kill -15
