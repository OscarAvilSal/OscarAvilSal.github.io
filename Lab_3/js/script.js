//event listner
document.querySelector("button").addEventListener("click", gradeQuiz);

shuffleQ1Choices();

function shuffleQ1Choices()
{
    let q1Choices = ["font-color", "color", "text-color", "fontColor"]
    q1Choices = _.shuffle(q1Choices);
    console.log(q1Choices);
    let radioElement= document.createElement("input");
    radioElement.type = "radio";
    radioElement.name = "q1";
    radioElement.value = q1Choices(0);
    let labelElement = document.createElement("label");
    labelElement

    console.log(radioElement)

}
function gradeQuiz()
{
    let userAnswer1 = document.querySelector("input[name=q1]: checking")
    alert("Grading ")

    if(userAnswer1 == "color")
    {

    }
}