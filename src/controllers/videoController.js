import Video from "../models/video";


export const home = async (req, res) => {
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", videos })

}

export const watch = async (req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id)
    console.log(video)
    if (!video) {
        return res.render("404", { pageTitle: `Video not found` });
    }
    //에러가 나ㄴ 경우를 먼 처리
    return res.render("watch", { pageTitle: video.title, video });

}

export const editGet = async (req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id);
    if (!video) {
        return res.render("404", { pageTitle: `Video not found` });
    }
    return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
}
export const editPost = async (req, res) => {
    const { id } = req.params;
    const { title, description, hashtags } = req.body;
    const video = await Video.exists({ _id: id });
    if (!video) {
        res.render("404", { pageTitle: `Video not found` })
    }
    await Video.findByIdAndUpdate(id, {
        title: title,
        description: description,
        hashtags: hashtags
            .split(',')
            .map(word => word.startsWith('#') ? word : `#${word}`),
    })
    return res.redirect(`/videos/${id}`)
}
//video를 하나 추가하는 컨트롤러 생성
// 유저가 form을 볼 수 있게 해야 하기 때문에 get에 대해 만드는 것이 우선이다.

export const uploadGet = (req, res) => {
    return res.render("upload", { pageTitle: "Uploading a video" });
}
//이 컨트롤러를 실행할 수 있는 것은 무엇일까 ? Route이다. 

export const uploadPost = async (req, res) => {
    const { title, description, hashtags } = req.body;
    try {
        await Video.create({
            title: title,
            description: description,
            hashtags: hashtags
                .split(",")
                .map(word => word.startsWith('#') ? word : `#${word}`),
            //지금도 완벽한 코드이지만, 나중에 video를 수정할 때 이슈가 생길 것이다.
            // 수정할 때의 form은 업로드 form과 생긴건 똑같지만 다르다.
            //수정할 때 새로운 hashtags의 string데이터를 받게 될텐데,
        })
        return res.redirect(`/`)
    } catch (error) {
        console.log(error)
        return res.render("edit", { errorMessage: error._message });
    }
}

