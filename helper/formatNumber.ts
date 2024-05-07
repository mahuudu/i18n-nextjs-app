export const formatNumber = (number = 0, locale = 'en-US', options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
}) => {
    if (!number || number < 0) {
        number = 0
    }
    return number.toLocaleString(locale, {
        ...options
    });
}
