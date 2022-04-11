function fibNum(n){

	var output = [];
	
	//only one element;
    if (n == 1){
    output = [0];
    
    //only two elements;
    } else if (n == 2){
        output = [0,1];
    
    //more than two elemnts;
    }else{
        output = [0,1];
        for(var i = 2; i < n; i++){
        output.push(output[output.length - 2] + output[output.length - 1]);
        }   
    }
	return output;
}
