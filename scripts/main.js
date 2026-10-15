// DOM //
const calendarGrid = document.querySelector('.js-calendarGrid');
const calendarNavButton = document.querySelector('.js-calendarNavButton');
const myBookingNavButton = document.querySelector('.js-myBookingNavButton');
const infoNavButton = document.querySelector('.js-infoNavButton');
const bookingActions = document.querySelector('.js-bookingActions');
const editBookingButton = document.querySelector('.js-editBookingButton');
const deleteBookingButton = document.querySelector('.js-deleteBookingButton');
const chooseMonthButtonLeft = document.querySelector('.js-chooseMonthButtonLeft');
const chooseMonthButtonRight = document.querySelector('.js-chooseMonthButtonRight');
const monthYearText = document.querySelector('.js-monthYearText');
const dateResidents = document.querySelector('.js-dateResidents');

// Kalender
const today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth();
let startDate = null;
let endDate = null;

// Kalender array
const sumOfMonths = [
'Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 
'August', 'September', 'Oktober', 'November', 'December'
];

// Funktion der tegner kalenderen
function renderCalendar() { 
    // Fjerner alle tidligere dage fra kalenderen
    calendarGrid.replaceChildren(); 
    // Viser den aktuelle måned og år, fx "Oktober 2026"
    monthYearText.textContent = `${sumOfMonths[currentMonth]} ${currentYear}`; 
    // Finder datoen for den 1. i den aktuelle måned
    const emptyDayOfMonth = new Date(currentYear, currentMonth, 1);
    // Finder ugedagen for den 1. (0 = søndag, 1 = mandag osv.)
    const dayOfWeek = emptyDayOfMonth.getDay();
    // Omregner ugedagen, så mandag = 0 og søndag = 6
    const emptyDayOfWeek = (dayOfWeek + 6) % 7;
    // Gentager én gang for hver tom plads før den 1.
    for (let i = 0; i < emptyDayOfWeek; i++) {
        // Opretter et tomt div-element
        const emptyDay = document.createElement('div');
        // Tilføjer CSS-klassen emptyDay
        emptyDay.classList.add('emptyDay');
        // Indsætter den tomme plads i kalenderen
        calendarGrid.append(emptyDay);
    }


// Skab variabler der finder antal dage i måneder..
//..  [calendarDayOfMonth] finder sidste dag, [calendarDay] sætter tal på.
const calendarDayOfMonth = new Date(currentYear, currentMonth+1, 0);
const calendarDay = calendarDayOfMonth.getDate()
for (let i = 1; i <= calendarDay; i++) {
    // Den statiske kalender (Skab kalender)
    const calendarDayButton = document.createElement('button');
    calendarDayButton.classList.add('calendarDayButton');
    calendarDayButton.textContent = `${i}`;
    // Tilføj today class (Find valgt dato)
    if (i === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
      calendarDayButton.classList.add('today')
    }
    // Event 
    // (Bruger finder valgte dato)
    calendarDayButton.addEventListener('click', () => {
    const currentDay = i;
    const newDate = new Date (currentYear, currentMonth, currentDay);
    // Hvis dato er gyldig / Ikke gyldig
    if (startDate === null) {
      startDate = newDate;
    } else {
      endDate = newDate;
      if (endDate < startDate) {
        endDate = null;
      }
    };
    // (Markerer den valgte dato)
    const currentSelectedButton = document.querySelector('.calendarDayButton.selected');
      if (currentSelectedButton) {
       currentSelectedButton.classList.remove('selected'); 
      } 
      calendarDayButton.classList.add('selected'); 
      calendarDayButton.classList.add('bookingAnimation');
    })
    calendarGrid.append(calendarDayButton); 
 };
}
renderCalendar();


// Events
// Right button
chooseMonthButtonRight.addEventListener('click', () => {
  currentMonth += 1;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear += 1;
}
// Left button
renderCalendar();
});
chooseMonthButtonLeft.addEventListener('click', () => {
  currentMonth -= 1;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear -= 1;
}
renderCalendar();
});





