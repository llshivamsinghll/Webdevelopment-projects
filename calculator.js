let string ="";
let buttons=document.querySelectorAll('.butt');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click' , (e) =>
    {
        x=e.target;
        if(x.innerHTML=="=")
        { string=eval(string);
            document.querySelector('input').value=string;
        }
       
        else if
        (x.innerHTML=="AC")
        { 
            string="";
            document.querySelector('input').value=string;
        }
        else
       {
       console.log(e.target);

       
        string=string + x.innerHTML;
        
        document.querySelector('input').value=string;}
        
        

    }

    )

})
document.getElementsByClassName('input').onclick =function()
{
    document.getElementsByClassName('input').style="none";
}