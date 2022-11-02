#plot import
import matplotlib.pyplot as plt

def plotLine(x0, y0, x1, y1):
    dx = x1 - x0
    dy = y1 - y0
    yi = 1

    dots = []

    if dy < 0:
        yi = -1
        dy = -dy
    
    D = (2 * dy) - dx
    y = y0

    for i in range (x0, x1 + 1):    
        plt.plot(i, y, 'go--', linewidth = 2, markersize = 6, linestyle='dashed')
        if D > 0:
            y = y + yi
            D = D + (2 * (dy - dx))
        else:
            D = D + 2*dy
        
    
    plt.show()
    

# Para correr escribe tus outputs:

x0 = int(input("Escribe el valor para x0: "))
y0 = int(input("Escribe el valor para y0: "))
x1 = int(input("Escribe el valor para x1: "))
y1 = int(input("Escribe el valor para y1: "))

plotLine(x0, y0, x1, y1)