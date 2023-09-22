import getFormData from "@/utils/utils";
import axios from "axios";

export default function sendRequest(data, path, onLoad) {
    const formData = getFormData(data)
    axios({
        method: "post",
        url: `https://back-centauros.devmvrom.website/?${path}=true`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
    }).then(function (response) {
        onLoad(false, 'Proceso exitoso!')
    }).catch(function (response) {
        if (response.response) {
            onLoad(false, 'No se pudo procesar la solicitud')
        } else if (response.request) {
            onLoad(false, 'Error en los datos enviados')
        } else {
            onLoad(false, 'Error general')
        }
    });
}