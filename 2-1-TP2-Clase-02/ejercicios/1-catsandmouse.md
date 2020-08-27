### Problema

Dos gatos y un raton estan posicionados en una linea recta. Se proporcionará sus respectivas posiciones iniciales. 

La tarea consiste en determinar que gato atrapa a que raton primero, asumiendo que el raton no se mueve y que los gatos (ambos) se mueven a igual velocidad. Si los gatos llegan al mismo tiempo (a donde esta el raton) esto permite que el raton escape mientras ellos pelean.

Se dan q "queries" en el formato (x,y,z) representando las respectivas posiciones para los gatos A y B, y para el raton C.

Desarrollar una funcion catAndMouse que devuelve una respuesta de la siguente forma:
* Si el gato A atrapa al raton primero, imprimir Cat A
* Si el gato B atrapa al raton primero, imprimir Cat B
* Si ambos gatos encuentran al raton al mismo tiempo, imprimir Mouse C

> Ejemplos 
> 
> Input 1 2 3
> 
> ![](https://s3.amazonaws.com/hr-challenge-images/0/1480434477-7418fccf34-cat.png)

> Output Cat B
>
> Input 1 3 2
> 
> ![](https://s3.amazonaws.com/hr-challenge-images/0/1480434557-601bef86ba-cat1.png)
> 
> Output Mouse C
