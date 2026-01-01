# PetManager
Ejercicio de JavaScript: clase PetManager para gestionar mascotas con validaciones, filtrado por dueño y actualización del estado de vacunación (Una versión un poco más difícil de ProductManager).

🐾 Consigna — PetManager 
Actividad Práctica: 

Crear una clase llamada PetManager que gestione mascotas dentro de una veterinaria.

Propiedades de la clase

La clase debe crearse con:

Un arreglo llamado pets, que comenzará vacío.

Un contador interno llamado id, que iniciará en 1 y se utilizará para asignar los IDs autoincrementables.

Propiedades de cada mascota

Cada mascota registrada debe contar con las siguientes propiedades:

id: identificador autoincrementable.

name: nombre de la mascota.

species: especie (perro, gato, ave, etc.).

age: edad en años.

owner: nombre del dueño.

vaccinated: valor booleano que indique si está vacunada o no.

notes: un campo opcional para anotaciones adicionales.

Debe realizar lo siguiente:

Validar que todos los campos obligatorios estén presentes.

Validar que el campo vaccinated sea estrictamente un booleano.

Evitar registrar dos mascotas que tengan el mismo nombre y el mismo dueño.

2. getPets()

Debe devolver el arreglo completo con todas las mascotas registradas.

3. getPetById(id)

Debe buscar y devolver la mascota cuyo ID coincida con el recibido.
Si no se encuentra ninguna, debe mostrar por consola el mensaje:

Pet not found

Métodos adicionales (nivel intermedio)
4. updateVaccinationStatus(id, status)

Debe permitir actualizar el estado de vacunación de una mascota.
Debe:

Verificar que la mascota exista.

Verificar que status sea un valor booleano.

Actualizar el campo vaccinated de la mascota.

Si el id no corresponde a ninguna mascota, debe mostrar:

Pet not found


Si el valor no es booleano, debe mostrar:

Invalid vaccination status

5. getPetsByOwner(owner)

Debe devolver todas las mascotas pertenecientes a un dueño específico.
Si el dueño no tiene mascotas registradas, debe mostrar:

No pets found for this owner
