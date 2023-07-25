"use strict";
exports.__esModule = true;
var useAuthModal_1 = require("./useAuthModal");
var useUser_1 = require("./useUser");
var usePlayer_1 = require("./usePlayer");
var useOnPlay = function (songs) {
    var player = usePlayer_1["default"]();
    var authModal = useAuthModal_1["default"]();
    var user = useUser_1.useUser().user;
    var onPlay = function (id) {
        if (!user) {
            return authModal.onOpen();
        }
        player.setId(id);
        player.setIds(songs.map(function (song) { return song.id; }));
    };
};
exports["default"] = useOnPlay;
