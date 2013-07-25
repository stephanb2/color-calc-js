/*
 * modified from qunit-assert-close - Copyright: James MGreene
 * https://github.com/JamesMGreene/qunit-assert-close
 */

QUnit.extend(QUnit.assert, {
	/**
	 * Checks that the first two arguments are equal, or are numbers close enough to be considered equal
	 * based on a specified maximum allowable difference.
	 *
	 * @example close(3.141, Math.PI, 0.001);
	 *
	 * @param Number actual
	 * @param Number expected
	 * @param Number maxDifference (the maximum inclusive difference allowed between the actual and expected numbers)
	 * @param String message (optional)
	 */
	close: function(actual, expected, maxDifference, message) {
	    //var passes;
	    
	    function recur_pass(actual, expected) {
	        var passes, i;
	        
	        if (Object.prototype.toString.call(actual) === '[object Array]') {
  
	            if (!(Object.prototype.toString.call(actual) === '[object Array]')) {
	                message = "Array type mismatch. " + message;
	                return false;
	            };
	            
	            if (!(actual.length === expected.length)) {
	                message = "Array length mismatch. " +message;
	                return false;
	            };
	             
	            passes = true;
	            for (i = 0; i < actual.length; i += 1) {
	                passes = passes && recur_pass(actual[i], expected[i]);
	            }
	            return passes;
	        }
	        
	        //object is not an array
	        return (actual === expected) || Math.abs(actual - expected) <= maxDifference;
	    }// end function recur_pass
	    
		
		QUnit.push(recur_pass(actual, expected), actual, expected, message);
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
