import style from "./about.module.css";

export function About() {
    return (
        <div class={style.container}>
            <p>Dale click a la imagen y, sosteniendo el click, mueve el mouse</p>
            <p>Click on the image and, holding the click, move the mouse</p>
            <p>Cliquez sur l'image et, en le laissant appuyé, déplacez la souris</p>
            <p class={style.weigth}>This website is 51Ko</p>
        </div>
    )
}