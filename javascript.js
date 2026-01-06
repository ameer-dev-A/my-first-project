    //-----------------btn bar--------------------
    const bar2 = document.querySelector('.bar2');
    const tap2 = document.querySelector('.tap2');
    const tapli = document.querySelector('.tap-li');
    const tap3 = document.querySelector('.tap3');
    const tapli3 = document.querySelector('.tap-li3');
    body=document.body;

function toggleMenu(bar) {
  bar.classList.toggle("active");
  bar2.classList.toggle("show");
}  
tapli.addEventListener("click", (e) => {
  e.stopPropagation();
  tap2.classList.toggle("showtap2");
  tap3.classList.remove("showtap3");
  bar2.classList.add("show2");
});

tapli3.addEventListener("click", (e) => {
  e.stopPropagation();
  tap3.classList.toggle("showtap3");
  tap2.classList.remove("showtap2");
  bar2.classList.add("show3");
});

document.body.addEventListener("click", () => {
  tap2.classList.remove("showtap2");
  tap3.classList.remove("showtap3");
  bar2.classList.remove("show2", "show3");
});
// tapli.addEventListener("click", () => {
//   if (tap2.style.display === "block") {
//     tap2.style.display = "none"; // إغلاق
//   } else {
//     tap2.style.display = "block"; // فتح
//   }
// });

// function showtap2(){
//   tap2.classList.toggle("showtap2");
// if(tap2.classList.contains("showtap2")){
//   tap3.classList.remove("showtap3");
//   bar2.classList.toggle("show2");
// } else {
//   bar2.classList.remove("show3");
// }
// }
// tapli3.addEventListener("click", () => {
//   if (tap3.style.display === "grid") {
//     tap3.style.display = "none"; // إغلاق
//   } else {
//     tap3.style.display = "grid"; // فتح
//   }
// });
// function showtap3(){
//      tap3.classList.toggle("showtap3");
//   if(tap3.classList.contains("showtap3")){
//     tap2.classList.remove("showtap2");
//     bar2.classList.toggle("show3");
//   } else {
//     bar2.classList.remove("show3");
//   }
// }

