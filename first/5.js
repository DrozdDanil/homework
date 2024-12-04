function getTimeOfDay(hour){
    switch(true){
        case hour >= 0 && hour <= 5:
            return 'night';
        case hour >= 6 && hour <= 11:
            return 'morning';
        case hour >= 12 && hour <= 17:
            return 'day';
        case hour >= 18 && hour <= 23:
            return 'evening';
        default:
            return 'uncorrect time';
    }
}
console.log(getTimeOfDay(23));