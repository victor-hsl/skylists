import { getDocs, getDoc, doc, updateDoc } from "firebase/firestore";
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

export const updateLista = async (listId: string, userId: string, lista: Lista) => {
    const userRef = createCollection(userId);
    const listRef = doc(userRef, listId);

    if(listRef){
        await updateDoc(listRef, lista);
    }
}