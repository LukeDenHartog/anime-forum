app.get("/static", (req, res) => {
    res.render("static");
});

app.get("/dynamic", (req, res) => {
    imageList = [];
    imageList.push({ src: "/public/images/Naruto-anime.jpg", name: "Naruto" });
    imageList.push({ src: "/public/images/Bleach-anime.jpg", name: "Bleach" });
    imageList.push({ src: "/public/images/one-piece-anime.jpg", name: "One Piece" });
    imageList.push({ src: "/public/images/death-note-anime.jpg", name: "Death Note" });
    res.render("dynamic", { imageList: imageList });
});