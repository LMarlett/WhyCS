var questions = [
        ['1A', '2A', '3A'],
        ['1B', '2B', '3B'],
        ['1C', '2C', '3C'],
        ['1D', '2D', '3D'],
        ['1E', '2E', '3E'],
        ['1F', '2F', '3F'],
        ['1G', '2G', '3G'],
      ];
questions.sort(sortFunction);
function sortFunction(a, b) {
    if (a[0] === b[0]) { return 0; }
    else { return (a[0] < b[0]) ? -1 : 1; }
}
console.log(questions[0][0]);