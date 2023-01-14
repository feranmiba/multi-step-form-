'use strict'
//SELECTING ELEMENTS
const firstName = document.getElementById('first')
const Email = document.getElementById('second')
const phoneNumber = document.getElementById('third')
const firstStep = document.querySelector('.first')
const secondForm = document.querySelector('.spaced')
const form2Tabs = document.querySelectorAll('.arcade')
const tabs = document.querySelectorAll('.lis')
const tabsLists = document.querySelector('.list')
const tabsListsSecond = document.querySelector('.lists')
const tabscontent = document.querySelectorAll('.form')
const nextSteps = document.querySelectorAll('.next')
const goBack = document.querySelectorAll('.back')
const thirdForm = document.querySelector('.form3')
const errorMessage = document.querySelector('.ohh')
const theNumber = document.querySelectorAll('.num')
const monthlyButton = document.querySelector('.btn1')
const yearlyButton = document.querySelector('.btn2')
const freeMonthly = document.querySelectorAll('.free')
const thankYou = document.querySelector('.for')
const secondStepMoney = document.querySelectorAll('.num')
const lastStep = document.getElementById('frm4arc')
const lastStepSecond = document.getElementById('ego1')
const lastStepSecondMoney = document.getElementById('ego2')
const lastStepThirdMoney = document.getElementById('ego3')
const Onlineservice = document.getElementById('arc')
const OnlineserviceSecond = document.getElementById('arcwhe')
const OnlineserviceMoney = document.getElementById('totalego')















//FUNCTIONS FIRST STEP AND STORING DATA
firstStep.addEventListener('click', function () {
    let dataInput = {
        firstname: `${firstName.value}` ,
        phoneNumber: Number(`${phoneNumber.value}`) ,
        email: `${Email.value}`
     }
     thankYou.textContent = `Thanks ${dataInput.firstname}  for confirming your subscription! We hope you have fun 
     using our platform. If you ever need support, please feel free 
     to email us at support@loremgaming.com.`
})






//Tabbed components

const theTabbedComponet =  function (e) {
    const  clicked = e.target.closest('.nav__item ');
    console.log(clicked);


    //ADD
    if(!clicked) return
    
    tabscontent.forEach(t => t.classList.add('hid'))
    //ACTIVE TABS
    tabs.forEach(t => t.classList.remove('active')) 
    clicked.classList.add('active')

    //THE CONTENTS
    document.querySelector(`.operation--cotent--${clicked.dataset.tab}`).classList.remove('hid')
}
tabsLists.addEventListener('click', theTabbedComponet)
tabsListsSecond.addEventListener('click', theTabbedComponet)

//THE NEXT STEP AND GO BACK
nextSteps.forEach(btns => {
  
    btns.addEventListener('click', (e) => {
        const _id = btns.getAttribute('id')
        console.log(_id);

        tabscontent.forEach(tab => {
            const theForms = tab.getAttribute('id')

            tabs.forEach(num => {
                const theTabs = num.getAttribute('id')
                if (_id == theTabs) {
                    num.classList.add('active')  
                } else {
                    num.classList.remove('active')  
                }
             })

            if (_id == theForms) {
               tab.classList.remove('hid') 
            } else {
                tab.classList.add('hid')  
            }
          })
})
})
goBack.forEach(btns => {

    btns.addEventListener('click', (e) => {
        const _id = btns.getAttribute('id')
        console.log(_id);

        tabscontent.forEach(tab => {
            const theForms = tab.getAttribute('id')

            tabs.forEach(num => {
                const theTabs = num.getAttribute('id')
                if (_id == theTabs) {
                    num.classList.add('active')  
                } else {
                    num.classList.remove('active')  
                }
             })

            if (_id == theForms) {
               tab.classList.remove('hid') 
            } else {
                tab.classList.add('hid')    
            }
          })
})
})



const StoringDataTwo = function (e) {
    const  clicked = e.target.closest('.arcade');
    console.log(clicked.textContent);

    secondStepMoney.forEach(function (e) {
        const  click = e.parentElement;
        
    })
    //ADD
    if(!clicked) return
       
    //STORING THE DATA
    const secondDataInput = `${clicked.textContent}`.split('             ')  
     lastStep.textContent=`${secondDataInput[0]}`
     lastStepSecond.textContent =`${secondDataInput[1]}`
     OnlineserviceSecond.textContent = `${secondDataInput[0]}`
     console.log(secondDataInput);

    //ACTIVE TABS
    form2Tabs.forEach(t => {
        t.classList.remove('actives')
    }) 
    clicked.classList.add('actives')
}
secondForm.addEventListener('click', StoringDataTwo)


// thirdForm.addEventListener('click', function (e) {
//     const  clicked = e.target.closest('.month');

//     const secondDataInput = `${clicked.textContent}`.split('             ')  
//     console.log(secondDataInput);
//     OnlineserviceSecond.textContent = `${secondDataInput[0]}`
//     lastStepThirdMoney.textContent = `${secondDataInput[3]}`
// })


//STORING THE THIRD DATA
const StoringDataThree = function (e) {
    const  clicked = e.target.closest('.month');

    //ADD
    if(!clicked) return
       
    //STORING THE DATA

        
    
    const secondDataInput = `${clicked.textContent}`.split('             ')  
     console.log(secondDataInput);
     Onlineservice.textContent = `${secondDataInput[0]}`
     lastStepSecondMoney.textContent = `${secondDataInput[3]}`
    //ACTIVE TABS
    form2Tabs.forEach(t => {
        t.classList.remove('actives')
    }) 
    clicked.classList.add('actives')
}

thirdForm.addEventListener('click', StoringDataThree)

const funMonthly = function (e) {
    e.preventDefault()
    yearlyButton.classList.remove('hid')
    monthlyButton.classList.add('hid')
    freeMonthly.forEach(f => {
        f.textContent = `2  months free`
    })
    theNumber.forEach(t => {
      t.textContent =  Number(t.textContent) * 10

    }) 
}
const funYearly = function (e) {
    e.preventDefault()
    yearlyButton.classList.add('hid')
    monthlyButton.classList.remove('hid')
    freeMonthly.forEach(f => {
        f.textContent = ``
    })
    theNumber.forEach(t => {
        t.textContent =  Number(t.textContent) / 10
      })
}


monthlyButton.addEventListener('click', funMonthly)
yearlyButton.addEventListener('click', funYearly)