export const getCurrentDate = () => {
    const currentDate = new Date(Date.now());
    const ISODate = currentDate.toLocaleDateString('fr');
    const formatedDate = ISODate.split('T')[0];
    return formatedDate;
}