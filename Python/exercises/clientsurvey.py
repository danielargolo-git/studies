#Introduzir cliente em db
#nome do cliente
#idade
#cidade

#To fix
# - Não pode dar enter até colocar um valor válido
#       Não pode ser vázio
#       Precisa fazer sentido com a pergunta - ex: "Seu nome?" ~ Precisa começar com uma letra
#       Ignorar espaços no começo de cada resposta - ex: "Seu nome?  Daniel" = "Daniel" 
# - 
#
#




print('Hi, thank you to participate this survey!')
print('Please answer the following questions with sincerity.')
print("\n")


#Lista de mensagens  para erros de acordo com as regras
error01 = 'The field is blank. Please fill the field accordangly.'
error02 = 'The name can not have numbers in it. Please fill the field accordangly.'

print('What is your name?')
clientsName = input ()

print ('How old are you?')
clientsAge = input ()

## Mais tarde vou pesquisar sobre como adicionar opções
print ('What gender do you identify yourself?')
clientsGender = input ()
print ('Where are you from?')
clientsPlace = input()

print("\n" * 10)
print ('Please, check the information below.')
print ('You are '+ clientsName + ', a ' + clientsGender + ' with ' + str(int(clientsAge)) + ' years old.')
print ('Lives in ' + clientsPlace + '.')


print("\n" * 10)
