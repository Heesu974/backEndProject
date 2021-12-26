import Video from "../models/video";





export const home = async (req, res) => {
    try {
        const videos = await Video.find({});
        return res.render("home", { pageTitle: "home", videos: [] })
    } catch {
        return res.render("server-error");
    }

};


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
    const { title } = req.body;

    //Here we are going to add a video to the videosArray
    return res.redirect(`/`)
    // 우리가 직접 페이지를 보여준 것이 아니라, 컽트롤러가 브라우저를 redirect해 준 것이다. url을 변경해준 것이다. 
    // 이 컨트롤러로 인해  post request가 발생하면 브라우저는 form(method="post")로 인해 먼저 /videos/upload로 간다. 
    // 그 다음 res.redirect()로 인해 home으로 간다. 
}

