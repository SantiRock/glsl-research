import styles from "./gallery.module.css";

function Canvas({id}) {
    return (
        <div class={styles.canvas_container}>
            <canvas class={styles.canvas} id={id}></canvas>
        </div>
    );
}


export function Gallery() {

    return (
        <div class={styles.gallery}>
            <Canvas id="chakana1"/>
            <Canvas id="chakana2"/>
            <Canvas id="chakana3"/>
        </div> 
    );

}