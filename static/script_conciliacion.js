// Configurar zonas de carga
document.addEventListener("DOMContentLoaded", function () {
    function setupDropZone(dropZoneId, inputId) {
        const dropZone = document.getElementById(dropZoneId);
        const fileInput = document.getElementById(inputId);

        dropZone.addEventListener("dragover", (event) => {
            event.preventDefault();
            dropZone.classList.add("dragover");
        });

        dropZone.addEventListener("dragleave", () => {
            dropZone.classList.remove("dragover");
        });

        dropZone.addEventListener("drop", (event) => {
            event.preventDefault();
            dropZone.classList.remove("dragover");

            // Capturar archivos soltados
            const files = event.dataTransfer.files;
            if (files.length > 0) {
                fileInput.files = files;
                dropZone.querySelector("p").textContent = `Archivo seleccionado: ${files[0].name}`;
            }
        });

        // Evento para abrir selector de archivos al hacer clic
        dropZone.addEventListener("click", () => {
            fileInput.click();
        });

        // Mostrar archivo seleccionado en el texto del drop-zone
        fileInput.addEventListener("change", () => {
            if (fileInput.files.length > 0) {
                dropZone.querySelector("p").textContent = `Archivo seleccionado: ${fileInput.files[0].name}`;
            }
        });
    }

    // Configurar ambas zonas de carga
    setupDropZone("drop-zone-1", "archivo_original");
    setupDropZone("drop-zone-2", "archivo_extracto");
});
