#Usuario responde perguntas
#Se o usuario errar, ele ganha um strike. Com 3 strikes o jogo acaba e mostra mensagem de derrota
import sys, random
Derrota = False

#MVP:
#
#Introdução
#Pergunta
#Verificar resposta
#Adicionar ou remover pontos
#Verificar se quantidade de pontos é maior que 3
#Verificar se quantidade de tentativas e maior que 3

#Introdução
print ("Jogo de perguntas")
print ("Responda tudo")

#Pergunta
def questao():
    A = random.randint(1, 99)
    B = random.randint(1, 99)
    r = (A + B)
##    o = random.randint(-4,4)
##    
##    
##    if o < -2: #somar
##        print (str(A) + " + " + str(B) + "?")
##        r = (A + B)
##    elif o > 2:
##        print (str(A) + " - " + str(B) + "?")
##        r = (A - B)
##    elif o >= -1 or o <= 1 :
##        print (str(A) + " / " + str(B) + "?")
##        r = (A / B)
##    elif o == -2 or o == 2 :
##        print (str(A) + " X " + str(B) + "?")
##        r = (A * B)
##    print(r)
    print ("Responda:")
    print (str(A) + " + " + str(B) + "?")
    return [A, B, r]

def vitoria():
    print ("Vitória!")
    again()

def derrota():
    print ("Perdeu!")
    again()

#Quando o jogo terminar, pergunta se quer jogar novamente
def again():
    print ("Jogar novamente?")
    novamente = input()
    if novamente == "Sim":
        game()

    if novamente == "Nao":
        print ("Obrigado por jogar")
        sys.exit()

#Jogatina
def game():
    pontos = 0
    tentativas = 0
    form = []
    while pontos < 3:
        # O Loop vai servir pra repetir as perguntas
        for pergunta in range (1):
            form = questao()
            
            resposta = 0
            while True:
                try:
                    resposta = input()

                    #Verificando resposta e gerenciando pontos
                    if int(resposta) == (form[2]) :
                        print ("certo")
                        pontos = pontos + 1
                    else:
                        print ("errado")
                        tentativas = tentativas + 1
                    break
                except ValueError:
                    continue   
        if tentativas == 3:
            derrota()
            break
    vitoria()
game()

##def repetir():
##    for teste in range(3):
##        teste = teste + 1
##        print (teste)
