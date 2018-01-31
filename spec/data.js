/* jshint esversion: 6, curly: true, eqeqeq: true, forin: true */

/***********************************************************************************
* Title: Hamsters.js                                                               *
* Description: 100% Vanilla Javascript Multithreading & Parallel Execution Library *
* Author: Austin K. Smith                                                          *
* Contact: austin@asmithdev.com                                                    *  
* Copyright: 2015 Austin K. Smith - austin@asmithdev.com                           * 
* License: Artistic License 2.0                                                    *
***********************************************************************************/

import hamsters from '../src/hamsters';

if(hamsters.init) {
  hamsters.init({
    maxThreads: 1,
    persistence: false,
    cache: false
  });
}

describe("Hamsters Data", () => {

  it("Should aggregate array of subarrays", function() {
    expect(hamsters.data.aggregateArrays([[1],[2]])).toEqual([1,2]);
  });

  it("Should split array into subarrays", function() {
    expect(hamsters.data.splitArrays([1,2], 2)).toEqual([[1],[2]]);
  });
});