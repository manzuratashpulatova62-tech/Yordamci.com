const questions = [
{
question:"1. Qaysi gapda yasama so'z bor?",
options:["Bolalar bog'da o'ynadi","Daraxtlar yashil edi","Mehnatkash inson hurmat qilinadi","Kitob stol ustida turibdi"],
answer:"Mehnatkash inson hurmat qilinadi"
},
{
question:"2. Qaysi qatorda yordamchi so'zlar berilgan?",
options:["O'qimoq, Yozmoq, Kelmoq","Men, Sen, U","Ktta, Chiroyli, Yahshi,","Va, Bilan Uchun,"],
answer:"Va, Bilan Uchun,"
},
{
question:"3. Qaysi gapda sifatdosh bor?",
options:["Kelgan mehmon kutuldi","Bola tez yugurdi","U kitob o'qidi","Men bordim"],
answer:"Kelgan mehmon kutuldi"
},
{
question:"4. Qaysi so'zda tovush tushushi hodisasi bor?",
options:["Kitobi","Bolalar","Burni","Uylar"],
answer:"Burni"
},
{
question:"5. O'qigan bola bilimli bo'ladi) degan gapidagi) o'qigan nima?",
options:["Sifatdosh","Harakat nomi","Sof fe'l","Ravish"],
answer:"Sifatdosh"
},
{
question:"6. Qaysi gapda hol mavjud?",
options:["Uy katta","Kitob qiziq","Men bugun maktabga bordim","Qizil olma"],
answer:"Men bugun maktabga bordim"
},
{
question:"7. Qaysi biri ko'makchi?",
options:["Ammo","Go‘zal","Tez","Uchun",],
answer:"Uchun"
},

{
question:"8. Qaysi qatorda paronim so'zlar bor?",
options:["Katta-kichik","Go'zal-chiroyli","Asr-Asir","Tez-sekin"],
answer:"Asr-Asir"
},


];






const quiz = document.getElementById("quiz");

questions.forEach((q,index)=>{

    const box=document.createElement("div");
    box.className="question";

    let html=`<h3>${q.question}</h3>`;

    q.options.forEach(option=>{

        html+=`
        <label class="option">
            <input
                type="radio"
                name="q${index}"
                value="${option}"
                onchange="checkAnswer(this,'${q.answer}')"
            >
            ${option}
        </label>
        `;
    });

    box.innerHTML=html;
    quiz.appendChild(box);

});

function checkAnswer(element, correctAnswer){

    const options =
    element.closest(".question")
    .querySelectorAll(".option");

    options.forEach(opt=>{
        opt.style.background="";
        opt.style.color="";
        opt.style.borderColor="#ddd";
    });

    const selectedLabel =
    element.parentElement;

    if(element.value === correctAnswer){

        selectedLabel.style.background="#22c55e";
        selectedLabel.style.color="white";
        selectedLabel.style.borderColor="#22c55e";

    }else{

        selectedLabel.style.background="#ef4444";
        selectedLabel.style.color="white";
        selectedLabel.style.borderColor="#ef4444";

        options.forEach(opt=>{

            const radio =
            opt.querySelector("input");

            if(radio.value === correctAnswer){

                opt.style.background="#22c55e";
                opt.style.color="white";
                opt.style.borderColor="#22c55e";
            }

        });

    }

}
















function login(){


let email =
document.getElementById("email").value;


let msg =
document.getElementById("msg");



if(email.includes("@") && email.includes(".")){


msg.innerHTML="Kirish...";


setTimeout(()=>{


window.location="index.html";


},1000);



}else{


msg.innerHTML="Emailni to‘g‘ri kiriting";


}


}























