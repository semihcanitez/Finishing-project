document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.querySelector("input[name='email']").value;
    const password = document.querySelector("input[name='password']").value;
    console.log("Email: " + email + " | Parola: " + password);
    // Burada, login işlemi için gereken işlemler yapılabilir.
    const warningMessage = document.querySelector("input[name='warningMessage']").value;
    methods: {
        login() 
            if(this.email === "" || this.password === "") {
                this.warningMessage = "Lütfen tüm alanları doldurunuz."

                return;
            }
            this.warningMessage = "";
            if (this.email.includes('@')) {
                this.warningMessage = "Lütfen geçerli bir email adresi giriniz."

                return;
            }
        
        }
    }
  );
  