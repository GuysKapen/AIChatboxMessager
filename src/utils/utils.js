export const imgUrlFor = function (url, imagePath, holder = null) {
    if (!url || !imagePath) return holder;
    return `${url}/${imagePath}`
}

export const truncate = (value, length) => {
    if (!value) return "";
    value = value.toString();
    if (value.length > length) {
        return value.substring(0, length) + " ...";
    } else {
        return value;
    }
}