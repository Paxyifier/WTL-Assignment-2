// Create a triangle module with functions to find the type of triangle(scalene, isosceles or equilateral)
//  and its area. Import and use the functions in another program
const typeOfTriangle = (x,y,z) => {
    if (x==y && y==z){
        return "equilateral";
    }
    else if (x==y || y==z || z==x){
        return "isosceles";
    }
    else {
        return "scalene";
    }
}
module.exports = {
    typeOfTriangle
}