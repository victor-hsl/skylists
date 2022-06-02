import { getDocs } from "firebase/firestore";
import { Lista } from "../types/Lista";
import { createCollection } from "../util/FirebaseConnection";

export const getListas = async (uid: string) => {
    let list : Lista[] = [];
    const userLists = createCollection(uid);
    const listsDocs = await getDocs(userLists);
    listsDocs.docs.forEach((lista) => {
        list.push({
            items: lista.data().items,
            nome: lista.data().nome,
            status: lista.data().status
        });
    });
    return list;
}