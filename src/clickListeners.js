export function btn_clicked(active_button){
   
    let main_div=document.querySelector('.main');
    main_div.textContent="";
    let btns=document.querySelectorAll('.btn');
    console.log(btns);
    btns.forEach(btn=>{
        btn.classList.remove('active');
    });
    active_button.classList.add('active');
}
