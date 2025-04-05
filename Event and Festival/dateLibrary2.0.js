/*****************************dateLibrary.js**************************/
/*                                                                   */
/* Function library containing general purpose Date functions.       */
/*                                                                   */
/*********************************************************************/




function isLeapYear(aDate)
/*********************************************************************/
/* Argument is a Date object. Function returns the boolean value     */
/* true if the year is a leap year. False otherwise,                 */
/*********************************************************************/

{
    var year = aDate.getFullYear();
    if (((year % 4) == 0) && ((year % 100)!=0) || ((year % 400) == 0))
        return (true)
    else
        return (false)
}; 
/*************************End of function*****************************/




function noOfDaysInMonth(aDate)
/*********************************************************************/
/* Argument is a Date object. Function returns the number of days    */
/* in that month for that year                                       */
/*********************************************************************/
{
    var days;
    var month = aDate.getMonth();
    var year = aDate.getFullYear();
    
    if (month==0 || month==2 || month==4 || month==6 || month==7 || month==9 || month==11)
        days=31
    else 
        if (month==3 || month==5 || month==8 || month==10) 
            days=30
        else 
            if (month==1)
            {           
                if (isLeapYear(aDate)) 
                    days=29;
                else 
                    days=28
            };
    return (days)
};
/*************************End of function*****************************/




function arrayOfMonthDays(aDate)
/*********************************************************************/
/* Argument is a Date object, function returns an array holding      */
/* strings representing the numbers for the days in that month       */
/* for that year                                                     */
/*********************************************************************/
{
    var daysInMonth = noOfDaysInMonth(aDate);
    var maximumDays = new Array('01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31');
    
    return maximumDays.slice(0, daysInMonth)

};
/*************************End of function*****************************/




function monthName(aDate)

/*********************************************************************/
/* Argument is a Date object. Function returns a string              */
/* representation of the month (eg 'January', 'February')            */
/* of that date                                                      */
/*********************************************************************/
{
    var months=new Array(12);
    
    months[0] = 'January';
    months[1] = 'February';
    months[2] = 'March';
    months[3] = 'April';
    months[4] = 'May';
    months[5] = 'June';
    months[6] = 'July';
    months[7] = 'August';
    months[8] = 'September';
    months[9] = 'October';
    months[10] = 'November';
    months[11] = 'December';    

    return months[aDate.getMonth()] 
}
/*************************End of function*****************************/




function dayName(aDate)
/*********************************************************************/
/* Argument is a Date object                                         */
/* Returns a string representation of the day of the week            */
/*********************************************************************/
{
    var daysOfWeek=new Array(7);
    
    daysOfWeek[0] = 'Sunday';
    daysOfWeek[1] = 'Monday';
    daysOfWeek[2] = 'Tuesday';
    daysOfWeek[3] = 'Wednesday';
    daysOfWeek[4] = 'Thursday';
    daysOfWeek[5] = 'Friday';
    daysOfWeek[6] = 'Saturday';
        
    return daysOfWeek[aDate.getDay()]   
};
/*************************End of function*****************************/




function dateToday()
/*********************************************************************/
/* Function has no arguments. Returns a string representation of     */
/* today's date, for example '22/5/2004'.                            */ 
/*********************************************************************/
{
    var today_date = new Date();
    var myYear = today_date.getFullYear();
    var myMonth = today_date.getMonth() + 1;
    var myToday = today_date.getDate();
    
    return (myToday+'/'+myMonth+'/'+myYear)
};
/*************************End of function*****************************/




function dateStringShort(aDate)
/*********************************************************************/
/* Argument is a Date object. Returns a string representation of     */
/* thatdate, for example '22/11/1955'.                               */ 
/*********************************************************************/                 
{
    var aYear = aDate.getFullYear();
    var aMonth = aDate.getMonth() + 1;
    var aDay = aDate.getDate();
    
    return (aDay + '/' + aMonth + '/' +aYear)
};
/*************************End of function*****************************/




function dateStringLong(aDate)
/*********************************************************************/
/* Argument is a Date object. Returns a string representation of that*/
/* date, for example '22 November 1955'.                             */ 
/*********************************************************************/                
{
    var year = aDate.getFullYear();
    var monthNumber = aDate.getMonth() + 1;
    var monthString = monthName(aDate);
    var dayNumber = aDate.getDate();
    
    return(dayNumber + ' ' + monthString + ' ' + year)
};
/*************************End of function*****************************/




function differenceInYears(dateA, dateB)
/*********************************************************************/
/* Function takes two arguments, both Date objects. The function     */
/* returns the difference in years (a number) between the two        */
/* arguments.                                                        */
/*********************************************************************/
{
    var difference = dateA - dateB;
    
    return (Math.floor(((((difference/1000)/60)/60)/24)/365.25))
};
/*************************End of function*****************************/




function differenceInDays(dateA, dateB)
/*********************************************************************/
/* The function takes two arguments, both Date objects. The function */
/* returns the difference in days (a number) between the two         */
/* arguments.                                                        */
/*********************************************************************/
{
    var difference = dateA - dateB;
    
    return (Math.floor((((difference/1000)/60)/60)/24))
};
/*************************End of function*****************************/




function displayMonth(theDate)
/*********************************************************************/
/* The argument is a Date object. The function displays a formatted  */
/* text based calendar for that date's month.                        */
/* For example:                                                      */
/*     January 2004                                                  */
/*     Su Mo Tu We Th Fr Sa                                          */
/*     ---------------------                                         */
/*                 01 02 03                                          */
/*     04 05 06 07 08 09 10                                          */
/*     11 12 13 14 15 16 17                                          */
/*     18 19 20 21 22 23 24                                          */
/*     25 26 27 28 29 30 31                                          */
/*                                                                   */
/*********************************************************************/
{
    var daysInMonth; // the number of days in the month
    var dayOfWeekOf1st; // one of 0, 1, 2, 3, 4, 5 or 6
    var endOfWeekMarker = 0;

    document.write('<B>' + monthName(theDate) + ' ' + theDate.getFullYear() + '</B>');
    document.write('<PRE>');
    document.write('<P>'+'Su Mo Tu We Th Fr Sa' +'</P>');
    


    dayOfWeekOf1st = theDate.getDay(); //does the month start on a Sunday, Monday etc
    //if the month doesn't start on a Sunday (ie 0) then 
    //we will need to pad out the beginning of the calendar with spaces
    
    for (var i = 0; i < dayOfWeekOf1st; i = i + 1)
    {   document.write('  |'); //write 3 spaces for those days that are in the previous month;
        endOfWeekMarker = endOfWeekMarker + 1; 
        
        

    }; //end of padding
    
    daysInMonth = arrayOfMonthDays(theDate);
    for (var index = 0; index < daysInMonth.length; index = index + 1)
    {
        
        if (index == theDate.getDate()){
            document.write('<U>'+daysInMonth[index]+'</U>' + '|') ; 
            endOfWeekMarker = endOfWeekMarker + 1;
        }
        else{
            document.write(daysInMonth[index] + '|') ; 
            endOfWeekMarker = endOfWeekMarker + 1;
        }
        
        if (endOfWeekMarker == 7) 
        {//we've written 7 entries into the calendar so write a line break
         //because it must be saturday
            document.write('<BR>');
            endOfWeekMarker = 0 //reset counter
        } 
    };
    document.write('</PRE>')
    
    
    
}
/*************************End of function*****************************/