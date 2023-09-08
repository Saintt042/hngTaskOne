document.addEventListener("DOMContentLoaded", function () {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayOfTheWeek = daysOfWeek[new Date().getDay()];
    const currentUTCTime = new Date().getTime();
    const myTrack = "Front-End";
    const githubURL = "https://github.com/your-username/your-repository";

    // Update the DOM with the data
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDayOfTheWeek;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime;
    document.querySelector('[data-testid="myTrack"]').textContent = myTrack;
    document.querySelector('[data-testid="githubURL"]').href = githubURL;
});
