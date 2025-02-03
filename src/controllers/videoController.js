let videos = [
  {
    title: "Video 1",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 1,
    id: 1,
  },
  {
    title: "Video 2",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 55,
    id: 2,
  },
  {
    title: "Video 3",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 55,
    id: 3,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching: ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
export const search = (req, res) => res.send("Search");
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = (req, res) => {
  const newVideo = {
    title: req.body.title,
    rating: 0,
    comments: 0,
    createdAt: "1 minutes ago",
    views: 54,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect("/");
};
export const deleteVideo = (req, res) => {
  res.send("Delete Video");
};
