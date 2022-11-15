# save this as app.py
from flask import Flask, render_template
import random
app = Flask(__name__) # Essa linha serve como refeRência pro modulo Flask ligar o script a variavel "app" dentro do módulo

#Função da pergunta
def questao():
    A = random.randint(1, 99)
    B = random.randint(1, 99)
    r = (A + B)
    print ("Responda:")
    print (str(A) + " + " + str(B) + "?")
    return [A, B, r]
#Chamar função como lista
form = questao()



@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html', form=form)


#__main__ é a variavel predefinida do módulo pra identificar o script(?)
#Na linha abaixo eu digo que a variável usada pra ligar o módulo ao script e igual a variável
#q o python usa para identificar o script, logo, quando o script for executado ele vai chamar o módulo "sozinho"
#porém, ainda assim, vou precisar chamar de dentro do virtual environment 
if __name__ == ('__main__'):
    app.run(debug = True)
