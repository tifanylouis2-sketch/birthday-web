function surprise(){

    alert(
`❤️ Happy Birthday ❤️

You are my happiness.

Thank you for always making my days brighter.

I hope all your dreams come true.

I love you more than words can explain.

Happy Birthday, My Love ❤️`
    );

}

setInterval(createHeart,250);

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*35)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

}