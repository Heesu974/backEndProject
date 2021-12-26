//1. ㅇㅜ리 컴ㅠ터에 실행되고 있ㅡㄴ mongo database에 연결해 줄 것이다.
//먼저 terminal에서 mongo command running state를 확인해 본 이유는, database가 잘 돌아가고 있는지 확인하기 위함이다.
//mongo를 실행했을 때, connecting to: url이, 내 database가 실행되고 있는 url이다. 
//따라서 mongo 명령어를 실행시켜서 url을 받아야 한다:

// mongodb://127.0.0.1:27017

import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/backendproject", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//f. 여기서 db에 연결이 됐고, mongoose는 그 connection에 대한 엑세스를 준 것이다.
// 새로운 db를 만들기위해서는 단지 url/db_name을 기입해주면 된다.
//여기서 mongoose는 backendproject라는 mongodb database로 연결해 줄 것이다.
//이 파일은 지금 하는 게 없다. 왜냐, 우리가 이 파일을 서버에서 사용하고 있지 않기 때문이다. (이 단계에서 server.js로 가서 보면 이 파일을 전혀 부르고 있지 않다는 것을 확인할 수 있다.)
//따라서 server.js에서 이 파일을 import해준다.

const db = mongoose.connection;
const handleOpen = () => console.log("Connected to DB");
const handleError = (error) => console.log("DB error", error);
db.on("error", handleError);
db.once("open", handleOpen);

//여기서 error는 event로, mongoose로부터 받고, 만약 데이터베이스에 에러가 난다면, 이 event가 발생할 것이다.
//connection이 열린다(open)는 말은, 우리가 db에 연결된다(connect)는 뜻이다.
//on과 once의 차이는, on은 click event와 같이 여러번 발생시킬 수 있고, once는 오로지 한번 만 발생한다는 뜻이다. 