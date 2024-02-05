let resumeData = {
    personalDetails:{
        branch:'',
        id:'',
        date:''
    },
    companyDetails:{
        companyName:'',
        palce:''
    },
   duration:{
       start: '',
       end: ''
    },
    skills:[],
    certificates:[],
   
};


const skillBtn = document.getElementById("skillbtn");
const skillcont = document.getElementById("skilldiv");
let skillCount = 0;
const maxskillCount = 14;
skillBtn.addEventListener('click', () => {
    if (skillCount < maxskillCount) {
        const textValue = document.getElementById("skill").value;
        const textValuename = document.getElementById("Certificates").value;
        if (textValue.trim() !== ''){

            const element = document.createElement('div');
            element.classList.add('achivementborder','col-md-12','mb-2');
            element.setAttribute("id", 'addedSkilldiv');
            const heading = document.createElement('h5');
            heading.setAttribute("id",'addedSkill');
            heading.textContent = textValue+"\t\t"+textValuename;
            const removeButton = document.createElement('button');
            removeButton.classList.add('btn' ,'badge-danger','mb-2');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                element.remove();
                skillCount--;
                skillBtn.disabled=false; });
            element.appendChild(heading);
            element.appendChild(removeButton);
            skillcont.appendChild(element);
            document.getElementById("skill").value = '';
            document.getElementById("Certificates").value = '';
            skillCount++;
            if (skillCount === maxskillCount) {
                    
                skillBtn.disabled = true; // Disable the button after reaching the limit
                setTimeout(() => {
                    alert('Maximum limit of 10 students reached.');
                }, 1200);
            }
        } else {
            alert('Please enter an details.');}
        }
    });


    
// save student
const saveSkillsBtn = document.getElementById("saveskillbtn");
saveSkillsBtn.addEventListener('click', () => {
    const skillsElements = skillcont.querySelectorAll('#addedSkilldiv');
    const newSkills = Array.from(skillsElements).map(div => {
        return div.querySelector('#addedSkill').textContent;
    });
    
    const skillsChanged = !arraysEqual(newSkills, resumeData.skills);
    if (skillsChanged) {
        resumeData.skills = newSkills;
        alert('Details Saved Successfully.');
        }
        else{
            alert('Same Student Added');
        } 
});
function arraysEqual(arr1, arr2){
    if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
          if (arr1[i] !== arr2[i]) return false;
        }
        return true;
      }
      

// all clear

// save personalDetails
var personalDetails = false;
const savePersonalDetails = document.getElementById('savepersonaldetailsbtn');
savePersonalDetails.addEventListener('click', () => {
    resumeData.personalDetails = {
        branch: document.getElementById('branch').value,
        id: document.getElementById('id').value,
        date:document.getElementById('date').value
    }
});

// save summary
const saveSummary = document.getElementById('summarybtn');
saveSummary.addEventListener('click', () => {
    resumeData.companyDetails = {
        companyName: document.getElementById('companyName').value,
        palce: document.getElementById('place').value
    }
});

// save duration
const saveExpbtntn = document.getElementById('experbtn');
saveExpbtntn.addEventListener('click', () => {
    resumeData.duration = {
        start: document.getElementById('start').value,
        end: document.getElementById('end').value
    }
});

 
 