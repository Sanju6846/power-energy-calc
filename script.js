//Single phase js

function calculatePower(){
    let Voltage = parseFloat(document.getElementById('Voltage1').value);
    let Current = parseFloat(document.getElementById('Current1').value);
    let PF = parseFloat(document.getElementById('PF1').value);


    //This is checked for voltage negative value

    if(Voltage<0 ){
        alert("Please enter correct volatge value.");
        return;
    }

    if(isNaN(Voltage) || isNaN(Current)){
        document.getElementById('Apparent_Power').textContent =" please eneter valid value";
        document.getElementById('Active_Power').textContent ="";
        document.getElementById('Reactive_Power').textContent ="";
        return;
}
    let Apparent = (Voltage * Current)/1000;
    if(Apparent<0){
        Apparent = Apparent * -1;
    }
    document.getElementById('Apparent_Power').textContent="The Apparent power is : " + Apparent.toFixed(3) + " kVA";


    let Active = (Voltage * Current * PF )/1000;
    document.getElementById('Active_Power').textContent="The Active power is : " + Active.toFixed(3) + " kW";


    let Reactive = Math.sqrt((Apparent * Apparent) - (Active * Active));
    document.getElementById('Reactive_Power').textContent="The Reactive power is : " + Reactive.toFixed(3) + " kVAr";


    //MD calculation
            let md15Radio = document.getElementById('DIP_15'); // radio button target for calculation
            let md30Radio = document.getElementById('DIP_30');
            let powerOnTime = parseFloat(document.getElementById('Minutes1').value);

            if (md15Radio.checked) {
                const Max_demand = (Active * powerOnTime)/15;
                document.getElementById('MD_kw').textContent ="Maximum Demand : " + Max_demand.toFixed(3) + " kW";
                if(powerOnTime>15 || powerOnTime<0){
                    alert("Please enter valid input");
                    return;
                }

            }
            else if (md30Radio.checked) {
                const Maximum_demand = (Active *powerOnTime)/30;
                document.getElementById('MD_kw').textContent ="Maximum Demand : " + Maximum_demand.toFixed(3) + " kW";
                if(powerOnTime>30 || powerOnTime<0){
                    alert("Please enter valid input");
                    return;
                }
            }
            //kWh Calculation
            let Active_energy = (Active * powerOnTime)/60;
            document.getElementById('kWh').textContent  ="Active Energy : " + Active_energy.toFixed(3) + " kWh";
}


// 3 Phase calculation start here

