let TheGoodTimesAndTheBadOnes = document.getElementById("TheGoodTimesAndTheBadOnes");
let e8LETTERS  = document.getElementById("e8LETTERS");
let AnotherSongs = document.getElementById("AnotherSongs");
let audio = new Audio();

let music_TheGoodTimesAndTheBadOnes= [];
let music_e8LETTERS = [];
let music_AnotherSongs = [];


/* ADD MUSIC */



//TheGoodTimesAndTheBadOnes

music_TheGoodTimesAndTheBadOnes= addMusic(music_TheGoodTimesAndTheBadOnes, "FALLIN'","Fallin’_Adrenaline.mp3");
music_TheGoodTimesAndTheBadOnes= addMusic(music_TheGoodTimesAndTheBadOnes, "SLOW DOWN", "slow-down.mp3");
music_TheGoodTimesAndTheBadOnes= addMusic(music_TheGoodTimesAndTheBadOnes, "LOTUS INN", "Lotus Inn.mp3");
music_TheGoodTimesAndTheBadOnes= addMusic(music_TheGoodTimesAndTheBadOnes, "BE MYSELF", "Be Myself.mp3");
music_TheGoodTimesAndTheBadOnes= addMusic(music_TheGoodTimesAndTheBadOnes, "LOVE SONG", "Love Song.mp3");
music_TheGoodTimesAndTheBadOnes= addMusic(music_TheGoodTimesAndTheBadOnes, "GREY", "Grey.mp3");
music_TheGoodTimesAndTheBadOnes= addMusic(music_TheGoodTimesAndTheBadOnes, "FOR YOU", "for-you.mp3");
music_TheGoodTimesAndTheBadOnes= addMusic(music_TheGoodTimesAndTheBadOnes, "I'LL BE OKAY", "ll Be Okay.mp3");
music_TheGoodTimesAndTheBadOnes= addMusic(music_TheGoodTimesAndTheBadOnes, "LOOK AT ME", "Look At Me.mp3");
music_TheGoodTimesAndTheBadOnes= addMusic(music_TheGoodTimesAndTheBadOnes, "STAY", "Stay.mp3");

//8LETTERS

music_e8LETTERS = addMusic(music_e8LETTERS, "8 LETTERS", "8-letters.mp3");
music_e8LETTERS = addMusic(music_e8LETTERS, "TALK", "Talk.mp3");
music_e8LETTERS = addMusic(music_e8LETTERS, "CHOOSE", "choose.mp3");
music_e8LETTERS = addMusic(music_e8LETTERS, "IN TOO DEEP", "in-too-deep.mp3");
music_e8LETTERS = addMusic(music_e8LETTERS, "FRIENDS", "friends.mp3");
music_e8LETTERS = addMusic(music_e8LETTERS, "HARD", "hard.mp3");
music_e8LETTERS = addMusic(music_e8LETTERS, "HOOKED", "hooked.mp3");
music_e8LETTERS = addMusic(music_e8LETTERS, "CAN'T YOU SEE","See.mp3");

//AnotherSongs

music_AnotherSongs = addMusic(music_AnotherSongs, "Fallin'(ACOUSTIC)", "Fallin’ (Adrenaline) (Acoustic)-320k.mp3");
music_AnotherSongs = addMusic(music_AnotherSongs, "What Am I", "what-am-i.mp3");
music_AnotherSongs = addMusic(music_AnotherSongs, "TRUST FUND BABY", "Trust_Fund_Baby.mp3");
music_AnotherSongs = addMusic(music_AnotherSongs, "COLD IN LA", " Cold in LA (muzzo.ru).mp3");
music_AnotherSongs = addMusic(music_AnotherSongs, "BIG PLANS", "Big Plans.mp3");
music_AnotherSongs = addMusic(music_AnotherSongs, "UNBELIEVABLE", " Unbelievable.mp3");
music_AnotherSongs = addMusic(music_AnotherSongs, "COME TO BRAZIL", "Come to Brazil.mp3");
music_AnotherSongs = addMusic(music_AnotherSongs, "MAD AT YOU", "Mad at You.mp3");

/* END */

if(TheGoodTimesAndTheBadOnes != null) {
    for (let i = 0; i < music_TheGoodTimesAndTheBadOnes.length; i++) {
        TheGoodTimesAndTheBadOnes.innerHTML += "<a class='musicPlay' onclick='sound(\"" + music_TheGoodTimesAndTheBadOnes[i].file + "\")'>" + music_TheGoodTimesAndTheBadOnes[i].name + "</a><br><br>";
    }
}

if(e8LETTERS != null) {
    for (let i = 0; i < music_e8LETTERS.length; i++) {
        e8LETTERS.innerHTML += "<a class='musicPlay' onclick='sound(\"" + music_e8LETTERS[i].file + "\")'>" + music_e8LETTERS[i].name + "</a><br><br>";
    }
}

if( AnotherSongs!= null) {
    for (let i = 0; i < music_AnotherSongs.length; i++) {
        AnotherSongs.innerHTML += "<a class='musicPlay' onclick='sound(\"" + music_AnotherSongs[i].file + "\")'>" + music_AnotherSongs[i].name + "</a><br><br>";
    }
}

function addMusic(obj, name, file){
    obj.push(
        {
            "name": name,
            "file": file
        }
    )

    return obj;
}


function sound(src) {
    audio.src = "audio/" + src;
    audio.autoplay = true;

}