/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var private = "Private";
var public = "Public";
var unlimited = "Unlimited";
var normal = "Normal";
var bankLocal = "Bank Local";
var bankForeign = "Bank Foreign";
var bureau = "Bureau";
var insurance = "Insurance";
var insuranceBroker = "Insurance Broker";
var reInsurance = "Re-Insurance";
var financialInstitution = "Financial Institution";
 
function format(expr, decplaces) 
{
    // raise incoming value by power of 10 times the
    // number of decimal places; round to an integer; convert to string
    var str = "" + Math.round(eval(expr) * Math.pow(10,decplaces));
    // pad small value strings with zeros to the left of rounded number
    while (str.length <= decplaces) 
    {
        str = "0" + str;
    }
    // establish location of decimal point
    var decpoint = str.length - decplaces;
    // assemble final result from: (a) the string up to the position of
    // the decimal point; (b) the decimal point; and (c) the balance
    // of the string. Return finished product.
    return str.substring(0,decpoint) + "." +
    str.substring(decpoint,str.length);
}

function calculatorLCOReg(form)
{
    var data1 = form.LCO.value;
    var data2 = form.type.value;
    var data3 = parseInt(form.capital.value);
    var capital = 0.00;
    
    if(data1==private)
    {
        if(data2==normal)
        {
            if(data3<10000)
                alert('A private company can not have capital less than ZMW10,000');
            else
                capital= 224+(0.025*data3);
        }
        else if(data2==bankLocal)
        {
            if(data3<104000000)
                alert('A Local Bank registered as a private company can not have capital less than ZMW104,000,000');
            else
                capital= 224+(0.025*data3);
        }
        else if(data2==bankForeign)
        {
            if(data3<520000000)
                alert('A Foreign Bank registered as a private company can not have capital less than ZMW520,000,000');
            else
                capital= 224+(0.025*data3);
        }
        else if(data2==bureau)
        {
            if(data3<250000)
                alert('A Bureau registered as a private company can not have capital less than ZMW250,000');
            else
                capital= 224+(0.025*data3);
        }
        else if(data2==insurance)
        {
            if(data3<1000000)
                alert('An Insurance Company registered as a private company can not have capital less than ZMW1,000,000');
            else
                capital= 224+(0.025*data3);
        }    
        else if(data2==insuranceBroker)
        {
            if(data3<520000)
                alert('An Insurance Broker Company registered as a private company can not have capital less than ZMW520,000');
            else
                capital= 224+(0.025*data3);
        }
        else if(data2==reInsurance)
        {
            if(data3<5000000)
                alert('A Re-Insurance Company registered as a private company can not have capital less than ZMW5,000,000');
            else
                capital= 224+(0.025*data3);
        }
        else
        {
            if(data3<500000)
                alert('A Financial Institution registered as a private company can not have capital less than ZMW500,000');
            else
                capital= 224+(0.025*data3);
        }
    }
    if(data1==public)
    {
        if(data2==normal)
        {
            if(data3<1000000)
                alert('A public company can not have capital less than ZMW1,000,000');
            else
                capital= 224+(0.025*data3);
        }
        else if(data2==bankLocal)
        {
            if(data3<104000000)
                alert('A Local Bank registered as a public company can not have capital less than ZMW104,000,000');
            else
                capital= 224+(0.025*data3);
        }
        else if(data2==bankForeign)
        {
            if(data3<520000000)
                alert('A Foreign Bank registered as a public company can not have capital less than ZMW520,000,000');
            else
                capital= 224+(0.025*data3);
        }
        else if(data2==bureau)
        {
            if(data3<1000000)
                alert('A Bureau registered as a public company can not have capital less than ZMW1,000,000');
            else
                capital= 224+(0.025*data3);
        }
        else if(data2==insurance)
        {
            if(data3<1000000)
                alert('An Insurance Company registered as a public company can not have capital less than ZMW1,000,000');
            else
                capital= 224+(0.025*data3);
        }    
        else if(data2==insuranceBroker)
        {
            if(data3<1000000)
                alert('An Insurance Broker Company registered as a public company can not have capital less than ZMW1,000,000');
            else
                capital= 224+(0.025*data3);
        }
        else if(data2==reInsurance)
        {
            if(data3<5000000)
                alert('A Re-Insurance Company registered as a public company can not have capital less than ZMW5,000,000');
            else
                capital= 224+(0.025*data3);
        }
        else
        {
            if(data3<1000000)
                alert('A Financial Institution registered as a public company can not have capital less than ZMW1,000,000');
            else
                capital= 224+(0.025*data3);
        }          
    }
    document.getElementById("head2").innerHTML = "The fee is ZMW" + format(capital,2);
}
function calculatorIncreaseCapital(form)
{
    var curCapital = parseInt(form.cCapital.value);
    var newCapital = parseInt(form.nCapital.value);
    
    var capital=newCapital-curCapital;
    var fee=56+(capital*0.025);
    
    if(capital<0)
    {
        alert('The new Capital can not be less than the Current Capital');
    }
    else
    {
        document.getElementById("head2").innerHTML = "The fee is ZMW" + format(fee,2);
    }
    
}
function calculatorMortgage(form)
{
    var mortgage = parseInt(form.mortgage.value);
    var fee=56+(mortgage*0.01);
    
    if(fee>2778)
    {
        fee=2778;
    }
    document.getElementById("head2").innerHTML = "The fee is ZMW" + format(fee,2);
}

