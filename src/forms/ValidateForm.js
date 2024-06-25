export const validateForm = async (formData) => {
    const errors = {};

    const trimmedFormData = {};
    for (const key in formData) {
        trimmedFormData[key] = formData[key] ? formData[key].toString().trim() : '';
    }

    if (!trimmedFormData.title) {
        errors.title = 'El título es obligatorio.';
    } else if (trimmedFormData.title.length < 5) {
        errors.title = 'El título debe tener al menos 5 caracteres.';
    } else if (trimmedFormData.title.length > 200) {
        errors.title = 'El título no puede tener más de 200 caracteres.';
    }

    if (!trimmedFormData.category) {
        errors.category = 'El equipo es requerido.';
    }

    if (!trimmedFormData.photo) {
        errors.photo = 'La URL de la foto es requerida.';
    } else if (!isPhotoURLValid(trimmedFormData.photo)) {
        errors.photo = 'La URL no es válida o no es una foto válida.';
    }

    if (!trimmedFormData.link) {
        errors.link = 'La URL del video es requerida.';
    } else if (!isVideoURLValid(trimmedFormData.link)) {
        errors.link = 'La URL no es válida o no es un video válido.';
    }

    if (!trimmedFormData.description) {
        errors.description = 'Se requiere de una descripción.';
    } else if (trimmedFormData.description.length < 10) {
        errors.description = 'La descripción debe tener al menos 10 caracteres.';
    } else if (trimmedFormData.description.length > 400) {
        errors.description = 'La descripción no puede tener más de 400 caracteres.';
    }

    return errors;
};


const isPhotoURLValid = (url) => {
    const photoUrlPattern = /\.(jpg|jpeg|png|gif)$/i;
    return photoUrlPattern.test(url);
};


const isVideoURLValid = (url) => {
    const videoUrlPattern = /^https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]+\?si=[a-zA-Z0-9_-]+$/;
    return videoUrlPattern.test(url);
};