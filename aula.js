

function createCalculator(){
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        start(){
            this.clickButton();
            this.enterButton();
         },

        clearDisplay(){
            this.display.value ='';
        },
        backSpace(){
            this.display.value = this.display.value.slice(0, -1);
        },

        
        resultEqual(){
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
        },
        enterButton() {
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode === 13){
                    this.resultEqual();
                }
            });

        },
       

        clickButton(){
            document.addEventListener('click', function(e){
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    this.btnForDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.backSpace();
                }
                if(el.classList.contains('btn-eq')){
                    this.resultEqual();
                }
                this.display.focus();

            }.bind(this));
        },

        btnForDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculator = createCalculator();
calculator.start();