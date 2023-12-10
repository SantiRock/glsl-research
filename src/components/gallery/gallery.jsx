import styles from "./gallery.module.css";
import { createSignal, onMount, Show } from "solid-js";

function Canvas({id}) {
    return (
        <div class={styles.canvas_container}>
            <canvas class={styles.canvas} id={id}></canvas>
        </div>
    );
}


export function Gallery() {
    const [isMobile, setIsMobile] = createSignal(false);

    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth <= 640)
    });

    onMount(() => {
        console.log(window.innerWidth)
        setIsMobile(window.innerWidth <= 640)
    })


    return (
        <div class={styles.gallery}>
            <Show 
                when={isMobile()}
                fallback={<Canvas id="chakana1"/>}
            >
                <Canvas id="chakana1"/>
                <Canvas id="chakana2"/>
                <Canvas id="chakana3"/>
            </Show>
        </div> 
    );

}


/*
export function Gallery() {
    const [isMobile, setIsMobile] = createSignal(false);

    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth <= 640)
    });

    onMount(() => {
        console.log(window.innerWidth)
        setIsMobile(window.innerWidth <= 640)
    })


    return (
        <div class={styles.gallery}>
            <Show when={isMobile()}>
                <Canvas id="chakana1"/>
            </Show>
            <Show when={!isMobile()}>
                <Canvas id="chakana1"/>
                <Canvas id="chakana2"/>
                <Canvas id="chakana3"/>
            </Show>
        </div> 
    );

}
*/