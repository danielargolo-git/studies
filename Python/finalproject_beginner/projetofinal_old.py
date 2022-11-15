#Usuario responde perguntas
#Se o usuario errar, ele ganha um strike. Com 3 strikes o jogo acaba
#Se o usuario acertar 3 vezes, o jogo acaba
#
#
#Cada pergunta vai ser um while
#



print ('A nossa base está sendo invadida por formigas!')
print ('Por favor nos ajude a LIMPAR ESSES VERMES!!')
print ('Resolva as equações para desbloquear nossas habilidades!')

print ('Responda as perguntas a seguir:')



falhou = False
pontos = 0

while pontos <= 2:

#Primeira pergunta
    rc = False
    t = 0
    while rc != True :
        r = 0
        print ('Q: 2 + 2?')
        r = input()

        #Para previnir erro caso o usuario não coloque resposta
        if r == "":
            #print ('vazio')
            continue
        if int(r) != 4:
            t = t + 1
            #print (t)
            print ('Urgh! Cuidado soldado!!')
        else:
            #print ('primeiro')
            pontos = pontos + 1
            print ('Ótimo!')
            print ('Ainda precisamos exterminar ' + str(abs((int(pontos) -3)*-1)) + ' formigas!!' )
            rc = True

        if t <= 2:
            #print ('continua')
            continue
        else:
            print ('Oh não!')
            print ('Falhamos na defesa da base!')
            falhou = True
            #print (pontos)
        break
    
    #Para ativar a "tela" de derrota
    if falhou == True:
            break

#Segunda pergunta
    rc = False
    t = 0
    while rc != True :
        r = 0
        print ('Q: 3 + 3?')
        r = input()
    
        #Para previnir erro caso o usuario não coloque resposta
        if r == "":
            #print ('vazio')
            continue
        if int(r) != 6:
            t = t + 1
            #print (t)
            print ('Urgh! Cuidado soldado!!')
        else:
            #print ('primeiro')
            pontos = pontos + 1
            print ('Ótimo!')
            print ('Ainda precisamos exterminar ' + str(abs((int(pontos) -3)*-1)) + ' formigas!!' )
            rc = True

        if t <= 2:
            #print ('continua')
            continue
        else:
            print ('Oh não!')
            print ('Falhamos na defesa da base!')
            falhou == True
            break
            #print (pontos)
        break

    #Para ativar a "tela" de derrota
    if falhou == True:
            break
    
#Terceira pergunta
    rc = False
    t = 0
    while rc != True :
        r = 0
        print ('Q: 4 + 4?')
        r = input()
    
        #Para previnir erro caso o usuario não coloque resposta
        if r == "":
            #print ('vazio')
            continue
        if int(r) != 8:
            t = t + 1
            #print (t)
            print ('Urgh! Cuidado soldado!!')
        else:
            #print ('primeiro')
            pontos = pontos + 1
            print ('Ótimo!')
            rc = True

        if t <= 2:
            #print ('continua')
            continue
        else:
            print ('Oh não!')
            print ('Falhamos na defesa da base!')
            falhou == True
            break
            #print (pontos)
        break
    print ('Finalmente! A base está limpa!')
    break
print ('Fim')
