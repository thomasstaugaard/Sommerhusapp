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
const monthYearText = document.querySelector('js-monthYearText');
const dateResidents = document.querySelector('.js-dateResidents');

// Kalender
const today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth();

const calendarMonths = [
'Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 
'Juli', 'August', 'September', 'Oktober', 'November','December'
];

monthYearText.textContent = `${calendarMonths[currentMonth]} ${currentYear}`;

const currentLastDate = new Date(currentYear, currentMonth+1, 0);
const lastDayOfMonth = currentLastDate.getDate();

const currentFirstDate = new Date(currentYear, currentMonth, 1);
const firstDayOfMonth = currentFirstDate.getDay();

const firstDayMondayFirst = (firstDayOfMonth + 6) % 7;

for (i = 0; i < firstDayMondayFirst; i++) {
    const emptyDay = document.createElement('div');
    emptyDay.classList.add('emptyCalendarDay');
    calendarGrid.append('emptyDay');
}
