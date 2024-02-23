import { createSignal, onMount, Show }from "solid-js";
import style from "./about.module.css";

export function About() {
    const [isMobile, setIsMobile] = createSignal(window.innerWidth <= 640);

    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth <= 640)
    });



    return (
        <div class={style.container}>
            <Show
                when={!isMobile()}
                fallback={<p>Touch the image</p>}
            >
                <p>Dale click a la imagen y, sosteniendo el click, mueve el mouse</p>
                <p>Click on the image and, holding the click, move the mouse</p>
                <p>Cliquez sur l'image et, en le laissant appuyé, déplacez la souris</p>
                <p class={style.weigth}>This website is 51Ko ❃ႣᄎႣ❃</p>
            </Show>
        </div>
    )
}