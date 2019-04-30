
const questionsArray = [
    {
        One:{
            question:  "What color is Thanos?",
            answer: "purple",
            options: ["purple", "green", "blue", "yellow"]
        },
        Two:{
            question: "What color is Thanos?",
            answer: "purple",
            options: ["purple", "green", "blue", "yellow"]
        },
        Three:{
            question: "What color is Thanos?",
            answer: "purple",
            options: ["purple", "green", "blue", "yellow"]
        },
        Four:{
            question: "What color is Thanos?",
            answer: "purple",
            options: ["purple", "green", "blue", "yellow"]
        },
        Five:{
            question: "What color is Thanos?",
            answer: "purple",
            options: ["purple", "green", "blue", "yellow"]
        }
    }
];

function showQuestions() {
    for(i = 0; i < questionsArray.length; i++) {
        console.log(questionsArray[i].One.question);
        console.log(questionsArray);
        console.log(questionsArray[i].Two.question);
       
        $("#Qone").text("Question one: "+ questionsArray[i].One.question);
        $("#Aone").text("Choices: "+ questionsArray[i].One.options);

        $("#Qtwo").text("Question one: "+ questionsArray[i].Two.question);
        $("#Atwo").text("Choices: "+ questionsArray[i].Two.options);

        $("#Qthree").text("Question one: "+ questionsArray[i].Three.question);
        $("#Athree").text("Choices: "+ questionsArray[i].Three.options);

        $("#Qfour").text("Question one: "+ questionsArray[i].Four.question);
        $("#Afour").text("Choices: "+ questionsArray[i].Four.options);

        $("#Qfive").text("Question one: "+ questionsArray[i].Five.question);
        $("#Afive").text("Choices: "+ questionsArray[i].Five.options);
        
    }
    
    
}
showQuestions();