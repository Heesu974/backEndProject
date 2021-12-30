import mongoose from "mongoose";

// model을 생성하기 전에, model의 형태(shape)를 정의해 줄 필요가 있다.
// 이 shape는 일반적으로 schema라고 알려져 있다.

const videoSchema = new mongoose.Schema({
    //비디오 형식 작성(실제 데이터 x)
    //데이터 타이틀: 데이터 타입
    title: String,
    // title: {type: String},과 똑값다.
    description: String,
    createdAt: Date,
    hashtags: [{ type: String }],
    meta: {
        views: Number,
        rating: Number
    }
})
// 이것이 video Schema이고, 데이터의 형식/형태(shape)를 정의해주고 있을 뿐, 데이터 값을 입력하는 것이 아니다.데이터 값을 입력하는 것은 유저의 몫이다. 
//그 후, model을 생성한다.
//사용자가 비오ㄹ 업로드할 때, 해당 schema의 데이터들을 보내줄 수 있다는 말이다. 생성일이나 meta 데이터는 사용자에게 자동으로 제공해줄 것이다.
//따라서 지금의 schema를 통해 사용자가 직접 입력할 값은 title, description, hashtags 임을 알 수 있다. 
const Video = mongoose.model("Video", videoSchema);
// const modelName(직관적으로 보이게) = mongoose.model("modelName", SchemaName)
export default Video;
