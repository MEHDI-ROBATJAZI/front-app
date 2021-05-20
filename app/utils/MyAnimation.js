export function TextAnimation1 (Element , duration) {
  Element = Element.current;
  let TextElement = Element.textContent;

  let arrTextElement = TextElement.split("");

  Element.textContent = "";

  for (let i = 0; i < arrTextElement.length; i++) {
    Element.innerHTML += `<span class="TitlePage">${arrTextElement[i]}</span>`;
  }
  function complete(){
    clearInterval(MyTimeOut)
    MyTimeOut = null
  }

  function addClassForAnimation() {
    const span = Element.querySelectorAll("span")[char];

    span.classList.add("animateText");

    char++;

    if (char === arrTextElement.length) {
      complete();
      return;
    }
  }

  let char = 0;

  let MyTimeOut = setInterval(addClassForAnimation, duration);
}


export const ImageAnimation =(imageParentElement , duration)=>{
  setTimeout(()=>{
    imageParentElement.current.style.opacity = 1
    imageParentElement.current.style.right = "-30px"

  },duration)
}