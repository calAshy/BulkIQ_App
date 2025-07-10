const today = new Date();
const formattedDate = today.toDateString();

const LongFormDate = new Date();
const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long', 
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
}

const DateDisplay = LongFormDate.toLocaleString('en-GB', options);

export { formattedDate, DateDisplay };