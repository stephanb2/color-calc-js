/*
 * qunit-assert-close - Copyright: James MGreene
 * https://github.com/JamesMGreene/qunit-assert-close
 *
 * modified by Stephan Bourgeois - July 2013
 */

QUnit.extend(QUnit.assert, {
	/**
	 * Checks that the first two arguments are equal, or are numbers close enough to be considered equal
	 * based on a specified maximum allowable difference.
	 *
	 * Array can be passed as arguments. This function will traverse the arrays with a recursive descent.
	 * If the depth or the length of the arrays differ, the function will return falsy and append
	 * an error message to the <message> string.
	 *
	 * @example close(3.141, Math.PI, 0.001);
	 *
	 * @param (Number | Array) actual
	 * @param (Number | Array) expected
	 * @param Number maxDifference (the maximum inclusive difference allowed between the actual and expected numbers)
	 * @param String message (optional)
	 */
	close: function(actual, expected, maxDifference, message) {
	    var maxDelta = 0;
	    
	    // non-pure function. Changes value of maxDelta
	    function recur_pass(actual, expected) {
	        var passes, i, diff;
	        
	        if (Object.prototype.toString.call(actual) === '[object Array]') {
  
	            if (!(Object.prototype.toString.call(expected) === '[object Array]')) {
	                message = message + " [Array depth mismatch]";
	                return false;
	            };
	            
	            if (!(actual.length === expected.length)) {
	                message = message + " [Array length mismatch]";
	                return false;
	            };
	             
	            passes = true;
	            for (i = 0; i < actual.length; i += 1) {
	                passes = passes && recur_pass(actual[i], expected[i]);
	            }
	            return passes;
	        }
	        
	        //object is not an array
	        if ( actual === expected ) {
	            return true;
	        } else {
	            diff = Math.abs(actual - expected);
	            //side effect on maxDelta variable
	            maxDelta = Math.max(maxDelta, diff);
	            return diff <= maxDifference;
	        };
	    }// end function recur_pass
	    
		
		QUnit.push(recur_pass(actual, expected), actual, expected, 
		    message + " [delta max = " + maxDelta.toPrecision(2) + "]");
	},

	/**
	 * Checks that the first two arguments are numbers with differences greater than the specified
	 * minimum difference.
	 *
	 * @example notClose(3.1, Math.PI, 0.001);
	 *
	 * @param Number actual
	 * @param Number expected
	 * @param Number minDifference (the minimum exclusive difference allowed between the actual and expected numbers)
	 * @param String message (optional)
	 */
	notClose: function(actual, expected, minDifference, message) {
		QUnit.push(Math.abs(actual - expected) > minDifference, actual, expected, message);
	}
});
