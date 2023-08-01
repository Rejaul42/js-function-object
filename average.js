function getAverage( assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}
const assignment1Marks = 54;
const assignment2Marks = 28;
const assignment3Marks = 56;
const averageMark = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log(averageMark);