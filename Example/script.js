var likeCount = 0;
var likeCount2 = 0;
var likeCount3 = 0;
var likeCountElement = document.querySelector("#likeCount");
var likeCountElement2 = document.querySelector("#likeCount2");
var likeCountElement3 = document.querySelector("#likeCount3");
//var likeCount = [0,0,0]

function addLike() {
    likeCount++;
    likeCountElement.innerText = likeCount + " likes";
    console.log(likeCount)
}
function addLike2() {
    likeCount2++;
    likeCountElement2.innerText = likeCount2 + " likes";
    console.log(likeCount2)
}
function addLike3() {
    likeCount3++;
    likeCountElement3.innerText = likeCount3 + " likes";
    console.log(likeCount3)
}