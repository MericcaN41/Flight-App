/**
 * Convert 24-hour time format to 12-hour time format
 * @param time string EX: 24:00
 * @returns string
 */
export const convertTo12HourFormat = (time: string): string => {
    const [hour, minute] = time.split(':').map(Number);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minute.toString().padStart(2, '0')} ${ampm}`;
};