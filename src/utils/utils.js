export const getCurrentDate = () => {
    const currentDate = new Date(Date.now());
    const ISODate = currentDate.toISOString();
    const formatedDate = ISODate.split('T')[0];
    return formatedDate;
};