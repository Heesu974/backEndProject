import Video from "../models/video";


export const home = async (req, res) => {
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", videos })

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

export const uploadPost = async (req, res) => {
    const { title, description, hashtags } = req.body;
    try {
        await Video.create({
            title: title,
            description: description,
            hashtags: hashtags.split(",").map(word => `#{word}`),
        })
        return res.redirect(`/`)
    } catch (error) {
        console.log(error)
        return res.render("upload", { pageTitle: "Uploading a video", errorMessage: error._message, });
    }
}

