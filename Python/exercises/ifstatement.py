#If statements
#Verificar se o campo foi preenchido

#print('What is your name?')
#name = input()
#if name != "":
#    print('Thank you.')
#else:
#    print('Failed. Please come back again.')


#Verificar se o campo é válido


validador = 0
name = ''

if validador <= 0 :
    print('What is your name?')
    name = input()
    #verificar se está preenchido
    if len(name) >= 0:
        validador + 1
    elif name == '':
        print ('Failed. Please fill the previous field accordangly.')
        validador - 1
    #verificar se contem apenas letras
    elif name - 1 > 0:
        print ('Numero no nome')
        validador - 1
    #verificar se possui mais que 16 caracteres
    elif len(name) > 16:
        print ('nome grande')
        validador - 1
    
print (validador)







print ('4 + 4?')
    if r == 8:
        print ('Quase lá, soldado!!')
        pontos + 1
        r = 0
        continue
    if r == 16:
        print ('Quase conseguimos ver o brilho de nossa base! Você está quase lá! Força!!')
        pontos + 1
        r = 0
        continue
    if pontos >= 3:
        print (pontos)
        print ('Finalmente! A base está limpa!')
        limpeza = True
    else:
        print (pontos)
        print ('Não conseguiremos vencer esta batalha, soldado.')
        print ('Fuja! Chame o Cpt. Professor, resistiremos até a chegada de reforços!')
        print ('.')
        print ('.')
        print ('.')
        print ('.')
        print ('.')
        continue
    


