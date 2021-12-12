export const trending = (req, res) => res.render("home");

export const see = (req, res) => res.render("watch");

export const edit = (req, res) => {
    return res.send(`Edit the video #${req.params.id}`);
}
export const search = (req, res) => res.send("Search Videos");
export const deleteVideo = (req, res) => {
    return res.send(`Delete the video #${req.params.id}`);
}
export const upload = (req, res) => res.send("Upload Videos");




