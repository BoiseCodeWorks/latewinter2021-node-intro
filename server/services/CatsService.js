import { FAKEDB } from "../db/FAKEDB";

let id = 2

class CatsService{
    getAll() {
        return FAKEDB.cats
    }

    create(newCat) {
        newCat.id = id++
        FAKEDB.cats.push(newCat)
        return newCat
    }

    delete(id) {
        findCat(id)
        FAKEDB.cats = FAKEDB.cats.filter(c => c.id != id)
    }
    edit(editedCat, id) {
        const foundCat = findCat(id)
        Object.keys(editedCat).forEach(key => {
            foundCat[key] = editedCat[key]
        })
        return foundCat
    }

    getOne(id) {
        const foundCat = findCat(id)
        return foundCat
    }
}


function findCat(id) {
    let foundCat = FAKEDB.cats.find(c => c.id == id)
    if (!foundCat) { throw new Error("invalid id") }
    return foundCat
}

export const catsService = new CatsService()