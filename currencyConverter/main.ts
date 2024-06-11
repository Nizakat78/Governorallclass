import inquirer from "inquirer";

let loop = true;
 while(loop){
let convertor =await inquirer.prompt(
    [
       
        {
                name :"currency",
                type:"list",
                choices: ["Pakistan", "India", "US Dollar"],
        }
        
    ]
)
 }

 let stop1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                Y:string={
    name :"operator",
    type:"confirm",
    message:"are you want to more ",

}
if(stop1=="operator"){
    loop =false
}