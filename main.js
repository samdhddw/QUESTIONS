const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");


      yesBtn.addEventListener("click", () => {
        question.innerHTML = " AJSE GHAR ME KABHI BAD WORDS USE NAHI KARONGE NA PROMISE ME😘";
        gif.src ="second.gif";
        yesBtn.addEventListener("click", () =>{
          question.innerHTML = "DAILY BIRYANI AND PIZZA KHILAONGE NA PROMISE ME 🤞";
          gif.src ="third.gif";
          yesBtn.addEventListener("click", () =>{
            question.innerHTML = "AUR HAINIF KO AJ BHOT MARONGE NA AUR MUJHE KABHI NAHI MARONGE NA PROMISE ME";
            gif.src ="fourth.gif";
            
            yesBtn.addEventListener("click", () =>{
              question.innerHTML = "HAPPY MOTHERS DAY !!💖";
              gif.src ="fifth.gif";
  });

});

});

});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

