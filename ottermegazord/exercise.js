var exercise = {};

exercise.order = function(unordered) {
    var ordered = [];
    

    // Sorting a numerical array from minimum to maximum
    // -------------------------------	
    // ---------- Your Code ----------
    // -------------------------------	
    ordered = unordered.sort();
    console.log(ordered);
    return ordered;
};

var unordered = [11, 2, 15, 4, 5, 20, 7, 17, 13, 10, 1, 12, 9, 14, 3, 16, 8, 18, 19, 6];
exercise.order(unordered);

module.exports = exercise;
