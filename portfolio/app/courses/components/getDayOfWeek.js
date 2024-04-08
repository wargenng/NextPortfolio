export function getDayOfWeek(dateString) {
    // Create a Date object in UTC using the dateString
    // Adding "T00:00:00Z" ensures the time is set to midnight UTC
    let date = new Date(dateString + "T00:00:00Z");

    // Get the day of the week as a number (0-6)
    let dayOfWeekNumber = date.getUTCDay(); // Using getUTCDay() to avoid timezone issues

    // Optionally, convert the day number to a readable format
    let daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let dayOfWeekName = daysOfWeek[dayOfWeekNumber];

    return dayOfWeekName;
}
