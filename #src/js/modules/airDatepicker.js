import AirDatepicker from 'air-datepicker'

new AirDatepicker('#airdatepicker', {
    inline: true,
    isMobile: true,
    autoClose: true,
    range: true,
    navTitles: {
        days: '<strong>yyyy</strong> <i>MMMM</i>',
        months: 'Select month of <strong>yyyy</strong>'    
    }
});