function calculatePower3(){
    let R_Voltage = parseFloat(document.getElementById('R_Voltage').value);
    let Y_Voltage = parseFloat(document.getElementById('Y_Voltage').value);
    let B_Voltage = parseFloat(document.getElementById('B_Voltage').value);
    let R_Current = parseFloat(document.getElementById('R_Current').value);
    let Y_Current = parseFloat(document.getElementById('Y_Current').value);
    let B_Current = parseFloat(document.getElementById('B_Current').value);
    let R_PF = parseFloat(document.getElementById('R_Pf').value);
    let Y_PF = parseFloat(document.getElementById('Y_Pf').value);
    let B_PF = parseFloat(document.getElementById('B_Pf').value);

    //PF and Current Volatge invalid value checkpoint
    if(isNaN(R_Voltage) || isNaN(R_Current) || isNaN(R_PF) || R_PF<-1 ||R_PF>1 ){
        document.getElementById('R_Apparent').textContent = "Invalid input" ;
        return;
    }

    if(isNaN(Y_Voltage) || isNaN(Y_Current) || isNaN(Y_PF) || Y_PF<-1 ||Y_PF>1){
        document.getElementById('Y_Apparent').textContent = "Invalid input" ;
        return;
    }
       if(isNaN(R_Voltage) || isNaN(R_Current) || isNaN(R_PF) || R_PF<-1 ||R_PF>1){
        document.getElementById('B_Apparent').textContent = "Invalid input" ;
        return;
       }
    
    if(R_Voltage <0 || Y_Voltage<0 || B_Voltage<0){
        alert("Please enter correct value of voltages.");
        return;
    }   
   
    //R phase apparent power calculation
    let R_Apparent_power = (R_Voltage * R_Current)/1000;
    //Apparent power never negative
    if (R_Apparent_power <0) {
        R_Apparent_power = R_Apparent_power *-1;
    }
    document.getElementById('R_Apparent').textContent="R phase Apparent power: " + R_Apparent_power.toFixed(3) + " kVA";

    //Y phase apparent power calculation
    let Y_Apparent_power = (Y_Voltage * Y_Current)/1000;
    if (Y_Apparent_power <0) {
        Y_Apparent_power = Y_Apparent_power *-1;
    }
    document.getElementById('Y_Apparent').textContent="Y phase Apparent power: " + Y_Apparent_power.toFixed(3) + " kVA";

    //Y phase apparent power calculation
    let B_Apparent_power = (B_Voltage * B_Current)/1000;
    if (B_Apparent_power <0) {
        B_Apparent_power = B_Apparent_power *-1;
    }
    document.getElementById('B_Apparent').textContent="B phase Apparent power: " + B_Apparent_power.toFixed(3) + " kVA";

    //Total phase apparent power calculation
    let T_Apparent_power = R_Apparent_power + Y_Apparent_power + B_Apparent_power;
    document.getElementById('T_Apparent_Power').textContent="Total Apparent power: " + T_Apparent_power.toFixed(3) + " kVA";

    //R phase Active power calculation
    let R_Active_power = (R_Voltage * R_Current * R_PF)/1000;
    document.getElementById('R_Active').textContent="R phase Active power : " + R_Active_power.toFixed(3) + " kW";

    //Y phase Active power calculation
    let Y_Active_power = (Y_Voltage * Y_Current*Y_PF)/1000;
    document.getElementById('Y_Active').textContent="Y phase Active power: " + Y_Active_power.toFixed(3) + " kW";

    //Y phase Active power calculation
    let B_Active_power = (B_Voltage * B_Current*B_PF)/1000;
    document.getElementById('B_Active').textContent="B phase Active power: " + B_Active_power.toFixed(3) + " kW";

    //Total phase Active power calculation
    let T_Active_power = R_Active_power + Y_Active_power + B_Active_power;
    document.getElementById('T_Active_Power').textContent="Total Active power: " + T_Active_power.toFixed(3) + " kW";


    //R phase Reactive power calculation
    let R_Reactive_power = Math.sqrt((R_Apparent_power * R_Apparent_power) - (R_Active_power* R_Active_power));
    document.getElementById('R_Reactive').textContent="R phase Reactive power: " + R_Reactive_power.toFixed(3) + " kVAr";

    //Y phase Active power calculation
    let Y_Reactive_power = Math.sqrt((Y_Apparent_power * Y_Apparent_power) - (Y_Active_power* Y_Active_power));
    document.getElementById('Y_Reactive').textContent="Y phase Reactive power: " + Y_Reactive_power.toFixed(3) + " kVAr";

    //B phase Active power calculation
     let B_Reactive_power = Math.sqrt((B_Apparent_power * B_Apparent_power) - (B_Active_power* B_Active_power));
    document.getElementById('B_Reactive').textContent="B phase Reactive power : " + B_Reactive_power.toFixed(3) + " kVAr";

    //Total phase Reactive power calculation
    let T_Reactive_power = R_Reactive_power + Y_Reactive_power + B_Reactive_power;
    document.getElementById('T_Reactive_Power').textContent="Total  Reactive power: " + T_Reactive_power.toFixed(3) + " kVAr";

    //MD calculation
    let md15Radio = document.getElementById('D_IP_15'); // radio button target for calculation
    let md30Radio = document.getElementById('D_IP_30');
    let poweOnTime = parseFloat(document.getElementById('Minutes').value);

    if (md15Radio.checked) {
        const Max_demand = (T_Active_power*poweOnTime)/15;
        document.getElementById('MD_kw').textContent ="Maximum Demand : " + Max_demand.toFixed(3) + " kW";
        if(powerOnTime>15 || powerOnTime<0){
            alert("Please enter valid input");
            return;
        }
    }
    else if (md30Radio.checked) {
        const Maximum_demand = (T_Active_power*poweOnTime)/30;
        document.getElementById('MD_kw').textContent ="Maximum Demand : " + Maximum_demand.toFixed(3) + " kW";
        if(powerOnTime>30 || powerOnTime<0){
            alert("Please enter valid input");
            return;
        }
    }
    //kWh Calculation
    let Active_energy = (T_Active_power * poweOnTime)/60;
    document.getElementById('kWh').textContent ="Active Energy : " + Active_energy.toFixed(3) + " kWh";
}
function toggleDivs() {
    const check1 = document.getElementById("check1");
    const check2 = document.getElementById("check2");

    const div1 = document.getElementById("div1");
    const div2 = document.getElementById("div2");

    let checkedCount = 0;
    if (check1.checked) checkedCount++;
    if (check2.checked) checkedCount++;
  
    if (checkedCount > 1 && (check1.checked && check2.checked)) {    
      alert("Please select your meter type.");
      check1.checked = false;
      check2.checked = false;
    } else {
      div1.style.display = check1.checked ? "block" : "none";
      div2.style.display = check2.checked ? "block" : "none";
    }
  }
