import { getDocs, getDoc, doc } from "firebase/firestore";
import { Lista } from "../types/Lista";
import { createCollection } from "../util/FirebaseConnection";

export const getListas = async (uid: string) => {
    let list : Lista[] = [];
    const userLists = createCollection(uid);
    const listsDocs = await getDocs(userLists);
    listsDocs.docs.forEach((lista) => {
        list.push({
            done: lista.data().done,
            id: lista.id,
            icone: lista.data().icone,
            items: lista.data().items,
            nome: lista.data().nome
        });
    });
    return list;
}

export const getList = async (owner: string, list: string) => {
    const collection = createCollection(owner);
    const docRef = doc(collection, list);
    const docSnap = await getDoc(docRef);
    
    if(docSnap.exists()){
        const lista = <Lista>{
            done: docSnap.data().done,
            id: docSnap.id,
            icone: docSnap.data().icone,
            items: docSnap.data().items,
            nome: docSnap.data().nome
        };
        return lista;
    } else {
        return <Lista>{};
    }
}