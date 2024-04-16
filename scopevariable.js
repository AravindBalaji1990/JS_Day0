function exampleScoping(){
    var aoutside =10;
    let boutisde =11;

    if(true){
        var ainside =11;
        let binside =12;
        console.log('inside if var', ainside)
        console.log('inside if let', binside)
    }
    console.log('outside if var', aoutside)
    console.log('outside if let', boutisde)

    console.log('inside if var', ainside)
    console.log('inside if let', binside) // reference error for let when the scope of ot is called outside the condition


}

exampleScoping()