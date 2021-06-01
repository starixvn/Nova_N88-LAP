import AppData from '@jsroot/lib/AppData'
 
let today = null;

export default class DateTimeHelper {
    static getToday() {
        if(today) {
            return today;
        }
        today = AppData.today ? new Date(AppData.today) : new Date();
        return today;
    }

    static getDiffDays = (date1, date2) => {
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }

    static getDiffDaysOfDateStructure = (dateStructure1, dateStructure2) => {
        const dateObject1 = this.convertToDateObject(dateStructure1);
        const dateObject2 = this.convertToDateObject(dateStructure2);
        const diffDays = this.getDiffDays(dateObject1, dateObject2);
        return diffDays;
    }

    static addDays = (date, numberOfDays) => {
        const cloneDate = new Date(date);
        const newDate = new Date(cloneDate.setDate(cloneDate.getDate() + numberOfDays));;
        return newDate;
    }
    
    static addYears = (date, numberOfYears) => {
        const cloneDate = new Date(date);
        const newDate = new Date(cloneDate.setFullYear(cloneDate.getFullYear() + numberOfYears));;
        return newDate;
    }

    static formatDateRangeToString = (fromDate, toDate) => {
        const displayFromDate = this.formatDateStructureToString(fromDate);
        const displayToDate = this.formatDateStructureToString(toDate);
        return `${displayFromDate} - ${displayToDate}`;
    }

    static formatDateStructureToString = ({ year, month, day }) => {
        return `${month < 10 ? '0' + month : month}/${day < 10 ? '0' + day : day}/${year}`
    }
    
    static convertToDateStructure = dateObject => {
        return {
            year: dateObject.getFullYear(),
            month: dateObject.getMonth() + 1,
            day: dateObject.getDate()
        }
    }
    
    static convertToDateObject = dateStructure => {
        const { year, month, day } = dateStructure;
        return new Date(year, month - 1, day);
    }
    
    static isEqualDate = (date1, date2) => {
        return date1.year === date2.year && date1.month === date2.month && date1.day === date2.day;
    }
    
    static getYesterdayDateStructure = () => {
        const yesterday = this.addDays(this.getToday(), -1);
        const yesterdayObject = this.convertToDateStructure(yesterday);
        return yesterdayObject;
    }

    static getTodayDateStructure = () => {
        const today = this.getToday();
        const todayObject = this.convertToDateStructure(today);
        return todayObject;
    }
}