export type Lista = {
    done: boolean;
    id: string;
    icone: string;
    items: [{
        description: string;
        status: boolean;
    }];
    nome: string;
}