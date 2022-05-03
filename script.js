//envia formulário
function enviarFormulario(){
    window.alert('Formulário enviado com sucesso!');
}

//Calcula dosagem de insulina
function calculaInsulina(){
    var bottle = document.querySelector('.input1')
    var units = document.querySelector('.input2')
    var result = document.querySelector('.result_calculadora')

    var bottle1 = Number(bottle.value)
    var units1 = Number(units.value)

    var sum = units1/bottle1

    if(sum > 0){
        result.innerHTML = `<p>Sua dosagem de insulina é ${sum} ml</p>`
    }

}

//testes
function calculaTesteJejum(){
    var n1 = document.querySelector('.glicemia-jejum')
    var result = document.querySelector('.result') 

    var glicemiaJejum = Number(n1.value)

    if(glicemiaJejum >= 101 && glicemiaJejum <=130){
        result.innerHTML = `<p>Atenção, o resultado do seu exame pode ser indicativo de pré-diabetes. 
        O intervalo normal é entre 70 e 100 mg/dl.</p>
        
        <br>

        <p>A pré-diabetes é uma situação que antecede a diabetes, sendo considerada um sinal de alerta para mudança de 
        hábitos e regulação dos níveis de glicose. Assim, para prevenir a progressão até a diabetes, é importante ter 
        atenção à alimentação, dando preferência a alimentos com pouca gordura e açúcar e ricos em fibras, além de ser 
        também importante praticar atividade física regularmente.</p>` 
    }else if(glicemiaJejum < 70){
        result.innerHTML = `<p>Atenção, o seu resultado pode ser indicativo de hipoglicemia. 
        O intervalo normal é entre 70 e 100 mg/dl.</p>
        <br>
        
        <p>A hipoglicemia é uma situação em que os níveis de glicose estão abaixo do normal, o que pode levar ao aparecimento 
        de sintomas como tonturas, náuseas, confusão mental e desmaio, em alguns casos. Assim, na presença dos primeiros sintomas 
        de hipoglicemia, é importante consumir alimentos ou bebidas doces e ricas em carboidratos simples para repor os níveis de 
        açúcar mais rapidamente.</p>`
    }else if(glicemiaJejum > 130){
        result.innerHTML = `<p>Atenção, seu nível de glicose no sangue está alto, o que pode ser sinal de diabetes.
         O intervalo normal é entre 70 e 100 mg/dl.</p>
         <br>

         <p>A diabetes é uma doença crônica em que há altos níveis de açúcar (glicose) no sangue, o que pode interferir no 
         funcionamento do corpo e causar sintomas como sede excessiva, boca seca, aumento da fome e vontade frequente para urinar. 
         Além disso, quando não é devidamente tratada, há maior risco de doenças cardiovasculares, surdez, pé diabético e alterações 
         na visão.</p>
        <br>
         <p>Por isso, é importante ter uma alimentação saudável, rica em fibras e pobre em açúcar, praticar atividade física 
         de forma regular e seguir o tratamento indicado pelo médico, pois assim é possível regular os níveis de glicose e 
         ter uma melhor qualidade de vida.</p>
         `
    }else if(glicemiaJejum >=70 && glicemiaJejum <=100){
        result.innerHTML = `<p>Parabéns! O seu resultado está normal. O intervalo normal é entre 70 e 100 mg/dl.</p>
        <br>
        <p>Ter níveis ideais de glicose no sangue é fundamental para o bom funcionamento do corpo, pois corresponde à 
        principal fonte de energia para as células do corpo e, por isso, é importante que os níveis de glicose estejam
         dentro dos valores considerados normais. Assim, é recomendado ter uma alimentação mais natural possível, dando 
         preferência a alimentos ricos em fibras e pobres em açúcar, e praticar atividade física de forma regular.</p>`
    }
}

function calculaTesteCapilar(){
    var n1 = document.querySelector('.glicemia-capilar')
    var result1 = document.querySelector('.result1') 

    var glicemiaCapilar = Number(n1.value)

    if(glicemiaCapilar >= 0 && glicemiaCapilar<=199){
        result1.innerHTML = `<p>Parabéns! O seu resultado está normal. O resultado normal é abaixo de 200 mg/dl.</p>
        <br>

        <p>Ter níveis ideais de glicose no sangue é fundamental para o bom funcionamento do corpo, pois corresponde à 
        principal fonte de energia para as células do corpo e, por isso, é importante que os níveis de glicose estejam 
        dentro dos valores considerados normais. Assim, é recomendado ter uma alimentação mais natural possível, dando 
        preferência a alimentos ricos em fibras e pobres em açúcar, e praticar atividade física de forma regular.</p>
        ` 
    }else if(glicemiaCapilar >=200){
        result1.innerHTML = `<p>Atenção, seu nível de glicose no sangue está alto, o que pode ser sinal de diabetes. 
        O resultado normal é abaixo de 200 mg/dl.</p>
        <br>
        <p>A diabetes é uma doença crônica em que há altos níveis de açúcar (glicose) no sangue, o que pode interferir no 
        funcionamento do corpo e causar sintomas como sede excessiva, boca seca, aumento da fome e vontade frequente para urinar. 
        Além disso, quando não é devidamente tratada, há maior risco de doenças cardiovasculares, surdez, pé diabético e alterações 
        na visão.</p>
        <br>
        <p>Por isso, é importante ter uma alimentação saudável, rica em fibras e pobre em açúcar, praticar atividade física 
        de forma regular e seguir o tratamento indicado pelo médico, pois assim é possível regular os níveis de glicose e 
        ter uma melhor qualidade de vida.</p>
        `
    }
}