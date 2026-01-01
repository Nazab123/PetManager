class PetManager{
    constructor(){
        this.pets = []
        this.idCounter = 1
    }
    addpet(id, name, spicie, age, owner, vaccinated, notes){
        
        if(!id|!name|!spicie|!age|!owner|!vaccinated|!notes){
            throw new Error (`todos los campos deben completarse`)
        }

        if (typeof vaccinated  !== "boolean"){
            throw new Error (`vacunación debe ser de tipo boolean`)
        }

        //forma con map
        let names = this.pets.map(function(caracteristica){
            return caracteristica.name
        })

        //forma con for
        let owners=[]

        for (let i=0; i < this.pets.length; i++){
            let pet = this.pets[i]
            owners.push(pet.owner)
        }

        if(owners[i] === owner && names[i]===name){
            throw new Error (`el dueño ${owner} y el nombre ${name} ya existe`)
        }
            
        let pet = {
            id: this.id,
            name,
            spicie,
            age,
            owner,
            vaccinated,
            notes
        }
        
    }

    getpets(){
        return this.pets
    }
    
}