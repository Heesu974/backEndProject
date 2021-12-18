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

export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" })
export const search = (req, res) => res.send("Search Videos");
export const deleteVideo = (req, res) => {
    return res.send(`Delete the video #${req.params.id}`);
}
export const upload = (req, res) => res.send("Upload Videos");




