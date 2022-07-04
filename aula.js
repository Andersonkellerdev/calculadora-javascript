

function Calculator(){
  
        this.display = document.querySelector('.display'),
        

        this.start = () => {
            this.clickButton();
            this.enterButton();
         }

        this.clearDisplay = ()=> {
            this.display.value ='';
        }
        this.backSpace =() =>{
            this.display.value = this.display.value.slice(0, -1);
        }

        
        this.resultEqual = () =>{
            let cont = this.display.value;
            try {
               cont = eval(cont);
               if (!cont){
                alert('Conta invalida');
                return;
               }
               this.display.value = cont;
            }catch(e){
                alert('Conta invalida');
                return;
            }
        }
        this.enterButton = () => {
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode === 13){
                    this.resultEqual();
                }
            });

        }
        this.clickButton = () => {
            document.addEventListener('click', event =>{
                const el = event.target;
                if(el.classList.contains('btn-num'))this.btnForDisplay(el);
                
                if(el.classList.contains('btn-clear'))this.clearDisplay();
                  
                if(el.classList.contains('btn-del'))this.backSpace();
                    
                if(el.classList.contains('btn-eq'))this.resultEqual();
                  
                

            });
        }  
        this.btnForDisplay = el => {
            this.display.value += el.innerText;
            this.display.focus();
        }
    };


const calculator = new Calculator();
calculator.start();