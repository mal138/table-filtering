// JavaScript Document
// Table striping script, based on code from http://www.alistapart.com/articles/zebratables/
// Modified by M Lieberman to pull tables based on class and use predefined tr styles

// Note: this script was written to work with existing striped tables.  It will stripe any table with class="table_2", 
// even if not currently striped.  It will also override any current background colors, always starting with blue as 
// the first row.  Use with caution and see Marc if customizations are needed.
//
// If you need to use the class "table_2" but you do not want to table striped, use class="table_2 nostripe".
//
// v1.1 - 21 June 2010 - Added handling to prevent THEAD rows from being striped.

 function filter() {
  
	var eventType = new Array("atpco", "industry", "wg", "pdp");	
	// Possible calendar item types.  Style classes must be in the format type_[eventType] and checkboxes must have an ID in the format chk_[eventType].
	var flag=new Object;
	// set flags on or off so we only have to pull the checkbox values once instead of once per row
	for (j=0; j<eventType.length; j++) {
		var tmpCheckbox = "chk_"+eventType[j];
		var tmpType = "type_"+eventType[j];
		if (document.getElementById(tmpCheckbox).checked==true) {
			flag[tmpType] = "on";
		} else {
			flag[tmpType] = "off";
		}
	}
	
  
// We could have more than one table on a page.  Find all tables on page, then find tables with class table_2
	var tables = document.getElementsByTagName("table");
	for (var h = 0; h < tables.length; h++) {
		if (tables[h].className == "table_2") {

			// the flag we'll use to keep track of whether the current row is odd or even
			// re-initialize for each new table
		    var even = false;
		
			// Check for tbody.  This will skip any THEAD content.
			var tbodies = tables[h].getElementsByTagName("tbody");
			
			if (tbodies != null) {
				// NOTE: Even if there is no TBODY tag defined, the browser seems to automatically treat TRs as being inside
				// a TBODY tag.  I have no idea why.  Tested in IE7 and Firefox 3.6 and this condition was always true. - MAL
				for (var j = 0; j < tbodies.length; j++) {
    				var myrows = tbodies[j].getElementsByTagName("tr");
				}
			} else {
				// Keeping this in just in case other browsers handle this differently
				var myrows = tables[h].getElementsByTagName("tr");
			}
   
	      // now iterate through selected rows
			for (i=0; i<myrows.length; i++) {
				// Find row class, check if that class's flag is on or off and set the display property accordingly
				var rowClass = myrows[i].className;
				if (flag[rowClass]=="off") {
					myrows[i].style.display="none";
				} else {
					myrows[i].style.display = "";
					myrows[i].style.background = even ? "#ffffff" : "#cce3ed";
		    	    even =  ! even;
					// If row is visible, set the background color
  		      		// flip from odd to even, or vice-versa
				}	
				
      		}	// End row looping (one pass for each row)
		}	// End table_2 array (normally only once)
    }	// End table array (normally only once)
}