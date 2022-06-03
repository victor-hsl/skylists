export type Lista = {
    id: string;
    icone: string;
    items: [{
        description: string;
        status: string;
    }];
    nome: string;
    status: string;
}