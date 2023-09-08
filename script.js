document.addEventListener("DOMContentLoaded", function () {
    const currentUTCTime = new Date().getTime();
    const myTrack = "Front-End";
    const githubURL = "https://github.com/Saintt042/hngTaskOne";

    // Get the current date
    const currentDate = new Date();

    // Format the current date as a locale-specific date string
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDayOfTheWeek = currentDate.toLocaleDateString(undefined, options);

    

    // Update the DOM with the data
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDayOfTheWeek;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime;
    document.querySelector('[data-testid="myTrack"]').textContent = myTrack;
    document.querySelector('[data-testid="githubURL"]').href = githubURL;
});