// body.addEventListener("click", (e) => {
//   if (!bar2.contains(e.target) &&!bar2.contains(e.target) && !tap2.contains(e.target)&& !tap3.contains(e.target)) {
//     bar2.classList.remove("show2");
//     bar2.classList.remove("show3");
//     tap2.classList.remove("showtap2");
//     tap3.classList.remove("showtap3");
//   }
// });

    //-----------------bar-position--------------------
     const bar2position = document.querySelector('.bar2');

     window.addEventListener('scroll',()=>{
         if(window.scrollY >= 300){
             bar2position.classList.add('fixed');
         }else{
             bar2position.classList.remove('fixed');
         }
        
     })
    
    //-----------------bar2-word--------------------

    let chars=['p','h','a','r'];
    let chars2=['m','a','c','y'];
    let dot1 = document.getElementById('dot1');
        dot1.style.color='red';
        dot1.style.fontSize= '50px'
        dot1.style.width= '100%'
    for(let i=0 ; i < chars.length ; i++){     
        dot1.textContent += chars[i].toUpperCase();
    }
    for(let i=0 ; i < chars2.length ; i++){     
      let dot2 = document.getElementById('dot2');
        dot2.textContent += chars2[i].toUpperCase();
        dot2.style.color='red';
        dot2.style.fontSize= '50px'
        dot2.style.width= '100%'
    }
    //-----------------bg slide--------------------

    const slider = document.getElementById("bg2");
    const dots = document.querySelectorAll(".dot");
    
    // تكبير العنصر الذي في المنتصف
    function updateCenter() {
        const all = document.querySelectorAll(".slidediv");
        all.forEach(s => s.classList.remove("center"));
       // if (all[1]) all[1].classList.add("center");
    }
    
    // تحديث حالة النقاط
    function updateDots() {
        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentIndex].classList.add("active");
    }
    
    let currentIndex = 0;
    
    // حركة NEXT بدون قفزة
    function moveNext(auto = true) {
        slider.style.transition = "0.6s ease";
        slider.style.transform = "translateX(-33.33%)";
    
        slider.addEventListener("transitionend", function handler() {
            slider.style.transition = "none";
    
            // نقل أول عنصر للنهاية
            slider.appendChild(slider.firstElementChild);
            slider.style.transform = "translateX(0%)";
    
            slider.removeEventListener("transitionend", handler);
    
            if (auto) currentIndex = (currentIndex + 1) % dots.length;
    
            updateCenter();
            updateDots();
        });
    }
    
    // حركة BACK بدون قفزة
    function movePrev() {
        slider.style.transition = "none";
    
        // نقل آخر عنصر للبداية
        slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
    
        slider.style.transform = "translateX(-33.33%)";
    
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                slider.style.transition = "0.6s ease";
                slider.style.transform = "translateX(0%)";
            });
        });
    
        slider.addEventListener("transitionend", function handler() {
            slider.style.transition = "none";
            slider.removeEventListener("transitionend", handler);
    
            currentIndex = (currentIndex - 1 + dots.length) % dots.length;
    
            updateCenter();
            updateDots();
        });
    }
    // زر next
    document.getElementById("next").onclick = () => moveNext();
    
    // زر back
    document.getElementById("back").onclick = () => movePrev();
    
    // الضغط على النقاط
    dots.forEach((dot, i) => {
        dot.onclick = () => {
            let diff = i - currentIndex;
    
            if (diff > 0) {
                for (let x = 0; x < diff; x++) moveNext(false);
            } else if (diff < 0) {
                for (let x = 0; x < -diff; x++) movePrev();
            }
    
            currentIndex = i;
            updateDots();
        };
    });
    
    // Auto
    setInterval(() => moveNext(), 3000);
    
    updateCenter();
    updateDots();
        //-----------------icon--------------------

        const texts = document.querySelectorAll('.icons-icon-content');
        const images = document.querySelectorAll('.img');


        texts.forEach(text =>{
            const imgid = text.dataset.img;
            const img = document.getElementById(imgid);

            text.addEventListener('mouseover',()=>{
                images.forEach(i =>
                    i.style.display='none');
                    img.style.display='block';
            });
        });
 //-----------------visit--------------------

  let visitcount = localStorage.getItem('visit');
  if(!visitcount){
    visitcount=0;
  }
    visitcount++;
  
  localStorage.setItem("visit",visitcount);
  document.getElementById('visitcount').textContent = visitcount;

   //-----------------load--------------------

   let load = document.getElementById('load');
   let loadelem = document.getElementById('load-text');
   
   let loadtext = [
     'https://static.vecteezy.com/system/resources/thumbnails/010/417/055/small/african-american-pharmacist-working-in-drugstore-at-hospital-pharmacy-african-healthcare-photo.jpg',
     'https://img.freepik.com/free-photo/young-hispanic-woman-pharmacist-smiling-confident-standing-with-arms-crossed-gesture-pharmacy_839833-7087.jpg?semt=ais_hybrid&w=740&q=80'
   ];
   
   let index = 0;
   
   function reset() {
     load.style.transition = 'none';
     load.style.width = '0%';
   
     setTimeout(() => {
       load.style.transition = 'width 3s linear';
       load.style.width = '100%';
     }, 100);
   
     loadelem.style.opacity = '0';
     loadelem.style.transform = 'scale(0.9)';
   
     setTimeout(() => {
       index = (index + 1) % loadtext.length;
       loadelem.src = loadtext[index];
   
       loadelem.style.opacity = '1';
       loadelem.style.transform = 'scale(1)';
     }, 200);
   
     setTimeout(reset, 3000);
   }
   
   reset();
   
 
  





   
 
  





 
  






