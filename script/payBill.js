document.getElementById('pay-bill-btn').addEventListener('click',()=>{


    const selectedInstitude=getValueFromInput("select-institude");
    
    if (selectedInstitude ==='Select back')
    {
        alert("Institude not select yet. Please select institude");
        return ;
    }

    const billerAccountNum=getValueFromInput("biller-account-number");
    
    if(billerAccountNum.length !== 11)
    {
        alert("Ivalid Biller Account Number");
        return ;
    }

    const amountToPay=getValueFromInput("amount-to-pay");

    const currentBalance=getBalance();

    const newBalance=currentBalance - Number(amountToPay);

    if(newBalance < 0)
    {
        alert("Invalid amount to pay");
        return;
    }

    const pin=getValueFromInput("biller-pin");

    if(pin==='1234'){
        alert(`${amountToPay}$ paid successfully to ${selectedInstitude} 
            at ${Date()}`);

             setNewBalance(newBalance);


            const history=document.getElementById('history-container');

            const div=document.createElement('div');


            div.innerHTML=`
    
         <div class="card bg-base-100 mb-5  flex flex-row  items-center gap-3 rounded-2xl p-4">
              <div class="img bg-gray-300 w-[120px] h-[80px] rounded-full p-4 flex justify-center items-center">
                <img class="w-[40px] h-[40px]  " src="./Payoo/assets/opt-1.png" alt="">
              </div>
              <div class="details">
                 <h1 class="text-xl text-gray-600 font-bold">Bill Paid</h1>

                <p> ${amountToPay}$ Paid Successfully
                 at ${Date()} </p>

              </div>
            </div>
    
    `

    history.append(div);


            

    }

    else{
        alert("Invalid Pin");
    }

});