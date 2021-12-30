import Video from "../models/video";


export const home = async (req, res) => {
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", videos: [] })

}

export const watch = (req, res) => {
    const { id } = req.params;
    return res.render("watch", { pageTitle: `Watching` });//Watch라는 템플릿을 render할 것이다.
    //이 코드로 인해 watch 템플릿에 video object가 생겼다.
}

export const editGet = (req, res) => {
    const { id } = req.params;
    return res.render("edit", { pageTitle: `Editing` })
}
export const editPost = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    return res.redirect(`/videos/${id}`);
    // >> videoRouter 를 통해  watch controller가 실행될 것을 알고 있음
}
//video를 하나 추가하는 컨트롤러 생성
// 유저가 form을 볼 수 있게 해야 하기 때문에 get에 대해 만드는 것이 우선이다.

export const uploadGet = (req, res) => {
    return res.render("upload", { pageTitle: "Uploading a video" });
}
//이 컨트롤러를 실행할 수 있는 것은 무엇일까 ? Route이다. 

export const uploadPost = (req, res) => {
    const { title, description, hashtags } = req.body;
    console.log(title, description, hashtags)
    //여기서부터 우리의 목표는 비디오를 어떻게 만들것인가다. 
    //document를 만들어야 한다.여기서는 document는 데이터를 가진 비디오라고 생각하면 된다.
    //이 document를 video에 저장하는게 목표이다. 
    const video = new Video({

        title: title,
        //앞의 title은 Video schema의 title, 뒤의 title은 위의 req.body의 title 즉, 사용자 입력값
        description: description,
        createdAt: Date.now(),
        // hashtags는 string으로 구성된 array라는 점을 고려해야 한다.
        hashtags: hashtags.split(",").map(word => `#${word}`),
        meta: {
            views: 0, //by default
            rating: 0,
        }
        // 위의 object는 
        // title,
        // description,
        // hashtags로 쓸 수 있지만 나중에 알아보기 쉽게 풀어쓰도록 한다.
    })
    //위와 같이, schema와 같은 모양으로 document를 만들었다. 
    //현 상태에서 database에 저장될 것 같습니까? 
    //the answer is Nope. video object를 만든 것은 맞고, js 세계에서는 존재하지만, 저장이 안 된 상태이다. 그래서 terminal의 show dbs에서 확인할 수 없고, home에도 나타나지 않는다.
    console.log(video)


    return res.redirect(`/`)

}

