const SelenuimInfra = require("./seleniumInfra")
const seleniumInfra = new SelenuimInfra()
class TodosPage {
    constructor(URL) {
        seleniumInfra.getURL(URL)
    }
    async insertAndDelete(todoText){
        await seleniumInfra.write(todoText,"id","todo-input")// insert text to input
        await seleniumInfra.clickElement("id","addToDo") //click on add button
        let divArr = await seleniumInfra.findElementListBy("className","todo") //find all the div webelement
        if(divArr[0]==undefined){ //check if we have a new div
            console.log("Error: Can’t find a new div")
        }
        else{
            console.log("found a new div")
        }
        
        let div=[]
        for(let i=0;i<divArr.length;i++){
            div[i]=await seleniumInfra.getTextFromElement("","",divArr[i])// take text from the div array
            console.log(div[i])
            if(div[i]==todoText){// check if the text is the same 
                console.log("New div has the same text")
            }
            else{
                console.log("New div does not has the same text")
            }
        }
        await seleniumInfra.clickElement("xpath","/html/body/div[2]/div[1]/span[2]/i") //delete the first element
        }
        
        
    async insertAndComplete(todoText) {
        await seleniumInfra.write(todoText,"id","todo-input")// insert text to input
        await seleniumInfra.clickElement("id","addToDo")//click on add button
        let divArr = await seleniumInfra.findElementListBy("className","todo")//find all the div webelement
        if(divArr[0]==undefined)//check if we have a new div
        {
            console.log("Error: Can’t find a new div")
            
        }
        else{
            console.log("found a new div")
            
        }

        await seleniumInfra.clickElement("className","fas fa-check-circle") //click on the green button
        let divArr2 = await seleniumInfra.findElementListBy("className","complete") //)//find all the div webelement check
        if(divArr2[0]!=undefined){ //check if we have click on the green button
            console.log("the new div was checked")
        }
        else{
            console.log("Error: the new div was NOT checked")
        }
        
    }

    async insertTwoDeleteFirst(todoText) {
        await seleniumInfra.write(todoText,"id","todo-input")// insert text to input
        await seleniumInfra.clickElement("id","addToDo")//click on add button
        let divArr = await seleniumInfra.findElementListBy("className","todo")//find all the div webelement
        let flag=0
        if(divArr[flag]==undefined)//check if we have a new div
        {
            console.log("Error: Can’t find a new div")
            
        }
        else{
            console.log("found a new div")
            
        }
        await seleniumInfra.write(todoText,"id","todo-input")// insert text to input
        await seleniumInfra.clickElement("id","addToDo")//click on add button
        flag=1
        if(divArr[flag]!=undefined)//check if we have a new div
        {
            console.log("Error: Can’t find a new div")
            
        }
        else{
            console.log("found a new div")
            
        }
        await seleniumInfra.clickElement("xpath","/html/body/div[2]/div[1]/span[2]/i") //delete

        if(divArr[flag]==undefined)//check if we have a new div
        {
            console.log("the first div was deleted")
            
        }
        else{
            console.log("the first div was deleted")
            
        }


    }
}



module.exports = TodosPage

