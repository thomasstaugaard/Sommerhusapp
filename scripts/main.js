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

const sumOfMonths = [
'Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 
'August', 'September', 'Oktober', 'November', 'December'
];

monthYearText.textContent = `${sumOfMonths[currentMonth]} ${currentYear}`;

const emptyDayOfMonth = new Date(currentYear, currentMonth, 1);
const dayOfWeek = emptyDayOfMonth.getDay();
const emptyDayOfWeek = (dayOfWeek + 6) % 7;
for (let i = 0; i < emptyDayOfWeek; i++) {
    const emptyDay = document.createElement('div');
    emptyDay.classList.add('emptyCalendarDay');
    calendarGrid.append(emptyDay);
};

const calendarDayOfMonth = new Date(currentYear, currentMonth+1, 0);
const calendarDay = calendarDayOfMonth.getDate()
for (let i = 1; i <= calendarDay; i++) {
    const calendarDay = document.createElement('button');
    calendarDay.classList.add('calendarDay');
    calendarDay.textContent = `${i}`;
    calendarGrid.append(calendarDay);
};



