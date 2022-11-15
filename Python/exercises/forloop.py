#Temporizador
#loop contando os milesimos com bool pra dizer quando ele chega a 10000

mili = 0
minu = 0
hour = 0
segs = 0
while True :
    segs = mili/60
    minu = segs/60
    hour = minu/60
    for i in range (1001):
        mili = mili + 1
    
    if segs >= 1 :
        print (str(int(hour)) + " " + str(int(minu)) + ":" + str(int(segs)))
        continue

