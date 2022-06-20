function plusMinus(arr) {
    // Write your code here
    let negativeElements = 0.000000
    let positiveElements = 0.000000
    let zeroElements = 0.000000
    let arrLength = arr.length
    arr.forEach(el =>{
        if(el < 0){
            negativeElements +=1
        }
        
        else if(el > 0){
            positiveElements +=1
        }
        
        else if(el == 0){
            zeroElements +=1
        }
    })
    console.log(parseFloat(positiveElements / arrLength).toFixed(6))
    console.log(parseFloat(negativeElements / arrLength).toFixed(6))
    console.log(parseFloat(zeroElements / arrLength).toFixed(6))

}