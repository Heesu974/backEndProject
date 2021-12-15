const fakeUser = {
    username: "heesu",
    loggedIn: true,
}
// "/"ㅇㅔ ㄷㅐ하ㄴ controller가 trending이라서 videoController.js에서 작성한 것임

export const trending = (req, res) => {
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
            views: 59,
            id: 1,
        },
        {
            title: "Third video",
            rating: 5,
            comments: 2,
            createdAt: "2 minutes ago",
            views: 59,
            id: 1,
        }
    ];

    return res.render("home", { pageTitle: "home", fakeUser: fakeUser, videos })
};
// trending에는 언젠가 video들이 들어갈 것이다.

export const see = (req, res) => res.render("watch", { pageTitle: "Watch", fakeUser: fakeUser });

export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" })
export const search = (req, res) => res.send("Search Videos");
export const deleteVideo = (req, res) => {
    return res.send(`Delete the video #${req.params.id}`);
}
export const upload = (req, res) => res.send("Upload Videos");




