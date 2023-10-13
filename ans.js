var characterReplacement = function(s, k) {

    //Looking for a variable size subarray...
    //Sliding window algorithm to cut this down towards O(n) runtime
    

    //Initialize variables
    let max = 1;
    let tracker = {};
    let currentLargestValid = 1;
    let left = 0;
    let right = 1;

    tracker[s[0]] = 1;
    
    //Go through entire length of array.
    while(right < s.length){

        //update tracking
        if(tracker[s[right]]){
            tracker[s[right]]++;
        }
        else{
            tracker[s[right]] = 1;
        }

        //Do we have a new largest string in the current window?
        currentLargestValid = Math.max(currentLargestValid, tracker[s[right]]);

        //While this is not valid, move left side of window to the right.
        while((right - left + 1) > currentLargestValid + k){
            tracker[s[left]]--;
            left++;
        }

        //Is this the new record?
        max = Math.max(max, right - left + 1);
        right++;
        
    }

    return max;

};
