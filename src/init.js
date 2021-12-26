import "./db";
import "./models/video"
import app from "./server";

// 이 파일이 database와 Video를 import해준 후, application이 실행될 수 있도록 작성한다. 
//그래서 app.listen을 여기로 불러온 것이다. 이게 server에 남아 있으면, db, models와 app실행 순서를 결정시킬 수 없다.
// 또한, server.js에 const app이 남아서 export 되어야 하는 이유도 같다. initial.js가 먼저 실행된 후(preload), app이 listen되도록 하기 위함이다.

const PORT = 4000;

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`)

app.listen(PORT, handleListening);

