export const formatDate = (dateStr) => {
    const date = new Date(dateStr);

    const formattedDate = `${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}/${date
            .getDate()
            .toString()
            .padStart(2, "0")}/${date.getFullYear()} ${date
                .getHours()
                .toString()
                .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date
                    .getSeconds()
                    .toString()
                    .padStart(2, "0")}`;

    return formattedDate;
};

export const formatGPSLocation = (latLongs) => {
    const [lat, lng] = latLongs
        .split(",")
        .map((coord) => parseFloat(coord).toFixed(2));

    const formattedCoordinates = `${lat}, ${lng}`;

    return formattedCoordinates;
};
