const fakeUser = {
    username: "heesu",
    loggedIn: true,
}
const videos = [
    {
        title: "First video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 1,
    },
    {
        title: "Second video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 50,
        id: 2,
    },
    {
        title: "Third video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 3,
    }
];

export const trending = (req, res) => {


    return res.render("home", { pageTitle: "home", fakeUser: fakeUser, videos })
};
// trending에는 언젠가 video들이 들어갈 것이다.

export const watch = (req, res) => {
    const { id } = req.params; //선택된 파라미터 :id의 id를 받고
    const video = videos[id - 1] // id에 해당하는 video를 찾고
    // 컴퓨터 카운팅은 0부터인데, videos[0].id는 1부터 시작해서
    return res.render("watch", { pageTitle: `Watching ${video.title}`, video });//Watch라는 템플릿을 render할 것이다.
    //이 코드로 인해 watch 템플릿에 video object가 생겼다.
}

export const editGet = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1];
    return res.render("edit", { pageTitle: `Editing ${video.title}`, video })
}
export const editPost = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    // 여기서 title 은 해당되는 input의 name 값이다. 
    videos[id - 1].title = title;
    //가짜 변수를 임시로 사용하기 위한 코드로, 중요하지 않다.

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
    const newVideo = {
        title: `${title}`,
        // title,
        // 이렇게 적어도 js는 이해할 것임. 하지만 나는 멍청하니까 그냥 알아보기 쉽게 할거임
        rating: 0,
        comments: 0,
        createdAt: "just now",
        views: 0,
        id: `${videos.length + 1}`,
    }
    videos.push(newVideo)



    //Here we are going to add a video to the videosArray
    return res.redirect(`/`)
    // 우리가 직접 페이지를 보여준 것이 아니라, 컽트롤러가 브라우저를 redirect해 준 것이다. url을 변경해준 것이다. 
    // 이 컨트롤러로 인해  post request가 발생하면 브라우저는 form(method="post")로 인해 먼저 /videos/upload로 간다. 
    // 그 다음 res.redirect()로 인해 home으로 간다. 
}

