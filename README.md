# table-filtering
Simple JavaScript to use checkboxes to show or hide specific table rows.  Basically a table filter without a database.

Details:
This script started as the zebra tables script from http://www.alistapart.com/articles/zebratables/  

For this particular page, I wanted to be able to filter (show or hide) rows in a list of upcoming events.  There were four types of events: conferences or events open to all customers, working group meetings, airline industry events we were attemdning, and our software release schedule (aka product development plan).  These were designated by classes type_atpco, type_wg, type_industry, and type_pdp, respectively.

The script has three steps.
1) Initialize the odd/even counter used for striping the table (even = false)
2) Read the four checkboxes and set flags for each event class to on or off
3) Read the class for each <tr> and compare it to the on/off flag for that class.
  3a) If the class flag is off, hide the row
  3b) If the class flag is on, set the background color to blue or white based on whether "even" is true or false, then flip the odd/even flag. 
