export default function getFormData(data) {
    let form_data = new FormData();
    for (let key in data) {
        form_data.append(key, data[key]);
    }
    return form_data
}