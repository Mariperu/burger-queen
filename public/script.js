if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((resp) => console.log("Registro sw exitoso", resp))
    .catch((err) => console.warn("Error de registro sw", err));
}
