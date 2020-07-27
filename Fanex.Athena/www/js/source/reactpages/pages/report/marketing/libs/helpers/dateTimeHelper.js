import AppData from '@jsroot/lib/AppData'
 
let today = null;

export default class DateTimeHelper {
    static getToday() {
        if(today) {
            return today;
        }
        if(AppData.today) {
            today = new Date(AppData.today);
        } else {
            today = new Date();
        }
        return today;
    }

    static getDiffDays = (date1, date2) => {
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
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
    
    static getYesterday = () => {
        const yesterday = this.addDays(this.getToday(), -1);
        const yesterdayObject = this.convertToDateStructure(yesterday);
        return yesterdayObject;
    }
}